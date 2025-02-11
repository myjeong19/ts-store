import { themeStore } from './theme-store';
import { useStore } from 'zustand';

export const useTheme = () => {
  const theme = useStore(themeStore, state => state.theme);
  const setTheme = useStore(themeStore, state => state.setTheme);

  return { theme, setTheme };
};
