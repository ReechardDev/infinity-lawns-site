// components/Gallery.jsx
export default function Gallery({ photos = [] }) {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Before & After Gallery</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow bg-white"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
