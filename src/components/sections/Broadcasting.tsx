import { useState } from 'react';
import * as Icons from 'lucide-react';
import { Monitor, Video, Truck, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { broadcastCategories, galleryImages, galleryFilters } from '@/config/broadcasting';

export function Broadcasting() {
  const [filter, setFilter] = useState<(typeof galleryFilters)[number]>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = filter === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === filter);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => setLightboxIndex((prev) =>
    prev === null ? null : (prev + 1) % filteredImages.length
  );
  const prevImage = () => setLightboxIndex((prev) =>
    prev === null ? null : (prev - 1 + filteredImages.length) % filteredImages.length
  );

  return (
    <section id="broadcasting" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="reveal text-center mb-14">
          <p className="text-blue-400 font-medium text-sm tracking-wider uppercase mb-2">Behind the Scenes</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-white">Broadcasting Experience</h2>
        </div>

        {/* Category cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {broadcastCategories.map((cat) => {
            const IconComp = (Icons as unknown as Record<string, Icons.LucideIcon>)[cat.icon] ?? Monitor;
            return (
              <div key={cat.title} className="reveal glass rounded-2xl p-7 card-hover">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                    <IconComp size={22} />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white">{cat.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-slate-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Gallery */}
        <div className="reveal text-center mb-8">
          <h3 className="font-display font-semibold text-xl text-white mb-2">Galeri Dokumentasi</h3>
          <p className="text-slate-400 text-sm">Klik gambar untuk melihat lebih detail</p>
        </div>

        {/* Gallery filters */}
        <div className="reveal flex flex-wrap justify-center gap-3 mb-8">
          {galleryFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                filter === f
                  ? 'btn-primary text-white'
                  : 'border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/30'
              }`}
            >
              {f === "All" ? "Semua" : f}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredImages.length === 0 ? (
            <div className="col-span-full text-center py-16">
              <p className="text-slate-500 text-sm">Belum ada foto di kategori ini.</p>
            </div>
          ) : (
            filteredImages.map((img, index) => (
              <div
                key={index}
                className="gallery-group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer border border-white/5 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="gallery-item w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="gallery-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <span className="text-blue-400 text-xs font-medium mb-1">{img.category}</span>
                  <p className="text-white text-sm leading-snug line-clamp-2">{img.alt}</p>
                </div>
                <div className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-black/40 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn size={16} />
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-5 right-5 w-11 h-11 rounded-xl border border-white/20 text-white hover:bg-white/10 flex items-center justify-center transition-colors"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X size={22} />
          </button>

          <button
            className="absolute left-4 md:left-8 w-12 h-12 rounded-xl border border-white/20 text-white hover:bg-white/10 flex items-center justify-center transition-colors"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="max-w-4xl max-h-[80vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              className="max-w-full max-h-[70vh] rounded-xl object-contain"
            />
            <div className="mt-4 text-center max-w-2xl">
              <span className="text-blue-400 text-xs font-medium">{filteredImages[lightboxIndex].category}</span>
              <p className="text-slate-300 text-sm mt-1">{filteredImages[lightboxIndex].alt}</p>
            </div>
          </div>

          <button
            className="absolute right-4 md:right-8 w-12 h-12 rounded-xl border border-white/20 text-white hover:bg-white/10 flex items-center justify-center transition-colors"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </section>
  );
}
