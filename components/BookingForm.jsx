// components/BookingForm.jsx
"use client";

function input() {
  return "w-full h-11 border border-slate-300 rounded-xl px-3 bg-white text-slate-900";
}

export default function BookingForm() {
  return (
    <form
      action="https://formsubmit.co/YOUREMAIL@example.com"
      method="POST"
      className="grid gap-3"
    >
      {/* FormSubmit settings */}
      <input type="hidden" name="_subject" value="New Booking Request - Infinity Lawns" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value="http://localhost:3000/booking" />

      <div className="grid sm:grid-cols-2 gap-3">
        <input name="Full Name" placeholder="Full Name *" required className={input()} />
        <input name="Email" type="email" placeholder="Email *" required className={input()} />
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <input name="Phone" placeholder="Phone *" required className={input()} />
        <input name="Street Address" placeholder="Street Address *" required className={input()} />
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <select name="Select Service" required className={input()}>
          <option value="">Select Service *</option>
          <option>Lawn Mowing & Maintenance</option>
          <option>Landscaping & Design</option>
          <option>Snow Removal</option>
          <option>Hauling / Handyman</option>
          <option>Irrigation</option>
        </select>
        <select name="Frequency" className={input()}>
          <option>One-time</option>
          <option>Weekly</option>
          <option>Bi-weekly</option>
          <option>Monthly</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <input name="Preferred Date" type="date" required className={input()} />
        <select name="Service Area" className={input()}>
          <option>Denver Metro</option>
          <option>Cherry Creek</option>
          <option>Parker</option>
          <option>Centennial</option>
          <option>Lone Tree</option>
        </select>
      </div>

      <textarea
        name="Notes"
        placeholder="Notes (gates, pets, preferences…)"
        rows={4}
        className={`${input()} h-auto py-2`}
      />

      <button type="submit" className="h-12 rounded-xl bg-emerald-600 text-white font-extrabold border border-emerald-600 hover:bg-emerald-700">
        Request Quote / Book
      </button>

      <div className="text-xs text-slate-500">
        * By submitting, you agree to be contacted regarding your request.
      </div>
    </form>
  );
}
