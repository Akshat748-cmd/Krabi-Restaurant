"use client";

import { useEffect, useRef, ReactNode } from "react";

interface FadeRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export default function FadeReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: FadeRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translate(0, 0)";
          }, delay * 1000);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [delay]);

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return "translateY(28px)";
      case "down":
        return "translateY(-28px)";
      case "left":
        return "translateX(28px)";
      case "right":
        return "translateX(-28px)";
      default:
        return "none";
    }
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: getInitialTransform(),
        transition: "opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={className}
    >
      {children}
    </div>
  );
}
