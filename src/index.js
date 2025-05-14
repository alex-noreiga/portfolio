import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker for offline capability and faster loads on repeat visits
serviceWorkerRegistration.register();

// Enable web vitals tracking
reportWebVitals(metric => {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(metric);
  }

  // In production, you could send to an analytics service
  // Example: if (process.env.NODE_ENV === 'production') {
  //   sendToAnalytics(metric);
  // }
});
