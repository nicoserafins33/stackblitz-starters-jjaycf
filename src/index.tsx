import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Header from './components/header';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <Header />
    <App />
  </StrictMode>
);
