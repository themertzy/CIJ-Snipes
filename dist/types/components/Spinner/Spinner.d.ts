/**
 * Spinner Component Usage
 *
 * Import: import { Spinner } from 'cij-snipes';
 *
 * Basic usage:
 * <Spinner />
 *
 * Different sizes:
 * <Spinner size="sm" />
 * <Spinner size="md" />
 * <Spinner size="lg" />
 *
 * Different colors:
 * <Spinner color="gray" />
 * <Spinner color="blue" />
 * <Spinner color="white" />
 *
 * Combined options:
 * <Spinner size="lg" color="blue" />
 *
 * Custom styling:
 * <Spinner className="mx-auto" />
 *
 * Available sizes: sm, md (default), lg
 * Available colors: gray (default), blue, white
 * Accepts all standard HTML div attributes
 */
import React from "react";
interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: "sm" | "md" | "lg";
    color?: "gray" | "blue" | "white";
}
export declare const Spinner: React.FC<SpinnerProps>;
export {};
