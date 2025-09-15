import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';

interface FloatingControlsProps {
  onClose: () => void;
}

const FloatingControls: React.FC<FloatingControlsProps> = ({ onClose }) => {
  const [position, setPosition] = useState({ x: 20, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const controlsRef = useRef<HTMLDivElement>(null);
  const wasDraggingRef = useRef(false);

  const DRAG_THRESHOLD = 8;
  const TAP_MAX_MS = 250;
  const [touchStartTime, setTouchStartTime] = useState<number>(0);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!controlsRef.current) return;

    const rect = controlsRef.current.getBoundingClientRect();
    const touch = e.touches[0];

    setDragOffset({
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top
    });
    setStartPos({ x: touch.clientX, y: touch.clientY });
    setTouchStartTime(Date.now());
    setIsDragging(false);
    e.preventDefault();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!controlsRef.current) return;

    const touch = e.touches[0];
    const dx = touch.clientX - startPos.x;
    const dy = touch.clientY - startPos.y;
    const hasMoved = Math.hypot(dx, dy) > DRAG_THRESHOLD;

    if (!isDragging && hasMoved) {
      setIsDragging(true);
      wasDraggingRef.current = true;
    }

    if (!isDragging && !hasMoved) {
      e.preventDefault();
      return;
    }

    const newX = touch.clientX - dragOffset.x;
    const newY = touch.clientY - dragOffset.y;

    // Ограничиваем движение в пределах экрана
    const buttonSize = 48; // размер кнопки
    const maxX = window.innerWidth - buttonSize;
    const maxY = window.innerHeight - buttonSize;

    setPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY))
    });
    e.preventDefault();
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    // Притягиваем к ближайшей стороне экрана
    const buttonSize = 48;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const centerX = screenWidth / 2;
    const centerY = screenHeight / 2;
    
    let finalX = position.x;
    let finalY = position.y;
    
    // Определяем к какой стороне экрана ближе
    const distanceToLeft = position.x;
    const distanceToRight = screenWidth - position.x - buttonSize;
    const distanceToTop = position.y;
    const distanceToBottom = screenHeight - position.y - buttonSize;
    
    const minDistance = Math.min(distanceToLeft, distanceToRight, distanceToTop, distanceToBottom);
    
    if (minDistance === distanceToLeft) {
      finalX = 10; // отступ от левого края
    } else if (minDistance === distanceToRight) {
      finalX = screenWidth - buttonSize - 10; // отступ от правого края
    } else if (minDistance === distanceToTop) {
      finalY = 50; // отступ от верхнего края (учитываем notch)
    } else {
      finalY = screenHeight - buttonSize - 50; // отступ от нижнего края (учитываем home indicator)
    }
    
    setPosition({ x: finalX, y: finalY });
    setIsDragging(false);
    window.setTimeout(() => {
      wasDraggingRef.current = false;
    }, 300);
  }; 

  const handleClose = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div
      ref={controlsRef}
      className="fixed z-[60] w-12 h-12 transition-all duration-300"
      style={{
        left: position.x,
        top: position.y,
        touchAction: 'none',
        transform: isDragging ? 'scale(1.1)' : 'scale(1)',
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button
        onClick={(e) => {
          if (isDragging || wasDraggingRef.current) {
            e.preventDefault();
            e.stopPropagation();
            return;
          }
          handleClose(e);
        }}
        className={`
          w-12 h-12 rounded-full 
          bg-black/80 backdrop-blur-md border border-white/30
          flex items-center justify-center cursor-move
          transition-all duration-300
          ${isDragging ? 'shadow-2xl bg-black/90' : 'shadow-lg'}
          hover:bg-black/90 active:bg-black/95
        `}
      >
        <X className="w-5 h-5 text-white" strokeWidth={2} />
      </button>
      
      {/* Индикатор перетаскивания */}
      {isDragging && (
        <div className="absolute -inset-2 rounded-full border-2 border-white/40 animate-pulse pointer-events-none" />
      )}
    </div>
  );
};

export default FloatingControls;