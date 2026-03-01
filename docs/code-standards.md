# Code Standards — GachCloud Landing Page

## Overview
This document establishes coding patterns, file organization, component design, and development practices for the GachCloud landing page project.

## File Organization & Naming

### Directory Structure
```
src/
├── layouts/           # Page wrappers (base-layout.astro)
├── components/        # Reusable components
│   ├── ui/           # UI primitives (button, card, section-header)
│   ├── react/        # React islands (.tsx files)
│   └── [feature]/    # Feature-specific components
├── pages/            # Page routes (Astro file-based routing)
├── data/             # Static data files (TypeScript)
├── styles/           # Global styles (global.css)
└── public/           # Static assets (images, favicons)
```

### Naming Conventions

| Type | Pattern | Example |
|------|---------|---------|
| Astro components | PascalCase | `BaseLayout.astro`, `MobileMenu.astro` |
| React components | PascalCase | `MobileMenu.tsx` |
| Data files | kebab-case | `nav-links.ts`, `footer-links.ts` |
| CSS files | kebab-case | `global.css` |
| Utilities | kebab-case | `validate-email.ts` |
| Pages (routes) | kebab-case | `index.astro`, `minecraft.astro` |
| Variables | camelCase | `isOpen`, `navItems`, `actionLinks` |
| Constants | UPPER_SNAKE_CASE | `SCROLL_THRESHOLD = 400`, `ANIMATION_DURATION = 200` |
| CSS classes | kebab-case | `.animate-slide-down`, `.bg-primary` |
| TypeScript interfaces | PascalCase | `NavItem`, `ActionLink`, `FooterSection` |

## Component Design Patterns

### Astro Component Template

```astro
---
// 1. Import types and dependencies
interface Props {
  variantProp?: 'option1' | 'option2';
  customClass?: string;
}

// 2. Import subcomponents
import SubComponent from './SubComponent.astro';

// 3. Destructure props with defaults
const { variantProp = 'option1', customClass = '' } = Astro.props;

// 4. Define computed variables
const computedClass = `base-class ${variantProp}-class ${customClass}`;
---

<!-- 5. Template markup -->
<div class={computedClass}>
  <SubComponent />
  <slot />
</div>
```

### React Island Template

```tsx
import { useState, useEffect, useRef } from 'react';
// Import icons if needed
import { Menu, X } from 'lucide-react';

interface ComponentProps {
  // Define props interface if accepting from Astro
}

export default function ComponentName({ }: ComponentProps) {
  // 1. State management
  const [state, setState] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // 2. Side effects
  useEffect(() => {
    // Setup listeners
    function handler() {
      setState(false);
    }
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  // 3. Handlers
  const handleClick = () => setState(!state);

  // 4. JSX
  return (
    <div ref={ref}>
      <button onClick={handleClick}>Toggle</button>
      {state && <div>Content</div>}
    </div>
  );
}
```

### Data File Template

```typescript
// 1. Define interfaces
export interface NavItem {
  name: string;
  href: string;
  icon: string;
}

// 2. Export constants
export const navItems: NavItem[] = [
  { name: 'Home', href: '/', icon: 'Home' },
  // ...
];

export const actionLinks = {
  gamePanel: { label: 'Game Panel', href: 'https://panel.gachcloud.net' },
  login: { label: 'Login', href: 'https://gachcloud.net/clientarea.php' },
};
```

## Astro Component Standards

### Props Handling
1. Always define `interface Props` at top of frontmatter
2. Use destructuring with defaults: `const { prop = 'default' } = Astro.props;`
3. Never mutate props directly
4. Use `class?: string` for custom styling to avoid CSS conflicts

### Class Composition
```astro
---
const baseClasses = 'px-4 py-2 rounded-lg transition-colors';
const variantClasses = variant === 'primary' ? 'bg-red-600' : 'bg-gray-600';
const classes = `${baseClasses} ${variantClasses} ${className}`;
---

<button class={classes}>
  <slot />
</button>
```

### Slot Usage
- Use `<slot />` for default content
- Use `<slot name="header" />` for named slots
- Provide fallback content when appropriate

### No Conditional Rendering Pitfall
Astro is static-first. Conditionals in templates output nothing at build time:
```astro
<!-- ✗ Don't: This is fine in Astro (outputs nothing if false) -->
{condition && <div>Content</div>}

<!-- ✓ Do: Explicit if statements for clarity -->
{condition ? <div>Content</div> : null}
```

