import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import GameLayout from '@/components/GameLayout';
import DeviceSelector from '@/components/DeviceSelector';
import GameModal from '@/components/GameModal';
import GameFeatureList from '@/components/GameFeatureList';
import TechnicalSpecs from '@/components/TechnicalSpecs';
import FloatingControls from '@/components/FloatingControls';
import { kenoGameData } from '@/services/gameDataService';
import { DeviceType } from '@/types';

const Keno = () => {
  const [selectedDevice, setSelectedDevice] = useState<DeviceType>('mobile');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeScreenshot, setActiveScreenshot] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gameFeatures = [
    { label: "Настраиваемый RTP до 98%", value: "98%" },
    { label: "Волатильность от 1 до 5 звезд", value: "5" },
    { label: "Современный и интуитивно понятный интерфейс", value: "UI" },
    { label: "Адаптивный дизайн для всех устройств", value: "Responsive" },
    { label: "Поддержка Provably Fair", value: "Fair" },
    { label: "Высокие множители до x750", value: "x750" }
  ];

  const handleDeviceModalOpen = (device: DeviceType) => {
    setSelectedDevice(device);
    setActiveScreenshot(kenoGameData.screenshots?.[device]?.[0] || null);
    setIsModalOpen(true);
  };

  return (
    <GameLayout gameData={kenoGameData}>
      <div className="bg-card border border-border rounded-lg p-6">
        <p className="text-muted-foreground leading-relaxed mb-6">
          Keno - это захватывающая лотерейная игра, которая сочетает в себе простоту классической лотереи
          с современными игровыми механиками. Игроки выбирают числа из сетки, а затем наблюдают,
          как система случайным образом определяет выигрышные номера. Чем больше совпадений,
          тем выше выигрыш!
        </p>

        <TechnicalSpecs
          features={{
            ...kenoGameData.features,
            minBet: "0.25",
            maxBet: "500.00",
            roundTime: "~15сек",
            autoPlay: false
          }}
        />
      </div>

      <GameFeatureList features={gameFeatures} />

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
                src={kenoGameData.image}
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
                src={kenoGameData.image}
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
                src={kenoGameData.image}
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