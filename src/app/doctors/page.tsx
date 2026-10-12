import type { Metadata } from "next";
import { ShieldCheck, Award, Activity, MessageSquare, Sparkles } from "lucide-react";
import { doctors } from "@/data/doctors";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DoctorCard } from "@/components/DoctorCard";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Our Doctors — Meet the Experts Behind Your Smile",
  description:
    "Meet the clinical specialists at Dant काया Multispeciality Clinic, Patna: Dr. Abhinav Kumar (BDS, MBA, MIDA), Dr. Sumit Kumar (BDS, FFAC), and Dr. Anisha Deb (BDS, MDS, FFAC).",
  alternates: {
    canonical: "/doctors",
  },
};

const patientCentredStandards = [
  {
    number: "01",
    tag: "Personalized Care",
    icon: Activity,
    title: "Individualized Treatment Planning",
    description:
      "Every consultation begins with comprehensive digital diagnostics and an open conversation about your health history, functional goals, and aesthetic expectations.",
  },
  {
    number: "02",
    tag: "Radical Candor",
    icon: MessageSquare,
    title: "Clear & Unhurried Communication",
    description:
      "Our specialists explain clinical findings, conservative options, and multi-stage timelines in plain language—empowering you to make confident, informed choices.",
  },
  {
    number: "03",
    tag: "Gentle Procedures",
    icon: Sparkles,
    title: "Prioritized Patient Comfort",
    description:
      "From calm operatory acoustics to modern anesthesia and minimally invasive techniques, every step is designed to ensure a tranquil, reassuring experience.",
  },
];

export default function DoctorsPage() {
  return (
    <>
      {/* Hero & Breadcrumb Section (Matches Stitch Our Doctors Reference) */}
      <section className="w-full bg-ivory-secondary/70 py-12 md:py-18 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-6">
          <Breadcrumbs items={[{ label: "Our Doctors" }]} />

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-2">
            <RevealOnScroll className="max-w-3xl flex flex-col gap-4">
              <span className="text-[11px] font-semibold text-champagne-gold uppercase tracking-[0.16em]">
                Clinical Team &amp; Specialists • Boring Canal Road, Patna
              </span>
              <h1 className="font-heading text-[2.25rem] sm:text-[2.75rem] lg:text-[3.25rem] font-semibold text-espresso tracking-[-0.02em] leading-[1.12]">
                Meet the Experts Behind Your Smile
              </h1>
              <p className="text-base sm:text-lg text-muted-grey max-w-2xl leading-relaxed">
                Get to know our dental professionals and their approach to
                personalized oral and aesthetic care.
              </p>
            </RevealOnScroll>

            {/* Quick Authority Badges */}
            <RevealOnScroll
              delay={0.08}
              className="flex flex-wrap items-center gap-4 lg:pb-1"
            >
              <div className="bg-white px-5 py-3.5 rounded-xl border border-border-subtle shadow-sm flex items-center gap-3">
                <ShieldCheck
                  className="w-5 h-5 text-champagne-gold shrink-0"
                  aria-hidden="true"
                />
                <div className="flex flex-col">
                  <span className="font-heading text-xs font-semibold text-espresso">
                    Multidisciplinary Panel
                  </span>
                  <span className="text-[11px] text-muted-grey">
                    3 Senior Specialists
                  </span>
                </div>
              </div>

              <div className="bg-white px-5 py-3.5 rounded-xl border border-border-subtle shadow-sm flex items-center gap-3">
                <Award
                  className="w-5 h-5 text-champagne-gold shrink-0"
                  aria-hidden="true"
                />
                <div className="flex flex-col">
                  <span className="font-heading text-xs font-semibold text-espresso">
                    Evidence-Based
                  </span>
                  <span className="text-[11px] text-muted-grey">
                    BDS, MDS, MBA &amp; FFAC
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Doctor Directory Cards Section */}
      <section className="w-full py-16 md:py-24 bg-ivory-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
          {doctors.map((doctor, index) => (
            <RevealOnScroll key={doctor.slug} delay={index * 0.08}>
              <DoctorCard doctor={doctor} variant="detailed" />
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Patient-Centred Care Philosophy */}
      <section className="w-full bg-ivory-secondary/60 py-20 md:py-24 border-t border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
          <RevealOnScroll className="text-center max-w-2xl mx-auto flex flex-col gap-3">
            <span className="text-[11px] font-semibold text-champagne-gold uppercase tracking-[0.16em]">
              Standards of Practice
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-espresso">
              Our Patient-Centred Approach
            </h2>
            <p className="text-base text-muted-grey">
              Clinical excellence is defined by the thoughtfulness of every
              clinical intervention and the dignity afforded to each patient.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {patientCentredStandards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <RevealOnScroll key={item.number} delay={idx * 0.07}>
                  <div className="bg-white p-8 rounded-xl border border-border-subtle shadow-sm flex flex-col gap-5 justify-between h-full">
                    <div className="flex flex-col gap-4">
                      <div className="w-12 h-12 rounded-lg bg-ivory-secondary border border-border-subtle flex items-center justify-center text-champagne-gold">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <h3 className="font-heading text-xl font-semibold text-espresso">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-grey leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-border-subtle/70">
                      <span className="text-[11px] font-semibold text-champagne-gold uppercase tracking-wider">
                        {item.number} • {item.tag}
                      </span>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <AppointmentCTA
        heading="Ready to Consult with Our Specialists?"
        description="Whether you require a routine dental evaluation, root canal therapy, dental implants, or a personalized skin consultation, our clinicians are here to guide you."
      />
    </>
  );
}
