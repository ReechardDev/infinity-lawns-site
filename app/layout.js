// app/layout.js
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://infinity-lawns-site.vercel.app"),
  title: "Infinity Lawns & Beyond",
  description: "Professional lawn care & snow removal in Denver, CO",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Infinity Lawns & Beyond",
    description: "Professional lawn care & snow removal in Denver, CO",
    url: "/",
    siteName: "Infinity Lawns & Beyond",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infinity Lawns & Beyond",
    description: "Professional lawn care & snow removal in Denver, CO",
  },
  icons: { icon: "/favicon.ico" },
};

// Next.js 15: themeColor belongs in the viewport export
export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#167a7a" },
    { media: "(prefers-color-scheme: dark)",  color: "#167a7a" },
  ],
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

  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      "name": "Infinity Lawns & Beyond",
      "image": "https://infinity-lawns-site.vercel.app/og.jpg",
      "telephone": "(303) 555-0112",
      "areaServed": ["Denver Metro","Cherry Creek","Parker","Centennial","Lone Tree"],
      "priceRange": "$$",
      "url": "https://infinity-lawns-site.vercel.app/",
      "sameAs": [],
      "address": { "@type": "PostalAddress", "addressLocality": "Denver", "addressRegion": "CO" },
      "openingHours": "Mo-Sa 07:00-19:00",
      "currenciesAccepted": "USD",
      "paymentAccepted": "Cash, Credit Card, Apple Pay"
    })
  }}
/>


  return (
    <html lang="en">
      <head>
        {/* LocalBusiness JSON-LD for rich local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
