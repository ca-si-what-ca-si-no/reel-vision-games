import { useState, useEffect } from 'react';
import GameLayout from '@/components/GameLayout';
import DeviceSelector from '@/components/DeviceSelector';
import GameModal from '@/components/GameModal';
import GameFeatureList from '@/components/GameFeatureList';
import TechnicalSpecs from '@/components/TechnicalSpecs';
import { hiloGameData } from '@/services/gameDataService';
import { DeviceType } from '@/types';

const Hilo = () => {
  const [selectedDevice, setSelectedDevice] = useState<DeviceType>('mobile');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeScreenshot, setActiveScreenshot] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gameFeatures = [
    { label: "Высокий RTP до 97%", value: "97%" },
    { label: "Средне-высокая волатильность", value: "4 stars" },
    { label: "Простые и понятные правила", value: "Easy" },
    { label: "Быстрые раунды", value: "Fast" },
    { label: "Стратегические элементы", value: "Strategy" },
    { label: "Множители до x500", value: "x500" },
    { label: "Карточная механика", value: "Cards" },
    { label: "Мобильная оптимизация", value: "Mobile" }
  ];

  const handleDeviceModalOpen = (device: DeviceType) => {
    setSelectedDevice(device);
    setActiveScreenshot(hiloGameData.screenshots?.[device]?.[0] || null);
    setIsModalOpen(true);
  };

  return (
    <GameLayout gameData={hiloGameData}>
      <div className="bg-card border border-border rounded-lg p-6">
        <p className="text-muted-foreground leading-relaxed mb-6">
          HiLo Games Pack - это захватывающие игры с элементами стратегии и удачи.
          Угадывайте, будет ли следующая карта выше или ниже текущей, и стройте
          цепочки правильных предсказаний для увеличения множителя!
        </p>

        <TechnicalSpecs
          features={{
            ...hiloGameData.features,
            minBet: "0.50",
            maxBet: "250.00",
            roundTime: "~10сек",
            autoPlay: false
          }}
        />
      </div>

      <GameFeatureList features={gameFeatures} />

      <div>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Механика игры</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-green-400">Простота</h3>
            <p className="text-sm text-muted-foreground">
              Всего два варианта: "Выше" или "Ниже". Простые правила,
              которые легко понять за секунды.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-blue-400">Стратегия</h3>
            <p className="text-sm text-muted-foreground">
              Анализируйте карты, рассчитывайте вероятности и принимайте
              взвешенные решения.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/20 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-purple-400">Цепочки</h3>
            <p className="text-sm text-muted-foreground">
              Стройте длинные цепочки правильных предсказаний для
              максимальных выигрышей.
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
                src={hiloGameData.image}
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
                src={hiloGameData.image}
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
                src={hiloGameData.image}
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
        title={hiloGameData.title}
        screenshots={hiloGameData.screenshots?.[selectedDevice] || []}
        activeScreenshot={activeScreenshot}
        onScreenshotChange={setActiveScreenshot}
      />
    </GameLayout>
  );
};

export default Hilo;