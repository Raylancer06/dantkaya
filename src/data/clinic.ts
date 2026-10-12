export interface ClinicInfo {
  name: string;
  brandTitle: string;
  hindiTitle: string;
  subtitle: string;
  tagline: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappNumber: string;
  whatsappUrl: string;
  email: string;
  address: {
    street: string;
    landmark: string;
    city: string;
    state: string;
    postalCode: string;
    full: string;
    short: string;
  };
  hours: {
    weekdays: string;
    sunday: string;
    detailed: Array<{
      days: string;
      time: string;
      note?: string;
    }>;
  };
  googleMapsSearchUrl: string;
  googleMapsEmbedUrl: string;
  specialtiesBar: Array<{
    id: string;
    label: string;
    href: string;
    description: string;
  }>;
  philosophy: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
  };
  environmentPillars: Array<{
    title: string;
    description: string;
  }>;
}

export const clinicInfo: ClinicInfo = {
  name: "Dant काया Multispeciality Clinic",
  brandTitle: "Dant",
  hindiTitle: "काया",
  subtitle: "Multispeciality Clinic",
  tagline: "Clinical Precision in Modern Dentistry & Skin Aesthetics",
  phoneDisplay: "+91 89339 32525",
  phoneRaw: "+918933932525",
  whatsappNumber: "918933932525",
  whatsappUrl:
    "https://wa.me/918933932525?text=Hello%20Dant%20%E0%A4%95%E0%A4%BE%E0%A4%AF%E0%A4%BE%20Clinic,%20I%20would%20like%20to%20schedule%20a%20consultation.",
  email: "care@dantkaya.com",
  address: {
    street: "Boring Canal Road",
    landmark: "Near Reliance Trends",
    city: "Patna",
    state: "Bihar",
    postalCode: "800001",
    full: "Boring Canal Road, Near Reliance Trends, Patna, Bihar 800001",
    short: "Boring Canal Road, Near Reliance Trends, Patna - 800001",
  },
  hours: {
    weekdays: "Mon – Sat: 09:30 AM – 08:00 PM",
    sunday: "Sunday: By Prior Appointment",
    detailed: [
      {
        days: "Monday – Saturday",
        time: "09:30 AM – 08:00 PM",
        note: "Specialist OPD & Clinical Procedures",
      },
      {
        days: "Sunday",
        time: "By Prior Appointment",
        note: "Scheduled Consultations & Urgent Dental Care",
      },
    ],
  },
  googleMapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=Dant+Kaya+Multispeciality+Clinic+Boring+Canal+Road+Near+Reliance+Trends+Patna+Bihar+800001",
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=Boring+Canal+Road+Near+Reliance+Trends+Patna+Bihar+800001&output=embed",
  specialtiesBar: [
    {
      id: "dental",
      label: "Dental",
      href: "/dental-services",
      description: "Comprehensive Oral & Restorative Care",
    },
    {
      id: "skin",
      label: "Skin",
      href: "/skin-aesthetics",
      description: "Clinical Dermatology & Facial Rejuvenation",
    },
    {
      id: "laser",
      label: "Laser",
      href: "/skin-aesthetics/laser-hair-reduction",
      description: "Precision Laser Hair & Skin Protocols",
    },
    {
      id: "implant",
      label: "Implant",
      href: "/dental-services/dental-implants",
      description: "Biocompatible Titanium Tooth Replacement",
    },
    {
      id: "aligners",
      label: "Aligners",
      href: "/dental-services/clear-aligners",
      description: "Invisible Digital Orthodontic Correction",
    },
  ],
  philosophy: {
    eyebrow: "Practice Philosophy",
    heading: "Where Clinical Discipline Meets Architectural Calm",
    paragraphs: [
      "At Dant काया Multispeciality Clinic, we believe medical excellence requires both technical mastery and unhurried human attention. Located on Boring Canal Road in Patna, our practice brings together specialist endodontics, oral surgery, implantology, and clinical skin aesthetics under one roof.",
      "Every consultation begins with systematic diagnostics rather than rushed procedures—ensuring every treatment plan is transparent, conservative, and tailored to your long-term anatomical health.",
    ],
  },
  environmentPillars: [
    {
      title: "Multi-Step Sterilization Protocol",
      description:
        "Strict instrument autoclaving, sealed barrier protection, and medical-grade surface disinfection between every single patient visit.",
    },
    {
      title: "Low-Radiation Digital Diagnostics",
      description:
        "High-clarity digital radiography and magnified intraoral assessment for accurate root canal, surgical, and implant planning.",
    },
    {
      title: "Calm, Unhurried Consultations",
      description:
        "Private consultation suites designed to eliminate clinical anxiety, giving you time to understand your diagnosis and options clearly.",
    },
  ],
};
