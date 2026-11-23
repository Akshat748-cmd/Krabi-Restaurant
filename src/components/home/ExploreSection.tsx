import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { exploreCategories } from "@/data/menu";
import FadeReveal from "@/components/animations/FadeReveal";
import TiltCard from "@/components/animations/TiltCard";

export default function ExploreSection() {
  return (
    <section id="explore" className="py-24 sm:py-32 bg-espresso-950 text-ivory relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-gold-400 block font-medium">
                Menu Navigation
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight text-ivory mt-2">
                Explore Our Kitchen
              </h2>
            </div>
            <p className="text-xs uppercase tracking-[0.25em] text-ivory/60 font-medium">
              6 Culinary Categories • Halal Prepared
            </p>
          </div>
        </FadeReveal>

        {/* 6 Category Image Cards Grid (Taor home-hero-menu structure) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {exploreCategories.map((cat, idx) => (
            <FadeReveal key={cat.id} direction="up" delay={idx * 0.08}>
              <TiltCard>
                <Link
                  href={cat.href}
                  className="group block bg-espresso-900 border border-white/10 overflow-hidden hover:border-gold-400/50 transition-all duration-400"
                >
                  {/* Category Image with Hover Zoom */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-espresso-950 img-zoom-hover">
                    <Image
                      src={cat.image}
                      alt={`Ali Baba ${cat.name} Category`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-transparent to-transparent" />
                    
                    {/* Category Count / Index */}
                    <div className="absolute top-4 left-4 bg-espresso-950/90 text-gold-400 text-[10px] uppercase font-mono px-2.5 py-1 border border-white/10">
                      0{idx + 1}
                    </div>
                  </div>

                  {/* Card Text Content */}
                  <div className="p-6 sm:p-7 flex items-center justify-between">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase tracking-widest text-gold-400/80 block">
                        {cat.subname}
                      </span>
                      <h3 className="font-serif text-2xl text-ivory group-hover:text-gold-300 transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-xs text-ivory/60 line-clamp-1 font-light pt-1">
                        {cat.description}
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-ivory/70 group-hover:text-gold-400 group-hover:border-gold-400 shrink-0 ml-4 transition-colors">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </TiltCard>
            </FadeReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
