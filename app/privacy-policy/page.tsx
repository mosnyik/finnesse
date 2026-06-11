import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
          <div className="prose prose-gray max-w-none space-y-8">

            <p className="text-gray-700 leading-relaxed">
              We value your privacy, and we want to help make your experience with Finesse Plans as satisfying and safe as possible.
            </p>

            <div>
              <h2
                className="text-xl font-bold text-navy mb-3"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Your Acknowledgment
              </h2>
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy is incorporated into and subject to the Site&apos;s Terms of Use. By using this website, you acknowledge that you have read, understood and agreed to this Privacy Policy.
              </p>
            </div>

            <div>
              <h2
                className="text-xl font-bold text-navy mb-3"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Information Collection, Use, and Sharing
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are the sole owners of the information collected on this website. We only collect information that you voluntarily provide through email, contact forms, appointment requests, newsletter sign-ups, quote requests, reviews, or other direct communication with us.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We will not sell or rent your personal information to anyone. We will use your information to respond to your inquiries, provide requested information, and discuss services that may be relevant to your needs. We will not share your information with third parties outside of our organization except as necessary to fulfill your request or as otherwise permitted by law.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Unless you request otherwise, we may contact you via email, phone, or other methods you provide regarding educational resources, updates, services, events, newsletters, or changes to this Privacy Policy.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you visit our site, some information may also be automatically collected through the use of log files, such as your computer&apos;s Internet Protocol (IP) address, your computer&apos;s operating system, the browser type, the address of a referring website and your activity on the site. We use this information for purposes such as analyzing trends, administering the site, improving customer service, diagnosing problems with our servers, tracking user movement, and gathering broad demographic information for aggregate use. We may also automatically collect certain information through the use of &ldquo;cookies.&rdquo; Cookies are small data files that are stored on a user&apos;s hard drive at the request of a website to enable the site to recognize users who have previously visited them and retain certain information such as customer preferences and history. If we combine cookies with or link them to any of the personally identifying information, we would treat this information as personal information. If you wish to block, erase, or be warned of cookies, please refer to your browser instructions or help screen to learn about these functions. However, if your browser is set not to accept cookies or if a user rejects a cookie, you will not be able to access certain site features or services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We may also use third parties to provide certain functionalities (such as maps), or to collect, track and analyze non-personally identifiable usage and volume statistical information from users, such as the user&apos;s browser type, operating system, browsing behavior and demographic information. These third parties may collect personal information from you in connection with the services they provide and may place cookies, web beacons or other devices on your computer to collect non-personal information which may be used, among other things, to deliver advertising targeted to your interests and to better understand the usage and visitation of our site and the other sites tracked by these third parties. We are not responsible for, and do not control, any actions or policies of any third party service providers.
              </p>
            </div>

            <div>
              <h2
                className="text-xl font-bold text-navy mb-3"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Your Access to and Control Over Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>See what data we have about you, if any.</li>
                <li>Change/correct any data we have about you.</li>
                <li>Have us delete any data we have about you.</li>
                <li>Express any concern you have about our use of your data.</li>
              </ul>
            </div>

            <div>
              <h2
                className="text-xl font-bold text-navy mb-3"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Security
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The company endeavors to secure your personal information from unauthorized access, use or disclosure by putting into place physical, electronic and managerial procedures to safeguard the information we collect through this site. Please be aware, however, that despite our efforts, no security measures are perfect or impenetrable. You should also note that email is not secure, and you should not send any confidential or sensitive information to us via an unsecured email.
              </p>
            </div>

            <div>
              <h2
                className="text-xl font-bold text-navy mb-3"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed">
                This website uses &ldquo;cookie&rdquo; technology to improve your experience on our site. Cookies are small pieces of data that we place in your computer&apos;s browser to store your preferences. Cookies themselves do not generate personal information about you and we do not attempt to link cookie data to your personal information. We use cookies only to make your experience on this website more enjoyable.
              </p>
            </div>

            <div>
              <h2
                className="text-xl font-bold text-navy mb-3"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Links
              </h2>
              <p className="text-gray-700 leading-relaxed">
                This website contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.
              </p>
            </div>

            <div>
              <h2
                className="text-xl font-bold text-navy mb-3"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We are committed to protecting your personal privacy. While information is essential to our ability to serve our clients, our most important asset is the trust our clients place in us. Keeping your information secure and using it responsibly is one of our highest priorities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you have questions about this Privacy Policy, you may contact us immediately using the information provided on our website&apos;s{" "}
                <Link href="/contact" className="text-brand hover:text-brand-dark underline">
                  Contact
                </Link>{" "}
                page.
              </p>
            </div>

            <div>
              <h2
                className="text-xl font-bold text-navy mb-3"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Privacy Policy Changes
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify this Privacy Policy at any time without prior notice. Any changes will become effective immediately upon being posted to this website. Your continued use of the website constitutes acceptance of any revised Privacy Policy.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
