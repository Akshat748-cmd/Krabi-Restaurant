import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-espresso-950 text-ivory flex flex-col items-center justify-center px-4 text-center">
      <span className="text-xs uppercase tracking-[0.35em] text-gold-400 block font-medium mb-3">
        Page Not Found • 404
      </span>
      <h1 className="font-serif text-5xl sm:text-7xl text-ivory mb-4">
        Lost in Krabi?
      </h1>
      <p className="text-ivory/70 text-sm sm:text-base max-w-md mx-auto mb-8 font-light">
        The page you are looking for doesn&apos;t exist or has moved. Return to our dining room or explore the menu.
      </p>
      <Link href="/" className="taor-button-gold inline-flex items-center gap-2">
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Homepage</span>
      </Link>
    </div>
  );
}
