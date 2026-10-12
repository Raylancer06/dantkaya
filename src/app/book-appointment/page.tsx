import React, { Suspense } from "react";
import type { Metadata } from "next";
import { ShieldCheck, Clock, PhoneCall } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { AppointmentBookingForm } from "@/components/AppointmentBookingForm";
import { ContactInformation } from "@/components/ContactInformation";
import { WhatsAppContactButton } from "@/components/WhatsAppContactButton";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { clinicInfo } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Book an Appointment — Dental & Skin Consultation in Patna",
  description:
    "Request a dental, root canal, implant, clear aligner, or facial aesthetic consultation at Dant काया Multispeciality Clinic, Boring Canal Road, Patna.",
  alternates: {
    canonical: "/book-appointment",
  },
};

export default function BookAppointmentPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Book Appointment" }]}
        eyebrow="Patient Scheduling Desk"
        title={
          <>
            Request Your Private{" "}
            <span className="text-champagne-gold italic font-normal">
              Clinical Consultation.
            </span>
          </>
        }
        description="Select your preferred specialist, procedure, and time window below, or reach our Boring Canal Road reception directly via telephone or WhatsApp."
      />

      <section className="py-20 lg:py-24 bg-ivory-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left 8 Columns: Appointment Form */}
            <div className="lg:col-span-8">
              <RevealOnScroll>
                <Suspense
                  fallback={
                    <div className="bg-white rounded-lg p-10 border border-border-subtle text-sm text-muted-grey">
                      Loading consultation scheduling form...
                    </div>
                  }
                >
                  <AppointmentBookingForm />
                </Suspense>
              </RevealOnScroll>
            </div>

            {/* Right 4 Columns: How Scheduling Works & Direct Coordinates */}
            <aside className="lg:col-span-4 space-y-8">
              <RevealOnScroll delay={0.07}>
                <div className="bg-white rounded-lg p-7 border border-border-subtle space-y-5">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-champagne-gold block">
                    What Happens Next
                  </span>
                  <h2 className="font-heading text-xl font-semibold text-espresso">
                    Our 3-Step Confirmation Process
                  </h2>

                  <div className="space-y-4 text-xs text-muted-grey leading-relaxed">
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-ivory-secondary text-espresso font-bold flex items-center justify-center shrink-0">
                        1
                      </span>
                      <p>
                        <strong className="text-espresso block">
                          Request Registration
                        </strong>
                        Submit your preferred date, session window, and
                        specialist choice using the form.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-ivory-secondary text-espresso font-bold flex items-center justify-center shrink-0">
                        2
                      </span>
                      <p>
                        <strong className="text-espresso block">
                          Reception Verification Call
                        </strong>
                        Our front desk checks the doctor&apos;s surgical and OPD
                        roster and calls/WhatsApps you to confirm the exact
                        slot.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-ivory-secondary text-espresso font-bold flex items-center justify-center shrink-0">
                        3
                      </span>
                      <p>
                        <strong className="text-espresso block">
                          Unhurried Clinic Visit
                        </strong>
                        Arrive at our Boring Canal Road clinic (Near Reliance
                        Trends) for your diagnostic evaluation.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border-subtle flex flex-col gap-2.5">
                    <WhatsAppContactButton
                      label="Book Directly on WhatsApp"
                      className="w-full"
                    />
                    <a
                      href={`tel:${clinicInfo.phoneRaw}`}
                      className="inline-flex items-center justify-center gap-2 bg-ivory-secondary hover:bg-ivory-hover text-espresso text-xs font-semibold py-3 px-4 rounded-[6px] transition-colors"
                    >
                      <PhoneCall
                        className="w-3.5 h-3.5 text-champagne-gold"
                        aria-hidden="true"
                      />
                      <span>Call Desk: {clinicInfo.phoneDisplay}</span>
                    </a>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.12}>
                <ContactInformation variant="sidebar" />
              </RevealOnScroll>

              <RevealOnScroll delay={0.16}>
                <div className="bg-ivory-secondary/50 rounded-lg p-6 border border-border-subtle space-y-3 text-xs text-muted-grey">
                  <div className="flex items-center gap-2 text-espresso font-semibold">
                    <ShieldCheck
                      className="w-4 h-4 text-champagne-gold"
                      aria-hidden="true"
                    />
                    <span>Patient Privacy &amp; Medical Records</span>
                  </div>
                  <p className="leading-relaxed">
                    Your contact details and clinical notes are used strictly by
                    Dant काया Multispeciality Clinic for scheduling your
                    consultation. If you have previous dental X-rays or
                    prescriptions, please bring them to your appointment.
                  </p>
                  <div className="flex items-center gap-2 text-espresso font-medium pt-1">
                    <Clock
                      className="w-3.5 h-3.5 text-champagne-gold"
                      aria-hidden="true"
                    />
                    <span>{clinicInfo.hours.weekdays}</span>
                  </div>
                </div>
              </RevealOnScroll>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
