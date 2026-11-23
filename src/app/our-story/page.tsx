import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Heart, Sparkles, ShieldCheck, Clock, MapPin } from "lucide-react";
import { restaurantData } from "@/data/restaurant";

export default function OurStoryPage() {
  return (
    <div className="bg-ivory text-espresso-850 pt-28 pb-32">
      {/* Editorial Header */}
      <section className="bg-espresso-950 text-ivory py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/authentic/alibaba_21.png"
            alt="Ali Baba Krabi Atmosphere"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[11px] uppercase tracking-[0.35em] text-gold-400 block font-medium">
            Our Heritage & Philosophy
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl tracking-tight text-ivory">
            {restaurantData.storyHeading}
          </h1>
          <p className="text-ivory/70 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            {restaurantData.storyParagraph}
          </p>
        </div>
      </section>

      {/* Main Story Narrative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold-600 font-medium block">
              The Journey to Ao Nang
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-espresso-950 leading-tight">
              Honoring Generational Recipes with Andaman Freshness
            </h2>
            <div className="space-y-4 text-espresso-700 text-sm sm:text-base leading-relaxed font-light">
              <p>
                {restaurantData.description}
              </p>
              <p>
                When we established Ali Baba in Ao Nang, Krabi, our vision was simple yet uncompromising: to provide travelers and locals with the true taste of North India—fragrant with whole cardamom, cinnamon bark, roasted cumin, and slow-braised gravies, without taking shortcuts.
              </p>
              <p>
                Our tandoor oven runs hot from morning until night, creating light, puffy garlic naans and sizzling skewers of paneer and marinated chicken. We take pride in our 100% Halal culinary kitchen, offering welcoming hospitality to visitors from all corners of the globe.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-6">
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-espresso-950 block">2018</span>
                <span className="text-xs uppercase tracking-wider text-espresso-700">Founded in Krabi</span>
              </div>
              <div className="h-10 w-[1px] bg-subtle-light" />
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-espresso-950 block">100%</span>
                <span className="text-xs uppercase tracking-wider text-espresso-700">Halal Certified</span>
              </div>
              <div className="h-10 w-[1px] bg-subtle-light" />
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-espresso-950 block">Daily</span>
                <span className="text-xs uppercase tracking-wider text-espresso-700">Continuous Kitchen</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden shadow-2xl img-zoom-hover">
              <Image
                src="/images/authentic/alibaba_20.png"
                alt="Dining Room Ambiance at Ali Baba"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Values (Taor style) */}
      <section className="bg-ivory-200 py-20 border-y border-subtle-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto pb-12">
            <h3 className="font-serif text-3xl sm:text-4xl text-espresso-950">
              Our Guiding Principles
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-ivory p-8 border border-subtle-light space-y-4">
              <div className="w-10 h-10 bg-espresso-950 text-gold-400 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-2xl text-espresso-950">Whole Spices Only</h4>
              <p className="text-xs sm:text-sm text-espresso-700 leading-relaxed font-light">
                We grind our own garam masala, roast cumin seeds over open flame, and never rely on artificial powders or synthetic thickeners.
              </p>
            </div>

            <div className="bg-ivory p-8 border border-subtle-light space-y-4">
              <div className="w-10 h-10 bg-espresso-950 text-gold-400 flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-2xl text-espresso-950">Warm Hospitality</h4>
              <p className="text-xs sm:text-sm text-espresso-700 leading-relaxed font-light">
                &ldquo;Atithi Devo Bhava&rdquo; — Guest is God. Every traveler walking through our doors in Ao Nang receives warm, attentive, personalized service.
              </p>
            </div>

            <div className="bg-ivory p-8 border border-subtle-light space-y-4">
              <div className="w-10 h-10 bg-espresso-950 text-gold-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-2xl text-espresso-950">Inclusive Dining</h4>
              <p className="text-xs sm:text-sm text-espresso-700 leading-relaxed font-light">
                Abundant pure vegetarian, vegan, and Jain-friendly offerings alongside tender halal meats and fresh coastal Andaman seafood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA to Book */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h3 className="font-serif text-3xl sm:text-5xl text-espresso-950 mb-6">
          Come Experience the Magic in Person
        </h3>
        <p className="text-espresso-700 text-sm sm:text-base max-w-xl mx-auto font-light mb-8">
          Located on the vibrant main avenue of Ao Nang, minutes away from the beach.
        </p>
        <Link href="/book-a-table" className="taor-button-gold px-10 py-4 inline-flex items-center gap-2">
          <span>Reserve Your Table Online</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
