import React from "react";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton";

export { PrimaryButton, SecondaryButton };

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  showArrow?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "espresso" | "gold" | "header" | "underline";
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}

export function Button({
  variant = "primary",
  ...props
}: ButtonProps) {
  if (variant === "secondary" || variant === "underline") {
    return (
      <SecondaryButton
        tone={variant === "underline" ? "underline" : "light"}
        {...props}
      />
    );
  }

  return (
    <PrimaryButton
      variant={
        variant === "gold" || variant === "header" ? variant : "espresso"
      }
      {...props}
    />
  );
}
