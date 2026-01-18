import { ApplicationShell } from '@features/shell/ApplicationShell';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// eslint-disable-next-line
import './globals.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ApplicationShell />
    </BrowserRouter>
  </StrictMode>,
);
