import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { designSystem } from "@/lib/design-system";
import { INTERACTION_CLASSES } from "@/lib/motion";

interface PrimaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  showArrow?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "espresso" | "gold" | "header";
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}

export function PrimaryButton({
  children,
  href,
  onClick,
  type = "button",
  disabled = false,
  showArrow = false,
  size = "md",
  variant = "espresso",
  external = false,
  className,
  ariaLabel,
}: PrimaryButtonProps) {
  const sizeClasses = {
    sm: "py-2.5 px-5 text-[14px]",
    md: "px-8 py-4 text-[15px]",
    lg: "px-8 py-4 text-[15px]",
  }[size];

  const variantClasses = {
    espresso:
      "bg-espresso text-white font-semibold hover:bg-espresso-dark shadow-sm",
    header:
      "bg-espresso text-ivory-bg font-medium hover:bg-[#4a2b1f] shadow-sm",
    gold: "bg-champagne-gold text-espresso font-semibold hover:bg-[#c9aa6d] shadow-sm",
  }[variant];

  const sharedClasses = cn(
    "group inline-flex items-center justify-center gap-2 rounded-[6px] cursor-pointer",
    INTERACTION_CLASSES.buttonFeedback,
    sizeClasses,
    variantClasses,
    designSystem.focusRing,
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          className={cn("w-4 h-4", INTERACTION_CLASSES.arrowSlide)}
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    if (
      external ||
      href.startsWith("http") ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:")
    ) {
      return (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={sharedClasses}
          aria-label={ariaLabel}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={sharedClasses} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={sharedClasses}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
