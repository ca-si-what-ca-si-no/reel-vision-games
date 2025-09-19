import { useEffect, useState } from 'react';

const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: 'hero', label: 'Главная' },
    { id: 'games', label: 'Игры' },
    { id: 'integrators', label: 'Интеграторам' },
    { id: 'contact', label: 'Контакты' }
  ];

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    const updateActiveSection = () => {
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id),
        offset: document.getElementById(section.id)?.getBoundingClientRect().top || 0
      }));

      // Находим секцию, которая ближе всего к центру экрана
      const centerY = window.innerHeight / 2;
      const activeEl = sectionElements.reduce((prev, current) => {
        const prevDistance = Math.abs(prev.offset - centerY);
        const currentDistance = Math.abs(current.offset - centerY);
        return currentDistance < prevDistance ? current : prev;
      });

      if (activeEl && activeEl.id !== activeSection) {
        setActiveSection(activeEl.id);
      }
    };

    const handleScroll = () => {
      updateScrollProgress();
      updateActiveSection();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, sections]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      {/* Progress Bar */}
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      {/* Section Dots */}
      <div className="section-indicator">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`section-dot ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => scrollToSection(section.id)}
            title={section.label}
            aria-label={`Перейти к секции ${section.label}`}
          />
        ))}
      </div>
    </>
  );
};

export default ScrollIndicator;