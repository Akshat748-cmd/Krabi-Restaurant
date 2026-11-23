"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, Users, Clock, MessageCircle, Sparkles, MapPin, Phone, Mail, Info } from "lucide-react";
import { restaurantData } from "@/data/restaurant";
import { createWhatsAppBookingUrl } from "@/lib/utils";
import FadeReveal from "@/components/animations/FadeReveal";

export default function BookATablePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "2",
    date: new Date().toISOString().split("T")[0],
    time: "19:00",
    restaurant: "Ali Baba Restaurant — Ao Nang, Krabi",
    occasion: "Dinner",
    specialRequests: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      alert("Please enter your name and email address.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      const url = createWhatsAppBookingUrl({
        name: formData.name,
        guests: formData.guests,
        date: formData.date,
        time: formData.time,
        occasion: formData.occasion,
        specialRequests: formData.specialRequests ? `${formData.specialRequests} (Email: ${formData.email})` : `(Email: ${formData.email})`,
      });
      window.open(url, "_blank", "noopener,noreferrer");
    }, 400);
  };

  return (
    <div className="bg-ivory text-espresso-850 pt-28 pb-32">
      {/* Hero Banner */}
      <section className="bg-espresso-950 text-ivory py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-[11px] uppercase tracking-[0.35em] text-gold-400 block font-medium">
            Table Reservations
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl tracking-tight text-ivory">
            Book a Table
          </h1>
          <p className="text-ivory/70 text-sm sm:text-base max-w-xl mx-auto font-light">
            Reserve your dining experience in advance. Enquiries are confirmed instantly with our restaurant floor manager on WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Reservation Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Booking Guidelines Left */}
          <div className="lg:col-span-5 space-y-8">
            <FadeReveal direction="up">
              <span className="text-[11px] uppercase tracking-[0.3em] text-gold-600 font-medium block">
                Booking Guidelines
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-espresso-950 mt-1">
                A Warm Welcome Awaits
              </h2>
              <p className="text-espresso-700 text-sm leading-relaxed font-light mt-3">
                Whether dining as a couple, with family, or planning a celebratory group feast, we prepare our tables with dedicated care and warm Indian hospitality.
              </p>
            </FadeReveal>

            <FadeReveal direction="up" delay={0.1}>
              <div className="bg-ivory-100 border border-subtle-light p-6 space-y-4 text-xs text-espresso-800">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-espresso-950">Seating Hours</p>
                    <p className="text-espresso-700">{restaurantData.hours.display}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-espresso-950">Grace Period</p>
                    <p className="text-espresso-700">Tables are held for 15 minutes past the reserved seating time.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-espresso-950">Location</p>
                    <p className="text-espresso-700">{restaurantData.location.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-espresso-950">Direct Phone</p>
                    <p className="text-espresso-700 font-mono">{restaurantData.contact.phoneDisplay}</p>
                  </div>
                </div>
              </div>
            </FadeReveal>
          </div>

          {/* Form Right */}
          <div className="lg:col-span-7 bg-white border border-subtle-light p-8 sm:p-12 shadow-xl">
            <FadeReveal direction="up" delay={0.15}>
              <h3 className="font-serif text-2xl sm:text-3xl text-espresso-950 mb-2">
                Reservation form
              </h3>
              <p className="text-xs text-espresso-600 mb-6 font-light">
                Please complete your reservation details.
              </p>

              {submitted ? (
                <div className="p-8 bg-emerald-50 border border-emerald-300 text-center space-y-4">
                  <h4 className="font-serif text-2xl text-emerald-950">Thank you!</h4>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                    Your reservation details have been compiled for WhatsApp. Our Ao Nang floor manager will confirm your table shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="taor-button-dark text-xs py-3 px-6 mt-2"
                  >
                    Submit Another Booking
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-espresso-800 mb-2 font-medium">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Liam Hemsworth"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-ivory-50 border border-espresso-950/20 px-4 py-2.5 text-sm text-espresso-950 focus:outline-none focus:border-gold-600"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-espresso-800 mb-2 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. liam@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-ivory-50 border border-espresso-950/20 px-4 py-2.5 text-sm text-espresso-950 focus:outline-none focus:border-gold-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-espresso-800 mb-2 font-medium flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-gold-600" /> Guests
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full bg-ivory-50 border border-espresso-950/20 px-3 py-2.5 text-sm text-espresso-950 focus:outline-none focus:border-gold-600"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, "9+ (Banquet)"].map((n) => (
                          <option key={n} value={n}>
                            {n} {typeof n === "number" && n === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-espresso-800 mb-2 font-medium flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-gold-600" /> Date
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-ivory-50 border border-espresso-950/20 px-3 py-2 text-sm text-espresso-950 focus:outline-none focus:border-gold-600"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-espresso-800 mb-2 font-medium flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-gold-600" /> Time
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full bg-ivory-50 border border-espresso-950/20 px-3 py-2.5 text-sm text-espresso-950 focus:outline-none focus:border-gold-600"
                      >
                        {["11:30", "12:30", "13:30", "15:00", "17:30", "18:30", "19:00", "19:30", "20:00", "20:30", "21:30"].map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-espresso-800 mb-2 font-medium">
                      Restaurant
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={formData.restaurant}
                      className="w-full bg-ivory-100 border border-espresso-950/20 px-4 py-2.5 text-xs text-espresso-800 font-medium cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-espresso-800 mb-2 font-medium">
                      Occasion
                    </label>
                    <select
                      value={formData.occasion}
                      onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                      className="w-full bg-ivory-50 border border-espresso-950/20 px-3 py-2.5 text-sm text-espresso-950 focus:outline-none focus:border-gold-600"
                    >
                      <option value="Dinner">Casual Dinner</option>
                      <option value="Lunch">Lunch</option>
                      <option value="Birthday">Birthday</option>
                      <option value="Anniversary">Anniversary</option>
                      <option value="Celebration">Group Celebration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-espresso-800 mb-2 font-medium">
                      Message / Special Requests
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Jain / Vegan diet, quiet corner table, baby high chair..."
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      className="w-full bg-ivory-50 border border-espresso-950/20 px-4 py-2.5 text-sm text-espresso-950 placeholder-espresso-400 focus:outline-none focus:border-gold-600"
                    />
                  </div>

                  <div className="flex items-start gap-2 text-[11px] text-espresso-600 leading-relaxed">
                    <Info className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                    <span>
                      Notice: Submitting opens WhatsApp to dispatch your reservation directly to our floor manager. A reservation is confirmed upon response.
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full taor-button-dark py-4 text-center flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>{loading ? "Preparing WhatsApp Message..." : "Submit Table Reservation"}</span>
                  </button>
                </form>
              )}
            </FadeReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
