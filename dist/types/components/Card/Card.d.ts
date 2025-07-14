import React from "react";
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    shadow?: boolean;
    border?: boolean;
}
export declare const Card: React.FC<CardProps>;
