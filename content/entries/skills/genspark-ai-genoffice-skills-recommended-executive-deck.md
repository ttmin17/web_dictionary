---
slug: genspark-ai-genoffice-skills-recommended-executive-deck
name: executive-deck
tagline: Build a reporting or executive presentation where every slide title
  states a conclusion and the deck follows a pyramid, answer-first structure.
  Use wh
summary: 1. Decide the single answer the deck gives. Write it as one sentence.
  That sentence is the title of slide 2 and the backbone of the whole deck. 2.
  Read every attached or referenced file fully. Figures, names and dates...
categories:
  - media-creative
tags:
  - ai-agent
  - claude-code
  - cli
  - codex
status: active
quality_percentile: 81
selection_reason: quality_percentile
first_seen: 2026-10-26
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: genspark-ai/genoffice
  subpath: skills/recommended/executive-deck
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 11764
  last_commit: 2026-11-05T04:14:45Z
  stars_delta_7d: 892
  stars_growth_pct: 8.2
  trending_score: 965.18
  velocity_source: snapshot_delta
  sparkline_4w:
    - 9558
    - 9983
    - 10872
    - 11764
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: genspark-ai/genoffice
  path: skills/recommended/executive-deck/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:12:51.511Z
  truncated: false
type: agent_skill
skill:
  skill_name: executive-deck
  description: Build a reporting or executive presentation where every slide title
    states a conclusion and the deck follows a pyramid, answer-first structure.
    Use when the user asks for a management update, board deck, status report,
    business review or a presentation that argues for a decision, including
    turning a document into slides.
  folder_path: skills/recommended/executive-deck
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: genspark-ai-genoffice
---

# Executive deck
A reporting deck is read, not performed. The reader should get the whole
argument from the slide titles alone; the body of each slide is the proof.

## Before building

1. Decide the single answer the deck gives. Write it as one sentence. That
   sentence is the title of slide 2 and the backbone of the whole deck.
2. Read every attached or referenced file fully. Figures, names and dates
   come only from there. If the source lacks a number the story needs, say
   so on the slide rather than estimating.
3. Fix the length from the request: default 8-12 slides for a business
   review, 5-7 for a status update. Fewer slides with a clear line beat
   more slides with everything.

## Structure (pyramid, answer first)

1. **Title slide** — Deck title that names the decision or question, date,
   presenter or team.
2. **Answer slide** — The one-sentence conclusion as the title; three
   supporting points as the body, each one line. Nothing else.
3. **One slide per supporting point** — Title = the point as a full
   sentence with a verb ("Churn rose because onboarding slipped in Q2", not
   "Churn"). Body = the evidence: one chart or one table or 3-5 bullets,
   never all three. Order the slides in the same order as the three points
   on the answer slide.
4. **Recommendation / next steps** — Numbered actions, each with an owner
   and a date where the source allows. Title states what is being asked
   ("Approve the Q4 onboarding rebuild").
5. **Risks or open questions** — Only if real. Short.
6. **Appendix** — Detail tables, methodology, backup charts. Nothing in the
   appendix may be needed to follow the main story.

## Slide rules

- Every title is a complete sentence stating a conclusion. If a title could
  sit on any deck ("Overview", "Results"), rewrite it.
- One message per slide. If a slide needs an "and", split it.
- Bullets: at most 5, each at most 12 words, parallel grammar, no
  sub-bullets. A bullet that needs a second line is a sentence for the
  notes, not a bullet.
- Numbers on slides carry unit and period. The source goes in a small
  footer line on that slide, not in a bullet.
- Charts: one series highlighted, the rest muted; title the chart with its
  takeaway, not its subject. Prefer bar for comparison, line for trend; no
  pie with more than 4 slices.
- Speaker notes hold the narration and the caveats, in full sentences.
  Write them for every content slide.
- Keep the deck's language consistent with the request and sources.

## Turning a document into a deck

- Extract the document's conclusion first, then its three strongest
  supports; everything else is appendix or dropped.
- Never paste paragraphs onto slides. Each paragraph becomes at most one
  bullet, or a figure.
- Preserve the document's figures exactly; do not round further than the
  source does.

## Design

Stay inside the app's default theme and layouts. Do not set custom fonts,
colors or sizes unless the user asks for a specific look. Consistency across
slides matters more than any single slide looking rich.

## Before you say done

- Read only the titles, top to bottom: they must form a coherent argument
  that ends in the recommendation.
- The three points on the answer slide match the following slide titles in
  wording and order.
- No slide has more than one chart/table, or more than 5 bullets.
- Every content slide has notes.
- Tell the user the storyline in three lines and list anything you could
  not source.
