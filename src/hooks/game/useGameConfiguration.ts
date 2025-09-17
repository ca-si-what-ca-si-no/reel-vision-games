import { gameConfigurations } from '@/services/gameData/gameConfigurations';
import { type GameType } from '@/services/gameData/gameDataTypes';

export function useGameConfiguration(gameType: GameType) {
  const config = gameConfigurations[gameType];

  if (!config) {
    throw new Error(`Game configuration not found for type: ${gameType}`);
  }

  return config;
}
