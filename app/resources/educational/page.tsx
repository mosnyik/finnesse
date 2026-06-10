import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { downloadableResources, DISCOVERY_CALL_URL } from "../../lib/data";

export const metadata: Metadata = {
  title: "Educational Resources | Finesse Plans",
  description:
    "Download free financial planning guides, checklists, worksheets, and templates from Finesse Plans to help your family build a stronger financial future.",
};

const typeColors: Record<string, string> = {
  Checklist: "bg-green-50 text-green-700",
  Guide: "bg-blue-50 text-blue-700",
  Worksheet: "bg-purple-50 text-purple-700",
  Template: "bg-orange-50 text-orange-700",
};

export default function EducationalPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-light uppercase tracking-widest text-xs font-semibold mb-4">
            Resources
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Educational Resources
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Free downloadable guides, checklists, worksheets, and planning
            templates designed to help your family take action.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {downloadableResources.map((resource) => (
              <article
                key={resource.id}
                className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-pale rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <span
                      className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2 ${typeColors[resource.type] ?? "bg-gray-100 text-gray-600"}`}
                    >
                      {resource.type}
                    </span>
                    <h2
                      className="font-bold text-navy text-lg leading-snug"
                      style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    >
                      {resource.title}
                    </h2>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                  {resource.description}
                </p>
                {resource.available && resource.fileUrl ? (
                  <a
                    href={resource.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand hover:bg-brand-dark text-white text-sm font-semibold rounded-xl transition-colors duration-200 cursor-pointer w-fit"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Free
                  </a>
                ) : (
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 text-sm flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Coming Soon
                    </span>
                  </div>
                )}
              </article>
            ))}
          </div>

          {/* Request a resource */}
          <div className="mt-12 bg-navy rounded-2xl p-10 text-center">
            <h3
              className="text-2xl font-bold text-white mb-3"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Need a Specific Resource?
            </h3>
            <p className="text-white/70 mb-6 max-w-md mx-auto text-sm">
              If you&apos;re looking for guidance on a specific topic, contact us
              directly. We&apos;re happy to point you toward the right resources for
              your situation.
            </p>
            <Link
              href={DISCOVERY_CALL_URL}
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand hover:bg-brand-dark text-white font-semibold rounded-full transition-all duration-300 cursor-pointer"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
