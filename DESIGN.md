---
name: Corporate Tech Academy
colors:
  surface: '#071423'
  surface-dim: '#071423'
  surface-bright: '#2e3a4b'
  surface-container-lowest: '#030f1e'
  surface-container-low: '#101c2c'
  surface-container: '#142030'
  surface-container-high: '#1f2b3b'
  surface-container-highest: '#2a3546'
  on-surface: '#d7e3f9'
  on-surface-variant: '#bdc8d1'
  inverse-surface: '#d7e3f9'
  inverse-on-surface: '#253141'
  outline: '#87929a'
  outline-variant: '#3e484f'
  surface-tint: '#7bd0ff'
  primary: '#8ed5ff'
  on-primary: '#00354a'
  primary-container: '#38bdf8'
  on-primary-container: '#004965'
  inverse-primary: '#00668a'
  secondary: '#bdc2ff'
  on-secondary: '#131e8c'
  secondary-container: '#2f3aa3'
  on-secondary-container: '#a8afff'
  tertiary: '#c3cdd9'
  on-tertiary: '#28313b'
  tertiary-container: '#a8b2be'
  on-tertiary-container: '#3b454e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c4e7ff'
  primary-fixed-dim: '#7bd0ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c69'
  secondary-fixed: '#e0e0ff'
  secondary-fixed-dim: '#bdc2ff'
  on-secondary-fixed: '#000767'
  on-secondary-fixed-variant: '#2f3aa3'
  tertiary-fixed: '#dae3f0'
  tertiary-fixed-dim: '#bdc8d3'
  on-tertiary-fixed: '#131d25'
  on-tertiary-fixed-variant: '#3e4852'
  background: '#071423'
  on-background: '#d7e3f9'
  surface-variant: '#2a3546'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: 0.08em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: 0.06em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '800'
    lineHeight: 36px
    letterSpacing: 0.04em
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: 0.04em
  headline-sm:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-lg:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.08em
  label-md:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.12em
  label-sm:
    fontFamily: Montserrat
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.16em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system is tailored for an institutional tech education ecosystem and corporate software engineering environment. It embodies stability, technical rigor, and enterprise elegance, deliberately departing from over-saturated gaming bootcamps or neon-heavy developer aesthetics.

The visual style is **Corporate Modern Minimalist with Technical Depth**:
- **Atmosphere:** Deep navy slate architecture that conveys depth, intellectual focus, and institutional trust.
- **Duality & Bipartite Rhythm:** Directly informed by the dual-toned typographic lockup, headlines and key UI elements juxtapose muted satin metallic slate against crisp stark white, orchestrating an authoritative visual hierarchy.
- **Architectural Rigor:** Subtle wireframe grid overlays, thin hairpins, and crisp low-contrast bounding borders echo blueprint precision and structured software craftsmanship.

## Colors

The palette is engineered around high-end dark slate tones with restrained, functional accents:

- **Canvas & Background Surfaces:**
  - `Canvas Base`: `#0F1722` (deepest foundation)
  - `Canvas Raised / Nav`: `#15202D`
  - `Surface Container / Card`: `#1C2838`
  - `Surface Elevated / Hover`: `#233245`
- **Borders & Grid Dividers:**
  - `Border Subtle`: `#33445C` (standard container stroke)
  - `Border Focus / Accent`: `#475569`
  - `Grid Line Overlay`: `rgba(51, 68, 92, 0.35)`
- **Typography & Content Hierarchy:**
  - `Text High-Contrast`: `#FFFFFF` (primary headlines and critical values)
  - `Text Muted / Metallic Slate`: `#CBD5E1` (secondary headings and structural copy)
  - `Text Subtle / Caption`: `#94A3B8` (metadata, tags, secondary labels)
- **Accents:**
  - `Primary Accent (Tech Azure)`: `#38BDF8` used exclusively for focused states, progress tracks, and primary interactive indicators.
  - `Secondary Accent (Corporate Indigo)`: `#818CF8` for badges, tags, and category identifiers.

## Typography

The type system creates an intentional dialogue between architectural geometry and operational legibility:

- **Headlines (Montserrat):** Rendered with prominent upper-case styling in key titles (`letterSpacing: 0.06em` to `0.12em`). Titles should frequently apply the signature bipartite styling: the initial segment colored in `#94A3B8` or `#CBD5E1` and the concluding emphasis colored in `#FFFFFF`.
- **Body & Data Content (Inter):** Clean, neutral, high-density readability for curriculum specs, documentation, code walkthroughs, and UI dashboards.
- **Labels & Microcopy (Montserrat):** Uppercase tracking applied to sub-headings (such as *"Escola de Programação"*), module identifiers, and status pill badges.

