"use client";

import { useState, useEffect } from "react";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import Preloader from "@/components/layout/Preloader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AsideDrawer from "@/components/layout/AsideDrawer";
import MobileActionBar from "@/components/layout/MobileActionBar";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsAsideOpen(true);
    window.addEventListener("open-reservation", handleOpen);
    window.addEventListener("open-aside", handleOpen);
    return () => {
      window.removeEventListener("open-reservation", handleOpen);
      window.removeEventListener("open-aside", handleOpen);
    };
  }, []);

  return (
    <SmoothScrollProvider>
      <Preloader />
      <Header onOpenAside={() => setIsAsideOpen(true)} />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <AsideDrawer
        isOpen={isAsideOpen}
        onClose={() => setIsAsideOpen(false)}
      />
      <MobileActionBar onOpenReservation={() => setIsAsideOpen(true)} />
    </SmoothScrollProvider>
  );
}
