import { Star } from 'lucide-react';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { COMMON_NUMBERS } from '@/constants/numbers';

import { type GameCardData } from './GameCard';

interface GameDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  game: GameCardData | null;
}

export default function GameDetailsModal({ isOpen, onClose, game }: GameDetailsModalProps) {
  if (!game) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <div className="space-y-6">
          <div className="aspect-video overflow-hidden rounded-lg">
            <img src={game.image} alt={game.title} className="h-full w-full object-cover" />
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-bold">{game.title}</h2>
            <p className="text-muted-foreground">{game.description}</p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <h3 className="font-semibold">Технические характеристики</h3>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Волатильность:</span>
                  <div className="flex space-x-1">
                    {[
                      COMMON_NUMBERS.STAR_RATING_1,
                      COMMON_NUMBERS.STAR_RATING_2,
                      COMMON_NUMBERS.STAR_RATING_3,
                      COMMON_NUMBERS.STAR_RATING_4,
                      COMMON_NUMBERS.STAR_RATING_5,
                    ].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= game.features.volatility
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">RTP:</span>
                  <span className="text-sm font-medium">{game.features.rtp}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Максимальный множитель:</span>
                  <span className="text-sm font-medium">{game.features.maxMultiplier}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">Поддержка</h3>

              <div className="space-y-2">
                <div>
                  <span className="text-sm text-muted-foreground">Платформы:</span>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {game.features.platforms.map((platform) => (
                      <span key={platform} className="rounded-full bg-secondary px-2 py-1 text-xs">
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-sm text-muted-foreground">Языки:</span>
                  <div className="mt-1 flex space-x-2">{game.features.languages}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-muted p-4">
            <div className="mb-2 flex items-center gap-2">
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  game.badge === 'Популярное'
                    ? 'bg-gradient-to-r from-green-400 to-green-600 text-white'
                    : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
                }`}
              >
                {game.badge}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              {game.badge === 'Популярное'
                ? 'Эта игра доступна для интеграции и пользуется популярностью среди игроков.'
                : 'Игра находится в разработке. Скоро будет доступна для интеграции.'}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
