import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import FadeReveal from "@/components/animations/FadeReveal";

export default function OfferSection() {
  return (
    <section className="bg-espresso-950 text-ivory pt-24 pb-16 sm:pt-28 sm:pb-20 border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeReveal direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-espresso-900 border border-white/10 p-6 sm:p-10">
            {/* Offer Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-gold-400/30 text-gold-400 text-[10px] tracking-[0.25em] uppercase font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Chef&apos;s Evening Specials</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory">
                Authentic Charcoal Tandoor & Coastal Banquets
              </h2>
              <p className="text-xs sm:text-sm text-ivory/70 leading-relaxed font-light max-w-xl">
                Experience slow-cooked curries with freshly baked garlic naan, tender lamb rogan josh, and chilled mango lassis crafted daily using generational Northern recipes.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/menu"
                  className="taor-button-gold text-xs py-3 px-6 inline-flex items-center gap-2"
                >
                  <span>Explore Menu Specials</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/drinks"
                  className="taor-button-outline text-xs py-3 px-6"
                >
                  Drinks & Refreshments
                </Link>
              </div>
            </div>

            {/* Offer Right Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[16/10] w-full overflow-hidden border border-white/10 img-zoom-hover">
                <Image
                  src="/images/dishes/dish_01.png"
                  alt="Ali Baba Chef's Signature Curries and Breads"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </FadeReveal>
      </div>
    </section>
  );
}
