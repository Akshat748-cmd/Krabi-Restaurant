"use client";

import { Phone, MessageCircle, Calendar, MapPin } from "lucide-react";
import { restaurantData } from "@/data/restaurant";

interface MobileActionBarProps {
  onOpenReservation: () => void;
}

export default function MobileActionBar({ onOpenReservation }: MobileActionBarProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-40 bg-espresso-950/95 backdrop-blur-md border-t border-white/10 px-3 py-2 flex items-center justify-around shadow-2xl">
      <a
        href={`tel:${restaurantData.contact.phone}`}
        className="flex flex-col items-center gap-1 text-ivory/80 hover:text-gold-300 transition-colors py-1 px-2"
      >
        <Phone className="w-4 h-4 text-gold-400" />
        <span className="text-[10px] uppercase tracking-wider font-medium">Call</span>
      </a>

      <a
        href={restaurantData.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 text-ivory/80 hover:text-emerald-400 transition-colors py-1 px-2"
      >
        <MessageCircle className="w-4 h-4 text-emerald-400" />
        <span className="text-[10px] uppercase tracking-wider font-medium">WhatsApp</span>
      </a>

      <button
        onClick={onOpenReservation}
        className="flex items-center gap-1.5 bg-gold-400 text-espresso-950 font-semibold px-4 py-2 rounded text-xs uppercase tracking-wider"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Book Table</span>
      </button>

      <a
        href={restaurantData.location.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 text-ivory/80 hover:text-gold-300 transition-colors py-1 px-2"
      >
        <MapPin className="w-4 h-4 text-gold-400" />
        <span className="text-[10px] uppercase tracking-wider font-medium">Map</span>
      </a>
    </div>
  );
}
