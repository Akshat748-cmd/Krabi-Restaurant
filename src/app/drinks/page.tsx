"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GlassWater, Sparkles, ArrowUpRight } from "lucide-react";
import { drinksList } from "@/data/drinks";
import FadeReveal from "@/components/animations/FadeReveal";

export default function DrinksPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Drinks" },
    { id: "lassi", label: "Traditional Lassis" },
    { id: "tea-coffee", label: "Masala Chai & Teas" },
    { id: "fresh-juices", label: "Island Coconuts & Juices" },
    { id: "refreshers", label: "Sparkling Refreshers" },
  ];

  const filteredDrinks = selectedCategory === "all"
    ? drinksList
    : drinksList.filter((d) => d.category === selectedCategory);

  return (
    <div className="bg-ivory text-espresso-850 pt-28 pb-32">
      {/* Editorial Hero Header */}
      <section className="bg-espresso-950 text-ivory py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[11px] uppercase tracking-[0.35em] text-gold-400 block font-medium">
            Bar & Refreshments
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl tracking-tight text-ivory">
            Tropical Drinks & Lassis
          </h1>
          <p className="text-ivory/70 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Hand-whipped yogurt lassis with sweet Alphonso mango, slow-simmered Karak masala chai with fresh ginger, and chilled Andaman young coconuts hacked to order.
          </p>
        </div>
      </section>

      {/* Category Navigation Pills */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="flex flex-wrap items-center justify-center gap-2 pb-12 border-b border-subtle-light">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`text-xs uppercase tracking-wider px-5 py-2.5 transition-all font-medium ${
                selectedCategory === cat.id
                  ? "bg-espresso-950 text-ivory"
                  : "bg-ivory-100 text-espresso-700 hover:text-espresso-950 hover:bg-ivory-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Drinks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {filteredDrinks.map((drink, idx) => (
            <FadeReveal key={drink.id} direction="up" delay={idx * 0.06}>
              <div className="bg-ivory-50 border border-subtle-light flex flex-col justify-between overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                {/* Drink Image */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-espresso-950 img-zoom-hover">
                  <Image
                    src={drink.image}
                    alt={drink.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  {drink.isPopular && (
                    <div className="absolute top-3 left-3 bg-espresso-950/90 text-gold-400 text-[10px] uppercase font-mono px-2.5 py-1 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-gold-400" /> Guest Favorite
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 bg-espresso-950/90 text-gold-300 text-xs font-mono font-medium px-3 py-1">
                    {drink.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl text-espresso-950">
                      {drink.name}
                    </h3>
                    {drink.thaiName && (
                      <p className="text-[11px] text-espresso-600 tracking-wide mt-0.5">
                        {drink.thaiName}
                      </p>
                    )}
                    <p className="text-xs sm:text-sm text-espresso-700 leading-relaxed mt-2 font-light">
                      {drink.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeReveal>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-espresso-950 text-ivory p-8 sm:p-12 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl text-ivory">
              Pair Your Meal with Fresh Refreshments
            </h3>
            <p className="text-xs sm:text-sm text-ivory/70 font-light">
              All drinks are made fresh to order using 100% halal, authentic ingredients.
            </p>
          </div>
          <Link
            href="/menu"
            className="taor-button-gold text-xs py-3.5 px-6 inline-flex items-center gap-2 shrink-0"
          >
            <span>Explore Food Menu</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
