// components/Booking.jsx
import BookingForm from "@/components/BookingForm";

export default function Booking() {
  return (
    <section id="booking" className="scroll-mt-24 py-16 md:py-24 bg-slate-50 bg-grid-slate-100">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold">Request a Free Quote</h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
          {/* FORM */}
          <div className="rounded-3xl border bg-grey p-6 shadow-sm">
            <BookingForm />
          </div>

          {/* RIGHT COLUMN (two stacked cards) */}
          <div className="flex flex-col gap-4">
            <div className="rounded-3xl border bg-emerald-100 to-grey p-6 shadow-sm space-y-4">
              <h4 className="font-semibold text-lg">How it works</h4>
              <ol className="list-decimal list-inside text-slate-700 space-y-2">
                <li>Tell us about your lawn & preferred time.</li>
                <li>We confirm by phone/text and send a quick quote.</li>
                <li>Our insured crew shows up on schedule.</li>
              </ol>
              <div className="text-sm text-slate-600">
                <p className="font-medium">Need help now?</p>
                <p>(303) 555-0112 / hello@infinitylawnsandbeyond.com</p>
              </div>
            </div>

            <div className="rounded-3xl border bg-emerald-100 p-6  space-y-3">
              <h4 className="font-semibold text-lg">What to expect</h4>
              <ul className="list-disc list-inside text-slate-700 space-y-1">
                <li>Text-on-the-way reminders.</li>
                <li>Gates closed & debris cleared before we leave.</li>
                <li>Secure online payment after service.</li>
              </ul>
              <p className="text-sm text-slate-600">
                We accept Visa, Mastercard, AmEx, Cashapp, Apple Pay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
