import React from "react";
import { MessageCircle } from "lucide-react";
import { clinicInfo } from "@/data/clinic";
import { cn } from "@/lib/utils";
import { designSystem } from "@/lib/design-system";
import { INTERACTION_CLASSES } from "@/lib/motion";

interface WhatsAppContactButtonProps {
  label?: string;
  message?: string;
  variant?: "inline" | "outline-dark" | "floating";
  className?: string;
}

export function WhatsAppContactButton({
  label = "WhatsApp Us",
  message,
  variant = "inline",
  className,
}: WhatsAppContactButtonProps) {
  const href = message
    ? `https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(message)}`
    : clinicInfo.whatsappUrl;

  if (variant === "floating") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Dant काया Multispeciality Clinic on WhatsApp"
        className={cn(
          "fixed bottom-6 right-6 z-40 inline-flex items-center gap-2.5 bg-espresso hover:bg-espresso-dark text-white px-4 py-3 rounded-full border border-champagne-gold/40 shadow-[0_12px_28px_rgba(50,27,18,0.22)] hover:-translate-y-0.5",
          INTERACTION_CLASSES.buttonFeedback,
          designSystem.focusRing,
          className
        )}
      >
        <span
          className="w-2 h-2 rounded-full bg-[#4ADE80]"
          aria-hidden="true"
        />
        <MessageCircle
          className="w-4 h-4 text-champagne-gold"
          aria-hidden="true"
        />
        <span className="text-xs font-medium tracking-wide pr-0.5">
          {label}
        </span>
      </a>
    );
  }

  if (variant === "outline-dark") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center justify-center gap-2.5 border border-white/25 bg-white/5 hover:bg-white/10 text-white font-medium px-8 py-4 rounded-[6px] text-base",
          INTERACTION_CLASSES.buttonFeedback,
          designSystem.focusRing,
          className
        )}
      >
        <MessageCircle
          className="w-5 h-5 text-champagne-gold"
          aria-hidden="true"
        />
        <span>{label}</span>
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 border border-champagne-gold text-espresso hover:bg-champagne-gold/10 font-medium px-6 py-3 rounded-[6px] text-sm",
        INTERACTION_CLASSES.buttonFeedback,
        designSystem.focusRing,
        className
      )}
    >
      <MessageCircle
        className="w-4 h-4 text-champagne-gold"
        aria-hidden="true"
      />
      <span>{label}</span>
    </a>
  );
}
