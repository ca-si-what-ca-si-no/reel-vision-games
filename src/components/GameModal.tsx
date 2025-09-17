import { GameModalProps } from '@/types';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GameModal = ({
  isOpen,
  onClose,
  title,
  screenshots,
  activeScreenshot,
  onScreenshotChange
}: GameModalProps) => {
  const currentIndex = screenshots.findIndex(s => s === activeScreenshot);

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
      <DialogContent className="max-w-4xl w-full mx-4">
        <DialogTitle className="text-xl font-semibold mb-2">
          {title} - Скриншоты
        </DialogTitle>
        <DialogDescription className="text-sm text-muted-foreground mb-4">
          Просмотр игры на различных устройствах
        </DialogDescription>

        <div className="relative">
          <img
            src={activeScreenshot || screenshots[0]}
            alt={`${title} screenshot`}
            className="w-full h-96 object-contain rounded-lg border border-border"
          />

          {screenshots.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                onClick={handlePrevious}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                onClick={handleNext}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </>
          )}
        </div>

        {screenshots.length > 1 && (
          <div className="flex gap-2 mt-4 overflow-x-auto">
            {screenshots.map((screenshot, index) => (
              <button
                key={index}
                onClick={() => onScreenshotChange(screenshot)}
                className={`flex-shrink-0 w-20 h-12 rounded border-2 transition-all ${
                  activeScreenshot === screenshot
                    ? 'border-primary'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <img
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full h-full object-cover rounded"
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