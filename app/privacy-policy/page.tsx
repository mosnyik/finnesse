import type { Metadata } from "next";
import Image from "next/image";
import { EMAIL } from "../lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy | Finesse Plans",
  description: "Privacy Policy for Finesse Plans.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/hero-legal.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-light uppercase tracking-widest text-xs font-semibold mb-4">
            Legal
          </p>
          <h1
            className="text-3xl md:text-4xl font-bold text-white mb-3"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Privacy Policy
          </h1>
          <p className="text-white/60 text-sm">Last updated: June 9, 2026</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Finesse Plans (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you visit our website or use our
              services.
            </p>

            <h2 className="text-xl font-bold text-navy mt-8 mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Financial information you voluntarily provide during consultations</li>
              <li>Usage data and analytics from website visits</li>
              <li>Communications you send to us</li>
            </ul>

            <h2 className="text-xl font-bold text-navy mt-8 mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use collected information to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Provide, operate, and maintain our services</li>
              <li>Respond to your inquiries and schedule discovery calls</li>
              <li>Send you educational newsletters and updates (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with applicable laws and regulations</li>
            </ul>

            <h2 className="text-xl font-bold text-navy mt-8 mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Information Sharing</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We do not sell, trade, or otherwise transfer your personally
              identifiable information to third parties without your consent,
              except as required by law or to fulfill our services to you.
            </p>

            <h2 className="text-xl font-bold text-navy mt-8 mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction.
            </p>

            <h2 className="text-xl font-bold text-navy mt-8 mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal data</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>

            <h2 className="text-xl font-bold text-navy mt-8 mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us
              at{" "}
              <a href={`mailto:${EMAIL}`} className="text-brand hover:text-brand-dark">
                {EMAIL}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
