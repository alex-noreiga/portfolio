import React from 'react';

/**
 * Button component with different variants and sizes
 * @param {Object} props - Component props
 * @param {'primary'|'secondary'|'outlined'} [props.variant='primary'] - Button variant
 * @param {'sm'|'md'|'lg'} [props.size='md'] - Button size
 * @param {Function} [props.onClick] - Click handler
 * @param {boolean} [props.disabled=false] - Disable button
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Button content
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  className = '',
  children,
  ...rest
}) => {
  // Base classes
  const baseClasses = 'font-medium rounded focus:outline-none focus:ring-2 transition-colors';

  // Variant classes
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-300',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-300',
    outlined:
      'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-200',
  };

  // Size classes
  const sizeClasses = {
    sm: 'text-sm py-1 px-3',
    md: 'text-base py-2 px-4',
    lg: 'text-lg py-3 px-6',
  };

  // Disabled classes
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  // Combine all classes
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

export default Button;
