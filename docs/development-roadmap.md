# Development Roadmap — GachCloud Landing Page

## Executive Summary

This roadmap outlines the planned development phases from current state (Phase 2 complete) through public launch. Each phase builds on previous foundations, introducing new sections, features, and optimizations.

**Current Status:** Phase 2 Complete (Layout & Shared Components)
**Next Phase:** Phase 3 - Hero & Feature Sections
**Target Launch:** May 2026

---

## Phase 2: Layout & Shared Components (COMPLETED ✅)

**Duration:** January - February 2026
**Status:** Complete

### Completed Deliverables
- HTML layout shell (base-layout.astro)
- Sticky navbar with responsive design
- Mobile hamburger menu (React island)
- Footer with 5 columns of links
- UI primitives: button, card, section-header
- Back-to-top scroll button
- Global styles with Tailwind v4
- Data layer (nav-links, footer-links)

### Key Achievements
- ✅ Zero JavaScript on desktop (static rendering)
- ✅ Mobile menu isolated to React island (hydrated only on mobile)
- ✅ Accessibility standards met (WCAG 2.1 AA)
- ✅ Performance: Lighthouse 95+
- ✅ Comprehensive documentation

### Lessons Learned
- Astro's static-first approach dramatically improves performance
- Island hydration with `client:media` is ideal for responsive UIs
- Data-driven navigation simplifies content management

---

## Phase 3: Hero & Feature Sections (PLANNED 📋)

**Duration:** March 2026
**Effort Estimate:** 3 weeks
**Priority:** High (critical for launch)

### Overview
Implement the main content sections that showcase GachCloud's value proposition. This phase transforms the landing page from a shell into a marketing website with compelling messaging.

### Deliverables

#### 3.1 Hero Section
**File:** `src/pages/sections/hero.astro`

**Requirements:**
- Large headline: "High-Performance Minecraft Hosting for Vietnam"
- Subheading: Secondary message about speed/reliability
- Hero image/video (background or side image)
- Two CTA buttons: "Start Free Trial" + "View Pricing"
- Responsive layout (full-width mobile, 2-column desktop)

**Design Details:**
- Use gradient overlay on image
- Brand red accent for primary CTA
- Animation on page load (fade-in with stagger)
- Mobile: Stack vertically, hide decorative image

**Data Requirements:**
```typescript
interface HeroSection {
  headline: string;
  subheading: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA: { label: string; href: string };
  imageUrl: string;
}
```

**Success Criteria:**
- Loads within LCP < 2.5s
- Converts: CTAs track clicks via analytics
- Mobile: Text readable, buttons tappable (48px min)

#### 3.2 Features Section
**File:** `src/pages/sections/features.astro`

**Requirements:**
- Section header (using section-header.astro): "Why Choose GachCloud?"
- 4-6 feature cards in responsive grid
- Each card has: icon, title, description, link
- Cards use card.astro primitive with hover glow

**Features to Highlight:**
1. Lightning-Fast Servers
2. 24/7 Expert Support
3. Free DDoS Protection
4. Instant Server Setup
5. 99.9% Uptime Guarantee
6. Affordable Pricing

**Design Details:**
- Grid: 1 col mobile, 2 col tablet, 3-4 col desktop
- Icons: Lucide React (consistent with mobile menu)
- Hover: Border color shift + red glow (via card.astro)
- Spacing: 12px gap between cards, 20px padding

**Data Structure:**
```typescript
interface Feature {
  icon: string;  // Lucide icon name
  title: string;
  description: string;
  link?: string;
}

export const features: Feature[] = [
  // 4-6 items
];
```

**Success Criteria:**
- All icons render correctly (Lucide v latest)
- Grid responsive on all breakpoints
- Hover effects visible on desktop/touch devices

#### 3.3 Pricing Section
**File:** `src/pages/sections/pricing.astro`

**Requirements:**
- Section header: "Simple, Transparent Pricing"
- 3 pricing tiers: Basic, Standard, Premium
- Each tier card shows: name, price, player count, features, CTA
- Highlight recommended tier (Standard)
- Comparison table of features (optional, collapsible)

**Tier Structure:**
```typescript
interface PricingTier {
  name: string;
  price: number;
  currency: 'VND' | 'USD';
  billingPeriod: 'month' | 'year';
  playerCount: number;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  isRecommended: boolean;
}
```

