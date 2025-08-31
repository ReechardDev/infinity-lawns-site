// app/booking/page.js
import BookingForm from "../../components/BookingForm";

export default function BookingPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-2">Request a Quote or Book a Visit</h1>
      <p className="text-center text-slate-600 mb-8">Transparent pricing, flexible scheduling, and friendly support.</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Form */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow border border-slate-200">
          <BookingForm />
        </div>

        {/* Right: Info cards */}
        <div className="space-y-6">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
            <h2 className="font-extrabold mb-2">How it works</h2>
            <ol className="list-decimal list-inside text-slate-700 space-y-1">
              <li>Send your request with preferred date and services.</li>
              <li>We confirm details, measure your lawn, and finalize quote.</li>
              <li>Crew arrives on time and completes services as scoped.</li>
              <li>Pay online and rate your experience—easy.</li>
            </ol>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <h3 className="font-extrabold mb-2">Why choose us</h3>
            <ul className="space-y-1 text-slate-700">
              <li>• Insured crew, pro equipment</li>
              <li>• Clear communication & ETAs</li>
              <li>• Eco-conscious options available</li>
              <li>• Easy online booking & payment</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <h3 className="font-extrabold mb-2">Service areas</h3>
            <p className="text-slate-700">
              Cherry Creek • Parker • Centennial • Lone Tree • Denver Metro
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
