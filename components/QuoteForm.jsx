// components/QuoteForm.jsx
"use client";
import { useState } from "react";

const PHONE_RAW = "+13035550112"; // TODO: real number
const EMAIL = "hello@infinitylawnsandbeyond.com"; // TODO
const DEFAULT_CITY = "Denver, CO";

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: DEFAULT_CITY,
    service: "Lawn Mowing & Maintenance",
    frequency: "One-time",
    area: "Denver Metro",
    preferred: "",
    notes: "",
  });

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address) {
      alert("Please add your name, phone, and address.");
      return;
    }
    const subject = encodeURIComponent("Free Quote Request");
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Phone: ${form.phone}`,
        `Email: ${form.email}`,
        `Address: ${form.address}`,
        `City: ${form.city}`,
        `Service: ${form.service}`,
        `Frequency: ${form.frequency}`,
        `Area: ${form.area}`,
        `Preferred time: ${form.preferred}`,
        `Notes: ${form.notes}`,
      ].join("\n")
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const base =
    "w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm md:text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#167a7a]/40 focus:border-[#167a7a]";

  return (
    <div className="mt-8 mx-auto max-w-3xl">
      <form
        onSubmit={onSubmit}
        className="rounded-2xl border border-gray-200 bg-white/90 p-6 md:p-8 shadow-lg ring-1 ring-gray-100 backdrop-blur"
      >
        {/* Row 1 */}
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="sr-only">Full name *</label>
            <input
              id="name"
              name="name"
              placeholder="Full name *"
              value={form.name}
              onChange={onChange}
              className={base}
            />
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">Phone *</label>
            <input
              id="phone"
              name="phone"
              placeholder="Phone *"
              value={form.phone}
              onChange={onChange}
              className={base}
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={onChange}
              className={base}
            />
          </div>
          <div>
            <label htmlFor="preferred" className="sr-only">Preferred day/time</label>
            <input
              id="preferred"
              name="preferred"
              placeholder="Preferred day/time"
              value={form.preferred}
              onChange={onChange}
              className={base}
            />
          </div>
        </div>

        {/* Address */}
        <div className="mt-4">
          <label htmlFor="address" className="sr-only">Street address *</label>
          <input
            id="address"
            name="address"
            placeholder="Street address *"
            value={form.address}
            onChange={onChange}
            className={base}
          />
        </div>

        {/* Row 3: selects */}
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div>
            <label htmlFor="service" className="sr-only">Service</label>
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={onChange}
              className={base}
            >
              <option>Lawn Mowing & Maintenance</option>
              <option>Landscape Design & Install</option>
              <option>Snow Removal</option>
              <option>Hauling / Handyman</option>
              <option>Irrigation</option>
              <option>Retaining Walls & Pavers</option>
            </select>
          </div>
          <div>
            <label htmlFor="frequency" className="sr-only">Frequency</label>
            <select
              id="frequency"
              name="frequency"
              value={form.frequency}
              onChange={onChange}
              className={base}
            >
              <option>One-time</option>
              <option>Weekly</option>
              <option>Bi-Weekly</option>
              <option>Monthly</option>
            </select>
          </div>
          <div>
            <label htmlFor="area" className="sr-only">Area</label>
            <select
              id="area"
              name="area"
              value={form.area}
              onChange={onChange}
              className={base}
            >
              <option>Denver Metro</option>
              <option>Cherry Creek</option>
              <option>Parker</option>
              <option>Centennial</option>
              <option>Lone Tree</option>
            </select>
          </div>
        </div>

        {/* Notes */}
        <div className="mt-4">
          <label htmlFor="notes" className="sr-only">Anything else we should know?</label>
          <textarea
            id="notes"
            name="notes"
            placeholder="Anything else we should know?"
            value={form.notes}
            onChange={onChange}
            className={`${base} min-h-28`}
          />
        </div>

        {/* Footer row */}
        <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray-500">
            Prefer to talk?{" "}
            <a href={`tel:${PHONE_RAW}`} className="font-medium text-[#167a7a]">
              Call us
            </a>.
          </p>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-xl bg-[#167a7a] px-6 py-3 font-medium text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#167a7a]"
          >
            Request Quote
          </button>
        </div>
      </form>
    </div>
  );
}
