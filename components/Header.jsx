// components/Header.jsx
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 h-14 flex items-center justify-between">
        <a href="/" className="font-extrabold text-lg">
          <span className="text-emerald-600">Infinity</span> Lawns & Beyond
        </a>

        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="/" className="hover:text-emerald-700">Home</a>
          <a href="#services" className="hover:text-emerald-700">Services</a>
          <a href="#pricing" className="hover:text-emerald-700">Packages</a>
          <a href="/booking" className="hover:text-emerald-700">Book</a>
          <a href="#contact" className="hover:text-emerald-700">Contact</a>
        </nav>

        <a
          href="/booking"
          className="rounded-full bg-emerald-600 text-white text-sm font-bold px-3.5 py-2 hover:bg-emerald-700"
        >
          Get a Free Quote
        </a>
      </div>
    </header>
  );
}
