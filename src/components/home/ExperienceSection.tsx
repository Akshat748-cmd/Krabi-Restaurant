import Image from "next/image";
import { UtensilsCrossed, ShoppingBag, Users, CheckCircle2 } from "lucide-react";
import { restaurantData } from "@/data/restaurant";

export default function ExperienceSection() {
  const iconMap = {
    UtensilsCrossed: <UtensilsCrossed className="w-6 h-6 text-gold-400" />,
    ShoppingBag: <ShoppingBag className="w-6 h-6 text-gold-400" />,
    Users: <Users className="w-6 h-6 text-gold-400" />,
  };

  return (
    <section className="py-24 sm:py-32 bg-ivory-200 text-espresso-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl pb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] text-gold-600 block font-medium">
            Hospitality & Dining
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight text-espresso-950 mt-2">
            The Ali Baba Dining Experience
          </h2>
          <p className="text-espresso-700 text-base sm:text-lg font-light leading-relaxed mt-4">
            From relaxed candlelit beachside dinners to prompt resort room deliveries and festive family banquets, we cater to every travel occasion in Krabi.
          </p>
        </div>

        {/* 3 Pillar Cards matching Taor Experience layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {restaurantData.services.map((service, idx) => (
            <div
              key={service.title}
              className="bg-ivory border border-subtle-light p-8 sm:p-10 flex flex-col justify-between space-y-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-espresso-950 text-gold-400 inline-block">
                    {iconMap[service.icon as keyof typeof iconMap] || <UtensilsCrossed className="w-6 h-6 text-gold-400" />}
                  </div>
                  <span className="font-serif text-2xl text-espresso-950/30">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-espresso-950">
                  {service.title}
                </h3>

                <p className="text-sm text-espresso-700 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-subtle-light">
                <ul className="space-y-2 text-xs text-espresso-800">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>Halal certified preparation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>Vegetarian & vegan friendly options</span>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Banner Strip */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-espresso-950 text-ivory p-8 sm:p-12">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold-400 block font-medium">
              Private Dining & Catering
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl text-ivory">
              Planning a Celebration in Krabi?
            </h3>
            <p className="text-xs sm:text-sm text-ivory/70 leading-relaxed font-light">
              We curate custom buffet banquets and private event catering for weddings, tour groups, and milestone celebrations across Ao Nang, Klong Muang, and Krabi Town.
            </p>
            <div className="pt-2">
              <a
                href={restaurantData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="taor-button-gold text-xs py-3 px-6"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>

          <div className="relative aspect-[16/10] w-full overflow-hidden border border-white/10 img-zoom-hover">
            <Image
              src="/images/authentic/alibaba_22.png"
              alt="Cozy Evening Dining at Ali Baba Krabi"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