**Design Details:**
- Recommended tier: Larger card, accent border (brand red)
- Price display: Large typography, currency symbol smaller
- Features: Bullet points with checkmarks
- CTA: Primary variant for recommended, secondary for others
- Mobile: Stack vertically, all cards same width

**Success Criteria:**
- All prices display correctly (format handling)
- Recommended tier visually distinct
- CTAs redirect to game panel signup

#### 3.4 Testimonials Section
**File:** `src/pages/sections/testimonials.astro`

**Requirements:**
- Section header: "Trusted by Thousands of Gamers"
- 3-4 testimonial cards in carousel or grid
- Each testimonial: quote, author name, player count, avatar
- Navigation: Auto-scroll with manual controls (optional)

**Data Structure:**
```typescript
interface Testimonial {
  quote: string;
  author: string;
  serverCount: number;
  avatarUrl: string;
  socialLink?: string;  // Discord or Twitter
}
```

**Design Details:**
- Cards: Use card.astro with quoted text styling
- Avatar: Circular image, 48x48px
- Quote: Italic, italics in gray (text-secondary)
- Author: Bold, text-primary
- Auto-scroll: 5s per testimonial, pause on hover
- Desktop: 3 columns visible, Mobile: 1 column

**Success Criteria:**
- Testimonials rotate smoothly
- Text properly styled and readable
- Avatars load quickly (optimize images)

#### 3.5 Call-to-Action Footer Section
**File:** `src/pages/sections/cta-footer.astro`

**Requirements:**
- Large headline: "Ready to Host Your Server?"
- Subheading: "Start your free trial today"
- Two large buttons: "Start Free Trial" + "Contact Support"
- Background: Gradient using brand colors

**Design Details:**
- Background: Gradient from brand-red to brand-orange
- Text: White on dark (high contrast)
- Buttons: Size lg, inverted styling (white/border on color bg)
- Spacing: 40px padding top/bottom, centered content
- Mobile: Stack buttons vertically

**Success Criteria:**
- High contrast ratio (WCAG AAA)
- Buttons clearly interactive
- Mobile buttons full width

### New Components Created

#### Component: testimonial-card.astro
```astro
interface Props {
  quote: string;
  author: string;
  serverCount: number;
  avatarUrl: string;
}
```
Renders single testimonial using card.astro wrapper.

#### Component: pricing-card.astro
```astro
interface Props {
  name: string;
  price: number;
  features: string[];
  isRecommended: boolean;
  ctaLabel: string;
  ctaHref: string;
}
```
Renders single pricing tier with optional highlight.

### Reused Components (Phase 2)
- button.astro → All CTAs
- card.astro → Feature cards, testimonial cards, pricing cards
- section-header.astro → Section titles throughout

### Data Files
- `src/data/features.ts` → Features list
- `src/data/pricing.ts` → Pricing tiers
- `src/data/testimonials.ts` → Testimonials
- Update `src/data/nav-links.ts` → Add links to new sections

### Styling Additions (global.css)
- Add keyframes: `@keyframes fade-in-up` (for staggered section entry)
- Add utility: `.text-gradient` (if gradient text used)
- Add media query: `@media (hover: none)` for touch devices (remove hover effects)

### Performance Considerations
- Image optimization: Convert to WebP, add lazy loading (Phase 4)
- Font loading: Fonts already optimized from Phase 2
- CSS: All utilities already in Tailwind, no new CSS needed
- JavaScript: No new islands needed (static rendering)

### Accessibility Additions
- `aria-label` on carousel controls (if auto-scrolling)
- `aria-hidden="true"` on decorative elements
- Proper heading hierarchy (h2 for section headers)
- Focus indicators on all buttons

### QA Checklist
- [ ] All sections responsive (mobile, tablet, desktop)
- [ ] All CTA links tested (no 404s)
- [ ] Images load quickly (lazy loading working)
- [ ] Text readable on all backgrounds
- [ ] Lighthouse score maintained > 90
- [ ] Mobile menu still works over new sections
- [ ] Footer visible and accessible from all sections

### Testing Plan
- Visual regression testing (screenshot comparison)
- Responsive testing (Chrome DevTools, BrowserStack)
- Performance testing (Lighthouse, WebPageTest)
- Accessibility testing (axe DevTools, screen reader)
- Manual testing: Navigation, CTAs, scroll behavior

### Success Metrics (Phase 3)
- Lighthouse Performance: 90+
- LCP: < 2.5s
- Mobile Optimization score: 95+
- All elements visible without horizontal scroll
- All buttons accessible via keyboard
- No console errors or warnings

---

