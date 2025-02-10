import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import App from '@/app/routers';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
