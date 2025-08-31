// components/ServiceCard.jsx
export default function ServiceCard({ icon, title, desc }) {
  return (
    <div className="group rounded-2xl border bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl focus-within:-translate-y-1">
      <div className="flex items-start gap-3">
        <div className="shrink-0 rounded-xl bg-emerald-50 p-2 ring-1 ring-emerald-100 transition group-hover:bg-emerald-100">
          <span className="text-xl" aria-hidden>{icon}</span>
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="mt-1 text-slate-600">{desc}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center text-emerald-700 opacity-0 transition group-hover:opacity-100">
        <span className="text-sm font-medium">Learn more</span>
        <span className="ml-2" aria-hidden>→</span>
      </div>
    </div>
  );
}
