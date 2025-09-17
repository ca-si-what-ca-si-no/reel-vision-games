import { useQuery, useMutation, UseQueryResult, UseMutationResult } from '@tanstack/react-query';
import { apiClient } from './client';

// Types
export interface Game {
  id: string;
  name: string;
  type: 'keno' | 'crash' | 'hilo' | 'slots' | 'dice';
  description: string;
  minBet: number;
  maxBet: number;
  rtp: number;
  volatility: 'low' | 'medium' | 'high';
  features: string[];
  thumbnail: string;
  isActive: boolean;
}

export interface GameResult {
  gameId: string;
  sessionId: string;
  bet: number;
  win: number;
  multiplier: number;
  timestamp: Date;
  details: Record<string, unknown>;
}

export interface PlayGameRequest {
  gameId: string;
  bet: number;
  autoPlay?: boolean;
  settings?: Record<string, unknown>;
}

export interface PlayGameResponse {
  result: GameResult;
  balance: number;
  nextSeed?: string;
}

// API functions
const gamesApi = {
  getAll: () => apiClient.get<Game[]>('/games'),
  getById: (id: string) => apiClient.get<Game>(`/games/${id}`),
  play: (data: PlayGameRequest) => apiClient.post<PlayGameResponse>('/games/play', data),
  getHistory: (gameId?: string) => {
    const endpoint = gameId ? `/games/history?gameId=${gameId}` : '/games/history';
    return apiClient.get<GameResult[]>(endpoint);
  },
};

// React Query hooks
export function useGames(): UseQueryResult<Game[], Error> {
  return useQuery({
    queryKey: ['games'],
    queryFn: gamesApi.getAll,
  });
}

export function useGame(id: string): UseQueryResult<Game, Error> {
  return useQuery({
    queryKey: ['games', id],
    queryFn: () => gamesApi.getById(id),
    enabled: !!id,
  });
}

export function usePlayGame(): UseMutationResult<PlayGameResponse, Error, PlayGameRequest> {
  return useMutation({
    mutationFn: gamesApi.play,
  });
}

export function useGameHistory(gameId?: string): UseQueryResult<GameResult[], Error> {
  return useQuery({
    queryKey: ['gameHistory', gameId],
    queryFn: () => gamesApi.getHistory(gameId),
  });
}