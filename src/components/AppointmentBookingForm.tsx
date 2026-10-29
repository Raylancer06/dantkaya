"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  MessageCircle,
  Phone,
  CalendarClock,
  Info,
} from "lucide-react";
import {
  appointmentRequestSchema,
  type AppointmentRequestValues,
} from "@/lib/validation";
import { doctors } from "@/data/doctors";
import { dentalServices } from "@/data/dental-services";
import { skinServices } from "@/data/skin-services";
import { clinicInfo } from "@/data/clinic";
import { cn } from "@/lib/utils";
import { designSystem } from "@/lib/design-system";

interface SubmissionSuccessState {
  referenceId: string;
  message: string;
  whatsappFollowUpUrl: string;
  patientName: string;
  preferredDate: string;
  preferredTimeSlot: string;
  serviceInterest: string;
}

export function AppointmentBookingForm() {
  const searchParams = useSearchParams();
  const [serverError, setServerError] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<SubmissionSuccessState | null>(
    null
  );

  // Earliest consultation date: current date onwards
  const minBookingDate = new Date().toISOString().split("T")[0];

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentRequestValues>({
    resolver: zodResolver(appointmentRequestSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      department: "dental",
      preferredDoctor: "any-available",
      serviceInterest: "Root Canal Treatment",
      preferredDate: minBookingDate,
      preferredTimeSlot: "morning-0930-1230",
      notes: "",
      consentToContact: undefined as unknown as true,
    },
  });

  useEffect(() => {
    const doctorParam = searchParams.get("doctor");
    const serviceParam = searchParams.get("service");
    const deptParam = searchParams.get("department");

    if (doctorParam) {
      const matchedDoc = doctors.find((d) => d.slug === doctorParam);
      if (matchedDoc) {
        setValue("preferredDoctor", matchedDoc.name);
      }
    }

    if (deptParam === "skin") {
      setValue("department", "skin");
      setValue("serviceInterest", "Skin Rejuvenation");
    } else if (deptParam === "dental") {
      setValue("department", "dental");
    }

    if (serviceParam) {
      const matchedDental = dentalServices.find((s) => s.slug === serviceParam);
      if (matchedDental) {
        setValue("department", "dental");
        setValue("serviceInterest", matchedDental.title);
      } else {
        const matchedSkin = skinServices.find((s) => s.slug === serviceParam);
        if (matchedSkin) {
          setValue("department", "skin");
          setValue("serviceInterest", matchedSkin.title);
        }
      }
    }
  }, [searchParams, setValue]);

  const onSubmit = async (values: AppointmentRequestValues) => {
    setServerError(null);

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        setServerError(
          result.message ||
            `Please check the form fields or call ${clinicInfo.phoneDisplay} directly.`
        );
        return;
      }

      setSuccessData({
        referenceId: result.referenceId,
        message: result.message,
        whatsappFollowUpUrl: result.whatsappFollowUpUrl,
        patientName: values.fullName,
        preferredDate: values.preferredDate,
        preferredTimeSlot: values.preferredTimeSlot,
        serviceInterest: values.serviceInterest,
      });
    } catch {
      setServerError(
        `Network error while submitting your request. Please call or WhatsApp ${clinicInfo.phoneDisplay}.`
      );
    }
  };

  if (successData) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="bg-white rounded-lg p-8 sm:p-10 border border-champagne-gold/60 shadow-[0_20px_40px_-15px_rgba(41,37,31,0.08)] space-y-6"
      >
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#E7F3EB] text-[#2D5A3C] text-xs font-semibold uppercase tracking-wider">
          <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span>Consultation Request Logged • Pending Confirmation</span>
        </div>

        <div>
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-espresso">
            Thank You, {successData.patientName}
          </h2>
          <p className="text-xs font-semibold uppercase tracking-widest text-champagne-gold mt-1">
            Request Reference ID: {successData.referenceId}
          </p>
        </div>

        <div className="bg-ivory-bg border border-border-subtle rounded-md p-5 space-y-2 text-sm text-primary-text">
          <p className="font-semibold text-espresso flex items-center gap-2">
            <Info className="w-4 h-4 text-champagne-gold shrink-0" />
            <span>Important Notice About Your Appointment Status:</span>
          </p>
          <p className="text-muted-grey leading-relaxed">
            {successData.message}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-ivory-secondary/60 p-5 rounded-md border border-border-subtle">
          <div>
            <span className="text-muted-grey block">Requested Procedure:</span>
            <strong className="text-espresso text-sm">
              {successData.serviceInterest}
            </strong>
          </div>
          <div>
            <span className="text-muted-grey block">Requested Date:</span>
            <strong className="text-espresso text-sm">
              {successData.preferredDate}
            </strong>
          </div>
        </div>

        <div className="pt-2 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-espresso">
            Want Faster Slot Confirmation?
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={successData.whatsappFollowUpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-espresso hover:bg-espresso-dark text-white text-sm font-medium px-6 py-3.5 rounded-[6px] transition-colors"
            >
              <MessageCircle
                className="w-4 h-4 text-champagne-gold"
                aria-hidden="true"
              />
              <span>Send Request Details via WhatsApp</span>
            </a>

            <a
              href={`tel:${clinicInfo.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 border border-border-subtle bg-ivory-bg hover:bg-ivory-secondary text-espresso text-sm font-medium px-5 py-3.5 rounded-[6px] transition-colors"
            >
              <Phone
                className="w-4 h-4 text-champagne-gold"
                aria-hidden="true"
              />
              <span>Call {clinicInfo.phoneDisplay}</span>
            </a>
          </div>
        </div>

        <div className="pt-4 border-t border-border-subtle">
          <button
            type="button"
            onClick={() => {
              setSuccessData(null);
              reset();
            }}
            className="text-xs font-semibold uppercase tracking-wider text-muted-grey hover:text-espresso underline underline-offset-4 cursor-pointer"
          >
            Submit Another Consultation Request
          </button>
        </div>
      </div>
    );
  }

  const inputBaseClasses = cn(
    "w-full bg-white border border-border-subtle rounded-[6px] px-4 py-3 text-sm text-espresso placeholder:text-muted-grey/60 transition-colors focus:border-champagne-gold focus:outline-none focus:ring-2 focus:ring-champagne-gold/25"
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="bg-white rounded-lg p-7 sm:p-10 border border-border-subtle shadow-[0_12px_32px_-8px_rgba(41,37,31,0.06)] space-y-6"
    >
      <div className="border-b border-border-subtle pb-5">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-champagne-gold block mb-1">
          Consultation Request Form
        </span>
        <h2 className="font-heading text-2xl font-semibold text-espresso">
          Request Your Preferred Slot
        </h2>
        <p className="text-xs text-muted-grey mt-1.5 leading-relaxed">
          Complete the details below. Our clinic reception on Boring Canal Road
          will contact you to confirm specialist availability and finalize your
          appointment time.
        </p>
      </div>

      {serverError && (
        <div
          role="alert"
          className="p-4 rounded-[6px] bg-error-bg/60 border border-error/30 text-error text-xs font-medium flex items-start gap-2.5"
        >
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Row 1: Full Name & Mobile Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-2"
          >
            Patient Full Name <span className="text-error">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            placeholder="e.g., Aarav Sharma"
            aria-invalid={Boolean(errors.fullName)}
            className={cn(
              inputBaseClasses,
              errors.fullName && "border-error focus:border-error"
            )}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="mt-1.5 text-xs text-error" role="alert">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-2"
          >
            Phone / WhatsApp Number <span className="text-error">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="e.g., 9876543210"
            aria-invalid={Boolean(errors.phone)}
            className={cn(
              inputBaseClasses,
              errors.phone && "border-error focus:border-error"
            )}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-error" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Optional Email & Clinical Department */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-2"
          >
            Email Address{" "}
            <span className="text-muted-grey font-normal lowercase">
              (optional)
            </span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            className={cn(
              inputBaseClasses,
              errors.email && "border-error focus:border-error"
            )}
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-error" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="department"
            className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-2"
          >
            Clinical Wing <span className="text-error">*</span>
          </label>
          <select
            id="department"
            className={inputBaseClasses}
            {...register("department")}
          >
            <option value="dental">Dental Care &amp; Endodontics</option>
            <option value="pediatric">Pediatric Dentistry (Children)</option>
            <option value="skin">Skin, Laser &amp; Facial Aesthetics</option>
            <option value="implant">Dental Implants &amp; Oral Surgery</option>
            <option value="aligners">Clear Aligners &amp; Orthodontics</option>
            <option value="general">General Consultation / Checkup</option>
          </select>
          {errors.department && (
            <p className="mt-1.5 text-xs text-error" role="alert">
              {errors.department.message}
            </p>
          )}
        </div>
      </div>

      {/* Row 3: Preferred Specialist & Specific Treatment */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="preferredDoctor"
            className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-2"
          >
            Preferred Specialist <span className="text-error">*</span>
          </label>
          <select
            id="preferredDoctor"
            className={inputBaseClasses}
            {...register("preferredDoctor")}
          >
            <option value="any-available">
              First Available Specialist (Recommended)
            </option>
            {doctors.map((doc) => (
              <option key={doc.slug} value={doc.name}>
                {doc.name} — {doc.shortRole} ({doc.credentials})
              </option>
            ))}
          </select>
          {errors.preferredDoctor && (
            <p className="mt-1.5 text-xs text-error" role="alert">
              {errors.preferredDoctor.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="serviceInterest"
            className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-2"
          >
            Treatment or Concern <span className="text-error">*</span>
          </label>
          <select
            id="serviceInterest"
            className={inputBaseClasses}
            {...register("serviceInterest")}
          >
            <optgroup label="Dental Care & Surgery">
              {dentalServices.map((s) => (
                <option key={s.slug} value={s.title}>
                  {s.title}
                </option>
              ))}
            </optgroup>
            <optgroup label="Skin, Laser & Facial Aesthetics">
              {skinServices.map((s) => (
                <option key={s.slug} value={s.title}>
                  {s.title}
                </option>
              ))}
            </optgroup>
            <optgroup label="General">
              <option value="Comprehensive Dental Checkup">
                Comprehensive Dental Checkup
              </option>
              <option value="Clinical Skin Assessment">
                Clinical Skin Assessment
              </option>
            </optgroup>
          </select>
          {errors.serviceInterest && (
            <p className="mt-1.5 text-xs text-error" role="alert">
              {errors.serviceInterest.message}
            </p>
          )}
        </div>
      </div>

      {/* Row 4: Preferred Date & Preferred Time Window */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="preferredDate"
            className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-2"
          >
            Preferred Date <span className="text-error">*</span>
          </label>
          <input
            id="preferredDate"
            type="date"
            min={minBookingDate}
            aria-invalid={Boolean(errors.preferredDate)}
            className={cn(
              inputBaseClasses,
              errors.preferredDate && "border-error focus:border-error"
            )}
            {...register("preferredDate")}
          />
          {errors.preferredDate && (
            <p className="mt-1.5 text-xs text-error" role="alert">
              {errors.preferredDate.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="preferredTimeSlot"
            className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-2"
          >
            Preferred Time Window <span className="text-error">*</span>
          </label>
          <select
            id="preferredTimeSlot"
            className={inputBaseClasses}
            {...register("preferredTimeSlot")}
          >
            <option value="morning-0930-1230">
              Morning Session (09:30 AM – 12:30 PM)
            </option>
            <option value="afternoon-1230-1600">
              Afternoon Session (12:30 PM – 04:00 PM)
            </option>
            <option value="evening-1600-2000">
              Evening Session (04:00 PM – 08:00 PM)
            </option>
          </select>
          {errors.preferredTimeSlot && (
            <p className="mt-1.5 text-xs text-error" role="alert">
              {errors.preferredTimeSlot.message}
            </p>
          )}
        </div>
      </div>

      {/* Row 5: Clinical Symptoms / Notes */}
      <div>
        <label
          htmlFor="notes"
          className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-2"
        >
          Symptoms or Additional Notes{" "}
          <span className="text-muted-grey font-normal lowercase">
            (optional)
          </span>
        </label>
        <textarea
          id="notes"
          rows={3}
          placeholder="Briefly describe any tooth pain, sensitivity, or skin concern you would like the doctor to review..."
          className={inputBaseClasses}
          {...register("notes")}
        />
        {errors.notes && (
          <p className="mt-1.5 text-xs text-error" role="alert">
            {errors.notes.message}
          </p>
        )}
      </div>

      {/* Row 6: Honest Booking Consent Checkbox */}
      <div className="bg-ivory-bg p-4 rounded-[6px] border border-border-subtle">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            className="mt-1 w-4 h-4 accent-espresso rounded cursor-pointer"
            {...register("consentToContact")}
          />
          <span className="text-xs text-primary-text/85 leading-relaxed">
            I understand that submitting this form registers a{" "}
            <strong>consultation request</strong> and does not automatically
            confirm a slot until Dant काया Multispeciality Clinic contacts me by
            phone or WhatsApp to verify doctor schedule.{" "}
            <span className="text-error">*</span>
          </span>
        </label>
        {errors.consentToContact && (
          <p className="mt-2 text-xs text-error" role="alert">
            {errors.consentToContact.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "inline-flex items-center justify-center gap-2.5 bg-espresso hover:bg-espresso-dark text-white font-medium px-8 py-4 rounded-[6px] text-sm transition-all duration-200 shadow-xs cursor-pointer disabled:opacity-60",
            designSystem.focusRing
          )}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
              <span>Registering Request...</span>
            </>
          ) : (
            <>
              <CalendarClock className="w-4 h-4 text-champagne-gold" />
              <span>Submit Consultation Request</span>
            </>
          )}
        </button>

        <p className="text-xs text-muted-grey">
          Urgent toothache? Call{" "}
          <a
            href={`tel:${clinicInfo.phoneRaw}`}
            className="font-semibold text-espresso hover:text-champagne-gold underline underline-offset-2"
          >
            {clinicInfo.phoneDisplay}
          </a>
        </p>
      </div>
    </form>
  );
}
