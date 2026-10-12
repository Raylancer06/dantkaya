/**
 * Centralized Design System Tokens for Dant काया Multispeciality Clinic
 * Extracted directly from the finalized Stitch Homepage (`dant_multi_page_homepage/code.html`)
 * and `modern_premium_healthcare_atelier/DESIGN.md`.
 */

export const designSystem = {
  colors: {
    espresso: "#321B12",
    espressoHover: "#4a2b1f",
    espressoDark: "#20100a",
    primaryText: "#29251F",
    champagneGold: "#B89A60",
    champagneGoldHover: "#c9aa6d",
    goldLight: "#fedb9b",
    ivoryBg: "#F8F5EF",
    ivorySecondary: "#F0EBE3",
    ivoryWarmCard: "#EFE9DF",
    ivoryHover: "#EFECE6",
    mutedGrey: "#746E65",
    borderSubtle: "#E6E0D6",
    white: "#FFFFFF",
    error: "#BA1A1A",
    errorBg: "#FFDAD6",
    success: "#2D5A3C",
    successBg: "#E7F3EB",
  },
  typography: {
    fonts: {
      heading:
        "var(--font-plus-jakarta), var(--font-noto-devanagari), sans-serif",
      sans: "var(--font-inter), var(--font-noto-devanagari), sans-serif",
      serif: "var(--font-cormorant), serif",
    },
    weights: {
      plusJakarta: [500, 600, 700] as const,
      inter: [400, 500, 600, 700] as const,
      notoDevanagari: [400, 500, 600, 700] as const,
      cormorantGaramond: [600] as const,
    },
    scale: {
      heroDisplay:
        "font-heading font-bold text-espresso text-[48px] sm:text-[60px] lg:text-[72px] leading-[1.05] tracking-tight",
      pageDisplay:
        "font-heading font-bold text-espresso text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.1] tracking-tight",
      sectionHeadingLg:
        "font-heading font-bold text-espresso text-[36px] sm:text-[46px] leading-[1.15]",
      sectionHeading:
        "font-heading font-bold text-espresso text-[36px] sm:text-[44px] leading-[1.15]",
      ctaHeading:
        "font-heading font-bold text-ivory-bg text-[40px] sm:text-[48px] leading-[1.1]",
      doctorCardHeading:
        "font-heading font-bold text-[22px] text-espresso leading-snug",
      serviceCardHeading:
        "font-heading font-semibold text-[20px] text-espresso",
      specialtyBarHeading:
        "font-heading font-semibold text-[18px] lg:text-[20px] text-espresso leading-tight",
      bodyLead: "text-[18px] leading-[1.6] text-muted-grey font-normal",
      bodyPhilosophyLead:
        "text-[19px] leading-[1.6] text-champagne-gold font-medium",
      bodyParagraph: "text-[16px] leading-[1.75] text-muted-grey",
      cardBody: "text-[15px] text-muted-grey leading-[1.6]",
      eyebrow:
        "text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-grey",
      heroEyebrow:
        "text-[12px] font-semibold uppercase tracking-[0.2em] text-muted-grey",
    },
  },
  layout: {
    container: "max-w-7xl mx-auto px-6 lg:px-8",
    headerHeight: "h-20", // 80px
    heroPadding: "py-16 lg:py-24",
    specialtyBarPadding: "py-8 lg:py-10",
    sectionPaddingCompact: "py-20 lg:py-24",
    sectionPaddingStandard: "py-20 lg:py-28",
    ctaPadding: "pt-20 lg:pt-28 pb-16",
    footerPadding: "pt-16 pb-12",
  },
  radii: {
    button: "rounded-[6px]",
    cardSm: "rounded-[6px]",
    cardLg: "rounded-lg", // 8px
    badge: "rounded-[4px]",
  },
  shadows: {
    sm: "shadow-sm",
    ambient: "shadow-[0_12px_32px_-8px_rgba(41,37,31,0.06)]",
    ambientLg: "shadow-[0_20px_40px_-15px_rgba(41,37,31,0.06)]",
  },
  motion: {
    shortDuration: 0.18, // 180ms
    mediumDuration: 0.22, // 220ms
    cardDuration: 0.45, // 450ms
    sectionDuration: 0.5, // 500ms
    staggerInterval: 0.07, // 70ms
    easeOut: [0.22, 1, 0.36, 1] as const,
  },
  focusRing:
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89A60] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F5EF]",
} as const;
