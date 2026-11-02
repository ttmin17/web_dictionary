---
slug: cloudflare-vibesdk-worker-agents-think-skills-frontend-design-saas
name: frontend-design-saas
tagline: S-tier SaaS dashboard and product UI reference. Use this skill when
  building application shells, data tables, settings panels, billing pages,
  dashboar
summary: "The fastest way to get this wrong: use marketing-page aesthetics (huge
  type, generous whitespace, pill buttons, gradient hero shadows) in a product
  surface. SaaS UIs are dense, neutral, fast, and quiet. The brand colo..."
categories:
  - cloud-infra
tags:
  - cloudflare-workers
  - coding-agent
  - durable-objects
  - text-to-app
status: active
quality_percentile: 100
selection_reason: official_vendor
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: cloudflare/vibesdk
  subpath: worker/agents/think/skills/frontend-design-saas
  official_vendor: true
  license: MIT
signals:
  stars: 5448
  last_commit: 2026-10-22T01:20:01Z
  stars_delta_7d: 21
  stars_growth_pct: 0.4
  trending_score: 21.08
  velocity_source: snapshot_delta
  sparkline_4w:
    - 5411
    - 5427
    - 5448
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: cloudflare/vibesdk
  path: worker/agents/think/skills/frontend-design-saas/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:07:03.255Z
  truncated: true
type: agent_skill
skill:
  skill_name: frontend-design-saas
  description: S-tier SaaS dashboard and product UI reference. Use this skill when
    building application shells, data tables, settings panels, billing pages,
    dashboards, auth flows, admin tools, or any internal/customer-facing SaaS
    product UI. Inspired by Stripe, Linear, Vercel, Airbnb, Notion. Covers
    neutral-led design tokens, sidebar+content shells, dense data UIs,
    form-heavy configuration pages, command palettes, empty states, and the
    accessibility (WCAG AA+) bar these products clear.
  folder_path: worker/agents/think/skills/frontend-design-saas
  extra_files: []
  pack_total_skills: 5
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: cloudflare-vibesdk
---

# SaaS Design System (Stripe / Linear / Vercel lineage)
> **AI-Optimized Design Reference** for building S-tier SaaS dashboards, admin consoles, billing pages, settings UIs, data-dense application shells, and product surfaces.
>
> Tonal anchors: `stripe.com/dashboard`, `linear.app`, `vercel.com/dashboard`, `notion.so/teamspace`, `clerk.com`, `planetscale.com/console`.

---

## Quick Reference (TL;DR)

```
Brand Accent:    #5E6AD2 (indigo) - replace with product brand
Neutrals:        #FFFFFF → #F8FAFC → #F1F5F9 → #E2E8F0 → #94A3B8 → #475569 → #0F172A
Text:            #0F172A (primary) / #475569 (muted) / #94A3B8 (subtle)
Border:          #E2E8F0 (default) / #CBD5E1 (strong)
Font Sans:       "Inter", "Geist", system-ui (NOT Arial, NOT Roboto)
Font Mono:       "JetBrains Mono", "Geist Mono", ui-monospace
Base Spacing:    4px (scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64)
Border Radius:   Buttons/inputs = 6-8px (NOT pill), Cards = 8-12px, Modals = 12-16px
Shadow:          Tight, low-spread, single-direction (NOT diffuse marketing shadows)
Density:         Compact-to-comfortable; row heights 36-44px, button heights 32-36px
```

The fastest way to get this wrong: use marketing-page aesthetics (huge type, generous whitespace, pill buttons, gradient hero shadows) in a product surface. SaaS UIs are **dense, neutral, fast, and quiet**. The brand color appears in <5% of the pixels and earns its weight by marking only what's interactive or active.

---

## 1. Brand Foundation

### Design Philosophy

| Principle | Description |
|-----------|-------------|
| **Users First** | Workflows, keyboard navigation, and information density beat decoration. |
| **Quiet by Default** | Neutrals dominate; the brand color is reserved for primary action, active state, and focus. |
| **Speed & Density** | Snappy transitions (≤200ms), compact row heights, no entrance animations on every page load. |
| **Opinionated Defaults** | Single canonical pattern per surface (one button hierarchy, one date picker, one empty state). |
| **Meticulous Craft** | 1px borders aligned to pixel grid, focus rings 2px offset 2px, motion uses ease-out not linear. |
| **Accessible (WCAG AA+)** | 4.5:1 text contrast, 3:1 UI element contrast, every interactive surface keyboard-reachable. |
| **Predictable** | Same component looks/behaves identically on every page; no marketing-grade variants. |

### Visual Identity Rules

- **Do not use pure black on pure white.** Use `#0F172A` on `#FFFFFF` (or `#0B1220` on `#0A0E1A` in dark mode).
- **Brand color is the accent, never the dominant.** If the brand color fills more than ~5% of the viewport in steady state, something is wrong.
- **Avoid pill buttons** (`border-radius: 9999px`) for SaaS actions. Pills read as marketing/consumer; SaaS uses `6-8px` radius for buttons and inputs.
- **No glassmorphism, no blur, no gradient borders.** The aesthetic is precision, not richness.
- **Shadows are tight and downward.** Not diffuse, not multi-direction. Reserved for floating layers (popovers, modals, dropdowns).
- **One font.** Inter / Geist / IBM Plex Sans / native system stack. Avoid mixing display + body fonts; SaaS uses a single workhorse sans.
- **Mono for IDs, code, tokens, money.** Tabular figures (`font-variant-numeric: tabular-nums`) for any column of numbers.

### Reference apps to mentally calibrate against

| Surface to build | Look at |
|---|---|
| Application shell | Linear, Vercel, Stripe Dashboard |
| Data table | Stripe `/payments`, Linear backlog, PlanetScale branches |
| Settings page | Vercel project settings, Clerk dashboard, GitHub repo settings |
| Billing / invoice | Stripe billing, Vercel usage |
| Empty state | Linear, Notion, Vercel deployments |
| Command palette | Linear ⌘K, Vercel ⌘K, Raycast |
| Auth | Clerk hosted pages, Stripe Connect onboarding |
| Onboarding checklist | Stripe Atlas, Vercel project import |

---

## 2. Color System

### 2.1 Neutral Scale (the backbone)

SaaS UIs are 80–90% neutrals. The neutral scale carries the entire interface; brand is sprinkled on top. Use a slightly cool neutral (slate) by default — it reads more "product" than warm grays which feel marketing/lifestyle.

| Token | Hex | Usage |
|---|---|---|
| `--neutral-0` | `#FFFFFF` | Page background (light mode), surface lifted onto canvas |
| `--neutral-50` | `#F8FAFC` | Canvas background, alternating row stripe |
| `--neutral-100` | `#F1F5F9` | Hover background, subtle fill, table header |
| `--neutral-200` | `#E2E8F0` | **Default border**, divider |
| `--neutral-300` | `#CBD5E1` | Strong border, input border on focus-within parent |
| `--neutral-400` | `#94A3B8` | **Subtle text** (placeholders, disabled, captions) |
| `--neutral-500` | `#64748B` | Tertiary text, icon default |
| `--neutral-600` | `#475569` | **Muted text** (descriptions, secondary labels) |
| `--neutral-700` | `#334155` | Strong icon, hover text |
| `--neutral-800` | `#1E293B` | Heading in dense UIs, code text |
| `--neutral-900` | `#0F172A` | **Primary text**, primary icons |
| `--neutral-950` | `#020617` | Highest contrast (rare; only for critical labels) |

### 2.2 Brand Accent (single color, used sparingly)

