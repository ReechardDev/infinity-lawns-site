// components/Contact.jsx
export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Contact</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Call or Email</h3>
            <p className="mt-2 text-slate-700">(303) 555-0112</p>
            <p className="text-slate-700">hello@infinitylawnsandbeyond.com</p>
            <p className="mt-4 text-sm text-slate-600">Mon–Sat • 7:00 AM – 7:00 PM</p>
          </div>

          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Service Areas</h3>
            <ul className="mt-2 space-y-1 text-slate-700">
              <li>Denver Metro</li>
              <li>Cherry Creek</li>
              <li>Parker</li>
              <li>Centennial</li>
              <li>Lone Tree</li>
            </ul>
          </div>

          <div className="rounded-3xl border bg-emerald-50 p-6 shadow-sm">
            <h3 className="font-semibold">Why choose us?</h3>
            <ul className="mt-2 space-y-1 text-slate-700">
              <li>• Insured crew & pro equipment</li>
              <li>• Fast quotes & online payments</li>
              <li>• Friendly, reliable scheduling</li>
            </ul>
            <a
              href="#booking"
              className="mt-4 inline-flex rounded-full bg-emerald-600 px-5 py-2 font-semibold text-white hover:bg-emerald-700"
            >
              Book Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
