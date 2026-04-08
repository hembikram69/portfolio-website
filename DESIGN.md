# Design Brief

## Tone & Differentiation
Premium modern portfolio with refined editorial aesthetics. Bold primary actions with sophisticated color restraint. Elevated above generic portfolio templates through deliberate hierarchy, smooth animations, and distinctive typography pairing.

## Color Palette (OKLCH)

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| Primary | `0.42 0.18 250` | `0.68 0.20 250` | CTA, accents, hero gradient |
| Background | `0.985 0.001 250` | `0.10 0.01 250` | Page background |
| Card | `0.995 0 0` | `0.14 0.02 250` | Elevated containers |
| Foreground | `0.12 0.03 250` | `0.96 0.01 250` | Text, primary foreground |
| Muted | `0.94 0.01 250` | `0.16 0.02 250` | Subtle backgrounds, placeholders |
| Border | `0.88 0.01 250` | `0.22 0.02 250` | Dividers, outlines |
| Accent | `0.88 0.03 200` | `0.32 0.04 200` | Secondary highlights |
| Destructive | `0.52 0.24 25` | `0.58 0.22 25` | Error, warning states |

## Typography
Display: **General Sans** (bold, 600–700 weight) for all headings—h1–h6. Establishes premium presence with geometric clarity.
Body: **Inter** (400–500 weight) for paragraphs, UI text. Refined legibility and professional feel.
Mono: **Geist Mono** for code blocks, timestamps, data displays.

## Elevation & Depth
Surface hierarchy: muted → card → elevated → premium. Cards use subtle shadows `shadow-soft` for resting state, `shadow-premium` on hover. Header uses backdrop blur (`.glass` utility) with `border-b border-border/20`.

## Structural Zones

| Zone | Treatment | Details |
|------|-----------|---------|
| Header/Nav | Glass morphism | Backdrop blur, border-bottom, sticky positioning |
| Hero | Gradient + glow | Animated gradient background (8s cycle), profile image with pulsing glow ring |
| Content sections | Elevated cards | Soft shadows, smooth fade-in on scroll |
| Experience | Timeline layout | Vertical flow with alternating cards, left/right alignment |
| Skills | Badge grid | Staggered entrance animations, hover scale |
| Projects | Card overlay | Project cards with gradient overlay on hover |
| Footer | Muted surface | Slight background elevation, centered layout |

## Motion & Animation
Hero gradient cycles through blue→purple→teal (8s infinite, `animation: gradient-shift`). Profile image glow pulses (2s infinite). Scroll-triggered sections fade in with `animation: slide-up`. Skills badges stagger with nth-child delays. Interactions use `transition-smooth` (0.3s cubic-bezier) for buttons/links. All animations honor `prefers-reduced-motion`.

## Component Patterns
Buttons: solid primary for CTA, ghost for secondary. Hover state applies `shadow-elevated` + scale transform. Card hovers lift with shadow upgrade and gradient overlay (projects). Icon + text combinations use flex with proper gaps. Badges use small caps typography and pill-shaped borders (`rounded-full`).

## Signature Details
Animated gradient hero with pulsing profile glow ring creates immediate visual distinction. Timeline layout for experience reinforces chronological narrative. General Sans display font provides premium identity. Consistent use of soft shadows throughout creates cohesive elevation system. Scroll progress bar anchors the interface with forward momentum.

## Constraints
Avoid: generic color overlays, bouncy animations, oversaturated accent colors. Do: restrain motion to purposeful entrance/hover states, use borders instead of shadows where hierarchy permits, keep gradients subtle and intentional.
