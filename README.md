# Ali Baba Restaurant — Luxury Indian Dining (Ao Nang, Krabi)

A production-ready international luxury restaurant website crafted with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **GSAP/Lenis** motion design, faithfully recreating the design language, layout sophistication, and interactive experience of the **Taor** Webflow template.

---

## 🌟 Design Direction & Taor Blueprint Fidelity

- **Aesthetic**: *Luxury Indian Dining × Tropical Krabi*
- **Palette**:
  - Warm Ivory (`#FBF9F5`)
  - Deep Espresso / Charcoal (`#12100E`, `#0B0A09`)
  - Muted Antique Gold (`#C5A875`, `#D5B888`)
  - Deep Burgundy (`#3E101B`)
- **Typography Scale**:
  - Display & Headings: `Cormorant Garamond` (classic serif editorial elegance)
  - Body & Interface: `Plus Jakarta Sans` (refined readability)
- **Zero AI-Slop Guarantee**: Strictly avoids generic gold circles, random decorative SVGs, excessive Mughal motifs, or heavy black borders. Design elegance emerges from editorial proportions, typography contrast, authentic photography, and purposeful transitions.

---

## 📱 Responsive-First Support

Every component is engineered and tested across the full viewport spectrum:
- **320px – 374px**: Small Mobile
- **375px – 430px**: Standard Mobile
- **431px – 767px**: Large Mobile
- **768px – 1023px**: Tablet
- **1024px – 1279px**: Small Laptop
- **1280px – 1439px**: Standard Laptop
- **1440px – 1919px**: Desktop
- **1920px+**: Large Desktop / Widescreen

### Mobile Ergonomics:
- Fixed bottom mobile action bar (Direct Call, WhatsApp, Reserve Table, Google Maps Directions)
- Smooth full-screen mobile navigation with animated hamburger trigger
- Touch-friendly category sliders, responsive grids, and lightbox touch navigation

---

## 🍽️ Verified Restaurant Information

- **Brand**: Ali Baba Restaurant
- **Tagline**: *"Authentic Indian Tastes in Krabi"*
- **Location**: 693, Moo 2, Ao Nang, Mueang Krabi District, Krabi 81180, Thailand
- **Hours**: 11:00 AM – 11:00 PM Daily (Live kitchen status calculated in real time using `Asia/Bangkok` ICT timezone)
- **Phone**: `+66 659561887` (`+66 65 956 1887`)
- **Email**: `hi@krabialibaba.com`
- **WhatsApp Concierge**: `https://wa.me/66659561887`
- **Menus**:
  - [Primary Indian Menu PDF](https://drive.google.com/file/d/1I5uTbGHeAQ6v5gtxGE8T-KfRtb0A7ryl/view?usp=sharing)
  - [Primary Thai Menu PDF](https://drive.google.com/file/d/1k3Ov9s1giWLNd6LLa-0JeyAjC2k-GQfc/view?usp=sharing)
- **Signature Dishes**:
  - *Butter Chicken*: Creamy tomato sauce with tender chicken pieces
  - *Paneer Tikka*: Grilled cottage cheese marinated in spices and charred in tandoor
  - *Lamb Rogan*: Slow-cooked lamb in spiced curry sauce with Kashmiri degi mirch
  - *Garlic Naan*: Soft flatbread brushed with garlic butter and baked fresh against clay oven
  - *Chana Masala*: Spicy chickpeas simmered in tangy tomato and dry mango sauce
  - *Mango Lassi*: Sweet yogurt drink with fresh tropical mango pulp

---

## 🛠️ Project Structure

```
d:\Ali baba Krabi\
├── public/
│   └── images/
│       └── authentic/        # 24 authentic scraped restaurant & food photographs
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with fonts, metadata, and ClientShell
│   │   ├── page.tsx          # Homepage (Sections 01 - 10)
│   │   ├── globals.css       # Design tokens, typography, and Taor button styles
│   │   ├── not-found.tsx     # Elegant 404 page
│   │   ├── menu/page.tsx     # Interactive menu with search, dietary filters & layout toggle
│   │   ├── our-story/page.tsx# Editorial heritage, philosophy & Krabi connection
│   │   ├── gallery/page.tsx  # Fullscreen lightbox gallery with category filters
│   │   ├── book-a-table/page.tsx # Table booking page with instant WhatsApp routing
│   │   └── contact/page.tsx  # Hours, live Bangkok status, contact form & Google Maps
│   ├── components/
│   │   ├── animations/       # FadeReveal and scroll interaction utilities
│   │   ├── home/             # Hero, Intro, Signature Dishes, Experience, Cuisine, Reviews, etc.
│   │   └── layout/           # Header, Footer, Preloader, AsideDrawer, MobileActionBar
│   ├── data/
│   │   ├── restaurant.ts     # Verified restaurant metadata, hours, contact, and menus
│   │   ├── menu.ts           # All menu items, categories, prices, and allergen labels
│   │   ├── gallery.ts        # Categorized authentic imagery inventory
│   │   └── reviews.ts        # Verified guest reviews from Google and TripAdvisor
│   ├── lib/
│   │   └── utils.ts          # Bangkok live status, WhatsApp generator, class merger
│   └── types/
│       └── index.ts          # TypeScript interfaces
├── next.config.mjs
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 🚀 Running the Project

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Test
```bash
npm run build
npm run start
```
All routes are pre-rendered statically for high performance and instant TTFB.
