import type { Metadata, Viewport } from "next";
import "./globals.css";
import ClientShell from "@/components/layout/ClientShell";

export const viewport: Viewport = {
  themeColor: "#12100E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Ali Baba Restaurant | Luxury Indian Dining in Ao Nang, Krabi",
  description:
    "Experience authentic Indian cuisine crafted with rich spices and local passion in Ao Nang, Krabi, Thailand. Savor Butter Chicken, slow-cooked Lamb Rogan, freshly baked Garlic Naan and tropical hospitality.",
  keywords: [
    "Ali Baba Krabi",
    "Indian Restaurant Ao Nang",
    "Best Indian Food Krabi",
    "Halal Indian Krabi",
    "Ao Nang dining",
    "Butter Chicken Krabi",
  ],
  openGraph: {
    title: "Ali Baba Restaurant | Authentic Indian Tastes in Krabi",
    description: "Savor rich spices and vibrant dishes crafted with love in Ao Nang, Krabi, Thailand.",
    url: "https://krabialibaba.com",
    siteName: "Ali Baba Restaurant Krabi",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-ivory text-espresso-850 selection:bg-burgundy-900 selection:text-ivory antialiased">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