## Layout & Spacing

A structured 12-column grid system anchors complex data views, course paths, and administrative modules:

- **Desktop (>= 1280px):** 12 columns, `1.5rem` (24px) gutters, and `3rem` (48px) margins. Outer container max width is constrained to `1360px`.
- **Tablet (768px - 1279px):** 8 columns, `1.25rem` (20px) gutters, `2rem` (32px) margins.
- **Mobile (< 768px):** 4 columns, `1rem` (16px) gutters, `1.25rem` (20px) margins.

Vertical rhythm adheres strictly to multiples of 4px/8px. Subtle dotted or hairline grid lines (`rgba(51, 68, 92, 0.4)`) may demarcate major structural sections to sustain the engineered blueprint aesthetic.

## Elevation & Depth

Visual hierarchy relies on crisp surface layering and razor-sharp border definition rather than exaggerated, soft drop-shadows:

- **Surface Layering:**
  - `Level 0 (Canvas)`: `#0F1722` flat base.
  - `Level 1 (Card/Container)`: `#1C2838` paired with a 1px solid `#33445C` perimeter stroke.
  - `Level 2 (Hover/Modal/Flyout)`: `#233245` paired with a 1px solid `#475569` stroke and a restrained, diffused ambient shadow: `0 16px 32px -8px rgba(15, 23, 34, 0.65)`.
- **Hairline Precision:** Containers must never rely solely on color shifts. Every surface elevation step includes a 1px structured hairline boundary in `#33445C` to maintain tactile containment and software-grade structure.

## Shapes

The geometry strikes a balance between solid architectural stability and refined modern ergonomics:

- **Containers and Cards:** Default to `rounded-xl` (1rem / 16px), matching the subtle rounded corners seen in official institutional plaques and cards.
- **Buttons and Inputs:** Standardized at `rounded-lg` (0.5rem / 8px) for controlled, crisp interaction touchpoints.
- **Badges and Status Chips:** Employ full pill contours (`rounded-full`) or restrained micro-radii (`rounded-sm` / 4px) depending on contextual density.

## Components

### Buttons
- **Primary Institutional:** Solid `#FFFFFF` fill with `#0F1722` text, `font-weight: 700`, uppercase tracking (`0.06em`), `rounded-lg`. Hover shifts to `#E2E8F0` with subtle elevation.
- **Primary Tech:** Solid `#38BDF8` fill with `#0F1722` text for direct code execution or primary conversion paths.
- **Secondary / Outline:** Background transparent, 1px solid `#33445C`, text in `#CBD5E1`. Hover states elevate background to `#233245` and border to `#475569`.
- **Tertiary / Ghost:** No border, text in `#94A3B8`, hover transitions color to `#FFFFFF`.

### Cards & Containers
- Built on `#1C2838` background with 1px border in `#33445C` and `rounded-xl` (16px).
- Optional technical header division: 1px bottom border in `#33445C` separating header from content body.
- Hoverable interactive cards shift their border to `#38BDF8` (30% opacity) and background to `#233245`.

### Chips & Badges
- **Category Badge:** Background in `rgba(129, 140, 248, 0.12)`, text `#818CF8`, border `1px solid rgba(129, 140, 248, 0.25)`, uppercase tracking `0.14em`, font size 11px.
- **Tech Track Badge:** Background in `rgba(56, 189, 248, 0.12)`, text `#38BDF8`, border `1px solid rgba(56, 189, 248, 0.25)`.
- **System Counter / Muted Badge:** `#233245` background with `#94A3B8` typography.

### Input Fields
- Background in `#15202D`, 1px solid `#33445C` border, `rounded-lg`.
- Text in `#FFFFFF` with placeholder in `#94A3B8`.
- Focus ring: 1px border `#38BDF8` with a 2px outer glow in `rgba(56, 189, 248, 0.2)`.

### Checkboxes & Radio Buttons
- Base state: Unchecked box `#15202D` with 1.5px `#33445C` border.
- Checked state: Fill `#38BDF8` with dark `#0F1722` SVG check icon.
- Focus outline: subtle ring in `rgba(56, 189, 248, 0.3)`.

### Code Blocks & Module Trackers
- Background `#0F1722` with a 1px `#33445C` container border.
- Header bar in `#15202D` displaying file metadata and module numbers in `#94A3B8` uppercase typography.