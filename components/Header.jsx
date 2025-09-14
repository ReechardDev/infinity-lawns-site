// components/Header.jsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        {/* Brand → home */}
        <Link href="/" className="font-semibold">
          <span className="text-emerald-700">Infinity</span>{" "}
          <span>Lawns &amp; Beyond</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link href="/#services" className="hover:underline">Services</Link>
          <Link href="/#packages" className="hover:underline">Packages</Link>
          <Link href="/booking" className="hover:underline">Book</Link>
          <Link href="/#contact" className="hover:underline">Contact</Link>
          <Link
            href="/booking"
            className="rounded-xl2 bg-emerald-600 px-4 py-2 font-medium text-white"
          >
            Get a Free Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
