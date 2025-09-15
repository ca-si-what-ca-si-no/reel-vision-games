import React, { useState, useRef, useEffect } from 'react';
import { X, RotateCcw } from 'lucide-react';

interface FloatingControlsProps {
  onClose: () => void;
}

const FloatingControls: React.FC<FloatingControlsProps> = ({ onClose }) => {
  const [position, setPosition] = useState({ x: 20, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isExpanded, setIsExpanded] = useState(false);
  const controlsRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!controlsRef.current) return;
    
    const rect = controlsRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    
    setDragOffset({
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top
    });
    setIsDragging(true);
    e.preventDefault();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const touch = e.touches[0];
    const newX = touch.clientX - dragOffset.x;
    const newY = touch.clientY - dragOffset.y;
    
    // Ограничиваем движение в пределах экрана
    const maxX = window.innerWidth - 80;
    const maxY = window.innerHeight - 80;
    
    setPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY))
    });
    e.preventDefault();
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const reloadGame = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    
    // Перезагружаем только содержимое iframe
    const gameIframe = document.querySelector('iframe[title="Keno Mobile Demo Game"]') as HTMLIFrameElement;
    if (gameIframe) {
      // Сохраняем исходный URL и перезагружаем iframe
      const currentSrc = gameIframe.src;
      gameIframe.src = 'about:blank';
      
      // Небольшая задержка перед загрузкой нового контента
      setTimeout(() => {
        const baseUrl = 'https://dev-dot-casino-games-462502.lm.r.appspot.com/keno';
        const timestamp = Date.now();
        gameIframe.src = `${baseUrl}?t=${timestamp}`;
      }, 100);
    }
  };

  const handleClose = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    onClose();
  };

  const toggleExpanded = () => {
    if (!isDragging) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div
      ref={controlsRef}
      className={`fixed z-[60] transition-all duration-300 ${
        isExpanded ? 'w-24 h-16' : 'w-14 h-14'
      }`}
      style={{
        left: position.x,
        top: position.y,
        touchAction: 'none'
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={toggleExpanded}
    >
      {/* Основной круг */}
      <div className={`
        bg-black/80 backdrop-blur-md border border-white/20 
        flex items-center justify-center cursor-move
        transition-all duration-300
        ${isExpanded ? 'rounded-2xl w-full h-full' : 'rounded-full w-14 h-14'}
        ${isDragging ? 'scale-110 shadow-2xl' : 'shadow-lg'}
        hover:bg-black/90
      `}>
        {!isExpanded ? (
          // Свернутое состояние - только иконка меню
          <div className="w-6 h-6 flex flex-col justify-center items-center gap-1">
            <div className="w-4 h-0.5 bg-white rounded-full"></div>
            <div className="w-4 h-0.5 bg-white rounded-full"></div>
            <div className="w-4 h-0.5 bg-white rounded-full"></div>
          </div>
        ) : (
          // Развернутое состояние - все кнопки
          <div className="flex items-center justify-around w-full h-full px-2">
            <button
              onClick={reloadGame}
              onTouchEnd={reloadGame}
              className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center hover:bg-blue-500/30 transition-colors"
            >
              <RotateCcw className="w-4 h-4 text-blue-400" />
            </button>
            
            <button
              onClick={handleClose}
              onTouchEnd={handleClose}
              className="w-8 h-8 rounded-full bg-red-500/20 border border-red-400/30 flex items-center justify-center hover:bg-red-500/30 transition-colors"
            >
              <X className="w-4 h-4 text-red-400" />
            </button>
          </div>
        )}
      </div>
      
      {/* Индикатор перетаскивания */}
      {isDragging && (
        <div className="absolute -inset-2 rounded-full border-2 border-white/30 animate-pulse pointer-events-none" />
      )}
    </div>
  );
};

export default FloatingControls;