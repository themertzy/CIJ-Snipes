/**
 * Toast Component Usage
 *
 * Import: import { Toast } from 'cij-snipes';
 *
 * Basic usage:
 * <Toast show={true} message="Success!" />
 *
 * Different types:
 * <Toast show={true} type="success" message="Saved successfully!" />
 * <Toast show={true} type="error" message="Error occurred!" />
 * <Toast show={true} type="warning" message="Warning message!" />
 * <Toast show={true} type="info" message="Info message!" />
 *
 * Custom styling:
 * <Toast show={true} className="font-bold" message="Custom toast" />
 *
 * Common pattern with state:
 * const [showToast, setShowToast] = useState(false);
 *
 * const handleSave = () => {
 *   setShowToast(true);
 *   setTimeout(() => setShowToast(false), 3000);
 * };
 *
 * <Toast show={showToast} type="success" message="Data saved!" />
 *
 * Available types: success (default), error, warning, info
 * Required props: show
 * Optional props: type, message, className
 */
import React from 'react';
import type { ToastProps } from './Toast.types';
export declare const Toast: React.FC<ToastProps>;
