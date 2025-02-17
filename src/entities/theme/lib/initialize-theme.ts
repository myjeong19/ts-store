import { THEME_STORAGE_KEY } from '../constants';
import type { ThemeStoreState } from '../model/theme-store';
import { applyTheme } from './apply-theme';

const DEFAULT_THEME: ThemeStoreState = 'system';

export const initializeTheme = (): ThemeStoreState => {
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
