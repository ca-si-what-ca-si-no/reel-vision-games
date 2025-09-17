/**
 * Business domain types - core business logic and domain concepts
 */

// User and authentication domain
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: UserRole;
  preferences: UserPreferences;
  createdAt: string;
  updatedAt: string;
}

export type UserRole = 'user' | 'admin' | 'operator';

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: string;
  notifications: NotificationSettings;
  gameSettings: GameUserSettings;
}

export interface NotificationSettings {
  email: boolean;
  push: boolean;
  inApp: boolean;
}

export interface GameUserSettings {
  autoPlay: boolean;
  soundEnabled: boolean;
  animationsEnabled: boolean;
  defaultBetAmount?: number;
}

// Game session and betting domain
export interface GameSession {
  id: string;
  gameType: import('./game-data').GameType;
  userId: string;
  startTime: string;
  endTime?: string;
  totalBets: number;
  totalWins: number;
  netResult: number;
  rounds: GameRound[];
}

export interface GameRound {
  id: string;
  sessionId: string;
  betAmount: number;
  winAmount: number;
  multiplier?: number;
  timestamp: string;
  gameSpecificData: Record<string, unknown>;
}

// Financial domain
export interface Balance {
  currency: string;
  amount: number;
  lockedAmount: number;
  availableAmount: number;
}

export interface Transaction {
  id: string;
  userId: string;
  type: TransactionType;
  amount: number;
  currency: string;
  status: TransactionStatus;
  reference?: string;
  gameSessionId?: string;
  timestamp: string;
}

export type TransactionType = 'deposit' | 'withdrawal' | 'bet' | 'win' | 'bonus';
export type TransactionStatus = 'pending' | 'completed' | 'failed' | 'cancelled';

// System and configuration domain
export interface SystemConfig {
  maintenanceMode: boolean;
  allowedCountries: string[];
  supportedCurrencies: string[];
  gameSettings: SystemGameSettings;
  limits: SystemLimits;
}

export interface SystemGameSettings {
  maxBetAmount: number;
  minBetAmount: number;
  maxWinAmount: number;
  houseEdge: number;
}

export interface SystemLimits {
  dailyBetLimit: number;
  weeklyBetLimit: number;
  monthlyBetLimit: number;
  sessionTimeLimit: number;
}
