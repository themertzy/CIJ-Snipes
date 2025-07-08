import React from 'react';
export type ToastType = 'success' | 'error' | 'warning' | 'info';
export interface ToastProps {
    show: boolean;
    type?: ToastType;
    message?: string;
    className?: string;
}
export declare const Toast: React.FC<ToastProps>;
