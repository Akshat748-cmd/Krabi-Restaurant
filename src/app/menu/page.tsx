"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Leaf, Flame, Download, Grid, List, Sparkles } from "lucide-react";
import { allMenuItems } from "@/data/menu";
import { restaurantData } from "@/data/restaurant";
import FadeReveal from "@/components/animations/FadeReveal";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [dietaryFilter, setDietaryFilter] = useState<"all" | "veg" | "non-veg">("all");
  const [layoutView, setLayoutView] = useState<"grid" | "editorial">("grid");

  const categories = [
    { id: "all", label: "All Dishes" },
    { id: "curries", label: "Curries" },
    { id: "tandoor", label: "Tandoor" },
    { id: "breads", label: "Breads & Naan" },
    { id: "biryani", label: "Biryani & Rice" },
    { id: "appetizers", label: "Appetizers" },
    { id: "desserts", label: "Desserts" },
  ];

  const filteredItems = allMenuItems.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesDietary =
      dietaryFilter === "all" ||
      (dietaryFilter === "veg" && item.isVegetarian) ||
      (dietaryFilter === "non-veg" && !item.isVegetarian);
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesDietary && matchesSearch;
  });

  return (
    <div className="bg-ivory text-espresso-850 pt-28 pb-32">
      {/* Page Hero Banner */}
      <section className="bg-espresso-950 text-ivory py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/images/dishes/dish_07.png"
            alt="Spices and Flavors"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] uppercase tracking-[0.35em] text-gold-400 block font-medium">
            Authentic Cuisine of North India & Andaman Coast
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl tracking-tight text-ivory mt-3">
            The Restaurant Menu
          </h1>
          <p className="text-ivory/70 text-sm sm:text-base max-w-2xl mx-auto mt-4 font-light">
            Every curry is slow-simmered, our flatbreads are slapped fresh on tandoor clay walls, and our spices are hand-ground daily in Ao Nang.
          </p>

          {/* PDF Download CTAs */}
          <div className="pt-8 flex flex-wrap justify-center items-center gap-4">
            <a
              href={restaurantData.menus.indianPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="taor-button-gold text-xs py-3 px-6 flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Indian Menu (PDF)</span>
            </a>
            <a
              href={restaurantData.menus.thaiPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="taor-button-outline text-xs py-3 px-6 flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Thai Menu (PDF)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Menu Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-subtle-light">
          {/* Search Input */}
          <div className="relative w-full md:max-w-xs">
            <Search className="w-4 h-4 text-espresso-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search curries, breads, tikkas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-ivory-100 border border-espresso-950/15 text-xs text-espresso-950 placeholder-espresso-400 focus:outline-none focus:border-gold-600 transition-colors"
            />
          </div>

          {/* Dietary Filters & View Toggle */}
          <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto">
            {/* Dietary Filter */}
            <div className="flex items-center gap-1.5 p-1 bg-ivory-200 border border-subtle-light">
              <button
                onClick={() => setDietaryFilter("all")}
                className={`text-[11px] uppercase tracking-wider px-3 py-1.5 font-medium transition-colors ${
                  dietaryFilter === "all" ? "bg-espresso-950 text-ivory" : "text-espresso-700 hover:text-espresso-950"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setDietaryFilter("veg")}
                className={`text-[11px] uppercase tracking-wider px-3 py-1.5 font-medium flex items-center gap-1 transition-colors ${
                  dietaryFilter === "veg" ? "bg-emerald-900 text-ivory" : "text-espresso-700 hover:text-espresso-950"
                }`}
              >
                <Leaf className="w-3 h-3 text-emerald-500" /> Veg
              </button>
              <button
                onClick={() => setDietaryFilter("non-veg")}
                className={`text-[11px] uppercase tracking-wider px-3 py-1.5 font-medium transition-colors ${
                  dietaryFilter === "non-veg" ? "bg-amber-900 text-ivory" : "text-espresso-700 hover:text-espresso-950"
                }`}
              >
                Non-Veg
              </button>
            </div>

            {/* Layout Toggle */}
            <div className="hidden sm:flex items-center gap-1 p-1 bg-ivory-200 border border-subtle-light">
              <button
                onClick={() => setLayoutView("grid")}
                aria-label="Grid layout"
                className={`p-1.5 transition-colors ${
                  layoutView === "grid" ? "bg-espresso-950 text-ivory" : "text-espresso-600 hover:text-espresso-950"
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setLayoutView("editorial")}
                aria-label="Editorial list layout"
                className={`p-1.5 transition-colors ${
                  layoutView === "editorial" ? "bg-espresso-950 text-ivory" : "text-espresso-600 hover:text-espresso-950"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Pills Slider */}
        <div className="py-6 flex items-center gap-2 overflow-x-auto no-scrollbar border-b border-subtle-light">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`whitespace-nowrap px-5 py-2.5 text-xs uppercase tracking-wider font-medium transition-all ${
                selectedCategory === cat.id
                  ? "bg-espresso-950 text-ivory"
                  : "bg-ivory-100 text-espresso-700 hover:text-espresso-950 hover:bg-ivory-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items Container */}
        <div className="pt-12">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <p className="font-serif text-2xl text-espresso-900">No dishes match your filter.</p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setDietaryFilter("all");
                  setSearchQuery("");
                }}
                className="taor-button-dark text-xs py-3 px-6"
              >
                Reset All Filters
              </button>
            </div>
          ) : layoutView === "grid" ? (
            /* Grid View */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, idx) => (
                <FadeReveal key={item.id} direction="up" delay={idx * 0.05}>
                  <div className="bg-ivory-50 border border-subtle-light flex flex-col justify-between overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative aspect-[16/11] w-full overflow-hidden bg-espresso-950 img-zoom-hover">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        {item.isVegetarian ? (
                          <span className="inline-flex items-center gap-1 bg-emerald-950/80 backdrop-blur text-emerald-300 text-[10px] uppercase tracking-wider px-2.5 py-1">
                            <Leaf className="w-3 h-3 text-emerald-400" /> Veg
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 bg-amber-950/80 backdrop-blur text-amber-300 text-[10px] uppercase tracking-wider px-2.5 py-1">
                            Non-Veg
                          </span>
                        )}
                        {item.isSpicy && (
                          <span className="inline-flex items-center gap-1 bg-rose-950/80 backdrop-blur text-rose-300 text-[10px] uppercase tracking-wider px-2 py-1">
                            <Flame className="w-3 h-3 text-rose-400" /> Spicy
                          </span>
                        )}
                      </div>
                      <div className="absolute bottom-3 right-3 bg-espresso-950/90 text-gold-300 text-xs font-mono font-medium px-3 py-1">
                        {item.price}
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <h3 className="font-serif text-2xl text-espresso-950">
                          {item.name}
                        </h3>
                        {item.thaiName && (
                          <p className="text-[11px] text-espresso-600 tracking-wide mt-0.5">
                            {item.thaiName}
                          </p>
                        )}
                        <p className="text-xs sm:text-sm text-espresso-700 leading-relaxed mt-2 font-light">
                          {item.description}
                        </p>
                      </div>

                      {item.allergens && item.allergens.length > 0 && (
                        <div className="pt-3 border-t border-subtle-light text-[10px] text-espresso-600">
                          Contains: {item.allergens.join(", ")}
                        </div>
                      )}
                    </div>
                  </div>
                </FadeReveal>
              ))}
            </div>
          ) : (
            /* Editorial List View */
            <div className="space-y-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-ivory-50 border border-subtle-light p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start sm:items-center gap-5">
                    <div className="relative w-20 h-20 shrink-0 overflow-hidden bg-espresso-950 border border-subtle-light">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif text-2xl text-espresso-950">
                          {item.name}
                        </h3>
                        {item.isVegetarian && (
                          <Leaf className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        )}
                      </div>
                      <p className="text-xs text-espresso-700 max-w-xl font-light">
                        {item.description}
                      </p>
                      {item.allergens && (
                        <p className="text-[10px] text-espresso-600">
                          Contains: {item.allergens.join(", ")}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="font-mono text-base font-semibold text-espresso-950 shrink-0 self-end sm:self-center">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
