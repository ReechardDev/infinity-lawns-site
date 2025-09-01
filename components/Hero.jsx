// components/Hero.jsx
export default function Hero() {
  return (
    <section className="bg-emerald-500 bg-grid-slate-10 bg-radial-emerald-strong">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Infinity Lawns &amp; Beyond
          </h1>
          <p className="mt-3 text-slate-700">
            Denver’s trusted lawn care & snow removal. Fast quotes, flexible scheduling,
            friendly support.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#booking"
              className="rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
            >
              Get a Free Quote
            </a>
            <a
              href="#services"
              className="rounded-full border px-6 py-3 font-semibold text-slate-700 hover:bg-white"
            >
              Our Services
            </a>
          </div>

          <ul className="mt-5 flex flex-wrap gap-4 text-sm text-slate-700">
            <li className="flex items-center gap-2"><span className="text-emerald-600">✓</span> Insured crew</li>
            <li className="flex items-center gap-2"><span className="text-emerald-600">✓</span> Pro equipment</li>
            <li className="flex items-center gap-2"><span className="text-emerald-600">✓</span> Online booking & payments</li>
          </ul>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-emerald-100 bg-white/80 shadow-xl ring-1 ring-emerald-100 p-2">
            {/* change .jpg to .png if your file is png */}
            <img
              src="/gallery/picture-1.jpg"
              alt="Freshly cut lawn"
              className="h-64 md:h-[22rem] lg:h-[26rem] w-full object-cover rounded-2xl"
            />
          </div>

          <div className="absolute -bottom-4 left-6 hidden md:flex items-center gap-2 rounded-2xl bg-white/95 px-4 py-2 text-sm shadow ring-1 ring-slate-200">
            <span className="text-emerald-600">★★★★★</span>
            <span className="font-medium">4.9 avg • 120+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
