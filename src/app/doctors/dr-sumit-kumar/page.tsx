import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDoctorBySlug } from "@/data/doctors";
import { DoctorProfileView } from "@/components/DoctorProfileView";

const doctor = getDoctorBySlug("dr-sumit-kumar");

export const metadata: Metadata = {
  title: "Dr. Sumit Kumar (BDS, FFAC) — Oral Surgeon & Facial Aesthetic Clinician",
  description:
    "Profile of Dr. Sumit Kumar (BDS, FFAC), Oral and Dental Surgeon & Facial Aesthetic Specialist at Dant काया Multispeciality Clinic, Patna. Former Resident at Realtooth, Lucknow.",
  alternates: {
    canonical: "/doctors/dr-sumit-kumar",
  },
};

export default function DrSumitKumarPage() {
  if (!doctor) {
    notFound();
  }

  return <DoctorProfileView doctor={doctor} />;
}
