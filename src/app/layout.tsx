import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Inter,
  Noto_Sans_Devanagari,
  Cormorant_Garamond,
} from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppContactButton } from "@/components/WhatsAppContactButton";
import { clinicInfo } from "@/data/clinic";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-devanagari",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dantkaya.com"),
  title: {
    default: "Dant काया Multispeciality Clinic | Patna",
    template: "%s | Dant काया Multispeciality Clinic, Patna",
  },
  description:
    "Dant काया Multispeciality Clinic at Boring Canal Road, Patna offers specialist Root Canal Treatment (MDS Endodontist), Dental Implants, Clear Aligners, Oral Surgery, and Clinical Skin & Laser Aesthetics.",
  keywords: [
    "Dant Kaya Multispeciality Clinic Patna",
    "Dentist in Boring Canal Road Patna",
    "Root Canal Specialist Patna",
    "Dr Abhinav Kumar Dentist Patna",
    "Dr Sumit Kumar Dentist Patna",
    "Dr Anisha Deb Endodontist Patna",
    "Dental Implants Patna",
    "Skin and Laser Clinic Boring Canal Road Patna",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: clinicInfo.name,
    title: "Dant काया Multispeciality Clinic | Patna",
    description:
      "Comprehensive dental care, microscopic endodontics, titanium implants, clear aligners, and clinical skin aesthetics on Boring Canal Road, Patna.",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: clinicInfo.name,
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${plusJakarta.variable} ${inter.variable} ${notoDevanagari.variable} ${cormorantGaramond.variable}`}
    >
      <body className="min-h-dvh flex flex-col bg-ivory-bg text-primary-text selection:bg-[#fedb9b] selection:text-espresso font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-espresso focus:text-white focus:px-4 focus:py-2.5 focus:rounded-[6px] focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-grow pt-[108px]">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppContactButton variant="floating" label="WhatsApp Clinic" />
      </body>
    </html>
  );
}
