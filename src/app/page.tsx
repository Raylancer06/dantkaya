import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Sparkles,
  Microscope,
  ArrowRight,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { HeroDoctorCarousel } from "@/components/HeroDoctorCarousel";

const heroQuickTreatments = [
  {
    title: "Single-Sitting RCT",
    subtitle: "MDS Endodontist",
    href: "/dental-services/root-canal-treatment",
    image: "/images/dental-root-canal.png",
  },
  {
    title: "Dental Implants",
    subtitle: "Titanium Precision",
    href: "/dental-services/dental-implants",
    image: "/images/dental-implants.png",
  },
  {
    title: "Clear Aligners",
    subtitle: "Invisible Ortho",
    href: "/dental-services/clear-aligners",
    image: "/images/dental-aligners.png",
  },
  {
    title: "Hydrafacial & Laser",
    subtitle: "FFAC Aesthetics",
    href: "/skin-aesthetics/hydrafacial",
    image: "/images/skin-hydrafacial.jpg",
  },
];

const specialtyTiles = [
  {
    code: "01 / DENTAL",
    title: "Dental Care",
    subtitle: "Preventive & Restorative",
    href: "/dental-services",
    image: "/images/dental-root-canal.png",
  },
  {
    code: "02 / SURGERY",
    title: "Dental Implants",
    subtitle: "Bio-Titanium Roots",
    href: "/dental-services/dental-implants",
    image: "/images/dental-implants.png",
  },
  {
    code: "03 / ORTHO",
    title: "Clear Aligners",
    subtitle: "Invisible Correction",
    href: "/dental-services/clear-aligners",
    image: "/images/dental-aligners.png",
  },
  {
    code: "04 / COSMETIC",
    title: "Smile Design",
    subtitle: "Veneers & Crowns",
    href: "/dental-services/smile-designing",
    image: "/images/dental-crown.jpg",
  },
  {
    code: "05 / DERMA",
    title: "Skin Aesthetics",
    subtitle: "Medical Facial Care",
    href: "/skin-aesthetics",
    image: "/images/skin-hydrafacial.jpg",
  },
];

