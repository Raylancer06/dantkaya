import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ShieldCheck, Sun, ArrowRight } from "lucide-react";
import {
  skinServices,
  getFeaturedSkinServices,
  type SkinServiceItem,
} from "@/data/skin-services";
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
  title:
    "Skin, Laser & Facial Aesthetics — Hydrafacial, Chemical Peels, Acne Scars & Laser Hair Reduction",
  description:
    "Explore clinical skin and facial aesthetic procedures at Dant काया Multispeciality Clinic in Patna: Skin Rejuvenation, Acne & Scar Revision, Laser Hair Reduction, Medical Hydrafacial, Chemical Peels, and Pigmentation Care.",
  alternates: {
    canonical: "/skin-aesthetics",
  },
};

const skinCategoriesOrder: SkinServiceItem["category"][] = [
  "Facial Rejuvenation & Glow",
  "Acne, Scars & Texture",
  "Laser & Targeted Procedures",
  "Anti-Ageing & Pigmentation",
];

export default function SkinAestheticsPage() {
  const featured = getFeaturedSkinServices();
  const aestheticDoctors = doctors.filter((d) =>
    d.credentials.includes("FFAC")
  );

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Skin & Aesthetics" }]}
        eyebrow="Department of Facial Aesthetics & Laser"
        title={
          <>
            Doctor-Led Skin, Laser &amp;{" "}
            <span className="text-champagne-gold">Facial Aesthetics.</span>
          </>
        }
        description="Safe, evidence-based clinical skin protocols calibrated for Indian skin tones and supervised by FFAC-certified facial aesthetic specialists."
        actions={
          <>
            <PrimaryButton href="/book-appointment?department=skin" showArrow>
              Schedule Skin Assessment
            </PrimaryButton>
            <SecondaryButton href="#skin-directory">
              Browse Skin Protocols
            </SecondaryButton>
          </>
        }
        aside={
          <div className="bg-white rounded-2xl overflow-hidden border border-border-subtle shadow-sm">
            <div className="relative aspect-[16/10] w-full bg-ivory-secondary">
              <Image
                src="/images/skin-consultation.jpg"
                alt="Skin, Laser and Facial Aesthetics Consultation at Dant काया Clinic"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-4 text-[10px] font-semibold uppercase tracking-widest text-[#fedb9b]">
                Clinical Skin &amp; Laser Care
              </span>
            </div>
            <div className="p-5 space-y-2.5 text-xs text-primary-text">
              <div className="flex items-center gap-2.5">
                <Sparkles
                  className="w-4 h-4 text-champagne-gold shrink-0"
                  aria-hidden="true"
                />
                <span>FFAC-Certified Specialists (Dr. Sumit &amp; Dr. Anisha)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Sun
                  className="w-4 h-4 text-champagne-gold shrink-0"
                  aria-hidden="true"
                />
                <span>Calibrated for Indian Skin Phototypes (III–V)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck
                  className="w-4 h-4 text-champagne-gold shrink-0"
                  aria-hidden="true"
                />
                <span>100% Steroid-Free &amp; Single-Use Sterile Tips</span>
              </div>
            </div>
          </div>
        }
      />

      {/* Section 1: Featured Skin & Laser Protocols */}
      <section className="py-20 bg-ivory-bg border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Signature Aesthetic Care"
              title="Core Skin &amp; Laser Protocols"
              description="Targeted clinical treatments for skin hydration, acne scar remodeling, and cooling-assisted laser hair reduction."
            />
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((service, idx) => (
              <RevealOnScroll key={service.slug} delay={idx * 0.07}>
                <ServiceCard
                  title={service.title}
                  description={service.shortDescription}
                  href={`/skin-aesthetics/${service.slug}`}
                  category={service.category}
                  image={service.image}
                  imageAlt={service.imageAlt}
                  duration={service.sessionDuration}
                  ctaLabel="Explore Protocol"
                  variant="featured"
                  surface="white"
                />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Categorized Directory of Skin & Aesthetic Services */}
      <section
        id="skin-directory"
        className="py-20 bg-ivory-secondary/50 border-b border-border-subtle scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Complete Aesthetic Directory"
              title="Skin &amp; Aesthetic Treatments"
              description="Explore our complete menu of medical facials, chemical peels, collagen induction, laser procedures, and anti-ageing therapies."
            />
          </RevealOnScroll>

          {skinCategoriesOrder.map((categoryName) => {
            const items = skinServices.filter(
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
                        href={`/skin-aesthetics/${service.slug}`}
                        category={service.category}
                        image={service.image}
                        imageAlt={service.imageAlt}
                        duration={service.sessionDuration}
                        ctaLabel="Protocol Details"
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

      {/* Section 3: FFAC Aesthetic Clinicians */}
      <section className="py-24 bg-ivory-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Fellowship-Trained Leadership"
              title="Our Facial Aesthetic Specialists"
              description="Both Dr. Sumit Kumar and Dr. Anisha Deb hold Fellowships in Facial Aesthetics & Cosmetology (FFAC), combining maxillofacial anatomical precision with clinical dermatology."
              action={
                <Link
                  href="/doctors"
                  className="inline-flex items-center gap-2 text-sm font-medium text-espresso hover:text-champagne-gold transition-colors group"
                >
                  <span>View All Clinic Doctors</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              }
            />
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {aestheticDoctors.map((doc, idx) => (
              <RevealOnScroll key={doc.slug} delay={idx * 0.07}>
                <DoctorCard doctor={doc} variant="preview" />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <AppointmentCTA
        eyebrow="Personalized Skin Analysis"
        heading="Begin Your Clinical Skin Transformation"
        description="Book a private consultation on Boring Canal Road, Patna to receive a customized, steroid-free skin and aesthetic treatment plan."
        primaryHref="/book-appointment?department=skin"
      />
    </>
  );
}
