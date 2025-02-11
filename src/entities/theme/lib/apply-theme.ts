import { type ThemeStoreState } from '../model/theme-store';

const THEME_CLASSES = ['light', 'dark'] as const;
const SYSTEM_DARK_MEDIA = '(prefers-color-scheme: dark)';

export const applyTheme = (theme: ThemeStoreState): void => {
  const root = document.documentElement;
  root.classList.remove(...THEME_CLASSES);

  if (theme === 'system') {
    const systemTheme = window.matchMedia(SYSTEM_DARK_MEDIA).matches ? 'dark' : 'light';
    root.classList.add(systemTheme);

    // 시스템 테마 변경 감지
    window.matchMedia(SYSTEM_DARK_MEDIA).addEventListener('change', e => {
      root.classList.remove(...THEME_CLASSES);
      root.classList.add(e.matches ? 'dark' : 'light');
    });
    return;
  }

  root.classList.add(theme);
};
