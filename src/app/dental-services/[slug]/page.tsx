import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Clock,
  ShieldCheck,
  Stethoscope,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import {
  dentalServices,
  getDentalServiceBySlug,
} from "@/data/dental-services";
import { getDoctorBySlug } from "@/data/doctors";
import { PageHero } from "@/components/PageHero";
import { PrimaryButton } from "@/components/PrimaryButton";
import { WhatsAppContactButton } from "@/components/WhatsAppContactButton";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactInformation } from "@/components/ContactInformation";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { RevealOnScroll } from "@/components/RevealOnScroll";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return dentalServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getDentalServiceBySlug(slug);

  if (!service) {
    return {
      title: "Dental Treatment Not Found",
    };
  }

  return {
    title: `${service.title} in Patna — Clinical Procedure & Specialist Care`,
    description: service.shortDescription,
    alternates: {
      canonical: `/dental-services/${service.slug}`,
    },
  };
}

export default async function DentalServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getDentalServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const leadDoctor = getDoctorBySlug(service.leadDoctorSlug);
  const relatedServices = dentalServices
    .filter((s) => s.slug !== service.slug && s.category === service.category)
    .slice(0, 3);
  const fallbackRelated =
    relatedServices.length >= 2
      ? relatedServices
      : dentalServices.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Dental Care", href: "/dental-services" },
          { label: service.title },
        ]}
        eyebrow={service.category}
        title={service.title}
        description={service.shortDescription}
        actions={
          <>
            <PrimaryButton
              href={`/book-appointment?service=${service.slug}`}
              showArrow
            >
              Book Consultation for {service.title}
            </PrimaryButton>
            <WhatsAppContactButton
              label="Ask a Question on WhatsApp"
              message={`Hello Dant काया Clinic, I would like information regarding ${service.title}.`}
            />
          </>
        }
        aside={
          <div className="bg-white rounded-lg p-6 border border-border-subtle space-y-4 shadow-xs">
            <div className="flex items-start gap-3">
              <Clock
                className="w-4 h-4 text-champagne-gold shrink-0 mt-1"
                aria-hidden="true"
              />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-grey">
                  Clinical Duration
                </p>
                <p className="text-sm font-semibold text-espresso mt-0.5">
                  {service.clinicalDuration}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-3 border-t border-border-subtle/70">
              <ShieldCheck
                className="w-4 h-4 text-champagne-gold shrink-0 mt-1"
                aria-hidden="true"
              />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-grey">
                  Comfort &amp; Anesthesia
                </p>
                <p className="text-sm font-semibold text-espresso mt-0.5">
                  {service.anesthesiaType}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-3 border-t border-border-subtle/70">
              <Stethoscope
                className="w-4 h-4 text-champagne-gold shrink-0 mt-1"
                aria-hidden="true"
              />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-grey">
                  Recovery Profile
                </p>
                <p className="text-xs text-primary-text/85 mt-0.5 leading-relaxed">
                  {service.recoverySummary}
                </p>
              </div>
            </div>
          </div>
        }
      />

      {/* Main Content Layout */}
      <section className="py-20 lg:py-24 bg-ivory-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left 8 Columns: Clinical Deep Dive */}
            <div className="lg:col-span-8 space-y-16">
              {/* Optional Editorial Image */}
              {service.image && (
                <RevealOnScroll>
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-border-subtle bg-ivory-secondary shadow-sm">
                    <Image
                      src={service.image}
                      alt={service.imageAlt || service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 66vw"
                      className="object-cover"
                    />
                  </div>
                </RevealOnScroll>
              )}

              {/* Clinical Overview */}
              <RevealOnScroll className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne-gold block">
                  Clinical Overview
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-espresso">
                  Understanding {service.title}
                </h2>
                <div className="space-y-4 text-base text-muted-grey leading-relaxed">
                  {service.overview.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </RevealOnScroll>

              {/* Indications / When Is This Needed */}
              <RevealOnScroll className="bg-white rounded-lg p-8 border border-border-subtle">
                <div className="flex items-center gap-2.5 mb-4">
                  <AlertCircle
                    className="w-5 h-5 text-champagne-gold"
                    aria-hidden="true"
                  />
                  <h2 className="font-heading text-xl font-semibold text-espresso">
                    Clinical Indications &amp; Symptoms
                  </h2>
                </div>
                <p className="text-sm text-muted-grey mb-6">
                  Our specialists typically recommend {service.title.toLowerCase()}{" "}
                  when patients present with the following clinical signs:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.indications.map((indication) => (
                    <li
                      key={indication}
                      className="flex items-start gap-2.5 text-sm text-primary-text bg-ivory-bg/70 p-3.5 rounded border border-border-subtle/70"
                    >
                      <CheckCircle2
                        className="w-4 h-4 text-champagne-gold shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{indication}</span>
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>

              {/* Step-by-Step Procedure Protocol */}
              <RevealOnScroll className="space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne-gold block mb-2">
                    Clinical Workflow
                  </span>
                  <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-espresso">
                    Step-by-Step Procedure Protocol
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.procedureSteps.map((step) => (
                    <div
                      key={step.step}
                      className="bg-white rounded-xl p-6 border border-border-subtle flex flex-col gap-3 shadow-2xs"
                    >
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-espresso text-gold-light font-heading text-xs font-bold shrink-0">
                        {step.step}
                      </span>
                      <div>
                        <h3 className="font-heading text-base font-bold text-espresso mb-1">
                          {step.title}
                        </h3>
                        <p className="text-xs text-muted-grey leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>

              {/* Benefits & Post-Procedure Aftercare */}
              <RevealOnScroll className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-ivory-secondary/60 rounded-lg p-7 border border-border-subtle">
                  <h3 className="font-heading text-lg font-semibold text-espresso mb-4">
                    Key Clinical Benefits
                  </h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2.5 text-sm text-primary-text"
                      >
                        <CheckCircle2
                          className="w-4 h-4 text-champagne-gold shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-7 border border-border-subtle">
                  <h3 className="font-heading text-lg font-semibold text-espresso mb-4">
                    Post-Treatment Care Guidance
                  </h3>
                  <ul className="space-y-3">
                    {service.aftercare.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-muted-grey"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-champagne-gold shrink-0 mt-2"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>

              {/* Frequently Asked Questions */}
              {service.faqs.length > 0 && (
                <RevealOnScroll className="space-y-6">
                  <div className="flex items-center gap-2.5">
                    <HelpCircle
                      className="w-5 h-5 text-champagne-gold"
                      aria-hidden="true"
                    />
                    <h2 className="font-heading text-2xl font-semibold text-espresso">
                      Frequently Asked Questions
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {service.faqs.map((faq) => (
                      <div
                        key={faq.question}
                        className="bg-white rounded-lg p-6 border border-border-subtle"
                      >
                        <h3 className="font-heading text-base font-semibold text-espresso mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-sm text-muted-grey leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </RevealOnScroll>
              )}
            </div>

            {/* Right 4 Columns: Lead Specialist & Clinic Coordinates Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              {leadDoctor && (
                <RevealOnScroll>
                  <div className="bg-white rounded-lg p-7 border border-border-subtle shadow-xs">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-champagne-gold block mb-3">
                      Lead Specialist
                    </span>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="relative w-16 h-20 rounded-md overflow-hidden bg-ivory-secondary border border-border-subtle shrink-0">
                        <Image
                          src={leadDoctor.image}
                          alt={leadDoctor.imageAlt}
                          fill
                          sizes="64px"
                          className="object-cover object-top"
                        />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-espresso">
                          <Link
                            href={`/doctors/${leadDoctor.slug}`}
                            className="hover:text-champagne-gold transition-colors"
                          >
                            {leadDoctor.name}
                          </Link>
                        </h3>
                        <p className="text-xs font-semibold text-champagne-gold">
                          {leadDoctor.role}
                        </p>
                        <p className="text-xs text-muted-grey mt-0.5">
                          {leadDoctor.credentials}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-muted-grey leading-relaxed mb-5">
                      {leadDoctor.homepageSummary}
                    </p>

                    <div className="flex flex-col gap-2.5">
                      <Link
                        href={`/book-appointment?doctor=${leadDoctor.slug}&service=${service.slug}`}
                        className="w-full text-center bg-espresso hover:bg-espresso-dark text-white text-xs font-medium py-3 px-4 rounded-[6px] transition-colors"
                      >
                        Book with {leadDoctor.name}
                      </Link>
                      <Link
                        href={`/doctors/${leadDoctor.slug}`}
                        className="w-full text-center border border-border-subtle hover:border-champagne-gold text-espresso text-xs font-medium py-2.5 px-4 rounded-[6px] transition-colors"
                      >
                        View Doctor Profile
                      </Link>
                    </div>
                  </div>
                </RevealOnScroll>
              )}

              <RevealOnScroll delay={0.08}>
                <ContactInformation variant="sidebar" />
              </RevealOnScroll>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Dental Procedures */}
      <section className="py-20 bg-ivory-secondary/50 border-t border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne-gold block mb-2">
                Continue Exploring
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-espresso">
                Related Dental Procedures
              </h2>
            </div>
            <Link
              href="/dental-services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-espresso hover:text-champagne-gold transition-colors"
            >
              <span>All Dental Services</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fallbackRelated.map((rel, idx) => (
              <RevealOnScroll key={rel.slug} delay={idx * 0.07}>
                <ServiceCard
                  title={rel.title}
                  description={rel.shortDescription}
                  href={`/dental-services/${rel.slug}`}
                  category={rel.category}
                  image={rel.image}
                  imageAlt={rel.imageAlt}
                  duration={rel.clinicalDuration}
                  variant="directory"
                  surface="white"
                />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <AppointmentCTA
        heading={`Ready to Discuss ${service.title}?`}
        primaryHref={`/book-appointment?service=${service.slug}`}
      />
    </>
  );
}
