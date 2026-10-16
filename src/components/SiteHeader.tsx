"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { DesktopNavigation } from "@/components/DesktopNavigation";
import { MobileNavigation } from "@/components/MobileNavigation";
import { clinicInfo } from "@/data/clinic";
import { cn } from "@/lib/utils";
import { designSystem } from "@/lib/design-system";
import { INTERACTION_CLASSES } from "@/lib/motion";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const isScrolled = window.scrollY > 20;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 backdrop-blur-md border-b transition-[background-color,box-shadow,border-color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled
          ? "bg-[#F8F5EF]/98 border-border-subtle shadow-[0_8px_24px_-12px_rgba(41,37,31,0.08)]"
          : "bg-[#F8F5EF]/95 border-border-subtle/80"
      )}
    >
      {/* Top Utility Bar: Clinic Location, Hours, Direct Phone & Social Media Icons */}
      <div className="bg-espresso text-ivory-bg/90 border-b border-white/10 text-[12px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between gap-4">
          {/* Left: Location & Hours */}
          <div className="flex items-center gap-4 sm:gap-6 truncate">
            <a
              href={clinicInfo.googleMapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-ivory-bg/85 hover:text-[#fedb9b] transition-colors truncate"
            >
              <MapPin
                className="w-3.5 h-3.5 text-champagne-gold shrink-0"
                aria-hidden="true"
              />
              <span className="truncate">
                Boring Canal Road, Near Reliance Trends, Patna
              </span>
            </a>
            <span
              className="hidden md:inline-flex items-center gap-1.5 text-ivory-bg/75"
              aria-label="Clinic hours"
            >
              <Clock
                className="w-3.5 h-3.5 text-champagne-gold shrink-0"
                aria-hidden="true"
              />
              <span>Tue – Sun: 09:00 AM – 08:00 PM | Mon: On Appointment</span>
            </span>
          </div>

          {/* Right: Direct Phone + Social Media Icons */}
          <div className="flex items-center gap-4 sm:gap-5 shrink-0">
            <a
              href={`tel:${clinicInfo.phoneRaw}`}
              className="inline-flex items-center gap-1.5 font-semibold text-[#fedb9b] hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{clinicInfo.phoneDisplay}</span>
            </a>

            <span
              className="h-3.5 w-px bg-white/20 hidden sm:inline-block"
              aria-hidden="true"
            />

            <div
              className="hidden sm:flex items-center gap-2.5"
              aria-label="Social media links"
            >
              <a
                href={clinicInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Dant काया Clinic"
                className="p-1 rounded text-ivory-bg/80 hover:text-[#fedb9b] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/dantkayapatna"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dant काया Clinic on Instagram"
                className="p-1 rounded text-ivory-bg/80 hover:text-[#fedb9b] transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/dantkayapatna"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dant काया Clinic on Facebook"
                className="p-1 rounded text-ivory-bg/80 hover:text-[#fedb9b] transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[80px] sm:h-[86px] flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link
          href="/"
          aria-label="Dant काया Multispeciality Clinic"
          className={cn(
            "flex items-center gap-3 group focus:outline-none rounded-[6px] shrink-0",
            designSystem.focusRing
          )}
        >
          <Image
            src="/images/logo.png"
            alt="Dant काया Multispeciality Clinic Logo"
            width={200}
            height={68}
            className="h-[58px] sm:h-[68px] w-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
            priority
          />
        </Link>

        {/* Desktop Nav Links (Single-line, no Blog, no wrapping) */}
        <DesktopNavigation />

        {/* Primary CTA & Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/book-appointment"
            className={cn(
              "inline-flex items-center justify-center whitespace-nowrap bg-espresso text-ivory-bg text-[13px] sm:text-[14px] font-medium py-2.5 px-4 sm:px-5 rounded-[6px] hover:bg-[#4a2b1f] shadow-sm",
              INTERACTION_CLASSES.buttonFeedback,
              designSystem.focusRing
            )}
          >
            Book Appointment
          </Link>

          {/* Mobile Drawer Trigger */}
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
