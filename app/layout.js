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
  return (
    <html lang="en">
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
