"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Calendar, ArrowUpRight } from "lucide-react";
import { restaurantData } from "@/data/restaurant";
import { getBangkokStatus } from "@/lib/utils";

interface HeaderProps {
  onOpenAside: () => void;
}

export default function Header({ onOpenAside }: HeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [status, setStatus] = useState({ isOpen: true, text: "Open Daily", nextTime: "11:00 AM – 11:00 PM", localTimeStr: "" });

  useEffect(() => {
    setStatus(getBangkokStatus());
    const interval = setInterval(() => {
      setStatus(getBangkokStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Drinks", href: "/drinks" },
    { label: "Our Story", href: "/our-story" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ${
        isScrolled
          ? "bg-espresso-950/95 backdrop-blur-md py-3.5 shadow-xl border-b border-white/10"
          : "bg-gradient-to-b from-espresso-950/90 via-espresso-950/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Claim (Taor style) */}
          <Link href="/" className="group flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.18em] text-ivory uppercase group-hover:text-gold-300 transition-colors">
              ALI BABA
            </span>
            <span className="text-[9px] uppercase tracking-[0.38em] text-gold-400 font-sans font-medium">
              AO NANG • KRABI
            </span>
          </Link>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors relative py-1 ${
                    active ? "text-gold-400" : "text-ivory/80 hover:text-ivory"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gold-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Controls */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Live Bangkok Time Indicator */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-ivory/80">
              <span
                className={`w-2 h-2 rounded-full ${
                  status.isOpen ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
                }`}
              />
              <span>{status.text}</span>
              <span className="text-ivory/30">|</span>
              <span className="text-gold-400 font-mono text-[10px]">{status.localTimeStr.split(" ")[0]} ICT</span>
            </div>

            {/* Direct Phone quicklink (Subnav) */}
            <a
              href={`tel:${restaurantData.contact.phone}`}
              className="hidden sm:flex items-center gap-1.5 text-xs text-ivory/70 hover:text-gold-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span className="font-mono text-[11px]">{restaurantData.contact.phoneDisplay}</span>
            </a>

            {/* Book a Table Action Button (Desktop & Tablet) */}
            <div className="hidden md:block">
              <Link
                href="/book-a-table"
                className="taor-button-gold text-xs py-2.5 px-5 flex items-center gap-1.5"
              >
                <Calendar className="w-3 h-3" />
                <span>Book a Table</span>
              </Link>
            </div>

            {/* Animated Aside Menu Trigger (Taor menu-button) */}
            <button
              onClick={onOpenAside}
              aria-label="Open navigation drawer"
              className="w-10 h-10 rounded-full border border-white/20 hover:border-gold-400 flex flex-col items-center justify-center gap-1 group transition-colors"
            >
              <span className="w-4 h-[1.5px] bg-ivory group-hover:bg-gold-400 transition-colors" />
              <span className="w-4 h-[1.5px] bg-ivory group-hover:bg-gold-400 transition-colors" />
              <span className="w-2.5 h-[1.5px] bg-gold-400 group-hover:w-4 transition-all" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
