// components/PackageCard.jsx
export default function PackageCard({ title, price, features, popular }) {
  return (
    <div
      className={`relative rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
        popular ? "border-emerald-300 ring-1 ring-emerald-200 bg-white" : "border-slate-200 bg-white"
      }`}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white shadow">
          Most Popular
        </span>
      )}

      <h3 className="text-lg font-semibold text-center">{title}</h3>
      <p className="mt-1 text-emerald-700 font-semibold text-center">{price}</p>

      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {features.map((f) => (
          <li key={f}>• {f}</li>
        ))}
      </ul>

      <a
        href="#booking"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700"
      >
        Book This Package
      </a>
    </div>
  );
}
