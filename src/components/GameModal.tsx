import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { type GameModalProps } from '@/types';

const GameModal = ({
  isOpen,
  onClose,
  title,
  screenshots,
  activeScreenshot,
  onScreenshotChange,
}: GameModalProps) => {
  const currentIndex = screenshots.findIndex((s) => s === activeScreenshot);

  const handlePrevious = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : screenshots.length - 1;
    onScreenshotChange(screenshots[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = currentIndex < screenshots.length - 1 ? currentIndex + 1 : 0;
    onScreenshotChange(screenshots[nextIndex]);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="mx-4 w-full max-w-4xl">
        <DialogTitle className="mb-2 text-xl font-semibold">{title} - Скриншоты</DialogTitle>
        <DialogDescription className="mb-4 text-sm text-muted-foreground">
          Просмотр игры на различных устройствах
        </DialogDescription>

        <div className="relative">
          <img
            src={activeScreenshot || screenshots[0]}
            alt={`${title} screenshot`}
            className="h-96 w-full rounded-lg border border-border object-contain"
          />

          {screenshots.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 transform bg-background/80 backdrop-blur-sm"
                onClick={handlePrevious}
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 transform bg-background/80 backdrop-blur-sm"
                onClick={handleNext}
                aria-label="Next screenshot"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>

        {screenshots.length > 1 && (
          <div className="mt-4 flex gap-2 overflow-x-auto">
            {screenshots.map((screenshot, index) => (
              <button
                key={index}
                onClick={() => onScreenshotChange(screenshot)}
                aria-label={`Screenshot ${index + 1}`}
                className={`h-12 w-20 flex-shrink-0 rounded border-2 transition-all ${
                  activeScreenshot === screenshot
                    ? 'border-primary'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <img
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  className="h-full w-full rounded object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default GameModal;
