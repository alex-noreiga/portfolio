import { useEffect, useRef } from 'react';

/**
 * Custom hook for monitoring component render performance
 * @param {string} componentName - Name of the component to monitor
 * @param {Array} deps - Dependencies to track for re-renders
 */
const useRenderMonitor = (componentName, deps = []) => {
  // Initialize refs regardless of environment
  const renderCount = useRef(0);
  const prevDeps = useRef(deps);
  const mountTime = useRef(performance.now());
  
  // Only execute monitoring logic in development
  if (process.env.NODE_ENV === 'development') {
    // Monitor initial render time
    useEffect(() => {
      const renderTime = performance.now() - mountTime.current;
      console.log(`[Performance] ${componentName} initial render: ${renderTime.toFixed(2)}ms`);
      
      // Make a copy of the ref value for the cleanup function
      const finalRenderCount = renderCount;
      
      return () => {
        console.log(`[Performance] ${componentName} total renders: ${finalRenderCount.current}`);
      };
    }, [componentName]);

    // Monitor dependency changes that cause re-renders
    useEffect(() => {
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
    }, [componentName, deps]);
  }
};

export default useRenderMonitor;
