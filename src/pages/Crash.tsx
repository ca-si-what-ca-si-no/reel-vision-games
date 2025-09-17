import GameDescription from '@/components/game/GameDescription';
import GamePreviewSection from '@/components/game/GamePreviewSection';
import GameFeatureList from '@/components/GameFeatureList';
import GameLayout from '@/components/GameLayout';
import GameModal from '@/components/GameModal';
import { useGameConfiguration } from '@/hooks/game/useGameConfiguration';
import { useGamePageState } from '@/hooks/game/useGamePageState';
import { crashGameData } from '@/services/gameDataService';

const Crash = () => {
  const gameConfig = useGameConfiguration('crash');
  const {
    selectedDevice,
    setSelectedDevice,
    isModalOpen,
    activeScreenshot,
    setActiveScreenshot,
    handleDeviceModalOpen,
    handleModalClose,
  } = useGamePageState({ gameData: crashGameData });

  return (
    <GameLayout gameData={crashGameData}>
      <GameDescription
        gameData={crashGameData}
        description={gameConfig.description}
        technicalFeatures={gameConfig.technicalFeatures}
      />

      <GameFeatureList features={gameConfig.features} />

      <div>
        <h2 className="mb-4 text-xl font-semibold sm:mb-6 sm:text-2xl">Ключевые особенности</h2>
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-red-500/20 bg-gradient-to-br from-red-500/10 to-orange-500/10 p-6">
            <h3 className="mb-3 text-lg font-semibold text-red-400">Экстремальные множители</h3>
            <p className="text-sm text-muted-foreground">
              Достигайте невероятных множителей до 10000x! Чем дольше вы ждете, тем больше
              потенциальный выигрыш, но и риск краха увеличивается.
            </p>
          </div>
          <div className="rounded-lg border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6">
            <h3 className="mb-3 text-lg font-semibold text-blue-400">Стратегический геймплей</h3>
            <p className="text-sm text-muted-foreground">
              Используйте автоплей, устанавливайте лимиты и разрабатывайте собственные стратегии для
              максимизации прибыли.
            </p>
          </div>
        </div>
      </div>

      <GamePreviewSection
        selectedDevice={selectedDevice}
        onDeviceChange={setSelectedDevice}
        onDeviceModalOpen={handleDeviceModalOpen}
        gameData={crashGameData}
      />

      <GameModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title={crashGameData.title}
        screenshots={crashGameData.screenshots?.[selectedDevice] || []}
        activeScreenshot={activeScreenshot}
        onScreenshotChange={setActiveScreenshot}
      />
    </GameLayout>
  );
};

export default Crash;
