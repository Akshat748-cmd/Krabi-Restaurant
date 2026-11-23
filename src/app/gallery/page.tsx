"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { galleryItems } from "@/data/gallery";
import FadeReveal from "@/components/animations/FadeReveal";

export default function GalleryPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = selectedFilter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedFilter);

  const handleNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev]);

  return (
    <div className="bg-ivory text-espresso-850 pt-28 pb-32">
      {/* Hero Banner */}
      <section className="bg-espresso-950 text-ivory py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-[11px] uppercase tracking-[0.35em] text-gold-400 block font-medium">
            Visual Chronicle
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl tracking-tight text-ivory">
            Restaurant Gallery
          </h1>
          <p className="text-ivory/70 text-sm sm:text-base max-w-xl mx-auto font-light">
            Glimpses into our warm dining room, aromatic clay ovens, handcrafted drinks, and authentic dishes in Ao Nang, Krabi.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="flex flex-wrap items-center justify-center gap-2 pb-12 border-b border-subtle-light">
          {[
            { id: "all", label: "All Photos" },
            { id: "dishes", label: "Dishes & Tandoor" },
            { id: "interior", label: "Dining Room" },
            { id: "atmosphere", label: "Atmosphere" },
            { id: "drinks", label: "Lassis & Drinks" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`text-xs uppercase tracking-wider px-5 py-2.5 transition-all font-medium ${
                selectedFilter === tab.id
                  ? "bg-espresso-950 text-ivory"
                  : "bg-ivory-100 text-espresso-700 hover:text-espresso-950 hover:bg-ivory-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {filteredItems.map((item, idx) => (
            <FadeReveal key={item.id} direction="up" delay={idx * 0.05}>
              <div
                onClick={() => setLightboxIndex(idx)}
                className="group relative aspect-[4/3] bg-espresso-900 border border-subtle-light overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[10px] uppercase tracking-widest text-gold-400 capitalize">
                    {item.category}
                  </span>
                  <p className="font-serif text-lg text-ivory mt-1">
                    {item.title}
                  </p>
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-espresso-950/80 border border-white/20 flex items-center justify-center text-ivory">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </FadeReveal>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-espresso-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
        >
          <button
            onClick={() => setLightboxIndex(null)}
            aria-label="Close photo"
            className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-ivory hover:text-gold-300 hover:border-gold-300 transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            aria-label="Previous photo"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-ivory hover:text-gold-300 hover:border-gold-300 transition-colors z-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next photo"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-ivory hover:text-gold-300 hover:border-gold-300 transition-colors z-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative max-w-5xl w-full max-h-[80vh] aspect-[16/10]">
            <Image
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              fill
              className="object-contain"
            />
            <div className="absolute -bottom-10 left-0 w-full text-center text-sm font-serif text-ivory">
              {filteredItems[lightboxIndex].title} ({lightboxIndex + 1} / {filteredItems.length})
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
