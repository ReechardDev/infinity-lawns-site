// app/denver-lawn-care/page.js
export const metadata = {
  title: "Denver Lawn Care | Infinity Lawns & Beyond",
  description: "Reliable mowing, edging, cleanups & seasonal services in Denver, CO.",
};

export default function Page() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">Denver Lawn Care</h1>
        <p className="text-slate-600">
          Weekly/bi-weekly mowing, edging, cleanups, fertilization & more—done on time, every time.
        </p>
        <div className="flex gap-3">
          <a href="/#quote" className="rounded-xl2 bg-emerald-600 px-5 py-3 text-white">Get a Free Quote</a>
          <a href="/#services" className="rounded-xl2 border px-5 py-3">See Services</a>
        </div>
      </header>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-sm">
        <li className="rounded-2xl border p-5">✓ Reliable weekly mowing</li>
        <li className="rounded-2xl border p-5">✓ Edging, trimming & blowing</li>
        <li className="rounded-2xl border p-5">✓ Spring/Fall cleanups</li>
        <li className="rounded-2xl border p-5">✓ Fertilization & weed control</li>
        <li className="rounded-2xl border p-5">✓ Irrigation checks</li>
        <li className="rounded-2xl border p-5">✓ Snow & ice management (winter)</li>
      </ul>

      <div className="rounded-2xl bg-white p-6 shadow-sm border">
        <h2 className="text-xl font-semibold mb-2">Service Areas</h2>
        <p>Denver • Cherry Creek • Parker • Centennial • Lone Tree</p>
      </div>

      <footer className="pt-4">
        <a href="tel:+13035550112" className="underline">(303) 555-0112</a> •{" "}
        <a className="underline" href="mailto:info@infinitylawnsco.com">info@infinitylawnsco.com</a>
      </footer>
    </section>
  );
}
