// components/ui/Button.tsx
import React from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "text";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  fullWidth = false,
  disabled = false,
  onClick,
  type = "button",
  ariaLabel,
}: ButtonProps) => {
  // Base classes
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 max-w-[200px] w-[210px] h-[60px]";

  // Size classes
  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  // Variant classes
  const variantClasses = {
    primary:
      "text-white bg-brand-500 hover:bg-brand-600 focus:ring-brand-500 border border-transparent",
    secondary:
      "text-white bg-secondary-500 hover:bg-secondary-600 focus:ring-secondary-500 border border-transparent",
    outline:
      "text-brand-500 bg-transparent hover:bg-brand-50 focus:ring-brand-500 border border-brand-500",
    text: "text-brand-500 bg-transparent hover:bg-brand-50 focus:ring-brand-500 border border-transparent",
  };

  // Full width class
  const widthClass = fullWidth ? "w-full" : "";

  // Disabled class
  const disabledClass = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${disabledClass} ${className}`;

  // If href is provided, render as Link
  if (href) {
    return (
      <Link
        href={href}
        className={buttonClasses}
        aria-label={ariaLabel}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
      >
        {children}
      </Link>
    );
  }

  // Otherwise, render as button
  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
