import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export interface GameSettings {
  soundEnabled: boolean;
  animationsEnabled: boolean;
  autoPlay: boolean;
  betAmount: number;
  currency: 'USD' | 'EUR' | 'GBP';
}

export interface GameSession {
  id: string;
  gameType: string;
  startTime: Date;
  endTime?: Date;
  totalBet: number;
  totalWin: number;
  rounds: number;
}

export interface GameState {
  // Settings
  settings: GameSettings;
  updateSettings: (settings: Partial<GameSettings>) => void;

  // Session
  currentSession: GameSession | null;
  sessionHistory: GameSession[];
  startSession: (gameType: string) => void;
  endSession: () => void;

  // Game state
  isPlaying: boolean;
  balance: number;
  lastWin: number;
  setIsPlaying: (playing: boolean) => void;
  updateBalance: (amount: number) => void;
  addWin: (amount: number) => void;

  // Actions
  reset: () => void;
}

const defaultSettings: GameSettings = {
  soundEnabled: true,
  animationsEnabled: true,
  autoPlay: false,
  betAmount: 10,
  currency: 'USD',
};

export const useGameStore = create<GameState>()(
  devtools(
    persist(
      immer((set) => ({
        // Initial state
        settings: defaultSettings,
        currentSession: null,
        sessionHistory: [],
        isPlaying: false,
        balance: 1000,
        lastWin: 0,

        // Settings actions
        updateSettings: (newSettings) =>
          set((state) => {
            Object.assign(state.settings, newSettings);
          }),

        // Session actions
        startSession: (gameType) =>
          set((state) => {
            state.currentSession = {
              id: crypto.randomUUID(),
              gameType,
              startTime: new Date(),
              totalBet: 0,
              totalWin: 0,
              rounds: 0,
            };
          }),

        endSession: () =>
          set((state) => {
            if (state.currentSession) {
              state.currentSession.endTime = new Date();
              state.sessionHistory.push(state.currentSession);
              state.currentSession = null;
            }
          }),

        // Game state actions
        setIsPlaying: (playing) =>
          set((state) => {
            state.isPlaying = playing;
          }),

        updateBalance: (amount) =>
          set((state) => {
            state.balance += amount;
            if (state.currentSession) {
              if (amount < 0) {
                state.currentSession.totalBet += Math.abs(amount);
              }
              state.currentSession.rounds += 1;
            }
          }),

        addWin: (amount) =>
          set((state) => {
            state.lastWin = amount;
            state.balance += amount;
            if (state.currentSession) {
              state.currentSession.totalWin += amount;
            }
          }),

        // Reset action
        reset: () =>
          set((state) => {
            state.settings = defaultSettings;
            state.currentSession = null;
            state.sessionHistory = [];
            state.isPlaying = false;
            state.balance = 1000;
            state.lastWin = 0;
          }),
      })),
      {
        name: 'game-storage',
        partialize: (state) => ({
          settings: state.settings,
          balance: state.balance,
          sessionHistory: state.sessionHistory,
        }),
      }
    )
  )
);
