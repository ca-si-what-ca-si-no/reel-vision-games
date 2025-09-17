import { useEffect, useState } from 'react';

import DeviceSelector from '@/components/DeviceSelector';
import GameFeatureList from '@/components/GameFeatureList';
import GameLayout from '@/components/GameLayout';
import GameModal from '@/components/GameModal';
import TechnicalSpecs from '@/components/TechnicalSpecs';
import { crashGameData } from '@/services/gameDataService';
import { type DeviceType } from '@/types';

const Crash = () => {
  const [selectedDevice, setSelectedDevice] = useState<DeviceType>('mobile');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeScreenshot, setActiveScreenshot] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gameFeatures = [
    { label: 'Максимальный множитель до 10000x', value: '10000x' },
    { label: 'Настраиваемый RTP от 95% до 99%', value: '95-99%' },
    { label: 'Поддержка всех платформ', value: 'Cross-platform' },
    { label: 'Мультиязычность (4 языка)', value: 'Multilingual' },
    { label: 'API интеграция', value: 'API Ready' },
    { label: 'Высокая волатильность', value: '5 stars' },
    { label: 'Уникальные механики краш-игр', value: 'Unique' },
    { label: 'Современный дизайн', value: 'Modern UI' },
  ];

  const handleDeviceModalOpen = (device: DeviceType) => {
    setSelectedDevice(device);
    setActiveScreenshot(crashGameData.screenshots?.[device]?.[0] || null);
    setIsModalOpen(true);
  };

  return (
    <GameLayout gameData={crashGameData}>
      <div className="rounded-lg border border-border bg-card p-6">
        <p className="mb-6 leading-relaxed text-muted-foreground">
          Crash Games Pack представляет собой полную коллекцию краш-игр с уникальными механиками и
          современным дизайном. Игроки делают ставки и наблюдают за растущим множителем, который
          может "упасть" в любой момент. Цель - вовремя забрать выигрыш до краха!
        </p>

        <TechnicalSpecs
          features={{
            ...crashGameData.features,
            minBet: '0.10',
            maxBet: '1000.00',
            roundTime: '~30сек',
            autoPlay: true,
          }}
        />
      </div>

      <GameFeatureList features={gameFeatures} />

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

      <div>
        <h2 className="mb-4 text-xl font-semibold sm:mb-6 sm:text-2xl">Превью игры</h2>
        <DeviceSelector
          selectedDevice={selectedDevice}
          onDeviceChange={setSelectedDevice}
          className="mb-6"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <button
            onClick={() => handleDeviceModalOpen('mobile')}
            className="group rounded-lg border border-border bg-card p-4 transition-all duration-200 hover:border-primary/50"
          >
            <div className="mb-3 aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-background to-muted">
              <img
                src={crashGameData.image}
                alt="Mobile preview"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-sm font-medium">Мобильная версия</span>
          </button>

          <button
            onClick={() => handleDeviceModalOpen('tablet')}
            className="group rounded-lg border border-border bg-card p-4 transition-all duration-200 hover:border-primary/50"
          >
            <div className="mb-3 aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-background to-muted">
              <img
                src={crashGameData.image}
                alt="Tablet preview"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-sm font-medium">Планшетная версия</span>
          </button>

          <button
            onClick={() => handleDeviceModalOpen('desktop')}
            className="group rounded-lg border border-border bg-card p-4 transition-all duration-200 hover:border-primary/50"
          >
            <div className="mb-3 aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-background to-muted">
              <img
                src={crashGameData.image}
                alt="Desktop preview"
                className="h-full w-full object-cover"
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
