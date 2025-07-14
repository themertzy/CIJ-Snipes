import React from "react";
interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: "sm" | "md" | "lg";
    color?: "gray" | "blue" | "white";
}
export declare const Spinner: React.FC<SpinnerProps>;
export {};
