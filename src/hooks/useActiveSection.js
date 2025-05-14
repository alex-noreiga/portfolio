import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to track the active section based on intersection observer
 * @param {Array} sectionIds - Array of section IDs to track
 * @param {number} offset - Offset from the top to determine when a section is active
 * @returns {string} - The current active section ID
 */
const useActiveSection = (sectionIds = [], offset = 100) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');
  const observersRef = useRef({});

  useEffect(() => {
    // Clean up previous observers
    Object.values(observersRef.current).forEach(observer => {
      observer.disconnect();
    });

    // Create new set of observers
    const observers = {};
    
    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: `-${offset}px 0px -${100 - offset}% 0px`,
          threshold: 0.1
        }
      );

      observer.observe(element);
      observers[id] = observer;
    });

    observersRef.current = observers;

    return () => {
      // Clean up observers on unmount
      Object.values(observers).forEach(observer => {
        observer.disconnect();
      });
    };
  }, [sectionIds, offset]);

  return activeSection;
};

export default useActiveSection;
