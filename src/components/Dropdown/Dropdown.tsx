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

import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";

interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: "left" | "right";
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  children,
  align = "left",
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={ref}>
      <div onClick={() => setIsOpen((prev) => !prev)} className="cursor-pointer">
        {trigger}
      </div>

      {isOpen && (
        <div
          className={clsx(
            "absolute mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50",
            align === "right" ? "right-0" : "left-0",
            className
          )}
        >
          <div className="py-1">{children}</div>
        </div>
      )}
    </div>
  );
};
