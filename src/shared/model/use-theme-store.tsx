import { applyTheme } from '@/widgets/navbar/lib';
import { createStore } from 'zustand';
import { persist } from 'zustand/middleware';

export type ThemeStoreState = 'light' | 'dark' | 'system';

const THEME_STORAGE_KEY = 'theme-storage';
const DEFAULT_THEME: ThemeStoreState = 'system';

type ThemeStoreActions = {
  setTheme: (theme: ThemeStoreState) => void;
};

type ThemeStore = {
  theme: ThemeStoreState;
} & ThemeStoreActions;

const initializeTheme = (): ThemeStoreState => {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  let theme: ThemeStoreState = DEFAULT_THEME;

  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      theme = parsed.state.theme;
    } catch (e) {
      console.error(`Failed to parse theme from ${THEME_STORAGE_KEY}:`, e);
    }
  }

  applyTheme(theme);
  return theme;
};

export const themeStore = createStore<ThemeStore>()(
  persist(
    set => ({
      theme: initializeTheme(),
      setTheme: (theme: ThemeStoreState) => {
        applyTheme(theme);
        set({ theme });
      },
    }),
    {
      name: THEME_STORAGE_KEY,
    }
  )
);
