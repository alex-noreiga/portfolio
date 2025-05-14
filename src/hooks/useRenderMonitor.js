import { useEffect, useRef } from 'react';

/**
 * Custom hook for monitoring component render performance
 * @param {string} componentName - Name of the component to monitor
 * @param {Array} deps - Dependencies to track for re-renders
 */
const useRenderMonitor = (componentName, deps = []) => {
  // Initialize refs
  const renderCount = useRef(0);
  const prevDeps = useRef(deps);
  const mountTime = useRef(performance.now());

  // Skip monitoring logic in production
  const isDevelopment = process.env.NODE_ENV === 'development';

  // Monitor initial render time (always call hooks, conditionally execute logic)
  useEffect(() => {
    if (!isDevelopment) return;

    const renderTime = performance.now() - mountTime.current;
    console.log(`[Performance] ${componentName} initial render: ${renderTime.toFixed(2)}ms`);

    // Store the ref in a variable for the cleanup function
    const renderCountRef = renderCount;

    return () => {
      if (isDevelopment) {
        console.log(`[Performance] ${componentName} total renders: ${renderCountRef.current}`);
      }
    };
  }, [componentName, isDevelopment]);

  // Monitor dependency changes that cause re-renders
  useEffect(() => {
    if (!isDevelopment) return;

    // Skip the first render
    if (renderCount.current === 0) {
      renderCount.current++;
      return;
    }

    // Find which dependency changed
    const changedDeps = deps.reduce((result, dep, index) => {
      if (prevDeps.current[index] !== dep) {
        result.push(`deps[${index}]`);
      }
      return result;
    }, []);

    console.log(
      `[Performance] ${componentName} re-render #${renderCount.current}: ` +
        `Changed dependencies: ${changedDeps.join(', ') || 'none'}`
    );

    renderCount.current++;
    prevDeps.current = deps;
  }, [componentName, deps, isDevelopment]);
};

export default useRenderMonitor;
