import React from 'react';
export interface DividerProps {
    /** Optional label to show in the middle of the divider */
    label?: string;
    /** Horizontal or vertical divider */
    orientation?: 'horizontal' | 'vertical';
    /** Custom className for styling */
    className?: string;
}
export declare const Divider: React.FC<DividerProps>;
