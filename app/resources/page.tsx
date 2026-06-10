import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Resources | Finesse Plans",
  description:
    "Access financial planning resources from Finesse Plans including blog articles, educational videos, downloadable guides, checklists, and worksheets.",
};

export default function ResourcesPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-light uppercase tracking-widest text-xs font-semibold mb-4">
            Knowledge Center
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Financial Planning Resources
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Educational content and tools designed to help you make informed
            financial decisions for your family&apos;s future.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Blog",
                desc: "Timely articles covering income protection, retirement planning, estate planning, and family financial literacy.",
                href: "/resources/blog",
                items: ["Income Protection", "Retirement Planning", "Estate Planning", "Family Finance"],
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                ),
              },
              {
                title: "Videos",
                desc: "Expert video content covering key financial planning topics — easy to understand and built for families.",
                href: "/resources/videos",
                items: ["Family Protection", "Retirement", "Estate Planning", "Long-Term Care"],
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Educational Resources",
                desc: "Downloadable guides, checklists, worksheets, and templates to help your family take meaningful action.",
                href: "/resources/educational",
                items: ["Guides", "Checklists", "Worksheets", "Planning Templates"],
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
              },
            ].map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group block bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 bg-blue-pale rounded-2xl flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                  {cat.icon}
                </div>
                <h2
                  className="font-bold text-navy text-2xl mb-3"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {cat.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{cat.desc}</p>
                <ul className="space-y-2 mb-6">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-500 text-sm">
                      <span className="w-1.5 h-1.5 bg-brand rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-2 text-brand font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                  Explore {cat.title}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
