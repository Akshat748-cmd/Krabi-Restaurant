"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, Calendar, Users, Clock, Mail, User, Info } from "lucide-react";
import { restaurantData } from "@/data/restaurant";
import { createWhatsAppBookingUrl } from "@/lib/utils";
import FadeReveal from "@/components/animations/FadeReveal";

export default function ReservationSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: new Date().toISOString().split("T")[0],
    time: "19:00",
    guests: "2",
    restaurant: "Ali Baba Restaurant, Ao Nang",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      alert("Please provide both your name and email address.");
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
        occasion: `Table at ${formData.restaurant}`,
        specialRequests: formData.message ? `${formData.message} (Email: ${formData.email})` : `(Email: ${formData.email})`,
      });
      window.open(url, "_blank", "noopener,noreferrer");
    }, 450);
  };

  return (
    <section id="reservation" className="py-24 sm:py-32 bg-ivory text-espresso-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeReveal direction="up">
          <div className="max-w-3xl pb-16">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold-600 block font-medium">
              Reservation
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight text-espresso-950 mt-2">
              Book a table
            </h2>
            <p className="text-sm sm:text-base text-espresso-700 leading-relaxed font-light mt-4">
              Secure your table for lunch or dinner. Submissions create an instant enquiry formatted for our restaurant floor manager on WhatsApp.
            </p>
          </div>
        </FadeReveal>

        {/* Taor booking-sec 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Form Block */}
          <div className="lg:col-span-7 bg-white border border-subtle-light p-8 sm:p-12 shadow-xl">
            <h3 className="font-serif text-2xl sm:text-3xl text-espresso-950 mb-2">
              Reservation form
            </h3>
            <p className="text-xs text-espresso-600 mb-6 font-light">
              Fill out your dining details below.
            </p>

            {submitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-300 text-center space-y-4">
                <h4 className="font-serif text-2xl text-emerald-950">Thank you!</h4>
                <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                  Your reservation enquiry has been compiled. WhatsApp is opening to send your details directly to our Ao Nang floor manager.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="taor-button-dark text-xs py-3 px-6"
                  >
                    Make Another Booking
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-espresso-800 mb-2 font-medium flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-gold-600" /> Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-ivory-50 border border-espresso-950/20 px-4 py-2.5 text-sm text-espresso-950 focus:outline-none focus:border-gold-600"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-espresso-800 mb-2 font-medium flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-gold-600" /> Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-ivory-50 border border-espresso-950/20 px-4 py-2.5 text-sm text-espresso-950 focus:outline-none focus:border-gold-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Date */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-espresso-800 mb-2 font-medium flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gold-600" /> Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-ivory-50 border border-espresso-950/20 px-3 py-2 text-sm text-espresso-950 focus:outline-none focus:border-gold-600"
                    />
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-espresso-800 mb-2 font-medium flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gold-600" /> Time *
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

                  {/* Guests */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-espresso-800 mb-2 font-medium flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-gold-600" /> Guests *
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
                </div>

                {/* Restaurant selection (Taor restaurant select adapted to Ali Baba) */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-espresso-800 mb-2 font-medium">
                    Restaurant Location
                  </label>
                  <input
                    type="text"
                    readOnly
                    value="Ali Baba Restaurant — Ao Nang, Krabi, Thailand"
                    className="w-full bg-ivory-100 border border-espresso-950/20 px-4 py-2.5 text-xs text-espresso-800 font-medium cursor-not-allowed"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-espresso-800 mb-2 font-medium">
                    Message / Special Requests
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Jain / Vegan diet, quiet table, baby high chair..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-ivory-50 border border-espresso-950/20 px-4 py-2.5 text-sm text-espresso-950 placeholder-espresso-400 focus:outline-none focus:border-gold-600"
                  />
                </div>

                {/* Disclosure Note */}
                <div className="flex items-start gap-2 text-[11px] text-espresso-600 leading-relaxed">
                  <Info className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                  <span>
                    Submitting this form prepares a prefilled WhatsApp message to <strong>+66 65 956 1887</strong>. A reservation is confirmed once our staff responds.
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
          </div>

          {/* Right Column: Atmospheric Editorial Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl img-zoom-hover">
              <Image
                src="/images/authentic/alibaba_20.png"
                alt="Ali Baba Evening Dining Atmosphere"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
            <div className="mt-4 p-4 bg-espresso-950 text-ivory text-xs space-y-1">
              <p className="font-serif text-base text-gold-300">Continuous Kitchen Daily</p>
              <p className="text-ivory/70 font-light">
                {restaurantData.hours.display} • 693, Moo 2, Ao Nang, Krabi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
