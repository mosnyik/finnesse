import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { videoItems, DISCOVERY_CALL_URL } from "../../lib/data";

export const metadata: Metadata = {
  title: "Videos | Finesse Plans",
  description:
    "Watch educational videos on family protection planning, retirement, estate planning, long-term care, and financial education from Finesse Plans.",
};

export default function VideosPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/hero-videos.jpg"
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
            Educational Videos
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Watch expert video content designed to help you understand key
            financial planning concepts and make informed decisions for your
            family.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {videoItems.map((video) => (
              <article
                key={video.id}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Thumbnail */}
                <div className="relative h-52 bg-gradient-to-br from-navy to-navy-light flex items-center justify-center cursor-pointer group/play">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover/play:bg-brand transition-colors duration-300 border-2 border-white/30">
                    <svg className="w-7 h-7 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/50 text-white text-xs font-semibold px-2.5 py-1 rounded-lg">
                    {video.duration}
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand/90 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      {video.topic}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2
                    className="font-bold text-navy text-lg mb-2 leading-snug"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {video.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {video.description}
                  </p>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy hover:bg-navy-dark text-white text-sm font-semibold rounded-xl transition-colors duration-200 cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Watch Video
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-12 bg-blue-pale rounded-2xl p-10 text-center">
            <h3
              className="text-xl font-bold text-navy mb-3"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              More Videos Coming Soon
            </h3>
            <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">
              We&apos;re regularly adding new educational content. Subscribe to our
              newsletter to be notified when new videos are published.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand hover:bg-brand-dark text-white font-semibold rounded-full text-sm transition-colors duration-200 cursor-pointer"
            >
              Get Notified
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-2xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Have Questions About What You Watched?
          </h2>
          <p className="text-white/70 mb-6 max-w-lg mx-auto">
            Schedule a discovery call to discuss how these topics apply to your
            family&apos;s specific situation.
          </p>
          <Link
            href={DISCOVERY_CALL_URL}
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand hover:bg-brand-dark text-white font-bold rounded-full transition-all duration-300 cursor-pointer"
          >
            Schedule a Discovery Call
          </Link>
        </div>
      </section>
    </div>
  );
}
