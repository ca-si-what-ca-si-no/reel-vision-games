import { Monitor, Smartphone, Tablet } from 'lucide-react';

import { cn } from '@/lib/utils';
import { type DeviceSelectorProps, type DeviceType } from '@/types';

const DeviceSelector = ({ selectedDevice, onDeviceChange, className }: DeviceSelectorProps) => {
  const devices: { type: DeviceType; icon: React.ReactNode; label: string }[] = [
    { type: 'mobile', icon: <Smartphone className="h-4 w-4" />, label: 'Мобильный' },
    { type: 'tablet', icon: <Tablet className="h-4 w-4" />, label: 'Планшет' },
    { type: 'desktop', icon: <Monitor className="h-4 w-4" />, label: 'Компьютер' },
  ];

  return (
    <div className={cn('grid grid-cols-3 gap-2 sm:gap-3', className)}>
      {devices.map(({ type, icon, label }) => (
        <button
          key={type}
          onClick={() => onDeviceChange(type)}
          className={cn(
            'flex flex-col items-center justify-center rounded-lg border-2 p-3 transition-all duration-200 sm:p-4',
            'hover:scale-105 hover:border-primary/50',
            selectedDevice === type
              ? 'border-primary bg-primary/10 text-primary'
              : 'border-border bg-card hover:bg-accent'
          )}
        >
          {icon}
          <span className="mt-1 text-xs font-medium sm:text-sm">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default DeviceSelector;
