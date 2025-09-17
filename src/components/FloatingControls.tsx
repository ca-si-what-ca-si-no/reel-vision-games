import React, { useRef, useState } from 'react';

import { X } from 'lucide-react';

interface FloatingControlsProps {
  onClose: () => void;
}

const DRAG_THRESHOLD = 8;
const BUTTON_SIZE = 48;
const SCREEN_EDGE_OFFSET = 10;
const SCREEN_TOP_OFFSET = 50;
const SCREEN_BOTTOM_OFFSET = 50;
const DRAG_SCALE_DELAY = 300;

const FloatingControls: React.FC<FloatingControlsProps> = ({ onClose }) => {
  const [position, setPosition] = useState({ x: 20, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const controlsRef = useRef<HTMLDivElement>(null);
  const wasDraggingRef = useRef(false);

  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!controlsRef.current) {
      return;
    }

    const rect = controlsRef.current.getBoundingClientRect();
    const touch = e.touches[0] as Touch;

    setDragOffset({
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    });
    setStartPos({ x: touch.clientX, y: touch.clientY });
    setIsDragging(false);
    e.preventDefault();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!controlsRef.current) {
      return;
    }

    const touch = e.touches[0] as Touch;
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

    const maxX = window.innerWidth - BUTTON_SIZE;
    const maxY = window.innerHeight - BUTTON_SIZE;

    setPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY)),
    });
    e.preventDefault();
  };

  const handleTouchEnd = () => {
    if (!isDragging) {
      return;
    }

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    let finalX = position.x;
    let finalY = position.y;

    const distanceToLeft = position.x;
    const distanceToRight = screenWidth - position.x - BUTTON_SIZE;
    const distanceToTop = position.y;
    const distanceToBottom = screenHeight - position.y - BUTTON_SIZE;

    const minDistance = Math.min(distanceToLeft, distanceToRight, distanceToTop, distanceToBottom);

    if (minDistance === distanceToLeft) {
      finalX = SCREEN_EDGE_OFFSET;
    } else if (minDistance === distanceToRight) {
      finalX = screenWidth - BUTTON_SIZE - SCREEN_EDGE_OFFSET;
    } else if (minDistance === distanceToTop) {
      finalY = SCREEN_TOP_OFFSET;
    } else {
      finalY = screenHeight - BUTTON_SIZE - SCREEN_BOTTOM_OFFSET;
    }

    setPosition({ x: finalX, y: finalY });
    setIsDragging(false);
    window.setTimeout(() => {
      wasDraggingRef.current = false;
    }, DRAG_SCALE_DELAY);
  };

  const handleClose = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div
      ref={controlsRef}
      className="fixed z-[60] h-12 w-12 transition-all duration-300"
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
        className={`flex h-12 w-12 cursor-move items-center justify-center rounded-full border border-white/30 bg-black/80 backdrop-blur-md transition-all duration-300 ${isDragging ? 'bg-black/90 shadow-2xl' : 'shadow-lg'} hover:bg-black/90 active:bg-black/95`}
      >
        <X className="h-5 w-5 text-white" strokeWidth={2} />
      </button>

      {/* Индикатор перетаскивания */}
      {isDragging && (
        <div className="pointer-events-none absolute -inset-2 animate-pulse rounded-full border-2 border-white/40" />
      )}
    </div>
  );
};

export default FloatingControls;
