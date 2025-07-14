/**
 * Modal Component Usage
 * 
 * Import: import { Modal } from 'cij-snipes';
 * 
 * Basic usage:
 * const [isOpen, setIsOpen] = useState(false);
 * 
 * <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
 *   <p>Modal content goes here</p>
 * </Modal>
 * 
 * With title:
 * <Modal 
 *   isOpen={isOpen} 
 *   onClose={() => setIsOpen(false)}
 *   title="Confirm Action"
 * >
 *   <p>Are you sure you want to continue?</p>
 * </Modal>
 * 
 * With footer:
 * <Modal 
 *   isOpen={isOpen} 
 *   onClose={() => setIsOpen(false)}
 *   title="Delete Item"
 *   footer={
 *     <div className="flex gap-2 justify-end">
 *       <button onClick={() => setIsOpen(false)}>Cancel</button>
 *       <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
 *     </div>
 *   }
 * >
 *   <p>This action cannot be undone.</p>
 * </Modal>
 * 
 * Custom styling:
 * <Modal 
 *   isOpen={isOpen} 
 *   onClose={() => setIsOpen(false)}
 *   className="max-w-lg"
 * >
 *   <p>Wider modal content</p>
 * </Modal>
 * 
 * Required props: isOpen, onClose, children
 * Optional props: title, footer, className
 * Auto-closes with Escape key or clicking outside
 */

import React, { useEffect } from "react";
import clsx from "clsx";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  className,
}) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className={clsx(
          "bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative",
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}
        <div className="mb-4">{children}</div>
        {footer && <div className="mt-4">{footer}</div>}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg"
          aria-label="Close modal"
        >
          &times;
        </button>
      </div>
      <div className="absolute inset-0" onClick={onClose}></div>
    </div>
  );
};
