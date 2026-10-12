import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { doctors, getDoctorBySlug } from "@/data/doctors";
import { DoctorProfileView } from "@/components/DoctorProfileView";

interface DoctorDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return doctors.map((doctor) => ({
    slug: doctor.slug,
  }));
}

export async function generateMetadata({
  params,
}: DoctorDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);

  if (!doctor) {
    return {
      title: "Doctor Profile Not Found",
    };
  }

  return {
    title: `${doctor.name} (${doctor.credentials}) — ${doctor.role}`,
    description: `${doctor.directorySummary} ${doctor.pastAffiliation}. Book a consultation at Dant काया Multispeciality Clinic, Patna.`,
    alternates: {
      canonical: `/doctors/${doctor.slug}`,
    },
  };
}

export default async function DoctorSlugPage({
  params,
}: DoctorDetailPageProps) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);

  if (!doctor) {
    notFound();
  }

  return <DoctorProfileView doctor={doctor} />;
}
