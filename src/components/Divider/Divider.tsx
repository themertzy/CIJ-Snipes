import React from 'react';
import clsx from 'clsx';

export interface DividerProps {
  /** Optional label to show in the middle of the divider */
  label?: string;
  /** Horizontal or vertical divider */
  orientation?: 'horizontal' | 'vertical';
  /** Custom className for styling */
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  label,
  orientation = 'horizontal',
  className = '',
}) => {
  if (orientation === 'vertical') {
    return (
      <div
        className={clsx(
          'w-px bg-gray-300 dark:bg-gray-700 h-full mx-2',
          className
        )}
      />
    );
  }

  return (
    <div className={clsx('flex items-center w-full', className)}>
      <div className="flex-grow h-px bg-gray-300 dark:bg-gray-700" />
      {label && (
        <span className="mx-3 text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
          {label}
        </span>
      )}
      <div className="flex-grow h-px bg-gray-300 dark:bg-gray-700" />
    </div>
  );
};
