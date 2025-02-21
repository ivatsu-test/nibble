import { create, StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

interface GameState {
  currentQuestionIndex: number;
  prize: string;
  isGameOver: boolean;
  setCurrentQuestionIndex: (_index: number) => void;
  setGameOver: () => void;
  setGameStart: () => void;
  setPrize: (_prize: string) => void;
}

const middlewares = (f: StateCreator<GameState>) => persist(f, { name: 'game-store' });

const useGameStore = create<GameState>()(
  middlewares(((set) => ({
    currentQuestionIndex: 0,
    prize: '',
    isGameOver: false,
    setCurrentQuestionIndex: (index: number) => set({ currentQuestionIndex: index }),
    setPrize: (value: string) => set(({ prize: value })),
    setGameStart: () => set({ isGameOver: false, prize: '', currentQuestionIndex: 0 }),
    setGameOver: () => set({ isGameOver: true }),
  }))),
);

export default useGameStore;
