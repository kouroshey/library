import { FC } from "react";
import { ButtonProps } from "./types";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const variantStyles = {
  contained: {
    primary: "bg-primary text-white hover:bg-primary-600",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-600",
    error: "bg-error text-error-foreground hover:bg-error-600",
    warning: "bg-warning text-warning-foreground hover:bg-warning-600",
    info: "bg-info text-info-foreground hover:bg-info-600",
    success: "bg-success text-success-foreground hover:bg-success-600",
    unknown: "text-white bg-gray-400 hover:bg-gray-500",
  },
  outlined: {
    primary: "border border-primary text-primary hover:bg-primary-100",
    secondary: "border border-secondary text-secondary hover:bg-secondary-100",
    error: "border border-error text-error hover:bg-error-100",
    warning: "border border-warning text-warning hover:bg-warning-100",
    info: "border border-info text-info hover:bg-info-100",
    success: "border border-success text-success hover:bg-success-100",
    unknown: "border border-gray-400 text-white bg-gray-400 hover:bg-gray-500",
  },
  text: {
    primary: "text-primary hover:bg-primary-50",
    secondary: "text-secondary hover:bg-secondary-50",
    error: "text-error hover:bg-error-50",
    warning: "text-warning hover:bg-warning-50",
    info: "text-info hover:bg-info-50",
    success: "text-success hover:bg-success-50",
    unknown: "text-white hover:text-gray-200",
  },
  link: {
    primary: "text-primary hover:underline",
    secondary: "text-secondary hover:underline",
    error: "text-error hover:underline",
    warning: "text-warning hover:underline",
    info: "text-info hover:underline",
    success: "text-success hover:underline",
    unknown: "text-white hover:underline",
  },
  ghost: {
    primary: "hover:bg-accent hover:text-accent-foreground",
    secondary: "hover:bg-accent hover:text-accent-foreground",
    error: "hover:bg-accent hover:text-accent-foreground",
    warning: "hover:bg-accent hover:text-accent-foreground",
    info: "hover:bg-accent hover:text-accent-foreground",
    success: "hover:bg-accent hover:text-accent-foreground",
    unknown: "hover:bg-accent hover:text-accent-foreground",
  },
};

const sizeStyles = {
  sm: "h-8 px-4 [&>svg]:w-4 [&>svg]:h-4",
  md: "h-9 px-4 [&>svg]:w-5 [&>svg]:h-5",
  lg: "h-10 px-4 [&>svg]:w-6 [&>svg]:h-6",
  "icon-sm": "w-9 h-9 rounded-md [&>svg]:w-5 [&>svg]:h-5",
  "icon-md": "w-10 h-10 rounded-md [&>svg]:w-6 [&>svg]:h-6",
  "icon-lg": "w-11 h-11 rounded-md [&>svg]:w-7 [&>svg]:h-7",
};

const Button: FC<ButtonProps> = ({
  variant = "contained",
  size = "md",
  color = "primary",
  type = "submit",
  asLink,
  href,
  target = "_self",
  rel = "noreferrer",
  isLoading,
  loadingContent,
  startIcon,
  endIcon,
  children,
  className,
  isDisable,
  ...other
}) => {
  const colorStyle = variantStyles[variant]?.[color];
  const commonProps = {
    className: cn(
      "flex items-center justify-center gap-2 rounded-sm",
      "font-medium transition-all duration-200",
      colorStyle,
      sizeStyles[size],
      className,
      isDisable && "opacity-50 cursor-not-allowed",
    ),
    children: (
      <>
        {startIcon && startIcon}
        {isLoading ? loadingContent : children}
        {endIcon && endIcon}
      </>
    ),
    disabled: isDisable,
    type,
    ...other,
  };

  if (asLink) {
    return <Link href={href} target={target} rel={rel} {...commonProps} />;
  }

  return <button {...commonProps} />;
};

export default Button;
