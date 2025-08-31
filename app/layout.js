// app/layout.js
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Infinity Lawns & Beyond",
  description: "Professional lawn care & snow removal in Denver, CO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-background text-foreground">
        <Header />
        <main className="mx-auto max-w-7xl px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
