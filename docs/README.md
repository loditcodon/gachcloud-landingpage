# Documentation Index — GachCloud Landing Page

Welcome to the GachCloud landing page documentation. This index helps you find the right document for your role and task.

---

## Quick Navigation

### For New Team Members
Start here to understand the project:
1. **[Project Overview & PDR](./project-overview-pdr.md)** — Business goals, phases, requirements
2. **[Codebase Summary](./codebase-summary.md)** — Directory structure, component inventory
3. **[Code Standards](./code-standards.md)** — How to write code in this project
4. **[System Architecture](./system-architecture.md)** — How components fit together

**Time needed:** 1-2 hours for complete onboarding

### For Developers (Coding)
Reference these while implementing features:
1. **[Code Standards](./code-standards.md)** — Component patterns, naming conventions, best practices
2. **[Codebase Summary](./codebase-summary.md)** — Available components and how to use them
3. **[System Architecture](./system-architecture.md)** — Data flows, styling patterns

**Quick lookup:** Use Ctrl+F to search within documents

### For Project Managers
Plan and track progress:
1. **[Development Roadmap](./development-roadmap.md)** — Phases, timelines, deliverables, risks
2. **[Project Overview & PDR](./project-overview-pdr.md)** — Requirements, success criteria, team roles

### For QA/Testing
Test against requirements:
1. **[Project Overview & PDR](./project-overview-pdr.md)** — Success criteria, requirements
2. **[Development Roadmap](./development-roadmap.md)** — Phase-specific QA checklists
3. **[Code Standards](./code-standards.md)** — Accessibility, browser support

### For Architects/Tech Leads
Review design and technical decisions:
1. **[System Architecture](./system-architecture.md)** — Component hierarchy, data flows, deployment
2. **[Code Standards](./code-standards.md)** — Technical patterns, scalability considerations
3. **[Development Roadmap](./development-roadmap.md)** — Technical dependencies, risks

---

## Document Overview

### 1. Project Overview & PDR (`project-overview-pdr.md`)
**Audience:** Stakeholders, managers, architects
**Purpose:** Business context and product requirements

**Sections:**
- Project summary and business goals
- Phase 2 deliverables and completion status
- Non-functional requirements (performance, security, accessibility, scalability)
- Architecture principles and success criteria
- Team ownership and timeline
- Risk assessment and budget

**When to read:**
- Project kickoff
- Phase transition reviews
- Requirement clarifications
- Success metric validation

**Length:** 350 lines | **Read time:** 15-20 minutes

---

### 2. Codebase Summary (`codebase-summary.md`)
**Audience:** Developers, architects, new team members
**Purpose:** Quick reference for project structure and components

**Sections:**
- Technology stack overview
- Directory structure with descriptions
- Phase 2 implementation details
  - 6 main components (navbar, footer, mobile menu, back-to-top, base layout)
  - 3 UI primitives (button, card, section-header)
  - Styling system (global.css with Tailwind v4)
  - Data layer (nav-links, footer-links)
- Key architectural decisions
- Accessibility and performance features
- Next phase preparation

**When to read:**
- First day on project
- Looking for "where is X component?"
- Understanding project technology stack
- Phase 3 planning

**Length:** 250 lines | **Read time:** 10-15 minutes

---

### 3. System Architecture (`system-architecture.md`)
**Audience:** Architects, senior developers, tech leads
**Purpose:** Deep dive into component interactions, data flows, styling

**Sections:**
- Architecture diagram (visual overview)
- Component hierarchy (layout → nav → content → footer)
- Data flow mapping and how data reaches components
- Styling architecture (theme variables, responsive design, color system)
- Interaction flows (mobile menu state, back-to-top scroll behavior)
- Asset management (favicons, images, manifest)
- Performance optimizations implemented
- Accessibility features matrix
- Security considerations
- Deployment strategy
- Scalability path for future phases

**When to read:**
- Understanding how components interact
- Planning architectural changes
- Performance troubleshooting
- Deployment planning
- Onboarding senior developers

**Length:** 380 lines | **Read time:** 20-25 minutes

---

### 4. Code Standards (`code-standards.md`)
**Audience:** All developers, code reviewers
**Purpose:** Development guidelines for consistency and quality

**Sections:**
- File organization and naming conventions
  - PascalCase for Astro/React components
  - kebab-case for data files and utilities
  - camelCase for variables, UPPER_SNAKE_CASE for constants
- Component design patterns
  - Astro component template with props, imports, computed variables
  - React island pattern with hooks and cleanup
  - Data file interface definitions
- Tailwind CSS patterns and best practices
- TypeScript standards and prop types
- JavaScript inline script guidelines
- Accessibility standards (ARIA, semantic HTML, keyboard nav, motion)
- Code quality (linting, formatting, comments, error handling)
- Testing standards (unit, E2E, accessibility)
- Git and commit message conventions
- Performance standards
- Documentation standards

