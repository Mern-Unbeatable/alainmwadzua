import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  reportWebVitals,
  detectLongTasks,
  checkPerformanceBudget,
} from './utils/web-vitals';

const isLocalDev =
  typeof window !== 'undefined' &&
  (window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

if (isLocalDev) {
  reportWebVitals();
  detectLongTasks();
  checkPerformanceBudget();
}
