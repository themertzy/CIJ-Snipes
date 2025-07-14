// src/components/Input/Input.tsx

/**
 * Input Component Usage
 * 
 * Import: import { Input } from 'cij-snipes';
 * 
 * Basic usage:
 * <Input placeholder="Enter text..." />
 * 
 * With label:
 * <Input label="Email" type="email" />
 * 
 * With error:
 * <Input label="Password" error="Password is required" />
 * 
 * Custom styling:
 * <Input className="w-full" label="Name" />
 * 
 * All standard HTML input attributes supported:
 * <Input 
 *   label="Username" 
 *   type="text" 
 *   placeholder="Enter username"
 *   required
 *   onChange={(e) => console.log(e.target.value)}
 * />
 * 
 * Props: label?, error?, className?, plus all HTML input attributes
 */


import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className = '',
  id,
  ...props
}) => {
  const inputId = id || props.name || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`border rounded-lg px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
          error ? 'border-red-500' : 'border-slate-300'
        } ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};
