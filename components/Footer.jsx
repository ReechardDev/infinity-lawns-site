// components/Footer.jsx
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16">
      {/* CTA band */}
      <section className="mx-auto max-w-7xl px-4">
        <div className="rounded-3xl border bg-gradient-to-b from-slate-50 to-emerald-50/60 p-6 md:p-8 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Ready for a lawn you love?</h3>
              <p className="text-slate-600">Fast quotes, flexible scheduling, friendly support.</p>
              <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
                <li>• Insured crew</li>
                <li>• Pro equipment</li>
                <li>• Online booking & payments</li>
              </ul>
            </div>

            <a
              href="#booking"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700"
            >
              Book Online <span className="ml-2" aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Bottom bar */}
      <div className="mt-8 bg-slate-900 text-slate-300">
        <div className="mx-auto max-w-7xl px-4 py-6 flex items-center justify-between">
          <div className="font-bold">
            <span className="text-emerald-400">Infinity</span> Lawns &amp; Beyond
            <span className="ml-2 text-xs font-normal text-slate-400">© {year}</span>
          </div>
<nav className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
  <a href="#services" className="hover:text-gray-900">Services</a>
  <a href="#packages" className="hover:text-gray-900">Packages</a>
  <a href="#book" className="hover:text-gray-900">Book</a>
  <a href="#contact" className="hover:text-gray-900">Contact</a>
</nav>
        </div>
      </div>
    </footer>
  );
}
