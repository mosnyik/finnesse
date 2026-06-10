import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { DISCOVERY_CALL_URL } from "../lib/data";


export const metadata: Metadata = {
  title: "About Us | Finesse Plans",
  description:
    "Learn about Finesse Plans and our commitment to helping families secure their financial future through personalized strategies.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/hero-about.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-light uppercase tracking-widest text-xs font-semibold mb-4">
            Our Story
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            About Finesse Plans
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            We exist to help families build complete financial protection — so
            that what you work hard to build today is protected for those you
            love tomorrow.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-brand uppercase tracking-widest text-xs font-semibold mb-4">
                Our Mission
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-navy mb-6"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Securing Families Through Personalized Financial Strategies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                At Finesse Plans, we help families secure their future through
                personalized strategies focused on income protection, retirement
                planning, and legacy preservation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-5">
                We take a holistic approach to financial planning, helping
                clients protect their income, prepare for retirement, reduce
                unnecessary risks, and preserve wealth for future generations.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                We solve one of the biggest risks families face: building wealth
                without a plan to protect it, enjoy it, and pass it on.{" "}
                <strong className="text-navy">
                  As a fiduciary, we put our clients&apos; best interests first
                </strong>{" "}
                by providing guidance built on trust, transparency, and
                long-term value.
              </p>
              <Link
                href={DISCOVERY_CALL_URL}
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand hover:bg-brand-dark text-white font-semibold rounded-full text-base transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              >
                Speak With Us Today
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="aspect-4/3 rounded-3xl overflow-hidden relative">
              <Image
                src="/images/card-team-advisor.jpg"
                alt="Professional financial advisor meeting with clients"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 bg-blue-pale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-brand uppercase tracking-widest text-xs font-semibold mb-4">
              Our Approach
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-navy mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Built on Three Pillars
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Every plan we create is built around three core principles that
              guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Protect",
                body: "Personalized life insurance and protection strategies designed to help safeguard your family and financial future. We start by understanding your family's unique risks and vulnerabilities, then help you explore solutions that close those gaps.",
                bg: "bg-brand",
                num: "01",
              },
              {
                title: "Prepare",
                body: "Retirement planning solutions designed to help you pursue the lifestyle you've worked hard to achieve. From evaluating income sources to building sustainable income strategies, we help you prepare for the retirement you envision.",
                bg: "bg-navy",
                num: "02",
              },
              {
                title: "Preserve",
                body: "Estate and legacy planning strategies designed to help protect your wealth and ensure it is passed on according to your wishes. We help you create a clear plan for wealth transfer that reflects your values and long-term goals.",
                bg: "bg-navy-light",
                num: "03",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className={`${pillar.bg} text-white text-xs font-bold w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}
                  >
                    {pillar.num}
                  </div>
                  <h3
                    className="text-2xl font-bold text-navy mt-1"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-brand uppercase tracking-widest text-xs font-semibold mb-4">
              What Guides Us
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-navy mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Our Core Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Trust",
                desc: "We build every client relationship on a foundation of honesty, integrity, and genuine care for your financial well-being.",
              },
              {
                title: "Transparency",
                desc: "We communicate clearly and openly about your options, our recommendations, and the reasoning behind every strategy we suggest.",
              },
              {
                title: "Fiduciary Responsibility",
                desc: "As fiduciaries, we are legally and ethically obligated to act in your best interest — always, and without exception.",
              },
              {
                title: "Long-Term Value",
                desc: "We focus on building plans that provide lasting value, adapting your strategy as your family's needs and goals evolve over time.",
              },
            ].map((val) => (
              <div
                key={val.title}
                className="bg-blue-pale rounded-2xl p-6 border border-blue-light/60"
              >
                <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-brand" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3
                  className="font-bold text-navy text-lg mb-2"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {val.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Ready to Build Your Financial Future?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Schedule a discovery call to learn how we can help protect your
            family, prepare for retirement, and preserve your legacy.
          </p>
          <Link
            href={DISCOVERY_CALL_URL}
            className="inline-flex items-center gap-2 px-10 py-4 bg-brand hover:bg-brand-dark text-white font-bold rounded-full text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
          >
            Schedule a Discovery Call
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