**When to read:**
- Before writing code
- During code review
- Learning project conventions
- Understanding "why" behind patterns

**Length:** 420 lines | **Read time:** 25-30 minutes

---

### 5. Development Roadmap (`development-roadmap.md`)
**Audience:** Project managers, developers, stakeholders
**Purpose:** Phase-by-phase plan from current state through launch

**Sections:**
- Phase 2 completion summary (with lessons learned)
- Phase 3: Hero & Feature Sections (detailed requirements, design specs, success criteria)
  - Hero section requirements and design
  - Features section (4-6 cards in responsive grid)
  - Pricing section (3 tiers with comparison)
  - Testimonials section (carousel with auto-scroll)
  - CTA footer section
  - New components to create
  - Data structures and interfaces
  - QA checklist and testing plan
- Phase 4: Integration & Optimization (forms, analytics, SEO)
- Phase 5: Pre-Launch QA & Deployment (testing, security audit, performance)
- Phase 6: Launch & Post-Launch (monitoring, content updates, feature roadmap)
- Release schedule with timelines
- Risk register and dependency mapping
- Budget and resource allocation
- Success definition per phase

**When to read:**
- Sprint planning
- Understanding next phase requirements
- Timeline estimation
- Risk assessment and mitigation planning
- Phase transition handoff

**Length:** 680 lines | **Read time:** 30-40 minutes

---

## Documentation Map by Task

### "How do I set up the project?"
→ See: Code Standards (dev environment section, once added)
→ See: README.md in repository root

### "Where is the [component name]?"
→ See: Codebase Summary → Directory Structure
→ Search: Ctrl+F in codebase-summary.md

### "How should I name this file?"
→ See: Code Standards → File Organization & Naming

### "How do I structure a new Astro component?"
→ See: Code Standards → Component Design Patterns → Astro Component Template

### "How do I build a React island?"
→ See: Code Standards → Component Design Patterns → React Island Template
→ Reference: src/components/react/mobile-menu.tsx (actual example)

### "What Tailwind classes should I use?"
→ See: Code Standards → Tailwind CSS Patterns
→ See: System Architecture → Styling Architecture (color palette)

### "What's the performance target?"
→ See: Project Overview & PDR → Non-Functional Requirements
→ See: Development Roadmap → Phase 5 (Performance Targets)

### "When is Phase 3 starting?"
→ See: Development Roadmap → Release Schedule
→ See: Project Overview & PDR → Timeline & Milestones

### "What are the Phase 3 requirements?"
→ See: Development Roadmap → Phase 3: Hero & Feature Sections

### "What components can I reuse?"
→ See: Codebase Summary → Phase 2 Implementation → UI Primitives
→ See: System Architecture → Component Hierarchy

### "How do we handle external links?"
→ See: Code Standards → Data Handling → External Link Handling
→ Reference: src/components/navbar.astro (actual implementation)

### "What's the accessibility requirement?"
→ See: Code Standards → Accessibility Standards
→ See: Project Overview & PDR → Non-Functional Requirements

---

## Documentation by Phase

### Phase 2 (Current - Completed)
**Status:** ✅ Complete
**Documents:** All 5 documents cover Phase 2 in detail
**Key files:**
- codebase-summary.md → Phase 2 Implementation section
- project-overview-pdr.md → Phase 2: Layout & Shared Components section
- development-roadmap.md → Phase 2 completion summary

### Phase 3 (Upcoming)
**Status:** 📋 Planned, requirements documented
**Key document:** development-roadmap.md → Phase 3: Hero & Feature Sections
**Detailed specs:**
- 5 new sections to implement
- 2 new components to create
- Data structures and interfaces defined
- Design details and success criteria

### Phase 4 (Later)
**Status:** 📋 Planned
**Key document:** development-roadmap.md → Phase 4: Integration & Optimization

### Phase 5 (Pre-Launch)
**Status:** 📋 Planned
**Key document:** development-roadmap.md → Phase 5: Pre-Launch QA & Deployment

### Phase 6 (Launch)
**Status:** 📋 Planned
**Key document:** development-roadmap.md → Phase 6: Launch & Post-Launch

---

## Search Tips

### Using Ctrl+F in Documents

**Looking for color values:**
Search: "brand-red" or "#dc2626"
Found in: system-architecture.md, code-standards.md

**Looking for component usage:**
Search: "button.astro" or "card.astro"
Found in: codebase-summary.md, system-architecture.md

**Looking for data structures:**
Search: "interface Props" or "export const"
Found in: code-standards.md, development-roadmap.md

**Looking for accessibility requirements:**
Search: "WCAG" or "aria-label"
Found in: code-standards.md, project-overview-pdr.md

**Looking for performance targets:**
Search: "Lighthouse" or "LCP"
Found in: development-roadmap.md, project-overview-pdr.md

---

## Related Files in Repository

### Source Code Reference
- **Components:** `src/components/*.astro`, `src/components/react/*.tsx`
- **Styles:** `src/styles/global.css`
- **Data:** `src/data/*.ts`
- **Pages:** `src/pages/*.astro`

