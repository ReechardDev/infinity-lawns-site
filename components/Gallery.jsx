// components/Gallery.jsx
export default function Gallery({ images = [] }) {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold">Before &amp; After Gallery</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {images.map((src, i) => (
            <figure key={i} className="group overflow-hidden rounded-2xl border bg-white shadow-sm relative">
              <img
                src={src}
                alt=""
                className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <figcaption className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/40 to-transparent p-4 opacity-0 transition group-hover:opacity-100">
                <span className="text-white text-sm">Tap to view</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
