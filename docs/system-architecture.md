# System Architecture — GachCloud Landing Page

## Architecture Overview

GachCloud landing page uses a **hybrid static + island** architecture optimized for performance and minimal JavaScript.

```
┌─────────────────────────────────────────────────────────┐
│         Astro 5 (Static Site Generator)                │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │         base-layout.astro (HTML Shell)          │   │
│  │  ┌──────────┐  ┌────────────┐  ┌─────────────┐ │   │
│  │  │  Navbar  │  │   Pages    │  │   Footer    │ │   │
│  │  └──────────┘  └────────────┘  └─────────────┘ │   │
│  │  ┌──────────────────────────────────────────┐  │   │
│  │  │     Back-to-Top (Scroll Listener)        │  │   │
│  │  └──────────────────────────────────────────┘  │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │    React Islands (client:media, Mobile Only)    │   │
│  │  ┌────────────────────────────────────────────┐ │   │
│  │  │  mobile-menu.tsx                          │ │   │
│  │  │  (Hamburger + Slide-down menu)            │ │   │
│  │  └────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │        Tailwind CSS v4 (Styling)               │   │
│  │  • Custom theme variables in global.css        │   │
│  │  • Responsive grid, flexbox utilities          │   │
│  │  • Animation: slide-down (200ms)               │   │
│  │  • Prefers-reduced-motion support              │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

## Component Hierarchy

### Layout Layer
**base-layout.astro** (wraps all pages)
- Manages document structure (html, head, body)
- Injects global styles
- Positions navbar, main content, footer, back-to-top
- Accepts props: `title`, `description`

### Navigation Layer
**navbar.astro**
- Desktop nav (5 links, 2 action buttons)
- Mobile hamburger button (React island)
- Uses data from `src/data/nav-links.ts`
- Fixed positioning, backdrop blur

**mobile-menu.tsx** (React island, hydrated on mobile)
- State: isOpen boolean
- Listeners: Escape key, outside click, scroll prevention
- Renders same navigation structure as desktop

### Content Layer (Pages)
**src/pages/*.astro**
- Wrapped by base-layout
- Use UI primitives (button, card, section-header)
- To be filled in Phase 3+

### Footer Layer
**footer.astro**
- 5-column responsive grid
- Company info + social icons
- Quick Links, Game Hosting, Company, Legal categories
- Contact bar (email, Discord, copyright)
- Data from `src/data/footer-links.ts`

### Utility Layer (UI Primitives)
1. **button.astro** — 3 variants (primary, secondary, outline), 3 sizes (sm, md, lg)
2. **card.astro** — Surface container with optional hover glow
3. **section-header.astro** — Centered badge + title + subtitle

### Scroll Behaviors
**back-to-top.astro**
- Fixed button (bottom-right corner)
- Visibility: triggered at scroll > 400px
- Animation: opacity + translateY (Tailwind transitions)
- Click: smooth scroll to top

## Data Flow

```
src/data/
├── nav-links.ts
│   ├── navItems[] → navbar.astro (desktop display)
│   └── actionLinks → navbar.astro + mobile-menu.tsx
│
└── footer-links.ts
    ├── quickLinks, gameHostingLinks, companyLinks, legalLinks
    ├── socialLinks → footer.astro (inline SVG icons)
    └── contactInfo → footer.astro (email, discord, description)
```

**Data to Component Flow:**
1. Data files export TypeScript interfaces & const arrays
2. Components import data as static imports
3. .map() over arrays to render list items
4. External links marked with target="_blank" + rel="noopener noreferrer"

## Styling Architecture

### Theme Variables (global.css)
```css
@theme {
  --color-bg-primary: #0a0a0a;
  --color-bg-secondary: #111111;
  --color-surface: #1a1a1a;
  --color-border: #2a2a2a;
  --color-brand-red: #dc2626;
  --color-brand-orange: #ea580c;
  --color-brand-glow: #ef4444;
  --color-text-primary: #ffffff;
  --color-text-secondary: #a3a3a3;
  --font-heading: 'Space Grotesk', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
}
```

### Responsive Breakpoints
- **sm:** 640px
- **md:** 768px
- **lg:** 1024px (desktop nav threshold)
- **xl:** 1280px (max container width)

### Color Usage
| Element | Color | Usage |
|---------|-------|-------|
| Background | bg-primary #0a0a0a | Page background |
| Secondary BG | bg-secondary #111111 | Footer background |
| Surfaces | surface #1a1a1a | Cards, buttons, menu |
| Borders | border #2a2a2a | Dividers, outlines |
| Brand Primary | brand-red #dc2626 | Buttons, badges, hover |
| Brand Secondary | brand-orange #ea580c | Gradients |
| Text | text-primary #ffffff | Main content |
| Text Muted | text-secondary #a3a3a3 | Secondary content |

### Typography
- **Headings:** Space Grotesk (500, 600, 700 weights)
- **Body:** Inter (400, 500, 600, 700 weights)
- **Font Loading:** Non-blocking (preload + print media swap)

## Interaction Flow

### Mobile Menu (user perspective)
```
User clicks hamburger
  ↓
