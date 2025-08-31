"use client";
// components/BookingForm.jsx
import { useState } from "react";

export default function BookingForm() {
  const [state, setState] = useState({ status: "idle", message: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    setState({ status: "loading", message: "" });

    // Fake submit for now
    setTimeout(() => {
      setState({ status: "success", message: "Thanks! We’ll contact you shortly." });
      e.currentTarget.reset();
    }, 600);
  };

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input name="name" placeholder="Full Name *" required
        className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/60 focus:border-emerald-500" />
      <input type="email" name="email" placeholder="Email *" required
        className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/60 focus:border-emerald-500" />
      <input name="phone" placeholder="Phone *" required
        className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/60 focus:border-emerald-500" />
      <input name="address" placeholder="Street Address *" required
        className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/60 focus:border-emerald-500" />

      <select name="service" defaultValue="" required
        className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/60 focus:border-emerald-500">
        <option value="" disabled>Select Service *</option>
        <option>Lawn Mowing & Maintenance</option>
        <option>Landscape Design & Install</option>
        <option>Snow Removal</option>
        <option>Hauling / Handyman</option>
        <option>Irrigation</option>
        <option>Retaining Walls & Pavers</option>
      </select>

      <select name="frequency" defaultValue="One-time"
        className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/60 focus:border-emerald-500">
        <option>One-time</option>
        <option>Weekly</option>
        <option>Bi-Weekly</option>
        <option>Monthly</option>
      </select>

      <input type="date" name="date"
        className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/60 focus:border-emerald-500" />

      <select name="area" defaultValue="Denver Metro"
        className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/60 focus:border-emerald-500">
        <option>Denver Metro</option>
        <option>Cherry Creek</option>
        <option>Parker</option>
        <option>Centennial</option>
        <option>Lone Tree</option>
      </select>

      <textarea name="notes" rows={4} placeholder="Notes (gates, pets, preferences…)"
        className="md:col-span-2 w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/60 focus:border-emerald-500" />

      <button type="submit" disabled={state.status === "loading"}
        className="md:col-span-2 mt-2 inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60">
        {state.status === "loading" ? "Sending..." : "Request Quote / Book"}
      </button>

      {state.status !== "idle" && (
        <p className={`md:col-span-2 text-sm ${state.status === "success" ? "text-emerald-700" : "text-red-600"}`}>
          {state.message}
        </p>
      )}
    </form>
  );
}