## Phase 4: Integration & Optimization (PLANNED 📋)

**Duration:** April 2026
**Effort Estimate:** 2 weeks
**Priority:** High (required for launch)

### Overview
Connect the landing page to backend services, implement analytics tracking, optimize for search engines and conversions.

### Deliverables

#### 4.1 Contact Form
**Requirements:**
- Form with fields: Name, Email, Subject, Message
- Client-side validation (email format, required fields)
- Server-side validation
- Success/error messages
- CAPTCHA (optional, reCAPTCHA v3)
- Email notification to support@gachcloud.net

**Implementation:**
- Framework: Astro API routes or external service (Formspree, Netlify Forms)
- Styling: Use form.astro component (new)
- Accessibility: Proper labels, error announcements

#### 4.2 Analytics Integration
**Requirements:**
- Google Analytics 4 tracking
- Event tracking: CTA clicks, form submissions, scroll depth
- Conversion tracking: Signup button clicks
- UTM parameter parsing

**Implementation:**
- Add GA4 script to base-layout.astro
- Track events via gtag() calls
- Link UTM params for ad attribution

#### 4.3 SEO Optimization
**Requirements:**
- Meta tags: title, description (dynamic per page)
- Open Graph tags (OG image, title, description)
- Twitter Card tags
- Structured data (JSON-LD): Organization, LocalBusiness
- XML sitemap generation
- robots.txt

**Implementation:**
- Create seo.astro component
- Add schema.org structured data
- Generate sitemap via Astro plugin
- Manual robots.txt

#### 4.4 Additional Pages
**Requirements:**
- 404 page (stylized error page)
- Privacy Policy page
- Terms of Service page
- Sitemap page

**Implementation:**
- Use base-layout.astro
- Reference: company.gachcloud.net for legal text

#### 4.5 Performance Optimization
**Requirements:**
- Image optimization (WebP format, lazy loading)
- Critical CSS extraction
- Code splitting (if needed)
- Cache headers (static assets)

**Implementation:**
- Astro's built-in image optimization
- CloudFlare or CDN caching rules
- Monitor with Lighthouse CI

#### 4.6 Mobile Enhancements
**Requirements:**
- App Web Manifest finalization
- Splash screen (iOS)
- Install banner (Android)

**Implementation:**
- Update site.webmanifest (already created in Phase 2)
- Add theme-color meta tag
- Add apple-status-bar-style

### New Components
- form.astro → Contact form with validation styling
- seo.astro → Reusable SEO meta tags

### Performance Targets
- Lighthouse Performance: 95+
- Core Web Vitals: All green
  - LCP: < 2.5s
  - FID: < 100ms
  - CLS: < 0.1

### Success Metrics
- Form submission rate: > 5% of page visitors
- Conversion tracking: 100+ monthly signups (target)
- Analytics: Real-time tracking of user behavior
- SEO: Indexed by Google within 2 weeks

---

## Phase 5: Pre-Launch QA & Deployment (PLANNED 📋)

**Duration:** Late April 2026
**Effort Estimate:** 1 week
**Priority:** Critical

### Overview
Final testing, bug fixes, deployment preparation, and launch readiness.

### Deliverables

#### 5.1 Cross-Browser Testing
- Chrome, Firefox, Safari, Edge (latest 2 versions)
- iOS Safari (iPhone 12+)
- Android Chrome (Pixel 5+)
- Test on BrowserStack or similar

#### 5.2 Accessibility Audit
- Full WCAG 2.1 AA audit
- Screen reader testing (NVDA, JAWS)
- Keyboard navigation testing
- Color contrast verification

#### 5.3 Performance Audit
- Lighthouse: 95+ on all pages
- WebPageTest: Document complete < 3s
- Core Web Vitals: All green
- Real User Monitoring (RUM) setup

#### 5.4 Security Review
- HTTPS certificate (auto via Vercel/Netlify)
- CSP headers configured
- No console warnings or errors
- No sensitive data in git history

#### 5.5 Content Review
- All copy proofread (Vietnamese + English)
- All links tested (no 404s)
- All images optimized (< 200KB each)
- Brand consistency check

#### 5.6 Deployment Setup
- CI/CD pipeline configured
- Auto-deploy on git push
- Preview deployments for PRs
- Rollback procedure documented

### Success Criteria
- Zero blockers found in QA
- All critical bugs fixed
- Lighthouse green on all pages
- Team sign-off from all roles

---

## Phase 6: Launch & Post-Launch (PLANNED 📋)

