import type { Metadata } from "next";
import Image from "next/image";
import { EMAIL } from "../lib/data";

export const metadata: Metadata = {
  title: "Disclosure | Finesse Plans",
  description: "Important disclosures from Finesse Plans.",
};

export default function DisclosurePage() {
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
            Disclosure
          </h1>
          <p className="text-white/60 text-sm">Last updated: June 9, 2026</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              The information provided on this website is for educational and
              informational purposes only and does not constitute financial,
              legal, or tax advice.
            </p>

            <h2 className="text-xl font-bold text-navy mt-8 mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Fiduciary Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Finesse Plans operates as a fiduciary, meaning we are legally and
              ethically obligated to act in our clients&apos; best interests at all
              times. This commitment to our clients&apos; well-being is the foundation
              of every recommendation and strategy we provide.
            </p>

            <h2 className="text-xl font-bold text-navy mt-8 mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>No Guarantee of Results</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Past performance does not guarantee future results. All financial
              planning strategies involve risk, and there is no guarantee that
              any particular strategy will achieve its intended goals. Results
              may vary based on individual circumstances, market conditions, and
              other factors.
            </p>

            <h2 className="text-xl font-bold text-navy mt-8 mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Insurance Products</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Insurance products discussed or recommended by Finesse Plans are
              subject to state regulations, underwriting approval, and policy
              terms and conditions. Coverage, benefits, and costs may vary.
              Please review all policy documents carefully before purchasing any
              insurance product.
            </p>

            <h2 className="text-xl font-bold text-navy mt-8 mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Professional Advice</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The content on this website should not be relied upon as a
              substitute for professional legal, tax, or financial advice. We
              strongly encourage you to consult with qualified professionals
              before making any financial decisions.
            </p>

            <h2 className="text-xl font-bold text-navy mt-8 mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              For questions regarding these disclosures, please contact us at{" "}
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
