import { useState, useEffect } from 'react';
import GameLayout from '@/components/GameLayout';
import DeviceSelector from '@/components/DeviceSelector';
import GameModal from '@/components/GameModal';
import GameFeatureList from '@/components/GameFeatureList';
import TechnicalSpecs from '@/components/TechnicalSpecs';
import { crashGameData } from '@/services/gameDataService';
import { DeviceType } from '@/types';

const Crash = () => {
  const [selectedDevice, setSelectedDevice] = useState<DeviceType>('mobile');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeScreenshot, setActiveScreenshot] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gameFeatures = [
    { label: "Максимальный множитель до 10000x", value: "10000x" },
    { label: "Настраиваемый RTP от 95% до 99%", value: "95-99%" },
    { label: "Поддержка всех платформ", value: "Cross-platform" },
    { label: "Мультиязычность (4 языка)", value: "Multilingual" },
    { label: "API интеграция", value: "API Ready" },
    { label: "Высокая волатильность", value: "5 stars" },
    { label: "Уникальные механики краш-игр", value: "Unique" },
    { label: "Современный дизайн", value: "Modern UI" }
  ];

  const handleDeviceModalOpen = (device: DeviceType) => {
    setSelectedDevice(device);
    setActiveScreenshot(crashGameData.screenshots?.[device]?.[0] || null);
    setIsModalOpen(true);
  };

  return (
    <GameLayout gameData={crashGameData}>
      <div className="bg-card border border-border rounded-lg p-6">
        <p className="text-muted-foreground leading-relaxed mb-6">
          Crash Games Pack представляет собой полную коллекцию краш-игр с уникальными механиками
          и современным дизайном. Игроки делают ставки и наблюдают за растущим множителем,
          который может "упасть" в любой момент. Цель - вовремя забрать выигрыш до краха!
        </p>

        <TechnicalSpecs
          features={{
            ...crashGameData.features,
            minBet: "0.10",
            maxBet: "1000.00",
            roundTime: "~30сек",
            autoPlay: true
          }}
        />
      </div>

      <GameFeatureList features={gameFeatures} />

      <div>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Ключевые особенности</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-red-400">Экстремальные множители</h3>
            <p className="text-sm text-muted-foreground">
              Достигайте невероятных множителей до 10000x! Чем дольше вы ждете,
              тем больше потенциальный выигрыш, но и риск краха увеличивается.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-blue-400">Стратегический геймплей</h3>
            <p className="text-sm text-muted-foreground">
              Используйте автоплей, устанавливайте лимиты и разрабатывайте
              собственные стратегии для максимизации прибыли.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Превью игры</h2>
        <DeviceSelector
          selectedDevice={selectedDevice}
          onDeviceChange={setSelectedDevice}
          className="mb-6"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <button
            onClick={() => handleDeviceModalOpen('mobile')}
            className="group bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all duration-200"
          >
            <div className="aspect-video bg-gradient-to-br from-background to-muted rounded-lg mb-3 overflow-hidden">
              <img
                src={crashGameData.image}
                alt="Mobile preview"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-medium">Мобильная версия</span>
          </button>

          <button
            onClick={() => handleDeviceModalOpen('tablet')}
            className="group bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all duration-200"
          >
            <div className="aspect-video bg-gradient-to-br from-background to-muted rounded-lg mb-3 overflow-hidden">
              <img
                src={crashGameData.image}
                alt="Tablet preview"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-medium">Планшетная версия</span>
          </button>

          <button
            onClick={() => handleDeviceModalOpen('desktop')}
            className="group bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all duration-200"
          >
            <div className="aspect-video bg-gradient-to-br from-background to-muted rounded-lg mb-3 overflow-hidden">
              <img
                src={crashGameData.image}
                alt="Desktop preview"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-medium">Десктопная версия</span>
          </button>
        </div>
      </div>

      <GameModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={crashGameData.title}
        screenshots={crashGameData.screenshots?.[selectedDevice] || []}
        activeScreenshot={activeScreenshot}
        onScreenshotChange={setActiveScreenshot}
      />
    </GameLayout>
  );
};

export default Crash;