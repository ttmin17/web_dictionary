---
slug: jakeschincariol-replica-skill-replica-design
name: replica-design
tagline: "Rebuilds an app's design system for a clone: colour roles, type scale,
  spacing, radius, shadows and every component with its states, as design tokens
  "
summary: "What you rebuild is the system: the roles, the scale, the patterns,
  the way a form or a modal behaves. Those are not ownable, and users expect
  them. What you never take:"
categories:
  - security-auth
tags:
  - agent-skills
  - app-clone
  - claude
  - claude-code
status: active
quality_percentile: 62
selection_reason: quality_percentile
first_seen: 2026-11-05
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: Jakeschincariol/replica-skill
  subpath: replica-design
  official_vendor: false
  license: MIT
signals:
  stars: 8543
  last_commit: 2026-10-03T12:07:53Z
  stars_delta_7d: 837
  stars_growth_pct: 10.9
  trending_score: 927.91
  velocity_source: snapshot_delta
  sparkline_4w:
    - 7706
    - 8543
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: Jakeschincariol/replica-skill
  path: replica-design/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:59.761Z
  truncated: false
type: agent_skill
skill:
  skill_name: replica-design
  description: "Rebuilds an app's design system for a clone: colour roles, type
    scale, spacing, radius, shadows and every component with its states, as
    design tokens plus component specs, with original assets instead of the
    target's logos, icons, illustrations or licensed fonts. Includes a WCAG
    contrast checker. Use when the user says \"match the design\", \"rebuild the
    design system\", \"get the colours and fonts\", \"make it look like X\",
    \"design tokens for my clone\", or after /replica-architect."
  folder_path: replica-design
  extra_files:
    - contrast.py
    - tokens.json
  pack_total_skills: 11
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: jakeschincariol-replica-skill
---

# replica-design
Reads `replica/recon.md` and the screenshots in `replica/screens/`. Writes
`replica/design/tokens.json` (template in this folder), `tokens.css`, the
Tailwind mapping, and `replica/design/components.md`.

```bash
python3 contrast.py replica/design/tokens.json     # every text pair, WCAG ratio
```

## The rules

What you rebuild is the **system**: the roles, the scale, the patterns, the
way a form or a modal behaves. Those are not ownable, and users expect them.
What you never take:

- **Logos, icons, illustrations, photos, sounds.** Use an open icon set
  (Lucide, Phosphor, Heroicons, Tabler, all MIT or similar) and make or
  commission your own illustrations. Do not trace theirs.
- **Licensed fonts.** If the original uses a paid or proprietary font, pick
  an open one with the same job: Inter, Geist, IBM Plex, Manrope, Source Serif.
- **Their copy.** Every label and empty state gets written fresh.
- **Their brand colour.** Record it as a role (`accent`), use a neutral
  placeholder now, and replica-brand gives you your own. The signature colour
  plus the signature layout is trade dress, and it changes before launch.

## Step 1: measure, do not guess

From the screenshots (zoom in, use a colour picker on the user's machine):

- **Colour roles**, not colours: bg, surface, border, border-input, text,
  text-muted, accent, on-accent, danger, success, warning. Count how many
  greys the app really uses. Usually 5 to 7.
- **Type scale**: sizes, line heights, weights. Snap to a scale (12, 14, 16,
  20, 28, 40 is common). Note the font category, not the font file.
- **Spacing**: measure gaps between elements. It is almost always a 4 or 8
  base. Write the scale.
- **Radius, shadow, motion**: two or three of each.
- **Layout**: max content width, grid, breakpoints, sidebar width, header height.

## Step 2: write the tokens

Fill `tokens.json`. Keep the role names. replica-brand only changes values.
Generate `tokens.css` as custom properties and map them into Tailwind's theme
so components use `bg-surface text-muted`, never raw hex.

Add a `pairs` list for every text and background combination the app uses,
then:

```bash
python3 contrast.py replica/design/tokens.json
```

AA is the floor: 4.5:1 for body text, 3:1 for large text and for input
borders and focus rings. It exits 1 on a failure. Fix it in the tokens, not
per component.

## Step 3: component specs

For every component in the recon list, one block in `components.md`:

```
Button
  variants  primary, secondary, ghost, danger
  sizes     sm 32px, md 40px, lg 48px
  states    default, hover, active, focus-visible (2px ring, accent), disabled, loading
  tokens    bg accent, text on-accent, radius md, font sm/600
  a11y      real <button>, visible focus, loading keeps the label for screen readers
  used on   S02, S07, S09
```

Every state the recon saw, plus the ones it should have: focus, disabled,
loading, error, empty. Keyboard and screen reader behaviour is part of the
spec.

## Step 4: build the primitives

Build the components in code once, in isolation (a `/design` route or
Storybook), before any screen. Use an accessible base if the stack has one
(Radix, shadcn/ui, React Aria). Screenshot the page. That is the design system
check.

## Output

`tokens.json`, `tokens.css`, the Tailwind config, `components.md`, the
primitives built, and a contrast report with zero AA failures. Next:
`/replica-build`.
