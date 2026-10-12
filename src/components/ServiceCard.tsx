import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { designSystem } from "@/lib/design-system";
import { INTERACTION_CLASSES } from "@/lib/motion";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  category?: string;
  image?: string;
  imageAlt?: string;
  duration?: string;
  ctaLabel?: string;
  variant?: "featured" | "directory";
  surface?: "white" | "ivory";
  className?: string;
}

export function ServiceCard({
  title,
  description,
  href,
  category,
  image = "/images/dental-root-canal.png",
  imageAlt,
  duration,
  ctaLabel = "Explore Treatment",
  variant = "featured",
  surface = "white",
  className,
}: ServiceCardProps) {
  const surfaceClasses =
    surface === "white"
      ? "bg-white border-border-subtle"
      : "bg-ivory-bg border-border-subtle";

  return (
    <article
      className={cn(
        "group rounded-xl overflow-hidden border flex flex-col h-full shadow-[0_6px_24px_-12px_rgba(41,37,31,0.06)] hover:shadow-[0_18px_38px_-15px_rgba(41,37,31,0.13)]",
        INTERACTION_CLASSES.cardSurfaceHover,
        surfaceClasses,
        className
      )}
    >
      {/* Visual Image Header for Both Featured & Directory Cards */}
      <Link
        href={href}
        className={cn(
          "block overflow-hidden bg-ivory-secondary relative",
          variant === "featured" ? "aspect-[16/10]" : "aspect-[16/9]"
        )}
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={image}
          alt={imageAlt || title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={cn(
            "object-cover object-center",
            INTERACTION_CLASSES.serviceImageZoom
          )}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-espresso/55 via-espresso/10 to-transparent opacity-80 group-hover:opacity-65 transition-opacity duration-300"
          aria-hidden="true"
        />

        {category && (
          <span className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-full bg-ivory-bg/95 backdrop-blur-xs border border-border-subtle text-[10px] font-semibold uppercase tracking-widest text-espresso shadow-2xs">
            {category}
          </span>
        )}

        {duration && (
          <span className="absolute bottom-3 left-3.5 inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-espresso/85 backdrop-blur-xs text-[10px] font-medium text-[#fedb9b]">
            <Clock className="w-3 h-3" aria-hidden="true" />
            <span className="truncate max-w-[200px]">{duration}</span>
          </span>
        )}
      </Link>

      {/* Concise, Scannable Card Body (No Text Bloat) */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-heading text-[19px] font-bold text-espresso mb-2 group-hover:text-champagne-gold transition-colors duration-200 leading-snug">
            <Link href={href} className={cn("rounded", designSystem.focusRing)}>
              {title}
            </Link>
          </h3>
          <p className="text-[14px] text-muted-grey leading-relaxed line-clamp-2 mb-5">
            {description}
          </p>
        </div>

        <div className="pt-3.5 border-t border-border-subtle/60 flex items-center justify-between">
          <Link
            href={href}
            className={cn(
              "inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-espresso group-hover:text-champagne-gold transition-colors duration-200 rounded-xs",
              designSystem.focusRing
            )}
          >
            <span>{ctaLabel}</span>
            <ArrowRight
              className={cn("w-3.5 h-3.5", INTERACTION_CLASSES.arrowSlide)}
              aria-hidden="true"
            />
          </Link>
          <span className="w-6 h-6 rounded-full bg-ivory-secondary flex items-center justify-center text-espresso group-hover:bg-espresso group-hover:text-[#fedb9b] transition-colors duration-200">
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </span>
        </div>
      </div>
    </article>
  );
}
