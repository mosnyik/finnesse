import type { Metadata } from "next";
import Link from "next/link";
import { events, DISCOVERY_CALL_URL } from "../lib/data";

export const metadata: Metadata = {
  title: "Events | Finesse Plans",
  description:
    "Join Finesse Plans for educational workshops, webinars, and community events designed to help families make informed financial decisions.",
};

export default function EventsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-dark via-navy to-navy-light py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-light uppercase tracking-widest text-xs font-semibold mb-4">
            Stay Connected
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Upcoming Events
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Join us for educational workshops, webinars, and community
            engagements designed to help you make confident financial decisions.
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {events.map((event) => (
              <article
                key={event.id}
                className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Date Block */}
                  <div className="flex-shrink-0">
                    <div className="bg-navy rounded-2xl p-5 text-center min-w-[90px]">
                      <p className="text-brand-light text-xs font-semibold uppercase tracking-widest mb-1">
                        {new Date(event.dateISO).toLocaleDateString("en-US", { month: "short" })}
                      </p>
                      <p className="text-white text-3xl font-bold leading-none">
                        {new Date(event.dateISO).getDate()}
                      </p>
                      <p className="text-white/60 text-xs mt-1">
                        {new Date(event.dateISO).getFullYear()}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2
                      className="text-xl md:text-2xl font-bold text-navy mb-3"
                      style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    >
                      {event.title}
                    </h2>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <svg className="w-4 h-4 text-brand flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <svg className="w-4 h-4 text-brand flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {event.location}
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-5">
                      {event.description}
                    </p>
                    <Link
                      href={event.registerUrl}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-brand hover:bg-brand-dark text-white font-semibold rounded-full text-sm transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer"
                    >
                      Register Now
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* No more events message */}
          <div className="mt-12 text-center py-12 bg-blue-pale rounded-2xl">
            <svg className="w-10 h-10 text-brand/40 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3
              className="font-bold text-navy text-lg mb-2"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              More Events Coming Soon
            </h3>
            <p className="text-gray-600 text-sm mb-6 max-w-sm mx-auto">
              Sign up for our newsletter to be the first to know about new
              events, workshops, and webinars.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy hover:bg-navy-dark text-white font-semibold rounded-full text-sm transition-colors duration-200 cursor-pointer"
            >
              Sign Up for Updates
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Can&apos;t Wait for an Event?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Schedule a personal discovery call to get tailored guidance for your
            family&apos;s unique financial situation.
          </p>
          <Link
            href={DISCOVERY_CALL_URL}
            className="inline-flex items-center gap-2 px-10 py-4 bg-brand hover:bg-brand-dark text-white font-bold rounded-full text-base transition-all duration-300 shadow-lg hover:-translate-y-0.5 cursor-pointer"
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
