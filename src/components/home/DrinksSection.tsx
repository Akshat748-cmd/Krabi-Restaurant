import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, GlassWater } from "lucide-react";
import FadeReveal from "@/components/animations/FadeReveal";

export default function DrinksSection() {
  return (
    <section className="py-24 sm:py-32 bg-ivory text-espresso-850 relative border-t border-subtle-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Content Left */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <FadeReveal direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-ivory-200 border border-subtle-light text-gold-600 text-[10px] tracking-[0.25em] uppercase font-medium">
                <GlassWater className="w-3.5 h-3.5" />
                <span>Bar & Refreshments</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-espresso-950 leading-tight">
                Tropical Lassis & Aromatic Spiced Chai
              </h2>
              <p className="text-sm sm:text-base text-espresso-700 leading-relaxed font-light">
                Quench your thirst with our hand-whipped mango lassis, freshly brewed Karak masala chai simmered with ginger root, and ice-cold fresh Andaman young coconuts hacked to order.
              </p>
              <div className="pt-4">
                <Link
                  href="/drinks"
                  className="taor-button-dark inline-flex items-center gap-2 group"
                >
                  <span>Explore Drinks</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </FadeReveal>
          </div>

          {/* Visual Right */}
          <div className="lg:col-span-7 relative order-1 lg:order-2">
            <FadeReveal direction="up" delay={0.15}>
              <div className="relative aspect-[16/10] w-full overflow-hidden shadow-2xl img-zoom-hover">
                <Image
                  src="/images/dishes/dish_06.png"
                  alt="Ali Baba Mango Lassi and Chilled Drinks"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
              </div>
            </FadeReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
