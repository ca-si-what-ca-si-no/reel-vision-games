/**
 * UI component prop types and interfaces
 */

import { type DeviceType } from './game-data';

// Game Modal component props
export interface GameModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  screenshots: string[];
  activeScreenshot: string | null;
  onScreenshotChange: (screenshot: string) => void;
}

// Device Selector component props
export interface DeviceSelectorProps {
  selectedDevice: DeviceType;
  onDeviceChange: (device: DeviceType) => void;
  className?: string;
}

// Animated Background component props
export interface AnimatedBackgroundProps {
  variant?: 'default' | 'minimal';
  className?: string;
}

// Game Preview Section component props
export interface GamePreviewSectionProps {
  selectedDevice: DeviceType;
  onDeviceChange: (device: DeviceType) => void;
  onDeviceModalOpen: (device: DeviceType) => void;
  gameData: import('./game-data').GameData;
  title?: string;
  className?: string;
}

// Game Description component props
export interface GameDescriptionProps {
  gameData: import('./game-data').GameData;
  description: string;
  technicalFeatures?: Record<string, string | boolean | number>;
  className?: string;
}

// Common component props
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonVariantProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export interface LoadingStateProps {
  loading?: boolean;
  loadingText?: string;
}
