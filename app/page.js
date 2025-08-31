// app/page.js
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import Booking from "@/components/Booking";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";

// change .jpg to .png if needed
const galleryImages = [
  "/gallery/picture-1.jpg",
  "/gallery/picture-2.jpg",
  "/gallery/picture-3.jpg",
  "/gallery/picture-4.jpg",
  "/gallery/picture-5.jpg",
  "/gallery/machine.jpg",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold">
              Infinity Lawns &amp; Beyond
            </h1>
            <p className="mt-3 text-slate-600">
              Denver’s trusted lawn care & snow removal. Fast quotes, flexible
              scheduling, friendly support.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#booking"
                className="rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
              >
                Get a Free Quote
              </a>
              <a
                href="#services"
                className="rounded-full border px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100"
              >
                Our Services
              </a>
            </div>
          </div>
          <div className="rounded-3xl border bg-emerald-50/40 h-56 md:h-64" />
        </div>
      </section>

      <Services />
      <Packages />
      <Gallery images={galleryImages} />
      <Booking />
      <FAQ />
      <Contact />
      <BackToTop />
    </>
  );
}
