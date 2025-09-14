// app/layout.js
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Infinity Lawns & Beyond",
  description: "Professional lawn care & snow removal in Denver, CO",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Infinity Lawns & Beyond",
    "url": "https://infinity-lawns-site.vercel.app/",
    "telephone": "+1-303-555-0112",
    "areaServed": ["Denver","Cherry Creek","Parker","Centennial","Lone Tree"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Denver",
      "addressRegion": "CO",
      "addressCountry": "US"
    },
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "07:00",
      "closes": "19:00"
    }],
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "120"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          // Inject schema as raw JSON string
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          {/* Footer lives ONLY here → prevents double footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
