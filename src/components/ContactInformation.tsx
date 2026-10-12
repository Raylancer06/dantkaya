import React from "react";
import { MapPin, Phone, Clock, MessageCircle, ExternalLink } from "lucide-react";
import { clinicInfo } from "@/data/clinic";
import { cn } from "@/lib/utils";

interface ContactInformationProps {
  variant?: "cards" | "sidebar";
  className?: string;
}

export function ContactInformation({
  variant = "cards",
  className,
}: ContactInformationProps) {
  if (variant === "sidebar") {
    return (
      <div
        className={cn(
          "bg-ivory-secondary/70 border border-border-subtle rounded-lg p-7 space-y-6",
          className
        )}
      >
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-champagne-gold block mb-1">
            Clinic Coordinates
          </span>
          <h3 className="font-heading text-xl font-semibold text-espresso">
            Dant काया Multispeciality Clinic
          </h3>
        </div>

        <div className="space-y-5 text-sm">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-md bg-white border border-border-subtle flex items-center justify-center shrink-0 mt-0.5">
              <MapPin
                className="w-4 h-4 text-champagne-gold"
                aria-hidden="true"
              />
            </div>
            <div>
              <p className="font-semibold text-espresso text-xs uppercase tracking-wider mb-1">
                Location
              </p>
              <p className="text-muted-grey leading-relaxed">
                {clinicInfo.address.full}
              </p>
              <a
                href={clinicInfo.googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-espresso hover:text-champagne-gold mt-2 transition-colors"
              >
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-md bg-white border border-border-subtle flex items-center justify-center shrink-0 mt-0.5">
              <Phone
                className="w-4 h-4 text-champagne-gold"
                aria-hidden="true"
              />
            </div>
            <div>
              <p className="font-semibold text-espresso text-xs uppercase tracking-wider mb-1">
                Direct Telephone
              </p>
              <a
                href={`tel:${clinicInfo.phoneRaw}`}
                className="text-base font-heading font-semibold text-espresso hover:text-champagne-gold transition-colors block"
              >
                {clinicInfo.phoneDisplay}
              </a>
              <p className="text-xs text-muted-grey mt-0.5">
                Available during clinical OPD hours
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-md bg-white border border-border-subtle flex items-center justify-center shrink-0 mt-0.5">
              <MessageCircle
                className="w-4 h-4 text-champagne-gold"
                aria-hidden="true"
              />
            </div>
            <div>
              <p className="font-semibold text-espresso text-xs uppercase tracking-wider mb-1">
                WhatsApp Reception
              </p>
              <a
                href={clinicInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-espresso hover:text-champagne-gold underline underline-offset-4 transition-colors"
              >
                Message {clinicInfo.phoneDisplay}
              </a>
              <p className="text-xs text-muted-grey mt-0.5">
                Share X-rays or request preferred consultation slots
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-md bg-white border border-border-subtle flex items-center justify-center shrink-0 mt-0.5">
              <Clock
                className="w-4 h-4 text-champagne-gold"
                aria-hidden="true"
              />
            </div>
            <div>
              <p className="font-semibold text-espresso text-xs uppercase tracking-wider mb-1">
                Clinical Hours
              </p>
              {clinicInfo.hours.detailed.map((slot) => (
                <div key={slot.days} className="mb-1.5 last:mb-0">
                  <p className="text-xs font-medium text-espresso">
                    {slot.days}:{" "}
                    <span className="font-normal text-muted-grey">
                      {slot.time}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-6",
        className
      )}
    >
      {/* Location Card */}
      <div className="bg-white rounded-lg p-7 border border-border-subtle flex flex-col justify-between">
        <div>
          <div className="w-10 h-10 rounded-md bg-ivory-secondary flex items-center justify-center mb-5">
            <MapPin
              className="w-5 h-5 text-champagne-gold"
              aria-hidden="true"
            />
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-champagne-gold block mb-1">
            Clinic Address
          </span>
          <h3 className="font-heading text-lg font-semibold text-espresso mb-2">
            Boring Canal Road, Patna
          </h3>
          <p className="text-sm text-muted-grey leading-relaxed">
            {clinicInfo.address.street}, {clinicInfo.address.landmark},
            <br />
            {clinicInfo.address.city}, {clinicInfo.address.state} –{" "}
            {clinicInfo.address.postalCode}
          </p>
        </div>
        <div className="mt-6 pt-4 border-t border-border-subtle/70">
          <a
            href={clinicInfo.googleMapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-espresso hover:text-champagne-gold transition-colors"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Direct Contact Card */}
      <div className="bg-white rounded-lg p-7 border border-border-subtle flex flex-col justify-between">
        <div>
          <div className="w-10 h-10 rounded-md bg-ivory-secondary flex items-center justify-center mb-5">
            <Phone
              className="w-5 h-5 text-champagne-gold"
              aria-hidden="true"
            />
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-champagne-gold block mb-1">
            Telephone &amp; WhatsApp
          </span>
          <h3 className="font-heading text-lg font-semibold text-espresso mb-2">
            <a
              href={`tel:${clinicInfo.phoneRaw}`}
              className="hover:text-champagne-gold transition-colors"
            >
              {clinicInfo.phoneDisplay}
            </a>
          </h3>
          <p className="text-sm text-muted-grey leading-relaxed">
            Call our reception desk directly or message us on WhatsApp for
            appointment scheduling and treatment enquiries.
          </p>
        </div>
        <div className="mt-6 pt-4 border-t border-border-subtle/70 flex items-center gap-4">
          <a
            href={`tel:${clinicInfo.phoneRaw}`}
            className="text-xs font-semibold uppercase tracking-wider text-espresso hover:text-champagne-gold transition-colors"
          >
            Call Now
          </a>
          <span className="text-border-subtle">|</span>
          <a
            href={clinicInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold uppercase tracking-wider text-espresso hover:text-champagne-gold transition-colors"
          >
            WhatsApp Chat
          </a>
        </div>
      </div>

      {/* Visiting Hours Card */}
      <div className="bg-white rounded-lg p-7 border border-border-subtle flex flex-col justify-between">
        <div>
          <div className="w-10 h-10 rounded-md bg-ivory-secondary flex items-center justify-center mb-5">
            <Clock
              className="w-5 h-5 text-champagne-gold"
              aria-hidden="true"
            />
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-champagne-gold block mb-1">
            Consultation Timings
          </span>
          <h3 className="font-heading text-lg font-semibold text-espresso mb-3">
            Outpatient Schedule
          </h3>
          <div className="space-y-2.5 text-sm">
            {clinicInfo.hours.detailed.map((item) => (
              <div key={item.days}>
                <p className="font-medium text-espresso">{item.days}</p>
                <p className="text-muted-grey text-xs">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-border-subtle/70">
          <span className="text-xs text-muted-grey">
            Prior appointment recommended for specialist procedures
          </span>
        </div>
      </div>
    </div>
  );
}
