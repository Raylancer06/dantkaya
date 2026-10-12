import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDoctorBySlug } from "@/data/doctors";
import { DoctorProfileView } from "@/components/DoctorProfileView";

const doctor = getDoctorBySlug("dr-abhinav-kumar");

export const metadata: Metadata = {
  title: "Dr. Abhinav Kumar (BDS, MBA, MIDA) — Oral and Dental Surgeon",
  description:
    "Profile of Dr. Abhinav Kumar (BDS, MBA, MIDA), Lead Oral and Dental Surgeon at Dant काया Multispeciality Clinic, Patna. Ex Senior Dentist, Smile Foundation, New Delhi.",
  alternates: {
    canonical: "/doctors/dr-abhinav-kumar",
  },
};

export default function DrAbhinavKumarPage() {
  if (!doctor) {
    notFound();
  }

  return <DoctorProfileView doctor={doctor} />;
}
