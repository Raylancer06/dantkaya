import nodemailer from "nodemailer";
import { clinicInfo } from "@/data/clinic";

interface AppointmentEmailData {
  referenceId: string;
  submittedAt: string;
  patient: {
    fullName: string;
    phone: string;
    email?: string | null;
  };
  request: {
    department: string;
    preferredDoctor: string;
    serviceInterest: string;
    preferredDate: string;
    preferredTimeSlot: string;
    notes?: string | null;
  };
}

interface ContactEmailData {
  referenceId: string;
  submittedAt: string;
  sender: {
    fullName: string;
    phone: string;
    email?: string | null;
  };
  subject: string;
  message: string;
}

function getSmtpTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT) || 465;
  const secure = process.env.SMTP_SECURE === "true" || port === 465;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });
}

const CLINIC_EMAIL = process.env.CLINIC_NOTIFICATION_EMAIL || "appointment@dantkaya.com";
const SENDER_EMAIL =
  process.env.SMTP_FROM || `"Dant काया Multispeciality Clinic" <${CLINIC_EMAIL}>`;

/**
 * Send notification email to appointment@dantkaya.com and
 * send confirmation email to the patient (if email provided).
 */
export async function sendAppointmentEmails(data: AppointmentEmailData) {
  const transporter = getSmtpTransporter();

  // 1. Email for Clinic Desk (appointment@dantkaya.com)
  const clinicSubject = `🏥 New Appointment Request: ${data.patient.fullName} — ${data.request.serviceInterest} (${data.referenceId})`;
  const clinicHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${clinicSubject}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f5f0; margin: 0; padding: 20px; color: #20100a; }
    .container { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e8e2d8; box-shadow: 0 4px 18px rgba(32,16,10,0.06); }
    .header { background: #20100a; padding: 28px 24px; text-align: center; color: #ffffff; }
    .header h1 { margin: 0; font-size: 22px; font-weight: 700; color: #fdfbf7; }
    .header p { margin: 6px 0 0 0; font-size: 13px; color: #fedb9b; text-transform: uppercase; letter-spacing: 1.5px; }
    .badge { display: inline-block; background: #c5a880; color: #20100a; font-size: 12px; font-weight: 700; padding: 4px 12px; border-radius: 20px; margin-top: 10px; }
    .body { padding: 28px 24px; }
    .section-title { font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #8c7659; margin-bottom: 12px; border-bottom: 1px solid #eee; padding-bottom: 6px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    td { padding: 10px 12px; font-size: 14px; vertical-align: top; }
    td.label { width: 38%; font-weight: 600; color: #5a4b41; background: #faf8f5; border-bottom: 1px solid #eee; }
    td.value { width: 62%; color: #20100a; border-bottom: 1px solid #eee; }
    .btn-bar { margin: 24px 0 10px 0; text-align: center; }
    .btn { display: inline-block; background: #25D366; color: #ffffff !important; text-decoration: none; font-weight: 600; font-size: 14px; padding: 12px 24px; border-radius: 8px; margin: 0 6px 8px 6px; }
    .btn-call { background: #20100a; }
    .footer { background: #faf8f5; padding: 16px 24px; text-align: center; font-size: 12px; color: #7a6e65; border-top: 1px solid #e8e2d8; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Dant काया Multispeciality Clinic</h1>
      <p>Reception &amp; Appointment Desk</p>
      <div class="badge">Reference: ${data.referenceId}</div>
    </div>
    <div class="body">
      <div class="section-title">Patient Contact Details</div>
      <table>
        <tr>
          <td class="label">Patient Name</td>
          <td class="value"><strong>${data.patient.fullName}</strong></td>
        </tr>
        <tr>
          <td class="label">Phone Number</td>
          <td class="value"><a href="tel:${data.patient.phone}" style="color: #20100a; font-weight: 600;">${data.patient.phone}</a></td>
        </tr>
        <tr>
          <td class="label">Email Address</td>
          <td class="value">${data.patient.email ? `<a href="mailto:${data.patient.email}" style="color: #8c7659;">${data.patient.email}</a>` : "<em>Not provided</em>"}</td>
        </tr>
        <tr>
          <td class="label">Submission Time</td>
          <td class="value">${new Date(data.submittedAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</td>
        </tr>
      </table>

      <div class="section-title">Requested Treatment &amp; Schedule</div>
      <table>
        <tr>
          <td class="label">Clinical Wing</td>
          <td class="value"><strong>${data.request.department.toUpperCase()}</strong></td>
        </tr>
        <tr>
          <td class="label">Service / Treatment</td>
          <td class="value"><strong>${data.request.serviceInterest}</strong></td>
        </tr>
        <tr>
          <td class="label">Preferred Doctor</td>
          <td class="value">${data.request.preferredDoctor}</td>
        </tr>
        <tr>
          <td class="label">Requested Date</td>
          <td class="value"><strong>${data.request.preferredDate}</strong></td>
        </tr>
        <tr>
          <td class="label">Requested Time Slot</td>
          <td class="value"><strong>${data.request.preferredTimeSlot}</strong></td>
        </tr>
        ${data.request.notes ? `
        <tr>
          <td class="label">Patient Notes / Concern</td>
          <td class="value">${data.request.notes}</td>
        </tr>` : ""}
      </table>

      <div class="btn-bar">
        <a class="btn" href="https://wa.me/${data.patient.phone.replace(/[^0-9]/g, "")}?text=Hello%20${encodeURIComponent(data.patient.fullName)},%20this%20is%20Dant%20%E0%A4%95%E0%A4%BE%E0%A4%AF%E0%A4%BE%20Multispeciality%20Clinic%20regarding%20your%20appointment%20request%20(${data.referenceId})." target="_blank">Chat on WhatsApp</a>
        <a class="btn btn-call" href="tel:${data.patient.phone}">Call Patient</a>
      </div>
    </div>
    <div class="footer">
      Dant काया Multispeciality Clinic • Boring Canal Road, Near Reliance Trends, Patna<br>
      Direct: +91 9189332525 | Email: ${CLINIC_EMAIL}
    </div>
  </div>
</body>
</html>
`;

  // 2. Email for Patient (Confirmation)
  const patientSubject = `Appointment Request Received — Dant काया Multispeciality Clinic (${data.referenceId})`;
  const patientHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${patientSubject}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f5f0; margin: 0; padding: 20px; color: #20100a; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e8e2d8; box-shadow: 0 4px 18px rgba(32,16,10,0.06); }
    .header { background: #20100a; padding: 28px 24px; text-align: center; color: #ffffff; }
    .header h1 { margin: 0; font-size: 22px; font-weight: 700; color: #fdfbf7; }
    .header p { margin: 6px 0 0 0; font-size: 13px; color: #fedb9b; text-transform: uppercase; letter-spacing: 1.5px; }
    .badge { display: inline-block; background: #c5a880; color: #20100a; font-size: 12px; font-weight: 700; padding: 4px 12px; border-radius: 20px; margin-top: 10px; }
    .body { padding: 28px 24px; line-height: 1.6; }
    .greeting { font-size: 17px; font-weight: 700; margin-bottom: 12px; color: #20100a; }
    .card { background: #faf8f5; border: 1px solid #e8e2d8; border-radius: 8px; padding: 18px; margin: 18px 0; }
    .card-row { display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px dashed #ded7cc; font-size: 14px; }
    .card-row:last-child { border-bottom: none; }
    .card-label { color: #6b5c51; font-weight: 600; }
    .card-val { color: #20100a; font-weight: 700; text-align: right; }
    .notice { background: #eef6f0; border-left: 4px solid #2e7d32; padding: 12px 16px; border-radius: 4px; font-size: 13px; color: #1b5e20; margin: 20px 0; }
    .btn-bar { text-align: center; margin: 24px 0 12px 0; }
    .btn { display: inline-block; background: #20100a; color: #ffffff !important; text-decoration: none; font-weight: 600; font-size: 14px; padding: 12px 28px; border-radius: 8px; }
    .footer { background: #faf8f5; padding: 20px 24px; text-align: center; font-size: 12px; color: #7a6e65; border-top: 1px solid #e8e2d8; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Dant काया Multispeciality Clinic</h1>
      <p>Modern Dentistry &amp; Facial Aesthetics</p>
      <div class="badge">Reference ID: ${data.referenceId}</div>
    </div>
    <div class="body">
      <div class="greeting">Dear ${data.patient.fullName},</div>
      <p>
        Thank you for requesting a consultation with <strong>Dant काया Multispeciality Clinic</strong>. We have successfully registered your request in our reception system.
      </p>

      <div class="card">
        <div class="card-row">
          <span class="card-label">Requested Treatment</span>
          <span class="card-val">${data.request.serviceInterest}</span>
        </div>
        <div class="card-row">
          <span class="card-label">Preferred Doctor</span>
          <span class="card-val">${data.request.preferredDoctor}</span>
        </div>
        <div class="card-row">
          <span class="card-label">Preferred Date</span>
          <span class="card-val">${data.request.preferredDate}</span>
        </div>
        <div class="card-row">
          <span class="card-label">Preferred Slot</span>
          <span class="card-val">${data.request.preferredTimeSlot}</span>
        </div>
      </div>

      <div class="notice">
        <strong>What happens next:</strong> Submitting this online request registers your interest. To ensure unhurried, dedicated attention, our clinic reception will call or WhatsApp you at <strong>${data.patient.phone}</strong> shortly to verify doctor availability and confirm your exact appointment slot.
      </div>

      <p style="font-size: 14px; color: #5a4b41;">
        If you have urgent pain or need immediate assistance, please reach out directly:
      </p>

      <div class="btn-bar">
        <a class="btn" href="https://wa.me/${clinicInfo.whatsappNumber}?text=Hello%20Dant%20%E0%A4%95%E0%A4%BE%E0%A4%AF%E0%A4%BE%20Clinic,%20I%20have%20submitted%20an%20Appointment%20Request%20(${data.referenceId}).">Chat with Reception on WhatsApp</a>
      </div>
    </div>
    <div class="footer">
      <strong>Dant काया Multispeciality Clinic</strong><br>
      Boring Canal Road, Near Reliance Trends, Patna, Bihar<br>
      Clinic Timings: Tuesday – Sunday (09:00 AM – 08:00 PM) | Monday on appointment<br>
      Telephone: +91 9189332525 | Email: ${CLINIC_EMAIL}
    </div>
  </div>
</body>
</html>
`;

  let clinicDelivered = false;
  let patientDelivered = false;

  if (transporter) {
    try {
      // 1. Send to clinic
      await transporter.sendMail({
        from: SENDER_EMAIL,
        to: CLINIC_EMAIL,
        subject: clinicSubject,
        html: clinicHtml,
      });
      clinicDelivered = true;
      console.info(`[Email Service] Sent clinic notification for appointment ${data.referenceId} to ${CLINIC_EMAIL}`);

      // 2. Send to patient if provided
      if (data.patient.email) {
        await transporter.sendMail({
          from: SENDER_EMAIL,
          to: data.patient.email,
          subject: patientSubject,
          html: patientHtml,
        });
        patientDelivered = true;
        console.info(`[Email Service] Sent patient confirmation for appointment ${data.referenceId} to ${data.patient.email}`);
      }
    } catch (err) {
      console.error("[Email Service Error] Failed to send via SMTP:", err);
    }
  } else {
    console.info(
      `[Email Service (SMTP Unconfigured)]: Logged appointment ${data.referenceId}. Ready for SMTP credentials in environment variables.`
    );
  }

  return {
    clinicDelivered,
    patientDelivered,
    configured: Boolean(transporter),
  };
}

/**
 * Send notification email to appointment@dantkaya.com and
 * confirmation email to the sender (if email provided).
 */
export async function sendContactEnquiryEmails(data: ContactEmailData) {
  const transporter = getSmtpTransporter();

  // 1. Clinic Desk Email
  const clinicSubject = `📩 New General Enquiry: ${data.sender.fullName} — ${data.subject} (${data.referenceId})`;
  const clinicHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${clinicSubject}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f5f0; margin: 0; padding: 20px; color: #20100a; }
    .container { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e8e2d8; box-shadow: 0 4px 18px rgba(32,16,10,0.06); }
    .header { background: #20100a; padding: 24px; text-align: center; color: #ffffff; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 700; color: #fdfbf7; }
    .badge { display: inline-block; background: #c5a880; color: #20100a; font-size: 12px; font-weight: 700; padding: 4px 12px; border-radius: 20px; margin-top: 8px; }
    .body { padding: 24px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
    td { padding: 9px 12px; font-size: 14px; vertical-align: top; }
    td.label { width: 35%; font-weight: 600; color: #5a4b41; background: #faf8f5; border-bottom: 1px solid #eee; }
    td.value { width: 65%; color: #20100a; border-bottom: 1px solid #eee; }
    .msg-box { background: #faf8f5; border: 1px solid #e8e2d8; border-radius: 8px; padding: 14px; font-size: 14px; color: #20100a; white-space: pre-wrap; line-height: 1.6; }
    .btn { display: inline-block; background: #25D366; color: #ffffff !important; text-decoration: none; font-weight: 600; font-size: 14px; padding: 10px 20px; border-radius: 6px; }
    .footer { background: #faf8f5; padding: 14px 20px; text-align: center; font-size: 12px; color: #7a6e65; border-top: 1px solid #e8e2d8; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Dant काया Multispeciality Clinic</h1>
      <p style="margin: 4px 0 0; color: #fedb9b; font-size: 12px; text-transform: uppercase;">New Website Enquiry</p>
      <div class="badge">Reference: ${data.referenceId}</div>
    </div>
    <div class="body">
      <table>
        <tr><td class="label">From</td><td class="value"><strong>${data.sender.fullName}</strong></td></tr>
        <tr><td class="label">Phone</td><td class="value"><a href="tel:${data.sender.phone}" style="color: #20100a; font-weight: 600;">${data.sender.phone}</a></td></tr>
        <tr><td class="label">Email</td><td class="value">${data.sender.email ? `<a href="mailto:${data.sender.email}" style="color: #8c7659;">${data.sender.email}</a>` : "<em>Not provided</em>"}</td></tr>
        <tr><td class="label">Subject</td><td class="value"><strong>${data.subject}</strong></td></tr>
      </table>

      <div style="font-size: 13px; font-weight: 700; text-transform: uppercase; color: #8c7659; margin-bottom: 8px;">Message</div>
      <div class="msg-box">${data.message}</div>

      <div style="margin-top: 20px; text-align: center;">
        <a class="btn" href="https://wa.me/${data.sender.phone.replace(/[^0-9]/g, "")}?text=Hello%20${encodeURIComponent(data.sender.fullName)},%20this%20is%20Dant%20%E0%A4%95%E0%A4%BE%E0%A4%AF%E0%A4%BE%20Clinic%20replying%20to%20your%20enquiry%20(${data.referenceId})." target="_blank">Reply via WhatsApp</a>
      </div>
    </div>
    <div class="footer">
      Dant काया Multispeciality Clinic • Boring Canal Road, Near Reliance Trends, Patna<br>
      Direct: +91 9189332525 | Email: ${CLINIC_EMAIL}
    </div>
  </div>
</body>
</html>
`;

  // 2. Sender Confirmation Email
  const senderSubject = `Thank you for contacting Dant काया Multispeciality Clinic (${data.referenceId})`;
  const senderHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${senderSubject}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f5f0; margin: 0; padding: 20px; color: #20100a; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e8e2d8; }
    .header { background: #20100a; padding: 24px; text-align: center; color: #ffffff; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 700; color: #fdfbf7; }
    .badge { display: inline-block; background: #c5a880; color: #20100a; font-size: 12px; font-weight: 700; padding: 4px 12px; border-radius: 20px; margin-top: 8px; }
    .body { padding: 24px; line-height: 1.6; font-size: 14px; }
    .footer { background: #faf8f5; padding: 16px 20px; text-align: center; font-size: 12px; color: #7a6e65; border-top: 1px solid #e8e2d8; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Dant काया Multispeciality Clinic</h1>
      <p style="margin: 4px 0 0; color: #fedb9b; font-size: 12px; text-transform: uppercase;">Enquiry Registered</p>
      <div class="badge">Reference ID: ${data.referenceId}</div>
    </div>
    <div class="body">
      <p>Dear ${data.sender.fullName},</p>
      <p>
        Thank you for contacting <strong>Dant काया Multispeciality Clinic</strong>. We have received your message regarding <strong>${data.subject}</strong>.
      </p>
      <p>
        Our clinic team will review your enquiry and respond to you via phone (<strong>${data.sender.phone}</strong>) or email during regular clinic hours (Tuesday – Sunday, 09:00 AM – 08:00 PM).
      </p>
      <div style="background: #faf8f5; border: 1px solid #e8e2d8; border-radius: 6px; padding: 12px; margin: 16px 0; font-style: italic; color: #5a4b41;">
        &ldquo;${data.message}&rdquo;
      </div>
      <p>
        For urgent matters, please feel free to call or WhatsApp us directly at <a href="tel:+919189332525" style="color: #20100a; font-weight: 600;">+91 9189332525</a>.
      </p>
    </div>
    <div class="footer">
      <strong>Dant काया Multispeciality Clinic</strong> • Boring Canal Road, Near Reliance Trends, Patna<br>
      Email: ${CLINIC_EMAIL} | Website: https://dantkaya.com
    </div>
  </div>
</body>
</html>
`;

  let clinicDelivered = false;
  let senderDelivered = false;

  if (transporter) {
    try {
      await transporter.sendMail({
        from: SENDER_EMAIL,
        to: CLINIC_EMAIL,
        subject: clinicSubject,
        html: clinicHtml,
      });
      clinicDelivered = true;
      console.info(`[Email Service] Sent clinic notification for enquiry ${data.referenceId} to ${CLINIC_EMAIL}`);

      if (data.sender.email) {
        await transporter.sendMail({
          from: SENDER_EMAIL,
          to: data.sender.email,
          subject: senderSubject,
          html: senderHtml,
        });
        senderDelivered = true;
        console.info(`[Email Service] Sent confirmation for enquiry ${data.referenceId} to ${data.sender.email}`);
      }
    } catch (err) {
      console.error("[Email Service Error] Failed to send enquiry email:", err);
    }
  } else {
    console.info(
      `[Email Service (SMTP Unconfigured)]: Logged enquiry ${data.referenceId}. Ready for SMTP credentials in environment variables.`
    );
  }

  return {
    clinicDelivered,
    senderDelivered,
    configured: Boolean(transporter),
  };
}
