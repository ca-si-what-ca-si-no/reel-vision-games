export type DeviceType = 'mobile' | 'tablet' | 'desktop';

export interface GameFeatures {
  volatility: number;
  rtp: string;
  platforms: string[];
  languages: string[];
  maxMultiplier: string;
  provablyFair?: boolean;
}

export interface GameScreenshots {
  mobile: string[];
  tablet: string[];
  desktop: string[];
}

export interface GameData {
  title: string;
  description: string;
  features: GameFeatures;
  badge?: string;
  image: string;
  screenshots?: GameScreenshots;
}

export interface TechnicalSpec {
  category: string;
  items: Array<{
    name: string;
    value: string;
  }>;
}

export interface GameModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  screenshots: string[];
  activeScreenshot: string | null;
  onScreenshotChange: (screenshot: string) => void;
}

export interface DeviceSelectorProps {
  selectedDevice: DeviceType;
  onDeviceChange: (device: DeviceType) => void;
  className?: string;
}

export interface AnimatedBackgroundProps {
  variant?: 'default' | 'minimal';
  className?: string;
}
