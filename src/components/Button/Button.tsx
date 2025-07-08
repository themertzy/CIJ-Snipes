/**
 * Button Component
 *
 * A reusable button component with support for `primary` and `secondary` variants.
 *
 * Usage:
 * ```tsx
 * <Button variant="primary" onClick={() => alert('Clicked!')}>
 *   Submit
 * </Button>
 *
 * <Button variant="secondary" className="mt-4">
 *   Cancel
 * </Button>
 * ```
 *
 * Props are extended from native <button> attributes.
 */


import React from 'react';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const base = 'px-4 py-2 rounded font-semibold';
  const styles = variant === 'primary'
    ? 'bg-blue-600 text-white hover:bg-blue-700'
    : 'bg-gray-300 text-black hover:bg-gray-400';

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
};
