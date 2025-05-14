/**
 * Format a date in a user-friendly way
 * @param {Date} date - The date to format
 * @returns {string} Formatted date string (e.g., "May 13, 2025")
 */
export const formatDate = date => {
  if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
    return '';
  }

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Format currency amount
 * @param {number} amount - The amount to format
 * @param {string} currency - Currency code (default: 'USD')
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (amount, currency = 'USD') => {
  if (typeof amount !== 'number') {
    return '';
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
};
