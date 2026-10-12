"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { primaryNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { designSystem } from "@/lib/design-system";
import { dropdownMenuVariants, INTERACTION_CLASSES } from "@/lib/motion";

export function DesktopNavigation() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const toggleRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const submenuRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && openDropdown) {
        const activeLabel = openDropdown;
        setOpenDropdown(null);
        toggleRefs.current[activeLabel]?.focus();
      }
    }
    function handlePointerDownOutside(e: PointerEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDownOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDownOutside);
    };
  }, [openDropdown]);

  const isRouteActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav
      ref={navRef}
      aria-label="Primary Navigation"
      className="hidden lg:flex items-center gap-6 xl:gap-8 text-[14px] font-medium text-muted-grey whitespace-nowrap"
    >
      {primaryNavigation.map((item) => {
        const active = isRouteActive(item.href);
        const hasChildren = Boolean(item.children && item.children.length > 0);
        const isOpen = openDropdown === item.label;
        const menuId = `desktop-submenu-${item.label
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")}`;

        if (!hasChildren) {
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "rounded-xs whitespace-nowrap",
                INTERACTION_CLASSES.navUnderlineBase,
                active
                  ? INTERACTION_CLASSES.navUnderlineActive
                  : INTERACTION_CLASSES.navUnderlineInactive,
                designSystem.focusRing
              )}
            >
              {item.label}
            </Link>
          );
        }

        return (
          <div
            key={item.href}
            className="relative group inline-flex items-center gap-0.5 whitespace-nowrap"
            onPointerEnter={(e) => {
              if (e.pointerType === "mouse") {
                setOpenDropdown(item.label);
              }
            }}
            onPointerLeave={(e) => {
              if (e.pointerType === "mouse") {
                setOpenDropdown(null);
              }
            }}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                setOpenDropdown((prev) =>
                  prev === item.label ? null : prev
                );
              }
            }}
          >
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "rounded-xs whitespace-nowrap",
                INTERACTION_CLASSES.navUnderlineBase,
                active
                  ? INTERACTION_CLASSES.navUnderlineActive
                  : INTERACTION_CLASSES.navUnderlineInactive,
                designSystem.focusRing
              )}
            >
              {item.label}
            </Link>
            <button
              ref={(el) => {
                toggleRefs.current[item.label] = el;
              }}
              type="button"
              aria-expanded={isOpen}
              aria-haspopup="true"
              aria-controls={menuId}
              aria-label={`Toggle ${item.label} submenu`}
              onClick={() =>
                setOpenDropdown((prev) =>
                  prev === item.label ? null : item.label
                )
              }
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  setOpenDropdown(item.label);
                  requestAnimationFrame(() => {
                    const firstLink =
                      submenuRefs.current[item.label]?.querySelector<HTMLAnchorElement>(
                        "a"
                      );
                    firstLink?.focus();
                  });
                }
              }}
              className={cn(
                "p-1 rounded hover:text-espresso transition-colors cursor-pointer touch-manipulation",
                designSystem.focusRing
              )}
            >
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  isOpen && "rotate-180 text-espresso"
                )}
                aria-hidden="true"
              />
            </button>

            <AnimatePresence>
              {isOpen && item.children && (
                <motion.div
                  id={menuId}
                  ref={(el) => {
                    submenuRefs.current[item.label] = el;
                  }}
                  variants={prefersReducedMotion ? undefined : dropdownMenuVariants}
                  initial={prefersReducedMotion ? { opacity: 1 } : "hidden"}
                  animate={prefersReducedMotion ? { opacity: 1 } : "visible"}
                  exit={prefersReducedMotion ? { opacity: 0 } : "exit"}
                  className="absolute left-0 top-full pt-3 w-72 z-50 whitespace-normal"
                >
                  <div className="bg-ivory-bg border border-border-subtle rounded-xl shadow-[0_20px_45px_-12px_rgba(41,37,31,0.16)] p-2 space-y-0.5">
                    {item.children.map((sub) => {
                      const subActive = pathname === sub.href;
                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          aria-current={subActive ? "page" : undefined}
                          onClick={() => setOpenDropdown(null)}
                          className={cn(
                            "group/item block px-3.5 py-2.5 rounded-lg transition-colors duration-150",
                            subActive
                              ? "bg-ivory-secondary text-espresso"
                              : "hover:bg-ivory-secondary/80 text-primary-text",
                            designSystem.focusRing
                          )}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[13px] font-semibold text-espresso group-hover/item:text-champagne-gold transition-colors">
                              {sub.label}
                            </span>
                            <ArrowRight
                              className="w-3 h-3 text-champagne-gold opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-150 shrink-0"
                              aria-hidden="true"
                            />
                          </div>
                          {sub.description && (
                            <p className="text-[11px] text-muted-grey mt-0.5 leading-snug font-normal">
                              {sub.description}
                            </p>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </nav>
  );
}
