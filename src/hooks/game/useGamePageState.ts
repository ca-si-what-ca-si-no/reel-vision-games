import { useEffect, useState } from 'react';

import { type DeviceType, type GameData } from '@/types';

interface UseGamePageStateProps {
  gameData: GameData;
}

export function useGamePageState({ gameData }: UseGamePageStateProps) {
  const [selectedDevice, setSelectedDevice] = useState<DeviceType>('mobile');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeScreenshot, setActiveScreenshot] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDeviceModalOpen = (device: DeviceType) => {
    setSelectedDevice(device);
    setActiveScreenshot(gameData.screenshots?.[device]?.[0] || null);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return {
    selectedDevice,
    setSelectedDevice,
    isModalOpen,
    activeScreenshot,
    setActiveScreenshot,
    handleDeviceModalOpen,
    handleModalClose,
  };
}
