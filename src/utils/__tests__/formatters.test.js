// Sample test for a utility function
import { formatDate } from '../formatters'; // Assuming you have a formatters.js file with a formatDate function

describe('formatDate', () => {
  it('formats date correctly', () => {
    const testDate = new Date('2025-05-13T12:00:00Z');
    expect(formatDate(testDate)).toBe('May 13, 2025');
  });

  it('handles invalid dates', () => {
    expect(formatDate(null)).toBe('');
    expect(formatDate(undefined)).toBe('');
    expect(formatDate('not a date')).toBe('');
  });
});
