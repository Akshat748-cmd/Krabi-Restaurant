import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { restaurantData } from "@/data/restaurant";
import FadeReveal from "@/components/animations/FadeReveal";

export default function IntroductionSection() {
  return (
    <section id="story" className="py-24 sm:py-32 bg-ivory text-espresso-850 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Subheader */}
        <FadeReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-subtle-light">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-gold-600 block font-medium">
                Introduction & Heritage
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight text-espresso-950 mt-2 max-w-2xl">
                {restaurantData.storyHeading}
              </h2>
            </div>
            <p className="text-xs uppercase tracking-[0.25em] text-espresso-700 font-medium">
              Since 2018 • Ao Nang, Krabi
            </p>
          </div>
        </FadeReveal>

        {/* Taor-Style Asymmetric 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-16">
          {/* Left Column: Overlapping Editorial Images */}
          <div className="lg:col-span-7 relative">
            <FadeReveal direction="up" delay={0.1}>
              <div className="relative aspect-[4/3] w-full rounded-none overflow-hidden shadow-2xl img-zoom-hover">
                <Image
                  src="/images/authentic/alibaba_21.png"
                  alt="Ali Baba Restaurant Interior & Welcoming Hospitality"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
            </FadeReveal>
            
            {/* Small Floating Secondary Image (Taor style) */}
            <div className="hidden sm:block absolute -bottom-10 -right-8 w-60 aspect-square border-8 border-ivory shadow-2xl overflow-hidden img-zoom-hover z-10">
              <FadeReveal direction="right" delay={0.25}>
                <div className="relative w-full aspect-square">
                  <Image
                    src="/images/authentic/alibaba_23.png"
                    alt="Authentic Spices and Ingredients"
                    fill
                    sizes="240px"
                    className="object-cover"
                  />
                </div>
              </FadeReveal>
            </div>

            {/* Badge */}
            <div className="absolute top-6 left-6 bg-espresso-950 text-ivory px-4 py-2 text-[10px] uppercase tracking-[0.25em] border border-gold-400/30 z-10">
              Fresh Local Ingredients
            </div>
          </div>

          {/* Right Column: Narrative Copy & Editorial Quote */}
          <div className="lg:col-span-5 space-y-6">
            <FadeReveal direction="up" delay={0.2}>
              <div className="space-y-4">
                <h3 className="font-serif text-2xl sm:text-3xl text-espresso-900 leading-snug">
                  Where culinary traditions cross the Indian Ocean to meet Thailand&apos;s Andaman coast.
                </h3>
                <p className="text-espresso-700 leading-relaxed text-sm sm:text-base font-light">
                  {restaurantData.description}
                </p>
                <p className="text-espresso-700 leading-relaxed text-sm sm:text-base font-light">
                  {restaurantData.storyParagraph} Whether you are returning from an afternoon exploring Railay beach or craving a hearty plate of tandoori grilled chicken with flaky garlic naan, our kitchen welcomes you with warmth and generous spice bouquets.
                </p>
              </div>

              {/* Highlight Metric / Feature Points */}
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-subtle-light">
                <div>
                  <span className="font-serif text-3xl sm:text-4xl text-espresso-950 block">
                    100%
                  </span>
                  <span className="text-xs uppercase tracking-wider text-espresso-700 font-medium">
                    Fresh Halal Ingredients
                  </span>
                </div>
                <div>
                  <span className="font-serif text-3xl sm:text-4xl text-espresso-950 block">
                    Daily
                  </span>
                  <span className="text-xs uppercase tracking-wider text-espresso-700 font-medium">
                    11 AM – 11 PM Continuous Kitchen
                  </span>
                </div>
              </div>

              {/* Link to Our Story */}
              <div className="pt-4">
                <Link
                  href="/our-story"
                  className="taor-button-outline-dark group inline-flex items-center gap-2"
                >
                  <span>Read Full Story</span>
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