MobileMenu state → isOpen = true
  ↓
Render dropdown panel (slide-down animation)
  ↓
User can:
  • Click link → navigate + close menu
  • Press Escape → close menu
  • Click outside → close menu
  ↓
On click: body.overflow = 'hidden' (prevent scroll)
On close: body.overflow = '' (restore scroll)
```

### Back-to-Top (scroll-driven)
```
Page loads
  ↓
Back-to-top button hidden (opacity-0, pointer-events-none)
  ↓
User scrolls > 400px
  ↓
Scroll event listener triggers
  ↓
Button: opacity-100, pointer-events-auto, translateY(0)
  ↓
User clicks button
  ↓
window.scrollTo({ top: 0, behavior: 'smooth' })
```

## Asset Management

### Favicons (public/)
- `favicon-32x32.png` — Modern browsers
- `favicon-16x16.png` — Legacy browsers, tabs
- `apple-touch-icon.png` — iOS home screen

### Images
- `logogachcloud.png` — Logo (navbar, footer)

### Web Manifest
- `site.webmanifest` — PWA metadata (display: standalone, app name, icon set)

## Performance Considerations

### Optimizations Implemented
1. **Astro Static Generation:** Pages pre-rendered at build time (no server JS)
2. **Island Hydration:** Only mobile menu hydrated on mobile devices (client:media)
3. **CSS Scoping:** Tailwind only includes used utilities
4. **Font Strategy:** Preload + print media swap prevents FOUT
5. **SVG Inlining:** Footer social icons embedded (no HTTP requests)
6. **Passive Scroll:** Back-to-top uses passive: true listener (non-blocking)

### No Performance Overhead
- ✅ No unused framework code (Astro ships 0 JS by default)
- ✅ Mobile menu hydration only on small screens
- ✅ Inline styles for animations (no animation library)
- ✅ Semantic HTML (no extra divs)

## Accessibility Features

| Feature | Implementation |
|---------|-----------------|
| Semantic HTML | nav, main, footer, h1/h2 |
| ARIA Labels | Hamburger button, back-to-top button |
| aria-expanded | Mobile menu toggle state |
| Focus Rings | All interactive elements |
| External Links | rel="noopener noreferrer" |
| Keyboard Nav | Escape key closes mobile menu |
| Motion Preference | prefers-reduced-motion disables animations |
| Language | lang="vi" on html element |

## File Size & Dependencies

### Runtime Dependencies
- **Astro 5** — Static generation engine
- **Tailwind CSS v4** — Utility CSS framework
- **React** — Only for mobile menu (island hydration)
- **Lucide React** — Icons (mobile menu only)

### Build-Time Only
- Typescript, ESLint, Prettier (dev dependencies)

## Security Considerations

1. **XSS Prevention:** Astro template syntax escapes by default
2. **External Links:** All external links use `target="_blank"` + `rel="noopener noreferrer"`
3. **CSRF:** Not applicable (static site, no form submissions in Phase 2)
4. **Content Security:** No inline scripts except passive scroll listener

## Deployment Architecture

```
src/ → (Astro build) → dist/
  ↓
  dist/
  ├── index.html (home page, static)
  ├── favicon-*.png
  ├── logogachcloud.png
  ├── site.webmanifest
  └── _astro/ (hashed CSS + JS bundles)

Deploy to: Static hosting (Vercel, Netlify, GitHub Pages)
  → No server required
  → Global CDN edge caching
  → 0 cold starts
```

## Scalability Path (Phase 3+)

### Content Expansion
- Add more pages (minecraft.astro, dedicated.astro, support.astro)
- Reuse base-layout, navbar, footer
- Compose with UI primitives

### New Interactive Islands
- Hero slider (React)
- Pricing calculator (React + state)
- Comparison tables (React)

### Data Management
- Move to Markdown + frontmatter for dynamic content
- Consider CMS if content becomes frequent

### Styling Extensions
- Add more Tailwind plugins as needed
- Keep global.css under 100 lines
- New animations as keyframes in global.css

## Related Documents
- See `codebase-summary.md` for detailed component reference
- See `code-standards.md` for development patterns and naming conventions
- See `development-roadmap.md` for Phase 3+ plans
