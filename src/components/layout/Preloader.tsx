"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [percent, setPercent] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    // Check if user already saw preloader in this session
    const seen = sessionStorage.getItem("alibaba_preloader_seen");
    if (seen) {
      setRemoved(true);
      return;
    }

    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsDone(true), 300);
          setTimeout(() => {
            setRemoved(true);
            sessionStorage.setItem("alibaba_preloader_seen", "true");
          }, 1100);
          return 100;
        }
        const step = Math.floor(Math.random() * 14) + 6;
        return Math.min(prev + step, 100);
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  if (removed) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-espresso-950 px-6 py-12 transition-transform duration-800 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isDone ? "-translate-y-full pointer-events-none" : "translate-y-0"
      }`}
    >
      <div className="w-full flex justify-between items-center text-gold-400 text-xs tracking-widest uppercase">
        <span>Ao Nang, Krabi</span>
        <span>Est. 2018</span>
      </div>

      <div className="text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.35em] text-gold-400/80 block">
          Luxury Indian Dining
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl tracking-wider text-ivory">
          ALI BABA
        </h1>
        <p className="font-serif italic text-gold-300 text-base md:text-lg">
          Authentic Indian Tastes in Krabi
        </p>
      </div>

      <div className="w-full max-w-xs space-y-3">
        <div className="flex justify-between items-center text-xs tracking-widest text-ivory/60 font-mono">
          <span>EXPERIENCE</span>
          <span>{percent}%</span>
        </div>
        <div className="h-[2px] w-full bg-white/10 overflow-hidden">
          <div
            className="h-full bg-gold-400 transition-all duration-150 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
