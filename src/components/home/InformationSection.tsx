import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FadeReveal from "@/components/animations/FadeReveal";

export default function InformationSection() {
  const infoBoxes = [
    {
      category: "When",
      headline: "Open Daily continuous service",
      description: "11:00 AM – 11:00 PM Monday through Sunday for our dear customers.",
      linkText: "Open hours",
      href: "/contact",
    },
    {
      category: "Where",
      headline: "Ao Nang Beach, Krabi",
      description: "693, Moo 2, Ao Nang, Mueang Krabi District, Krabi 81180, Thailand.",
      linkText: "Directions & Map",
      href: "/contact",
    },
    {
      category: "Who",
      headline: "Ali Baba Restaurant",
      description: "Serving authentic North Indian and coastal Thai culinary traditions since 2018.",
      linkText: "Our story",
      href: "/our-story",
    },
    {
      category: "Eat",
      headline: "Authentic A La Carte Menu",
      description: "Choose an excellent meal from our traditional curries and clay tandoor flatbreads.",
      linkText: "Menu",
      href: "/menu",
    },
    {
      category: "Drink",
      headline: "Lassis & Refreshments",
      description: "Wide range of mango lassis, freshly brewed masala chai, and island young coconuts.",
      linkText: "Drinks",
      href: "/drinks",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-ivory-200 text-espresso-850 relative border-t border-subtle-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeReveal direction="up">
          <div className="pb-16 border-b border-subtle-light">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold-600 block font-medium">
              Essential Directory
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight text-espresso-950 mt-2">
              Information
            </h2>
          </div>
        </FadeReveal>

        {/* Taor grid-information 5-Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {infoBoxes.map((box, idx) => (
            <FadeReveal key={box.category} direction="up" delay={idx * 0.08}>
              <div className="bg-ivory border border-subtle-light p-8 flex flex-col justify-between space-y-6 hover:shadow-xl transition-shadow h-full">
                <div className="space-y-3">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gold-600 font-semibold block">
                    {box.category}
                  </span>
                  <h3 className="font-serif text-2xl text-espresso-950">
                    {box.headline}
                  </h3>
                  <p className="text-xs sm:text-sm text-espresso-700 leading-relaxed font-light">
                    {box.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-subtle-light">
                  <Link
                    href={box.href}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-espresso-950 hover:text-gold-600 font-medium transition-colors"
                  >
                    <span>{box.linkText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gold-600" />
                  </Link>
                </div>
              </div>
            </FadeReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
