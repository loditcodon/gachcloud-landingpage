# Project Overview & Product Development Requirements (PDR)

## Project Summary

**GachCloud Landing Page** is a modern, high-performance marketing website for a Minecraft hosting provider. The site targets Vietnamese-speaking users with a dark-themed, mobile-first design emphasizing speed, reliability, and ease of use.

### Key Facts
- **Status:** Phase 2 Complete (Layout & Shared Components)
- **Platform:** Web (responsive, all devices)
- **Language:** Vietnamese UI + English technical content
- **Target Users:** Minecraft server administrators, casual players
- **Primary Goals:** Lead generation, brand awareness, service showcase

### Business Context
GachCloud offers:
1. Minecraft game server hosting (performance-optimized)
2. Dedicated server rentals
3. 24/7 technical support
4. DDoS protection
5. Fast server setup

The landing page drives traffic to:
- Game Panel: https://panel.gachcloud.net (server management)
- Client Area: https://gachcloud.net/clientarea.php (account & billing)
- Documentation: https://docs.gachcloud.net (technical guides)

---

## Phase 2: Layout & Shared Components (COMPLETED)

### Overview
Established the visual and structural foundation of the landing page with reusable components, responsive navigation, and accessibility standards.

### Deliverables

#### 1. Layout System
- **base-layout.astro:** HTML shell with navbar, footer, back-to-top
- Responsive viewport configuration
- Non-blocking Google Fonts (Space Grotesk + Inter)
- Favicon set (32x32, 16x16, Apple touch icon)
- SEO-ready title/description props

#### 2. Navigation Components
- **navbar.astro:** Sticky header with responsive design
  - Desktop: 5 nav links + 2 action buttons
  - Mobile: Hamburger menu (React island)
- **mobile-menu.tsx:** React island with keyboard & click-outside handling
  - Escape key to close
  - Outside click to close
  - Prevent body scroll when open
  - Smooth slide-down animation

#### 3. Footer Component
- **footer.astro:** 5-column responsive grid
  - Company info + social icons (Facebook, Discord, TikTok)
  - 4 link categories: Quick Links, Game Hosting, Company, Legal
  - Contact bar (email, Discord, copyright)

#### 4. UI Primitives
- **button.astro:** 3 variants (primary, secondary, outline), 3 sizes (sm, md, lg)
- **card.astro:** Surface container with optional hover glow effect
- **section-header.astro:** Centered badge + title + subtitle for content sections

#### 5. Utility Components
- **back-to-top.astro:** Scroll-triggered button (appears at 400px scroll)
  - Smooth scroll to top
  - Opacity + translateY animation
  - Passive scroll listener (non-blocking)