export default function HomePage() {
  return (
    <>
      {/* SECTION 1: ELEVATED VISUAL HERO */}
      <section className="relative w-full bg-ivory-bg overflow-hidden border-b border-border-subtle">
        {/* Grand Opening Announcement Ribbon */}
        <div className="w-full bg-espresso text-ivory-bg py-2.5 px-4 text-center border-b border-white/10 relative z-10">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-[13px] font-medium">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-champagne-gold text-espresso text-[11px] font-bold uppercase tracking-wider">
              Grand Opening
            </span>
            <span>
              <strong>Launching on 26 October 2026</strong> • Boring Canal Road, Patna
            </span>
            <span className="text-[#fedb9b] hidden md:inline">
              (Consultations starting from 27 Oct)
            </span>
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-1 text-[#fedb9b] hover:text-white underline font-semibold ml-1 sm:ml-2 transition-colors"
            >
              Advance Booking Open →
            </Link>
          </div>
        </div>

        {/* Subtle ambient radial glow */}
        <div
          className="pointer-events-none absolute -top-24 right-0 w-[520px] h-[520px] rounded-full bg-champagne-gold/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: High-Impact Headline, CTAs & Visual Quick-Access Cards */}
          <RevealOnScroll className="lg:col-span-7 flex flex-col justify-center">
            {/* Launching Badge & Clinic Identifier */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f6eee3] border border-[#dfcca9] shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-champagne-gold opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#b89564]" />
                </span>
                <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.16em] text-espresso">
                  Launching on 26 October 2026
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ivory-secondary border border-border-subtle text-[11px] font-medium text-muted-grey">
                <span className="font-semibold text-espresso">Dant काया</span>
                <span>• Boring Canal Road, Patna</span>
              </div>
            </div>

            <h1 className="font-heading font-bold text-espresso text-[40px] sm:text-[54px] lg:text-[62px] leading-[1.06] tracking-tight">
              A Better Smile &amp;{" "}
              <span className="text-champagne-gold">Radiant Skin</span> Begin
              Here.
            </h1>

            <p className="mt-4 text-[17px] leading-[1.6] text-muted-grey max-w-xl font-normal">
              Specialist microscopic dentistry, titanium implants, clear
              aligners, and doctor-led facial aesthetics under one roof on
              Boring Canal Road.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4 sm:gap-6">
              <PrimaryButton href="/book-appointment" showArrow>
                Book an Appointment
              </PrimaryButton>
              <SecondaryButton href="/dental-services" tone="underline">
                Explore Treatments{" "}
                <span
                  className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </SecondaryButton>
            </div>
            <p className="text-[12px] text-muted-grey mt-3 flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold shrink-0" />
              <span>Opening on 26 Oct 2026 • Patient consultations available from 27 Oct</span>
            </p>

            {/* Interactive Visual Quick-Access Treatment Strip */}
            <div className="mt-9 pt-7 border-t border-border-subtle">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-grey mb-3.5">
                POPULAR SPECIALIST PROTOCOLS
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {heroQuickTreatments.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center gap-2.5 p-2 rounded-lg bg-white border border-border-subtle hover:border-champagne-gold shadow-2xs transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <div className="relative w-11 h-11 rounded-md overflow-hidden shrink-0 bg-ivory-secondary">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="44px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[12px] font-bold text-espresso group-hover:text-champagne-gold transition-colors truncate">
                        {item.title}
                      </p>
                      <p className="text-[10px] text-muted-grey truncate">
                        {item.subtitle}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Right Column: Interactive Looping Doctor Carousel + Floating Sterility Badge */}
          <RevealOnScroll
            delay={0.08}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <HeroDoctorCarousel />
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 2: VISUAL SPECIALITY NAVIGATION BAR WITH THUMBNAILS */}
      <section
        id="specialities"
        className="w-full bg-ivory-secondary border-b border-border-subtle py-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {specialtyTiles.map((tile, idx) => (
                <Link
                  key={tile.href}
                  href={tile.href}
                  className={`group bg-white rounded-xl p-4 border border-border-subtle hover:border-champagne-gold shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between gap-3 ${
                    idx === 4 ? "col-span-2 md:col-span-1" : ""
                  }`}
                >
                  <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden bg-ivory-secondary">
                    <Image
                      src={tile.image}
                      alt={tile.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 to-transparent" />
                    <span className="absolute bottom-2 left-2.5 text-[10px] font-semibold uppercase tracking-widest text-[#fedb9b]">
                      {tile.code}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h3 className="font-heading font-bold text-[16px] text-espresso group-hover:text-champagne-gold transition-colors leading-tight">
                        {tile.title}
                      </h3>
                      <p className="text-[11px] text-muted-grey mt-0.5">
                        {tile.subtitle}
                      </p>
                    </div>
                    <ArrowRight
                      className="w-4 h-4 text-champagne-gold shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 3: VISUAL PRACTICE PHILOSOPHY (IMAGE + 3 CONCISE PILLARS) */}
      <section
        id="about"
        className="w-full bg-ivory-bg py-16 lg:py-24 border-b border-border-subtle"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Visual Showcase */}
            <RevealOnScroll className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border-subtle shadow-md bg-ivory-secondary">
                <Image
                  src="/images/clinic-lounge.png"
                  alt="Dant काया Multispeciality Clinic operatory suite on Boring Canal Road, Patna"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-3.5 rounded-xl border border-border-subtle flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin
                      className="w-4 h-4 text-champagne-gold shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-xs font-semibold text-espresso">
                      Near Reliance Trends, Boring Canal Road
                    </span>
                  </div>
                  <Link
                    href="/about"
                    className="text-[11px] font-bold text-champagne-gold uppercase tracking-wider hover:underline"
                  >
                    Our Story →
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            {/* Concise Visual Pillars */}
            <RevealOnScroll delay={0.07} className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-champagne-gold block mb-2">
                  PRACTICE PHILOSOPHY
                </span>
                <h2 className="font-heading font-bold text-espresso text-[32px] sm:text-[42px] leading-[1.15]">
                  Where Advanced Dentistry Meets Aesthetic Excellence
                </h2>
                <p className="mt-3 text-[16px] leading-[1.6] text-muted-grey max-w-2xl">
                  Unhurried diagnostics, hospital-grade sterility, and
                  specialist-led dental and skin procedures tailored to your
                  long-term anatomical health.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-border-subtle shadow-2xs">
                  <ShieldCheck
                    className="w-5 h-5 text-champagne-gold mb-2.5"
                    aria-hidden="true"
                  />
                  <h3 className="font-heading text-sm font-bold text-espresso">
                    Class-B Sterilization
                  </h3>
                  <p className="text-xs text-muted-grey mt-1 leading-relaxed">
                    Sealed autoclave instrument pouches for every single visit.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-border-subtle shadow-2xs">
                  <Microscope
                    className="w-5 h-5 text-champagne-gold mb-2.5"
                    aria-hidden="true"
                  />
                  <h3 className="font-heading text-sm font-bold text-espresso">
                    3D Digital Precision
                  </h3>
                  <p className="text-xs text-muted-grey mt-1 leading-relaxed">
                    Low-radiation RVG sensors and rotary endodontic accuracy.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-border-subtle shadow-2xs">
                  <Sparkles
                    className="w-5 h-5 text-champagne-gold mb-2.5"
                    aria-hidden="true"
                  />
                  <h3 className="font-heading text-sm font-bold text-espresso">
                    MDS &amp; FFAC Doctors
                  </h3>
                  <p className="text-xs text-muted-grey mt-1 leading-relaxed">
                    Direct care by specialist surgeons and aesthetic clinicians.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 4: THREE-DOCTOR PREVIEW */}
      <section
        id="doctors"
        className="w-full bg-ivory-secondary py-16 lg:py-24 border-b border-border-subtle"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-champagne-gold block mb-2">
                CLINICAL LEADERSHIP
              </span>
              <h2 className="font-heading font-bold text-espresso text-[32px] sm:text-[42px] leading-[1.15]">
                Meet Our Specialist Doctors
              </h2>
            </div>
            <Link
              href="/doctors"
              className="group inline-flex items-center gap-2 text-[14px] font-semibold text-espresso hover:text-champagne-gold transition-colors"
            >
              <span>View Full Clinical Roster</span>
              <ArrowRight
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Doctor 1: Dr. Abhinav Kumar */}
            <RevealOnScroll>
              <div className="flex flex-col group bg-white rounded-xl p-5 border border-border-subtle shadow-sm hover:border-champagne-gold/60 transition-all duration-300 h-full">
                <Link
                  href="/doctors/dr-abhinav-kumar"
                  className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-ivory-secondary mb-4 block"
                >
                  <Image
                    src="/images/dr-abhinav.jpeg"
                    alt="Dr. Abhinav Kumar BDS, MBA, MIDA"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-espresso/85 backdrop-blur-xs text-[#fedb9b] text-[10px] font-semibold uppercase tracking-wider">
                    BDS, MBA, MIDA
                  </span>
                </Link>
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-[21px] text-espresso leading-snug">
                      <Link
                        href="/doctors/dr-abhinav-kumar"
                        className="hover:text-champagne-gold transition-colors"
                      >
                        Dr. Abhinav Kumar
                      </Link>
                    </h3>
                    <p className="text-[13px] font-semibold text-champagne-gold mt-0.5">
                      Oral &amp; Dental Surgeon • Ex-Smile Foundation, Delhi
                    </p>
                  </div>
                  <Link
                    href="/doctors/dr-abhinav-kumar"
                    className="group/link inline-flex items-center justify-between pt-4 mt-4 border-t border-border-subtle/60 text-[13px] font-semibold text-espresso hover:text-champagne-gold transition-colors"
                  >
                    <span>View Biography &amp; Credentials</span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            {/* Doctor 2: Dr. Sumit Kumar */}
            <RevealOnScroll delay={0.07}>
              <div className="flex flex-col group bg-white rounded-xl p-5 border border-border-subtle shadow-sm hover:border-champagne-gold/60 transition-all duration-300 h-full">
                <Link
                  href="/doctors/dr-sumit-kumar"
                  className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-ivory-secondary mb-4 block"
                >
                  <Image
                    src="/images/dr-sumit.jpeg"
                    alt="Dr. Sumit Kumar BDS, FFAC"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-espresso/85 backdrop-blur-xs text-[#fedb9b] text-[10px] font-semibold uppercase tracking-wider">
                    BDS, FFAC
                  </span>
                </Link>
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-[21px] text-espresso leading-snug">
                      <Link
                        href="/doctors/dr-sumit-kumar"
                        className="hover:text-champagne-gold transition-colors"
                      >
                        Dr. Sumit Kumar
                      </Link>
                    </h3>
                    <p className="text-[13px] font-semibold text-champagne-gold mt-0.5">
                      Oral Surgeon &amp; Facial Aesthetics • Ex-Realtooth, Lucknow
                    </p>
                  </div>
                  <Link
                    href="/doctors/dr-sumit-kumar"
                    className="group/link inline-flex items-center justify-between pt-4 mt-4 border-t border-border-subtle/60 text-[13px] font-semibold text-espresso hover:text-champagne-gold transition-colors"
                  >
                    <span>View Biography &amp; Credentials</span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            {/* Doctor 3: Dr. Anisha Deb */}
            <RevealOnScroll delay={0.14}>
              <div className="flex flex-col group bg-white rounded-xl p-5 border border-border-subtle shadow-sm hover:border-champagne-gold/60 transition-all duration-300 h-full">
                <Link
                  href="/doctors/dr-anisha-deb"
                  className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-ivory-secondary mb-4 block"
                >
                  <Image
                    src="/images/dr-anisha.jpeg"
                    alt="Dr. Anisha Deb BDS, MDS, FFAC"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-espresso/85 backdrop-blur-xs text-[#fedb9b] text-[10px] font-semibold uppercase tracking-wider">
                    BDS, MDS, FFAC
                  </span>
                </Link>
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-[21px] text-espresso leading-snug">
                      <Link
                        href="/doctors/dr-anisha-deb"
                        className="hover:text-champagne-gold transition-colors"
                      >
                        Dr. Anisha Deb
                      </Link>
                    </h3>
                    <p className="text-[13px] font-semibold text-champagne-gold mt-0.5">
                      MDS Root Canal Specialist • Ex-Max Hospital, New Delhi
                    </p>
                  </div>
                  <Link
                    href="/doctors/dr-anisha-deb"
                    className="group/link inline-flex items-center justify-between pt-4 mt-4 border-t border-border-subtle/60 text-[13px] font-semibold text-espresso hover:text-champagne-gold transition-colors"
                  >
                    <span>View Biography &amp; Credentials</span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURED DENTAL TREATMENTS */}
      <section
        id="dental-services"
        className="w-full bg-ivory-bg py-16 lg:py-24 border-b border-border-subtle"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-champagne-gold block mb-2">
                RESTORATIVE &amp; SURGICAL DENTISTRY
              </span>
              <h2 className="font-heading font-bold text-espresso text-[32px] sm:text-[42px] leading-[1.15]">
                Featured Dental Care
              </h2>
            </div>
            <Link
              href="/dental-services"
              className="group inline-flex items-center gap-1.5 text-[14px] font-semibold text-espresso hover:text-champagne-gold transition-colors"
            >
              <span>Browse All Dental Treatments</span>
              <ArrowRight
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Treatment 1: Microscopic Root Canal */}
            <RevealOnScroll>
              <div className="bg-white rounded-xl overflow-hidden border border-border-subtle shadow-sm hover:border-champagne-gold/60 transition-all duration-300 flex flex-col group h-full">
                <Link
                  href="/dental-services/root-canal-treatment"
                  className="relative w-full aspect-[4/3] overflow-hidden bg-ivory-bg block"
                >
                  <Image
                    src="/images/dental-root-canal.png"
                    alt="Microscopic Root Canal Treatment"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <span className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-full bg-ivory-bg/95 text-[10px] font-semibold uppercase tracking-widest text-espresso">
                    ENDODONTICS • 01
                  </span>
                </Link>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-heading font-bold text-[20px] text-espresso mb-2">
                      <Link
                        href="/dental-services/root-canal-treatment"
                        className="hover:text-champagne-gold transition-colors"
                      >
                        Single-Sitting Root Canal (RCT)
                      </Link>
                    </h3>
                    <p className="text-[14px] text-muted-grey leading-relaxed line-clamp-2">
                      Rotary 3D cleaning and painless single-visit tooth
                      preservation by MDS Endodontist Dr. Anisha Deb.
                    </p>
                  </div>
                  <Link
                    href="/dental-services/root-canal-treatment"
                    className="group/link mt-5 pt-3.5 border-t border-border-subtle/60 inline-flex items-center justify-between text-[13px] font-semibold text-espresso hover:text-champagne-gold transition-colors"
                  >
                    <span>Explore Procedure</span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            {/* Treatment 2: Bio-Integrated Dental Implants */}
            <RevealOnScroll delay={0.07}>
              <div className="bg-white rounded-xl overflow-hidden border border-border-subtle shadow-sm hover:border-champagne-gold/60 transition-all duration-300 flex flex-col group h-full">
                <Link
                  href="/dental-services/dental-implants"
                  className="relative w-full aspect-[4/3] overflow-hidden bg-ivory-bg block"
                >
                  <Image
                    src="/images/dental-implants.png"
                    alt="Bio-Integrated Dental Implants"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <span className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-full bg-ivory-bg/95 text-[10px] font-semibold uppercase tracking-widest text-espresso">
                    IMPLANTOLOGY • 02
                  </span>
                </Link>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-heading font-bold text-[20px] text-espresso mb-2">
                      <Link
                        href="/dental-services/dental-implants"
                        className="hover:text-champagne-gold transition-colors"
                      >
                        Bio-Integrated Dental Implants
                      </Link>
                    </h3>
                    <p className="text-[14px] text-muted-grey leading-relaxed line-clamp-2">
                      Medical-grade titanium fixtures and custom zirconia crowns
                      engineered for permanent chewing stability.
                    </p>
                  </div>
                  <Link
                    href="/dental-services/dental-implants"
                    className="group/link mt-5 pt-3.5 border-t border-border-subtle/60 inline-flex items-center justify-between text-[13px] font-semibold text-espresso hover:text-champagne-gold transition-colors"
                  >
                    <span>Explore Procedure</span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            {/* Treatment 3: Clear Aligners */}
            <RevealOnScroll delay={0.14}>
              <div className="bg-white rounded-xl overflow-hidden border border-border-subtle shadow-sm hover:border-champagne-gold/60 transition-all duration-300 flex flex-col group h-full">
                <Link
                  href="/dental-services/clear-aligners"
                  className="relative w-full aspect-[4/3] overflow-hidden bg-ivory-bg block"
                >
                  <Image
                    src="/images/dental-aligners.png"
                    alt="Clear Aligners & Digital Orthodontics"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <span className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-full bg-ivory-bg/95 text-[10px] font-semibold uppercase tracking-widest text-espresso">
                    ORTHODONTICS • 03
                  </span>
                </Link>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-heading font-bold text-[20px] text-espresso mb-2">
                      <Link
                        href="/dental-services/clear-aligners"
                        className="hover:text-champagne-gold transition-colors"
                      >
                        Invisible Clear Aligners
                      </Link>
                    </h3>
                    <p className="text-[14px] text-muted-grey leading-relaxed line-clamp-2">
                      Removable, transparent orthodontic trays custom-planned
                      for bracket-free smile alignment.
                    </p>
                  </div>
                  <Link
                    href="/dental-services/clear-aligners"
                    className="group/link mt-5 pt-3.5 border-t border-border-subtle/60 inline-flex items-center justify-between text-[13px] font-semibold text-espresso hover:text-champagne-gold transition-colors"
                  >
                    <span>Explore Procedure</span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 6: FEATURED SKIN & AESTHETIC TREATMENTS (ALL WITH CLINICAL PHOTOGRAPHY) */}
      <section
        id="aesthetic-services"
        className="w-full bg-ivory-secondary py-16 lg:py-24 border-b border-border-subtle"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-champagne-gold block mb-2">
                DERMATOLOGY &amp; FACIAL AESTHETICS
              </span>
              <h2 className="font-heading font-bold text-espresso text-[32px] sm:text-[42px] leading-[1.15]">
                Featured Skin &amp; Laser Protocols
              </h2>
            </div>
            <Link
              href="/skin-aesthetics"
              className="group inline-flex items-center gap-1.5 text-[14px] font-semibold text-espresso hover:text-champagne-gold transition-colors"
            >
              <span>Browse All Skin Protocols</span>
              <ArrowRight
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Treatment 1: Skin Rejuvenation */}
            <RevealOnScroll>
              <div className="bg-white rounded-xl overflow-hidden border border-border-subtle shadow-sm hover:border-champagne-gold/60 transition-all duration-300 flex flex-col group h-full">
                <Link
                  href="/skin-aesthetics/skin-rejuvenation"
                  className="relative w-full aspect-[4/3] overflow-hidden bg-ivory-bg block"
                >
                  <Image
                    src="/images/skin-rejuvenation.png"
                    alt="Skin Rejuvenation & Collagen Induction"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <span className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-full bg-ivory-bg/95 text-[10px] font-semibold uppercase tracking-widest text-espresso">
                    COLLAGEN RENEWAL • 01
                  </span>
                </Link>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-heading font-bold text-[20px] text-espresso mb-2">
                      <Link
                        href="/skin-aesthetics/skin-rejuvenation"
                        className="hover:text-champagne-gold transition-colors"
                      >
                        Skin Rejuvenation &amp; Glow
                      </Link>
                    </h3>
                    <p className="text-[14px] text-muted-grey leading-relaxed line-clamp-2">
                      Cellular barrier repair, peptide infusion, and collagen
                      stimulation calibrated for Indian skin tones.
                    </p>
                  </div>
                  <Link
                    href="/skin-aesthetics/skin-rejuvenation"
                    className="group/link mt-5 pt-3.5 border-t border-border-subtle/60 inline-flex items-center justify-between text-[13px] font-semibold text-espresso hover:text-champagne-gold transition-colors"
                  >
                    <span>Explore Protocol</span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            {/* Treatment 2: Medical Hydrafacial & Chemical Peels (NOW WITH PHOTOGRAPHY) */}
            <RevealOnScroll delay={0.07}>
              <div className="bg-white rounded-xl overflow-hidden border border-border-subtle shadow-sm hover:border-champagne-gold/60 transition-all duration-300 flex flex-col group h-full">
                <Link
                  href="/skin-aesthetics/hydrafacial"
                  className="relative w-full aspect-[4/3] overflow-hidden bg-ivory-bg block"
                >
                  <Image
                    src="/images/skin-hydrafacial.jpg"
                    alt="Medical Hydrafacial & Chemical Peel Rejuvenation"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <span className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-full bg-ivory-bg/95 text-[10px] font-semibold uppercase tracking-widest text-espresso">
                    DERMAL HYDRATION • 02
                  </span>
                </Link>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-heading font-bold text-[20px] text-espresso mb-2">
                      <Link
                        href="/skin-aesthetics/hydrafacial"
                        className="hover:text-champagne-gold transition-colors"
                      >
                        Medical Hydrafacial &amp; Peels
                      </Link>
                    </h3>
                    <p className="text-[14px] text-muted-grey leading-relaxed line-clamp-2">
                      Zero-downtime vortex pore cleansing, antioxidant serum
                      infusion, and gentle pigment-lifting exfoliation.
                    </p>
                  </div>
                  <Link
                    href="/skin-aesthetics/hydrafacial"
                    className="group/link mt-5 pt-3.5 border-t border-border-subtle/60 inline-flex items-center justify-between text-[13px] font-semibold text-espresso hover:text-champagne-gold transition-colors"
                  >
                    <span>Explore Protocol</span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            {/* Treatment 3: Laser Hair Reduction & Facial Harmony (NOW WITH PHOTOGRAPHY) */}
            <RevealOnScroll delay={0.14}>
              <div className="bg-white rounded-xl overflow-hidden border border-border-subtle shadow-sm hover:border-champagne-gold/60 transition-all duration-300 flex flex-col group h-full">
                <Link
                  href="/skin-aesthetics/laser-hair-reduction"
                  className="relative w-full aspect-[4/3] overflow-hidden bg-ivory-bg block"
                >
                  <Image
                    src="/images/skin-laser.jpg"
                    alt="Cooling-Assisted Laser Hair Reduction and Facial Aesthetics"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <span className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-full bg-ivory-bg/95 text-[10px] font-semibold uppercase tracking-widest text-espresso">
                    LASER &amp; CONTOURING • 03
                  </span>
                </Link>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-heading font-bold text-[20px] text-espresso mb-2">
                      <Link
                        href="/skin-aesthetics/laser-hair-reduction"
                        className="hover:text-champagne-gold transition-colors"
                      >
                        Cooling Laser &amp; Scar Revision
                      </Link>
                    </h3>
                    <p className="text-[14px] text-muted-grey leading-relaxed line-clamp-2">
                      Sapphire-chilled laser hair reduction and targeted acne
                      scar remodeling supervised by FFAC specialists.
                    </p>
                  </div>
                  <Link
                    href="/skin-aesthetics/laser-hair-reduction"
                    className="group/link mt-5 pt-3.5 border-t border-border-subtle/60 inline-flex items-center justify-between text-[13px] font-semibold text-espresso hover:text-champagne-gold transition-colors"
                  >
                    <span>Explore Protocol</span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 7: CLINIC ENVIRONMENT SHOWCASE */}
      <section
        id="experience"
        className="w-full bg-ivory-bg py-16 lg:py-24 border-b border-border-subtle"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] rounded-2xl overflow-hidden border border-border-subtle shadow-md">
              <Image
                src="/images/clinic-private-suite.png"
                alt="Private dental and aesthetic treatment suite at Dant काया in Patna with 3D digital imaging monitors and ergonomic treatment chair"
                fill
                sizes="100vw"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/75 via-espresso/15 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#fedb9b] mb-2">
                    BORING CANAL ROAD • PATNA
                  </span>
                  <h2 className="font-heading font-bold text-2xl sm:text-4xl text-white">
                    Calm, Private Suites Built for Your Comfort.
                  </h2>
                </div>
                <div className="flex flex-wrap gap-3 text-xs font-medium text-white/90">
                  <span className="inline-flex items-center gap-1.5 bg-espresso/70 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/15">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#fedb9b]" />
                    Private Operatories
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-espresso/70 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/15">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#fedb9b]" />
                    3D Digital Imaging
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-espresso/70 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/15">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#fedb9b]" />
                    Zero-Rushed Visits
                  </span>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 8: APPOINTMENT CTA */}
      <AppointmentCTA />
    </>
  );
}
