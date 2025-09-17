/**
 * Game data domain types - focused on game information and content
 */

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

// Game-related feature types
export interface GameFeature {
  label: string;
  value: string | number;
}

export interface GameConfiguration {
  features: GameFeature[];
  description: string;
  technicalFeatures: Record<string, string | boolean | number>;
  specialSections?: {
    title: string;
    content: React.ReactNode;
  }[];
}

export type GameType = 'keno' | 'crash' | 'hilo';

export interface GameDataRegistry {
  [K in GameType]: GameData;
}

export interface GameConfigurationRegistry {
  [K in GameType]: GameConfiguration;
}
