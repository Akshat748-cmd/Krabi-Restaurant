import Image from "next/image";
import Link from "next/link";
import { Download, ArrowUpRight, FileText } from "lucide-react";
import { restaurantData } from "@/data/restaurant";
import FadeReveal from "@/components/animations/FadeReveal";

export default function MainMenuSection() {
  return (
    <section className="py-24 sm:py-32 bg-ivory text-espresso-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Copy & PDF Downloads */}
          <div className="lg:col-span-6 space-y-6">
            <FadeReveal direction="up">
              <span className="text-[11px] uppercase tracking-[0.3em] text-gold-600 block font-medium">
                À La Carte Selection
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight text-espresso-950 mt-2">
                Main Restaurant Menu
              </h2>
              <p className="text-sm sm:text-base text-espresso-700 leading-relaxed font-light mt-4">
                Explore our full culinary repertoire including authentic North Indian curries, charcoal tandoor flatbreads, coastal seafood biryanis, and traditional desserts. Download our complete printed menu cards for offline viewing.
              </p>

              <div className="pt-6 space-y-3.5">
                <a
                  href={restaurantData.menus.indianPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 bg-white border border-subtle-light hover:border-gold-600 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-espresso-950 text-gold-400 flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-serif text-lg text-espresso-950 group-hover:text-gold-700 transition-colors">
                        Download Indian Menu (PDF)
                      </p>
                      <p className="text-[11px] text-espresso-600">
                        Curries, Tandoori Breads, Biryanis, Appetizers & Desserts
                      </p>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-gold-600 group-hover:translate-y-0.5 transition-transform shrink-0" />
                </a>

                <a
                  href={restaurantData.menus.thaiPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 bg-white border border-subtle-light hover:border-gold-600 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-espresso-950 text-gold-400 flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-serif text-lg text-espresso-950 group-hover:text-gold-700 transition-colors">
                        Download Thai Coastal Menu (PDF)
                      </p>
                      <p className="text-[11px] text-espresso-600">
                        Pad Thai, Tom Yum Goong, Fresh Seafood & Stir Fries
                      </p>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-gold-600 group-hover:translate-y-0.5 transition-transform shrink-0" />
                </a>
              </div>

              <div className="pt-4">
                <Link
                  href="/menu"
                  className="taor-button-dark inline-flex items-center gap-2 group"
                >
                  <span>Browse Online Menu</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </FadeReveal>
          </div>

          {/* Right Column: Editorial Photography (Taor Main Menu image layout) */}
          <div className="lg:col-span-6 relative">
            <FadeReveal direction="up" delay={0.15}>
              <div className="relative aspect-[4/3] w-full overflow-hidden shadow-2xl img-zoom-hover">
                <Image
                  src="/images/dishes/dish_07.png"
                  alt="Ali Baba Main Menu Spiced Curries and Naan"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
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
