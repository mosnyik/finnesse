import Link from "next/link";
import Image from "next/image";
import { services, events, blogPosts, DISCOVERY_CALL_URL } from "./lib/data";

function ServiceIcon({ type }: { type: string }) {
  const cls = "w-7 h-7 text-brand";
  const icons: Record<string, React.ReactNode> = {
    shield: (
      <svg
        className={cls}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    home: (
      <svg
        className={cls}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    heart: (
      <svg
        className={cls}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    star: (
      <svg
        className={cls}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
    chart: (
      <svg
        className={cls}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    woman: (
      <svg
        className={cls}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    child: (
      <svg
        className={cls}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    trust: (
      <svg
        className={cls}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    office: (
      <svg
        className={cls}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  };
  return <>{icons[type] ?? icons["shield"]}</>;
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        aria-label="Hero"
      >
        <Image
          src="/images/hero-home.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/82">
          <div className="absolute top-1/3 right-0 w-175 h-175 rounded-full bg-brand/8 translate-x-1/3 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-brand-light/6 translate-y-1/2 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand/15 border border-brand/20 rounded-full px-4 py-1.5 mb-8">
                <span className="w-1.5 h-1.5 bg-brand-light rounded-full" />
                <span className="text-brand-light text-xs font-semibold uppercase tracking-widest">
                  Trusted Financial Planning
                </span>
              </div>
              <h1
                className="text-5xl md:text-6xl lg:text-[3.5rem] xl:text-7xl font-bold text-white leading-tight mb-6"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Building Complete{" "}
                <span className="text-brand-light">Financial</span> Protection
                for Families
              </h1>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                Personalized strategies focused on income protection, retirement
                planning, and legacy preservation — so your family is always
                protected.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={DISCOVERY_CALL_URL}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-brand hover:bg-brand-dark text-white font-semibold rounded-full text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
                >
                  Schedule a Discovery Call
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/8 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-full text-base transition-all duration-300 cursor-pointer"
                >
                  Explore Services
                </Link>
              </div>
              <div className="mt-12 flex flex-wrap gap-8">
                {[
                  "Fiduciary Advisors",
                  "Family-Focused",
                  "Personalized Strategies",
                ].map((label) => (
                  <div key={label} className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-brand-light shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-white/70 text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full aspect-4/3 rounded-3xl overflow-hidden shadow-2xl relative">
                  <Image
                    src="/images/card-family-life.jpg"
                    alt="Happy family protected by Finesse Plans"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-5 py-4 shadow-xl">
                  <p className="text-xs text-gray-400 mb-0.5">As a fiduciary</p>
                  <p className="text-sm font-bold text-navy">
                    Your interests come first.
                  </p>
                </div>
                <div className="absolute -top-4 -right-4 bg-brand rounded-2xl px-4 py-3 shadow-xl">
                  <p className="text-white text-xs font-semibold tracking-wide">
                    Protect · Prepare · Preserve
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT / THREE PILLARS ── */}
      <section className="py-24 bg-blue-pale" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-brand uppercase tracking-widest text-xs font-semibold mb-4">
              About Finesse Plans
            </p>
            <h2
              id="about-heading"
              className="text-4xl md:text-5xl font-bold text-navy mb-6"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              A Holistic Approach to Financial Planning
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              At Finesse Plans, we help families secure their future through
              personalized strategies focused on income protection, retirement
              planning, and legacy preservation.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm mb-10 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-gray-700 leading-relaxed mb-5 text-base">
                  We take a holistic approach to financial planning, helping
                  clients protect their income, prepare for retirement, reduce
                  unnecessary risks, and preserve wealth for future generations.
                </p>
                <p className="text-gray-700 leading-relaxed text-base">
                  We solve one of the biggest risks families face: building
                  wealth without a plan to protect it, enjoy it, and pass it on.
                  As a fiduciary, we put our clients&apos; best interests first
                  by providing guidance built on{" "}
                  <strong className="text-navy">
                    trust, transparency, and long-term value
                  </strong>
                  .
                </p>
              </div>
              <div className="aspect-video rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/card-about-section.jpg"
                  alt="Family working together on financial plans"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Protect",
                desc: "Personalized life insurance and protection strategies designed to help safeguard your family and financial future.",
                bg: "bg-brand",
              },
              {
                title: "Prepare",
                desc: "Retirement planning solutions designed to help you pursue the lifestyle you've worked hard to achieve.",
                bg: "bg-navy",
              },
              {
                title: "Preserve",
                desc: "Estate and legacy planning strategies designed to help protect your wealth and ensure it is passed on according to your wishes.",
                bg: "bg-navy-light",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 ${p.bg}`}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3
                  className="text-xl font-bold text-navy mb-3"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href={DISCOVERY_CALL_URL}
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy hover:bg-navy-dark text-white font-semibold rounded-full text-base transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
            >
              Speak with Finesse Plans Today
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-white" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-brand uppercase tracking-widest text-xs font-semibold mb-4">
              What We Offer
            </p>
            <h2
              id="services-heading"
              className="text-4xl md:text-5xl font-bold text-navy mb-6"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Our Services
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Comprehensive financial planning solutions designed to protect,
              prepare, and preserve your family&apos;s financial future.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <article
                key={service.slug}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col"
              >
                <div className="w-12 h-12 bg-blue-pale rounded-xl flex items-center justify-center shrink-0 mb-4 group-hover:bg-brand/10 transition-colors duration-300">
                  <ServiceIcon type={service.iconType} />
                </div>
                <h3
                  className="font-bold text-navy text-lg mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
                  {service.shortDescription}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-brand hover:text-brand-dark font-semibold text-sm transition-colors duration-200 cursor-pointer group/link mt-auto"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold rounded-full text-sm transition-all duration-300 cursor-pointer"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className="relative py-28 overflow-hidden"
        aria-label="Call to action"
      >
        <div className="absolute inset-0 bg-linear-to-r from-navy-dark via-navy to-navy-light">
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-linear-to-l from-brand/10 to-transparent pointer-events-none" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-light uppercase tracking-widest text-xs font-semibold mb-5">
            Take the First Step
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Start Today!
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Take the first step toward protecting your family, preparing for
            retirement, and preserving your legacy.
          </p>
          <Link
            href={DISCOVERY_CALL_URL}
            className="inline-flex items-center gap-2 px-10 py-5 bg-brand hover:bg-brand-dark text-white font-bold rounded-full text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
          >
            Schedule a Discovery Call
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── EVENTS ── */}
      <section className="py-24 bg-blue-pale" aria-labelledby="events-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-brand uppercase tracking-widest text-xs font-semibold mb-3">
                Stay Engaged
              </p>
              <h2
                id="events-heading"
                className="text-4xl font-bold text-navy"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Upcoming Events
              </h2>
            </div>
            <Link
              href="/events"
              className="text-brand hover:text-brand-dark font-semibold text-sm flex items-center gap-1.5 transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              View All Events
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {events.map((event) => (
              <article
                key={event.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-brand/10 rounded-xl p-2.5 shrink-0">
                    <svg
                      className="w-5 h-5 text-brand"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-brand font-semibold text-sm">
                      {event.date}
                    </p>
                    <p className="text-gray-500 text-xs">{event.time}</p>
                  </div>
                </div>
                <h3
                  className="font-bold text-navy text-base mb-2 leading-snug"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {event.title}
                </h3>
                <p className="text-gray-400 text-xs mb-3 flex items-center gap-1">
                  <svg
                    className="w-3.5 h-3.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  </svg>
                  {event.location}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
                  {event.description}
                </p>
                <Link
                  href={event.registerUrl}
                  className="inline-flex items-center justify-center py-2.5 px-4 bg-navy hover:bg-navy-dark text-white text-sm font-semibold rounded-xl transition-colors duration-200 cursor-pointer mt-auto"
                >
                  Register Now
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESOURCES ── */}
      <section className="py-24 bg-white" aria-labelledby="resources-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-brand uppercase tracking-widest text-xs font-semibold mb-4">
              Learn & Grow
            </p>
            <h2
              id="resources-heading"
              className="text-4xl md:text-5xl font-bold text-navy mb-6"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Financial Planning Resources
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Educational content and resources designed to help you make
              informed financial decisions for your family.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: "Educational Resources",
                desc: "Downloadable guides, checklists, worksheets, and planning templates to help your family take action.",
                href: "/resources/educational",
                items: ["Guides", "Checklists", "Worksheets", "Templates"],
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                ),
              },
              {
                title: "Educational Videos",
                desc: "Watch expert video content covering family protection, retirement, estate planning, and more.",
                href: "/resources/videos",
                items: [
                  "Family Protection",
                  "Retirement",
                  "Estate Planning",
                  "Long-Term Care",
                ],
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Blog",
                desc: "Stay informed with our latest articles covering financial planning topics that matter to your family.",
                href: "/resources/blog",
                items: [
                  "Income Protection",
                  "Retirement Tips",
                  "Estate Planning",
                  "Family Finance",
                ],
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                ),
              },
            ].map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer block"
              >
                <div className="w-14 h-14 bg-blue-pale rounded-2xl flex items-center justify-center text-brand mb-5 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                  {cat.icon}
                </div>
                <h3
                  className="font-bold text-navy text-xl mb-3"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {cat.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {cat.desc}
                </p>
                <ul className="space-y-1.5 mb-5">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-gray-500 text-xs"
                    >
                      <span className="w-1 h-1 bg-brand rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="text-brand font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                  Explore
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          {/* Recent Blog Posts */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3
                className="text-2xl font-bold text-navy"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Recent Articles
              </h3>
              <Link
                href="/resources/blog"
                className="text-brand hover:text-brand-dark font-semibold text-sm flex items-center gap-1 transition-colors duration-200 cursor-pointer"
              >
                View All
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-blue-pale rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="h-44 relative overflow-hidden">
                    <Image
                      src={post.image ?? "/images/blog-financial-planning.jpg"}
                      alt={post.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs bg-brand/10 text-brand font-semibold px-2.5 py-0.5 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-xs">
                        {post.readTime}
                      </span>
                    </div>
                    <h4
                      className="font-bold text-navy text-base mb-2 leading-snug"
                      style={{
                        fontFamily: "var(--font-playfair), Georgia, serif",
                      }}
                    >
                      {post.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {post.summary}
                    </p>
                    <Link
                      href={post.href}
                      className="inline-flex items-center gap-1 text-brand hover:text-brand-dark font-semibold text-sm transition-colors duration-200 cursor-pointer"
                    >
                      Read More
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
