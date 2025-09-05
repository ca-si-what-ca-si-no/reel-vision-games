import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  initialText: string;
  typeText: string;
  speed?: number;
  className?: string;
}

const TypewriterText = ({ initialText, typeText, speed = 50, className = "" }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState(initialText);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Начинаем печатать после небольшой задержки
    const startDelay = setTimeout(() => {
      setIsTyping(true);
    }, 1000);

    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    if (!isTyping || currentIndex >= typeText.length) return;

    const timer = setTimeout(() => {
      setDisplayText(initialText + typeText.slice(0, currentIndex + 1));
      setCurrentIndex(currentIndex + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, isTyping, initialText, typeText, speed]);

  return (
    <span className={className}>
      {displayText}
      {isTyping && currentIndex < typeText.length && (
        <span className="animate-pulse text-accent">|</span>
      )}
    </span>
  );
};

export default TypewriterText;