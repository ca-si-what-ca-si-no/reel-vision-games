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
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    const updateActiveSection = () => {
      const triggerPoint = window.innerHeight * 0.3; // Триггер на 30% высоты экрана сверху

      // Находим все секции с их позициями
      const sectionElements = sections.map(section => {
        const element = document.getElementById(section.id);
        return {
          id: section.id,
          element,
          top: element?.getBoundingClientRect().top || 0,
          bottom: element?.getBoundingClientRect().bottom || 0
        };
      }).filter(section => section.element); // Убираем секции без элементов

      // Ищем активную секцию - первую секцию, чей верх находится выше триггера,
      // но низ находится ниже триггера (секция пересекает триггерную линию)
      let newActiveSection = activeSection;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.top <= triggerPoint && section.bottom > triggerPoint) {
          newActiveSection = section.id;
          break;
        }
      }

      // Если ни одна секция не пересекает триггер, берем ближайшую сверху
      if (newActiveSection === activeSection) {
        for (let i = 0; i < sectionElements.length; i++) {
          const section = sectionElements[i];
          if (section.top > triggerPoint) {
            if (i > 0) {
              newActiveSection = sectionElements[i - 1].id;
            }
            break;
          }
        }
      }

      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollProgress();
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
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