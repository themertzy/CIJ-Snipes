/**
 * Badge Component Usage
 *
 * Import: import { Badge } from 'cij-snipes';
 *
 * Basic usage:
 * <Badge>Default</Badge>
 *
 * Variants:
 * <Badge variant="success">Success</Badge>
 * <Badge variant="destructive">Error</Badge>
 * <Badge variant="warning">Warning</Badge>
 * <Badge variant="info">Info</Badge>
 *
 * Custom styling:
 * <Badge className="text-lg" variant="success">Large Badge</Badge>
 *
 * Available variants: default, destructive, success, info, warning
 * Accepts all standard HTML span attributes
 */
import React from "react";
type BadgeVariant = "default" | "destructive" | "success" | "info" | "warning";
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
}
export declare const Badge: React.FC<BadgeProps>;
export {};
