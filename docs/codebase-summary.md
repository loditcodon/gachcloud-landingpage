# GachCloud Landing Page — Codebase Summary

## Project Overview
GachCloud is a modern Minecraft hosting landing page built with Astro 5, Tailwind CSS v4, and React. The site targets Vietnamese users with a dark-themed, performance-optimized design.

## Technology Stack
- **Framework:** Astro 5 (static site generation + selective island hydration)
- **Styling:** Tailwind CSS v4 with custom theme variables
- **Interactivity:** React (client-side only for mobile menu)
- **Icons:** Lucide React + inline SVGs
- **Fonts:** Google Fonts (Space Grotesk, Inter) with optimized non-blocking loading

## Directory Structure

```
src/
├── layouts/
│   └── base-layout.astro         # HTML shell with nav, footer, back-to-top
├── components/
│   ├── navbar.astro               # Sticky desktop nav
│   ├── footer.astro               # 5-column footer grid
│   ├── back-to-top.astro          # Scroll-triggered button
│   ├── ui/
│   │   ├── button.astro           # 3-variant button component
│   │   ├── card.astro             # Card with optional hover glow
│   │   └── section-header.astro   # Badge + title + subtitle
│   └── react/
│       └── mobile-menu.tsx        # Hamburger menu (React island)
├── data/
│   ├── nav-links.ts               # Navigation and action button links
│   └── footer-links.ts            # Footer link organization
├── pages/
│   └── index.astro                # Home page
├── styles/
│   └── global.css                 # Tailwind + animations + accessibility
└── public/
    ├── favicon-*.png              # Multi-size favicons
    ├── apple-touch-icon.png
    ├── logogachcloud.png
    └── site.webmanifest           # PWA manifest
```

## Phase 2 Implementation (Layout & Shared Components)

### Components Implemented

#### 1. **base-layout.astro**
The root HTML template for all pages. Includes:
- Meta tags (charset, viewport, description)
- Favicon set (32x32, 16x16, Apple touch icon)
- Non-blocking Google Fonts (Space Grotesk + Inter)
- Fixed navbar + spacer
- Main slot for page content
- Footer + back-to-top

**Key Features:**
- Responsive meta viewport
- Vietnamese language (`lang="vi"`)
- Optimized font loading (preload + print media swap)
- Props: `title` and `description` (defaults provided)

#### 2. **navbar.astro**
Sticky header with responsive navigation.

**Desktop (lg+):**
- Logo + brand name
- 5 nav items (Home, Game Hosting, Dedicated, Support, Documentation)
- 2 action buttons (Game Panel, Login)

**Mobile (< lg):**
- Logo only (text hidden)
- Hamburger menu (React island)

**Features:**
- Fixed positioning with backdrop blur
- External links open in new tab with `rel="noopener noreferrer"`
- Navigation data from `src/data/nav-links.ts`

#### 3. **mobile-menu.tsx**
React island for mobile hamburger menu (client-only).

**Features:**
- Controlled state (open/close)
- Close on Escape key or outside click
- Prevent body scroll when open
- Slide-down animation (200ms)
- Dark theme with border styling
- Same nav items + action buttons as desktop

#### 4. **footer.astro**
Responsive footer with 5 columns of links.

**Structure:**
- Company info + social icons (span 2 cols on mobile, 1 on desktop)
- Quick Links, Game Hosting, Company Info, Legal Links (1 col each)

**Social Icons:** Inline SVGs (Facebook, Discord, TikTok)

**Contact Bar:**
- Email link
- Discord link
- Copyright notice (dynamic year)

#### 5. **UI Primitives**

##### **button.astro**
Reusable button component.
- **Variants:** primary (gradient), secondary (surface), outline
- **Sizes:** sm, md, lg
- **Props:** Can render as `<a>` or `<button>` via `href` prop
- **Styles:** Focus ring, hover brightness, shadow

##### **card.astro**
Container component with optional hover effect.
- **Props:** `hover` boolean, custom `class`
- **Hover:** Border color shift + red glow shadow

##### **section-header.astro**
Header for content sections.
- **Props:** Badge text (optional), title (required), subtitle (optional)
- **Layout:** Centered badge → title (h2) → subtitle
- **Styling:** Red badge with 10% opacity background

#### 6. **back-to-top.astro**
Fixed button that appears after scrolling 400px.

**Behavior:**
- Opacity + translateY animation (transition via Tailwind)
- Click scrolls to top (smooth behavior)
- Scroll event listener (passive: true)
- Aria label in Vietnamese

### Styling

**global.css:**
- Tailwind v4 imports with custom theme variables
- Color palette (dark theme: bg-primary #0a0a0a, brand-red #dc2626)
- Typography defaults (Space Grotesk for headings, Inter for body)
- Slide-down animation (keyframe, 200ms ease-out)
- Respects `prefers-reduced-motion` (disables all animations)

**Design Tokens:**
- Background: Primary (#0a0a0a), Secondary (#111111), Surface (#1a1a1a)
- Borders: #2a2a2a
- Text: Primary white, Secondary gray (#a3a3a3)
- Brand: Red (#dc2626), Orange (#ea580c), Glow (#ef4444)

### Data Layer

**nav-links.ts:**
- `NavItem` interface (name, href, icon)
- `navItems[]` — 5 main navigation links
- `actionLinks` — Game Panel + Login URLs

**footer-links.ts:**
- Organized into categories (quick, gameHosting, company, legal)
- Social links with icon labels (Facebook, Discord, TikTok)
- Contact info (email, discord, company description)

### Accessibility

- Semantic HTML (nav, main, footer, h1/h2)
- ARIA labels on buttons (hamburger, back-to-top)
- `aria-expanded` on mobile menu button
- Focus ring styling on buttons
- Respects `prefers-reduced-motion` user preference
- External links marked with `rel="noopener noreferrer"`

### Performance Optimizations

1. **Font Loading:** Preload + print media swap to prevent FOUT
2. **React Island:** Mobile menu only hydrated on mobile (`client:media`)
3. **Inline SVGs:** Footer social icons avoid icon library overhead
4. **Tailwind Scoping:** Only CSS for used utilities
5. **Passive Scroll Listener:** Back-to-top scroll event doesn't block rendering

## Key Architectural Decisions

1. **Static-First with Targeted Hydration:** Astro renders everything static; React only for interactive mobile menu
2. **No Icon Library for Static Components:** Footer uses inline SVGs, navbar uses Lucide only in React island
3. **Data-Driven Navigation:** Links centralized in `src/data/` for easy updates
4. **Reusable Primitives:** UI components (button, card, section-header) designed for composition
5. **Non-Blocking Fonts:** Google Fonts loaded via preload + print media trick to prevent layout shifts
6. **Dark Theme:** Custom Tailwind theme with semantic color variables (bg, text, brand, border)

## Next Phase Prep

Phase 3 (Hero & Feature Sections) will:
- Use `base-layout.astro` wrapper
- Leverage `button.astro`, `card.astro`, `section-header.astro`
- Add content sections to `src/pages/index.astro`
- Potentially add more React islands for animated features

## Notes

- All component files use Astro's `.astro` extension (not `.jsx`)
- React components use `.tsx` only when needed (mobile menu)
- Tailwind v4 syntax (`@theme`, `@import "tailwindcss"`)
- Vietnamese language for UI text (nav, buttons, aria labels)
