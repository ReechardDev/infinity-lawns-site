// app/page.js
import Gallery from "../components/Gallery";
import BookingForm from "../components/BookingForm";

const galleryPhotos = [
  { src: "/gallery/picture-1.jpg", alt: "Lawn result 1" },
  { src: "/gallery/picture-2.jpg", alt: "Lawn result 2" },
  { src: "/gallery/picture-3.jpg", alt: "Lawn result 3" },
  { src: "/gallery/picture-4.jpg", alt: "Lawn result 4" },
  { src: "/gallery/picture-5.jpg", alt: "Lawn result 5" },
  { src: "/gallery/picture-6.jpg", alt: "Lawn result 6" },
  { src: "/gallery/picture-7.jpg", alt: "Landscape design" },
  { src: "/gallery/machine-2.jpg", alt: "Riding mower" },
];

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
          Premium Lawn Care, <span className="text-emerald-600">Made Effortless.</span> 🌱
        </h1>
        <p className="max-w-3xl mx-auto text-slate-600">
          Professional mowing, landscaping, seasonal cleanups, and winter snow removal—bookable
          online with transparent pricing and reliable schedules.
        </p>
        <div className="mt-6 flex gap-3 justify-center">
          <a href="/booking" className="bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700">
            Get a Free Quote
          </a>
          <a href="#pricing" className="bg-slate-200 text-slate-900 font-bold px-4 py-2 rounded-xl hover:bg-slate-300">
            See Packages
          </a>
        </div>
        <div className="mt-3 text-sm text-slate-600">
          ✅ Insured crew & pro equipment • 📍 Cherry Creek • Parker • Centennial • Lone Tree • Denver Metro
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 bg-slate-100/70 text-center rounded-2xl">
        <h2 className="text-3xl font-bold mb-2">What We Do</h2>
        <p className="text-slate-600 -mt-1">End-to-end lawn care with design, installation, and seasonal maintenance.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {[
            { title: "Lawn Mowing & Maintenance", desc: "Routine mowing, edging, trimming, and cleanup.", emoji: "🌿" },
            { title: "Landscape Design & Install", desc: "Custom design, sod & turf, rock & mulch accents.", emoji: "🏡" },
            { title: "Snow Removal", desc: "Residential & commercial plowing, shoveling, ice control.", emoji: "❄️" },
            { title: "Hauling / Handyman", desc: "Junk & debris hauling, small repairs, yard waste removal.", emoji: "🛠️" },
            { title: "Irrigation", desc: "Startup/blowout, repairs, new installs, drip & programming.", emoji: "💧" },
            { title: "Retaining Walls & Pavers", desc: "Retaining walls, paver patios, xeriscape solutions.", emoji: "🧱" },
          ].map((c, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-2xl p-5 text-left shadow-sm"
            >
              <div className="text-lg font-extrabold">{c.emoji} {c.title}</div>
              <div className="text-slate-600 mt-1">{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Simple Packages, Clear Value</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {[
            { name: "Weekly Care", price: "$150 / visit", bullets: ["Mowing, edging, trimming", "Clippings bagged where needed", "Blow hardscapes clean", "Priority scheduling"] },
            { name: "Bi-Weekly Care", price: "$200 / visit", bullets: ["Mowing, edging, trimming", "Clippings bagged where needed", "Blow hardscapes clean", "Priority scheduling"] },
            { name: "One-Time Refresh", price: "$300 / visit", bullets: ["Mow, edge, trim + debris haul", "Beds blowout & leaf pickup", "Hardscapes cleared", "Same-week scheduling"] },
          ].map((p, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col">
              <div className="text-lg font-extrabold">{p.name}</div>
              <div className="text-emerald-600 font-bold mb-2">{p.price}</div>
              <ul className="text-left text-slate-700 space-y-1 flex-1">
                {p.bullets.map((b, j) => <li key={j}>• {b}</li>)}
              </ul>
              <a href="/booking" className="mt-4 inline-block bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700">
                Book This Package
              </a>
            </div>
          ))}
        </div>
        <div className="mt-2 text-xs text-slate-500">Final pricing depends on lawn size, slope, access, and add-ons. Quotes are fast and free.</div>
      </section>

      {/* GALLERY */}
      <Gallery photos={galleryPhotos} />

      {/* BOOKING BLOCK ON HOME */}
      <section id="booking" className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-6">Request a Free Quote</h2>
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow">
          <BookingForm />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-slate-100 text-center rounded-2xl">
        <h2 className="text-3xl font-bold mb-6">What Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { quote: "Professional, on time, and the online booking was so easy. Our yard has never looked better!", name: "Robin — Denver" },
            { quote: "Transparent pricing and great communication. Switched from our old provider immediately.", name: "Layla — Cherry Creek" },
            { quote: "Loved the seasonal cleanup—beds and borders looked brand new in a day.", name: "Brandy — Parker" },
          ].map((t, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-5 text-left">
              <div className="text-emerald-600 font-bold">★★★★★</div>
              <p className="text-slate-700 my-2">{t.quote}</p>
              <div className="font-extrabold">{t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT BAND */}
      <section id="contact" className="py-16 bg-slate-900 text-white text-center rounded-2xl mt-16">
        <h2 className="text-3xl font-bold mb-2">Request a Quote</h2>
        <p className="mb-4">
          Call <strong>(303) 555-0112</strong> • Email <strong>hello@infinitylawnsandbeyond.com</strong>
        </p>
        <a href="/booking" className="inline-block px-5 py-2 rounded-xl bg-white text-emerald-700 font-extrabold border border-white">
          Book Online
        </a>
      </section>
    </>
  );
}
