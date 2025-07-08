import type { LucideIcon } from 'lucide-react';
export type ToastType = 'success' | 'error' | 'warning' | 'info';
export interface ToastProps {
    show: boolean;
    type?: ToastType;
    message?: string;
    className?: string;
}
export interface ToastStyle {
    bg: string;
    text: string;
    icon: LucideIcon;
}
