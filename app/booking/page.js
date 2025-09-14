// app/booking/page.js
import BookingForm from "../../components/BookingForm";

export const metadata = {
  title: "Book a Free Quote | Infinity Lawns & Beyond",
  description:
    "Transparent pricing, flexible scheduling, and friendly support. Request a free lawn care quote or book a visit in Denver, CO.",
};

export default function BookingPage() {
  return (
    <main id="booking" className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="mb-2 text-center text-3xl font-extrabold md:text-4xl">
        Request a Free Quote
      </h1>
      <p className="mb-8 text-center text-slate-600">
        Transparent pricing, flexible scheduling, and friendly support.
      </p>

      {/* Left (form) + Right (info) */}
      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
        {/* LEFT: form (unchanged) */}
        <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow">
          <BookingForm />
        </div>

        {/* RIGHT: compact cards + footer help line */}
        <aside className="flex h-full flex-col">
          {/* Cards group (natural height, compact) */}
          <div className="flex-1 space-y-4">
            {/* Card 1 — How it works (no 'Need help now' here) */}
            <div className="rounded-xl2 border border-emerald-200/60 bg-emerald-50 p-5 shadow-sm">
              <h3 className="text-lg font-semibold">How it works</h3>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-slate-700">
                <li>Tell us about your lawn & preferred time.</li>
                <li>We confirm by phone/text and send a quick quote.</li>
                <li>Our insured crew shows up on schedule.</li>
              </ol>
            </div>

            {/* Card 2 — What to expect (moved payment line out) */}
            <div className="rounded-xl2 border border-emerald-200/60 bg-emerald-50 p-5 shadow-sm">
              <h3 className="text-lg font-semibold">What to expect</h3>
              <ul className="mt-2 space-y-1 text-slate-700">
                <li>• Text-on-the-way reminders.</li>
                <li>• Gates closed & debris cleared before we leave.</li>
                <li>• Secure online payment after service.</li>
              </ul>
              <p className="mt-3 text-xs text-slate-500">
                We’re licensed & insured. Satisfaction guaranteed.
              </p>
            </div>

            {/* Card 3 — Payment options (logos + short copy) */}
            <div className="rounded-xl2 border border-emerald-200/60 bg-emerald-50 p-5 shadow-sm">
              <h3 className="text-lg font-semibold">Payment options</h3>
              <p className="mt-1 text-slate-700">
                Pay securely online after service. Digital receipts emailed instantly.
              </p>

              {/* Logos row */}
              <ul className="mt-4 flex flex-wrap items-center gap-3">
                {/* Visa */}
                <li className="inline-flex items-center gap-2 rounded-lg border bg-white px-3 py-2 text-sm font-medium shadow-sm">
                  <svg viewBox="0 0 48 16" aria-hidden="true" className="h-5 w-auto">
                    <rect width="48" height="16" rx="3" fill="#1A1F71" />
                    <text x="7" y="12" fontSize="9" fontWeight="700" fill="#fff">VISA</text>
                  </svg>
                  <span className="sr-only">Visa</span>
                </li>

                {/* Mastercard */}
                <li className="inline-flex items-center gap-2 rounded-lg border bg-white px-3 py-2 text-sm font-medium shadow-sm">
                  <svg viewBox="0 0 40 24" aria-hidden="true" className="h-5 w-auto">
                    <circle cx="14" cy="12" r="9" fill="#EB001B" />
                    <circle cx="26" cy="12" r="9" fill="#F79E1B" />
                  </svg>
                  <span className="sr-only">Mastercard</span>
                </li>

                {/* AmEx */}
                <li className="inline-flex items-center gap-2 rounded-lg border bg-white px-3 py-2 text-sm font-medium shadow-sm">
                  <svg viewBox="0 0 48 16" aria-hidden="true" className="h-5 w-auto">
                    <rect width="48" height="16" rx="3" fill="#2E77BC" />
                    <text x="6" y="11.5" fontSize="9" fontWeight="700" fill="#fff">AMEX</text>
                  </svg>
                  <span className="sr-only">American Express</span>
                </li>

                {/* Cash App */}
                <li className="inline-flex items-center gap-2 rounded-lg border bg-white px-3 py-2 text-sm font-medium shadow-sm">
                  <svg viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5">
                    <rect x="1" y="1" width="18" height="18" rx="4" fill="#00C244" />
                    <path
                      d="M9.6 6.2c-1.6 0-2.6.8-2.6 2 0 2.9 4.2 1.8 4.2 3.1 0 .5-.5.9-1.6.9-1 0-1.8-.3-2.4-.7l-.6 1.3c.7.5 1.8.8 3 .8 1.9 0 3.1-.9 3.1-2.2 0-2.9-4.2-1.8-4.2-3.1 0-.5.5-.8 1.5-.8.8 0 1.5.2 2 .4l.5-1.3c-.6-.3-1.5-.4-2.4-.4z"
                      fill="#fff"
                    />
                  </svg>
                  <span className="sr-only">Cash App</span>
                </li>

                {/* Apple Pay */}
                <li className="inline-flex items-center gap-2 rounded-lg border bg-white px-3 py-2 text-sm font-medium shadow-sm">
                  <svg viewBox="0 0 28 16" aria-hidden="true" className="h-5 w-auto">
                    <path
                      d="M9.2 3.2c.7-.9 1.9-1.6 3-1.7.3 1.2-.1 2.4-.8 3.4-.7.9-1.8 1.6-3 1.5-.3-1.1.2-2.3.8-3.2zM16 5.8c1.1 0 2 .6 2.5 1.5-.9.5-1.5 1.5-1.5 2.6 0 1.1.6 2.1 1.5 2.6-.5.9-1.4 1.5-2.5 1.5-1.1 0-2-.6-2.6-1.5-.5-.9-.5-2.1 0-3 .6-1 1.5-1.6 2.6-1.6z"
                      fill="#000"
                    />
                  </svg>
                  <span className="sr-only">Apple Pay</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom helper (global for all cards) */}
          <div className="mt-4 text-sm text-slate-600">
            Need help now?{" "}
            <a href="tel:+13035550112" className="underline">(303) 555-0112</a>{" "}
            /{" "}
            <a href="mailto:hello@infinitylawnsandbeyond.com" className="underline">
              hello@infinitylawnsandbeyond.com
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}
