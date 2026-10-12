import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDoctorBySlug } from "@/data/doctors";
import { DoctorProfileView } from "@/components/DoctorProfileView";

const doctor = getDoctorBySlug("dr-anisha-deb");

export const metadata: Metadata = {
  title: "Dr. Anisha Deb (BDS, MDS, FFAC) — Root Canal Specialist & Endodontist",
  description:
    "Profile of Dr. Anisha Deb (BDS, MDS, FFAC), Root Canal Specialist and Facial Aesthetic Clinician at Dant काया Multispeciality Clinic, Patna. Ex Consultant Endodontist, Max Superspeciality Hospital, New Delhi.",
  alternates: {
    canonical: "/doctors/dr-anisha-deb",
  },
};

export default function DrAnishaDebPage() {
  if (!doctor) {
    notFound();
  }

  return <DoctorProfileView doctor={doctor} />;
}
