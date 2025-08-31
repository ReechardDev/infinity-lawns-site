// components/PackageCard.jsx
export default function PackageCard({ title, price, features = [], popular = false }) {
  return (
    <div
      className={[
        "relative rounded-3xl border bg-white p-6 shadow-sm transition duration-200",
        "hover:-translate-y-1 hover:shadow-xl",
        popular ? "ring-2 ring-emerald-500" : "",
      ].join(" ")}
    >
      {popular && (
        <span className="absolute -top-3 right-4 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white shadow">
          Most Popular
        </span>
      )}

      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-emerald-600 font-bold">{price}</p>

      <ul className="mt-4 space-y-2 text-slate-700">
        {features.map((f) => (
          <li key={f} className="flex gap-2">
            <span className="mt-1">•</span><span>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href="#booking"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-4 py-3 font-semibold text-white transition hover:bg-emerald-700"
      >
        Book This Package
      </a>
    </div>
  );
}
