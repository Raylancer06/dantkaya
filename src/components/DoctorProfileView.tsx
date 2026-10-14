import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  ShieldCheck,
  Quote,
  ArrowRight,
  Phone,
  Stethoscope,
  Sparkles,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { type DoctorProfile, doctors } from "@/data/doctors";
import { dentalServices } from "@/data/dental-services";
import { skinServices } from "@/data/skin-services";
import { clinicInfo } from "@/data/clinic";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PrimaryButton } from "@/components/PrimaryButton";
import { WhatsAppContactButton } from "@/components/WhatsAppContactButton";
import { ServiceCard } from "@/components/ServiceCard";
import { DoctorCard } from "@/components/DoctorCard";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { RevealOnScroll } from "@/components/RevealOnScroll";

interface DoctorProfileViewProps {
  doctor: DoctorProfile;
}

export function DoctorProfileView({ doctor }: DoctorProfileViewProps) {
  const relatedDental = dentalServices.filter((s) =>
    doctor.associatedServiceSlugs.dental.includes(s.slug)
  );
  const relatedSkin = skinServices.filter((s) =>
    doctor.associatedServiceSlugs.skin.includes(s.slug)
  );
  const otherDoctors = doctors.filter((d) => d.slug !== doctor.slug);

  const primaryExpertise = doctor.clinicalFocus.slice(0, 6);
  const featuredSeventhExpertise = doctor.clinicalFocus[6];

  return (
    <>
      {/* SECTION 1: DOCTOR HERO (Matches Stitch Individual Doctor Profile Reference) */}
      <section className="py-12 lg:py-18 bg-ivory-bg border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border-subtle/70">
            <Breadcrumbs
              items={[
                { label: "Our Doctors", href: "/doctors" },
                { label: doctor.name },
              ]}
            />
            <span className="text-[11px] font-semibold uppercase tracking-widest text-champagne-gold">
              Dant काया Clinical Faculty • Patna
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Column: Portrait, Floating Availability Badge & Highlight Pills (5 Cols) */}
            <RevealOnScroll className="lg:col-span-5 flex flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden bg-ivory-secondary aspect-[4/5] border border-border-subtle shadow-[0_16px_40px_-8px_rgba(50,27,18,0.1)]">
                <Image
                  src={doctor.image}
                  alt={doctor.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Clinical Availability Badge */}
              <div className="bg-white/95 rounded-xl p-4 flex items-center justify-between border border-border-subtle shadow-sm">
                <div>
                  <span className="text-[10px] font-semibold text-champagne-gold uppercase tracking-widest block">
                    Clinical Availability
                  </span>
                  <p className="font-heading text-xs sm:text-sm font-semibold text-espresso mt-0.5">
                    {doctor.consultationSchedule}
                  </p>
                </div>
                <span
                  className="w-2.5 h-2.5 rounded-full bg-champagne-gold shrink-0"
                  aria-hidden="true"
                />
              </div>

              {/* Quick Credential Highlight Pill Matrix */}
              <div className="grid grid-cols-3 gap-3">
                {doctor.quickHighlightPills.map((pill) => (
                  <div
                    key={pill.value}
                    className="bg-ivory-secondary/70 border border-border-subtle rounded-xl p-3.5 text-center"
                  >
                    <p className="font-heading text-base font-bold text-espresso">
                      {pill.value}
                    </p>
                    <p className="text-[10px] font-semibold text-muted-grey uppercase tracking-wider mt-0.5">
                      {pill.label}
                    </p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>

            {/* Right Column: Bio Summary, Quote, Metadata Chips & CTAs (7 Cols) */}
            <RevealOnScroll
              delay={0.08}
              className="lg:col-span-7 flex flex-col justify-between space-y-6"
            >
              <div>
                {/* Role & Status Badges */}
                <div className="flex flex-wrap items-center gap-2.5 mb-4">
                  {doctor.heroBadges.map((badge, i) => (
                    <span
                      key={badge}
                      className={
                        i === 0
                          ? "px-3.5 py-1 rounded-full bg-ivory-secondary border border-border-subtle text-espresso text-[11px] font-semibold uppercase tracking-wider"
                          : "px-3.5 py-1 rounded-full bg-champagne-gold/15 border border-champagne-gold/30 text-espresso text-[11px] font-semibold uppercase tracking-wider"
                      }
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Name & Credentials */}
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-espresso tracking-tight">
                  {doctor.name}
                </h1>
                <p className="font-heading text-lg sm:text-xl text-champagne-gold font-semibold mt-1.5">
                  {doctor.fullCredentials}
                </p>
                <p className="text-sm sm:text-base text-muted-grey font-medium mt-2">
                  {doctor.roleSubtitle}
                </p>
              </div>

              {/* Editorial Quote Callout */}
              <div className="relative p-6 rounded-xl bg-ivory-secondary/70 border border-border-subtle shadow-sm">
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-champagne-gold rounded-l-xl"
                  aria-hidden="true"
                />
                <Quote
                  className="w-7 h-7 text-champagne-gold/30 absolute top-4 right-4"
                  aria-hidden="true"
                />
                <p className="text-base text-espresso italic leading-relaxed pr-8">
                  &ldquo;{doctor.philosophyQuote}&rdquo;
                </p>
              </div>

              {/* 3 Metadata Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {doctor.metadataChips.map((chip) => (
                  <div
                    key={chip.label}
                    className="bg-white p-4 rounded-xl border border-border-subtle shadow-sm flex flex-col justify-between"
                  >
                    <span className="text-[10px] font-semibold text-champagne-gold uppercase tracking-wider">
                      {chip.label}
                    </span>
                    <span className="font-heading text-sm font-semibold text-espresso mt-1">
                      {chip.value}
                    </span>
                    {chip.subtext && (
                      <span className="text-xs text-muted-grey mt-0.5">
                        {chip.subtext}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border-subtle">
                <PrimaryButton
                  href={`/book-appointment?doctor=${doctor.slug}`}
                  showArrow
                >
                  Request an Appointment
                </PrimaryButton>
                <a
                  href={`tel:${clinicInfo.phoneRaw}`}
                  className="bg-ivory-secondary hover:bg-border-subtle/60 text-espresso border border-border-subtle text-sm font-medium px-6 py-3.5 rounded-[6px] transition-colors inline-flex items-center gap-2"
                >
                  <Phone
                    className="w-4 h-4 text-champagne-gold"
                    aria-hidden="true"
                  />
                  <span>Direct Inquiry: {clinicInfo.phoneDisplay}</span>
                </a>
                <WhatsAppContactButton
                  label="WhatsApp Clinic"
                  message={`Hello Dant काया Clinic, I would like to schedule a consultation with ${doctor.name}.`}
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 2: FACULTY CREDENTIALS & DETAILED EDITORIAL BIOGRAPHY (Asymmetrical 2-Column Split) */}
      <section className="w-full bg-ivory-secondary/60 py-20 lg:py-24 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Structured Academic Credentials + Dark Espresso Focus Card (5 Cols) */}
            <RevealOnScroll className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-white rounded-2xl p-7 lg:p-8 border border-border-subtle shadow-[0_4px_20px_-2px_rgba(50,27,18,0.04)] flex flex-col gap-6">
                <div>
                  <span className="text-[11px] font-semibold text-champagne-gold uppercase tracking-widest block mb-1">
                    Faculty Credentials
                  </span>
                  <h2 className="font-heading text-xl sm:text-2xl font-semibold text-espresso">
                    Academic &amp; Clinical Background
                  </h2>
                </div>

                <div className="flex flex-col gap-5 divide-y divide-border-subtle/70">
                  {doctor.qualifications.map((q) => (
                    <div
                      key={q.degree}
                      className="flex gap-3.5 items-start pt-5 first:pt-0"
                    >
                      <div className="w-9 h-9 rounded-lg bg-ivory-secondary border border-border-subtle flex items-center justify-center text-champagne-gold shrink-0 mt-0.5">
                        <GraduationCap className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-semibold text-champagne-gold uppercase tracking-wider">
                          {q.category}
                        </span>
                        <h3 className="font-heading text-base font-semibold text-espresso mt-0.5">
                          {q.degree}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-grey mt-1 leading-relaxed">
                          {q.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dark Espresso Clinical Tenet Card */}
              <div className="bg-espresso text-white rounded-2xl p-7 lg:p-8 shadow-[0_12px_32px_rgba(50,27,18,0.12)]">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck
                    className="w-5 h-5 text-champagne-gold"
                    aria-hidden="true"
                  />
                  <span className="text-[11px] font-semibold text-champagne-gold uppercase tracking-widest">
                    {doctor.clinicalTenet.eyebrow}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-ivory-bg mb-2">
                  {doctor.clinicalTenet.title}
                </h3>
                <p className="text-sm text-ivory-secondary/85 leading-relaxed">
                  {doctor.clinicalTenet.description}
                </p>
              </div>
            </RevealOnScroll>

            {/* Right Column: Narrative Editorial Bio (7 Cols) */}
            <RevealOnScroll delay={0.08} className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-8 lg:p-10 border border-border-subtle shadow-[0_4px_20px_-2px_rgba(50,27,18,0.04)]">
                <div className="mb-6">
                  <span className="text-[11px] font-semibold text-champagne-gold uppercase tracking-widest block mb-1">
                    Editorial Background
                  </span>
                  <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-espresso">
                    About {doctor.name}
                  </h2>
                </div>

                <div className="space-y-4 text-base text-primary-text/90 leading-relaxed">
                  {doctor.biography.map((paragraph, index) => (
                    <p
                      key={index}
                      className={
                        index === 0 ? "text-espresso font-medium text-lg" : ""
                      }
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Signature Block */}
                <div className="mt-8 pt-6 border-t border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="font-heading text-base font-semibold text-espresso">
                      {doctor.name}
                    </span>
                    <span className="text-xs font-medium text-champagne-gold mt-0.5">
                      {doctor.signatureRole}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-muted-grey uppercase tracking-wider bg-ivory-secondary px-3.5 py-1.5 rounded-full border border-border-subtle self-start sm:self-auto">
                    Boring Canal Road Facility
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 3: AREAS OF EXPERTISE (7 Core Capabilities Grid) */}
      <section className="w-full bg-ivory-bg py-20 lg:py-24 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealOnScroll className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-[11px] font-semibold text-champagne-gold uppercase tracking-[0.16em] block mb-1">
                Clinical Scope &amp; Specializations
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-espresso tracking-tight">
                Areas of Expertise
              </h2>
              <p className="text-base text-muted-grey mt-1">
                Disciplines practiced and overseen with clinical rigor at our
                Boring Canal Road facility.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-champagne-gold bg-ivory-secondary border border-border-subtle px-4 py-2 rounded-full uppercase tracking-wider self-start md:self-auto">
              {doctor.clinicalFocus.length} Core Capabilities
            </span>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {primaryExpertise.map((item, idx) => (
              <RevealOnScroll key={item.title} delay={idx * 0.05}>
                <div className="bg-white rounded-2xl p-7 border border-border-subtle shadow-sm hover:border-champagne-gold/50 transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-ivory-secondary border border-border-subtle flex items-center justify-center text-champagne-gold mb-5">
                      <Stethoscope className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-espresso mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-grey leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  {item.tag && (
                    <div className="mt-6 pt-4 border-t border-border-subtle/60 flex items-center justify-between text-xs font-semibold text-champagne-gold">
                      <span>{item.tag}</span>
                      <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                    </div>
                  )}
                </div>
              </RevealOnScroll>
            ))}

            {featuredSeventhExpertise && (
              <RevealOnScroll
                delay={0.2}
                className="md:col-span-2 lg:col-span-3"
              >
                <div className="bg-ivory-secondary/80 rounded-2xl p-7 lg:p-8 border border-border-subtle flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-border-subtle flex items-center justify-center text-champagne-gold shrink-0 shadow-sm">
                      <Sparkles className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-espresso mb-1.5">
                        {featuredSeventhExpertise.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-grey max-w-3xl leading-relaxed">
                        {featuredSeventhExpertise.description}
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <Link
                      href={`/book-appointment?doctor=${doctor.slug}`}
                      className="bg-espresso hover:bg-espresso-dark text-white text-xs sm:text-sm font-medium px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
                    >
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      <span>
                        {featuredSeventhExpertise.tag || "Schedule Consultation"}
                      </span>
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 4: APPROACH TO PATIENT CARE (Numbered 01, 02, 03) */}
      <section className="w-full bg-ivory-secondary/60 py-20 lg:py-24 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealOnScroll className="max-w-2xl mb-12">
            <span className="text-[11px] font-semibold text-champagne-gold uppercase tracking-[0.16em] block mb-1">
              Treatment Philosophy
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-espresso tracking-tight">
              Approach to Patient Care
            </h2>
            <p className="text-base text-muted-grey mt-2">
              Clinical practice rooted in dignity, scientific honesty, and
              enduring patient partnerships.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctor.careApproach.map((pillar, idx) => (
              <RevealOnScroll key={pillar.number} delay={idx * 0.07}>
                <div className="bg-white rounded-2xl p-8 border border-border-subtle shadow-[0_4px_20px_-2px_rgba(50,27,18,0.04)] flex flex-col justify-between h-full relative overflow-hidden">
                  <span
                    className="font-heading text-4xl font-bold text-champagne-gold/30 block mb-4 select-none"
                    aria-hidden="true"
                  >
                    {pillar.number}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-espresso mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-muted-grey leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-border-subtle/70 flex items-center gap-2">
                    <CheckCircle2
                      className="w-4 h-4 text-champagne-gold shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-xs font-semibold text-champagne-gold uppercase tracking-wider">
                      {pillar.footerTag}
                    </span>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: ASSOCIATED TREATMENTS */}
      <section className="py-20 lg:py-24 bg-ivory-bg border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-champagne-gold block mb-2">
                  Specialized Departments
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-espresso">
                  Services by {doctor.name}
                </h2>
              </div>
              <Link
                href="/dental-services"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-espresso hover:text-champagne-gold transition-colors"
              >
                <span>View All Clinical Offerings</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedDental.slice(0, 3).map((service, idx) => (
              <RevealOnScroll key={service.slug} delay={idx * 0.07}>
                <ServiceCard
                  title={service.title}
                  description={service.shortDescription}
                  href={`/dental-services/${service.slug}`}
                  category="Dental Care"
                  image={service.image}
                  imageAlt={service.imageAlt}
                  duration={service.clinicalDuration}
                  variant="directory"
                />
              </RevealOnScroll>
            ))}
            {relatedSkin.slice(0, 3).map((service, idx) => (
              <RevealOnScroll
                key={service.slug}
                delay={(relatedDental.slice(0, 3).length + idx) * 0.07}
              >
                <ServiceCard
                  title={service.title}
                  description={service.shortDescription}
                  href={`/skin-aesthetics/${service.slug}`}
                  category="Skin & Aesthetics"
                  image={service.image}
                  imageAlt={service.imageAlt}
                  duration={service.sessionDuration}
                  variant="directory"
                />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: MEET FELLOW SPECIALISTS */}
      <section className="py-20 lg:py-24 bg-ivory-secondary/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealOnScroll>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-champagne-gold block mb-2">
                  Multidisciplinary Team
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-espresso">
                  Other Specialists at Dant काया
                </h2>
              </div>
              <Link
                href="/doctors"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-espresso hover:text-champagne-gold transition-colors"
              >
                <span>View All Doctors</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {otherDoctors.map((colleague, idx) => (
              <RevealOnScroll key={colleague.slug} delay={idx * 0.07}>
                <DoctorCard doctor={colleague} variant="preview" />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <AppointmentCTA
        heading={`Schedule a Consultation with ${doctor.name}`}
        primaryHref={`/book-appointment?doctor=${doctor.slug}`}
      />
    </>
  );
}
