import { useEffect, useState } from 'react';

import DeviceSelector from '@/components/DeviceSelector';
import GameFeatureList from '@/components/GameFeatureList';
import GameLayout from '@/components/GameLayout';
import GameModal from '@/components/GameModal';
import TechnicalSpecs from '@/components/TechnicalSpecs';
import { hiloGameData } from '@/services/gameDataService';
import { type DeviceType } from '@/types';

const Hilo = () => {
  const [selectedDevice, setSelectedDevice] = useState<DeviceType>('mobile');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeScreenshot, setActiveScreenshot] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gameFeatures = [
    { label: 'Высокий RTP до 97%', value: '97%' },
    { label: 'Средне-высокая волатильность', value: '4 stars' },
    { label: 'Простые и понятные правила', value: 'Easy' },
    { label: 'Быстрые раунды', value: 'Fast' },
    { label: 'Стратегические элементы', value: 'Strategy' },
    { label: 'Множители до x500', value: 'x500' },
    { label: 'Карточная механика', value: 'Cards' },
    { label: 'Мобильная оптимизация', value: 'Mobile' },
  ];

  const handleDeviceModalOpen = (device: DeviceType) => {
    setSelectedDevice(device);
    setActiveScreenshot(hiloGameData.screenshots?.[device]?.[0] || null);
    setIsModalOpen(true);
  };

  return (
    <GameLayout gameData={hiloGameData}>
      <div className="rounded-lg border border-border bg-card p-6">
        <p className="mb-6 leading-relaxed text-muted-foreground">
          HiLo Games Pack - это захватывающие игры с элементами стратегии и удачи. Угадывайте, будет
          ли следующая карта выше или ниже текущей, и стройте цепочки правильных предсказаний для
          увеличения множителя!
        </p>

        <TechnicalSpecs
          features={{
            ...hiloGameData.features,
            minBet: '0.50',
            maxBet: '250.00',
            roundTime: '~10сек',
            autoPlay: false,
          }}
        />
      </div>

      <GameFeatureList features={gameFeatures} />

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
                src={hiloGameData.image}
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
                src={hiloGameData.image}
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
                src={hiloGameData.image}
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
        title={hiloGameData.title}
        screenshots={hiloGameData.screenshots?.[selectedDevice] || []}
        activeScreenshot={activeScreenshot}
        onScreenshotChange={setActiveScreenshot}
      />
    </GameLayout>
  );
};

export default Hilo;
