"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Calendar, Clock, Users, MessageCircle, MapPin, Sparkles, ArrowUpRight } from "lucide-react";
import { restaurantData } from "@/data/restaurant";
import { createWhatsAppBookingUrl } from "@/lib/utils";

interface AsideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AsideDrawer({ isOpen, onClose }: AsideDrawerProps) {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<"nav" | "reserve">("nav");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "2",
    date: new Date().toISOString().split("T")[0],
    time: "19:00",
    occasion: "Dinner",
    specialRequests: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Handle escape key and scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  // Reset tab when path changes
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Drinks", href: "/drinks" },
    { label: "Our Story", href: "/our-story" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
    { label: "Book a Table", href: "/book-a-table" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert("Please enter your name");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      const whatsappUrl = createWhatsAppBookingUrl({
        name: formData.name,
        guests: formData.guests,
        date: formData.date,
        time: formData.time,
        occasion: formData.occasion,
        specialRequests: formData.specialRequests ? `${formData.specialRequests} (Email: ${formData.email})` : `(Email: ${formData.email})`,
      });
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }, 400);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Dark backdrop overlay with blur (allows subtle background visibility like Taor) */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-out"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over Aside Menu Panel (Taor aside-reservation structure) */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation and Reservation Menu"
        className="relative z-10 w-full max-w-lg sm:max-w-xl bg-espresso-950 border-l border-white/10 text-ivory flex flex-col h-full shadow-2xl overflow-y-auto"
      >
        {/* Aside Header */}
        <div className="sticky top-0 bg-espresso-950/95 backdrop-blur z-20 flex items-center justify-between px-6 py-5 sm:px-8 sm:py-6 border-b border-white/10 shrink-0">
          <div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-gold-400 block font-medium">
              Ali Baba • Ao Nang, Krabi
            </span>
            <div className="flex items-center gap-5 mt-2">
              <button
                onClick={() => setActiveTab("nav")}
                className={`text-xs uppercase tracking-[0.2em] pb-1 border-b-2 font-medium transition-colors ${
                  activeTab === "nav" ? "border-gold-400 text-ivory" : "border-transparent text-ivory/50 hover:text-ivory"
                }`}
              >
                Menu & Links
              </button>
              <button
                onClick={() => setActiveTab("reserve")}
                className={`text-xs uppercase tracking-[0.2em] pb-1 border-b-2 font-medium transition-colors ${
                  activeTab === "reserve" ? "border-gold-400 text-ivory" : "border-transparent text-ivory/50 hover:text-ivory"
                }`}
              >
                Reserve a Table
              </button>
            </div>
          </div>

          {/* Taor-style circular close button (aside-close) */}
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-ivory/80 hover:text-white hover:border-gold-400 hover:rotate-90 transition-all duration-300 shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6 overflow-y-auto">
          {activeTab === "nav" ? (
            /* Navigation List with Staggered Visual Rhythm */
            <div className="space-y-5">
              <nav className="flex flex-col space-y-1 sm:space-y-1.5">
                {navItems.map((item, idx) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-center justify-between py-1.5 sm:py-2 border-b border-white/5 hover:border-white/20 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-xs text-gold-400/60">0{idx + 1}</span>
                        <span
                          className={`font-serif text-2xl sm:text-3xl tracking-tight transition-colors ${
                            isActive ? "text-gold-400 italic" : "text-ivory group-hover:text-gold-300"
                          }`}
                        >
                          {item.label}
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-ivory/30 group-hover:text-gold-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                  );
                })}
              </nav>

              {/* Quick Table Booking Action inside Nav */}
              <div className="pt-2">
                <button
                  onClick={() => setActiveTab("reserve")}
                  className="w-full taor-button-gold py-3 text-center flex items-center justify-center gap-2 text-xs tracking-wider"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve a Table</span>
                </button>
              </div>
            </div>
          ) : (
            /* Table Reservation Form */
            <div className="space-y-6">
              <div className="bg-espresso-900 p-4 border border-gold-400/20 text-xs text-ivory/80 leading-relaxed flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <p>
                  Reservations are routed directly to our Ao Nang floor manager via WhatsApp concierge for immediate table assignment.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-emerald-950/40 border border-emerald-500/30 text-center space-y-4">
                  <h3 className="font-serif text-3xl text-emerald-300">Enquiry Prepared!</h3>
                  <p className="text-xs text-ivory/80 leading-relaxed">
                    Your reservation details have been formatted for our WhatsApp concierge. Please send the message on WhatsApp to finalize your booking with our staff.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      onClose();
                    }}
                    className="taor-button-gold text-xs py-3 px-6"
                  >
                    Close Menu
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-ivory/70 mb-1.5 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Richard Hendricks"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-espresso-900 border border-white/15 px-4 py-2.5 text-sm text-ivory placeholder-ivory/30 focus:border-gold-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-ivory/70 mb-1.5 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. richard@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-espresso-900 border border-white/15 px-4 py-2.5 text-sm text-ivory placeholder-ivory/30 focus:border-gold-400 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-ivory/70 mb-1.5 font-medium flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-gold-400" /> Guests
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full bg-espresso-900 border border-white/15 px-3 py-2.5 text-sm text-ivory focus:border-gold-400 focus:outline-none"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, "9+ (Group)"].map((n) => (
                          <option key={n} value={n}>
                            {n} {typeof n === "number" && n === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-ivory/70 mb-1.5 font-medium flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-gold-400" /> Date
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-espresso-900 border border-white/15 px-3 py-2 text-sm text-ivory focus:border-gold-400 focus:outline-none"
                      >
                      </input>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-ivory/70 mb-1.5 font-medium flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-gold-400" /> Time
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full bg-espresso-900 border border-white/15 px-3 py-2.5 text-sm text-ivory focus:border-gold-400 focus:outline-none"
                      >
                        {["11:30", "12:30", "13:30", "15:00", "17:30", "18:30", "19:00", "19:30", "20:00", "20:30", "21:30"].map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-ivory/70 mb-1.5 font-medium">
                        Occasion
                      </label>
                      <select
                        value={formData.occasion}
                        onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                        className="w-full bg-espresso-900 border border-white/15 px-3 py-2.5 text-sm text-ivory focus:border-gold-400 focus:outline-none"
                      >
                        <option value="Dinner">Dinner</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Celebration">Celebration</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-ivory/70 mb-1.5 font-medium">
                      Special Requests / Notes
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Jain vegetarian, quiet table, baby high chair..."
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      className="w-full bg-espresso-900 border border-white/15 px-4 py-2 text-sm text-ivory placeholder-ivory/30 focus:border-gold-400 focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full taor-button-gold py-4 text-center flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-espresso-950" />
                    <span>{isSubmitting ? "Routing to WhatsApp..." : "Confirm via WhatsApp Concierge"}</span>
                  </button>
                </form>
              )}
            </div>
          )}

          {/* Aside Footer Info */}
          <div className="pt-6 border-t border-white/10 space-y-3 text-xs text-ivory/60">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
              <span>{restaurantData.location.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold-400 shrink-0" />
              <span>Kitchen Active Daily: 11:00 AM – 11:00 PM (Asia/Bangkok)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
