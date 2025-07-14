import React from "react";
type BadgeVariant = "default" | "destructive" | "success" | "info" | "warning";
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
}
export declare const Badge: React.FC<BadgeProps>;
export {};
