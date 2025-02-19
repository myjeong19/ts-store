import { useState } from 'react';

export const LAYOUT = {
  GRID: 'grid',
  LIST: 'list',
} as const;

export type Layout = (typeof LAYOUT)[keyof typeof LAYOUT];

export const useLayout = () => {
  const [layout, setLayout] = useState<Layout>('grid');

  const toggleLayout = () => {
    setLayout(layout => (layout === LAYOUT.GRID ? LAYOUT.LIST : LAYOUT.GRID));
  };

  return { layout, toggleLayout };
};
