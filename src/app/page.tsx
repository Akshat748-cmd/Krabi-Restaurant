import HeroSection from "@/components/home/HeroSection";
import ExploreSection from "@/components/home/ExploreSection";
import MainMenuSection from "@/components/home/MainMenuSection";
import EditorialStorySection from "@/components/home/EditorialStorySection";
import CuisineSection from "@/components/home/CuisineSection";
import GalleryPreviewSection from "@/components/home/GalleryPreviewSection";
import ReservationSection from "@/components/home/ReservationSection";
import EatSection from "@/components/home/EatSection";
import DrinksSection from "@/components/home/DrinksSection";
import InformationSection from "@/components/home/InformationSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Master Hero Section (Taor-Fidelity Editorial Hero with Authentic Restaurant Interior Ambiance) */}
      <HeroSection />

      {/* 2. Explore section (6 categories) */}
      <ExploreSection />

      {/* 3. Main Menu section (with PDF downloads) */}
      <MainMenuSection />

      {/* 4. Editorial Story section ("Seeking adventure in the everyday") */}
      <EditorialStorySection />

      {/* 5. Cuisine section (Fresh / Tasty / Local 3-part layout) */}
      <CuisineSection />

      {/* 6. Gallery preview (image-led preview with lightbox) */}
      <GalleryPreviewSection />

      {/* 7. Reservation section (Book a table form with WhatsApp concierge) */}
      <ReservationSection />

      {/* 8. Eat section (Editorial curry & tandoor feature) */}
      <EatSection />

      {/* 9. Bar / Drinks section (Lassis, Karak Chai, Fresh coconuts) */}
      <DrinksSection />

      {/* 10. Information section (When, Where, Who, Eat, Drink) */}
      <InformationSection />
    </>
  );
}
