"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  Send,
  MessageCircle,
} from "lucide-react";
import {
  contactEnquirySchema,
  type ContactEnquiryValues,
} from "@/lib/validation";
import { cn } from "@/lib/utils";
import { designSystem } from "@/lib/design-system";

export function ContactEnquiryForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<{
    referenceId: string;
    message: string;
    whatsappFollowUpUrl: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactEnquiryValues>({
    resolver: zodResolver(contactEnquirySchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactEnquiryValues) => {
    setServerError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json();

      if (!response.ok || !result.ok) {
        setServerError(
          result.message || "Please verify your form details and try again."
        );
        return;
      }

      setSubmittedData({
        referenceId: result.referenceId,
        message: result.message,
        whatsappFollowUpUrl: result.whatsappFollowUpUrl,
      });
    } catch {
      setServerError(
        "Unable to connect right now. Please call or WhatsApp +91 89339 32525."
      );
    }
  };

  if (submittedData) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="bg-white rounded-lg p-8 border border-champagne-gold/60 space-y-5"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E7F3EB] text-[#2D5A3C] text-xs font-semibold uppercase tracking-wider">
          <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span>Enquiry Registered ({submittedData.referenceId})</span>
        </div>

        <h3 className="font-heading text-2xl font-semibold text-espresso">
          We Have Received Your Message
        </h3>

        <p className="text-sm text-muted-grey leading-relaxed">
          {submittedData.message}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={submittedData.whatsappFollowUpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-espresso hover:bg-espresso-dark text-white text-xs font-medium px-5 py-3 rounded-[6px] transition-colors"
          >
            <MessageCircle
              className="w-4 h-4 text-champagne-gold"
              aria-hidden="true"
            />
            <span>Continue Conversation on WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => {
              setSubmittedData(null);
              reset();
            }}
            className="text-xs font-semibold uppercase tracking-wider text-muted-grey hover:text-espresso underline underline-offset-4 px-3 py-2 cursor-pointer"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  const inputClasses =
    "w-full bg-white border border-border-subtle rounded-[6px] px-4 py-3 text-sm text-espresso placeholder:text-muted-grey/60 transition-colors focus:border-champagne-gold focus:outline-none focus:ring-2 focus:ring-champagne-gold/25";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="bg-white rounded-lg p-7 sm:p-9 border border-border-subtle shadow-[0_12px_32px_-8px_rgba(41,37,31,0.06)] space-y-5"
    >
      <div className="border-b border-border-subtle pb-4">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-champagne-gold block mb-1">
          Patient Desk
        </span>
        <h2 className="font-heading text-2xl font-semibold text-espresso">
          Send a General Enquiry
        </h2>
      </div>

      {serverError && (
        <div
          role="alert"
          className="p-3.5 rounded-[6px] bg-error-bg/60 border border-error/30 text-error text-xs font-medium flex items-start gap-2"
        >
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
          <span>{serverError}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="contact-fullName"
            className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1.5"
          >
            Your Name <span className="text-error">*</span>
          </label>
          <input
            id="contact-fullName"
            type="text"
            placeholder="Full Name"
            className={cn(
              inputClasses,
              errors.fullName && "border-error focus:border-error"
            )}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-error" role="alert">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-phone"
            className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1.5"
          >
            Phone Number <span className="text-error">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            placeholder="10-digit mobile number"
            className={cn(
              inputClasses,
              errors.phone && "border-error focus:border-error"
            )}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-error" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="contact-email"
            className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1.5"
          >
            Email{" "}
            <span className="text-muted-grey font-normal lowercase">
              (optional)
            </span>
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="you@example.com"
            className={cn(
              inputClasses,
              errors.email && "border-error focus:border-error"
            )}
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-error" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-subject"
            className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1.5"
          >
            Subject <span className="text-error">*</span>
          </label>
          <input
            id="contact-subject"
            type="text"
            placeholder="e.g., Root Canal / Dental Implant Query"
            className={cn(
              inputClasses,
              errors.subject && "border-error focus:border-error"
            )}
            {...register("subject")}
          />
          {errors.subject && (
            <p className="mt-1 text-xs text-error" role="alert">
              {errors.subject.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1.5"
        >
          Your Message <span className="text-error">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={4}
          placeholder="How can our dental or skin specialists assist you?"
          className={cn(
            inputClasses,
            errors.message && "border-error focus:border-error"
          )}
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-error" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "inline-flex items-center justify-center gap-2 bg-espresso hover:bg-espresso-dark text-white font-medium px-7 py-3.5 rounded-[6px] text-sm transition-colors cursor-pointer disabled:opacity-60",
          designSystem.focusRing
        )}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4 text-champagne-gold" aria-hidden="true" />
            <span>Send Enquiry</span>
          </>
        )}
      </button>
    </form>
  );
}
