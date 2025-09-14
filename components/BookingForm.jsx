// components/BookingForm.jsx
"use client";

export default function BookingForm() {
  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire this to your handler / API route
    // alert("Thanks! We'll confirm by phone/text.");
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <input type="text" name="name" className="rounded-xl2 border p-3" placeholder="Full Name *" required />
      <input type="email" name="email" className="rounded-xl2 border p-3" placeholder="Email *" required />
      <input type="tel" name="phone" className="rounded-xl2 border p-3" placeholder="Phone *" required />
      <input type="text" name="street" className="rounded-xl2 border p-3" placeholder="Street Address *" required />

      <select name="service" className="rounded-xl2 border p-3" required defaultValue="">
        <option value="" disabled>Select Service *</option>
        <option>Mowing</option>
        <option>Design & Install</option>
        <option>Snow Removal</option>
        <option>Hauling</option>
        <option>Irrigation</option>
        <option>Retaining Walls & Pavers</option>
      </select>

      <select name="frequency" className="rounded-xl2 border p-3" defaultValue="One-time">
        <option>One-time</option>
        <option>Weekly</option>
        <option>Bi-weekly</option>
        <option>Monthly</option>
      </select>

      <input type="date" name="date" className="rounded-xl2 border p-3" />
      <select name="area" className="rounded-xl2 border p-3" defaultValue="Denver Metro">
        <option>Denver Metro</option>
        <option>Cherry Creek</option>
        <option>Parker</option>
        <option>Centennial</option>
        <option>Lone Tree</option>
      </select>

      <textarea
        name="notes"
        className="rounded-xl2 border p-3 md:col-span-2"
        rows={4}
        placeholder="Notes (gates, pets, preferences…)"
      />

      <div className="md:col-span-2">
        <button type="submit" className="w-full rounded-xl2 bg-emerald-600 px-5 py-3 font-medium text-white">
          Request Quote / Book
        </button>
      </div>
    </form>
  );
}
