import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './global.css';
import Routers from '@/app/routers';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Routers />
  </StrictMode>
);
