import { GameData } from '@/types';

export const kenoGameData: GameData = {
  title: "Keno",
  description: "Классическая лотерейная игра с современным интерфейсом и настраиваемым RTP",
  features: {
    volatility: 5,
    rtp: "98%",
    platforms: ["Адаптивный дизайн: Web · Mobile"],
    languages: ["RU", "EN"],
    maxMultiplier: "x750",
    provablyFair: true
  },
  badge: "Популярное",
  image: "/lovable-uploads/8ae2ba9a-e0ad-4bcd-a93e-b8aec9370099.png",
  screenshots: {
    mobile: [
      "/lovable-uploads/8ae2ba9a-e0ad-4bcd-a93e-b8aec9370099.png"
    ],
    tablet: [
      "/lovable-uploads/8ae2ba9a-e0ad-4bcd-a93e-b8aec9370099.png"
    ],
    desktop: [
      "/lovable-uploads/8ae2ba9a-e0ad-4bcd-a93e-b8aec9370099.png"
    ]
  }
};

export const crashGameData: GameData = {
  title: "Crash Games Pack",
  description: "Полный пакет краш-игр с уникальными механиками и дизайном",
  features: {
    volatility: 5,
    rtp: "95-99%",
    platforms: ["Web", "Mobile", "Desktop", "API"],
    languages: ["RU", "EN", "DE", "FR"],
    maxMultiplier: "10000x"
  },
  badge: "Премиум",
  image: "/lovable-uploads/aa5cce58-9344-45d3-b4c0-73fb27e55af4.png",
  screenshots: {
    mobile: [
      "/lovable-uploads/aa5cce58-9344-45d3-b4c0-73fb27e55af4.png"
    ],
    tablet: [
      "/lovable-uploads/aa5cce58-9344-45d3-b4c0-73fb27e55af4.png"
    ],
    desktop: [
      "/lovable-uploads/aa5cce58-9344-45d3-b4c0-73fb27e55af4.png"
    ]
  }
};

export const hiloGameData: GameData = {
  title: "HiLo Games Pack",
  description: "Захватывающие игры HiLo с элементами стратегии и удачи",
  features: {
    volatility: 4,
    rtp: "97%",
    platforms: ["Web", "Mobile", "API"],
    languages: ["RU", "EN"],
    maxMultiplier: "x500"
  },
  badge: "Новинка",
  image: "/lovable-uploads/f5a02d8d-e3e0-406a-8a0c-5f95c13b0e62.png",
  screenshots: {
    mobile: [
      "/lovable-uploads/f5a02d8d-e3e0-406a-8a0c-5f95c13b0e62.png"
    ],
    tablet: [
      "/lovable-uploads/f5a02d8d-e3e0-406a-8a0c-5f95c13b0e62.png"
    ],
    desktop: [
      "/lovable-uploads/f5a02d8d-e3e0-406a-8a0c-5f95c13b0e62.png"
    ]
  }
};

export class GameDataService {
  static getGameData(gameType: 'keno' | 'crash' | 'hilo'): GameData {
    switch (gameType) {
      case 'keno':
        return kenoGameData;
      case 'crash':
        return crashGameData;
      case 'hilo':
        return hiloGameData;
      default:
        throw new Error(`Unknown game type: ${gameType}`);
    }
  }

  static getAllGames(): GameData[] {
    return [kenoGameData, crashGameData, hiloGameData];
  }
}