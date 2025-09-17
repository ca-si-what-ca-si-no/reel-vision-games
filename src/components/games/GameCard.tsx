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

const GameBadge = ({ badge }: { badge: string }) => {
  const isPopular = badge === 'Популярное';

  return (
    <span
      className={`absolute left-4 top-4 z-20 rounded-full px-4 py-2 text-sm font-bold shadow-lg ${
        isPopular
          ? 'bg-gradient-to-r from-teal-400 to-blue-500 text-white'
          : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
      }`}
    >
      {badge}
    </span>
  );
};

const KenoNumbers = () => {
  const numbers = [1, 2, 4, 6, 7, 8, 13, 13, 20, 25, 28, 39];
  const selectedNumbers = [2, 4, 25, 39];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {numbers.map((num, index) => (
        <div
          key={`${num}-${index}`}
          className={`absolute flex items-center justify-center rounded-lg font-bold text-white transition-all duration-500 ${
            selectedNumbers.includes(num)
              ? 'bg-gradient-to-br from-green-400 to-green-600 shadow-lg'
              : 'bg-slate-700/60'
          }`}
          style={{
            width: index % 3 === 0 ? '48px' : '40px',
            height: index % 3 === 0 ? '48px' : '40px',
            top: `${10 + ((index * 12) % 70)}%`,
            left: `${5 + ((index * 15) % 80)}%`,
            fontSize: index % 3 === 0 ? '18px' : '16px',
            zIndex: selectedNumbers.includes(num) ? 10 : 5,
          }}
        >
          {num}
        </div>
      ))}
      {/* Multiplier indicator */}
      <div className="absolute bottom-4 right-4 z-20 text-lg font-bold text-green-400">+x2,0</div>
    </div>
  );
};

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
    <div className="hover:shadow-3xl group relative overflow-hidden rounded-3xl border border-slate-700/50 bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl transition-all duration-300 hover:scale-105">
      <GameBadge badge={game.badge} />

      {/* Game Background with Numbers for Keno */}
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900">
        {game.title === 'Keno' ? (
          <KenoNumbers />
        ) : (
          <img
            src={game.image}
            alt={game.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        )}

        {/* Game Title Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <h3 className="text-5xl font-bold tracking-wider text-white drop-shadow-2xl">
            {game.title}
          </h3>
        </div>
      </div>

      {/* Card Content */}
      <div className="bg-gradient-to-b from-slate-800 to-slate-900 p-6">
        <div className="mb-4">
          <h4 className="mb-2 text-xl font-bold text-white">{game.title}</h4>
          <p className="text-sm leading-relaxed text-slate-300">{game.description}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {isAvailable ? (
            game.title === 'Keno' ? (
              <>
                {onKenoPlayClick && (
                  <Button
                    onClick={onKenoPlayClick}
                    className="flex-1 transform rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-purple-700"
                  >
                    Играть!
                  </Button>
                )}
                <Button
                  asChild
                  variant="outline"
                  className="rounded-xl border-slate-600 px-6 py-3 text-slate-300 transition-all duration-300 hover:bg-slate-700 hover:text-white"
                >
                  <Link to={getGameRoute(game.title)}>Подробнее</Link>
                </Button>
              </>
            ) : (
              <Button
                asChild
                className="flex-1 transform rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-purple-700"
              >
                <Link to={getGameRoute(game.title)}>Подробнее</Link>
              </Button>
            )
          ) : (
            <Button
              variant="outline"
              className="flex-1 rounded-xl border-slate-600 bg-slate-800/50 py-3 text-slate-400"
              disabled
            >
              Скоро в продаже
            </Button>
          )}

          {onDetailsClick && (
            <Button
              variant="outline"
              onClick={() => onDetailsClick(game)}
              className="rounded-xl border-slate-600 px-6 py-3 text-slate-300 transition-all duration-300 hover:bg-slate-700 hover:text-white"
            >
              Детали
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
