// components/common/Button.tsx

import React from 'react';
import { ButtonProps, ButtonSize, ButtonShape } from '../../interfaces'; // Adjust path as necessary

// 1. Mapping for Button Sizes
const sizeMap: Record<ButtonSize, string> = {
  small: 'px-3 py-1 text-sm',     // Smaller padding and text
  medium: 'px-4 py-2 text-base',   // Default padding and text
  large: 'px-6 py-3 text-lg',      // Larger padding and text
};

// 2. Mapping for Button Shapes
const shapeMap: Record<ButtonShape, string> = {
  'rounded-sm': 'rounded-sm', // Small radius
  'rounded-md': 'rounded-md', // Medium radius (default look)
  'rounded-full': 'rounded-full', // Pill shape
};

/**
 * A reusable Button component with configurable size and shape, styled with Tailwind CSS.
 */
const Button: React.FC<ButtonProps> = ({
  children,
  size = 'medium', // Default size
  shape = 'rounded-md', // Default shape
  className = '',
  ...rest
}) => {
  // Get Tailwind classes from the maps
  const sizeClasses = sizeMap[size] || sizeMap.medium;
  const shapeClasses = shapeMap[shape] || shapeMap['rounded-md'];

  // Combine all classes
  const baseClasses =
    'font-medium text-white transition duration-150 ease-in-out ' +
    'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ' +
    'disabled:opacity-50 disabled:cursor-not-allowed';

  const combinedClasses = `${baseClasses} ${sizeClasses} ${shapeClasses} ${className}`;

  return (
    <button className={combinedClasses} {...rest}>
      {children}
    </button>
  );
};

export default Button;