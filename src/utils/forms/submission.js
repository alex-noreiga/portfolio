/**
 * Form submission utility functions
 */

// Mock API endpoint for development
const FORM_ENDPOINT = 'https://formspree.io/f/your-formspree-id';

// Send form data to backend
export const submitContactForm = async (formData) => {
  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { 
      success: false, 
      error: error.message || 'Something went wrong. Please try again.'
    };
  }
};
