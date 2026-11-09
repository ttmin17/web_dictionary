---
slug: jakeschincariol-replica-skill-replica-launch
name: replica-launch
tagline: "Writes the launch for an app clone: the landing page built on the
  positioning angle, pricing set against the original's public pricing and its
  users' "
summary: Start from listing.example.json in this folder.
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
  subpath: replica-launch
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
  path: replica-launch/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:59.761Z
  truncated: false
type: agent_skill
skill:
  skill_name: replica-launch
  description: "Writes the launch for an app clone: the landing page built on the
    positioning angle, pricing set against the original's public pricing and its
    users' complaints, and the App Store and Google Play listing linted against
    the stores' limits and copycat rules. Use when the user says \"landing
    page\", \"pricing\", \"how much should I charge\", \"App Store listing\",
    \"store screenshots\", \"launch plan\", \"Product Hunt\", or after
    /replica-brand."
  folder_path: replica-launch
  extra_files:
    - listing.example.json
    - listing.py
  pack_total_skills: 11
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: jakeschincariol-replica-skill
---

# replica-launch
Reads `replica/fixes.md` (the angle and the evidence), `replica/brand.md`,
and `replica/brand.json`. Writes `replica/launch/`: `landing.md`,
`pricing.md`, `listing.json`, `launch-plan.md`.

```bash
python3 listing.py replica/launch/listing.json      # limits, claims, the original's name
```

Start from `listing.example.json` in this folder.

## The rules

- **No fake proof.** No invented testimonials, user counts, star ratings,
  press logos or "trusted by" rows. An empty proof section is better than a
  fake one. Real beta users, with permission, are fine.
- **No reviewer quotes as testimonials.** The original's reviews are research.
- **The original's name stays out** of your app name, store listing, keywords
  and ads. Apple and Google reject it, and it invites a takedown.

## Step 1: landing page

`landing.md`, section by section, then build it in the project:

1. **Hero**: the angle as a headline (what you do, for whom), one line under
   it, one button. Screenshot of the real product.
2. **The problem**: the top two "hate" themes, in plain words. Paraphrase,
   do not quote reviewers.
3. **How it works**: three steps, from the core flow.
4. **Features**: each tied to a fix from `fixes.md`. Lead with the fixes,
   not the parity features. Parity is the price of entry.
5. **Pricing**: the table from step 2.
6. **FAQ**: the real objections, including "can I import from {{category}}
   tools?" if you built an importer.
7. **Final call to action.**

Copy in the brand voice. Run replica-design's contrast check on the page.

## Step 2: pricing

`pricing.md`:

- The original's public pricing page and 2 or 3 alternatives, in one table,
  with the URL and the date read. Prices change, so the date matters.
- What reviewers said about price and billing, from `feedback.md`, with counts.
- The model: free plan or trial, per seat or flat, monthly and annual
  (annual usually 2 months free).
- Three tiers at most. Name them by who they are for.
- Fix the billing complaints in the product: one-click cancel, clear renewal
  emails, no surprise per-seat jumps.
- The Stripe products and prices to create (the user creates them).

## Step 3: store listing

Fill `listing.json`, then:

```bash
python3 listing.py replica/launch/listing.json
```

It checks App Store limits (name 30, subtitle 30, promotional text 170,
keywords 100, description 4000) and Google Play's (title 30, short
description 80, full 4000), counts characters the way a person does, flags
ranking and price claims in short fields, emoji, wasted keyword characters,
and **any name from `avoid`** anywhere in the listing. Exit 1 on an error.

Apple's App Review Guideline 4.1 (Copycats) rejects apps that simply copy a
popular app or make minor changes to another app's name or UI. Your fixes
and your own brand are what get you through review, so make them visible in
the screenshots and the first lines of the description.

Also prepare: screenshots at the current required sizes (check App Store
Connect and Play Console when you upload, they change), privacy labels and
the data safety form, privacy policy and support URLs, age rating, and review
notes with a demo account the reviewer can use.

## Step 4: launch plan

`launch-plan.md`: a waitlist or beta list before launch, analytics and error
tracking live, where the original's unhappy users talk (the Reddit threads
and communities from the research), a Product Hunt or Hacker News post that
leads with the fix, and the first 10 users to talk to by hand.

## Output

`replica/launch/` complete, the landing page built, `listing.py` passing.
Next: `/replica-deploy`.
