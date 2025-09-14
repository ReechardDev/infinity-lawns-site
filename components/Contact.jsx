// components/Contact.jsx
"use client";
import { Phone, Mail, CheckCircle2, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-[#f5faf7]">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-semibold text-center">Contact</h2>

        {/* 3 cards row (unchanged content, just polished) */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card title="Call or Email">
            <p className="text-gray-800 flex items-center gap-2">
              <Phone size={16} className="shrink-0" /> (303) 555-0112
            </p>
            <p className="text-gray-800 flex items-center gap-2">
              <Mail size={16} className="shrink-0" /> hello@infinitylawnsandbeyond.com
            </p>
            <p className="mt-4 text-gray-600">Monday–Saturday<br />7:00 am — 7:00 pm</p>
          </Card>

          <Card title="Service Areas">
            <ul className="space-y-1 text-gray-800">
              <li className="flex items-center gap-2"><MapPin size={16}/> Denver Metro</li>
              <li className="flex items-center gap-2"><MapPin size={16}/> Cherry Creek</li>
              <li className="flex items-center gap-2"><MapPin size={16}/> Parker</li>
              <li className="flex items-center gap-2"><MapPin size={16}/> Centennial</li>
              <li className="flex items-center gap-2"><MapPin size={16}/> Lone Tree</li>
            </ul>
          </Card>

          <Card title="Why choose us?">
            <ul className="space-y-1 text-gray-800">
              <li className="flex items-center gap-2"><CheckCircle2 size={16}/> Insured crew & pro equipment</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16}/> Fast quotes & online payments</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16}/> Friendly, reliable scheduling</li>
            </ul>
            <a
              href="#book"
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-[#167a7a] px-4 py-2 text-white hover:opacity-90"
            >
              Book Online
            </a>
          </Card>
        </div>

        {/* CTA stripe (kept, just styled) */}
        <div className="mt-12 rounded-2xl border border-emerald-200/60 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold">Ready for a lawn you love?</h3>
              <p className="mt-1 text-gray-600">Fast quotes, flexible scheduling, friendly support.</p>
              <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-600">
                <li>• Insured crew</li>
                <li>• Pro equipment</li>
                <li>• Online booking & payments</li>
              </ul>
            </div>
            <a
              href="#book"
              className="inline-flex items-center justify-center rounded-xl bg-[#167a7a] px-5 py-3 font-medium text-white hover:opacity-90"
            >
              Book Online →
            </a>
          </div>
        </div>

        {/* New: Map + Site Map row */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <MapEmbed />
          <SiteMapBlock />
        </div>
      </div>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="rounded-2xl border border-emerald-200/60 bg-emerald-50/60 p-6 shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-3 space-y-2">{children}</div>
    </div>
  );
}

function MapEmbed() {
  return (
    <div className="rounded-2xl border border-emerald-200/60 bg-white shadow-sm overflow-hidden">
      <div className="p-4">
        <h3 className="text-lg font-semibold">Our Service Area</h3>
        <p className="mt-1 text-sm text-gray-600">Based in Denver, serving nearby neighborhoods.</p>
      </div>
      <iframe
        title="Service Area Map"
        src="https://www.google.com/maps?q=Denver,CO&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-80 border-t"
      />
    </div>
  );
}

function SiteMapBlock() {
  return (
    <div className="rounded-2xl border border-emerald-200/60 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold">Site Map</h3>
      <div className="mt-4 grid grid-cols-2 gap-6 text-sm">
        <div>
          <div className="font-medium text-gray-700">Pages</div>
          <ul className="mt-2 space-y-1">
            <li><a href="#services" className="hover:text-[#167a7a]">Services</a></li>
            <li><a href="#packages" className="hover:text-[#167a7a]">Packages</a></li>
            <li><a href="#book" className="hover:text-[#167a7a]">Book</a></li>
            <li><a href="#contact" className="hover:text-[#167a7a]">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium text-gray-700">Highlights</div>
          <ul className="mt-2 space-y-1">
            <li><a href="#book" className="hover:text-[#167a7a]">Request a Free Quote</a></li>
            <li><a href="#packages" className="hover:text-[#167a7a]">Bi-Weekly (Most Popular)</a></li>
            <li><a href="#services" className="hover:text-[#167a7a]">Snow Removal</a></li>
            <li><a href="#services" className="hover:text-[#167a7a]">Retaining Walls & Pavers</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
