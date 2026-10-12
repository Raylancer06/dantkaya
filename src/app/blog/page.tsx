import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { getDoctorBySlug } from "@/data/doctors";
import { PageHero } from "@/components/PageHero";
import { PrimaryButton } from "@/components/PrimaryButton";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Clinical Journal & Patient Education — Dental & Skin Guides",
  description:
    "Read evidence-based dental, endodontic, implant, orthodontic, and clinical skin care guides written by the specialist doctors at Dant काया Multispeciality Clinic, Patna.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogIndexPage() {
  const [featuredPost, ...remainingPosts] = blogPosts;
  const featuredAuthor = featuredPost
    ? getDoctorBySlug(featuredPost.authorSlug)
    : undefined;

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Clinical Journal" }]}
        eyebrow="Patient Education & Clinical Insights"
        title={
          <>
            Evidence-Based Guides on{" "}
            <span className="text-champagne-gold italic font-normal">
              Oral &amp; Skin Health.
            </span>
          </>
        }
        description="Written and reviewed by our specialist clinicians to help you understand your diagnosis, compare treatment options, and care for your teeth and skin."
      />

      {/* Featured Lead Article */}
      {featuredPost && (
        <section className="py-20 bg-ivory-bg border-b border-border-subtle">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <RevealOnScroll>
              <article className="bg-white rounded-lg overflow-hidden border border-border-subtle shadow-[0_16px_40px_-15px_rgba(41,37,31,0.06)] grid grid-cols-1 lg:grid-cols-12">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  tabIndex={-1}
                  aria-hidden="true"
                  className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto lg:min-h-[380px] bg-ivory-secondary overflow-hidden group"
                >
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  />
                </Link>

                <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4 text-xs">
                      <span className="px-2.5 py-1 rounded bg-champagne-gold/15 text-espresso font-semibold uppercase tracking-wider">
                        {featuredPost.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-muted-grey">
                        <Clock className="w-3.5 h-3.5 text-champagne-gold" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-espresso mb-4 leading-snug">
                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="hover:text-champagne-gold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89A60] rounded"
                      >
                        {featuredPost.title}
                      </Link>
                    </h2>

                    <p className="text-base text-muted-grey leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-border-subtle flex flex-wrap items-center justify-between gap-4">
                    {featuredAuthor && (
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-ivory-secondary border border-border-subtle">
                          <Image
                            src={featuredAuthor.image}
                            alt={featuredAuthor.name}
                            fill
                            sizes="40px"
                            className="object-cover object-top"
                          />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-espresso">
                            {featuredAuthor.name}
                          </p>
                          <p className="text-[11px] text-muted-grey">
                            {featuredAuthor.credentials} •{" "}
                            {featuredAuthor.shortRole}
                          </p>
                        </div>
                      </div>
                    )}

                    <PrimaryButton
                      href={`/blog/${featuredPost.slug}`}
                      size="sm"
                      showArrow
                    >
                      Read Article
                    </PrimaryButton>
                  </div>
                </div>
              </article>
            </RevealOnScroll>
          </div>
        </section>
      )}

      {/* Remaining Journal Articles */}
      <section className="py-24 bg-ivory-secondary/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealOnScroll>
            <div className="mb-12">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne-gold block mb-2">
                Recent Publications
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-espresso">
                More Clinical Articles
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {remainingPosts.map((post, index) => {
              const author = getDoctorBySlug(post.authorSlug);
              return (
                <RevealOnScroll key={post.slug} delay={index * 0.07}>
                  <article className="group bg-white rounded-lg overflow-hidden border border-border-subtle flex flex-col h-full hover:border-champagne-gold/60 hover:shadow-[0_20px_40px_-15px_rgba(41,37,31,0.07)] transition-all duration-300">
                    <Link
                      href={`/blog/${post.slug}`}
                      tabIndex={-1}
                      aria-hidden="true"
                      className="block aspect-[16/10] relative bg-ivory-secondary overflow-hidden"
                    >
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                      />
                    </Link>

                    <div className="p-7 flex flex-col flex-grow">
                      <div className="flex items-center justify-between gap-2 text-[11px] text-muted-grey mb-3">
                        <span className="font-semibold uppercase tracking-wider text-champagne-gold">
                          {post.category}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-3 h-3" aria-hidden="true" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="font-heading text-xl font-semibold text-espresso mb-3 group-hover:text-champagne-gold transition-colors duration-200">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89A60] rounded"
                        >
                          {post.title}
                        </Link>
                      </h3>

                      <p className="text-sm text-muted-grey leading-relaxed mb-6 flex-grow">
                        {post.excerpt}
                      </p>

                      <div className="pt-4 border-t border-border-subtle/70 flex items-center justify-between">
                        {author && (
                          <span className="text-xs font-medium text-espresso">
                            By {author.name}
                          </span>
                        )}
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-espresso group-hover:text-champagne-gold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89A60] rounded"
                        >
                          <span>Read</span>
                          <ArrowRight
                            className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                            aria-hidden="true"
                          />
                        </Link>
                      </div>
                    </div>
                  </article>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}
