"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, MapPin, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 1.03 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.3 : 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const handleOpenReservation = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-reservation"));
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center bg-espresso-950 text-ivory pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28 overflow-hidden">
      {/* Authentic Ali Baba Restaurant Interior Photography Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/hero/alibaba-restaurant-interior.jpg"
          alt="Ali Baba Restaurant Ao Nang Interior Dining Room with Warm Lanterns and Tropical Twilight"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45 sm:opacity-55 scale-105 transition-transform duration-1000 ease-out"
        />

        {/* Cinematic Multi-Stop Gradients for Absolute Text Readability & Mood */}
        <div className="absolute inset-0 bg-gradient-to-r from-espresso-950 via-espresso-950/85 to-espresso-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-transparent to-espresso-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(197,168,117,0.2)_0%,transparent_65%)]" />
      </div>

      {/* Subtle Warm Ambient Glow (Taor Atmosphere) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-gradient-to-b from-burgundy-950/25 via-gold-950/15 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Editorial Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8">
            {/* 1. Eyebrow */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-gold-400" />
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.32em] text-gold-400 font-medium font-sans">
                AUTHENTIC INDIAN CUISINE · AO NANG, KRABI
              </p>
            </motion.div>

            {/* 2. Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] text-ivory tracking-tight leading-[1.08] font-normal"
            >
              A Taste of India,
              <span className="block font-serif italic text-gold-300 font-light mt-1">
                In the Heart of Krabi.
              </span>
            </motion.h1>

            {/* 3. Supporting Copy */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-ivory/85 font-sans font-light leading-relaxed max-w-xl"
            >
              Discover authentic Indian flavours, traditional spices and freshly prepared favourites at Ali Baba Restaurant in Ao Nang.
            </motion.p>

            {/* 4. Action Buttons (Primary & Secondary CTAs) */}
            <motion.div
              variants={itemVariants}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
            >
              {/* Primary CTA */}
              <Link
                href="/menu"
                className="taor-button-gold text-xs py-3.5 px-8 inline-flex items-center justify-center gap-2.5 group shadow-xl hover:shadow-gold-500/10"
              >
                <span>EXPLORE OUR MENU</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              {/* Secondary CTA */}
              <button
                type="button"
                onClick={handleOpenReservation}
                className="taor-button-outline text-xs py-3.5 px-8 inline-flex items-center justify-center gap-2.5 group bg-espresso-950/40 backdrop-blur-sm"
              >
                <Calendar className="w-3.5 h-3.5 text-gold-400" />
                <span>BOOK A TABLE</span>
              </button>
            </motion.div>

            {/* 5. Small Supporting Detail */}
            <motion.div
              variants={itemVariants}
              className="pt-4 flex flex-wrap items-center gap-2 sm:gap-3 text-ivory/60 text-[10px] sm:text-[11px] font-sans tracking-[0.25em] uppercase"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                <span>AO NANG · KRABI · THAILAND</span>
              </div>
              <span className="text-gold-400/40 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 font-medium">OPEN DAILY 11:00 AM – 11:00 PM</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dominant Authentic Signature Platter Photograph */}
          <motion.div
            variants={imageVariants}
            className="lg:col-span-5 relative w-full"
          >
            <div className="relative aspect-[4/5] max-w-[460px] lg:max-w-none mx-auto w-full overflow-hidden shadow-2xl bg-espresso-900 border border-gold-400/20 group">
              {/* Genuine Signature Tandoori Platter Image */}
              <Image
                src="/images/authentic/alibaba_20.png"
                alt="Ali Baba Authentic Signature Charcoal Tandoori Platter and Butter Chicken in Ao Nang, Krabi"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              {/* Refined Gradient Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-espresso-950/85 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Editorial Caption Tag */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-4 sm:right-6 flex items-end justify-between pointer-events-none">
                <div>
                  <div className="flex items-center gap-1.5 text-gold-400 mb-1">
                    <Sparkles className="w-3 h-3" />
                    <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-medium">
                      Authentic Signature Dish
                    </span>
                  </div>
                  <p className="font-serif italic text-lg sm:text-xl text-ivory">
                    Charcoal Tandoori & Butter Chicken
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full border border-gold-400/30 bg-espresso-950/70 backdrop-blur-sm flex items-center justify-center text-gold-400 text-sm font-serif">
                  ✦
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
