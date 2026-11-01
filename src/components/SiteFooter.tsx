import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { clinicInfo } from "@/data/clinic";
import {
  footerQuickLinks,
  footerDentalLinks,
  footerSkinLinks,
} from "@/data/navigation";
import { cn } from "@/lib/utils";
import { designSystem } from "@/lib/design-system";

export function SiteFooter() {
  return (
    <footer className="w-full bg-[#20100a] text-ivory-bg pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Column 1: Brand & Contact Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              aria-label="Dant काया Multispeciality Clinic"
              className={cn("inline-block rounded-xs", designSystem.focusRing)}
            >
              <Image
                src="/images/logo.png"
                alt="Dant काया Multispeciality Clinic Logo"
                width={180}
                height={60}
                className="h-[58px] w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#fedb9b]">
              Multispeciality Clinic • Patna
            </p>

            <p className="text-[14px] text-ivory-bg/75 leading-relaxed pt-1">
              A sanctuary in Patna designed around unhurried precision,
              biological stability, Class-B autoclave sterilization, and
              holistic aesthetic harmony.
            </p>

            <div className="space-y-2 pt-2 text-[13px] text-ivory-bg/70">
              <p>
                <strong className="text-white font-medium">Location:</strong>{" "}
                Boring Canal Road, Near Reliance Trends, Patna, Bihar
              </p>
              <p>
                <strong className="text-white font-medium">Hours:</strong> Tue –
                Sun: 09:00 AM – 08:00 PM | Mon: On Appointment
              </p>
              <p>
                <strong className="text-white font-medium">
                  Direct Telephone:
                </strong>{" "}
                <a
                  className={cn(
                    "text-champagne-gold hover:underline rounded-xs font-semibold",
                    designSystem.focusRing
                  )}
                  href={`tel:${clinicInfo.phoneRaw}`}
                >
                  {clinicInfo.phoneDisplay}
                </a>
              </p>
              <p>
                <strong className="text-white font-medium">
                  Email Desk:
                </strong>{" "}
                <a
                  className={cn(
                    "text-champagne-gold hover:underline rounded-xs",
                    designSystem.focusRing
                  )}
                  href={`mailto:${clinicInfo.email}`}
                >
                  {clinicInfo.email}
                </a>
              </p>
            </div>

            {/* Social Media Channels */}
            <div className="flex items-center gap-2.5 pt-3" aria-label="Social media channels">
              <a
                href={clinicInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Dant काया Clinic"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#25D366] hover:text-white flex items-center justify-center text-ivory-bg/85 transition-colors"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={clinicInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dant काया Clinic on Instagram"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#E4405F] hover:text-white flex items-center justify-center text-ivory-bg/85 transition-colors"
              >
                <svg
                  className="w-4 h-4"
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
                href={clinicInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dant काया Clinic on Facebook"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#1877F2] hover:text-white flex items-center justify-center text-ivory-bg/85 transition-colors"
              >
                <svg
                  className="w-4 h-4"
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

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#fedb9b]">
              QUICK LINKS
            </p>
            <ul className="space-y-2 text-[14px] text-ivory-bg/75">
              {footerQuickLinks.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <Link
                    className={cn(
                      "hover:text-white transition-colors duration-200 rounded-xs",
                      designSystem.focusRing
                    )}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Dental Care (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#fedb9b]">
              DENTAL CARE
            </p>
            <ul className="space-y-2 text-[14px] text-ivory-bg/75">
              {footerDentalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    className={cn(
                      "hover:text-white transition-colors duration-200 rounded-xs",
                      designSystem.focusRing
                    )}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Skin & Aesthetics (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#fedb9b]">
              SKIN &amp; AESTHETICS
            </p>
            <ul className="space-y-2 text-[14px] text-ivory-bg/75">
              {footerSkinLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    className={cn(
                      "hover:text-white transition-colors duration-200 rounded-xs",
                      designSystem.focusRing
                    )}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Sub-Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-ivory-bg/60">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} Dant काया Multispeciality Clinic. All Rights Reserved. Patna, Bihar.
            </p>
            <span className="hidden sm:inline text-ivory-bg/30">•</span>
            <p className="text-ivory-bg/75">
              Designed &amp; Developed by{" "}
              <a
                href="https://raylancer.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-champagne-gold hover:text-white transition-colors underline underline-offset-2 font-medium"
              >
                Raylancer Services
              </a>
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link
              className={cn(
                "hover:text-white transition-colors duration-200 rounded-xs",
                designSystem.focusRing
              )}
              href="/contact"
            >
              Patient Confidentiality Protocol
            </Link>
            <Link
              className={cn(
                "hover:text-white transition-colors duration-200 rounded-xs",
                designSystem.focusRing
              )}
              href="/book-appointment"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
