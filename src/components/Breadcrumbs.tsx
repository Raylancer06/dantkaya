import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { designSystem } from "@/lib/design-system";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  tone?: "light" | "dark";
}

export function Breadcrumbs({
  items,
  className,
  tone = "light",
}: BreadcrumbsProps) {
  const isDark = tone === "dark";

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex flex-wrap items-center gap-1.5 text-xs font-medium tracking-wider uppercase",
        isDark ? "text-white/70" : "text-muted-grey",
        className
      )}
    >
      <Link
        href="/"
        className={cn(
          "transition-colors duration-150 rounded-xs px-0.5",
          isDark ? "hover:text-gold-light" : "hover:text-espresso",
          designSystem.focusRing
        )}
      >
        Home
      </Link>
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={`${item.label}-${idx}`}>
            <ChevronRight
              className={cn(
                "w-3.5 h-3.5 shrink-0",
                isDark ? "text-white/40" : "text-champagne-gold/70"
              )}
              aria-hidden="true"
            />
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className={cn(
                  "transition-colors duration-150 rounded-xs px-0.5",
                  isDark ? "hover:text-gold-light" : "hover:text-espresso",
                  designSystem.focusRing
                )}
              >
                {item.label}
              </Link>
            ) : (
              <span
                aria-current="page"
                className={cn(
                  "font-semibold",
                  isDark ? "text-gold-light" : "text-espresso"
                )}
              >
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
