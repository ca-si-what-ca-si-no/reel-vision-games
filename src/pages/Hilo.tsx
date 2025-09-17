import GameDescription from '@/components/game/GameDescription';
import GamePreviewSection from '@/components/game/GamePreviewSection';
import GameFeatureList from '@/components/GameFeatureList';
import GameLayout from '@/components/GameLayout';
import GameModal from '@/components/GameModal';
import { useGameConfiguration } from '@/hooks/game/useGameConfiguration';
import { useGamePageState } from '@/hooks/game/useGamePageState';
import { hiloGameData } from '@/services/gameDataService';

const Hilo = () => {
  const gameConfig = useGameConfiguration('hilo');
  const {
    selectedDevice,
    setSelectedDevice,
    isModalOpen,
    activeScreenshot,
    setActiveScreenshot,
    handleDeviceModalOpen,
    handleModalClose,
  } = useGamePageState({ gameData: hiloGameData });

  return (
    <GameLayout gameData={hiloGameData}>
      <GameDescription
        gameData={hiloGameData}
        description={gameConfig.description}
        technicalFeatures={gameConfig.technicalFeatures}
      />

      <GameFeatureList features={gameConfig.features} />

      <div>
        <h2 className="mb-4 text-xl font-semibold sm:mb-6 sm:text-2xl">Механика игры</h2>
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-green-500/20 bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6">
            <h3 className="mb-3 text-lg font-semibold text-green-400">Простота</h3>
            <p className="text-sm text-muted-foreground">
              Всего два варианта: "Выше" или "Ниже". Простые правила, которые легко понять за
              секунды.
            </p>
          </div>
          <div className="rounded-lg border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6">
            <h3 className="mb-3 text-lg font-semibold text-blue-400">Стратегия</h3>
            <p className="text-sm text-muted-foreground">
              Анализируйте карты, рассчитывайте вероятности и принимайте взвешенные решения.
            </p>
          </div>
          <div className="rounded-lg border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-violet-500/10 p-6">
            <h3 className="mb-3 text-lg font-semibold text-purple-400">Цепочки</h3>
            <p className="text-sm text-muted-foreground">
              Стройте длинные цепочки правильных предсказаний для максимальных выигрышей.
            </p>
          </div>
        </div>
      </div>

      <GamePreviewSection
        selectedDevice={selectedDevice}
        onDeviceChange={setSelectedDevice}
        onDeviceModalOpen={handleDeviceModalOpen}
        gameData={hiloGameData}
      />

      <GameModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title={hiloGameData.title}
        screenshots={hiloGameData.screenshots?.[selectedDevice] || []}
        activeScreenshot={activeScreenshot}
        onScreenshotChange={setActiveScreenshot}
      />
    </GameLayout>
  );
};

export default Hilo;
