import { Dialog, DialogContent } from '@/components/ui/dialog';

interface KenoDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function KenoDemoModal({ isOpen, onClose }: KenoDemoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="h-[95vh] w-full max-w-7xl p-0">
        <iframe
          src="https://dev-dot-casino-games-462502.lm.r.appspot.com/keno"
          className="h-full w-full rounded-lg border-0"
          title="Keno Demo Game"
          allow="fullscreen"
        />
      </DialogContent>
    </Dialog>
  );
}