#### 6. Styling System
- **global.css:** Tailwind v4 with custom theme variables
  - Dark color palette (bg-primary #0a0a0a)
  - Brand colors (red #dc2626, orange #ea580c)
  - Animations with prefers-reduced-motion support
  - Typography tokens (Space Grotesk + Inter)

#### 7. Data Layer
- **nav-links.ts:** Navigation items + action button URLs
- **footer-links.ts:** Organized footer sections + social links

### Technical Decisions

#### Astro as Framework
- **Rationale:** Static generation by default = 0 JavaScript unless explicitly needed
- **Benefit:** Lightning-fast initial page load, SEO-friendly
- **Trade-off:** Dynamic features require React islands

#### React Islands (Mobile Menu Only)
- **Rationale:** Mobile menu needs state & event handling
- **Hydration:** `client:media="(max-width: 1023px)"` → Only hydrates on mobile
- **Benefit:** Desktop users receive 0 JavaScript
- **Implementation:** Uses React hooks (useState, useRef, useEffect) for clean state management

#### Tailwind CSS v4
- **Rationale:** Utility-first CSS with custom theme variables
- **Decision:** Semantic color tokens (bg-primary, text-secondary, brand-red)
- **Benefit:** Consistent design language, rapid prototyping, easy maintenance
- **Non-blocking Fonts:** Preload + print media swap prevents FOUT

#### Inline SVG Icons
- **Rationale:** Footer social icons embedded directly (no icon library overhead)
- **Benefit:** Zero HTTP requests for icons, inlines with semantic markup
- **Lucide React:** Used only in React island (mobile menu) for consistency

#### Data-Driven Navigation
- **Rationale:** Centralize link management in TypeScript files
- **Benefit:** Single source of truth, type safety, easy updates
- **Pattern:** NavItem interface → map() over arrays in components

### Accessibility Compliance
- ✅ Semantic HTML (nav, main, footer, h1/h2)
- ✅ ARIA labels on interactive elements
- ✅ Focus rings on buttons
- ✅ Keyboard navigation (Escape key closes mobile menu)
- ✅ Prefers-reduced-motion support
- ✅ External links marked with rel="noopener noreferrer"
- ✅ Language declaration (lang="vi")

### Performance Metrics (Target)
- **Lighthouse Performance:** 95+
- **Core Web Vitals:** All green
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1
- **JavaScript Bundle:** < 50KB (gzipped)
- **CSS:** < 20KB (gzipped)

---

## Phase 3: Hero & Feature Sections (PLANNED)

### Overview
Implement primary content sections: hero banner, feature highlights, pricing preview, social proof.

### Requirements
- [ ] Hero section with CTA buttons
- [ ] Feature cards (fast, reliable, support, DDoS protection)
- [ ] Pricing cards (basic, standard, premium tiers)
- [ ] Testimonials/social proof section
- [ ] Call-to-action footer section

### UI Components Needed
- Reuse: button, card, section-header (Phase 2)
- New: slider/carousel (optional), testimonial card

### Data Requirements
- Feature descriptions
- Pricing tiers
- Testimonial quotes + avatars

### Success Criteria
- All sections responsive (mobile, tablet, desktop)
- Page scroll-to-section navigation
- All CTAs link to correct destinations
- Lighthouse score maintained > 90

---

## Phase 4: Integration & Optimization (PLANNED)

### Overview
Connect landing page to backend systems, implement analytics, optimize conversions.

### Requirements
- [ ] Contact form (email submission)
- [ ] Google Analytics integration
- [ ] SEO meta tags (Open Graph, Twitter Card)
- [ ] Sitemap generation
- [ ] 404 page
- [ ] Form validation & error handling

### Backend Integration
- Contact form → Email service (SendGrid or similar)
- Tracking pixels for ad attribution
- UTM parameter handling

---

## Non-Functional Requirements

### Performance
- Static site generation (Astro)
- CSS-in-JS avoided (Tailwind only)
- React islands only where necessary
- Image optimization (WebP, lazy loading Phase 3+)
- CDN-ready (deploy to global edge)

### Security
- Content Security Policy (CSP) headers
- HTTPS only
- No inline scripts except verified (back-to-top)
- XSS prevention via Astro template escaping
- External links: rel="noopener noreferrer"

### Accessibility (WCAG 2.1 Level AA)
- Semantic HTML throughout
- ARIA labels where needed
- Keyboard-navigable (Tab, Enter, Escape)
- Color contrast > 4.5:1 (WCAG AA)
- Prefers-reduced-motion respected

### Scalability
- Component-based architecture allows easy feature additions
- Data files decouple content from markup
- Tailwind utility classes scale to thousands of variants
- TypeScript provides type safety for data flows

### Maintainability
- Clear file organization (layouts → components → pages)
- Consistent naming conventions (PascalCase components, kebab-case files)
- Code comments explain WHY, not WHAT
- Reusable primitives reduce duplication
- Documentation kept in sync with code

### Browser Support
- Modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Mobile: iOS 13+, Android 5+
- No IE11 support (Astro + Tailwind v4)

---

## Architecture Principles

### 1. Static-First
- Prefer pre-rendered HTML over runtime JavaScript
- Only hydrate React when necessary (mobile menu)

### 2. Progressive Enhancement
- Core content accessible without JavaScript
- Enhancements (smooth scroll, animations) layer on top

### 3. Semantic HTML
- Use proper elements (nav, main, footer, h1/h2)
- Avoid div-soup

### 4. Design Tokens
- Single source of truth for colors, fonts, spacing
- Update theme in global.css → cascades everywhere

### 5. Composition > Inheritance
- Build pages from small, focused components
- Components accept props to customize behavior

### 6. Data-Driven
- Content in TypeScript/Markdown, not hardcoded in templates
- Easy to update without touching markup

---

## Success Criteria (Phase 2 Completion)

- ✅ All components render correctly (no console errors)
- ✅ Responsive on mobile, tablet, desktop
- ✅ Lighthouse Performance score > 95
- ✅ All links functional (internal navigation, external services)
- ✅ Mobile menu accessible (keyboard + mouse)
- ✅ Back-to-top button appears/disappears correctly
- ✅ No unused CSS classes
- ✅ Documentation complete and up-to-date

---

## Known Issues & Technical Debt

### None Identified
All Phase 2 requirements met. Code is clean, well-commented, and follows established standards.

---

## Dependencies & Versions

### Runtime
- **Astro 5.x** — SSG framework
- **React 18.x** — UI library (islands only)
- **Tailwind CSS 4.x** — Utility CSS framework
- **Lucide React 0.x** — Icon library (mobile menu only)

### Dev Dependencies
- TypeScript 5.x
- ESLint
- Prettier

### Deployment
- Node.js 18+
- npm or yarn

---

## Rollout Plan

### Hosting
- Deploy to Vercel or Netlify (recommended for Astro)
- Auto-deploy on git push to main
- Preview deployments for pull requests

### Monitoring
- Vercel Analytics (Core Web Vitals)
- Google Analytics (user behavior)
- Error tracking (Sentry optional)

### Rollback
- All deployments reversible via git tag
- 0-second cold start (static hosting)

---

## Team & Ownership

| Role | Owner | Responsibility |
|------|-------|-----------------|
| Design | UI/UX Designer | Component styles, design tokens, user flows |
| Development | Frontend Developer | Component implementation, testing |
| QA | Tester | Functionality, accessibility, performance testing |
| Ops | DevOps Engineer | Deployment, monitoring, infrastructure |
| Docs | Technical Writer | Documentation, onboarding guides |

---

## Timeline & Milestones

| Phase | Duration | Status | Deliverables |
|-------|----------|--------|--------------|
| Phase 1 | Jan 2026 | ✅ Done | Project setup, Astro + Tailwind config |
| Phase 2 | Feb 2026 | ✅ Done | Navigation, footer, UI primitives, styling |
| Phase 3 | Mar 2026 | 📋 Planned | Hero, features, pricing, testimonials |
| Phase 4 | Apr 2026 | 📋 Planned | Forms, analytics, SEO, optimization |
| Launch | May 2026 | 📋 Planned | Production deployment, monitoring |

---

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|-----------|
| Performance degradation from heavy images | Medium | High | Implement lazy loading, optimize image formats |
| Mobile menu interaction issues | Low | Medium | Comprehensive keyboard/accessibility testing |
| Browser compatibility issues | Low | Low | Test across major browsers before launch |
| SEO ranking delays | Low | High | Implement proper meta tags, XML sitemap Phase 4 |

---

## Budget & Resource Allocation

- Development: 80% (implementation)
- Testing: 10% (QA, accessibility)
- Documentation: 5% (guides, API docs)
- Deployment & Ops: 5% (CI/CD, monitoring)

---

## Post-Launch Considerations

### Analytics & Metrics
- Track page performance (Lighthouse, Core Web Vitals)
- User behavior (Google Analytics: scroll depth, CTA clicks)
- Conversion rates (form submissions, panel signups)

### Content Updates
- Monthly blog posts / news updates
- Feature announcements
- Community highlights

### Technical Maintenance
- Dependency updates (npm, Tailwind, Astro)
- Browser compatibility checks
- Performance optimization reviews

### Feature Roadmap
- Client testimonials carousel
- Live server status dashboard
- Knowledge base integration
- Multi-language support (if needed)

---

## Related Documentation
- **Code Standards:** `code-standards.md`
- **System Architecture:** `system-architecture.md`
- **Codebase Summary:** `codebase-summary.md`
- **Development Roadmap:** `development-roadmap.md` (detailed Phase 3-4 specs)
