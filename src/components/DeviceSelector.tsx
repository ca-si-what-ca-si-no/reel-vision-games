import { DeviceSelectorProps, DeviceType } from '@/types';
import { Smartphone, Monitor, Tablet } from 'lucide-react';
import { cn } from '@/lib/utils';

const DeviceSelector = ({
  selectedDevice,
  onDeviceChange,
  className
}: DeviceSelectorProps) => {
  const devices: { type: DeviceType; icon: React.ReactNode; label: string }[] = [
    { type: 'mobile', icon: <Smartphone className="w-4 h-4" />, label: 'Мобильный' },
    { type: 'tablet', icon: <Tablet className="w-4 h-4" />, label: 'Планшет' },
    { type: 'desktop', icon: <Monitor className="w-4 h-4" />, label: 'Компьютер' }
  ];

  return (
    <div className={cn("grid grid-cols-3 gap-2 sm:gap-3", className)}>
      {devices.map(({ type, icon, label }) => (
        <button
          key={type}
          onClick={() => onDeviceChange(type)}
          className={cn(
            "flex flex-col items-center justify-center p-3 sm:p-4 rounded-lg border-2 transition-all duration-200",
            "hover:scale-105 hover:border-primary/50",
            selectedDevice === type
              ? "border-primary bg-primary/10 text-primary"
              : "border-border bg-card hover:bg-accent"
          )}
        >
          {icon}
          <span className="text-xs sm:text-sm font-medium mt-1">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default DeviceSelector;