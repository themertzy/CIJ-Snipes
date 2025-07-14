/**
 * Tooltip Component Usage
 * 
 * Import: import { Tooltip } from 'cij-snipes';
 * 
 * Basic usage:
 * <Tooltip content="This is a tooltip">
 *   <button>Hover me</button>
 * </Tooltip>
 * 
 * Different positions:
 * <Tooltip content="Top tooltip" position="top">
 *   <button>Top</button>
 * </Tooltip>
 * 
 * <Tooltip content="Bottom tooltip" position="bottom">
 *   <button>Bottom</button>
 * </Tooltip>
 * 
 * <Tooltip content="Left tooltip" position="left">
 *   <button>Left</button>
 * </Tooltip>
 * 
 * <Tooltip content="Right tooltip" position="right">
 *   <button>Right</button>
 * </Tooltip>
 * 
 * Custom styling:
 * <Tooltip 
 *   content="Custom tooltip" 
 *   className="bg-blue-600 text-sm"
 * >
 *   <span>Custom styled</span>
 * </Tooltip>
 * 
 * With icons or any element:
 * <Tooltip content="Help information">
 *   <svg className="w-4 h-4">...</svg>
 * </Tooltip>
 * 
 * Required props: content, children
 * Optional props: position ("top" default, "bottom", "left", "right"), className
 * Shows on hover and focus, hides on mouse leave and blur
 */

import React, { useState } from "react";
import clsx from "clsx";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = "top",
  className,
}) => {
  const [visible, setVisible] = useState(false);

  const getPositionClasses = () => {
    switch (position) {
      case "bottom":
        return "top-full mt-2 left-1/2 -translate-x-1/2";
      case "left":
        return "right-full mr-2 top-1/2 -translate-y-1/2";
      case "right":
        return "left-full ml-2 top-1/2 -translate-y-1/2";
      case "top":
      default:
        return "bottom-full mb-2 left-1/2 -translate-x-1/2";
    }
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className={clsx(
            "absolute z-50 px-2 py-1 text-xs text-white bg-gray-800 rounded shadow",
            "whitespace-nowrap",
            getPositionClasses(),
            className
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
};
