import { NextResponse } from "next/server";
import { appointmentRequestSchema } from "@/lib/validation";
import { clinicInfo } from "@/data/clinic";

/**
 * POST /api/appointments
 *
 * Documented Integration Point for Dant काया Multispeciality Clinic Appointment Requests:
 * 1. Validates payload against `appointmentRequestSchema` (Zod).
 * 2. Generates a unique request reference code (`DK-APT-...`).
 * 3. If `process.env.APPOINTMENT_WEBHOOK_URL` is configured (e.g., Google Apps Script,
 *    CRM webhook, Resend/SendGrid email endpoint, or clinic reception Slack/WhatsApp webhook),
 *    forwards the validated payload automatically.
 * 4. Returns a clear, honest status (`pending_reception_confirmation`) along with a
 *    pre-formatted WhatsApp confirmation link so the enquiry is never silently discarded.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = appointmentRequestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please check the highlighted form fields and try again.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const referenceId = `DK-APT-${Date.now().toString(36).toUpperCase()}`;
    const submittedAt = new Date().toISOString();

    const timeSlotLabels: Record<string, string> = {
      "morning-0930-1230": "Morning (09:30 AM – 12:30 PM)",
      "afternoon-1230-1600": "Afternoon (12:30 PM – 04:00 PM)",
      "evening-1600-2000": "Evening (04:00 PM – 08:00 PM)",
    };

    const payloadRecord = {
      referenceId,
      submittedAt,
      status: "pending_reception_confirmation",
      clinic: clinicInfo.name,
      patient: {
        fullName: data.fullName,
        phone: data.phone,
        email: data.email || null,
      },
      request: {
        department: data.department,
        preferredDoctor: data.preferredDoctor,
        serviceInterest: data.serviceInterest,
        preferredDate: data.preferredDate,
        preferredTimeSlot:
          timeSlotLabels[data.preferredTimeSlot] ?? data.preferredTimeSlot,
        notes: data.notes || null,
      },
    };

    // Optional external webhook / notification service integration
    const webhookUrl = process.env.APPOINTMENT_WEBHOOK_URL;
    let webhookDelivered = false;

    if (webhookUrl) {
      try {
        const webhookRes = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payloadRecord),
        });
        webhookDelivered = webhookRes.ok;
      } catch (webhookErr) {
        console.error(
          "[DantKaya Appointment API] Webhook forwarding error:",
          webhookErr
        );
      }
    } else {
      console.info(
        "[DantKaya Appointment Request Logged]:",
        JSON.stringify(payloadRecord)
      );
    }

    // Build pre-populated WhatsApp message for instant reception verification
    const whatsappMessage = [
      `Hello Dant काया Clinic, I have submitted an Appointment Request (${referenceId}):`,
      `• Name: ${data.fullName}`,
      `• Phone: ${data.phone}`,
      `• Treatment: ${data.serviceInterest}`,
      `• Preferred Doctor: ${data.preferredDoctor}`,
      `• Preferred Date: ${data.preferredDate}`,
      `• Preferred Time: ${timeSlotLabels[data.preferredTimeSlot] ?? data.preferredTimeSlot}`,
      data.notes ? `• Notes: ${data.notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappFollowUpUrl = `https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    return NextResponse.json({
      ok: true,
      referenceId,
      status: "pending_reception_confirmation",
      webhookDelivered,
      whatsappFollowUpUrl,
      message:
        "Your consultation request has been registered. Please note that submitting this request does not automatically confirm a slot—our reception desk will call or WhatsApp you to verify doctor availability and confirm your exact appointment time.",
    });
  } catch (error) {
    console.error("[DantKaya Appointment API Error]:", error);
    return NextResponse.json(
      {
        ok: false,
        message:
          `We encountered a temporary issue processing your request. Please call or WhatsApp us directly at ${clinicInfo.phoneDisplay}.`,
      },
      { status: 500 }
    );
  }
}
