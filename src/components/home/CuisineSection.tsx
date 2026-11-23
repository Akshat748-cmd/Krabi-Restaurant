import Image from "next/image";
import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import FadeReveal from "@/components/animations/FadeReveal";

export default function CuisineSection() {
  const pillars = [
    {
      title: "Fresh",
      heading: "Carefully Selected Local Produce",
      description: "Our cuisine is characterized by daily market-fresh vegetables, herbs, and tender halal meats.",
      image: "/images/dishes/dish_08.png",
    },
    {
      title: "Tasty",
      heading: "Generational Whole Indian Spices",
      description: "We slow-roast whole cumin, green cardamom, and Kashmiri chillies for authentic depth of flavor.",
      image: "/images/dishes/dish_09.png",
    },
    {
      title: "Local",
      heading: "Ao Nang Coastal Hospitality",
      description: "Bringing authentic North Indian traditions to travelers and residents across Krabi province.",
      image: "/images/dishes/dish_10.png",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-espresso-950 text-ivory relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Taor Cuisine Header) */}
        <div className="max-w-3xl pb-16">
          <FadeReveal direction="up">
            <span className="text-[11px] uppercase tracking-[0.35em] text-gold-400 block font-medium">
              Cuisine
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight text-ivory mt-2">
              Seeking unique tastes in the everyday
            </h2>
            <p className="text-sm sm:text-base text-ivory/70 leading-relaxed font-light mt-4">
              Three pillars define the culinary integrity of Ali Baba Restaurant in Ao Nang.
            </p>
          </FadeReveal>
        </div>

        {/* 3-Pillar Distinct Visual Structure (Taor custom-list-gallery) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <FadeReveal key={pillar.title} direction="up" delay={idx * 0.1}>
              <div className="bg-espresso-900 border border-white/10 flex flex-col justify-between overflow-hidden hover:border-gold-400/40 transition-colors">
                {/* Distinct Image */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-espresso-950 img-zoom-hover">
                  <Image
                    src={pillar.image}
                    alt={`Ali Baba ${pillar.title} Culinary Quality`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gold-400 text-espresso-950 flex items-center justify-center font-bold text-xs">
                    <Check className="w-4 h-4 text-espresso-950 stroke-[3]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold">
                      {pillar.title}
                    </span>
                    <h3 className="font-serif text-2xl text-ivory mt-1">
                      {pillar.heading}
                    </h3>
                    <p className="text-xs sm:text-sm text-ivory/70 leading-relaxed font-light mt-2">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeReveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="taor-button-outline text-xs py-3 px-8 inline-flex items-center gap-2 group"
          >
            <span>Full Photo Gallery</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
