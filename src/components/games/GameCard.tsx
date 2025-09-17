import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';

interface GameCardFeatures {
  volatility: number;
  rtp: string;
  platforms: string[];
  languages: React.ReactElement[];
  maxMultiplier: string;
}

export interface GameCardData {
  title: string;
  description: string;
  features: GameCardFeatures;
  badge: string;
  image: string;
}

interface GameCardProps {
  game: GameCardData;
  onDetailsClick?: (game: GameCardData) => void;
  onKenoPlayClick?: () => void;
}

const VolatilityStars = ({ volatility }: { volatility: number }) => (
  <div className="flex space-x-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        className={`h-4 w-4 ${
          star <= volatility ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ))}
  </div>
);

const GameBadge = ({ badge }: { badge: string }) => {
  const isPopular = badge === 'Популярное';

  return (
    <span
      className={`absolute right-4 top-4 z-10 rounded-full px-3 py-1 text-xs font-semibold ${
        isPopular
          ? 'bg-gradient-to-r from-green-400 to-green-600 text-white'
          : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
      }`}
    >
      {badge}
    </span>
  );
};

const GameFeatures = ({ features }: { features: GameCardFeatures }) => (
  <div className="space-y-3">
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">Волатильность:</span>
      <VolatilityStars volatility={features.volatility} />
    </div>

    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">RTP:</span>
      <span className="text-sm font-medium">{features.rtp}</span>
    </div>

    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">Платформы:</span>
      <span className="text-sm font-medium">{features.platforms.join(', ')}</span>
    </div>

    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">Языки:</span>
      <div className="flex space-x-1">{features.languages}</div>
    </div>

    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">Множитель:</span>
      <span className="text-sm font-medium">{features.maxMultiplier}</span>
    </div>
  </div>
);

export default function GameCard({ game, onDetailsClick, onKenoPlayClick }: GameCardProps) {
  const getGameRoute = (title: string) => {
    const routes: Record<string, string> = {
      Keno: '/keno',
      Hilo: '/hilo',
      'Space Ball': '/crash',
      'Arrow Shot': '/crash',
    };
    return routes[title] || '/';
  };

  const isAvailable = game.badge === 'Популярное';

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <GameBadge badge={game.badge} />

      <div className="aspect-video overflow-hidden">
        <img
          src={game.image}
          alt={game.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="mb-3 text-xl font-bold">{game.title}</h3>
        <p className="mb-4 text-sm text-muted-foreground">{game.description}</p>

        <GameFeatures features={game.features} />

        <div className="mt-6 flex gap-3">
          {isAvailable ? (
            game.title === 'Keno' ? (
              <>
                {onKenoPlayClick && (
                  <Button onClick={onKenoPlayClick} className="flex-1">
                    Играть!
                  </Button>
                )}
                <Button asChild variant="outline">
                  <Link to={getGameRoute(game.title)}>Подробнее</Link>
                </Button>
              </>
            ) : (
              <Button asChild className="flex-1">
                <Link to={getGameRoute(game.title)}>Подробнее</Link>
              </Button>
            )
          ) : (
            <Button variant="outline" className="flex-1" disabled>
              Скоро в продаже
            </Button>
          )}

          {onDetailsClick && (
            <Button variant="outline" onClick={() => onDetailsClick(game)} className="px-4">
              Детали
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
