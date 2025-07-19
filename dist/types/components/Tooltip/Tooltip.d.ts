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
import React from "react";
interface TooltipProps {
    content: string;
    children: React.ReactNode;
    position?: "top" | "bottom" | "left" | "right";
    className?: string;
}
export declare const Tooltip: React.FC<TooltipProps>;
export {};
