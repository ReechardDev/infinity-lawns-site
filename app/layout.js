// app/layout.js
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCallBar from "@/components/MobileStickyCallBar";

export const metadata = {
  title: { default: "Infinity Lawns & Beyond", template: "%s · Infinity Lawns & Beyond" },
  description:
    "Denver lawn care & landscaping: mowing, design & install, irrigation, snow removal. Fast quotes, flexible scheduling, friendly service.",
  metadataBase: new URL("https://infinity-lawns-site.vercel.app"),
  openGraph: {
    title: "Infinity Lawns & Beyond",
    description:
      "Denver lawn care & landscaping: mowing, design & install, irrigation, snow removal.",
    url: "https://infinity-lawns-site.vercel.app/",
    siteName: "Infinity Lawns & Beyond",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infinity Lawns & Beyond",
    description:
      "Denver lawn care & landscaping—fast quotes, reliable scheduling.",
    images: ["/og.jpg"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Infinity Lawns & Beyond",
    url: "https://infinity-lawns-site.vercel.app/",
    image: "https://infinity-lawns-site.vercel.app/og.jpg",
    telephone: "(303) 555-0112", // TODO real number
    address: { "@type": "PostalAddress", addressLocality: "Denver", addressRegion: "CO" },
    areaServed: ["Denver Metro", "Cherry Creek", "Parker", "Centennial", "Lone Tree"],
    openingHours: "Mo-Sa 07:00-19:00",
    priceRange: "$$",
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <MobileStickyCallBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
