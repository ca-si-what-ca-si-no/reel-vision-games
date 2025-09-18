import React, { useState } from 'react';

import { type GameCardData } from '@/components/games/GameCard';
import { GermanyFlag, RussiaFlag, USAFlag } from '@/components/ui/flag-icons';

export function useGamesData() {
  const [selectedGame, setSelectedGame] = useState<GameCardData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isKenoModalOpen, setIsKenoModalOpen] = useState(false);

  const gameTypes: GameCardData[] = [
    {
      title: 'Keno',
      description: 'Классическая лотерейная игра с современным интерфейсом и настраиваемым RTP',
      features: {
        volatility: 3,
        rtp: '94-97%',
        platforms: ['Web', 'Mobile', 'Desktop'],
        languages: [
          <RussiaFlag key="ru" size={20} />,
          <USAFlag key="en" size={20} />,
          <GermanyFlag key="de" size={20} />,
        ],
        maxMultiplier: '1000x',
      },
      badge: 'Популярное',
      image: '/lovable-uploads/8ae2ba9a-e0ad-4bcd-a93e-b8aec9370099.png',
    },
    {
      title: 'Space Ball',
      description: 'Crash-игра с уникальным дизайном и механиками',
      features: {
        volatility: 5,
        rtp: '98%',
        platforms: ['Web', 'Mobile'],
        languages: [<RussiaFlag key="ru" size={20} />, <USAFlag key="en" size={20} />],
        maxMultiplier: 'x50000',
      },
      badge: 'Скоро в продаже',
      image: '/space-ball-chrome.svg',
    },
    {
      title: 'Arrow Shot',
      description: 'Crash-игра с уникальным дизайном и механиками',
      features: {
        volatility: 5,
        rtp: '98%',
        platforms: ['Web', 'Mobile'],
        languages: [<RussiaFlag key="ru" size={20} />, <USAFlag key="en" size={20} />],
        maxMultiplier: 'x50000',
      },
      badge: 'Скоро в продаже',
      image: '/lovable-uploads/arrow-shot-game.png',
    },
    {
      title: 'Hilo',
      description: 'Увлекательная карточная игра с простыми правилами и высокой отдачей',
      features: {
        volatility: 4,
        rtp: '96-98%',
        platforms: ['Web', 'Mobile'],
        languages: [<RussiaFlag key="ru" size={20} />, <USAFlag key="en" size={20} />],
        maxMultiplier: '2500x',
      },
      badge: 'Скоро в продаже',
      image: '/lovable-uploads/e380c354-c9a4-40de-a8be-22c8b6d81ccf.png',
    },
  ];

  const handleGameDetailsClick = (game: GameCardData) => {
    setSelectedGame(game);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedGame(null);
  };

  const handleKenoModalOpen = () => {
    setIsKenoModalOpen(true);
  };

  const handleKenoModalClose = () => {
    setIsKenoModalOpen(false);
  };

  return {
    gameTypes,
    selectedGame,
    isModalOpen,
    isKenoModalOpen,
    handleGameDetailsClick,
    handleModalClose,
    handleKenoModalOpen,
    handleKenoModalClose,
  };
}
