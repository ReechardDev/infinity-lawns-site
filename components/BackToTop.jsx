"use client";
// components/BackToTop.jsx
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 rounded-full bg-emerald-600 text-white px-4 py-3 shadow-lg hover:bg-emerald-700"
      aria-label="Back to top"
    >
      ↑ Top
    </button>
  );
}
