// components/Testimonials.jsx
const testimonials = [
  { name: "Robin — Denver", quote: "Booking was easy and they showed up on time. Yard looks the best it has in years." },
  { name: "Layla — Cherry Creek", quote: "Polite crew, clean edges, and they blew off all hard surfaces. Highly recommend!" },
  { name: "Brandy — Parker", quote: "Great value for bi-weekly care. Reliable, quick, and professional." },
  { name: "Colin — Centennial", quote: "They handled irrigation startup and mowing in one visit. Super convenient." },
  { name: "Maya — Lone Tree", quote: "Fast quote, transparent pricing, and the lawn looks amazing after the refresh." },
  { name: "Owen — Highlands Ranch", quote: "Snow removal was prompt during the last storm. Lifesaver." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <p className="text-sm text-emerald-700 font-semibold">Trusted by neighbors</p>
          <h2 className="mt-1 text-2xl md:text-3xl font-bold">What people say</h2>
          <p className="mt-2 text-sm text-slate-600">
            <span className="text-emerald-600">★★★★★</span> 4.9 average rating
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <blockquote className="text-slate-900">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-emerald-900/80">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
