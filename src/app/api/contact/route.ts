import { NextResponse } from "next/server";
import { contactEnquirySchema } from "@/lib/validation";
import { clinicInfo } from "@/data/clinic";

/**
 * POST /api/contact
 *
 * Documented Integration Point for General Clinic Enquiries:
 * Validates user input via `contactEnquirySchema`, logs or forwards to
 * `process.env.CONTACT_WEBHOOK_URL` if configured, and returns a structured
 * reference ID and direct WhatsApp link.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactEnquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please review the form fields and correct any errors.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const referenceId = `DK-ENQ-${Date.now().toString(36).toUpperCase()}`;
    const submittedAt = new Date().toISOString();

    const enquiryRecord = {
      referenceId,
      submittedAt,
      clinic: clinicInfo.name,
      sender: {
        fullName: data.fullName,
        phone: data.phone,
        email: data.email || null,
      },
      subject: data.subject,
      message: data.message,
    };

    const webhookUrl =
      process.env.CONTACT_WEBHOOK_URL || process.env.APPOINTMENT_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(enquiryRecord),
        });
      } catch (err) {
        console.error("[DantKaya Contact API] Webhook delivery error:", err);
      }
    } else {
      console.info(
        "[DantKaya Contact Enquiry Logged]:",
        JSON.stringify(enquiryRecord)
      );
    }

    const whatsappText = [
      `Hello Dant काया Clinic, Enquiry Reference: ${referenceId}`,
      `• Name: ${data.fullName}`,
      `• Phone: ${data.phone}`,
      `• Subject: ${data.subject}`,
      `• Message: ${data.message}`,
    ].join("\n");

    const whatsappFollowUpUrl = `https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(
      whatsappText
    )}`;

    return NextResponse.json({
      ok: true,
      referenceId,
      whatsappFollowUpUrl,
      message:
        "Thank you for reaching out to Dant काया Multispeciality Clinic. Your enquiry has been recorded and our reception team will respond via telephone or WhatsApp during clinic hours.",
    });
  } catch (error) {
    console.error("[DantKaya Contact API Error]:", error);
    return NextResponse.json(
      {
        ok: false,
        message:
          `Unable to submit your enquiry right now. Please call or WhatsApp ${clinicInfo.phoneDisplay} directly.`,
      },
      { status: 500 }
    );
  }
}
