import React, { Component } from 'react';

/**
 * Error Boundary Component that catches JavaScript errors in its child component tree
 * and displays a fallback UI instead of crashing the whole application
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ errorInfo });

    // You could also log to an analytics or error monitoring service here
    // Example: logErrorToService(error, errorInfo);
  }

  render() {
    const { hasError, error, errorInfo } = this.state;
    const { fallback, children } = this.props;

    if (hasError) {
      // If a custom fallback component is provided, use it
      if (fallback) {
        return fallback(error, errorInfo);
      }

      // Default fallback UI
      return (
        <div className="p-6 m-4 border border-red-300 bg-red-50 rounded-lg">
          <h2 className="text-xl font-bold text-red-700 mb-2">Something went wrong</h2>
          <p className="text-red-600 mb-4">
            This section encountered an error. Please try refreshing the page.
          </p>
          {process.env.NODE_ENV === 'development' && (
            <details className="mt-4 p-4 bg-white rounded border border-red-200">
              <summary className="font-semibold cursor-pointer mb-2">
                Error details (development only)
              </summary>
              <p className="text-red-800 whitespace-pre-wrap">{error?.toString()}</p>
              <p className="mt-2 text-gray-700 whitespace-pre-wrap">{errorInfo?.componentStack}</p>
            </details>
          )}
        </div>
      );
    }

    // When there's no error, render children normally
    return children;
  }
}

export default ErrorBoundary;
