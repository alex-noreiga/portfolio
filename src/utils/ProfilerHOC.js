import React, { Profiler } from 'react';

/**
 * Log profiler results to console in development mode
 */
const logProfiler = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
  // In development only
  if (process.env.NODE_ENV === 'development') {
    console.log({
      id,
      phase,
      actualDuration: Math.round(actualDuration * 100) / 100 + 'ms',
      baseDuration: Math.round(baseDuration * 100) / 100 + 'ms',
      startTime,
      commitTime
    });
  }
};

/**
 * Higher Order Component to wrap components with React Profiler
 * @param {React.Component} Component - Component to profile
 * @param {string} id - Identifier for the profiler
 * @returns {React.Component} - Component wrapped with profiler
 */
const withProfiler = (Component, id) => {
  const ProfiledComponent = (props) => (
    <Profiler id={id} onRender={logProfiler}>
      <Component {...props} />
    </Profiler>
  );
  
  // Set display name for better debugging
  ProfiledComponent.displayName = `withProfiler(${Component.displayName || Component.name || 'Component'})`;
  
  return ProfiledComponent;
};

export default withProfiler;
