import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { services } from "../../lib/data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found | Finesse Plans" };
  return {
    title: `${service.title} | Finesse Plans`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const currentIndex = services.findIndex((s) => s.slug === slug);
  const related = services.filter((_, i) => i !== currentIndex).slice(0, 3);

  const bodyParagraphs = service.body.split("\n\n").filter(Boolean);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/images/hero-service.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/82" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Services
            </Link>
          </div>
          <div className="max-w-3xl">
            <p className="text-brand-light uppercase tracking-widest text-xs font-semibold mb-4">
              Our Services
            </p>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              {service.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Intro */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8 font-medium">
                {service.intro}
              </p>

              {/* Body paragraphs */}
              <div className="space-y-5 mb-10">
                {bodyParagraphs.map((para, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Bullet points */}
              <div className="bg-blue-pale rounded-2xl p-8 mb-10">
                <h2
                  className="text-xl font-bold text-navy mb-5"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  This planning process can help:
                </h2>
                <ul className="space-y-3">
                  {service.bulletPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-brand" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Closing */}
              <p className="text-gray-700 leading-relaxed italic border-l-4 border-brand pl-6 py-2">
                {service.closing}
              </p>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA Card */}
              <div className="bg-navy rounded-2xl p-8 sticky top-28">
                <h3
                  className="text-white font-bold text-xl mb-3"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Ready to Get Started?
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Schedule a discovery call to discuss how this planning strategy
                  can work for your family.
                </p>
                <Link
                  href={service.ctaUrl}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-brand hover:bg-brand-dark text-white font-semibold rounded-xl transition-colors duration-200 cursor-pointer mb-4"
                >
                  {service.ctaText}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-white/8 hover:bg-white/15 border border-white/15 text-white/80 text-sm rounded-xl transition-colors duration-200 cursor-pointer"
                >
                  View All Services
                </Link>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-white/50 text-xs mb-3">Have questions?</p>
                  <a
                    href="mailto:info@finesseplans.com"
                    className="flex items-center gap-2 text-brand-light hover:text-white text-sm transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@finesseplans.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-brand to-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Let&apos;s Build Your Plan Together
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Every family&apos;s situation is unique. Let us help you find the right
            strategies for your specific goals and circumstances.
          </p>
          <Link
            href={service.ctaUrl}
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-brand hover:text-brand-dark font-bold rounded-full text-base transition-all duration-300 shadow-lg hover:-translate-y-0.5 cursor-pointer"
          >
            {service.ctaText}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-blue-pale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-bold text-navy mb-8"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Explore Other Services
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group block"
              >
                <h3
                  className="font-bold text-navy text-base mb-2 leading-snug group-hover:text-brand transition-colors duration-200"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {s.shortDescription}
                </p>
                <span className="text-brand font-semibold text-sm flex items-center gap-1">
                  Learn More
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
