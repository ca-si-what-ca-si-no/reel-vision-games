import { useGamesData } from '@/hooks/game/useGamesData';

import GameDetailsModal from './games/GameDetailsModal';
import GameGrid from './games/GameGrid';
import GamesHeader from './games/GamesHeader';
import KenoDemoModal from './games/KenoDemoModal';

const Games = () => {
  const {
    gameTypes,
    selectedGame,
    isModalOpen,
    isKenoModalOpen,
    handleGameDetailsClick,
    handleModalClose,
    handleKenoModalOpen,
    handleKenoModalClose,
  } = useGamesData();
  return (
    <section
      id="games"
      className="snap-section relative flex min-h-screen items-center justify-center"
    >
      <div className="container mx-auto w-full px-6">
        <GamesHeader />

        <GameGrid
          games={gameTypes}
          onGameDetailsClick={handleGameDetailsClick}
          onKenoPlayClick={handleKenoModalOpen}
        />

        <GameDetailsModal isOpen={isModalOpen} onClose={handleModalClose} game={selectedGame} />

        <KenoDemoModal isOpen={isKenoModalOpen} onClose={handleKenoModalClose} />
      </div>
    </section>
  );
};
export default Games;
