"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, Calendar, Users, Clock, Sparkles } from "lucide-react";
import { restaurantData } from "@/data/restaurant";
import { createWhatsAppBookingUrl } from "@/lib/utils";

export default function ReservationCtaSection() {
  const [formData, setFormData] = useState({
    name: "",
    guests: "2",
    date: new Date().toISOString().split("T")[0],
    time: "19:00",
    occasion: "Dinner",
    specialRequests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert("Please enter your name");
      return;
    }
    const url = createWhatsAppBookingUrl(formData);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-24 sm:py-32 bg-espresso-950 text-ivory relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/authentic/alibaba_20.png"
          alt="Ali Baba Ao Nang Reservation Background"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/80 to-espresso-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Narrative text */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold-400 block font-medium">
              Direct Reservation Concierge
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight text-ivory">
              Book Your Table at Ali Baba
            </h2>
            <p className="text-ivory/80 text-sm sm:text-base leading-relaxed font-light">
              Secure your evening table for an unforgettable dining experience in Ao Nang. Our reservations are confirmed instantly through our direct WhatsApp concierge.
            </p>

            <div className="space-y-3 pt-4 text-xs text-ivory/70">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Instant reservation routing to floor manager</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Special dietary adjustments honored with pleasure</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Continuous daily kitchen: 11:00 AM – 11:00 PM</span>
              </div>
            </div>
          </div>

          {/* Right: Embedded Form */}
          <div className="lg:col-span-7 bg-espresso-900 border border-white/10 p-8 sm:p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-ivory/70 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Connor"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-espresso-950 border border-white/15 px-4 py-3 text-sm text-ivory placeholder-ivory/30 focus:border-gold-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-ivory/70 mb-2 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-gold-400" />
                    Number of Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-espresso-950 border border-white/15 px-3 py-3 text-sm text-ivory focus:border-gold-400 focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, "9+ (Group Banquet)"].map((num) => (
                      <option key={num} value={num}>
                        {num} {typeof num === "number" && num === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-ivory/70 mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gold-400" />
                    Dining Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-espresso-950 border border-white/15 px-3 py-2.5 text-sm text-ivory focus:border-gold-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-ivory/70 mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-gold-400" />
                    Preferred Time
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-espresso-950 border border-white/15 px-3 py-3 text-sm text-ivory focus:border-gold-400 focus:outline-none"
                  >
                    {["12:00", "13:00", "14:00", "17:30", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"].map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-ivory/70 mb-2">
                    Dining Occasion
                  </label>
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full bg-espresso-950 border border-white/15 px-3 py-3 text-sm text-ivory focus:border-gold-400 focus:outline-none"
                  >
                    <option value="Dinner">Casual Dinner</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Celebration">Birthday / Anniversary</option>
                    <option value="Family">Family Dinner</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-ivory/70 mb-2">
                  Special Notes or Allergies
                </label>
                <input
                  type="text"
                  placeholder="e.g. Jain / Vegan diet, outdoor seating..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full bg-espresso-950 border border-white/15 px-4 py-2.5 text-sm text-ivory placeholder-ivory/30 focus:border-gold-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full taor-button-gold py-4 text-center flex items-center justify-center gap-2 mt-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Reserve via WhatsApp Concierge</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
