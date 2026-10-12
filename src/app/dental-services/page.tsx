import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Sparkles, Clock, ArrowRight } from "lucide-react";
import {
  dentalServices,
  getFeaturedDentalServices,
  type DentalServiceItem,
} from "@/data/dental-services";
import { doctors } from "@/data/doctors";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { DoctorCard } from "@/components/DoctorCard";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Dental Services & Treatments — Root Canal, Implants, Aligners & Oral Surgery",
  description:
    "Explore clinical dental procedures at Dant काया Multispeciality Clinic in Patna: Single-Sitting Root Canal, Dental Implants, Clear Aligners, Zirconia Crowns, Wisdom Tooth Surgery, and Pediatric Dentistry.",
  alternates: {
    canonical: "/dental-services",
  },
};

const categoriesOrder: DentalServiceItem["category"][] = [
  "Endodontics & Restorative",
  "Implants & Prosthodontics",
  "Orthodontics & Aesthetic",
  "Oral Surgery & Periodontics",
  "Preventive & Diagnostic",
];

export default function DentalServicesPage() {
  const featured = getFeaturedDentalServices();

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Dental Care" }]}
        eyebrow="Department of Dentistry"
        title={
          <>
            Comprehensive Restorative, Surgical &amp;{" "}
            <span className="text-champagne-gold">Aesthetic Dental Care.</span>
          </>
        }
        description="From microscopic single-sitting root canals to titanium dental implants and invisible clear aligners, every dental procedure is performed directly by our specialist doctors."
        actions={
          <>
            <PrimaryButton href="/book-appointment?department=dental" showArrow>
              Book Dental Consultation
            </PrimaryButton>
            <SecondaryButton href="#complete-directory">
              Browse Dental Treatments
            </SecondaryButton>
          </>
        }
        aside={
          <div className="bg-white rounded-2xl overflow-hidden border border-border-subtle shadow-sm">
            <div className="relative aspect-[16/10] w-full bg-ivory-secondary">
              <Image
                src="/images/dental-microscope.jpg"
                alt="Microscopic Endodontics and Surgical Dentistry at Dant काया Clinic"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-4 text-[10px] font-semibold uppercase tracking-widest text-[#fedb9b]">
                Specialist Dental Care
              </span>
            </div>
            <div className="p-5 space-y-2.5 text-xs text-primary-text">
              <div className="flex items-center gap-2.5">
                <ShieldCheck
                  className="w-4 h-4 text-champagne-gold shrink-0"
                  aria-hidden="true"
                />
                <span>Class-B Autoclave Sterilization Protocol</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Sparkles
                  className="w-4 h-4 text-champagne-gold shrink-0"
                  aria-hidden="true"
                />
                <span>MDS Endodontist &amp; Oral Surgeons on Roster</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock
                  className="w-4 h-4 text-champagne-gold shrink-0"
                  aria-hidden="true"
                />
                <span>Low-Radiation Digital X-Ray (RVG) Diagnostics</span>
              </div>
            </div>
          </div>
        }
      />

      {/* Section 1: Flagship Featured Treatments */}
      <section className="py-20 bg-ivory-bg border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Core Specializations"
              title="Flagship Dental Procedures"
              description="Our most requested specialist interventions in endodontics, implantology, and invisible orthodontics."
            />
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((service, index) => (
              <RevealOnScroll key={service.slug} delay={index * 0.07}>
                <ServiceCard
                  title={service.title}
                  description={service.shortDescription}
                  href={`/dental-services/${service.slug}`}
                  category={service.category}
                  image={service.image}
                  imageAlt={service.imageAlt}
                  duration={service.clinicalDuration}
                  variant="featured"
                  surface="white"
                />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Categorized Complete Directory of Dental Treatments */}
      <section
        id="complete-directory"
        className="py-20 bg-ivory-secondary/50 border-b border-border-subtle scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Complete Clinical Directory"
              title="Dental Services by Specialty Wing"
              description="Select any treatment below to view clinical indications, step-by-step procedure details, and recovery guidance."
            />
          </RevealOnScroll>

          {categoriesOrder.map((categoryName) => {
            const items = dentalServices.filter(
              (s) => s.category === categoryName
            );
            return (
              <div key={categoryName} className="space-y-8">
                <RevealOnScroll>
                  <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                    <h3 className="font-heading text-2xl font-semibold text-espresso">
                      {categoryName}
                    </h3>
                  </div>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((service, idx) => (
                    <RevealOnScroll key={service.slug} delay={idx * 0.05}>
                      <ServiceCard
                        title={service.title}
                        description={service.shortDescription}
                        href={`/dental-services/${service.slug}`}
                        category={service.category}
                        image={service.image}
                        imageAlt={service.imageAlt}
                        duration={service.clinicalDuration}
                        ctaLabel="Treatment Details"
                        variant="directory"
                        surface="white"
                      />
                    </RevealOnScroll>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 3: Dental Specialists */}
      <section className="py-24 bg-ivory-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Your Dental Team"
              title="Consult with Our Dental Surgeons &amp; Endodontist"
              description="Every dental procedure is performed directly by our qualified doctors—never delegated to uncertified technicians."
              action={
                <Link
                  href="/doctors"
                  className="inline-flex items-center gap-2 text-sm font-medium text-espresso hover:text-champagne-gold transition-colors group"
                >
                  <span>Compare Specialist Profiles</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              }
            />
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doc, idx) => (
              <RevealOnScroll key={doc.slug} delay={idx * 0.07}>
                <DoctorCard doctor={doc} variant="preview" />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <AppointmentCTA
        heading="Need Guidance on a Toothache or Missing Tooth?"
        description="Schedule a diagnostic dental consultation and digital X-ray assessment at our Boring Canal Road clinic."
        primaryHref="/book-appointment?department=dental"
      />
    </>
  );
}
