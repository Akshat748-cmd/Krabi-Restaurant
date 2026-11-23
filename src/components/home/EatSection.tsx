import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FadeReveal from "@/components/animations/FadeReveal";

export default function EatSection() {
  return (
    <section className="py-24 sm:py-32 bg-espresso-950 text-ivory relative border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Left */}
          <div className="lg:col-span-7 relative">
            <FadeReveal direction="up">
              <div className="relative aspect-[16/10] w-full overflow-hidden border border-white/10 shadow-2xl img-zoom-hover">
                <Image
                  src="/images/dishes/dish_11.png"
                  alt="Traditional Indian Curries and Fresh Flatbreads"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
              </div>
            </FadeReveal>
          </div>

          {/* Editorial Right (Taor Eat treatment) */}
          <div className="lg:col-span-5 space-y-6">
            <FadeReveal direction="up" delay={0.15}>
              <span className="text-[10px] uppercase tracking-[0.35em] text-gold-400 block font-medium">
                Eat • Cuisine Tradition
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-ivory leading-tight">
                Crafted with love, patience and generational mastery
              </h2>
              <p className="text-sm sm:text-base text-ivory/80 leading-relaxed font-light">
                Discover the rich flavors of authentic Indian cuisine, from traditional curries to freshly prepared tandoor specialties. Every marinade is prepared from whole curd and spices, and our naans are slapped by hand fresh to order.
              </p>
              <div className="pt-4">
                <Link
                  href="/menu"
                  className="taor-button-gold inline-flex items-center gap-2 group"
                >
                  <span>Explore Menu</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </FadeReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
