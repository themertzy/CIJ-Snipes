import React from "react";
interface TooltipProps {
    content: string;
    children: React.ReactNode;
    position?: "top" | "bottom" | "left" | "right";
    className?: string;
}
export declare const Tooltip: React.FC<TooltipProps>;
export {};
