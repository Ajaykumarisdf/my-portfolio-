import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { initAnalytics, initSectionTracking } from './utils/analytics.js'

// Initialize Google Analytics 4
initAnalytics();

// Start section tracking once DOM is ready
window.addEventListener('load', () => {
  setTimeout(initSectionTracking, 2000); // wait for content to render
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
