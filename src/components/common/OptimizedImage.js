import React from 'react';
import useImageLazyLoad from '../../hooks/useImageLazyLoad';

/**
 * Optimized image component that supports modern image formats and lazy loading
 * @param {string} src - The image source URL
 * @param {string} webpSrc - WebP format source URL (optional)
 * @param {string} alt - Alt text for the image
 * @param {string} className - CSS classes to apply
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {Object} props - Any additional props to pass to the img element
 * @returns {JSX.Element} - The optimized image component
 */
const OptimizedImage = ({
  src,
  webpSrc,
  alt,
  className = '',
  width,
  height,
  placeholderSrc = '',
  ...props
}) => {
  const { imageSrc, isLoaded } = useImageLazyLoad(src, placeholderSrc);

  return (
    <picture>
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      <img
        src={imageSrc}
        alt={alt || ''}
        className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading="lazy"
        width={width}
        height={height}
        style={{
          // For native lazy loading
          display: 'block',
          // Prevent layout shift
          aspectRatio: width && height ? `${width}/${height}` : 'auto',
        }}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;
