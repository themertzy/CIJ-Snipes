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
import React from "react";
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
}
export declare const Modal: React.FC<ModalProps>;
export {};