## React Component Standards (Islands Only)

### Hydration Strategy
- React islands only hydrate when needed: `client:media="(max-width: 1023px)"`
- Use `useRef` for DOM element access
- Use `useState` for controlled state
- Prefer event listeners over inline handlers when managing multiple interactions

### Mobile Menu Pattern (Reference)
```tsx
// 1. Manage UI state
const [isOpen, setIsOpen] = useState(false);
const menuRef = useRef<HTMLDivElement>(null);

// 2. Use effect for side effects (listeners, cleanup)
useEffect(() => {
  if (!isOpen) return;

  function handleClickOutside(e: MouseEvent) {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  }

  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, [isOpen]);

// 3. Use separate effect for body scroll prevention
useEffect(() => {
  document.body.style.overflow = isOpen ? 'hidden' : '';
  return () => { document.body.style.overflow = ''; };
}, [isOpen]);
```

## Tailwind CSS Patterns

### Color Classes (Custom Theme)
```html
<!-- Backgrounds -->
<div class="bg-bg-primary">    <!-- #0a0a0a -->
<div class="bg-bg-secondary">  <!-- #111111 -->
<div class="bg-surface">       <!-- #1a1a1a -->

<!-- Text -->
<span class="text-text-primary">    <!-- #ffffff -->
<span class="text-text-secondary">  <!-- #a3a3a3 -->

<!-- Brand -->
<button class="bg-brand-red">  <!-- #dc2626 -->
<button class="from-brand-red to-brand-orange">  <!-- Gradient -->

<!-- Borders -->
<div class="border border-border">  <!-- #2a2a2a -->
```

### Responsive Classes
```html
<!-- Hide on mobile, show on lg+ -->
<ul class="hidden lg:flex">

<!-- Adjust padding for different screens -->
<div class="px-4 sm:px-6 lg:px-8">

<!-- Different grid layouts -->
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
```

### State Classes
```html
<!-- Hover states -->
<a class="text-text-secondary hover:text-text-primary">

<!-- Focus rings -->
<button class="focus:outline-none focus:ring-2 focus:ring-brand-red/50">

<!-- Transitions -->
<button class="transition-all duration-200">

<!-- Opacity & transforms -->
<div class="opacity-0 translate-y-4 pointer-events-none">
```

### Avoid These Patterns
```html
<!-- ✗ Don't use hardcoded colors -->
<button class="bg-red-600">

<!-- ✓ Do: Use theme tokens -->
<button class="bg-brand-red">

<!-- ✗ Don't: Use !important (prefer specificity) -->
<div class="text-red-600 !important">

<!-- ✗ Don't: Nest media queries in @apply -->
@apply flex lg:grid;
```

## Styling Standards

### Global CSS (global.css)
```css
/* 1. Theme variables (Tailwind v4) */
@theme {
  --color-primary: #value;
}

/* 2. Base element styles */
html {
  scroll-behavior: smooth;
}

/* 3. Animations & keyframes */
@keyframes slide-down {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-slide-down {
  animation: slide-down 200ms ease-out;
}

/* 4. Accessibility (prefers-reduced-motion) */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Component-Level Styles
- Keep Tailwind classes in HTML (preferred)
- Use inline `style` for dynamic values: `style={{ color: variable }}`
- Avoid `.astro` `<style>` blocks (prefer Tailwind)

## Data Handling

### TypeScript Interfaces
```typescript
// Define shape of data
export interface NavItem {
  name: string;
  href: string;
  icon: string;  // Icon name from Lucide
}

// Typed arrays
export const navItems: NavItem[] = [
  // Data with type checking
];
```

### Data Import & Usage
```astro
---
import { navItems, actionLinks } from '../data/nav-links';

// No need to fetch—data is static
---

<nav>
  {navItems.map((item) => (
    <a href={item.href}>{item.name}</a>
  ))}
