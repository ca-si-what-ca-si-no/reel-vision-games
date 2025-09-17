import GameCard, { type GameCardData } from './GameCard';

interface GameGridProps {
  games: GameCardData[];
  onGameDetailsClick?: (game: GameCardData) => void;
  onKenoPlayClick?: () => void;
}

export default function GameGrid({ games, onGameDetailsClick, onKenoPlayClick }: GameGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
      {games.map((game) => (
        <GameCard
          key={game.title}
          game={game}
          onDetailsClick={onGameDetailsClick}
          onKenoPlayClick={onKenoPlayClick}
        />
      ))}
    </div>
  );
}
