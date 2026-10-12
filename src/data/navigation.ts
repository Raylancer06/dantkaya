export interface NavSubItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavSubItem[];
}

export const primaryNavigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Our Doctors",
    href: "/doctors",
  },
  {
    label: "Dental Services",
    href: "/dental-services",
    children: [
      {
        label: "Root Canal Treatment",
        href: "/dental-services/root-canal-treatment",
        description: "Single-sitting & specialist MDS endodontics",
      },
      {
        label: "Dental Implants",
        href: "/dental-services/dental-implants",
        description: "Biocompatible titanium tooth replacement",
      },
      {
        label: "Clear Aligners",
        href: "/dental-services/clear-aligners",
        description: "Invisible removable orthodontic alignment",
      },
      {
        label: "Crown & Bridge",
        href: "/dental-services/crown-and-bridge",
        description: "Metal-free Zirconia & ceramic prosthetics",
      },
      {
        label: "Smile Designing",
        href: "/dental-services/smile-designing",
        description: "Conservative veneers & aesthetic bonding",
      },
      {
        label: "Third Molar (Wisdom) Surgery",
        href: "/dental-services/third-molar-surgery",
        description: "Atraumatic impacted wisdom tooth removal",
      },
    ],
  },
  {
    label: "Skin & Aesthetics",
    href: "/skin-aesthetics",
    children: [
      {
        label: "Skin Rejuvenation",
        href: "/skin-aesthetics/skin-rejuvenation",
        description: "Dermal hydration & cellular barrier repair",
      },
      {
        label: "Acne & Scar Treatment",
        href: "/skin-aesthetics/acne-scar-treatment",
        description: "Active acne control & collagen scar revision",
      },
      {
        label: "Laser Hair Reduction",
        href: "/skin-aesthetics/laser-hair-reduction",
        description: "Cooling-assisted laser hair reduction",
      },
      {
        label: "Medical Hydrafacial",
        href: "/skin-aesthetics/hydrafacial",
        description: "Vortex pore cleansing & antioxidant infusion",
      },
      {
        label: "Chemical Peels",
        href: "/skin-aesthetics/chemical-peels",
        description: "Dermatological-grade exfoliation & clarity",
      },
      {
        label: "Microneedling",
        href: "/skin-aesthetics/microneedling",
        description: "Collagen induction & texture refinement",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const footerQuickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Doctors", href: "/doctors" },
  { label: "Clinic Experience", href: "/about" },
  { label: "Research & Blog", href: "/blog" },
  { label: "Book Appointment", href: "/book-appointment" },
];

export const footerDentalLinks = [
  { label: "Dental Implants", href: "/dental-services/dental-implants" },
  { label: "Root Canal Treatment", href: "/dental-services/root-canal-treatment" },
  { label: "Clear Aligners", href: "/dental-services/clear-aligners" },
  { label: "Smile Designing", href: "/dental-services/smile-designing" },
  { label: "Pediatric Dentistry", href: "/dental-services/child-dental-treatment" },
];

export const footerSkinLinks = [
  { label: "Facial Aesthetics", href: "/skin-aesthetics" },
  { label: "Skin Rejuvenation", href: "/skin-aesthetics/skin-rejuvenation" },
  { label: "Chemical Peels", href: "/skin-aesthetics/chemical-peels" },
  { label: "Microneedling", href: "/skin-aesthetics/microneedling" },
  { label: "Location & Visiting Hours", href: "/contact" },
];
