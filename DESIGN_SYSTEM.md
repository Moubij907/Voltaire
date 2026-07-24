# Design System

The reference document for every niche built on this framework. The electrician niche establishes the visual language; every future niche inherits it and changes only the accent color.

---

## Design Philosophy

**Luxury minimal. Editorial. Sophisticated.**

The goal is a website that feels handcrafted by an art director — closer to Apple, Stripe, Linear, and Aesop than to a contractor template. Every decision serves clarity, hierarchy, and trust.

### Principles

1. **Typography is the design.** Large display serif headlines carry the visual weight. The type itself creates hierarchy and emotion — not decoration.
2. **White space is intentional.** Sections breathe. Nothing feels cramped. Generous vertical rhythm signals confidence and premium positioning.
3. **Restraint over decoration.** No gradients, no blobs, no glassmorphism, no neon. The accent color appears sparingly — a tick, a line, a hover state — never as large fills.
4. **Content-first.** Every paragraph is scannable. Important information is highlighted through hierarchy, not boxes. Text width is constrained for readability.
5. **Motion is subtle.** Animations guide attention without distracting. Smooth fades, gentle slides, mask reveals. Never bouncy, never playful in a way that undermines trust.

---

## Typography System

### Font Families

| Role | Family | Weights | Usage |
|------|--------|---------|-------|
| Display | **Fraunces** (serif, variable) | 300, 400, 500, 600 | All headings, large editorial copy, numbers, brand name |
| Body | **Inter** (sans-serif) | 300, 400, 500, 600, 700 | All body text, labels, buttons, navigation, UI |

Fraunces is loaded with optical sizing (`opsz 9..144`) and soft variation (`SOFT 50`) for a refined, editorial feel. Inter uses stylistic sets (`cv11`, `ss01`, `cv02`) for improved legibility.

### Display Scale

| Token | Size | Line Height | Letter Spacing | Usage |
|-------|------|-------------|----------------|-------|
| `display-2xl` | `clamp(3.5rem, 9vw, 7rem)` | 0.92 | -0.04em | Hero headline only |
| `display-xl` | `clamp(3rem, 7vw, 5.5rem)` | 0.96 | -0.035em | Page headers (H1) |
| `display-lg` | `clamp(2.5rem, 5.5vw, 4.5rem)` | 1.0 | -0.03em | Section headings (H2) |
| `display-md` | `clamp(2rem, 4.5vw, 3.25rem)` | 1.08 | -0.025em | Sub-section headings |
| `display-sm` | `clamp(1.625rem, 3.5vw, 2.5rem)` | 1.15 | -0.02em | Quote blocks, large editorial |
| `display-xs` | `clamp(1.375rem, 2.5vw, 1.75rem)` | 1.2 | -0.015em | Large body / overview paragraphs |

### Body & Label Scale

| Token | Size | Letter Spacing | Usage |
|-------|------|----------------|-------|
| Body | `1rem` (16px) | -0.005em | Default body text, line-height 1.65 |
| Body large | `1.125rem` (18px) | -0.005em | Subheadlines, hero subtext |
| `eyebrow` | `0.7rem` | 0.25em (uppercase) | Section labels above headings |
| `label` | `0.65rem` | 0.2em (uppercase) | Meta labels, card labels, stats |

### Editorial Number

A specialized style for section markers and stat figures: Fraunces, weight 300, italic, optical sizing on. Used in process steps, project numbering, and award years.

### Rules

- Headlines use `text-balance` to prevent orphaned words.
- Body paragraphs use `text-pretty` for natural line breaking.
- Body text width is constrained to `max-w-prose-narrow` (640px) or `max-w-prose-wide` (860px).
- Maximum three font weights in view at once.
- Line height: 1.65 for body, 1.0–1.2 for display, 1.5 for large editorial paragraphs.

---

## Color System

### Base Palette (shared across all niches)

| Token | RGB | Usage |
|-------|-----|-------|
| `canvas` | `250 248 245` | Primary background — warm white |
| `surface` | `242 240 236` | Secondary background — light warm gray |
| `ink` | `20 19 17` | Primary text — near black |
| `ink-muted` | `112 109 102` | Secondary text — warm gray |
| `line` | `225 222 216` | Borders, dividers — subtle warm gray |

These never change between niches. They create the warm, editorial, premium foundation.