### Configuration Files
- **Astro:** `astro.config.mjs`
- **Tailwind:** `tailwind.config.cjs` or theme in `global.css`
- **TypeScript:** `tsconfig.json`
- **Package manager:** `package.json`

### Project Files
- **README:** `README.md` (project setup, quick start)
- **Git:** `.gitignore`, `.github/workflows/` (CI/CD)
- **Environment:** `.env.example` (optional, if needed)

---

## Documentation Maintenance

### How We Keep Docs Updated
1. **Code changes trigger doc updates:** When implementing features, update relevant docs
2. **Phase transitions:** Full review and status update
3. **Monthly audits:** Check for outdated information, broken links
4. **Quarterly deep dive:** Full accuracy audit against codebase

### How to Suggest Changes
- Create a GitHub issue with "docs:" prefix
- Describe what's inaccurate or missing
- Link to the relevant doc and section

### How to Report Broken Links
- Note the document and section
- Provide the broken link
- Suggest the correct reference

---

## Document Statistics

| Document | Lines | Topics | Examples | Last Updated |
|----------|-------|--------|----------|--------------|
| project-overview-pdr.md | 350 | 16 | 4 | Mar 1, 2026 |
| codebase-summary.md | 250 | 12 | 3 | Mar 1, 2026 |
| system-architecture.md | 380 | 15 | 8 | Mar 1, 2026 |
| code-standards.md | 420 | 18 | 25 | Mar 1, 2026 |
| development-roadmap.md | 680 | 25 | 10 | Mar 1, 2026 |
| **TOTAL** | **2,080** | **86** | **50** | **Mar 1, 2026** |

---

## Frequently Asked Questions

**Q: Which document should I read first?**
A: If you're new, start with Codebase Summary, then Code Standards. If you're a manager, start with Project Overview & PDR.

**Q: Where are the component examples?**
A: Code Standards has templates for Astro and React components. For real examples, check src/components/ in the repository.

**Q: What's the difference between System Architecture and Codebase Summary?**
A: Codebase Summary is a quick inventory ("what exists"). System Architecture is deep dive ("how it works"). Both are useful, in different situations.

**Q: How often are these docs updated?**
A: After each phase completion and when code standards are clarified. Monthly audits check for outdated info.

**Q: Can I print these documents?**
A: Yes, they're in Markdown format. Use your browser's print function or a Markdown-to-PDF tool.

**Q: Where's the API documentation?**
A: This is a static site with no backend API. External integrations (panel.gachcloud.net, docs.gachcloud.net) are documented in project-overview-pdr.md.

---

## Support & Questions

**For documentation clarifications:**
- Check the FAQ section above
- Search the relevant document with Ctrl+F
- Create a GitHub issue with details

**For code questions:**
- Check Code Standards first
- Search Codebase Summary for component references
- Review actual code in src/ directory
- Ask in team chat or code review

**For project/timeline questions:**
- Check Development Roadmap
- Check Project Overview & PDR
- Speak with project manager

---

## Quick Reference Cheat Sheet

### Component Use Cases
| Need | Component | File |
|------|-----------|------|
| Button (primary) | button.astro | src/components/ui/button.astro |
| Button (outline) | button.astro | src/components/ui/button.astro |
| Card container | card.astro | src/components/ui/card.astro |
| Section title | section-header.astro | src/components/ui/section-header.astro |
| Navigation | navbar.astro | src/components/navbar.astro |
| Footer | footer.astro | src/components/footer.astro |
| Mobile menu | mobile-menu.tsx | src/components/react/mobile-menu.tsx |

### Color Tokens
| Usage | Token | Value |
|-------|-------|-------|
| Page background | bg-primary | #0a0a0a |
| Card background | surface | #1a1a1a |
| Borders | border | #2a2a2a |
| Primary text | text-primary | #ffffff |
| Secondary text | text-secondary | #a3a3a3 |
| Brand accent | brand-red | #dc2626 |
| Brand secondary | brand-orange | #ea580c |

### Naming Conventions
| Type | Pattern | Example |
|------|---------|---------|
| Astro components | PascalCase | BaseLayout.astro |
| React components | PascalCase | MobileMenu.tsx |
| Data files | kebab-case | nav-links.ts |
| Variables | camelCase | isOpen |
| Constants | UPPER_SNAKE_CASE | SCROLL_THRESHOLD |

---

## Getting Help

**Something unclear?** Check these in order:
1. Use Ctrl+F to search within this index
2. Read the relevant document listed above
3. Check actual code in `src/` directory
4. Ask team members or create a GitHub issue

**Think docs should be updated?**
- Create an issue with "docs:" prefix
- Be specific about what's wrong or missing
- Suggest a fix if possible

---

Last Updated: March 1, 2026
Documentation Status: Phase 2 Complete, Phase 3 Planned
Audience: All team members
