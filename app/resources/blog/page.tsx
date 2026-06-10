import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "../../lib/data";

export const metadata: Metadata = {
  title: "Blog | Finesse Plans",
  description:
    "Educational articles and financial planning insights from Finesse Plans — covering income protection, retirement, estate planning, and family finance.",
};

const allPosts = [
  ...blogPosts,
  {
    id: "4",
    title: "5 Questions Every Family Should Ask About Life Insurance",
    summary:
      "Understanding life insurance doesn't have to be overwhelming. Start with these five essential questions to ensure your family has the right coverage.",
    date: "April 22, 2026",
    readTime: "4 min read",
    category: "Life Insurance",
    href: "/resources/blog",
  },
  {
    id: "5",
    title: "How to Talk to Your Family About Financial Planning",
    summary:
      "Discussing money, life insurance, and estate planning can feel uncomfortable. Here are practical tips to start these important conversations.",
    date: "April 7, 2026",
    readTime: "5 min read",
    category: "Family Finance",
    href: "/resources/blog",
  },
  {
    id: "6",
    title: "Long-Term Care: Why Planning Early Makes a Difference",
    summary:
      "The cost of long-term care can be significant — but with early planning, families have more options and greater peace of mind.",
    date: "March 18, 2026",
    readTime: "6 min read",
    category: "Long-Term Care",
    href: "/resources/blog",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1920&q=80"
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
            Blog
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Educational articles and financial planning insights to help your
            family make informed decisions.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured */}
          <div className="mb-12">
            <article className="bg-blue-pale rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto bg-gradient-to-br from-navy/10 to-brand/10 flex items-center justify-center">
                  <svg className="w-16 h-16 text-navy/15" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <span className="inline-block text-xs bg-brand/10 text-brand font-semibold px-3 py-1 rounded-full mb-4 w-fit">
                    {allPosts[0].category}
                  </span>
                  <h2
                    className="text-2xl md:text-3xl font-bold text-navy mb-4 leading-snug"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {allPosts[0].title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{allPosts[0].summary}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-gray-400 text-sm">{allPosts[0].date} · {allPosts[0].readTime}</div>
                    <Link
                      href={allPosts[0].href}
                      className="inline-flex items-center gap-1 text-brand hover:text-brand-dark font-semibold text-sm transition-colors duration-200 cursor-pointer"
                    >
                      Read More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col"
              >
                <div className="h-44 bg-gradient-to-br from-blue-pale to-blue-light flex items-center justify-center flex-shrink-0">
                  <svg className="w-10 h-10 text-navy/15" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs bg-brand/10 text-brand font-semibold px-2.5 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                  </div>
                  <h3
                    className="font-bold text-navy text-base mb-2 leading-snug"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{post.summary}</p>
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
                    <span className="text-gray-400 text-xs">{post.date}</span>
                    <Link
                      href={post.href}
                      className="inline-flex items-center gap-1 text-brand hover:text-brand-dark font-semibold text-sm transition-colors duration-200 cursor-pointer"
                    >
                      Read More
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
