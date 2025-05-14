import React from 'react';
import PortfolioWebsite from './components/PortfolioWebsite';
import ErrorBoundary from './components/common/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <PortfolioWebsite />
    </ErrorBoundary>
  );
}

export default App;
