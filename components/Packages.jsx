// components/Packages.jsx
import PackageCard from "@/components/PackageCard";

export default function Packages() {
  return (
    <section id="packages" className="scroll-mt-24 py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Simple Packages, Clear Value</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <PackageCard
            title="Weekly Care"
            price="$150 / visit"
            features={[
              "Mowing, edging, trimming",
              "Clippings bagged where needed",
              "Blow hardscapes clean",
              "Priority scheduling",
            ]}
          />
          <PackageCard
            title="Bi-Weekly Care"
            price="$200 / visit"
            popular
            features={[
              "Mowing, edging, trimming",
              "Clippings bagged where needed",
              "Blow hardscapes clean",
              "Priority scheduling",
            ]}
          />
          <PackageCard
            title="One-Time Refresh"
            price="$300 / visit"
            features={[
              "Mow, edge, trim + debris haul",
              "Beds blowout & leaf pickup",
              "Hardscapes cleared",
              "Same-week scheduling",
            ]}
          />
        </div>

        <p className="mt-4 text-center text-sm text-slate-500">
          Final pricing depends on lawn size, slope, access, and add-ons. Quotes are fast and free.
        </p>
      </div>
    </section>
  );
}
