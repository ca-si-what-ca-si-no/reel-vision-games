import DeviceSelector from '@/components/DeviceSelector';
import { type DeviceType, type GameData } from '@/types';

interface DevicePreviewButtonProps {
  device: DeviceType;
  gameData: GameData;
  onDeviceModalOpen: (device: DeviceType) => void;
}

const DevicePreviewButton = ({ device, gameData, onDeviceModalOpen }: DevicePreviewButtonProps) => {
  const deviceLabels: Record<DeviceType, string> = {
    mobile: 'Мобильная версия',
    tablet: 'Планшетная версия',
    desktop: 'Десктопная версия',
  };

  const deviceAlts: Record<DeviceType, string> = {
    mobile: 'Mobile preview',
    tablet: 'Tablet preview',
    desktop: 'Desktop preview',
  };

  return (
    <button
      onClick={() => onDeviceModalOpen(device)}
      className="group rounded-lg border border-border bg-card p-4 transition-all duration-200 hover:border-primary/50"
    >
      <div className="mb-3 aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-background to-muted">
        <img src={gameData.image} alt={deviceAlts[device]} className="h-full w-full object-cover" />
      </div>
      <span className="text-sm font-medium">{deviceLabels[device]}</span>
    </button>
  );
};

interface GamePreviewSectionProps {
  selectedDevice: DeviceType;
  onDeviceChange: (device: DeviceType) => void;
  onDeviceModalOpen: (device: DeviceType) => void;
  gameData: GameData;
  title?: string;
  className?: string;
}

export default function GamePreviewSection({
  selectedDevice,
  onDeviceChange,
  onDeviceModalOpen,
  gameData,
  title = 'Превью игры',
  className = '',
}: GamePreviewSectionProps) {
  const devices: DeviceType[] = ['mobile', 'tablet', 'desktop'];

  return (
    <div className={className}>
      <h2 className="mb-4 text-xl font-semibold sm:mb-6 sm:text-2xl">{title}</h2>
      <DeviceSelector
        selectedDevice={selectedDevice}
        onDeviceChange={onDeviceChange}
        className="mb-6"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {devices.map((device) => (
          <DevicePreviewButton
            key={device}
            device={device}
            gameData={gameData}
            onDeviceModalOpen={onDeviceModalOpen}
          />
        ))}
      </div>
    </div>
  );
}
