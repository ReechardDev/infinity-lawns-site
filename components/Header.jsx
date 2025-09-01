"use client";
// components/Header.jsx
import { useEffect, useState } from "react";

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#packages", label: "Packages" },
  { href: "#booking",  label: "Book" },
  { href: "#contact",  label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV.map(n => n.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { threshold: 0.5 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition ${scrolled ? "bg-white/80 backdrop-blur border-b" : "bg-transparent"}`}>
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        <a href="/" className="font-extrabold">
          <span className="text-emerald-600">Infinity</span> Lawns &amp; Beyond
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`text-sm font-medium hover:text-emerald-700 ${
                active === n.href ? "text-emerald-700 underline underline-offset-8" : "text-slate-700"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="#booking"
          className="hidden md:inline-flex rounded-full bg-emerald-600 text-white px-5 py-2 font-semibold hover:bg-emerald-700"
        >
          Get a Free Quote
        </a>
      </div>
    </header>
  );
}
