import { throttle } from './performanceUtils';

/**
 * Smoothly scrolls to a section with an offset
 * @param {string} sectionId - ID of the section to scroll to
 * @param {number} offset - Offset from the top in pixels
 */
export const scrollToSection = (sectionId, offset = 80) => {
  const section = document.getElementById(sectionId);
  if (!section) return;
  
  // Calculate position with offset
  const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - offset;
  
  // Get current scroll position
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  
  // If browser supports ScrollToOptions with behavior: smooth
  if ('scrollBehavior' in document.documentElement.style) {
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
    return;
  }
  
  // Fallback smooth scroll implementation for older browsers
  let startTime = null;
  const duration = 500; // ms
  
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }
  
  // Easing function for smooth scroll
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  
  requestAnimationFrame(animation);
};

/**
 * Throttled version of scrollToSection for event handlers
 */
export const throttledScrollToSection = throttle(scrollToSection, 300);