### Accent Scale (niche-specific)

Each niche defines an 11-stop accent scale (50–950) applied as CSS custom properties on `:root` at app start via `applyAccent()`.

| Niche | Accent | 500 stop |
|-------|--------|----------|
| Electrician | Electric Yellow | `234 179 8` |
| Plumbing | Cyan | TBD |
| HVAC | Blue | TBD |
| Roofing | Red | TBD |
| Painting | Purple | TBD |

### Rules

- Accent appears only as: eyebrow ticks, hover states, icon highlights, active nav indicators, dark-section CTAs, small dots, and focus rings.
- Accent never fills large areas of the canvas. The only exception is the CTA button on dark sections.
- Dark sections use `ink` as background with `canvas` text and accent as the primary action color.
- Selection color uses accent at 18% opacity.

---

## Layout System

### Container Widths

| Token | Max Width | Usage |
|-------|-----------|-------|
| `content` | 1280px | Default — most sections |
| `prose-narrow` | 640px | Legal pages, narrow editorial |
| `prose-wide` | 860px | Project detail, service overview |
| `full` | none | Full-bleed sections (maps, etc.) |

### Horizontal Padding

| Breakpoint | Padding |
|------------|---------|
| Mobile | `px-6` (24px) |
| Tablet (sm) | `px-8` (32px) |
| Desktop (lg) | `px-12` (48px) |

### Section Spacing

| Breakpoint | Vertical padding |
|------------|------------------|
| Mobile | `py-24` (96px) |
| Tablet | `py-32` (128px) |
| Desktop | `py-40` (160px) |

Sections alternate between `bg-canvas` and `bg-surface/40` to create visual rhythm without harsh contrast.

### Grid

- 12-column grid on large screens.
- `gap-px` with `bg-line` parent creates hairline-separated cards without visible borders on each cell.
- `divide-x` / `divide-y` for inline separators.

---

## Spacing Scale

Based on an 8px system with Tailwind defaults extended:

| Token | Value | Usage |
|-------|-------|-------|
| `18` | 4.5rem (72px) | Navbar height |
| `22` | 5.5rem (88px) | Large card padding |
| `30` | 7.5rem (120px) | Extra section spacing |

Standard Tailwind spacing (4, 6, 8, 10, 12, 16, 20, 24, 28, 32, 40) is used throughout. Section-to-section spacing is controlled by Section component padding, not manual margins.

---

## Component Rules

### Eyebrow

The signature marker above every section heading. Accent tick (6px wide) + uppercase tracked label. Never centered unless in a CTA context.

### Section

Wraps all content sections. Applies vertical rhythm (py-24/32/40). Container size is configurable. Background alternates between canvas and surface.

### Button

Five variants, three sizes. Always pill-shaped (`rounded-full`). Transition duration 500ms with premium easing.

| Variant | Appearance | Usage |
|---------|------------|-------|
| `primary` | Ink fill, canvas text → accent on hover | Default CTAs |
| `secondary` | Line border → ink border on hover | Secondary actions |
| `accent-solid` | Accent fill, ink text | Dark-section CTAs |
| `accent-outline` | Accent border → accent fill on hover | Niche-specific |
| `ghost` | Text only → accent on hover | Inline links, "view all" |

### ImageFrame

Aspect-ratio-locked image container with blur-up loading. Surface-tone placeholder. Optional `hover` prop adds a subtle 3% zoom on group hover. Transition duration 1.4s for the zoom — slow and premium.

### Reveal

IntersectionObserver-based scroll animation. Supports `up`, `down`, `left`, `right`, `none` directions. Default 900ms duration with `cubic-bezier(0.16, 1, 0.3, 1)` easing. Delays are staggered in 60–80ms increments. Respects `prefers-reduced-motion`.

### Card Pattern

Cards use the hairline grid: parent has `bg-line` with `gap-px`, children have `bg-canvas`. This creates uniform 1px separators without per-card borders. Hover states lift the background to `bg-surface/40` or add accent border.

---

## Motion Guidelines

### Easing

