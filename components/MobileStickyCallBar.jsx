// components/MobileStickyCallBar.jsx
"use client";
import { Phone, MessageCircle } from "lucide-react"; // already installed
const PHONE_RAW = "+13035550112"; // TODO

export default function MobileStickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 backdrop-blur md:hidden">
      <div className="mx-auto max-w-6xl px-4 py-3 grid grid-cols-2 gap-3">
        <a href={`tel:${PHONE_RAW}`} className="flex items-center justify-center gap-2 rounded-xl bg-[#167a7a] px-4 py-3 text-white">
          <Phone size={18}/> Call
        </a>
        <a href={`https://wa.me/${PHONE_RAW.replace("+","")}`} className="flex items-center justify-center gap-2 rounded-xl border border-[#167a7a] px-4 py-3 text-[#167a7a]">
          <MessageCircle size={18}/> WhatsApp
        </a>
      </div>
    </div>
  );
}
