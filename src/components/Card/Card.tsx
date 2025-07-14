import React from "react";
import clsx from "clsx";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  shadow?: boolean;
  border?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  shadow = true,
  border = false,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "rounded-2xl p-4 bg-white",
        shadow && "shadow-md",
        border && "border border-gray-200",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
