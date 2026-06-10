"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { EMAIL, PHONE_HREF, PHONE_NUMBER } from "../lib/data";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/finesseplans_?igsh=cTV3dnNjem5vbHA2",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/18Z3nwqrPX/?mibextid=wwXIfr",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@finesseplans?_r=1&_t=ZS-974jqB65abs",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: `mailto:${EMAIL}`,
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    href: PHONE_HREF,
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-navy-dark">
      {/* Newsletter */}
      <div className="bg-navy border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-brand-light uppercase tracking-widest text-xs font-semibold mb-3">
              Stay Informed
            </p>
            <h2
              className="text-3xl font-bold text-white mb-3"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Join Our E-Newsletter
            </h2>
            <p className="text-white/60 mb-8 text-sm leading-relaxed">
              Receive financial planning tips, educational resources, and event
              invitations directly to your inbox.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="firstName" className="sr-only">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    autoComplete="given-name"
                    className="w-full px-4 py-3 bg-white/8 border border-white/15 rounded-xl text-white placeholder-white/40 text-sm focus:outline-none focus:border-brand focus:bg-white/12 transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="sr-only">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    autoComplete="family-name"
                    className="w-full px-4 py-3 bg-white/8 border border-white/15 rounded-xl text-white placeholder-white/40 text-sm focus:outline-none focus:border-brand focus:bg-white/12 transition-all duration-200"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="emailNewsletter" className="sr-only">
                  Email Address
                </label>
                <input
                  id="emailNewsletter"
                  type="email"
                  placeholder="Email Address"
                  autoComplete="email"
                  className="w-full px-4 py-3 bg-white/8 border border-white/15 rounded-xl text-white placeholder-white/40 text-sm focus:outline-none focus:border-brand focus:bg-white/12 transition-all duration-200"
                />
              </div>
              <div className="flex items-start gap-3 text-left">
                <input
                  type="checkbox"
                  id="newsletterConsent"
                  className="mt-0.5 w-4 h-4 rounded accent-brand cursor-pointer flex-shrink-0"
                />
                <label
                  htmlFor="newsletterConsent"
                  className="text-white/50 text-xs leading-relaxed cursor-pointer"
                >
                  I consent to receive email communications from Finesse Plans.
                  I understand I can unsubscribe at any time.
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-brand hover:bg-brand-dark text-white font-semibold rounded-xl transition-colors duration-200 cursor-pointer text-sm"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative w-9 h-9 flex-shrink-0">
                <Image
                  src="/logos/Finesse%20Plans%20Logo/finesse-3.png"
                  alt="Finesse Plans"
                  fill
                  className="object-contain"
                />
              </div>
              <span
                className="text-white font-bold text-lg"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Finesse <span className="text-brand-light">Plans</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Helping families secure their future through personalized strategies
              focused on income protection, retirement planning, and legacy
              preservation.
            </p>
            {/* Social Icons */}
            <div className="flex gap-2 flex-wrap">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-9 h-9 bg-white/8 rounded-full flex items-center justify-center text-white/60 hover:bg-brand hover:text-white transition-all duration-200 cursor-pointer"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Events", href: "/events" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => {
                const active = link.href === "/" ? pathname === "/" : pathname === link.href || pathname.startsWith(link.href + "/");
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-sm transition-colors duration-200 flex items-center gap-2 group ${active ? "text-white" : "text-white/55 hover:text-white"}`}
                    >
                      <span className={`w-1 h-1 rounded-full transition-colors duration-200 flex-shrink-0 ${active ? "bg-brand" : "bg-brand/50 group-hover:bg-brand"}`} />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-3 text-white/55 hover:text-white text-sm transition-colors duration-200 group"
                >
                  <svg
                    className="w-4 h-4 text-brand flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-white/55 hover:text-white text-sm transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4 text-brand flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Blog", href: "/resources/blog" },
                { label: "Videos", href: "/resources/videos" },
                { label: "Educational Resources", href: "/resources/educational" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Disclosure", href: "/disclosure" },
                { label: "Terms of Use", href: "/terms-of-use" },
              ].map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-sm transition-colors duration-200 flex items-center gap-2 group ${active ? "text-white" : "text-white/55 hover:text-white"}`}
                    >
                      <span className={`w-1 h-1 rounded-full transition-colors duration-200 flex-shrink-0 ${active ? "bg-brand" : "bg-brand/50 group-hover:bg-brand"}`} />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Finesse Plans. All rights reserved.
          </p>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Disclosure", href: "/disclosure" },
              { label: "Terms of Use", href: "/terms-of-use" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs transition-colors duration-200 ${pathname === link.href ? "text-white/60" : "text-white/30 hover:text-white/60"}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
