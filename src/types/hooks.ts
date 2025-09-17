/**
 * Hook-related types and return value interfaces
 */

import { type DeviceType, type GameData } from './game-data';

// Game page state hook return type
export interface UseGamePageStateReturn {
  selectedDevice: DeviceType;
  setSelectedDevice: (device: DeviceType) => void;
  isModalOpen: boolean;
  activeScreenshot: string | null;
  setActiveScreenshot: (screenshot: string | null) => void;
  handleDeviceModalOpen: (device: DeviceType) => void;
  handleModalClose: () => void;
}

// Game page state hook props
export interface UseGamePageStateProps {
  gameData: GameData;
}

// Async hook state
export interface AsyncState<T> {
  data?: T;
  error?: Error;
  loading: boolean;
}

// Async hook return type
export interface UseAsyncReturn<T> extends AsyncState<T> {
  execute: () => Promise<void>;
}

// Local storage hook return type
export interface UseLocalStorageReturn<T> {
  value: T;
  setValue: (value: T | ((prev: T) => T)) => void;
  removeValue: () => void;
}

// Media query hook return type
export interface UseMediaQueryReturn {
  matches: boolean;
  supported: boolean;
}

// Theme hook return type
export interface UseThemeReturn {
  theme: 'light' | 'dark' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
}

// Toast hook return type
export interface UseToastReturn {
  toast: (options: ToastOptions) => void;
  dismiss: (toastId?: string) => void;
  toasts: Toast[];
}

export interface ToastOptions {
  title?: string;
  description?: string;
  variant?: 'default' | 'success' | 'error' | 'warning';
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export interface Toast extends ToastOptions {
  id: string;
  open: boolean;
}

// WebSocket hook return type
export interface UseWebSocketReturn {
  readyState: number;
  lastMessage: unknown | null;
  sendMessage: (message: unknown) => boolean;
  connect: () => void;
  disconnect: () => void;
}
