import type { Variants, Transition } from "motion/react";

/**
 * Centralized Motion & Interaction System for Dant काया Multispeciality Clinic
 *
 * Timing Guidelines:
 * - Short interactions (buttons, links, dropdowns): 150–220 ms (0.18s)
 * - Mobile drawer / accordion transitions: 200–240 ms (0.22s)
 * - Section & card entrances: 400–650 ms (0.48s – 0.50s)
 * - Small stagger intervals: 50–90 ms (0.07s)
 * - Consistent ease-out curve: cubic-bezier(0.22, 1, 0.36, 1)
 */

export const MOTION_TIMING = {
  short: 0.18, // 180ms
  medium: 0.22, // 220ms
  card: 0.45, // 450ms
  section: 0.5, // 500ms
  stagger: 0.07, // 70ms
  easeOut: [0.22, 1, 0.36, 1] as const,
} as const;

export const defaultSectionTransition: Transition = {
  duration: MOTION_TIMING.section,
  ease: MOTION_TIMING.easeOut,
};

export const shortInteractionTransition: Transition = {
  duration: MOTION_TIMING.short,
  ease: MOTION_TIMING.easeOut,
};

export const mediumInteractionTransition: Transition = {
  duration: MOTION_TIMING.medium,
  ease: MOTION_TIMING.easeOut,
};

/**
 * Subtle scroll-triggered section reveal variants
 */
export const sectionRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultSectionTransition,
  },
};

/**
 * Staggered parent container variants for doctor and service card grids
 */
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: MOTION_TIMING.stagger,
      delayChildren: 0.03,
    },
  },
};

/**
 * Individual staggered card entrance variants
 */
export const staggerItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION_TIMING.card,
      ease: MOTION_TIMING.easeOut,
    },
  },
};

/**
 * Desktop navigation dropdown menu variants
 */
export const dropdownMenuVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 6,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: shortInteractionTransition,
  },
  exit: {
    opacity: 0,
    y: 4,
    transition: {
      duration: 0.15,
      ease: MOTION_TIMING.easeOut,
    },
  },
};

/**
 * Mobile navigation backdrop & panel variants
 */
export const mobileDrawerBackdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.18 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.16 },
  },
};

export const mobileDrawerPanelVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: mediumInteractionTransition,
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.18,
      ease: MOTION_TIMING.easeOut,
    },
  },
};

export const mobileAccordionVariants: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: MOTION_TIMING.easeOut,
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.16,
      ease: MOTION_TIMING.easeOut,
    },
  },
};

/**
 * Shared CSS interaction classes (zero client JS overhead, respects prefers-reduced-motion via globals.css)
 */
export const INTERACTION_CLASSES = {
  /** Subtle button hover, press feedback (0.98 tap scale), and disabled states */
  buttonFeedback:
    "transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none touch-manipulation",
  /** Small arrow icon movement on button or card hover */
  arrowSlide:
    "transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-focus-visible:translate-x-1",
  /** Restrained 1.03 image zoom for service and article cards (within 1.02–1.04 spec) */
  serviceImageZoom:
    "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]",
  /** Restrained portrait treatment for doctor cards (never distorts faces or aggressively zooms portraits) */
  doctorPortraitHover:
    "transition-opacity duration-300 ease-out group-hover:opacity-95",
  /** Card border & shadow elevation without layout shift */
  cardSurfaceHover:
    "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-champagne-gold/60 hover:shadow-[0_20px_40px_-15px_rgba(41,37,31,0.07)]",
  /** Navigation link animated underline transition */
  navUnderlineBase:
    "relative py-1 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full after:transition-transform after:duration-200 after:ease-[cubic-bezier(0.22,1,0.36,1)]",
  navUnderlineActive:
    "text-espresso font-semibold after:bg-espresso after:scale-x-100 after:origin-left",
  navUnderlineInactive:
    "text-muted-grey hover:text-espresso focus-visible:text-espresso after:bg-champagne-gold after:scale-x-0 hover:after:scale-x-100 focus-visible:after:scale-x-100 after:origin-left",
} as const;
