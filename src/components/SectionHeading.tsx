import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  action?: React.ReactNode;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  action,
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = tone === "dark";

  if (action && !isCenter) {
    return (
      <div
        className={cn(
          "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14",
          className
        )}
      >
        <div className="max-w-2xl">
          {eyebrow && (
            <span
              className={cn(
                "inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-3",
                isDark ? "text-gold-light" : "text-champagne-gold"
              )}
            >
              {eyebrow}
            </span>
          )}
          <h2
            className={cn(
              "font-heading text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.2]",
              isDark ? "text-white" : "text-espresso"
            )}
          >
            {title}
          </h2>
          {description && (
            <p
              className={cn(
                "mt-4 text-base leading-relaxed",
                isDark ? "text-white/75" : "text-muted-grey"
              )}
            >
              {description}
            </p>
          )}
        </div>
        <div className="shrink-0">{action}</div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "mb-14",
        isCenter ? "max-w-3xl mx-auto text-center" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-3",
            isDark ? "text-gold-light" : "text-champagne-gold"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-heading text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.2]",
          isDark ? "text-white" : "text-espresso"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed",
            isDark ? "text-white/75" : "text-muted-grey"
          )}
        >
          {description}
        </p>
      )}
      {isCenter && (
        <div
          className="w-16 h-0.5 bg-champagne-gold mx-auto mt-6"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
