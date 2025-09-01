// components/ServiceCard.jsx
export default function ServiceCard({ icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-emerald-100 bg-emerald-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 ring-1 ring-emerald-100 text-lg">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-emerald-900/80">{desc}</p>
        </div>
      </div>
    </div>
  );
}
