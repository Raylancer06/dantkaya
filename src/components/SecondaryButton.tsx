import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { designSystem } from "@/lib/design-system";
import { INTERACTION_CLASSES } from "@/lib/motion";

interface SecondaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  showArrow?: boolean;
  size?: "sm" | "md" | "lg";
  tone?: "light" | "dark" | "underline";
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}

export function SecondaryButton({
  children,
  href,
  onClick,
  type = "button",
  disabled = false,
  showArrow = false,
  size = "md",
  tone = "light",
  external = false,
  className,
  ariaLabel,
}: SecondaryButtonProps) {
  const sizeClasses =
    tone === "underline"
      ? "py-2 text-[15px]"
      : {
          sm: "px-5 py-2.5 text-[14px]",
          md: "px-6 py-4 text-[15px]",
          lg: "px-8 py-4 text-[15px]",
        }[size];

  const toneClasses = {
    light:
      "border border-champagne-gold text-espresso font-medium rounded-[6px] hover:bg-champagne-gold/10",
    dark: "border border-champagne-gold/40 text-ivory-bg font-medium rounded-[6px] hover:border-champagne-gold hover:text-white",
    underline:
      "text-espresso font-semibold underline underline-offset-4 decoration-champagne-gold hover:text-champagne-gold rounded",
  }[tone];

  const sharedClasses = cn(
    "group inline-flex items-center justify-center gap-1.5 cursor-pointer",
    INTERACTION_CLASSES.buttonFeedback,
    sizeClasses,
    toneClasses,
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
