import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Clock,
  Calendar,
  CheckCircle2,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { getDoctorBySlug } from "@/data/doctors";
import { PageHero } from "@/components/PageHero";
import { PrimaryButton } from "@/components/PrimaryButton";
import { ContactInformation } from "@/components/ContactInformation";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { RevealOnScroll } from "@/components/RevealOnScroll";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const author = getDoctorBySlug(post.authorSlug);
  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Clinical Journal", href: "/blog" },
          { label: post.category },
        ]}
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        aside={
          <div className="bg-white rounded-lg p-6 border border-border-subtle space-y-4">
            {author && (
              <div className="flex items-center gap-3.5 pb-4 border-b border-border-subtle">
                <div className="relative w-12 h-14 rounded-md overflow-hidden bg-ivory-secondary border border-border-subtle shrink-0">
                  <Image
                    src={author.image}
                    alt={author.name}
                    fill
                    sizes="48px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-champagne-gold block">
                    Medical Author
                  </span>
                  <Link
                    href={`/doctors/${author.slug}`}
                    className="font-heading text-sm font-bold text-espresso hover:text-champagne-gold transition-colors"
                  >
                    {author.name}
                  </Link>
                  <p className="text-xs text-muted-grey">{author.credentials}</p>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between text-xs text-muted-grey">
              <span className="inline-flex items-center gap-1.5">
                <Calendar
                  className="w-3.5 h-3.5 text-champagne-gold"
                  aria-hidden="true"
                />
                <span>Published {post.publishedAt}</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock
                  className="w-3.5 h-3.5 text-champagne-gold"
                  aria-hidden="true"
                />
                <span>{post.readTime}</span>
              </span>
            </div>
          </div>
        }
      />

      <section className="py-20 lg:py-24 bg-ivory-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Article Body (8 Cols) */}
            <article className="lg:col-span-8 space-y-12">
              <RevealOnScroll>
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-border-subtle bg-ivory-secondary">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>
              </RevealOnScroll>

              {/* Key Clinical Takeaways Box */}
              <RevealOnScroll className="bg-ivory-secondary/70 rounded-lg p-7 border border-border-subtle">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen
                    className="w-4 h-4 text-champagne-gold"
                    aria-hidden="true"
                  />
                  <h2 className="font-heading text-base font-semibold uppercase tracking-wider text-espresso">
                    Key Clinical Takeaways
                  </h2>
                </div>
                <ul className="space-y-3">
                  {post.keyTakeaways.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-primary-text leading-relaxed"
                    >
                      <CheckCircle2
                        className="w-4 h-4 text-champagne-gold shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>

              {/* Article Sections */}
              <div className="space-y-10">
                {post.sections.map((sec) => (
                  <RevealOnScroll key={sec.heading} className="space-y-4">
                    <h2 className="font-heading text-2xl font-semibold text-espresso">
                      {sec.heading}
                    </h2>
                    {sec.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="text-base text-muted-grey leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}
                    {sec.bullets && (
                      <ul className="space-y-2.5 pt-2 pl-1">
                        {sec.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2.5 text-sm text-primary-text"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-champagne-gold shrink-0 mt-2"
                              aria-hidden="true"
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </RevealOnScroll>
                ))}
              </div>

              {/* Related Treatment Callout */}
              <RevealOnScroll className="bg-white rounded-lg p-8 border border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-champagne-gold block mb-1">
                    Clinical Department
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-espresso">
                    Interested in this procedure?
                  </h3>
                  <p className="text-sm text-muted-grey mt-1">
                    Review full clinical steps, indications, and appointment
                    options.
                  </p>
                </div>
                <PrimaryButton href={post.relatedServiceHref} showArrow>
                  {post.relatedServiceLabel}
                </PrimaryButton>
              </RevealOnScroll>
            </article>

            {/* Sidebar (4 Cols) */}
            <aside className="lg:col-span-4 space-y-8">
              {author && (
                <RevealOnScroll>
                  <div className="bg-white rounded-lg p-7 border border-border-subtle space-y-4">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-champagne-gold block">
                      About the Author
                    </span>
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-20 rounded-md overflow-hidden bg-ivory-secondary border border-border-subtle shrink-0">
                        <Image
                          src={author.image}
                          alt={author.name}
                          fill
                          sizes="64px"
                          className="object-cover object-top"
                        />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-espresso">
                          {author.name}
                        </h3>
                        <p className="text-xs font-semibold text-champagne-gold">
                          {author.role}
                        </p>
                        <p className="text-xs text-muted-grey">
                          {author.credentials}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-grey leading-relaxed">
                      {author.homepageSummary}
                    </p>
                    <div className="pt-2 flex flex-col gap-2">
                      <Link
                        href={`/book-appointment?doctor=${author.slug}`}
                        className="w-full text-center bg-espresso hover:bg-espresso-dark text-white text-xs font-medium py-3 px-4 rounded-[6px] transition-colors"
                      >
                        Book Consultation with {author.name}
                      </Link>
                      <Link
                        href={`/doctors/${author.slug}`}
                        className="w-full text-center border border-border-subtle hover:border-champagne-gold text-espresso text-xs font-medium py-2.5 px-4 rounded-[6px] transition-colors"
                      >
                        View Full Biography
                      </Link>
                    </div>
                  </div>
                </RevealOnScroll>
              )}

              <RevealOnScroll delay={0.08}>
                <ContactInformation variant="sidebar" />
              </RevealOnScroll>

              {/* More Articles */}
              <RevealOnScroll delay={0.12}>
                <div className="bg-white rounded-lg p-7 border border-border-subtle space-y-4">
                  <h3 className="font-heading text-lg font-semibold text-espresso">
                    More Clinical Guides
                  </h3>
                  <div className="space-y-4">
                    {otherPosts.map((other) => (
                      <Link
                        key={other.slug}
                        href={`/blog/${other.slug}`}
                        className="block group pb-4 border-b border-border-subtle/70 last:border-none last:pb-0"
                      >
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-champagne-gold block mb-1">
                          {other.category}
                        </span>
                        <h4 className="font-heading text-sm font-semibold text-espresso group-hover:text-champagne-gold transition-colors">
                          {other.title}
                        </h4>
                        <span className="inline-flex items-center gap-1 text-xs text-muted-grey mt-1.5">
                          <span>Read article</span>
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            </aside>
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}
