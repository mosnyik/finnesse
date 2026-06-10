import type { Metadata } from "next";
import Image from "next/image";
import { EMAIL } from "../lib/data";

export const metadata: Metadata = {
  title: "Terms of Use | Finesse Plans",
  description: "Terms of Use for the Finesse Plans website.",
};

export default function TermsOfUsePage() {
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
            Terms of Use
          </h1>
          <p className="text-white/60 text-sm">Last updated: June 9, 2026</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              By accessing and using the Finesse Plans website, you accept and
              agree to be bound by the following Terms of Use. Please read these
              terms carefully before using our website.
            </p>

            <h2 className="text-xl font-bold text-navy mt-8 mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Use of Website</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              You may use this website for lawful purposes only. You agree not
              to use this website in any way that violates applicable federal,
              state, local, or international laws or regulations.
            </p>

            <h2 className="text-xl font-bold text-navy mt-8 mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              All content on this website, including but not limited to text,
              graphics, logos, images, and software, is the property of Finesse
              Plans and is protected by applicable intellectual property laws.
              You may not reproduce, distribute, or create derivative works
              without our express written permission.
            </p>

            <h2 className="text-xl font-bold text-navy mt-8 mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Disclaimer of Warranties</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              This website is provided on an &quot;as is&quot; and &quot;as available&quot; basis
              without any warranties of any kind, either express or implied. We
              do not warrant that the website will be uninterrupted, error-free,
              or free of viruses or other harmful components.
            </p>

            <h2 className="text-xl font-bold text-navy mt-8 mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              To the fullest extent permitted by law, Finesse Plans shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising from your use of this website or the
              information contained herein.
            </p>

            <h2 className="text-xl font-bold text-navy mt-8 mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              This website may contain links to third-party websites. These
              links are provided for your convenience only. We have no control
              over the content of those websites and accept no responsibility
              for them.
            </p>

            <h2 className="text-xl font-bold text-navy mt-8 mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We reserve the right to modify these Terms of Use at any time.
              Changes will be effective immediately upon posting to the website.
              Your continued use of the website after any changes constitutes
              your acceptance of the new terms.
            </p>

            <h2 className="text-xl font-bold text-navy mt-8 mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about these Terms of Use, please contact us
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
