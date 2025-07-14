import React from "react";
import clsx from "clsx";

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  color?: "gray" | "blue" | "white";
}

const sizeClasses = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
};

const colorClasses = {
  gray: "text-gray-500",
  blue: "text-blue-600",
  white: "text-white",
};

export const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  color = "gray",
  className,
  ...props
}) => {
  return (
    <div
      role="status"
      className={clsx("animate-spin", sizeClasses[size], colorClasses[color], className)}
      {...props}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M100 50.5C100 78.3 77.6 100.7 49.8 100.7C22 100.7 0 78.3 0 50.5C0 22.7 22 0.299988 49.8 0.299988C77.6 0.299988 100 22.7 100 50.5ZM9.0818 50.5C9.0818 74.3 26 91.2 49.8 91.2C73.6 91.2 90.5 74.3 90.5 50.5C90.5 26.7 73.6 9.79999 49.8 9.79999C26 9.79999 9.0818 26.7 9.0818 50.5Z"
          fill="currentColor"
          opacity="0.25"
        />
        <path
          d="M93.9686 39.04C96.3936 38.43 97.8626 35.9 97.0076 33.54C95.1126 28.56 92.2926 24.02 88.7326 20.05C85.0226 15.92 80.3326 12.53 75.0626 10.06C69.8026 7.57999 64.1026 6.10999 58.2926 5.70999C55.5226 5.51999 53.0826 7.53999 52.4726 10.05C51.8626 12.57 53.3326 15.04 55.7426 15.65C59.7826 16.61 63.5926 18.14 67.0326 20.17C70.4626 22.18 73.4626 24.82 75.8426 27.92C78.2326 31.01 80.0626 34.52 81.2326 38.27C81.9726 40.66 84.5426 41.81 86.9686 41.2L93.9686 39.04Z"
          fill="currentColor"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
