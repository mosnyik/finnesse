import type { Metadata } from "next";
import Image from "next/image";
import { EMAIL, PHONE_HREF, PHONE_NUMBER } from "../lib/data";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Finesse Plans",
  description:
    "Schedule a discovery call or get in touch with Finesse Plans. We're here to help your family build complete financial protection.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-light uppercase tracking-widest text-xs font-semibold mb-4">
            Get in Touch
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Contact Us
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            We&apos;re here to help. Schedule a discovery call or reach out directly —
            we&apos;d love to learn more about your family&apos;s financial goals.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2
                className="text-2xl font-bold text-navy mb-2"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Schedule a Discovery Call
              </h2>
              <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                Fill out the form below and we&apos;ll reach out to schedule a
                complimentary discovery call at a time that works for you.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2
                  className="text-2xl font-bold text-navy mb-6"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Other Ways to Reach Us
                </h2>
                <div className="space-y-4">
                  <a
                    href={PHONE_HREF}
                    className="flex items-center gap-4 p-5 bg-blue-pale rounded-2xl hover:bg-blue-light transition-colors duration-200 cursor-pointer group"
                  >
                    <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Phone</p>
                      <p className="font-bold text-navy">{PHONE_NUMBER}</p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-4 p-5 bg-blue-pale rounded-2xl hover:bg-blue-light transition-colors duration-200 cursor-pointer group"
                  >
                    <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Email</p>
                      <p className="font-bold text-navy">{EMAIL}</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* What to expect */}
              <div className="bg-navy rounded-2xl p-8">
                <h3
                  className="text-white font-bold text-xl mb-5"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  What to Expect on Your Discovery Call
                </h3>
                <ul className="space-y-4">
                  {[
                    { step: "01", text: "A brief conversation about your family's financial situation and goals" },
                    { step: "02", text: "An overview of how we can help based on your unique circumstances" },
                    { step: "03", text: "An opportunity to ask questions with no pressure or obligation" },
                    { step: "04", text: "Clear next steps if you decide Finesse Plans is the right fit" },
                  ].map((item) => (
                    <li key={item.step} className="flex items-start gap-3">
                      <span className="text-brand-light font-bold text-xs shrink-0 w-6">{item.step}</span>
                      <p className="text-white/70 text-sm leading-relaxed">{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social */}
              <div>
                <h3
                  className="font-bold text-navy text-lg mb-4"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {[
                    { label: "Instagram", href: "https://www.instagram.com/finesseplans_?igsh=cTV3dnNjem5vbHA2" },
                    { label: "Facebook", href: "https://www.facebook.com/share/18Z3nwqrPX/?mibextid=wwXIfr" },
                    { label: "TikTok", href: "https://www.tiktok.com/@finesseplans?_r=1&_t=ZS-974jqB65abs" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-pale hover:bg-brand hover:text-white text-navy text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
