import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Users,
  Eye,
  Flag,
  SlidersHorizontal,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Phone,
  BadgeCheck,
  Microscope,
} from "lucide-react";
import { clinicInfo } from "@/data/clinic";
import { doctors } from "@/data/doctors";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PrimaryButton } from "@/components/PrimaryButton";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "About Us — Clinic Philosophy, Vision & Specialists",
  description:
    "Learn about Dant काया Multispeciality Clinic on Boring Canal Road, near Reliance Trends, Patna — where advanced dentistry meets aesthetic excellence.",
  alternates: {
    canonical: "/about",
  },
};

const approachPillars = [
  {
    icon: SlidersHorizontal,
    title: "Personalized Care",
    description:
      "Every treatment roadmap is uniquely tailored to your individual oral health and aesthetic goals.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "Transparent, unhurried discussions with clear explanations of procedures and projected outcomes.",
  },
  {
    icon: ShieldCheck,
    title: "Ethical Planning",
    description:
      "Evidence-based clinical recommendations with a steadfast commitment to preserving natural dentition.",
  },
  {
    icon: Sparkles,
    title: "Patient Comfort",
    description:
      "A tranquil, acoustically calm clinic setting designed for stress-free, pain-managed procedures.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* SECTION 1: PAGE HERO (Matches Stitch About Us Reference) */}
      <section className="relative w-full bg-ivory-secondary/70 py-12 md:py-18 overflow-hidden border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <RevealOnScroll className="lg:col-span-7 flex flex-col items-start">
              <div className="mb-6">
                <Breadcrumbs items={[{ label: "About Us" }]} />
              </div>

              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ivory-secondary border border-border-subtle text-champagne-gold text-[11px] font-semibold uppercase tracking-[0.14em] mb-4">
                About Dant काया • Clinic Philosophy &amp; Heritage
              </span>

              <h1 className="font-heading text-[2.25rem] sm:text-[2.75rem] lg:text-[3.25rem] font-semibold text-espresso tracking-[-0.02em] leading-[1.12] mb-6">
                Where Advanced Dentistry Meets Aesthetic Excellence
              </h1>

              <p className="text-base sm:text-lg text-muted-grey max-w-2xl mb-8 leading-relaxed">
                A trusted destination for personalized dental care, smile
                enhancement and aesthetic services in Patna.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <PrimaryButton href="/book-appointment" showArrow>
                  Schedule Consultation
                </PrimaryButton>
                <a
                  href={`tel:${clinicInfo.phoneRaw}`}
                  className="bg-white hover:bg-ivory-secondary text-espresso border border-border-subtle font-medium text-sm px-6 py-3.5 rounded-[6px] transition-colors inline-flex items-center gap-2"
                >
                  <Phone
                    className="w-4 h-4 text-champagne-gold"
                    aria-hidden="true"
                  />
                  <span>{clinicInfo.phoneDisplay}</span>
                </a>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.08} className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_-10px_rgba(50,27,18,0.12)] aspect-[4/3] bg-ivory-secondary border border-border-subtle">
                <Image
                  src="/images/clinic-interior.png"
                  alt="Dant काया Multispeciality Clinic consultation lounge and interior on Boring Canal Road, Patna"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-ivory-bg/95 backdrop-blur-md p-4 rounded-xl border border-border-subtle">
                  <p className="text-[11px] font-semibold text-champagne-gold uppercase tracking-wider">
                    Patna Atelier
                  </p>
                  <p className="font-heading text-sm font-semibold text-espresso mt-0.5">
                    Boring Canal Road Flagship
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT DANT काया (Two-Column Layout) */}
      <section className="w-full bg-ivory-bg py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Column 1: Visual Narrative */}
            <RevealOnScroll className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden shadow-[0_12px_36px_-8px_rgba(50,27,18,0.08)] aspect-[5/4] bg-ivory-secondary border border-border-subtle relative">
                <Image
                  src="/images/dental-root-canal.png"
                  alt="Precision dental diagnostics and conservative care at Dant काया Multispeciality Clinic"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-6 sm:mt-0 sm:absolute sm:-bottom-6 sm:-right-6 bg-white p-6 rounded-xl shadow-[0_16px_40px_-8px_rgba(50,27,18,0.12)] border border-border-subtle max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-ivory-secondary flex items-center justify-center">
                    <Microscope
                      className="w-4 h-4 text-champagne-gold"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="font-heading text-base font-semibold text-espresso">
                    Precision Care
                  </span>
                </div>
                <p className="text-xs text-muted-grey leading-relaxed">
                  Microscopic endodontics, oral surgery &amp; clinical facial
                  aesthetics under one roof.
                </p>
              </div>
            </RevealOnScroll>

            {/* Column 2: Editorial Content */}
            <RevealOnScroll
              delay={0.08}
              className="lg:col-span-6 flex flex-col items-start"
            >
              <span className="text-[11px] font-semibold text-champagne-gold uppercase tracking-[0.16em] mb-3">
                Our Clinical Foundation
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-espresso tracking-tight mb-6">
                A More Personal Approach to Care
              </h2>
              <p className="text-base text-primary-text/90 mb-5 leading-relaxed">
                Located on Boring Canal Road, near Reliance Trends, Patna,{" "}
                <strong>Dant काया Multispeciality Clinic</strong> brings
                together dental professionals with expertise in comprehensive
                oral healthcare, restorative dentistry, smile enhancement and
                selected skin and facial aesthetic services.
              </p>
              <p className="text-base text-muted-grey mb-8 leading-relaxed">
                We believe every patient deserves individual attention, clear
                communication and treatment recommendations tailored to their
                needs. Our focus is on combining clinical knowledge, ethical
                decision-making and compassionate care in a comfortable
                environment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <div className="p-4 rounded-xl bg-ivory-secondary/70 border border-border-subtle flex items-start gap-3">
                  <MapPin
                    className="w-5 h-5 text-champagne-gold shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div className="flex flex-col">
                    <span className="font-heading text-sm font-semibold text-espresso">
                      Boring Canal Road Flagship
                    </span>
                    <span className="text-xs text-muted-grey mt-0.5">
                      Near Reliance Trends, Patna
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-ivory-secondary/70 border border-border-subtle flex items-start gap-3">
                  <Users
                    className="w-5 h-5 text-champagne-gold shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div className="flex flex-col">
                    <span className="font-heading text-sm font-semibold text-espresso">
                      Multidisciplinary Team
                    </span>
                    <span className="text-xs text-muted-grey mt-0.5">
                      Collaborative clinical reviews
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 3: VISION AND MISSION */}
      <section className="w-full bg-ivory-secondary/70 py-20 md:py-24 border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealOnScroll className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-semibold text-champagne-gold uppercase tracking-[0.16em]">
              Guiding Pillars
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-espresso mt-2">
              Principles That Guide Our Practice
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Block */}
            <RevealOnScroll>
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-border-subtle shadow-[0_4px_20px_-2px_rgba(50,27,18,0.04)] flex flex-col justify-between h-full relative overflow-hidden">
                <div
                  className="absolute top-0 right-0 w-24 h-24 bg-champagne-gold/10 rounded-bl-full pointer-events-none"
                  aria-hidden="true"
                />
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-ivory-secondary rounded-full mb-6 border border-border-subtle">
                    <Eye
                      className="w-3.5 h-3.5 text-champagne-gold"
                      aria-hidden="true"
                    />
                    <span className="text-[11px] font-semibold text-champagne-gold uppercase tracking-widest">
                      Our Vision
                    </span>
                  </div>
                  <blockquote className="font-heading text-xl sm:text-2xl text-espresso font-semibold leading-snug">
                    &ldquo;To become a trusted destination for modern dental and
                    aesthetic healthcare in Patna, recognized for professional
                    excellence, compassionate care and patient
                    satisfaction.&rdquo;
                  </blockquote>
                </div>
                <div className="mt-8 pt-6 border-t border-border-subtle/70 flex items-center justify-between text-muted-grey">
                  <span className="text-xs font-medium uppercase tracking-wider">
                    Excellence &amp; Patient Trust
                  </span>
                  <ArrowRight
                    className="w-4 h-4 text-champagne-gold"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </RevealOnScroll>

            {/* Mission Block */}
            <RevealOnScroll delay={0.08}>
              <div className="bg-espresso p-8 md:p-10 rounded-2xl shadow-[0_4px_20px_-2px_rgba(50,27,18,0.08)] flex flex-col justify-between text-white h-full relative overflow-hidden">
                <div
                  className="absolute top-0 right-0 w-24 h-24 bg-champagne-gold/15 rounded-bl-full pointer-events-none"
                  aria-hidden="true"
                />
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-espresso-dark rounded-full mb-6 border border-white/10">
                    <Flag
                      className="w-3.5 h-3.5 text-champagne-gold"
                      aria-hidden="true"
                    />
                    <span className="text-[11px] font-semibold text-champagne-gold uppercase tracking-widest">
                      Our Mission
                    </span>
                  </div>
                  <blockquote className="font-heading text-xl sm:text-2xl text-ivory-bg font-semibold leading-snug">
                    &ldquo;To combine clinical expertise, modern dental
                    techniques, evidence-based treatment and a patient-first
                    approach to help individuals achieve healthier smiles and
                    greater confidence.&rdquo;
                  </blockquote>
                </div>
                <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between text-ivory-secondary/80">
                  <span className="text-xs font-medium uppercase tracking-wider">
                    Evidence-Based Treatment
                  </span>
                  <ArrowRight
                    className="w-4 h-4 text-champagne-gold"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR APPROACH */}
      <section className="w-full bg-ivory-bg py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealOnScroll className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[11px] font-semibold text-champagne-gold uppercase tracking-[0.16em]">
                The Care Standard • How We Work
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-espresso tracking-tight mt-2">
                Our Approach to Every Patient
              </h2>
            </div>
            <p className="text-sm sm:text-base text-muted-grey max-w-md mt-4 md:mt-0">
              Rooted in scientific precision, respectful patient communication,
              and tranquil hospitality.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <RevealOnScroll key={pillar.title} delay={index * 0.06}>
                  <div className="bg-white p-7 rounded-xl border border-border-subtle hover:border-champagne-gold/50 transition-all h-full flex flex-col">
                    <div className="w-11 h-11 rounded-lg bg-ivory-secondary flex items-center justify-center mb-5 text-champagne-gold border border-border-subtle">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-espresso mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-muted-grey leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR SPECIALITIES (Gateway Cards) */}
      <section className="w-full bg-ivory-secondary/60 py-20 md:py-24 border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealOnScroll className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-semibold text-champagne-gold uppercase tracking-[0.16em]">
              Clinical Disciplines
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-espresso tracking-tight mt-2">
              Comprehensive Dental &amp; Aesthetic Care
            </h2>
            <p className="text-base text-muted-grey mt-3">
              Specialized clinical pathways structured to restore both function
              and natural facial harmony.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Gateway Card 1: Dental Services */}
            <RevealOnScroll>
              <div className="group bg-white rounded-2xl overflow-hidden border border-border-subtle shadow-[0_4px_20px_-2px_rgba(50,27,18,0.04)] flex flex-col h-full transition-all duration-300 hover:shadow-[0_16px_40px_-8px_rgba(50,27,18,0.12)]">
                <div className="relative h-64 overflow-hidden bg-ivory-secondary">
                  <Image
                    src="/images/dental-implants.png"
                    alt="Precision dental implant and restorative prosthetics at Dant काया"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-ivory-bg/95 backdrop-blur-sm px-3 py-1 rounded-full border border-border-subtle">
                    <span className="text-[11px] font-semibold text-champagne-gold uppercase tracking-wider">
                      Dental Division
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-heading text-[22px] font-semibold text-espresso mb-3">
                      Comprehensive Dental Services
                    </h3>
                    <p className="text-base text-muted-grey mb-6 leading-relaxed">
                      From microscopic root canal treatments and bio-integrated
                      implants to clear aligners and smile designing.
                    </p>
                  </div>
                  <Link
                    href="/dental-services"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-espresso hover:text-champagne-gold transition-colors"
                  >
                    <span>Explore Dental Services</span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            {/* Gateway Card 2: Skin & Aesthetics */}
            <RevealOnScroll delay={0.08}>
              <div className="group bg-white rounded-2xl overflow-hidden border border-border-subtle shadow-[0_4px_20px_-2px_rgba(50,27,18,0.04)] flex flex-col h-full transition-all duration-300 hover:shadow-[0_16px_40px_-8px_rgba(50,27,18,0.12)]">
                <div className="relative h-64 overflow-hidden bg-ivory-secondary">
                  <Image
                    src="/images/skin-rejuvenation.png"
                    alt="Clinical skin facial rejuvenation and aesthetic therapy at Dant काया"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-ivory-bg/95 backdrop-blur-sm px-3 py-1 rounded-full border border-border-subtle">
                    <span className="text-[11px] font-semibold text-champagne-gold uppercase tracking-wider">
                      Aesthetic Atelier
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-heading text-[22px] font-semibold text-espresso mb-3">
                      Skin &amp; Facial Aesthetics
                    </h3>
                    <p className="text-base text-muted-grey mb-6 leading-relaxed">
                      Doctor-guided facial rejuvenation, medical Hydrafacials,
                      chemical peels, laser hair reduction, and natural profile
                      harmonization.
                    </p>
                  </div>
                  <Link
                    href="/skin-aesthetics"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-espresso hover:text-champagne-gold transition-colors"
                  >
                    <span>Explore Aesthetic Services</span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 6: MEET OUR DOCTORS */}
      <section className="w-full bg-ivory-bg py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealOnScroll className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] font-semibold text-champagne-gold uppercase tracking-[0.16em]">
              Clinical Leadership
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-espresso tracking-tight mt-2">
              Led by Experienced Clinicians
            </h2>
            <p className="text-base text-muted-grey mt-3">
              Our senior dental surgeons and specialists bring rigorous clinical
              training and personalized attentiveness to every appointment.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <RevealOnScroll key={doctor.slug} delay={index * 0.07}>
                <article className="group bg-white rounded-2xl overflow-hidden border border-border-subtle shadow-[0_4px_20px_-2px_rgba(50,27,18,0.04)] flex flex-col h-full transition-all duration-300 hover:border-champagne-gold/50 hover:shadow-[0_20px_40px_-15px_rgba(41,37,31,0.06)]">
                  <Link
                    href={`/doctors/${doctor.slug}`}
                    tabIndex={-1}
                    aria-hidden="true"
                    className="relative h-72 sm:h-80 overflow-hidden bg-ivory-secondary block"
                  >
                    <Image
                      src={doctor.image}
                      alt={doctor.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top transition-opacity duration-300 ease-out group-hover:opacity-95"
                    />
                  </Link>
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-heading text-xl font-semibold text-espresso">
                          <Link
                            href={`/doctors/${doctor.slug}`}
                            className="hover:text-champagne-gold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89A60] rounded"
                          >
                            {doctor.name}
                          </Link>
                        </h3>
                        <BadgeCheck
                          className="w-5 h-5 text-champagne-gold shrink-0"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="text-[11px] font-semibold text-champagne-gold uppercase tracking-wider mb-2">
                        {doctor.fullCredentials}
                      </p>
                      <p className="text-sm text-muted-grey">
                        {doctor.role} • {doctor.pastAffiliation}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-border-subtle/70 flex items-center justify-between text-muted-grey">
                      <span className="text-xs font-medium">
                        {doctor.departmentBadge}
                      </span>
                      <Link
                        href={`/doctors/${doctor.slug}`}
                        className="text-xs font-semibold text-espresso group-hover:text-champagne-gold inline-flex items-center gap-1 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89A60] rounded"
                      >
                        <span>Profile</span>
                        <ChevronRight
                          className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delay={0.1} className="mt-12 text-center">
            <Link
              href="/doctors"
              className="inline-flex items-center gap-2 bg-ivory-secondary hover:bg-border-subtle/60 text-espresso font-medium text-sm px-6 py-3.5 rounded-lg transition-colors border border-border-subtle"
            >
              <span>Meet Our Complete Doctor Panel</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}
