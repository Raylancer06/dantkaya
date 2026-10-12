import Link from "next/link";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton";

export default function NotFound() {
  return (
    <section className="pt-36 pb-28 bg-ivory-bg min-h-[70dvh] flex items-center">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center space-y-6">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-champagne-gold">
          404 • Page Not Found
        </span>
        <h1 className="font-heading text-3xl sm:text-5xl font-semibold text-espresso">
          We Could Not Locate That Page
        </h1>
        <p className="text-base text-muted-grey max-w-xl mx-auto leading-relaxed">
          The page you are looking for may have moved. Explore our dental and
          skin aesthetic services below or return to the clinic homepage.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <PrimaryButton href="/" showArrow>
            Return to Homepage
          </PrimaryButton>
          <SecondaryButton href="/dental-services">
            Explore Dental Care
          </SecondaryButton>
          <Link
            href="/book-appointment"
            className="text-sm font-semibold text-espresso hover:text-champagne-gold underline underline-offset-4 px-3 py-2"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
