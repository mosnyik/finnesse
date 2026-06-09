"use client";

export default function ContactForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1.5">
            First Name <span className="text-brand" aria-hidden="true">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            autoComplete="given-name"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all duration-200"
            placeholder="First name"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1.5">
            Last Name <span className="text-brand" aria-hidden="true">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            autoComplete="family-name"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all duration-200"
            placeholder="Last name"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
          Email Address <span className="text-brand" aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          required
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all duration-200"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all duration-200"
          placeholder="(000) 000-0000"
        />
      </div>
      <div>
        <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1.5">
          What can we help you with?
        </label>
        <select
          id="topic"
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all duration-200 bg-white cursor-pointer"
        >
          <option value="">Select a topic</option>
          <option>Income Protection Planning</option>
          <option>Mortgage Protection</option>
          <option>Long-Term Care &amp; Asset Protection</option>
          <option>Legacy &amp; Wealth Transfer Planning</option>
          <option>Retirement Income Planning</option>
          <option>Financial Security for Women</option>
          <option>Financial Protection for Minors</option>
          <option>Trust &amp; Special Needs Planning</option>
          <option>Employee Benefits Planning</option>
          <option>General Inquiry</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all duration-200 resize-none"
          placeholder="Tell us a little about your situation and goals..."
        />
      </div>
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="contactConsent"
          className="mt-0.5 w-4 h-4 rounded accent-brand cursor-pointer flex-shrink-0"
        />
        <label htmlFor="contactConsent" className="text-gray-500 text-xs leading-relaxed cursor-pointer">
          I consent to Finesse Plans contacting me regarding financial
          planning services. I understand I can opt out at any time.
        </label>
      </div>
      <button
        type="submit"
        className="w-full py-4 bg-brand hover:bg-brand-dark text-white font-bold rounded-xl transition-colors duration-200 cursor-pointer text-base shadow-md hover:shadow-lg"
      >
        Schedule My Discovery Call
      </button>
    </form>
  );
}
