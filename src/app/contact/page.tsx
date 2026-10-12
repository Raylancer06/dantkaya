import type { Metadata } from "next";
import { MapPin, ExternalLink, Navigation } from "lucide-react";
import { clinicInfo } from "@/data/clinic";
import { PageHero } from "@/components/PageHero";
import { ContactInformation } from "@/components/ContactInformation";
import { ContactEnquiryForm } from "@/components/ContactEnquiryForm";
import { PrimaryButton } from "@/components/PrimaryButton";
import { WhatsAppContactButton } from "@/components/WhatsAppContactButton";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Contact & Clinic Location — Boring Canal Road, Near Reliance Trends, Patna",
  description:
    "Visit Dant काया Multispeciality Clinic at Boring Canal Road, Near Reliance Trends, Patna, Bihar 800001. Call or WhatsApp +91 89339 32525 for dental and skin consultations.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Contact & Location" }]}
        eyebrow="Patna Clinic Coordinates"
        title={
          <>
            Visit Us on{" "}
            <span className="text-champagne-gold italic font-normal">
              Boring Canal Road, Patna.
            </span>
          </>
        }
        description="Conveniently situated near Reliance Trends on Boring Canal Road (Patna - 800001). Reach our reception desk by phone, WhatsApp, or in person."
        actions={
          <>
            <PrimaryButton href="/book-appointment" showArrow>
              Schedule Appointment
            </PrimaryButton>
            <WhatsAppContactButton label="Message on WhatsApp" />
          </>
        }
      />

      {/* Section 1: 3-Column Verified Contact Cards */}
      <section className="py-20 bg-ivory-bg border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealOnScroll>
            <ContactInformation variant="cards" />
          </RevealOnScroll>
        </div>
      </section>

      {/* Section 2: Enquiry Form + Interactive Map & Directions */}
      <section className="py-24 bg-ivory-secondary/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 6 Columns: General Enquiry Form */}
            <RevealOnScroll className="lg:col-span-6">
              <ContactEnquiryForm />
            </RevealOnScroll>

            {/* Right 6 Columns: Google Map & Landmark Guide */}
            <RevealOnScroll delay={0.08} className="lg:col-span-6 space-y-6">
              <div className="bg-white rounded-lg p-7 border border-border-subtle space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-champagne-gold block mb-1">
                      Directions &amp; Landmark
                    </span>
                    <h2 className="font-heading text-2xl font-semibold text-espresso">
                      Near Reliance Trends, Boring Canal Road
                    </h2>
                  </div>
                  <a
                    href={clinicInfo.googleMapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[6px] bg-ivory-secondary hover:bg-champagne-gold/20 text-xs font-semibold text-espresso transition-colors shrink-0"
                  >
                    <Navigation
                      className="w-3.5 h-3.5 text-champagne-gold"
                      aria-hidden="true"
                    />
                    <span>Navigate</span>
                  </a>
                </div>

                <p className="text-sm text-muted-grey leading-relaxed">
                  Our clinic is located directly on{" "}
                  <strong className="text-espresso">Boring Canal Road</strong>{" "}
                  near the{" "}
                  <strong className="text-espresso">Reliance Trends</strong>{" "}
                  landmark in Patna (PIN 800001), easily accessible from Bailey
                  Road, Patliputra Colony, Sri Krishna Puri, and Fraser Road.
                </p>

                {/* Embedded Map Frame */}
                <div className="relative aspect-[16/10] w-full rounded-md overflow-hidden border border-border-subtle bg-ivory-secondary">
                  <iframe
                    title="Google Map Location for Dant काया Multispeciality Clinic, Boring Canal Road, Patna"
                    src={clinicInfo.googleMapsEmbedUrl}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-grey">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin
                      className="w-4 h-4 text-champagne-gold"
                      aria-hidden="true"
                    />
                    <span>{clinicInfo.address.full}</span>
                  </span>
                  <a
                    href={clinicInfo.googleMapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-espresso hover:text-champagne-gold"
                  >
                    <span>Open Larger Map</span>
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
