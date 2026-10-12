import React from "react";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { clinicInfo } from "@/data/clinic";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { designSystem } from "@/lib/design-system";
import { cn } from "@/lib/utils";

interface AppointmentCTAProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  className?: string;
}

export function AppointmentCTA({
  eyebrow = "PATIENT CONSULTATIONS",
  heading = "Your Next Chapter Starts with a Smile.",
  description = "Schedule an appointment with our specialist clinicians in Patna. Clear guidance, transparent treatment plans, and dedicated attention.",
  primaryLabel = "Book an Appointment",
  primaryHref = "/book-appointment",
  className,
}: AppointmentCTAProps) {
  return (
    <section
      id="contact"
      className={cn(
        "w-full bg-espresso text-ivory-bg pt-20 lg:pt-28 pb-16",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealOnScroll className="max-w-3xl mb-14">
          <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#fedb9b] block mb-3">
            {eyebrow}
          </span>
          <h2 className="font-heading font-bold text-ivory-bg text-[40px] sm:text-[48px] leading-[1.1] mb-6">
            {heading}
          </h2>
          <p className="text-[16px] text-ivory-bg/80 leading-relaxed max-w-xl mb-8 font-normal">
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link
              href={primaryHref}
              className={cn(
                "inline-flex items-center justify-center bg-champagne-gold text-espresso hover:bg-[#c9aa6d] font-semibold text-[15px] px-8 py-4 rounded-[6px] transition-colors shadow-sm active:scale-[0.98]",
                designSystem.focusRing
              )}
            >
              {primaryLabel}
            </Link>

            <a
              href={`tel:${clinicInfo.phoneRaw}`}
              className={cn(
                "inline-flex items-center justify-center text-ivory-bg font-medium text-[15px] border border-champagne-gold/40 px-6 py-4 rounded-[6px] hover:border-champagne-gold hover:text-white transition-colors",
                designSystem.focusRing
              )}
            >
              Call Concierge: {clinicInfo.phoneDisplay}
            </a>
          </div>
        </RevealOnScroll>

        <div className="pt-8 border-t border-white/10 text-[14px] text-ivory-bg/70 flex flex-wrap items-center gap-6">
          <span className="flex items-center gap-2">
            <MapPin
              className="w-[18px] h-[18px] text-champagne-gold shrink-0"
              aria-hidden="true"
            />
            Boring Canal Road, Near Reliance Trends, Patna, Bihar
          </span>
          <span className="hidden sm:inline-block text-white/30">•</span>
          <a
            href={`tel:${clinicInfo.phoneRaw}`}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone
              className="w-[18px] h-[18px] text-champagne-gold shrink-0"
              aria-hidden="true"
            />
            Direct line: {clinicInfo.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
