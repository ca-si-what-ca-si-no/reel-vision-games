import { useEffect, useRef } from 'react';

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxBackground = ({ children, speed = 0.3, className = "" }: ParallaxBackgroundProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const yPos = scrolled * speed;
      element.style.transform = `translate3d(0, ${yPos}px, 0)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={elementRef} className={`${className} will-change-transform`}>
      {children}
    </div>
  );
};

export default ParallaxBackground;