</nav>
```

### External Link Handling
```astro
<!-- Always add rel="noopener noreferrer" for security -->
<a
  href={item.href}
  {...(item.href.startsWith('http') ? {
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {})}
>
  {item.name}
</a>
```

## JavaScript Standards

### Inline Scripts (Back-to-Top Pattern)
```astro
<script>
  const btn = document.getElementById('back-to-top');
  if (btn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        btn.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
        btn.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
      }
    }, { passive: true });  // Non-blocking scroll listener

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
</script>
```

### Guidelines
- Use inline scripts only for critical, non-reusable logic
- Prefer React islands for interactive components
- Use `{ passive: true }` on scroll listeners to improve performance
- Always null-check DOM elements before manipulating

## Accessibility Standards

### ARIA Attributes
```astro
<!-- Buttons with labels -->
<button aria-label="Open menu" aria-expanded={isOpen}>
  {isOpen ? 'Close' : 'Open'}
</button>

<!-- Form elements -->
<input aria-label="Search" placeholder="Type here..." />

<!-- External links (if needed) -->
<a href="https://external.com" aria-label="External site (opens in new window)">
```

### Semantic HTML
```astro
<!-- ✓ Do: Use semantic elements -->
<header>
<nav>
<main>
<footer>
<h1>, <h2>, <h3>  <!-- Proper heading hierarchy -->
<section>
<article>

<!-- ✗ Avoid: Divs for everything -->
<div class="header">
<div class="nav">
```

### Keyboard Navigation
- All interactive elements focusable: buttons, links, inputs
- Escape key closes dropdowns/modals
- Tab order follows visual flow
- Focus indicators clearly visible

### Motion & Vestibular
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## TypeScript Standards

### Basic Types
```typescript
// Named types for clarity
type Variant = 'primary' | 'secondary' | 'outline';

// Interfaces for object shapes
interface NavItem {
  name: string;
  href: string;
  icon: string;
}

// Use as const for literal types
const SCROLL_THRESHOLD = 400 as const;
```

### Prop Types
```typescript
interface Props {
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}
```

## Code Quality Guidelines

### Linting & Formatting
- Use ESLint for JavaScript/TypeScript
- Use Prettier for code formatting
- Run before commit: `npm run lint && npm run format`

### Comments
```typescript
// Use comments for WHY, not WHAT
// ✓ Good: Explains the reasoning
// Open menu with animation to give user visual feedback

// ✗ Bad: Restates the code
// Set isOpen to true
setState(true);

// Multi-line comments for complex logic
/*
  Close menu when user clicks outside.
  Prevents modal-like behavior while maintaining accessibility.
  Uses event delegation to handle clicks on child elements.
*/
```

### Error Handling
```typescript
// Always null-check DOM elements
const btn = document.getElementById('back-to-top');
if (btn) {
  // Safe to use btn
}

// Type guards for unions
if (typeof value === 'string') {
  // value is string here
}
```

## Performance Standards

### Don't
- ✗ Load large libraries for single components
- ✗ Use `document.querySelector` in hot loops
- ✗ Create event listeners without cleanup
- ✗ Inline large images (use optimized formats)

### Do
- ✓ Use Astro static generation (0 JS by default)
- ✓ Hydrate React islands only when needed (`client:media`)
- ✓ Use passive event listeners (`{ passive: true }`)
- ✓ Cleanup listeners in useEffect return functions
- ✓ Use SVG inline for small icons, WebP for photos

## Testing Standards (Phase 3+)

### Unit Tests
- Test data transformations and utilities
- Test component rendering with different props
- Use Vitest or Jest

### E2E Tests
- Test user flows (navigation, form submission)
- Test responsive breakpoints
- Use Playwright or Cypress

### Accessibility Tests
- Test keyboard navigation
- Test screen reader compatibility
- Use axe-core or Lighthouse CI

## Git & Commits

### Commit Message Format
```
feat: add mobile menu component
fix: resolve navbar z-index overlap
docs: update architecture documentation
style: adjust footer spacing
refactor: extract button component logic
test: add mobile menu accessibility tests
chore: update dependencies
```

### Branch Naming
```
feature/mobile-menu
fix/navbar-zindex
docs/architecture-update
```

## Documentation Standards

### Code Comments
- Explain WHY, not WHAT
- Document complex algorithms
- Note performance implications
- Link to related files

### Component Documentation
```astro
---
/**
 * Button component with multiple variants
 *
 * @param {string} variant - 'primary' | 'secondary' | 'outline'
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {string} href - Optional link destination
 */
interface Props {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}
---
```

## Related Documents
- See `system-architecture.md` for component hierarchy and data flows
- See `codebase-summary.md` for detailed component reference
- See `development-roadmap.md` for upcoming implementation phases
