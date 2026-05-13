# House of Bash — Private Theatre Events Website

A luxury private theatre event booking website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Design System

- **Primary**: Midnight Slate `#091426`
- **Secondary**: Champagne Gold `#775a19`
- **Fonts**: Playfair Display (headings) + Manrope (body)
- **Aesthetic**: Architectural Minimalist Luxury

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, Features, Occasions, Process, Testimonials, CTA |
| `/addons` | Pricing & Add-ons — Base package + interactive selector with floating summary |
| `/gallery` | Gallery — Filterable image grid + cinematic section |
| `/enquire` | Enquiry form with FAQ |

## Animations

- **Scroll Reveal** — Elements fade-up as they enter viewport
- **Hero Parallax** — Background image parallax on scroll
- **Marquee Strip** — Infinite scrolling banner
- **Image Hover** — Grayscale-to-color transitions on cards
- **Staggered Delays** — Sequential entrance animations
- **Counter Shimmer** — Gold shimmer text effects
- **Mobile Menu** — Animated full-screen overlay

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
house-of-bash/
├── app/
│   ├── globals.css          # Global styles + animations
│   ├── layout.tsx           # Root layout with fonts
│   ├── page.tsx             # Home page
│   ├── addons/
│   │   └── page.tsx         # Add-ons & pricing page
│   ├── gallery/
│   │   └── page.tsx         # Gallery page
│   └── enquire/
│       └── page.tsx         # Enquiry form page
├── components/
│   ├── Navbar.tsx           # Responsive navigation with mobile menu
│   ├── Footer.tsx           # Footer with social links
│   └── ScrollReveal.tsx     # Intersection Observer animation wrapper
├── tailwind.config.ts       # Design system tokens
├── next.config.js           # Image domains config
└── tsconfig.json
```

## Customisation

### Colors
Edit `tailwind.config.ts` to update the design system colors.

### Content
All text content is inline in each page file. Update:
- `app/page.tsx` — Home page copy and images
- `app/addons/page.tsx` — Pricing and add-on items
- `app/gallery/page.tsx` — Gallery images and categories
- `app/enquire/page.tsx` — Contact details and FAQ

### Contact Details
Update the phone, email, and address in `app/enquire/page.tsx`.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Material Symbols (Google Fonts)
- **Fonts**: Google Fonts (Playfair Display + Manrope)
- **Animation**: CSS + IntersectionObserver API

---

© 2024 House of Bash. Architectural Minimalist Luxury.
