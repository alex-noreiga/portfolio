/**
 * Dynamically load a script
 * @param {string} url - URL of the script to load
 * @param {string} id - ID to assign to the script element
 * @returns {Promise} - Promise that resolves when the script is loaded
 */
export const loadScript = (url, id) => {
  return new Promise((resolve, reject) => {
    // Check if script already exists
    const existingScript = document.getElementById(id);
    if (existingScript) {
      resolve();
      return;
    }

    // Create script element
    const script = document.createElement('script');
    script.src = url;
    script.id = id;
    script.async = true;
    script.defer = true;

    // Handle events
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${url}`));

    // Add to document
    document.body.appendChild(script);
  });
};

/**
 * Dynamically load a CSS file
 * @param {string} url - URL of the CSS file to load
 * @param {string} id - ID to assign to the link element
 * @returns {Promise} - Promise that resolves when the CSS is loaded
 */
export const loadCSS = (url, id) => {
  return new Promise((resolve, reject) => {
    // Check if link already exists
    const existingLink = document.getElementById(id);
    if (existingLink) {
      resolve();
      return;
    }

    // Create link element
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    link.id = id;

    // Handle events
    link.onload = () => resolve();
    link.onerror = () => reject(new Error(`Failed to load CSS: ${url}`));

    // Add to document
    document.head.appendChild(link);
  });
};

/**
 * Preload images to improve perceived performance
 * @param {Array} imageUrls - Array of image URLs to preload
 * @returns {Promise} - Promise that resolves when all images are loaded
 */
export const preloadImages = (imageUrls = []) => {
  const promises = imageUrls.map(url => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(url);
      img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
      img.src = url;
    });
  });
  
  return Promise.all(promises);
};

/**
 * Load a component only when it's needed (dynamic import)
 * @param {Function} importFunction - Dynamic import function
 * @returns {Promise} - Promise that resolves to the component
 */
export const loadComponent = async (importFunction) => {
  try {
    const module = await importFunction();
    return module.default;
  } catch (importError) {
    console.error('Error loading component:', importError);
    throw importError;
  }
};
