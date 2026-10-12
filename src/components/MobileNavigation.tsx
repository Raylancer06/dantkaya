"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  MessageCircle,
  MapPin,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { primaryNavigation } from "@/data/navigation";
import { clinicInfo } from "@/data/clinic";
import { cn } from "@/lib/utils";
import { designSystem } from "@/lib/design-system";
import {
  mobileDrawerBackdropVariants,
  mobileDrawerPanelVariants,
  mobileAccordionVariants,
  INTERACTION_CLASSES,
} from "@/lib/motion";

export function MobileNavigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-drawer"
        aria-label={isOpen ? "Close main menu" : "Open main menu"}
        className={cn(
          "inline-flex items-center justify-center min-h-[44px] min-w-[44px] p-2.5 rounded-[6px] text-espresso hover:bg-ivory-secondary transition-colors cursor-pointer touch-manipulation",
          designSystem.focusRing
        )}
      >
        {isOpen ? (
          <X className="w-6 h-6" aria-hidden="true" />
        ) : (
          <Menu className="w-6 h-6" aria-hidden="true" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              variants={
                prefersReducedMotion ? undefined : mobileDrawerBackdropVariants
              }
              initial={prefersReducedMotion ? { opacity: 1 } : "hidden"}
              animate={prefersReducedMotion ? { opacity: 1 } : "visible"}
              exit={prefersReducedMotion ? { opacity: 0 } : "exit"}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-[108px] bg-espresso/40 backdrop-blur-xs z-40"
              aria-hidden="true"
            />

            <motion.div
              id="mobile-navigation-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
              variants={
                prefersReducedMotion ? undefined : mobileDrawerPanelVariants
              }
              initial={prefersReducedMotion ? { opacity: 1 } : "hidden"}
              animate={prefersReducedMotion ? { opacity: 1 } : "visible"}
              exit={prefersReducedMotion ? { opacity: 0 } : "exit"}
              className="fixed left-0 right-0 top-[108px] max-h-[calc(100dvh-108px)] overflow-y-auto bg-ivory-bg border-b border-border-subtle shadow-2xl z-50 px-6 py-6"
            >
              <nav aria-label="Mobile navigation links" className="space-y-1">
                {primaryNavigation.map((item) => {
                  const hasChildren = Boolean(
                    item.children && item.children.length > 0
                  );
                  const isExpanded = expandedGroup === item.label;
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname === item.href ||
                        pathname.startsWith(`${item.href}/`);

                  if (!hasChildren) {
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center justify-between min-h-[44px] py-3 px-3 rounded-[6px] text-base font-medium transition-colors touch-manipulation",
                          active
                            ? "bg-ivory-secondary text-espresso font-semibold"
                            : "text-primary-text hover:bg-ivory-secondary/60",
                          designSystem.focusRing
                        )}
                      >
                        <span>{item.label}</span>
                        {active && (
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-champagne-gold"
                            aria-hidden="true"
                          />
                        )}
                      </Link>
                    );
                  }

                  return (
                    <div
                      key={item.href}
                      className="border-b border-border-subtle/60 last:border-none pb-1"
                    >
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          aria-current={active ? "page" : undefined}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "flex-1 min-h-[44px] flex items-center py-3 px-3 rounded-[6px] text-base font-medium transition-colors touch-manipulation",
                            active
                              ? "text-espresso font-semibold"
                              : "text-primary-text",
                            designSystem.focusRing
                          )}
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedGroup((prev) =>
                              prev === item.label ? null : item.label
                            )
                          }
                          aria-expanded={isExpanded}
                          aria-label={`Expand ${item.label} links`}
                          className={cn(
                            "min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-3 rounded-[6px] text-espresso hover:text-champagne-gold cursor-pointer touch-manipulation",
                            designSystem.focusRing
                          )}
                        >
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
                              isExpanded && "rotate-180 text-champagne-gold"
                            )}
                            aria-hidden="true"
                          />
                        </button>
                      </div>

                      <AnimatePresence>
                        {isExpanded && item.children && (
                          <motion.div
                            variants={
                              prefersReducedMotion
                                ? undefined
                                : mobileAccordionVariants
                            }
                            initial={
                              prefersReducedMotion ? { opacity: 1 } : "hidden"
                            }
                            animate={
                              prefersReducedMotion ? { opacity: 1 } : "visible"
                            }
                            exit={
                              prefersReducedMotion ? { opacity: 0 } : "exit"
                            }
                            className="overflow-hidden pl-4 pr-2 pb-2 space-y-1"
                          >
                            {item.children.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                aria-current={
                                  pathname === sub.href ? "page" : undefined
                                }
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                  "block py-2.5 px-3 rounded-[6px] text-sm transition-colors touch-manipulation",
                                  pathname === sub.href
                                    ? "bg-ivory-secondary text-espresso font-medium"
                                    : "text-muted-grey hover:text-espresso hover:bg-ivory-secondary/50",
                                  designSystem.focusRing
                                )}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </nav>

              <div className="mt-6 pt-6 border-t border-border-subtle space-y-3">
                <Link
                  href="/book-appointment"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center justify-center w-full bg-espresso hover:bg-[#4a2b1f] text-ivory-bg font-medium py-3.5 px-6 rounded-[6px] text-sm shadow-sm",
                    INTERACTION_CLASSES.buttonFeedback,
                    designSystem.focusRing
                  )}
                >
                  Book Appointment
                </Link>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${clinicInfo.phoneRaw}`}
                    className={cn(
                      "flex items-center justify-center gap-2 border border-border-subtle bg-white text-espresso font-medium py-3 px-4 rounded-[6px] text-xs",
                      INTERACTION_CLASSES.buttonFeedback,
                      designSystem.focusRing
                    )}
                  >
                    <Phone
                      className="w-3.5 h-3.5 text-champagne-gold"
                      aria-hidden="true"
                    />
                    <span>Call Clinic</span>
                  </a>
                  <a
                    href={clinicInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center justify-center gap-2 border border-champagne-gold/60 bg-champagne-gold/10 text-espresso font-medium py-3 px-4 rounded-[6px] text-xs",
                      INTERACTION_CLASSES.buttonFeedback,
                      designSystem.focusRing
                    )}
                  >
                    <MessageCircle
                      className="w-3.5 h-3.5 text-champagne-gold"
                      aria-hidden="true"
                    />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="flex items-start gap-2.5 pt-2 text-xs text-muted-grey">
                  <MapPin
                    className="w-4 h-4 text-champagne-gold shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{clinicInfo.address.short}</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
