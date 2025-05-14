import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { throttledScrollToSection } from '../../utils/scrollUtils';

/**
 * ScrollToTop button that appears when the user scrolls down the page
 * @returns {JSX.Element} - The ScrollToTop button component
 */
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    throttledScrollToSection('home', 0);
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 z-50 p-3 rounded-full shadow-md bg-blue-600 text-white transition-opacity duration-300 hover:bg-blue-700 focus:outline-none ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;