**Duration:** May 2026
**Priority:** Critical

### Deliverables

#### 6.1 Soft Launch
- Deploy to staging environment
- Internal testing with team
- Fix any critical issues
- Document findings

#### 6.2 Production Deployment
- Deploy to production (gachcloud.net)
- Monitor error logs
- Track analytics
- Gather user feedback

#### 6.3 Marketing Activation
- Email announcement to existing customers
- Social media posts
- Discord announcement
- Blog post: "New Website Launch"

#### 6.4 Monitoring & Support
- Daily check: Performance metrics
- Weekly: Analytics review
- Monthly: Optimization planning

### Post-Launch Roadmap (Months 2-3)

#### Feature Additions
- Blog section with latest updates
- Knowledge base / FAQ page
- Server status dashboard
- Referral program showcase

#### Content Updates
- Monthly blog posts
- Community highlights
- Server recommendations
- Success stories

#### Optimization
- A/B testing on CTA copy/color
- Form optimization (reduce fields)
- Conversion funnel analysis
- SEO ranking improvements

---

## Release Schedule

| Phase | Start | End | Status |
|-------|-------|-----|--------|
| Phase 2 | Jan 2026 | Feb 2026 | ✅ Complete |
| Phase 3 | Mar 1 | Mar 21 | 📋 Planned |
| Phase 4 | Mar 22 | Apr 11 | 📋 Planned |
| Phase 5 | Apr 12 | Apr 25 | 📋 Planned |
| Phase 6 | May 1 | May 31 | 📋 Planned |

---

## Risk Register

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|-----------|
| Design changes mid-phase | Medium | High | Lock designs in Phase 3 kickoff |
| Performance regression from new content | Medium | High | Performance testing after each phase |
| Backend integration delays (Phase 4) | Low | Medium | Prepare mock API early |
| Browser compatibility issues | Low | Medium | Test early and often |
| Launch delays | Low | High | 2-week buffer in schedule |

---

## Dependencies & Blockers

### External Dependencies
- Google Analytics setup (requires GA account)
- Email service (SendGrid, Mailgun, etc.)
- CDN/hosting platform (Vercel, Netlify)
- Domain DNS configuration

### Internal Dependencies
- Design approval (Phase 3 start)
- Content copywriting (before Phase 3)
- Backend API (before Phase 4)
- Legal documents (before Phase 4 launch)

### No Current Blockers
All Phase 2 work is complete and unblocked. Phase 3 can start immediately.

---

## Budget & Resource Allocation

### Team Composition
- 1x Frontend Developer (primary)
- 1x UI/UX Designer (Phase 3 designs)
- 1x QA Tester (Phase 5)
- 1x DevOps Engineer (Phase 4-5 deployment)
- 1x Content Writer (Phase 3-4 copy)

### Time Allocation
- Development: 60%
- Design: 15%
- QA: 15%
- Documentation: 10%

### Tools & Services
- Vercel (hosting, analytics) - $20/month
- Google Analytics - Free
- SendGrid (email) - $19/month
- BrowserStack (testing) - $99/month
- Total: ~$140/month

---

## Success Definition

### Phase Completion Criteria
Each phase is complete when:
1. All deliverables implemented and tested
2. No critical or high-severity bugs
3. Lighthouse score maintained > 90
4. Code reviewed and approved
5. Documentation updated

### Project Success Criteria (Launch)
- Landing page live at gachcloud.net
- 100+ signups in first month
- Mobile-friendly (100% on Lighthouse Mobile)
- SEO indexed by Google
- Zero downtime in first 30 days
- Team satisfied with launch process

---

## Notes & Assumptions

### Assumptions
- Design mockups for Phase 3 ready by Feb 28
- Backend API ready before Phase 4 starts
- No major pivots to product/messaging
- Current tech stack (Astro, Tailwind, React) remains chosen

### Constraints
- Vietnamese language requirements
- Target audience: Minecraft admins (tech-savvy)
- No server-side rendering (static-only)
- Monthly budget cap: $200

### Open Questions
- Will Phase 3 include animated slider on hero? (Scope clarity)
- Testimonial carousel: auto-scroll or manual? (UX decision)
- Contact form: internal or external service? (Tech decision)

---

## Related Documentation
- **Project Overview & PDR:** `project-overview-pdr.md`
- **Code Standards:** `code-standards.md`
- **System Architecture:** `system-architecture.md`
- **Codebase Summary:** `codebase-summary.md`
