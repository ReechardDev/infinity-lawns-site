// app/page.js
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Packages from "@/components/Packages";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";
import QuoteForm from "@/components/QuoteForm";

// change .jpg to .png if your files use png
const galleryImages = [
  "/gallery/picture-1.jpg",
  "/gallery/picture-2.jpg",
  "/gallery/picture-3.jpg",
  "/gallery/picture-4.jpg",
  "/gallery/picture-5.jpg",
  "/gallery/machine-2.jpg",
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Services */}
      <section id="services" className="scroll-mt-24">
        <Services />
      </section>

      <Testimonials />

      {/* Packages */}
      <section id="packages" className="scroll-mt-24">
        <Packages />
      </section>

      <Gallery images={galleryImages} />

      {/* Booking / Quote section (cool mint that harmonizes with #167a7a) */}
      <section
        id="book"
        className="py-20 bg-gradient-to-b from-white to-[#f5faf7] border-t border-emerald-100/60 scroll-mt-24"
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight">Request a Free Quote</h2>
            <p className="mt-2 text-gray-600">Tell us a few details and we’ll get back within 24 hours.</p>
          </div>
          <QuoteForm />
        </div>
      </section>

      <FAQ />

      {/* Contact */}
      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>

      <BackToTop />
    </>
  );
}
