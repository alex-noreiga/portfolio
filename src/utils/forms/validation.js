/**
 * Form validation utility functions
 */

// Email validation using regex
export const isValidEmail = email => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Field validation based on field type
export const validateField = (type, value) => {
  switch (type) {
    case 'email':
      if (!value) return 'Email is required';
      if (!isValidEmail(value)) return 'Please enter a valid email address';
      return null;
    case 'name':
      if (!value) return 'Name is required';
      if (value.length < 2) return 'Name must be at least 2 characters';
      return null;
    case 'message':
      if (!value) return 'Message is required';
      if (value.length < 10) return 'Message must be at least 10 characters';
      return null;
    default:
      if (!value) return 'This field is required';
      return null;
  }
};

// Validate entire form
export const validateForm = formData => {
  const errors = {};
  let isValid = true;

  for (const [key, value] of Object.entries(formData)) {
    const error = validateField(key, value);
    if (error) {
      errors[key] = error;
      isValid = false;
    }
  }

  return { isValid, errors };
};
