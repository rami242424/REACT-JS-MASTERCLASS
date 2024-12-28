import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = (ReactDOM as any).createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

