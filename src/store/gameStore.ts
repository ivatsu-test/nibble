import { create, StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

interface GameState {
  currentQuestionIndex: number;
  score: number;
  isGameOver: boolean;
  setCurrentQuestionIndex: (_index: number) => void;
  incrementScore: () => void;
  setGameStart: () => void;
  setGameOver: () => void;
}

const middlewares = (f: StateCreator<GameState>) => persist(f, { name: 'game-store' });

const useGameStore = create<GameState>()(
  middlewares(((set) => ({
    currentQuestionIndex: 0,
    score: 0,
    isGameOver: false,
    setCurrentQuestionIndex: (index: number) => set({ currentQuestionIndex: index }),
    incrementScore: () => set((state: GameState) => ({ score: state.score + 1 })),
    setGameStart: () => set({ isGameOver: false, score: 0, currentQuestionIndex: 0 }),
    setGameOver: () => set({ isGameOver: true }),
  }))),
);

export default useGameStore;
