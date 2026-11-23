"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, ArrowUpRight } from "lucide-react";
import { restaurantData } from "@/data/restaurant";
import { getBangkokStatus } from "@/lib/utils";

export default function ContactPage() {
  const status = getBangkokStatus();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-ivory text-espresso-850 pt-28 pb-32">
      {/* Hero */}
      <section className="bg-espresso-950 text-ivory py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-[11px] uppercase tracking-[0.35em] text-gold-400 block font-medium">
            Get in Touch
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl tracking-tight text-ivory">
            Location & Contact
          </h1>
          <p className="text-ivory/70 text-sm sm:text-base max-w-xl mx-auto font-light">
            Conveniently situated on the bustling main strip of Ao Nang, Mueang Krabi District, Krabi, Thailand.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Contact Details & Hours */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-gold-600 font-medium block">
                Find Us in Ao Nang
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-espresso-950 mt-1">
                Ali Baba Restaurant
              </h2>
            </div>

            {/* Live Status Badge */}
            <div className="p-4 bg-espresso-950 text-ivory border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span
                  className={`w-3 h-3 rounded-full ${
                    status.isOpen ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
                  }`}
                />
                <span className="font-serif text-lg">{status.text}</span>
              </div>
              <span className="text-xs text-gold-400 font-mono">{status.localTimeStr}</span>
            </div>

            <div className="space-y-6 text-sm text-espresso-800">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-gold-600 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-espresso-950">Address</p>
                  <p className="text-espresso-700 leading-relaxed mt-0.5">
                    {restaurantData.location.address}
                  </p>
                  <a
                    href={restaurantData.location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-gold-600 hover:text-espresso-950 mt-2 font-medium"
                  >
                    Open in Google Maps <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-gold-600 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-espresso-950">Opening Hours</p>
                  <p className="text-espresso-700 mt-0.5">{restaurantData.hours.display}</p>
                  <p className="text-xs text-espresso-600">Lunch & Dinner continuous service daily</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-gold-600 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-espresso-950">Phone Number</p>
                  <a
                    href={`tel:${restaurantData.contact.phone}`}
                    className="text-espresso-700 hover:text-gold-600 font-mono mt-0.5 block"
                  >
                    {restaurantData.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-gold-600 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-espresso-950">Email</p>
                  <a
                    href={`mailto:${restaurantData.contact.email}`}
                    className="text-espresso-700 hover:text-gold-600 mt-0.5 block"
                  >
                    {restaurantData.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-espresso-950">Instant WhatsApp Concierge</p>
                  <a
                    href={restaurantData.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:underline mt-0.5 block font-medium"
                  >
                    Chat directly with staff on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7 bg-ivory-50 border border-subtle-light p-8 sm:p-12 shadow-xl">
            <h3 className="font-serif text-2xl sm:text-3xl text-espresso-950 mb-2">
              Send an Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-espresso-700 mb-6 font-light">
              Have questions about catering, group bookings, dietary preferences, or takeaway delivery to your resort?
            </p>

            {formSubmitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <p className="font-serif text-2xl text-emerald-950">Thank You!</p>
                <p className="text-sm text-emerald-800">
                  Your message has been received. Our team will get back to you promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-espresso-800 mb-2 font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jessica Alba"
                      className="w-full bg-white border border-espresso-950/20 px-4 py-3 text-sm text-espresso-950 placeholder-espresso-400 focus:outline-none focus:border-gold-600"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-espresso-800 mb-2 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. jessica@example.com"
                      className="w-full bg-white border border-espresso-950/20 px-4 py-3 text-sm text-espresso-950 placeholder-espresso-400 focus:outline-none focus:border-gold-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-espresso-800 mb-2 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Catering quote / Group booking / Resort delivery"
                    className="w-full bg-white border border-espresso-950/20 px-4 py-3 text-sm text-espresso-950 placeholder-espresso-400 focus:outline-none focus:border-gold-600"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-espresso-800 mb-2 font-medium">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your inquiry here..."
                    className="w-full bg-white border border-espresso-950/20 px-4 py-3 text-sm text-espresso-950 placeholder-espresso-400 focus:outline-none focus:border-gold-600"
                  />
                </div>

                <button
                  type="submit"
                  className="taor-button-dark py-4 px-8 inline-flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Embedded Google Maps Section */}
        <div className="mt-20 border border-subtle-light overflow-hidden shadow-xl">
          <div className="p-4 bg-espresso-950 text-ivory flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest text-gold-400">
              Ao Nang Beach Location Map
            </span>
            <a
              href={restaurantData.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-ivory/80 hover:text-white flex items-center gap-1"
            >
              Get Directions <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="relative aspect-[21/9] min-h-[350px] w-full bg-espresso-900">
            <iframe
              src={restaurantData.location.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ali Baba Restaurant Location in Ao Nang Krabi"
              className="grayscale contrast-125 opacity-90"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
