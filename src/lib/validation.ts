import { z } from "zod";

export const EARLIEST_APPOINTMENT_DATE = "2026-10-27";

export const appointmentRequestSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name (at least 2 characters).")
    .max(80, "Name must be 80 characters or fewer."),
  phone: z
    .string()
    .trim()
    .regex(
      /^(?:\+91[\s-]?)?[6-9]\d{9}$/,
      "Please enter a valid 10-digit Indian mobile number (e.g., 9876543210 or +91 9876543210)."
    ),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .optional()
    .or(z.literal("")),
  department: z.enum(
    ["dental", "skin", "implant", "aligners", "pediatric", "general"],
    {
      errorMap: () => ({ message: "Please select a clinical department." }),
    }
  ),
  preferredDoctor: z.string().trim().min(1, "Please select a doctor preference."),
  serviceInterest: z
    .string()
    .trim()
    .min(1, "Please select or specify a treatment of interest."),
  preferredDate: z
    .string()
    .trim()
    .min(1, "Please select your preferred consultation date.")
    .refine(
      (val) => {
        const selected = new Date(`${val}T00:00:00`);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return !Number.isNaN(selected.getTime()) && selected >= today;
      },
      { message: "Please select today or a future date for your consultation." }
    ),
  preferredTimeSlot: z.enum(
    [
      "morning-0930-1230",
      "afternoon-1230-1600",
      "evening-1600-2000",
    ],
    {
      errorMap: () => ({ message: "Please select a preferred time window." }),
    }
  ),
  notes: z
    .string()
    .trim()
    .max(600, "Clinical notes must be under 600 characters.")
    .optional()
    .or(z.literal("")),
  consentToContact: z.literal(true, {
    errorMap: () => ({
      message:
        "Please confirm that our clinic reception may contact you by phone or WhatsApp to finalize your slot.",
    }),
  }),
});

export type AppointmentRequestValues = z.infer<typeof appointmentRequestSchema>;

export const contactEnquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(80, "Name must be 80 characters or fewer."),
  phone: z
    .string()
    .trim()
    .regex(
      /^(?:\+91[\s-]?)?[6-9]\d{9}$/,
      "Please enter a valid 10-digit Indian mobile number."
    ),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .optional()
    .or(z.literal("")),
  subject: z
    .string()
    .trim()
    .min(3, "Please enter a brief subject for your enquiry.")
    .max(120, "Subject must be 120 characters or fewer."),
  message: z
    .string()
    .trim()
    .min(10, "Please provide at least 10 characters describing your question.")
    .max(1000, "Message must be 1000 characters or fewer."),
});

export type ContactEnquiryValues = z.infer<typeof contactEnquirySchema>;
