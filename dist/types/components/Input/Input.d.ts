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
export declare const Input: React.FC<InputProps>;
