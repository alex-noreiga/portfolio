import { useState, useEffect } from 'react';

/**
 * Custom hook for lazy loading images
 * @param {string} src - Image source
 * @param {string} placeholderSrc - Placeholder image source while loading
 * @returns {Object} - Image source and loading state
 */
const useImageLazyLoad = (src, placeholderSrc = '') => {
  const [imageSrc, setImageSrc] = useState(placeholderSrc || src);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // If no source or placeholder is the same as source, skip loading
    if (!src || src === placeholderSrc) {
      setIsLoaded(true);
      return;
    }

    // Create a new image object to preload the image
    const img = new Image();

    // Handle successful load
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };

    // Handle error
    img.onerror = () => {
      console.error(`Failed to load image: ${src}`);
      if (placeholderSrc && imageSrc !== placeholderSrc) {
        setImageSrc(placeholderSrc);
      }
      setIsLoaded(true);
    };

    // Start loading the image
    img.src = src;

    // Clean up
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, placeholderSrc, imageSrc]);

  return { imageSrc, isLoaded };
};

export default useImageLazyLoad;
