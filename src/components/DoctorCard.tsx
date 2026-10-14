import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Calendar } from "lucide-react";
import type { DoctorProfile } from "@/data/doctors";
import { cn } from "@/lib/utils";
import { designSystem } from "@/lib/design-system";
import { INTERACTION_CLASSES } from "@/lib/motion";

interface DoctorCardProps {
  doctor: DoctorProfile;
  variant?: "preview" | "detailed";
  className?: string;
}

export function DoctorCard({
  doctor,
  variant = "preview",
  className,
}: DoctorCardProps) {
  const profileUrl = `/doctors/${doctor.slug}`;

  if (variant === "detailed") {
    return (
      <article
        className={cn(
          "group bg-white rounded-xl overflow-hidden border border-border-subtle shadow-[0_12px_32px_-8px_rgba(41,37,31,0.05)] flex flex-col lg:flex-row items-stretch",
          INTERACTION_CLASSES.cardSurfaceHover,
          className
        )}
      >
        {/* Portrait Column */}
        <div className="w-full lg:w-[360px] xl:w-[400px] shrink-0 relative aspect-[4/5] lg:aspect-auto min-h-[360px] lg:min-h-full bg-ivory-secondary overflow-hidden">
          <Image
            src={doctor.image}
            alt={doctor.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 400px"
            className={cn(
              "object-cover object-center",
              INTERACTION_CLASSES.doctorPortraitHover
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 via-transparent to-transparent lg:hidden" />
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-lg shadow-sm border border-border-subtle">
            <span className="text-[11px] font-semibold text-champagne-gold uppercase tracking-wider">
              {doctor.departmentBadge}
            </span>
          </div>
        </div>

        {/* Details Column */}
        <div className="lg:w-7/12 p-8 lg:p-12 flex flex-col justify-between gap-8">
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="bg-ivory-secondary text-espresso border border-border-subtle text-xs px-3 py-1 rounded font-semibold uppercase tracking-wider">
                {doctor.fullCredentials}
              </span>
              <span className="text-xs font-medium text-muted-grey flex items-center gap-1.5">
                <span
                  className="w-2 h-2 rounded-full bg-champagne-gold"
                  aria-hidden="true"
                />
                <span>Reg. Clinician • Patna</span>
              </span>
            </div>

            <div>
              <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-espresso">
                <Link
                  href={profileUrl}
                  className={cn(
                    "hover:text-champagne-gold transition-colors duration-200 rounded",
                    designSystem.focusRing
                  )}
                >
                  {doctor.name}
                </Link>
              </h3>
              <p className="text-xs sm:text-sm text-champagne-gold font-semibold mt-1">
                {doctor.roleSubtitle}
              </p>
              <p className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-grey mt-2">
                <Award
                  className="w-3.5 h-3.5 text-champagne-gold shrink-0"
                  aria-hidden="true"
                />
                <span>{doctor.pastAffiliation}</span>
              </p>
            </div>

            <p className="text-base text-primary-text/90 leading-relaxed italic border-l-2 border-champagne-gold/60 pl-4">
              &ldquo;{doctor.directorySummary}&rdquo;
            </p>

            <div className="flex flex-col gap-3">
              <h4 className="text-[11px] font-semibold text-champagne-gold uppercase tracking-widest">
                Key Competencies &amp; Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {doctor.competencyTags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-ivory-bg text-espresso border border-border-subtle/80 text-xs font-medium px-3 py-1.5 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-6 border-t border-border-subtle flex flex-wrap items-center justify-between gap-4">
            <Link
              href={profileUrl}
              className={cn(
                "group/link inline-flex items-center gap-1.5 text-sm font-semibold text-espresso hover:text-champagne-gold transition-colors duration-200 rounded",
                designSystem.focusRing
              )}
            >
              <span>View Full Profile</span>
              <ArrowRight
                className="w-4 h-4 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/link:translate-x-1"
                aria-hidden="true"
              />
            </Link>

            <Link
              href={`/book-appointment?doctor=${doctor.slug}`}
              className={cn(
                "bg-espresso text-white hover:bg-espresso-dark text-xs sm:text-sm font-medium px-6 py-3 rounded-lg shadow-[0_4px_20px_-2px_rgba(50,27,18,0.12)] inline-flex items-center gap-2",
                INTERACTION_CLASSES.buttonFeedback,
                designSystem.focusRing
              )}
            >
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>Request Appointment</span>
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "group bg-white rounded-lg overflow-hidden border border-border-subtle flex flex-col h-full",
        INTERACTION_CLASSES.cardSurfaceHover,
        className
      )}
    >
      <Link
        href={profileUrl}
        className="block aspect-[4/5] overflow-hidden bg-ivory-secondary relative"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={doctor.image}
          alt={doctor.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={cn(
            "object-cover object-center",
            INTERACTION_CLASSES.doctorPortraitHover
          )}
        />
      </Link>

      <div className="p-7 flex flex-col flex-grow">
        <div className="mb-4">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-champagne-gold block mb-1">
            {doctor.role}
          </span>
          <h3 className="font-heading text-xl font-bold text-espresso">
            <Link
              href={profileUrl}
              className={cn(
                "hover:text-champagne-gold transition-colors duration-200 rounded",
                designSystem.focusRing
              )}
            >
              {doctor.name}
            </Link>
          </h3>
          <p className="text-xs font-medium text-muted-grey mt-1">
            {doctor.credentials}
          </p>
        </div>

        <p className="text-sm text-primary-text/80 leading-relaxed mb-6 flex-grow">
          {doctor.homepageSummary}
        </p>

        <div className="pt-4 border-t border-border-subtle">
          <Link
            href={profileUrl}
            className={cn(
              "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-espresso group-hover:text-champagne-gold transition-colors duration-200 rounded-xs",
              designSystem.focusRing
            )}
          >
            <span>View Profile</span>
            <ArrowRight
              className={cn("w-3.5 h-3.5", INTERACTION_CLASSES.arrowSlide)}
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
