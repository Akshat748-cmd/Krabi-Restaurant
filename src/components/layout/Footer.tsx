import Link from "next/link";
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowUpRight } from "lucide-react";
import { restaurantData } from "@/data/restaurant";

export default function Footer() {
  return (
    <footer className="bg-espresso-950 text-ivory border-t border-white/10 pt-20 pb-28 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Who */}
          <div className="space-y-4">
            <span className="font-serif text-3xl tracking-[0.18em] text-ivory uppercase block">
              ALI BABA
            </span>
            <span className="text-[10px] uppercase tracking-[0.35em] text-gold-400 block font-medium">
              AO NANG • KRABI • THAILAND
            </span>
            <p className="text-sm text-ivory/70 leading-relaxed pt-2 font-light">
              Bringing the vibrant spices and rich culinary heritage of India to the tropical shores of Ao Nang, Krabi. Handcrafted curries, fresh tandoor flatbreads, and authentic hospitality.
            </p>
            <div className="pt-2 flex items-center gap-4 text-gold-400 text-xs tracking-wider">
              <a
                href={restaurantData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ivory transition-colors flex items-center gap-1"
              >
                Facebook <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={restaurantData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ivory transition-colors flex items-center gap-1"
              >
                Instagram <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={restaurantData.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ivory transition-colors flex items-center gap-1"
              >
                TikTok <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={restaurantData.social.x}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ivory transition-colors flex items-center gap-1"
              >
                X <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation & Menus (Eat & Drink) */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">
              Eat & Drink
            </h3>
            <ul className="space-y-2.5 text-sm text-ivory/80 font-light">
              <li>
                <Link href="/" className="hover:text-gold-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-gold-300 transition-colors">
                  Food Menu
                </Link>
              </li>
              <li>
                <Link href="/drinks" className="hover:text-gold-300 transition-colors">
                  Drinks & Refreshments
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="hover:text-gold-300 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold-300 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/book-a-table" className="hover:text-gold-300 transition-colors">
                  Book a Table
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: When (Hours) */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">
              When
            </h3>
            <div className="space-y-2 text-sm text-ivory/80">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-ivory">Open Daily</p>
                  <p className="text-xs text-ivory/70">11:00 AM – 11:00 PM (Daily continuous kitchen)</p>
                </div>
              </div>
              <div className="pt-2">
                <p className="text-xs text-gold-300">
                  Dine-In • Takeaway • Beach Delivery • Private Banquets
                </p>
              </div>
              <div className="pt-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Kitchen in Ao Nang
                </span>
              </div>
            </div>
          </div>

          {/* Col 4: Where & Find Us */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">
              Where & Find Us
            </h3>
            <div className="space-y-3 text-sm text-ivory/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <p className="text-xs text-ivory/70 leading-relaxed font-light">
                  {restaurantData.location.address}
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a
                  href={`tel:${restaurantData.contact.phone}`}
                  className="hover:text-gold-300 transition-colors text-xs font-mono"
                >
                  {restaurantData.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a
                  href={`mailto:${restaurantData.contact.email}`}
                  className="hover:text-gold-300 transition-colors text-xs"
                >
                  {restaurantData.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={restaurantData.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors text-xs font-medium"
                >
                  WhatsApp: +66 65 956 1887
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/50">
          <p>
            &copy; {new Date().getFullYear()} Ali Baba Restaurant Ao Nang, Krabi. All rights reserved.
          </p>
          <p className="text-[11px] text-ivory/40">
            Inspired by Taor Design Architecture • Next.js &amp; React
          </p>
        </div>
      </div>
    </footer>
  );
}
