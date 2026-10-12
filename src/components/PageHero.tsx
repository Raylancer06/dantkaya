import React from "react";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/Breadcrumbs";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  breadcrumbs: BreadcrumbItem[];
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  aside?: React.ReactNode;
  variant?: "ivory" | "secondary" | "espresso";
  className?: string;
}

export function PageHero({
  breadcrumbs,
  eyebrow,
  title,
  description,
  actions,
  aside,
  variant = "ivory",
  className,
}: PageHeroProps) {
  const isDark = variant === "espresso";
  const bgClass = {
    ivory: "bg-ivory-bg border-b border-border-subtle",
    secondary: "bg-ivory-secondary/60 border-b border-border-subtle",
    espresso: "bg-espresso text-white border-b border-white/10",
  }[variant];

  return (
    <section
      className={cn(
        "relative py-14 lg:py-20 overflow-hidden",
        bgClass,
        className
      )}
    >
      {isDark && (
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#B89A60 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />
      )}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-8">
          <Breadcrumbs
            items={breadcrumbs}
            tone={isDark ? "dark" : "light"}
          />
        </div>

        <div
          className={cn(
            "grid gap-10 lg:gap-12 items-end",
            aside ? "lg:grid-cols-12" : "grid-cols-1"
          )}
        >
          <RevealOnScroll
            className={cn(aside ? "lg:col-span-8" : "max-w-3xl")}
          >
            {eyebrow && (
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded bg-champagne-gold/15 border border-champagne-gold/30 mb-5">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-champagne-gold"
                  aria-hidden="true"
                />
                <span
                  className={cn(
                    "text-[11px] font-semibold uppercase tracking-[0.18em]",
                    isDark ? "text-gold-light" : "text-espresso"
                  )}
                >
                  {eyebrow}
                </span>
              </div>
            )}

            <h1
              className={cn(
                "font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.12]",
                isDark ? "text-white" : "text-espresso"
              )}
            >
              {title}
            </h1>

            {description && (
              <p
                className={cn(
                  "mt-5 text-base sm:text-lg leading-relaxed max-w-2xl",
                  isDark ? "text-white/80" : "text-muted-grey"
                )}
              >
                {description}
              </p>
            )}

            {actions && (
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {actions}
              </div>
            )}
          </RevealOnScroll>

          {aside && (
            <RevealOnScroll delay={0.1} className="lg:col-span-4">
              {aside}
            </RevealOnScroll>
          )}
        </div>
      </div>
    </section>
  );
}
