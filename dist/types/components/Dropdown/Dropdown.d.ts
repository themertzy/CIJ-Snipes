/**
 * Dropdown Component Usage
 *
 * Import: import { Dropdown } from 'cij-snipes';
 *
 * Basic usage:
 * <Dropdown trigger={<button>Options</button>}>
 *   <div className="px-4 py-2 hover:bg-gray-100">Option 1</div>
 *   <div className="px-4 py-2 hover:bg-gray-100">Option 2</div>
 * </Dropdown>
 *
 * With alignment:
 * <Dropdown trigger={<button>Menu</button>} align="right">
 *   <div className="px-4 py-2 hover:bg-gray-100">Settings</div>
 *   <div className="px-4 py-2 hover:bg-gray-100">Logout</div>
 * </Dropdown>
 *
 * Custom styling:
 * <Dropdown
 *   trigger={<span>Click me</span>}
 *   className="w-64 bg-gray-50"
 * >
 *   <div className="p-3">Custom content</div>
 * </Dropdown>
 *
 * With action items:
 * <Dropdown trigger={<button>Actions</button>}>
 *   <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
 *     Edit
 *   </button>
 *   <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
 *     Delete
 *   </button>
 * </Dropdown>
 *
 * Required props: trigger, children
 * Optional props: align ("left" default, "right"), className
 * Auto-closes when clicking outside
 */
import React from "react";
interface DropdownProps {
    trigger: React.ReactNode;
    children: React.ReactNode;
    align?: "left" | "right";
    className?: string;
}
export declare const Dropdown: React.FC<DropdownProps>;
export {};
