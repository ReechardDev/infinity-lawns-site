// components/FAQ.jsx
const items = [
  {
    q: "How fast can you schedule a visit?",
    a: "Most visits are scheduled within 24–48 hours. Snow events are prioritized same day."
  },
  {
    q: "Do you carry insurance?",
    a: "Yes—crew and equipment are fully insured. Certificates available on request."
  },
  {
    q: "Do you offer recurring service?",
    a: "Weekly, bi-weekly, and monthly plans are available with priority scheduling."
  },
  {
    q: "Which areas do you cover?",
    a: "Denver Metro, Cherry Creek, Parker, Centennial, and Lone Tree."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Frequently Asked Questions</h2>

        <div className="mt-8 space-y-3">
          {items.map(({ q, a }) => (
            <details key={q} className="group rounded-2xl border bg-white p-5 shadow-sm">
              <summary className="cursor-pointer list-none font-semibold flex items-center justify-between">
                <span>{q}</span>
                <span className="ml-4 text-emerald-600 transition group-open:rotate-90">›</span>
              </summary>
              <p className="mt-3 text-slate-700">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
