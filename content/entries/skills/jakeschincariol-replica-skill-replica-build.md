---
slug: jakeschincariol-replica-skill-replica-build
name: replica-build
tagline: "Rebuilds an app screen by screen from the recon map: app shell first,
  then the core flow as a vertical slice, then every screen with all its states,
  t"
summary: "- Clean room. Every line of code is written here, from the recon map
  and the specs. Never paste the original's HTML, CSS, JavaScript, SVGs or
  images, never load anything from its domain or CDN, never \"view source
  and..."
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
  subpath: replica-build
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
  path: replica-build/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:59.761Z
  truncated: false
type: agent_skill
skill:
  skill_name: replica-build
  description: "Rebuilds an app screen by screen from the recon map: app shell
    first, then the core flow as a vertical slice, then every screen with all
    its states, ticking off the feature matrix as it goes. Writes every line
    fresh, never the original's code, assets or copy. Use when the user says
    \"build the clone\", \"build screen S07\", \"start building\", \"rebuild
    this screen\", \"implement the booking page\", or after /replica-design."
  folder_path: replica-build
  extra_files: []
  pack_total_skills: 11
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: jakeschincariol-replica-skill
---

# replica-build
Reads `replica/recon.md`, `replica/architecture.md`, `replica/design/`.
Updates `replica/features.csv` (the `clone` column) and keeps
`replica/build-log.md`.

## The rules

- **Clean room.** Every line of code is written here, from the recon map and
  the specs. Never paste the original's HTML, CSS, JavaScript, SVGs or
  images, never load anything from its domain or CDN, never "view source and
  adapt".
- **Your words.** Write every label, button, empty state and email fresh.
  Matching what a button does is parity. Matching its sentence is copying.
- **Tokens only.** No raw hex or pixel values in components. If a value is
  missing, add it to the tokens.

## Step 1: the shell

Routing for every screen in the inventory (stub pages are fine), the layout
(nav, header, sidebar), tokens wired in, the primitives from replica-design,
and seed data so screens have something real to show. Commit.

## Step 2: the vertical slice

The core loop from the recon map, end to end, before anything else. For a
booking app: create an event type, open the public page, book a slot, see it
on the dashboard. Ugly is fine. Working is the point. If replica-backend has
not run yet, use the seed data and a fake data layer with the same function
signatures, so swapping in the real one changes no screen code.

## Step 3: screen by screen

Work in the order of `architecture.md`. For each screen:

1. Read its row in the recon map: purpose, components, states, which flows
   pass through it.
2. Look at the reference screenshot for layout and hierarchy. Not for pixels.
3. Build it with the primitives. Real data from the data layer.
4. **Every state**: empty, loading (skeletons, not spinners, if the original
   does), filled, error, no permission, long content (a 60 character name),
   mobile width.
5. Basics, every time: semantic HTML, labels on inputs, keyboard reachable,
   visible focus, images with alt text.
6. Set the matching rows in `features.csv` to `yes` or `partial` (with a note).
7. Screenshot it at the same viewport as the reference into
   `replica/clone-screens/S07.png` for replica-diff.
8. One commit per screen: `build: S07 booking page`.

## Definition of done, per screen

- [ ] every state from the recon map, plus empty, error and loading
- [ ] works at 390px and 1440px wide
- [ ] keyboard only: can complete the flow
- [ ] no console errors
- [ ] no hard-coded copy borrowed from the original
- [ ] features.csv updated
- [ ] screenshot saved for diff

## Step 4: the build log

`replica/build-log.md`, one line per screen: ID, date, done or partial, what
is missing, what was harder than expected. When a feature is bigger than it
looked, say so in the log and in the chat. Do not quietly ship half of it.

## When you are stuck on how something works

Go back to the original as a user: read its help article, watch its public
walkthrough, use the user's own account. Do not dig into its code or network
calls. Then build your own version of the behaviour.

## Output

Screens built, the feature matrix updated, screenshots saved, and a summary:
screens done of total, must-haves done of total, what is next. Then
`/replica-backend` if the data layer is still fake, else `/replica-test`.
