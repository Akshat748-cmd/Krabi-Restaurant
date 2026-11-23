import Image from "next/image";
import Link from "next/link";
import { Star, ArrowUpRight } from "lucide-react";
import { restaurantData } from "@/data/restaurant";
import FadeReveal from "@/components/animations/FadeReveal";

export default function EditorialStorySection() {
  return (
    <section className="py-24 sm:py-32 bg-ivory-200 text-espresso-850 relative overflow-hidden border-t border-subtle-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Taor 3-star header & Title */}
        <div className="text-center max-w-3xl mx-auto pb-16">
          <FadeReveal direction="up">
            <div className="flex items-center justify-center gap-1.5 text-gold-600 mb-3">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-espresso-950 tracking-tight">
              Seeking adventure in the everyday
            </h2>
            <p className="font-serif italic text-gold-700 text-lg sm:text-xl mt-3">
              {restaurantData.storyHeading}
            </p>
          </FadeReveal>
        </div>

        {/* Asymmetrical Grid (Taor since-block-2 layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Large Editorial Portrait */}
          <div className="lg:col-span-7 relative">
            <FadeReveal direction="up" delay={0.1}>
              <div className="relative aspect-[4/3] w-full overflow-hidden shadow-2xl img-zoom-hover">
                <Image
                  src="/images/authentic/alibaba_21.png"
                  alt="Ali Baba Welcoming Dining Room in Ao Nang"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>

              {/* Floating Since Element (Taor since-block-2) */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 bg-espresso-950 text-ivory p-6 border-4 border-ivory-200 shadow-xl max-w-xs z-10">
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 block font-medium">
                  Since 2018
                </span>
                <p className="font-serif text-lg text-ivory mt-1">
                  Authentic Indian hospitality in the heart of Ao Nang, Krabi.
                </p>
              </div>
            </FadeReveal>
          </div>

          {/* Right Narrative & CTAs */}
          <div className="lg:col-span-5 space-y-6">
            <FadeReveal direction="up" delay={0.2}>
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold-600 font-semibold block">
                About Restaurant
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-espresso-950 leading-snug">
                Traditional Indian restaurant by the Andaman Sea
              </h3>
              <p className="text-sm sm:text-base text-espresso-700 leading-relaxed font-light">
                {restaurantData.description}
              </p>
              <p className="text-sm sm:text-base text-espresso-700 leading-relaxed font-light">
                {restaurantData.storyParagraph}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/our-story"
                  className="taor-button-dark text-xs py-3.5 px-6 inline-flex items-center gap-2 group"
                >
                  <span>Our Story</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <Link
                  href="/menu"
                  className="taor-button-outline-dark text-xs py-3.5 px-6"
                >
                  Explore Menu
                </Link>
              </div>
            </FadeReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