| Token | Curve | Usage |
|-------|-------|-------|
| `premium` | `cubic-bezier(0.16, 1, 0.3, 1)` | Default — smooth deceleration |
| `premium-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | Exit animations |

### Durations

| Context | Duration |
|---------|----------|
| Hover states | 300–500ms |
| Scroll reveals | 900–1100ms |
| Image zoom | 1400ms |
| Accordion | 500ms |
| Page transitions | 600–700ms |

### Animation Types

- **Fade up**: Default reveal — opacity + translateY(24px → 0)
- **Directional slide**: Left/right variants for paired columns
- **Mask reveal**: Clip-path inset animation for text (available via `.text-mask` utility)
- **Line grow**: Underline scale-x from left for active nav state
- **Blur-up**: Images load from blur-md + scale-1.04 to sharp

### Rules

- Never animate layout properties (width, height) — only transform and opacity.
- Stagger delays by 60–80ms per item, capped at 3 items.
- All animations respect `prefers-reduced-motion: reduce` — disabled to 0.01ms.
- No looping animations except the emergency pulse ring in the footer.

---

## Image Treatment

- All images use `object-cover` within aspect-ratio-locked containers.
- Common ratios: `4/3` (cards), `4/5` (portraits), `16/9` (hero/cover), `5/4` (showcase).
- `loading="lazy"` by default; `loading="eager"` only for above-the-fold priority images.
- `decoding="async"` on all images.
- Blur-up placeholder uses `bg-surface` tone, fades out over 700ms.
- Hover zoom is 3% — barely perceptible, adds life without distraction.
- Rounded corners: `rounded-2xl` (1.25rem) for standard, `rounded-3xl` (1.75rem) for hero/feature images.

---

## Icon Usage

- Icons from **lucide-react** only.
- Icon size: 4–5px (16–20px) for inline, 5–6px (20–24px) for feature circles.
- Icons sit in circular containers: `rounded-full border border-line`, 12–14px (48–56px) diameter.
- On hover: border and icon shift to accent color, background tints accent at 8% opacity.
- Icons are functional, never decorative. Every icon maps to a service or action.

---

## Accessibility Rules

- Semantic HTML: `<section>`, `<nav>`, `<footer>`, `<blockquote>`, `<button>`, `<label>`.
- Heading hierarchy: one `<h1>` per page, `<h2>` for sections, `<h3>` for cards.
- Focus visible: `focus-visible:ring-2 ring-accent-500 ring-offset-2 ring-offset-canvas`.
- All interactive elements are keyboard accessible.
- `aria-expanded` on accordion buttons and mobile menu toggle.
- `aria-label` on icon-only links and buttons.
- `alt` text on all images — descriptive, never empty.
- Color contrast: ink on canvas exceeds WCAG AA. ink-muted on canvas meets AA for large text.
- `prefers-reduced-motion` disables all animations.
- Form inputs have associated `<label>` elements.

---

## Responsive Rules

### Breakpoints

| Breakpoint | Min Width | Target |
|------------|-----------|--------|
| (default) | 0px | Mobile |
| `sm` | 640px | Large phone / small tablet |
| `md` | 768px | Tablet |
| `lg` | 1024px | Laptop |
| (implicit) | 1280px | Desktop (container max) |

### Rules

- Mobile-first: base styles target mobile, enhancements cascade up.
- Navigation collapses to a full-width overlay menu below `lg`.
- Multi-column grids collapse to single column below `sm` or `md`.
- Hero headline uses `clamp()` for fluid scaling across all breakpoints.
- Trust indicator strips stack 2→4 columns from mobile to desktop.
- All text remains readable at every breakpoint — no truncation on mobile except explicit `line-clamp`.
- Touch targets minimum 44px on mobile.

---

## Future Niche Branding Rules

When adding a new niche (plumbing, HVAC, roofing, etc.):

1. **Create a config file** in `src/config/<niche>.ts` following the `NicheConfig` type.
2. **Define an accent scale** — 11 stops (50–950) as space-separated RGB strings.
3. **Register the niche** in `src/config/index.ts`.
4. **Do not modify any component.** The entire site rebrands from the config + accent CSS variables.
5. **Keep the base palette** (canvas, surface, ink, line) unchanged — only the accent changes.
6. **Write realistic content** — no generic marketing copy. Every service, project, and testimonial should feel specific and human.
7. **Match the design language** — the typography, spacing, motion, and component patterns defined here are the standard for every niche. No niche gets a different layout system.
8. **Test the accent** — verify the accent color has sufficient contrast against both canvas (for text usage) and ink (for button text on dark sections).
