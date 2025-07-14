import React from "react";
import clsx from "clsx";

type BadgeVariant = "default" | "destructive" | "success" | "info" | "warning";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const badgeStyles: Record<BadgeVariant, string> = {
  default: "bg-gray-100 text-gray-800",
  destructive: "bg-red-100 text-red-800",
  success: "bg-green-100 text-green-800",
  info: "bg-blue-100 text-blue-800",
  warning: "bg-yellow-100 text-yellow-800",
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className,
  ...props
}) => {
  return (
    <span
      className={clsx(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        badgeStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
