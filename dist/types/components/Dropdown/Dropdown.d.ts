import React from "react";
interface DropdownProps {
    trigger: React.ReactNode;
    children: React.ReactNode;
    align?: "left" | "right";
    className?: string;
}
export declare const Dropdown: React.FC<DropdownProps>;
export {};
