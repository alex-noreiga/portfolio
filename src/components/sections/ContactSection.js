import React, { useState } from 'react';
import { Phone, Mail, Linkedin, Github, Check, AlertCircle, Loader2 } from 'lucide-react';
import { validateField, validateForm } from '../../utils/forms/validation';
import { submitContactForm } from '../../utils/forms/submission';

const ContactItem = ({ icon: Icon, label, value, href }) => {
  return (
    <div className="flex items-center">
      <div className="bg-blue-100 p-3 rounded-full mr-4">
        <Icon size={20} className="text-blue-600" />
      </div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-blue-600 transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="text-lg">{value}</p>
        )}
      </div>
    </div>
  );
};

const FormInput = ({ id, label, type = 'text', value, onChange, error, placeholder }) => {
  return (
    <div>
      <label className="block text-gray-700 mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 border ${
          error ? 'border-red-500' : 'border-gray-300'
        } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
        placeholder={placeholder}
      />
      {error && (
        <p className="mt-1 text-red-500 text-sm flex items-center">
          <AlertCircle size={14} className="mr-1" />
          {error}
        </p>
      )}
    </div>
  );
};

const FormTextarea = ({ id, label, value, onChange, error, placeholder, rows = 4 }) => {
  return (
    <div>
      <label className="block text-gray-700 mb-2" htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`w-full px-4 py-2 border ${
          error ? 'border-red-500' : 'border-gray-300'
        } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
        placeholder={placeholder}
      />
      {error && (
        <p className="mt-1 text-red-500 text-sm flex items-center">
          <AlertCircle size={14} className="mr-1" />
          {error}
        </p>
      )}
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    error: null,
  });

  const handleChange = e => {
    const { id, value } = e.target;

    // Clear the error for this field when user starts typing
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: null }));
    }

    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleBlur = e => {
    const { id, value } = e.target;
    const error = validateField(id, value);

    if (error) {
      setErrors(prev => ({ ...prev, [id]: error }));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // Validate all fields before submission
    const { isValid, errors } = validateForm(formData);

    if (!isValid) {
      setErrors(errors);
      return;
    }

    // Clear any previous errors
    setErrors({});

    // Set submitting state
    setStatus({ ...status, submitting: true });

    // Submit the form
    const result = await submitContactForm(formData);

    if (result.success) {
      setStatus({
        submitting: false,
        submitted: true,
        success: true,
        error: null,
      });

      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);
    } else {
      setStatus({
        submitting: false,
        submitted: true,
        success: false,
        error: result.error,
      });
    }
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-xl font-bold mb-4">Send Me a Message</h3>

      {status.submitted && status.success && (
        <div className="mb-6 bg-green-100 text-green-700 p-4 rounded-md flex items-center">
          <Check size={18} className="mr-2" />
          <span>Your message has been sent successfully!</span>
        </div>
      )}

      {status.submitted && !status.success && (
        <div className="mb-6 bg-red-100 text-red-700 p-4 rounded-md flex items-center">
          <AlertCircle size={18} className="mr-2" />
          <span>{status.error || 'Something went wrong. Please try again.'}</span>
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <FormInput
          id="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.name}
          placeholder="Your Name"
        />

        <FormInput
          id="email"
          type="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email}
          placeholder="Your Email"
        />

        <FormTextarea
          id="message"
          label="Message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.message}
          placeholder="Your Message"
        />

        <button
          type="submit"
          disabled={status.submitting}
          className={`w-full flex justify-center items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 ${
            status.submitting ? 'opacity-75 cursor-not-allowed' : ''
          }`}
        >
          {status.submitting ? (
            <>
              <Loader2 size={18} className="mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
};

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '256-683-0146',
      href: 'tel:2566830146',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'alexandra.noreiga@gmail.com',
      href: 'mailto:alexandra.noreiga@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/alexandranoreiga',
      href: 'https://linkedin.com/in/alexandranoreiga',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/alex-noreiga',
      href: 'https://github.com/alex-noreiga',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <ContactItem
                    key={index}
                    icon={item.icon}
                    label={item.label}
                    value={item.value}
                    href={item.href}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
