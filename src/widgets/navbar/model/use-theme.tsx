import { themeStore } from '@/shared/model';
import { useStore } from 'zustand';

export const useTheme = () => {
  const setTheme = useStore(themeStore, state => state.setTheme);

  return { setTheme };
};
