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
export declare const Button: React.FC<ButtonProps>;
