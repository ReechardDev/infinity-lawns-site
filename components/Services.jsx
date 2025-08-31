// components/Services.jsx
import ServiceCard from "@/components/ServiceCard";

const services = [
  { icon: "🌿", title: "Lawn Mowing & Maintenance", desc: "Routine mowing, edging, trimming, and cleanup." },
  { icon: "🌳", title: "Landscape Design & Install", desc: "Custom design, sod & turf, rock & mulch accents." },
  { icon: "❄️", title: "Snow Removal", desc: "Residential & commercial plowing, shoveling, ice control." },
  { icon: "🛠️", title: "Hauling / Handyman", desc: "Junk & debris hauling, small repairs, yard waste removal." },
  { icon: "💧", title: "Irrigation", desc: "Startup/blowout, repairs, new installs, drip & programming." },
  { icon: "🧱", title: "Retaining Walls & Pavers", desc: "Retaining walls, patios, xeriscape solutions." },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Services</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} icon={s.icon} title={s.title} desc={s.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
