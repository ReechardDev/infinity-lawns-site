// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="relative mt-20">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-900/60" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* CTA card */}
        <div className="translate-y-[-48px] rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,.25)]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-extrabold text-white">
                Ready for a lawn you love?
              </h3>
              <p className="mt-1 text-slate-300">
                Fast quotes, flexible scheduling, friendly support.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  Insured crew
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  Pro equipment
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  Online booking & payments
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end gap-3">
              <a
                href="/booking"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-extrabold text-white hover:bg-emerald-500 transition"
              >
                Book Online
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <div className="text-sm text-slate-300/90">
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012.08 4.18 2 2 0 014.06 2h3a2 2 0 012 1.72c.12.86.32 1.7.59 2.5a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.8.27 1.64.47 2.5.59A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span className="font-semibold text-white">(303) 555-0112</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>hello@infinitylawnsandbeyond.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pb-14 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <a href="/" className="text-white font-extrabold">
              <span className="text-emerald-400">Infinity</span> Lawns & Beyond
            </a>
            <nav className="flex gap-5 text-sm text-slate-300">
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#pricing" className="hover:text-white">Packages</a>
              <a href="/booking" className="hover:text-white">Book</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} Infinity Lawns & Beyond. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