Pick **one** accent. Use a 6-step ramp so hover/active/focused/disabled all derive from the same hue. Defaults below use indigo (`#5E6AD2`, Linear's accent) — swap the hue for your brand but keep the structure.

| Token | Hex | Usage |
|---|---|---|
| `--brand-50` | `#EEF0FB` | Selected row background, badge background, focus ring background |
| `--brand-100` | `#DDE0F7` | Hover on brand surfaces |
| `--brand-200` | `#B9C0EF` | Disabled brand button, decorative |
| `--brand-500` | `#7B85DC` | Brand hover surface stroke |
| `--brand-600` | `#5E6AD2` | **Primary brand** — default button bg, link text, focus ring, active nav item |
| `--brand-700` | `#4A56C0` | Hover state for primary button |
| `--brand-800` | `#3A45A8` | Active/pressed state |
| `--brand-900` | `#2A3284` | High-contrast brand text on light background |

### 2.3 Semantic / Status Colors

Used for state — never for decoration. Each has a `text`, `bg`, `border` triplet so badges and inline messages stay legible.

| State | `text` | `bg` (filled) | `bg-subtle` (badge) | `border` |
|---|---|---|---|---|
| **Success** | `#15803D` | `#16A34A` | `#DCFCE7` | `#86EFAC` |
| **Warning** | `#A16207` | `#CA8A04` | `#FEF9C3` | `#FDE68A` |
| **Error / Destructive** | `#B91C1C` | `#DC2626` | `#FEE2E2` | `#FCA5A5` |
| **Info** | `#1D4ED8` | `#2563EB` | `#DBEAFE` | `#93C5FD` |
| **Neutral (default badge)** | `#334155` | `#64748B` | `#F1F5F9` | `#CBD5E1` |

Rules:
- Inline form errors: `text` color on `bg-subtle` background, `border` for the input.
- Toasts: `bg-subtle` panel, `text` heading, `--neutral-700` body.
- Status badges: `text` on `bg-subtle` + 1px `border`. Never use solid `bg` for badges (too loud).

### 2.4 Data Visualization Palette

When you need >1 color for charts. Categorical — visually distinct, similar luminance. Avoid the brand color in this palette so brand reads as "interactive" elsewhere.

```
--chart-1: #2563EB  (blue)
--chart-2: #16A34A  (green)
--chart-3: #CA8A04  (amber)
--chart-4: #DC2626  (red)
--chart-5: #9333EA  (violet)
--chart-6: #0891B2  (cyan)
--chart-7: #DB2777  (pink)
--chart-8: #65A30D  (lime)
```

### 2.5 Dark Mode Mapping

SaaS dark modes are **not just inverted**. They are slightly desaturated, slightly lifted, with carefully tuned elevation. Use `#0A0E1A` (or `#0B0F1C`) as the canvas — NEVER `#000000`. Pure black creates harsh contrast and exposes any banding in shadows.

| Token | Light | Dark |
|---|---|---|
| `--bg-canvas` | `#F8FAFC` | `#0A0E1A` |
| `--bg-surface` | `#FFFFFF` | `#111827` |
| `--bg-elevated` | `#FFFFFF` | `#1F2937` |
| `--bg-overlay` (popover/modal) | `#FFFFFF` | `#1F2937` |
| `--text-primary` | `#0F172A` | `#F1F5F9` |
| `--text-muted` | `#475569` | `#94A3B8` |
| `--text-subtle` | `#94A3B8` | `#64748B` |
| `--border-default` | `#E2E8F0` | `#1F2937` |
| `--border-strong` | `#CBD5E1` | `#374151` |
| `--brand-bg-subtle` | `#EEF0FB` | `rgba(94, 106, 210, 0.16)` |
| `--brand-fg` | `#5E6AD2` | `#A5B4FC` |

In dark mode the **brand color shifts lighter** (toward `--brand-500/400` instead of `--brand-600/700`) to maintain contrast against the dark canvas.

---

## 3. Typography

### 3.1 Font Stack

```css
--font-sans: "Inter", "Geist", -apple-system, BlinkMacSystemFont, "Segoe UI",
             "SF Pro Text", system-ui, sans-serif;
--font-mono: "JetBrains Mono", "Geist Mono", "SF Mono", "Menlo", "Consolas",
             ui-monospace, monospace;
```

Hard rules:
- **Never use `Arial`, `Helvetica`, `Roboto`, or `Times`** in a SaaS UI. These read as default/unstyled. If you can't load a webfont, fall through to `system-ui` instead.
- **Never mix two display fonts.** One sans + one mono is the entire stack.
- **`font-feature-settings: "cv11", "ss01", "ss03"`** for Inter (or whatever stylistic sets your font has) — small caps and alternate forms make tables look intentional.
- **`font-variant-numeric: tabular-nums`** on EVERY column that contains numbers (money, dates, IDs, counts). Non-tabular figures make rows shimmer.

### 3.2 Type Scale (SaaS-tuned — denser than marketing)

| Token | Size | Line Height | Weight | Letter Spacing | Use |
|---|---|---|---|---|---|
| `text-2xs` | 11px / 0.6875rem | 1.36 (15px) | 500 | 0.04em | Microlabels (uppercase metadata, table column tags) |
| `text-xs` | 12px / 0.75rem | 1.33 (16px) | 400/500 | 0 | Captions, badge text, table secondary |
| `text-sm` | 13px / 0.8125rem | 1.38 (18px) | 400/500 | 0 | **Default UI text**: table rows, buttons, form labels |
| `text-base` | 14px / 0.875rem | 1.43 (20px) | 400/500 | 0 | Body text, paragraph copy in panels |
| `text-md` | 15px / 0.9375rem | 1.47 (22px) | 400/500 | 0 | Comfortable reading (descriptions, modals) |
| `text-lg` | 16px / 1rem | 1.5 (24px) | 500/600 | -0.005em | Card headings, sidebar section labels |
| `text-xl` | 18px / 1.125rem | 1.44 (26px) | 600 | -0.01em | Subsection headings |
| `text-2xl` | 20px / 1.25rem | 1.4 (28px) | 600 | -0.015em | Page subheadings |
| `text-3xl` | 24px / 1.5rem | 1.33 (32px) | 600 | -0.02em | Page title (h1 in dashboards) |
| `text-4xl` | 30px / 1.875rem | 1.2 (36px) | 600/700 | -0.025em | Marketing-adjacent hero in settings |

**Critical**: the default UI size in SaaS is **13px or 14px**, NOT 16px. Stripe is 14px. Linear is 13px. Vercel is 14px. 16px feels too big and creates pages that scroll forever.

### 3.3 Weights

| Weight | Value | Use |
|---|---|---|
| Regular | 400 | Body, table cells, descriptions |
| Medium | 500 | Default for buttons, labels, table headers, navigation, badge text |
| Semibold | 600 | Headings, emphasized stats, active nav |
| Bold | 700 | Rare — only marketing-adjacent surfaces or KPI numbers |

**Never** use weight 800 or 900 in a SaaS UI.

### 3.4 Letter Spacing

| Context | Value |
|---|---|
| Body / table | 0 |
| Headings ≥18px | -0.01em to -0.025em (tighter as size grows) |
| Microlabels / uppercase | 0.04em to 0.06em |
| Mono | 0 |

### 3.5 Text Rendering

```css
html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  font-feature-settings: "kern" 1, "liga" 1, "calt" 1;
}

.numeric, table, [data-numeric] {
  font-variant-numeric: tabular-nums;
}
```

---

## 4. Spacing System

### 4.1 Base Unit

```css
--space-unit: 4px;
```

### 4.2 Scale

| Token | px | rem | Common Use |
|---|---|---|---|
| `space-0` | 0 | 0 | Reset |
| `space-px` | 1 | — | Hairlines, dividers |
| `space-0.5` | 2 | 0.125 | Tight icon-to-text gaps |
| `space-1` | 4 | 0.25 | Inline tight |
| `space-1.5` | 6 | 0.375 | — |
| `space-2` | 8 | 0.5 | Default tight gap, icon-text, badge padding |
| `space-2.5` | 10 | 0.625 | Input vertical padding (compact) |
| `space-3` | 12 | 0.75 | Input vertical padding (default), small card |
| `space-4` | 16 | 1 | **Default card/panel padding**, form field gaps |
| `space-5` | 20 | 1.25 | Section subheading gap |
| `space-6` | 24 | 1.5 | Card padding (comfortable), section internal |
| `space-8` | 32 | 2 | Page section gap, large card padding |
| `space-10` | 40 | 2.5 | Major section gap |
| `space-12` | 48 | 3 | Page-level section gap |
| `space-16` | 64 | 4 | Hero, max page-section |

**Density convention** (which scale value to default to):

- Buttons: `8px 12px` (sm), `8px 14px` (md), `10px 16px` (lg) — vertical padding stays tight
- Inputs: `8px 12px` (sm), `9px 12px` (md), `10px 14px` (lg)
- Cards: `16px` (sm), `20-24px` (md), `32px` (lg / settings panel)
- Table cells: `10px 16px` (compact), `12px 16px` (default), `16px 20px` (comfortable)
- Page padding: `24px` (mobile) → `32px` (desktop) → `48px` (wide settings)

---

## 5. Border Radius

| Token | Value | Use |
|---|---|---|
| `--radius-none` | 0 | Table cells, full-bleed sections |
| `--radius-sm` | 4px | Badges, tags, small chips |
| `--radius-md` | 6px | **Default**: buttons, inputs, dropdowns, menu items |
| `--radius-lg` | 8px | Cards, panels, popovers |
| `--radius-xl` | 12px | Modals, large surfaces, sheets |
| `--radius-2xl` | 16px | Marketing-adjacent (pricing card, onboarding) |
| `--radius-full` | 9999px | Avatars, status dots, **NOT buttons** |

Rules:
- **Buttons in SaaS UIs use 6px, not pill (`9999px`).** Pills are for marketing/consumer apps. The exception is a "tag" or "chip" inside a table cell.
- **Match input and button radius.** If button = 6px, input = 6px. Visual consistency in form rows.
- **Cards never share radius with modals.** Cards = 8px, modals = 12px+. This is how the modal reads as a different elevation layer.

---

## 6. Shadow System (Elevation)

SaaS shadows are **tight, downward, single-direction**. They mark elevation; they do not decorate. No glows, no colored shadows, no inset highlights, no large spread radii.

### 6.1 Elevation Tokens

```css
/* Light mode */
--shadow-xs:  0 1px 2px 0 rgba(15, 23, 42, 0.04);
--shadow-sm:  0 1px 2px 0 rgba(15, 23, 42, 0.05),
              0 1px 3px 0 rgba(15, 23, 42, 0.06);
--shadow-md:  0 2px 4px -1px rgba(15, 23, 42, 0.06),
              0 4px 6px -2px rgba(15, 23, 42, 0.04);
--shadow-lg:  0 4px 6px -2px rgba(15, 23, 42, 0.05),
              0 10px 15px -3px rgba(15, 23, 42, 0.08);
--shadow-xl:  0 8px 10px -4px rgba(15, 23, 42, 0.06),
              0 20px 25px -5px rgba(15, 23, 42, 0.10);
--shadow-2xl: 0 25px 50px -12px rgba(15, 23, 42, 0.18);

/* Focus ring (NOT a shadow, but the only "glow" allowed) */
--ring-focus: 0 0 0 3px rgba(94, 106, 210, 0.20);
--ring-error: 0 0 0 3px rgba(220, 38, 38, 0.16);

/* Dark mode: shadows almost invisible; elevation is conveyed via background lightening */
--shadow-xs-dark:  0 1px 2px 0 rgba(0, 0, 0, 0.30);
--shadow-sm-dark:  0 1px 3px 0 rgba(0, 0, 0, 0.40);
--shadow-md-dark:  0 4px 8px -2px rgba(0, 0, 0, 0.50);
--shadow-lg-dark:  0 12px 20px -6px rgba(0, 0, 0, 0.55);
```

### 6.2 Elevation → Component Mapping

| Layer | Shadow | Examples |
|---|---|---|
| 0 (flat on canvas) | none | Sidebar, page body, inline rows |
| 1 (resting card) | `--shadow-xs` or none + 1px border | Default card on `--bg-canvas` |
| 2 (hovered card) | `--shadow-sm` | Card with `:hover` state |
| 3 (dropdown, popover) | `--shadow-md` | Menu, popover, select dropdown |
| 4 (modal, dialog) | `--shadow-xl` | Dialog, slide-over |
| 5 (toast over modal) | `--shadow-2xl` | Toast, command palette over modal backdrop |

### 6.3 Border-vs-Shadow Decision

For most cards, **prefer a 1px border over a shadow**. Borders are crisper at any DPI and read more "product". Use shadow only when:
- The element is floating over content (popover, modal, dropdown, toast)
- A drag-and-drop ghost is rendered
- A row is "lifted" to indicate selection while dragging

---

## 7. Animation System

### 7.1 Principle

SaaS motion is **fast, ease-out, and only on user-initiated events**. No entrance animations on page mount, no decorative parallax, no stagger on every grid. Motion's job is to confirm an action happened, not to entertain.

### 7.2 Easing

```css
/* Default — used for most state transitions */
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);   /* expo-out, snappy */

/* For things that recoil (modal entrance, popover) */
--ease-out-back: cubic-bezier(0.34, 1.56, 0.64, 1);

/* Press / active (deceleration into rest) */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

/* Linear — for indeterminate progress / spinners only */
--ease-linear: linear;
```

**Do NOT use** `ease`, `ease-in`, or unspecified defaults. They feel sluggish in SaaS contexts.

### 7.3 Duration Scale

| Token | ms | Use |
|---|---|---|
| `--duration-75` | 75 | Color change, opacity flip (button press color) |
| `--duration-100` | 100 | Hover background fill |
| `--duration-150` | 150 | **Default** — most transitions |
| `--duration-200` | 200 | Dropdown/popover enter |
| `--duration-250` | 250 | Modal/dialog enter |
| `--duration-300` | 300 | Slide-over (drawer) enter |
| `--duration-500` | 500 | Skeleton shimmer cycle |

**Anything longer than 300ms in a product UI is wrong.** Marketing pages can take more time; product UIs cannot.

### 7.4 Standard Transitions

```css
/* Color/border (default for all interactive elements) */
button, a, input, select, textarea, [role="button"] {
  transition:
    background-color var(--duration-150) var(--ease-out),
    border-color var(--duration-150) var(--ease-out),
    color var(--duration-150) var(--ease-out),
    box-shadow var(--duration-150) var(--ease-out);
}

/* Modal/dialog */
.dialog-enter { animation: dialog-enter 250ms var(--ease-out-back); }
@keyframes dialog-enter {
  from { opacity: 0; transform: translateY(8px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

/* Popover/dropdown */
.popover-enter { animation: popover-enter 150ms var(--ease-out); }
@keyframes popover-enter {
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Toast slide-in */
.toast-enter { animation: toast-enter 200ms var(--ease-out); }
@keyframes toast-enter {
  from { opacity: 0; transform: translateX(8px); }
  to   { opacity: 1; transform: translateX(0); }
}

/* Skeleton shimmer */
.skeleton {
  background: linear-gradient(90deg, var(--neutral-100) 25%, var(--neutral-200) 50%, var(--neutral-100) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
}
@keyframes shimmer {
  from { background-position: 200% 0; }
  to   { background-position: -200% 0; }
}
```

### 7.5 What NOT to Animate

- **Page mount.** Render synchronously. The page is the priority, not the motion.
- **Sidebar nav items individually staggering in.** Render the whole nav at once.
- **Tab content fade.** Switching tabs is an instant context change; fade hides the change.
- **Table rows.** A 1000-row table that fades in row-by-row is unusable.

### 7.6 What SHOULD Animate

- Button hover (background-color 100ms)
- Focus ring (box-shadow 150ms)
- Modal/dialog enter and exit (250ms)
- Popover/dropdown enter (150ms)
- Toast slide-in (200ms)
- Skeleton shimmer (loading states)
- Accordion expand/collapse (height 200ms)
- Optimistic UI confirmations (checkmark scale-in 150ms)

### 7.7 `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Always include. SaaS users may have vestibular sensitivity or use the OS-level reduce-motion setting.

---

## 8. Layout System

### 8.1 The Canonical SaaS Shell

```
┌─────────────────────────────────────────────────────────────────┐
│ [Topbar: workspace switcher | search ⌘K | user menu] 48px       │
├──────────────┬──────────────────────────────────────────────────┤
│              │                                                  │
│              │   Page header                                    │
│              │   ┌────────────────────────────────────────────┐ │
│              │   │ Title             [primary action] [⋯ menu]│ │
│   Sidebar    │   │ Description / breadcrumb                   │ │
│   (240-     │   └────────────────────────────────────────────┘ │
│    280px)    │                                                  │
│              │   Page body (cards, tables, settings)            │
│   Nav items  │                                                  │
│   Sections   │   ┌──────────────────────────────────────────┐   │
│   Footer     │   │  Card / Panel                            │   │
│              │   └──────────────────────────────────────────┘   │
│              │                                                  │
└──────────────┴──────────────────────────────────────────────────┘
```

This is the Stripe/Linear/Vercel/Notion layout. Three regions:

1. **Topbar** (48–56px): workspace/team switcher on the left, global search (`⌘K`) center or right, user menu on far right. Stays fixed during scroll.
2. **Sidebar** (240–280px): primary nav. Collapsible to a 56px icon rail on narrow screens. Stays fixed during scroll.
3. **Content** (remaining width, max ~1200px centered for readability OR full-width for tables): page header → page body.

Variations:
- **Linear-style** has no topbar — the sidebar takes the whole left edge, search lives inside the content header.
- **Notion-style** has only a sidebar, page-level breadcrumbs at top of content.
- **Settings-style** uses a *secondary* sidebar (settings nav) inside the content area, so two sidebars are visible.

### 8.2 Container Widths

| Token | px | Use |
|---|---|---|
| `--container-sm` | 640 | Single-column forms, auth, dialogs |
| `--container-md` | 768 | Settings forms, account pages |
| `--container-lg` | 1024 | Dashboard pages, default content max |
| `--container-xl` | 1280 | Wide dashboards with sidebars-in-content |
| `--container-2xl` | 1536 | Data tables, monitoring views (full-bleed) |

**Tables get `--container-2xl` or full-bleed.** Settings forms get `--container-md` (max ~720px reading column).

### 8.3 Breakpoints

| Name | min-width | Behavior |
|---|---|---|
| `sm` | 640px | Form inputs reach full width on phones |
| `md` | 768px | Two-column form layouts kick in |
| `lg` | 1024px | Sidebar appears (below this, sidebar becomes a sheet/drawer) |
| `xl` | 1280px | Sidebar stays expanded; data tables show all columns |
| `2xl` | 1536px | Multi-column dashboards |

Mobile rule: the sidebar collapses to a hamburger that opens a full-height sheet. The topbar's search and user menu remain.

### 8.4 Grid Patterns

```css
/* Page header — title left, actions right */
.page-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
}

/* Two-column form (label left, input right) — settings page idiom */
.form-row {
  display: grid;
  grid-template-columns: minmax(0, 240px) minmax(0, 1fr);
  gap: 24px;
  padding: 20px 0;
  border-bottom: 1px solid var(--border-default);
}
.form-row:last-child { border-bottom: none; }
.form-row__label { font-size: 13px; font-weight: 500; color: var(--text-primary); }
.form-row__hint  { font-size: 12px; color: var(--text-muted); margin-top: 4px; }

/* Card grid (3-col on desktop, 2 on tablet, 1 on mobile) */
.card-grid {
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;
}
@media (min-width: 768px) { .card-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .card-grid { grid-template-columns: repeat(3, 1fr); } }

/* KPI strip — auto-fit, never wider than 280, never narrower than 200 */
.kpi-strip {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
}
```

### 8.5 Sidebar Anatomy

```
[Workspace switcher]      32px row, hover bg, dropdown chevron
─────────────────────
SECTION LABEL             11px uppercase, --neutral-500, 8px y-padding
  [icon] Item 1           36px row, 13px text, 8px gap, hover bg-100
  [icon] Item 2           selected: bg-brand-50 + brand-700 text
  [icon] Item 3
─────────────────────
SECTION LABEL
  [icon] Item 4
─────────────────────
                          (stretches to fill)
[avatar] user@email       Bottom; opens user menu upward
```

Key spec:
- Sidebar bg: `--bg-canvas` (slightly tinted from page surface) OR `--bg-surface` flat
- Nav items: 36px tall, 8px horizontal padding, 6px radius, gap 8px between icon + text
- Active item: `bg: var(--brand-50)`, `color: var(--brand-700)`, **no border, no left-accent stripe** (Linear-style minimal)
- Section labels: `text-2xs` uppercase, `--neutral-500`, 8px y-padding
- Width: 256px default, 56px collapsed (icons only)

---

## 9. Dark Mode

### 9.1 Detection

```html

```

Inline in `<head>` BEFORE any stylesheets to prevent flash-of-light-theme on dark-preferred users.

### 9.2 CSS Token Mapping

```css
:root {
  --bg-canvas: #F8FAFC;
  --bg-surface: #FFFFFF;
  --bg-elevated: #FFFFFF;
  --text-primary: #0F172A;
  --text-muted: #475569;
  --text-subtle: #94A3B8;
  --border-default: #E2E8F0;
  --border-strong: #CBD5E1;
  --brand-fg: #5E6AD2;
  --brand-bg-subtle: #EEF0FB;
}

.dark {
  --bg-canvas: #0A0E1A;
  --bg-surface: #111827;
  --bg-elevated: #1F2937;
  --text-primary: #F1F5F9;
  --text-muted: #94A3B8;
  --text-subtle: #64748B;
  --border-default: #1F2937;
  --border-strong: #374151;
  --brand-fg: #A5B4FC;
  --brand-bg-subtle: rgba(94, 106, 210, 0.16);
}
```

### 9.3 Three-Way Theme Toggle

Always offer `system | light | dark`. The user expects to match OS preference by default but be able to override.

```javascript
function setTheme(mode /* 'system' | 'light' | 'dark' */) {
  if (mode === 'system') {
    localStorage.removeItem('theme');
    const dark = matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', dark);
  } else {
    localStorage.setItem('theme', mode);
    document.documentElement.classList.toggle('dark', mode === 'dark');
  }
}

matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    document.documentElement.classList.toggle('dark', e.matches);
  }
});
```

### 9.4 Dark-Mode-Specific Rules

- **Borders go invisible.** In dark mode, a 1px border with `rgba(255, 255, 255, 0.08)` reads cleaner than the inverted neutral. Use a slightly translucent border for surfaces, solid `--border-default` for input fields.
- **No drop shadows.** Or, dramatically reduce them. In dark mode, elevation is conveyed by *lighter* surface backgrounds, not by darker shadows underneath.
- **Brand color shifts lighter.** `--brand-fg` becomes `#A5B4FC` (brand-300/400 range) so it has enough contrast against the dark canvas.
- **Image / chart luminance.** If you render charts/screenshots inside a card, the card background should be `--bg-elevated` (lighter than canvas) so the artwork doesn't appear floating on void.

---

## 10. Accessibility

### 10.1 Color Contrast

Minimum ratios:
- **Body text on background: 4.5:1** (WCAG AA Normal Text)
- **Large text (≥18px or 14px bold) on background: 3:1**
- **UI components (button border, input border, focus ring) against adjacent color: 3:1**
- **Non-text indicators (icons that convey state): 3:1**

Verify the included palette:
- `#0F172A` on `#FFFFFF` = 19.3:1 ✓
- `#475569` (muted) on `#FFFFFF` = 7.5:1 ✓
- `#94A3B8` (subtle) on `#FFFFFF` = 3.6:1 ✓ (large text / decorative only)
- `#5E6AD2` (brand) on `#FFFFFF` = 5.7:1 ✓
- `#FFFFFF` on `#5E6AD2` (brand button) = 5.7:1 ✓

### 10.2 Focus States

```css
/* Default focus ring for all interactive elements */
*:focus { outline: none; }
*:focus-visible {
  outline: 2px solid var(--brand-fg);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

/* For elements with their own visual treatment (buttons, inputs), use box-shadow ring */
button:focus-visible,
[role="button"]:focus-visible,
a:focus-visible {
  outline: none;
  box-shadow: var(--ring-focus);
}

input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: none;
  border-color: var(--brand-fg);
  box-shadow: var(--ring-focus);
}
```

**Never remove the focus ring without replacing it.** This is the single most common SaaS accessibility regression.

### 10.3 Keyboard Map (every SaaS app should implement)

| Key | Action |
|---|---|
| `⌘K` / `Ctrl+K` | Open command palette |
| `/` | Focus the page search input |
| `g` then `d` | Go to dashboard (vim-style nav, optional but Linear/GitHub do it) |
| `?` | Show keyboard shortcut cheat sheet |
| `Esc` | Close modal, dismiss popover, blur input |
| `Tab` / `Shift+Tab` | Move focus forward/back |
| `Enter` | Activate focused button/link; submit form when input focused |
| `Space` | Toggle checkbox/switch; activate button |
| `↑` / `↓` | Navigate list items, table rows, menu items |
| `j` / `k` | Same as ↓ / ↑ (vim-style; optional) |

### 10.4 Semantic Patterns

- Buttons use `<button>`, links use `<a href>`. **Never** use a `<div onClick>` for either.
- Form fields have a visible `<label>` (or `aria-label` if visually replaced by a placeholder pattern).
- Required fields: visible `*` marker AND `aria-required="true"`.
- Error messages: linked via `aria-describedby`, role `alert` for the first error.
- Tables: `<th scope="col">` headers, optional `<caption>` for context.
- Modals: trap focus, restore focus to trigger on close, `aria-modal="true"`, `role="dialog"`, labeled by heading.
- Toasts: `role="status"` for non-critical, `role="alert"` for errors.

### 10.5 Touch Targets

Minimum 44×44px (WCAG 2.5.5). On desktop SaaS, buttons can be 32-36px tall as long as the **clickable hit area** (via padding) reaches 44px.

```css
.icon-button {
  position: relative;
  width: 32px;
  height: 32px;
}
.icon-button::before {
  content: '';
  position: absolute;
  inset: -6px;  /* extends hit area to 44x44 */
}
```

### 10.6 Screen Reader Utilities

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  clip: auto;
  white-space: normal;
}
```

Use `.sr-only` for "Skip to main content" links and icon-only button labels.

---

## 11. Decorative Elements (Used Sparingly)

SaaS UIs avoid heavy decoration. The few decorative idioms that DO appear:

### 11.1 Section Dividers

```css
.divider {
  height: 1px;
  background: var(--border-default);
  margin: 24px 0;
}

