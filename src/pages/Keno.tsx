import FloatingControls from '@/components/FloatingControls';
import GameDescription from '@/components/game/GameDescription';
import GamePreviewSection from '@/components/game/GamePreviewSection';
import GameFeatureList from '@/components/GameFeatureList';
import GameLayout from '@/components/GameLayout';
import GameModal from '@/components/GameModal';
import { useGameConfiguration } from '@/hooks/game/useGameConfiguration';
import { useGamePageState } from '@/hooks/game/useGamePageState';
import { kenoGameData } from '@/services/gameDataService';

const Keno = () => {
  const gameConfig = useGameConfiguration('keno');
  const {
    selectedDevice,
    setSelectedDevice,
    isModalOpen,
    activeScreenshot,
    setActiveScreenshot,
    handleDeviceModalOpen,
    handleModalClose,
  } = useGamePageState({ gameData: kenoGameData });

  return (
    <GameLayout gameData={kenoGameData}>
      <GameDescription
        gameData={kenoGameData}
        description={gameConfig.description}
        technicalFeatures={gameConfig.technicalFeatures}
      />

      <GameFeatureList features={gameConfig.features} />

      <GamePreviewSection
        selectedDevice={selectedDevice}
        onDeviceChange={setSelectedDevice}
        onDeviceModalOpen={handleDeviceModalOpen}
        gameData={kenoGameData}
      />

      <GameModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title={kenoGameData.title}
        screenshots={kenoGameData.screenshots?.[selectedDevice] || []}
        activeScreenshot={activeScreenshot}
        onScreenshotChange={setActiveScreenshot}
      />

      <FloatingControls />
    </GameLayout>
  );
};

export default Keno;
