// app/page.js
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Packages from "@/components/Packages";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";

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
      <Services />
      <Testimonials />
      <Packages />
      <Gallery images={galleryImages} />
      <Booking />
      <FAQ />
      <Contact />
      <BackToTop />
    </>
  );
}
