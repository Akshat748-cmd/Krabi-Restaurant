"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { restaurantData } from "@/data/restaurant";

export default function WelcomeSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Play video muted on mount if permitted
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-espresso-950 text-ivory pt-28 pb-12 overflow-hidden">
      {/* Background Video with Poster Fallback */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero/restaurant-hero-poster.jpg"
          onLoadedData={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-35" : "opacity-0"
          }`}
        >
          <source src="/videos/restaurant-hero.mp4" type="video/mp4" />
        </video>

        {/* Fallback Poster Image */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            videoLoaded ? "opacity-0 pointer-events-none" : "opacity-35"
          }`}
        >
          <Image
            src="/images/hero/restaurant-hero-poster.jpg"
            alt="Ali Baba Restaurant Interior Ao Nang"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/60 to-espresso-950/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(18,16,14,0.65)_100%)]" />
      </div>

      {/* Top Welcome Label */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-gold-400 font-medium">
            Welcome to Ali Baba • Ao Nang, Krabi
          </span>
        </div>
      </div>

      {/* Center Headline & Content (Taor Hero Section 1) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12 md:py-24">
        <div className="max-w-4xl space-y-6">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory tracking-tight leading-[1.05]">
            {restaurantData.tagline}
          </h1>

          <p className="text-base sm:text-xl text-ivory/80 font-light max-w-2xl leading-relaxed">
            {restaurantData.subTagline} Experience masterfully spiced slow-cooked curries, charcoal-fired tandoor flatbreads, and authentic coastal warmth right on the Andaman shoreline.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              href="#explore"
              className="taor-button-gold text-xs sm:text-sm tracking-[0.2em] px-8 py-4 flex items-center gap-2 group"
            >
              <span>Explore Cuisine</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Link>

            <Link
              href="/book-a-table"
              className="taor-button-outline text-xs sm:text-sm tracking-[0.2em] px-8 py-4 flex items-center gap-2 group"
            >
              <span>Reserve a Table</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="border-t border-white/10 pt-6 flex items-center justify-between text-xs text-ivory/60">
          <span className="uppercase tracking-widest text-[10px]">693, Moo 2, Ao Nang, Krabi</span>
          <a
            href="#explore"
            className="flex items-center gap-2 uppercase tracking-widest hover:text-gold-300 transition-colors"
          >
            <span>Scroll Down</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