/* Vertical divider (e.g., between toolbar groups) */
.divider-v {
  width: 1px;
  background: var(--border-default);
  align-self: stretch;
  margin: 0 8px;
}
```

### 11.2 Inline Pills / Status Dots

```css
/* Status dot (used in tables: ● Active) */
.status-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  vertical-align: middle;
  margin-right: 6px;
}
.status-dot--success { background: #16A34A; }
.status-dot--warning { background: #CA8A04; }
.status-dot--error   { background: #DC2626; }
.status-dot--neutral { background: #94A3B8; }

/* Pulsing dot for "live" / "syncing" */
.status-dot--pulse {
  position: relative;
}
.status-dot--pulse::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: inherit;
  animation: pulse-ring 1.6s ease-out infinite;
}
@keyframes pulse-ring {
  0%   { transform: scale(1);   opacity: 0.6; }
  100% { transform: scale(2.5); opacity: 0; }
}
```

### 11.3 Empty-State Iconography Placeholder

For empty states, draw a single 1.5px-stroke line icon at 48–64px size in `--neutral-300`. Do not use 3D illustrations or stock vectors — they break the "quiet product" register.

```html
<div class="empty-state">
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
       style="color: var(--neutral-300);">
    <!-- single line-art icon (e.g., a Lucide icon) -->
  </svg>
  <h3>No customers yet</h3>
  <p>Customers appear here after their first successful payment.</p>
  <button>Create test customer</button>
</div>
```

### 11.4 Subtle Background Grid (for empty canvases)

For dashboard backgrounds, an OPTIONAL very subtle dot grid is acceptable:

```css
.canvas-grid {
  background-color: var(--bg-canvas);
  background-image: radial-gradient(circle, var(--neutral-200) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: 0 0;
}
```

Opacity: never above 30%. Most SaaS apps omit this entirely.

### 11.5 Keyboard Shortcut Chips

```css
.kbd {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 2px 6px;
  font-family: var(--font-mono);
  font-size: 11px;
  line-height: 1.2;
  color: var(--text-muted);
  background: var(--bg-surface);
  border: 1px solid var(--border-default);
  border-bottom-width: 2px;  /* mechanical key look */
  border-radius: 4px;
  vertical-align: middle;
}
```

Usage: `<span class="kbd">⌘</span><span class="kbd">K</span>` inside tooltips, menu items, command palette.

---

## 12. Component Quick Reference

### Buttons

| Variant | Background | Text | Border | Use |
|---|---|---|---|---|
| `primary` | `--brand-600` | `#FFFFFF` | none | The one primary action per surface |
| `secondary` | `--bg-surface` | `--text-primary` | `--border-default` 1px | Most actions ("Cancel", "Save", "Edit") |
| `ghost` | transparent | `--text-primary` | none | Toolbar buttons, table row actions |
| `destructive` | `#DC2626` | `#FFFFFF` | none | Delete, revoke, irreversible |
| `destructive-outline` | `--bg-surface` | `#B91C1C` | `#FCA5A5` | Less aggressive destructive |
| `link` | none | `--brand-600` | none, underline on hover | Inline navigation actions |

Sizes: `sm` (28px tall, 12px text), `md` (32px tall, 13px text — **default**), `lg` (40px tall, 14px text).

### Inputs

| State | Border | Background | Shadow |
|---|---|---|---|
| default | `--border-default` | `--bg-surface` | none |
| hover | `--border-strong` | `--bg-surface` | none |
| focus | `--brand-fg` | `--bg-surface` | `--ring-focus` |
| error | `#DC2626` | `--bg-surface` | `--ring-error` |
| disabled | `--border-default` | `--neutral-50` | none, `opacity: 0.6` |

Sizes match buttons: `sm` (28px), `md` (32px default), `lg` (40px).

### Cards

| Variant | Background | Border | Padding | Shadow |
|---|---|---|---|---|
| default | `--bg-surface` | 1px `--border-default` | 20px | none |
| interactive | `--bg-surface` | 1px `--border-default` | 20px | hover: `--shadow-sm` |
| ghost | none | none | 0 | none — for grouping without enclosure |
| elevated | `--bg-elevated` | none | 24px | `--shadow-md` |
| outline-only | none | 1px `--border-default` | 16px | none — for placeholder/empty slots |

### Badges / Status Pills

| Variant | Background | Text | Border |
|---|---|---|---|
| neutral | `--neutral-100` | `--neutral-700` | none |
| brand | `--brand-50` | `--brand-700` | none |
| success | `#DCFCE7` | `#15803D` | none |
| warning | `#FEF9C3` | `#A16207` | none |
| error | `#FEE2E2` | `#B91C1C` | none |
| info | `#DBEAFE` | `#1D4ED8` | none |

Sizing: padding `2px 8px`, font 11–12px, weight 500, radius 4px (NOT pill). Optional leading status dot.

---

## 13. File Structure Recommendation

```
project/
├── src/
│   ├── styles/
│   │   ├── tokens.css           # All CSS custom properties (one file, single source of truth)
│   │   ├── base.css             # Reset, html/body, typography defaults, focus
│   │   └── globals.css          # @import the above + utility classes
│   ├── components/
│   │   ├── primitives/          # Lowest-level, design-token-aware
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── Checkbox.tsx
│   │   │   ├── Switch.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Avatar.tsx
│   │   │   ├── Tooltip.tsx
│   │   │   ├── Kbd.tsx
│   │   │   └── Spinner.tsx
│   │   ├── overlays/            # Floating layers
│   │   │   ├── Dialog.tsx
│   │   │   ├── Sheet.tsx
│   │   │   ├── Popover.tsx
│   │   │   ├── DropdownMenu.tsx
│   │   │   ├── Toast.tsx
│   │   │   └── CommandPalette.tsx
│   │   ├── data/                # Data display
│   │   │   ├── DataTable.tsx
│   │   │   ├── Pagination.tsx
│   │   │   ├── KpiCard.tsx
│   │   │   └── EmptyState.tsx
│   │   ├── forms/
│   │   │   ├── FormField.tsx
│   │   │   ├── FormRow.tsx
│   │   │   └── FormSection.tsx
│   │   └── shell/               # The app frame
│   │       ├── AppShell.tsx
│   │       ├── Sidebar.tsx
│   │       ├── Topbar.tsx
│   │       ├── PageHeader.tsx
│   │       └── Breadcrumb.tsx
│   └── lib/
│       ├── theme.ts             # Theme toggle (system/light/dark)
│       ├── shortcuts.ts         # Global keyboard handler
│       └── format.ts            # Money, date, relative time helpers
├── tailwind.config.ts           # Tokens mirrored from tokens.css
└── tsconfig.json
```

Rules:
- **`tokens.css` is the single source of truth.** `tailwind.config.ts` reads from it (or duplicates its values, but only as a mirror).
- **Primitives have no business logic.** They accept props, render styled DOM. State lives in feature components that wrap them.
- **No component crosses layer boundaries.** A primitive can't import from `shell/`; `shell/` can't import from `data/`.

---

## 14. Full CSS Custom Properties

Copy into `styles/tokens.css`:

```css
:root {
  /* ── Brand ── */
  --brand-50:  #EEF0FB;
  --brand-100: #DDE0F7;
  --brand-200: #B9C0EF;
  --brand-500: #7B85DC;
  --brand-600: #5E6AD2;
  --brand-700: #4A56C0;
  --brand-800: #3A45A8;
  --brand-900: #2A3284;
  --brand-fg: var(--brand-600);
  --brand-bg-subtle: var(--brand-50);

  /* ── Neutrals (slate) ── */
  --neutral-0:   #FFFFFF;
  --neutral-50:  #F8FAFC;
  --neutral-100: #F1F5F9;
  --neutral-200: #E2E8F0;
  --neutral-300: #CBD5E1;
  --neutral-400: #94A3B8;
  --neutral-500: #64748B;
  --neutral-600: #475569;
  --neutral-700: #334155;
  --neutral-800: #1E293B;
  --neutral-900: #0F172A;
  --neutral-950: #020617;

  /* ── Semantic surfaces ── */
  --bg-canvas:   var(--neutral-50);
  --bg-surface:  var(--neutral-0);
  --bg-elevated: var(--neutral-0);
  --bg-hover:    var(--neutral-100);

  --text-primary: var(--neutral-900);
  --text-muted:   var(--neutral-600);
  --text-subtle:  var(--neutral-400);

  --border-default: var(--neutral-200);
  --border-strong:  var(--neutral-300);

  /* ── State ── */
  --success-fg:  #15803D;
  --success-bg:  #DCFCE7;
  --warning-fg:  #A16207;
  --warning-bg:  #FEF9C3;
  --error-fg:    #B91C1C;
  --error-bg:    #FEE2E2;
  --info-fg:     #1D4ED8;
  --info-bg:     #DBEAFE;

  /* ── Chart palette ── */
  --chart-1: #2563EB;
  --chart-2: #16A34A;
  --chart-3: #CA8A04;
  --chart-4: #DC2626;
  --chart-5: #9333EA;
  --chart-6: #0891B2;
  --chart-7: #DB2777;
  --chart-8: #65A30D;

  /* ── Typography ── */
  --font-sans: "Inter", "Geist", -apple-system, BlinkMacSystemFont, "Segoe UI",
               "SF Pro Text", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", "Geist Mono", "SF Mono", "Menlo", "Consolas",
               ui-monospace, monospace;

  /* ── Spacing (multiples of 4) ── */
  --space-unit: 4px;

  /* ── Radius ── */
  --radius-none: 0;
  --radius-sm:   4px;
  --radius-md:   6px;
  --radius-lg:   8px;
  --radius-xl:   12px;
  --radius-2xl:  16px;
  --radius-full: 9999px;

  /* ── Shadows ── */
  --shadow-xs:  0 1px 2px 0 rgba(15, 23, 42, 0.04);
  --shadow-sm:  0 1px 2px 0 rgba(15, 23, 42, 0.05), 0 1px 3px 0 rgba(15, 23, 42, 0.06);
  --shadow-md:  0 2px 4px -1px rgba(15, 23, 42, 0.06), 0 4px 6px -2px rgba(15, 23, 42, 0.04);
  --shadow-lg:  0 4px 6px -2px rgba(15, 23, 42, 0.05), 0 10px 15px -3px rgba(15, 23, 42, 0.08);
  --shadow-xl:  0 8px 10px -4px rgba(15, 23, 42, 0.06), 0 20px 25px -5px rgba(15, 23, 42, 0.10);
  --shadow-2xl: 0 25px 50px -12px rgba(15, 23, 42, 0.18);
  --ring-focus: 0 0 0 3px rgba(94, 106, 210, 0.20);
  --ring-error: 0 0 0 3px rgba(220, 38, 38, 0.16);

  /* ── Motion ── */
  --ease-out:        cubic-bezier(0.16, 1, 0.3, 1);
  --ease-out-back:   cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-in-out:     cubic-bezier(0.4, 0, 0.2, 1);
  --duration-75:  75ms;
  --duration-100: 100ms;
  --duration-150: 150ms;
  --duration-200: 200ms;
  --duration-250: 250ms;
  --duration-300: 300ms;

  /* ── Layout ── */
  --container-sm:  640px;
  --container-md:  768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1536px;
  --sidebar-w:        256px;
  --sidebar-w-collapsed: 56px;
  --topbar-h:         48px;
}

.dark {
  --bg-canvas:   #0A0E1A;
  --bg-surface:  #111827;
  --bg-elevated: #1F2937;
  --bg-hover:    rgba(255, 255, 255, 0.04);

  --text-primary: #F1F5F9;
  --text-muted:   #94A3B8;
  --text-subtle:  #64748B;

  --border-default: #1F2937;
  --border-strong:  #374151;

  --brand-fg:         #A5B4FC;
  --brand-bg-subtle:  rgba(94, 106, 210, 0.16);

  --success-fg: #4ADE80;
  --success-bg: rgba(22, 163, 74, 0.16);
  --warning-fg: #FACC15;
  --warning-bg: rgba(202, 138, 4, 0.16);
  --error-fg:   #F87171;
  --error-bg:   rgba(220, 38, 38, 0.16);
  --info-fg:    #60A5FA;
  --info-bg:    rgba(37, 99, 235, 0.16);

  --shadow-xs:  0 1px 2px 0 rgba(0, 0, 0, 0.30);
  --shadow-sm:  0 1px 3px 0 rgba(0, 0, 0, 0.40);
  --shadow-md:  0 4px 8px -2px rgba(0, 0, 0, 0.50);
  --shadow-lg:  0 12px 20px -6px rgba(0, 0, 0, 0.55);
  --shadow-xl:  0 20px 32px -10px rgba(0, 0, 0, 0.60);
  --shadow-2xl: 0 30px 60px -15px rgba(0, 0, 0, 0.70);
}

/* ── Base ── */
html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "cv11" 1, "ss01" 1;
}

body {
  margin: 0;
  background: var(--bg-canvas);
  color: var(--text-primary);
  font-family: var(--font-sans);
  font-size: 14px;
  line-height: 1.43;
}

.numeric, table, [data-numeric="true"] {
  font-variant-numeric: tabular-nums;
}

*:focus { outline: none; }
*:focus-visible {
  outline: 2px solid var(--brand-fg);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 15. Forensic Visual Analysis

> **Design Language DNA & Implementation Physics**
> Reverse-engineered patterns from Stripe Dashboard, Linear, Vercel, Notion, Clerk, PlanetScale.

### 15.1 Visual Hierarchy & Spatial Logic

#### Density Tier

| Tier | Row Height | Button Height | Default Text | When |
|---|---|---|---|---|
| **Compact** (Linear, dev tools) | 32px | 28px | 13px | Power-user surfaces, data-heavy tables |
| **Default** (Stripe, Vercel) | 40px | 32px | 14px | The default SaaS product UI |
| **Comfortable** (Notion, Clerk) | 48px | 36px | 15px | Content-heavy, settings, billing |
| **Spacious** (Auth, onboarding) | 56px+ | 40px+ | 16px | Single-purpose conversion pages |

**Pick one tier per product, not per page.** Mixing density breaks the rhythm.

#### Layout Constants

```
Content width:
├── Tables / lists:       full bleed within --container-2xl (1536px)
├── Dashboards:           --container-xl (1280px) centered
├── Settings forms:       --container-md (768px) — readable column
└── Auth / onboarding:    --container-sm (640px) centered

Page padding (X):
├── Mobile:    16px (px-4)
├── Tablet:    24px (px-6)
└── Desktop:   32px (px-8)

Page padding (Y):
├── Page header → content:     16-24px
├── Section → section:         32-40px
└── Last section → page end:   64px (so footer doesn't crowd)

Grid gaps:
├── KPI cards:           12px
├── Card grids:          16px (sm) → 20px (md) → 24px (lg)
├── Form fields:         16px (tight) or 20px (default)
└── Settings rows:       0 — separated by 1px bottom border
```

#### The "Three Heights" Rule

In a SaaS UI, three vertical rhythms coexist:

1. **Page rhythm**: 24px / 32px / 48px between page sections.
2. **Component rhythm**: 12px / 16px / 20px inside cards and panels.
3. **Inline rhythm**: 4px / 6px / 8px between adjacent elements (icon + label, badge + text).

Each rhythm is a multiple of 4 but **does not reuse** the same numbers from another rhythm. Inline gaps stay ≤8px, component gaps stay 12–20px, page gaps stay ≥24px. This is what makes a SaaS UI feel "organized" without conscious effort.

### 15.2 Color Science & Elevation

#### How elevation is conveyed (without heavy shadows)

| Layer | Light Mode | Dark Mode |
|---|---|---|
| Canvas | `#F8FAFC` (1 step down from white) | `#0A0E1A` |
| Surface (default card) | `#FFFFFF` + 1px border | `#111827` + 1px `rgba(255,255,255,0.04)` border |
| Elevated (popover) | `#FFFFFF` + `--shadow-md` | `#1F2937` + low shadow |
| Modal | `#FFFFFF` + `--shadow-xl` + backdrop blur | `#1F2937` + `--shadow-xl` + backdrop blur |

In light mode, elevation = subtle shadow + 1px border.
In dark mode, elevation = LIGHTER background (the higher the layer, the lighter the bg) + nearly-invisible shadow.

#### Brand color is "interaction language"

- Brand color = "this is interactive, this is selected, this is focused."
- Anything else uses neutrals.
- Status colors (success/error/etc.) are ONLY for status — never for buttons that don't represent that status.

A useful test: **squint at the UI**. You should see 90% gray-on-white, with brand pinpricks marking exactly the interactive surface you'd click.

#### Selected-state convention

| State | Convention |
|---|---|
| Hover | Background shifts by 1 step (`--bg-surface` → `--bg-hover`) |
| Active (pressed) | Background shifts by 2 steps OR scale(0.98) |
| Selected (persistent) | `--brand-bg-subtle` background + `--brand-fg` text. **No border change.** |
| Focused (keyboard) | `--ring-focus` box-shadow ring. Independent of hover/selected. |
| Disabled | `opacity: 0.5` + `cursor: not-allowed`. Color unchanged. |

### 15.3 Typography & Micro-Copy

#### The "13/14 default" rule

The default body/UI size is **13px or 14px**. Headings step up modestly (no 48px headlines in a dashboard). The biggest text in a typical product page is the H1 at 24–30px.

| Element | Size | Weight |
|---|---|---|
| H1 (page title) | 24px | 600 |
| H2 (section) | 18px | 600 |
| H3 (card heading) | 15-16px | 600 |
| Body / table cell | 13-14px | 400 |
| Label / button | 13-14px | 500 |
| Microlabel / caption | 11-12px | 500 (uppercase optional) |
| Mono (id, code, money) | 12-13px | 400 |

#### Micro-copy patterns

**Buttons** — verb + object, never just verb:
- ✅ "Create customer", "Save changes", "Delete invoice"
- ❌ "Submit", "OK", "Click here"

**Empty state headings** — declarative, not interrogative:
- ✅ "No active subscriptions"
- ❌ "You don't have any subscriptions yet, would you like to create one?"

**Inline help / hints** — single sentence, no period (because it's not a sentence in form context):
- ✅ "Used for receipts and customer emails"
- ❌ "This email will be used for receipts and customer emails."

**Destructive confirmation** — type-to-confirm for irreversible:
- "Type `acme-corp` to confirm deletion" — see GitHub's repo deletion modal.

**Toast text** — past tense, with optional action:
- ✅ "Invoice sent. [Undo]"
- ❌ "Sending invoice…" (use a loading state for in-flight)

### 15.4 Component Anatomy

#### Button (the most-touched primitive)

```
┌────────────────────────────────────┐
│  [icon] [label]            [⌘K]    │   ← gap 8px between icon/label, 12px to shortcut
└────────────────────────────────────┘
   ↑ padding 12-14px              ↑ padding 12-14px
   ─ height: 32px (default)
   ─ radius: 6px
   ─ font: 13px / 500
```

Variants:
- `primary` — solid brand bg, white text. ONE per surface.
- `secondary` — surface bg, neutral border, primary text. Most actions.
- `ghost` — no bg, no border. Toolbar / row actions.
- `destructive` — solid red bg. Reserved for irreversible.

States:
- default → hover (bg shifts) → active (bg shifts more / scale 0.98) → focus (ring) → disabled (opacity 0.5)

Forbidden:
- Pill radius (`9999px`) — that's marketing
- Gradient background — that's marketing
- Drop shadow — buttons are flat against the surface

#### Input

```
┌────────────────────────────────────┐
│  [icon] placeholder text      [×]  │   ← optional leading icon, trailing clear
└────────────────────────────────────┘
   ─ height: 32px (default)
   ─ radius: 6px
   ─ border: 1px --border-default
   ─ padding: 0 12px (or 0 36px when icon present)
   ─ font: 14px / 400
```

Focus state: border → `--brand-fg`, add `--ring-focus` box-shadow. **Never use solid background change for focus** — borders + ring are the convention.

Error state: border → `#DC2626`, ring → `--ring-error`. Show error message below input in `#B91C1C`, 12px, with `aria-describedby` linking.

#### Card

```
┌──────────────────────────────────┐
│  Heading            [actions]    │   ← header row, 16-20px from edges
│  Optional description            │
├──────────────────────────────────┤   ← 1px divider OR padding gap
│                                  │
│  Card body                       │
│                                  │
└──────────────────────────────────┘
   ─ radius: 8px
   ─ border: 1px --border-default
   ─ background: --bg-surface
   ─ padding: 20-24px
   ─ shadow: none (default)
```

The card has a 1px border by default. NO shadow. NO inner glow. The border is what carries the elevation — it implies a layer.

Interactive cards (e.g., clickable list items): hover lightens border to `--border-strong` AND adds `--shadow-sm`. Don't change the background.

### 15.5 Animation Physics

#### Speed map

```
Color/border transitions:     100-150ms
Hover state:                  100ms
Focus ring appearance:        150ms
Dropdown / popover enter:     150ms
Modal / dialog enter:         200-250ms
Slide-over (drawer) enter:    300ms
Toast slide-in:               200ms
Tab switch:                   instant (no animation)
Page mount:                   instant
Skeleton shimmer cycle:       1500ms
Spinner rotation:             750ms per turn
```

#### Easing map

```
Linear → only for indeterminate progress / spinners
ease-out (expo-out, --ease-out) → DEFAULT for everything else
ease-out-back → modal/popover entrance (subtle overshoot)
ease-in-out → reversible transitions (accordion height)
ease-in → almost never; exit animations only
```

#### The "no entrance animation" rule

Page mount animations are bad UX in SaaS:
- The user already navigated; the destination is the priority.
- An entrance animation delays perceived load time.
- Staggered grids look "designed" on first view and tedious on the second.

The ONLY place entrance animation belongs in a product UI is **overlay layers**: modals, popovers, toasts. These are appearing on top of an already-visible page, so the motion is meaningful (where did this come from?).

### 15.6 Technical Deliverables

#### Tailwind Configuration

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx,js,jsx,html}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#EEF0FB', 100: '#DDE0F7', 200: '#B9C0EF',
          500: '#7B85DC', 600: '#5E6AD2', 700: '#4A56C0',
          800: '#3A45A8', 900: '#2A3284',
        },
        neutral: {
          0:   '#FFFFFF', 50:  '#F8FAFC', 100: '#F1F5F9',
          200: '#E2E8F0', 300: '#CBD5E1', 400: '#94A3B8',
          500: '#64748B', 600: '#475569', 700: '#334155',
          800: '#1E293B', 900: '#0F172A', 950: '#020617',
        },
        canvas:   'var(--bg-canvas)',
        surface:  'var(--bg-surface)',
        elevated: 'var(--bg-elevated)',
      },
      fontFamily: {
        sans: ['Inter', 'Geist', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Geist Mono', 'SF Mono', 'Menlo', 'Consolas', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        '2xs':  ['11px', { lineHeight: '15px', letterSpacing: '0.04em' }],
        xs:     ['12px', { lineHeight: '16px' }],
        sm:     ['13px', { lineHeight: '18px' }],
        base:   ['14px', { lineHeight: '20px' }],
        md:     ['15px', { lineHeight: '22px' }],
        lg:     ['16px', { lineHeight: '24px', letterSpacing: '-0.005em' }],
        xl:     ['18px', { lineHeight: '26px', letterSpacing: '-0.01em' }],
        '2xl':  ['20px', { lineHeight: '28px', letterSpacing: '-0.015em' }],
        '3xl':  ['24px', { lineHeight: '32px', letterSpacing: '-0.02em' }],
        '4xl':  ['30px', { lineHeight: '36px', letterSpacing: '-0.025em' }],
      },
      borderRadius: {
        none: '0',
        sm:   '4px',
        DEFAULT: '6px',
        md:   '6px',
        lg:   '8px',
        xl:   '12px',
        '2xl': '16px',
        full: '9999px',
      },
      boxShadow: {
        xs:  '0 1px 2px 0 rgba(15, 23, 42, 0.04)',
        sm:  '0 1px 2px 0 rgba(15, 23, 42, 0.05), 0 1px 3px 0 rgba(15, 23, 42, 0.06)',
        md:  '0 2px 4px -1px rgba(15, 23, 42, 0.06), 0 4px 6px -2px rgba(15, 23, 42, 0.04)',
        lg:  '0 4px 6px -2px rgba(15, 23, 42, 0.05), 0 10px 15px -3px rgba(15, 23, 42, 0.08)',
        xl:  '0 8px 10px -4px rgba(15, 23, 42, 0.06), 0 20px 25px -5px rgba(15, 23, 42, 0.10)',
        '2xl': '0 25px 50px -12px rgba(15, 23, 42, 0.18)',
        focus: 'var(--ring-focus)',
        'focus-error': 'var(--ring-error)',
      },
      transitionTimingFunction: {
        out:      'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        75: '75ms', 100: '100ms', 150: '150ms',
        200: '200ms', 250: '250ms', 300: '300ms',
      },
      maxWidth: {
        '8xl': '1536px',
      },
      animation: {
        'dialog-enter':  'dialog-enter 250ms cubic-bezier(0.34, 1.56, 0.64, 1)',
        'popover-enter': 'popover-enter 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'toast-enter':   'toast-enter 200ms cubic-bezier(0.16, 1, 0.3, 1)',
        shimmer:         'shimmer 1.5s ease-in-out infinite',
      },
      keyframes: {
        'dialog-enter': {
          from: { opacity: '0', transform: 'translateY(8px) scale(0.98)' },
          to:   { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'popover-enter': {
          from: { opacity: '0', transform: 'translateY(-4px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'toast-enter': {
          from: { opacity: '0', transform: 'translateX(8px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          from: { backgroundPosition: '200% 0' },
          to:   { backgroundPosition: '-200% 0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

#### Framer Motion Variants

```typescript
// src/lib/motion.ts
import type { Variants, Transition } from 'framer-motion';

const easeOut: Transition['ease'] = [0.16, 1, 0.3, 1];
const easeOutBack: Transition['ease'] = [0.34, 1.56, 0.64, 1];

/** Modals, dialogs */
export const dialogVariants: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.98 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.25, ease: easeOutBack },
  },
  exit: {
    opacity: 0, y: 4, scale: 0.99,
    transition: { duration: 0.15, ease: easeOut },
  },
};

/** Dropdowns, popovers, menus */
export const popoverVariants: Variants = {
  hidden: { opacity: 0, y: -4 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.15, ease: easeOut } },
  exit: { opacity: 0, y: -2, transition: { duration: 0.10, ease: easeOut } },
};

/** Toasts */
export const toastVariants: Variants = {
  hidden: { opacity: 0, x: 16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.20, ease: easeOut } },
  exit: { opacity: 0, x: 16, transition: { duration: 0.15, ease: easeOut } },
};

/** Slide-over / drawer */
export const sheetVariants: Variants = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { duration: 0.30, ease: easeOut } },
  exit: { x: '100%', transition: { duration: 0.25, ease: easeOut } },
};

/** Backdrop fade */
export const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.20, ease: 'linear' } },
  exit: { opacity: 0, transition: { duration: 0.15, ease: 'linear' } },
};

/** Optimistic checkmark (action confirmation) */
export const checkmarkVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1, opacity: 1,
    transition: { duration: 0.20, ease: easeOutBack },
  },
};

/** Accordion expand/collapse */
export const accordionVariants: Variants = {
  collapsed: { height: 0, opacity: 0, transition: { duration: 0.20, ease: easeOut } },
  expanded: { height: 'auto', opacity: 1, transition: { duration: 0.25, ease: easeOut } },
};
```

#### Global Keyboard Handler

```typescript
// src/lib/shortcuts.ts
type Handler = (e: KeyboardEvent) => void;

const handlers = new Map<string, Set<Handler>>();

export function register(combo: string, handler: Handler) {
  if (!handlers.has(combo)) handlers.set(combo, new Set());
  handlers.get(combo)!.add(handler);
  return () => handlers.get(combo)?.delete(handler);
}

function keyOf(e: KeyboardEvent): string {
  const parts: string[] = [];
  if (e.metaKey || e.ctrlKey) parts.push('mod');
  if (e.shiftKey) parts.push('shift');
  if (e.altKey) parts.push('alt');
  parts.push(e.key.toLowerCase());
  return parts.join('+');
}

if (typeof window !== 'undefined') {
  window.addEventListener('keydown', (e) => {
    // Don't trigger global shortcuts inside text fields (except Esc and Mod+K)
    const target = e.target as HTMLElement;
    const inField = target.matches('input, textarea, [contenteditable]');
    const combo = keyOf(e);
    if (inField && combo !== 'escape' && combo !== 'mod+k') return;
    const set = handlers.get(combo);
    if (set?.size) {
      e.preventDefault();
      set.forEach((h) => h(e));
    }
  });
}
```

Usage:
```typescript
useEffect(() => register('mod+k', () => setCommandOpen(true)), []);
useEffect(() => register('/', () => searchRef.current?.focus()), []);
```

---

## 16. SaaS Module Patterns

### 16.1 Application Shell

The canonical layout. Implement once, share across all authenticated pages.

```tsx
export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col bg-canvas text-neutral-900 dark:text-neutral-50">
      <Topbar />
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
```

Key invariants:
- The whole viewport is `h-screen` with `overflow-hidden`. Only the main content area scrolls.
- The topbar and sidebar are **fixed in place**. They stay visible during scroll.
- The content area has its own scroll context (`overflow-y-auto`), so sticky table headers work inside.
- Max content width caps at `--container-2xl` (1280–1536px) for readability; centered with `mx-auto`.

*(README truncated for display. [Read the full README on GitHub](https://github.com/cloudflare/vibesdk)).*
