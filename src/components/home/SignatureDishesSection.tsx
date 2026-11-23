"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Flame, Leaf } from "lucide-react";
import { signatureDishes } from "@/data/menu";

export default function SignatureDishesSection() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredDishes = activeTab === "all"
    ? signatureDishes
    : signatureDishes.filter((d) => d.category === activeTab);

  return (
    <section id="signature-dishes" className="py-24 sm:py-32 bg-espresso-950 text-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold-400 block font-medium">
              Culinary Signatures
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight text-ivory mt-2">
              Signature Dishes
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Signatures" },
              { id: "curries", label: "Curries" },
              { id: "tandoor", label: "Tandoor" },
              { id: "drinks", label: "Beverages" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-xs uppercase tracking-wider px-4 py-2 transition-all ${
                  activeTab === tab.id
                    ? "bg-gold-400 text-espresso-950 font-semibold"
                    : "bg-white/5 text-ivory/70 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              className="group bg-espresso-900 border border-white/10 flex flex-col justify-between overflow-hidden hover:border-gold-400/50 transition-all duration-300"
            >
              {/* Dish Image */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-espresso-950 img-zoom-hover">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                
                {/* Dietary badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  {dish.isVegetarian ? (
                    <span className="inline-flex items-center gap-1 bg-emerald-950/80 backdrop-blur border border-emerald-500/40 text-emerald-300 text-[10px] uppercase tracking-wider px-2.5 py-1">
                      <Leaf className="w-3 h-3 text-emerald-400" /> Veg
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 bg-amber-950/80 backdrop-blur border border-amber-500/40 text-amber-300 text-[10px] uppercase tracking-wider px-2.5 py-1">
                      Non-Veg
                    </span>
                  )}
                  {dish.isSpicy && (
                    <span className="inline-flex items-center gap-1 bg-rose-950/80 backdrop-blur border border-rose-500/40 text-rose-300 text-[10px] uppercase tracking-wider px-2 py-1">
                      <Flame className="w-3 h-3 text-rose-400" /> Mild Spice
                    </span>
                  )}
                </div>

                {/* Price Tag */}
                <div className="absolute bottom-3 right-3 bg-espresso-950/90 backdrop-blur border border-gold-400/30 text-gold-300 text-xs font-mono font-medium px-3 py-1">
                  {dish.price}
                </div>
              </div>

              {/* Dish Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-2xl text-ivory group-hover:text-gold-300 transition-colors">
                      {dish.name}
                    </h3>
                  </div>
                  {dish.thaiName && (
                    <p className="text-[11px] text-gold-400/70 font-sans tracking-wide mt-0.5">
                      {dish.thaiName} • {dish.hindiName}
                    </p>
                  )}
                  <p className="text-xs sm:text-sm text-ivory/70 leading-relaxed mt-3 font-light">
                    {dish.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-ivory/50">
                  <span className="uppercase tracking-wider text-[10px]">
                    Category: <span className="text-ivory/80 capitalize">{dish.category}</span>
                  </span>
                  <Link
                    href="/menu"
                    className="text-gold-400 hover:text-ivory inline-flex items-center gap-1 transition-colors text-[11px] uppercase tracking-wider"
                  >
                    Details <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/menu"
            className="taor-button-gold px-10 py-4 inline-flex items-center gap-2 group"
          >
            <span>Explore Complete Restaurant Menu</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
