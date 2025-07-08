'use client';

import React from 'react';
import { Check, XCircle, AlertTriangle, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastProps {
  show: boolean;
  type?: ToastType;
  message?: string;
  className?: string;
}

const toastStyles = {
  success: {
    bg: 'bg-green-100',
    text: 'text-green-800',
    icon: Check,
  },
  error: {
    bg: 'bg-red-100',
    text: 'text-red-800',
    icon: XCircle,
  },
  warning: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-800',
    icon: AlertTriangle,
  },
  info: {
    bg: 'bg-blue-100',
    text: 'text-blue-800',
    icon: Info,
  },
};

export const Toast: React.FC<ToastProps> = ({
  show,
  type = 'success',
  message = 'Saved successfully!',
  className = '',
}) => {
  const { bg, text, icon: Icon } = toastStyles[type];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key={`${type}-toast`}
          initial={{ opacity: 0, scale: 0.5, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: -20 }}
          transition={{ duration: 0.4, type: 'spring' }}
          className={`absolute top-4 left-1/2 -translate-x-1/2 ${bg} ${text} font-medium px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 z-50 ${className}`}
        >
          <Icon className="w-4 h-4" />
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
