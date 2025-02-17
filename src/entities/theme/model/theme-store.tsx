import { createStore } from 'zustand';
import { persist } from 'zustand/middleware';

import { applyTheme, initializeTheme } from '../lib';
import { THEME_STORAGE_KEY } from '../constants';

export type ThemeStoreState = 'light' | 'dark' | 'system';

type ThemeStoreActions = {
  setTheme: (theme: ThemeStoreState) => void;
};

type ThemeStore = {
  theme: ThemeStoreState;
} & ThemeStoreActions;

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
