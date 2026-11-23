"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { galleryItems } from "@/data/gallery";

export default function GalleryPreviewSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const previewItems = galleryItems.slice(0, 6);

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % previewItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + previewItems.length) % previewItems.length);
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-espresso-950 text-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold-400 block font-medium">
              Visual Chronicle
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight text-ivory mt-2">
              Atmosphere & Gallery
            </h2>
          </div>
          <Link
            href="/gallery"
            className="taor-button-outline group inline-flex items-center gap-2"
          >
            <span>View Full Gallery ({galleryItems.length})</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Asymmetrical Gallery Grid (Taor style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {previewItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative aspect-[4/3] bg-espresso-900 border border-white/10 overflow-hidden cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] uppercase tracking-widest text-gold-400">
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
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-espresso-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            aria-label="Close lightbox"
            className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-ivory hover:text-gold-300 hover:border-gold-300 transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={handlePrev}
            aria-label="Previous photo"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-ivory hover:text-gold-300 hover:border-gold-300 transition-colors z-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={handleNext}
            aria-label="Next photo"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-ivory hover:text-gold-300 hover:border-gold-300 transition-colors z-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div className="relative max-w-5xl w-full max-h-[80vh] aspect-[16/10]">
            <Image
              src={previewItems[lightboxIndex].image}
              alt={previewItems[lightboxIndex].title}
              fill
              className="object-contain"
            />
            <div className="absolute -bottom-10 left-0 w-full text-center text-sm font-serif text-ivory">
              {previewItems[lightboxIndex].title} ({lightboxIndex + 1} / {previewItems.length})
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
