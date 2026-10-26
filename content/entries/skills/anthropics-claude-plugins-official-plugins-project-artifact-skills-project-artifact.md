---
slug: anthropics-claude-plugins-official-plugins-project-artifact-skills-project-artifact
name: project-artifact
tagline: Generate and publish a project status artifact — an opinionated, tabbed
  status page for a project too big for one update (overview & success criteria,
summary: claude.ai/code/artifact/... — use WebFetch with the URL; it returns the
  page HTML. This works for artifacts the user owns or that have been shared
  with them — anything else 404s (unauthorized and nonexistent are indis...
categories:
  - other
tags:
  - claude-code
  - skills
status: active
quality_percentile: 98
selection_reason: official_vendor
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: anthropics/claude-plugins-official
  subpath: plugins/project-artifact/skills/project-artifact
  official_vendor: true
  license: Apache-2.0
signals:
  stars: 44625
  last_commit: 2026-10-25T07:34:42Z
  stars_delta_7d: 1711
  stars_growth_pct: 4
  trending_score: 1779.22
  velocity_source: snapshot_delta
  sparkline_4w:
    - 37497
    - 37789
    - 42914
    - 44625
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: anthropics/claude-plugins-official
  path: plugins/project-artifact/skills/project-artifact/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:05.844Z
  truncated: false
type: agent_skill
skill:
  skill_name: project-artifact
  description: Generate and publish a project status artifact — an opinionated,
    tabbed status page for a project too big for one update (overview & success
    criteria, the workstream sequence, next steps, plus background, plan, risks
    & open questions, and decisions/FAQ when they earn a tab) — published with
    the built-in Artifact tool to a default-private claude.ai page the user can
    share with teammates. Use when a piece of work spans several workstreams and
    you want a shareable overview kept current. Each artifact is backed by a
    small per-project config in the plugin data dir, so refreshing it re-gathers
    live state, redeploys the same URL, and reports only the delta. For software
    projects whose workstreams are PRs, also read swe.md (the X.Y PR-numbering
    convention; pulling PR state with gh/git; a per-PR detail block). Needs the
    built-in Artifact tool (claude.ai login). Not for single-PR changes or
    public docs.
  folder_path: plugins/project-artifact/skills/project-artifact
  extra_files:
    - swe.md
    - template.html
  pack_total_skills: 29
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: anthropics-claude-plugins-official
---

# project-artifact — an opinionated project status page
This skill produces one specific *kind* of artifact: a tabbed status page that represents a
project too big for one update — a software migration, a research effort, a launch, an org
initiative; anything with a set of parallel/dependent workstreams tracked over time. It
generates the HTML (one file, self-contained — the Artifact CSP blocks all external hosts,
so everything is inlined; the only `` can't terminate the block and run as script on the
  published page.

## Reading an existing artifact page

**`claude.ai/code/artifact/...`** — use WebFetch with the URL; it returns the page HTML.
This works for artifacts the user owns or that have been shared with them — anything else
404s (unauthorized and nonexistent are indistinguishable by design). If it 404s, ask the
owner to share it, or work from the project's underlying source (repo/PRs/design doc)
instead of the rendered page.

## Tab catalog (domain-neutral)

Use only the tabs with real content; order matters (readers go top to bottom).

| Tab | Include when | Goes in it |
|---|---|---|
| **Overview** | always | What this project is, why it exists, who's involved. The motivation can be light — a single line, or skipped — when the goal is self-evident; don't pad an obvious "why" into paragraphs. **Success criteria** — each with a *check* (how you'd know it's met) and a status; **group them when they span distinct concerns** (e.g. product vs security vs perf, or must-have vs nice-to-have — sub-tables or sub-headings), one flat table when there's only a handful. A short **Out of scope** list bounds the reader's worry. |
| **Workstreams** (a.k.a. Sequence / Milestones) | always | The headline table — one row per workstream: `id · what · owner · status` (+ dates), status pills — **plus** the current state at a glance (what's done, what's in flight, what's blocked; this is *not* a separate tab). If the order doesn't make dependencies obvious, add an "after `<id>`" note in the row — don't draw a diagram. For each workstream worth detail, a block: what's done, how it was verified/validated, links. (Software: this is the PR sequence — see `swe.md` for the X.Y numbering, which already encodes the dependencies, and the per-PR block. A very high-churn project can split a separate changelog tab.) |
| **Attention** (a.k.a. Waiting on) | the artifact is refreshed regularly and drives action, not just orientation | Three short lists, action first. **Waiting on the owner**: numbered, priority order, each item the exact action (a paste-ready message or a one-word decision) plus one sentence on what it unblocks. **Automatic once those land**: the chain that needs no action (auto-merge cascades, deploys, tracker auto-close). **Waiting on others**: who · what · which item (linked) · where to nudge. Skip it on a one-shot overview page. (The next-steps strip under the banner always carries the top of these — see Conventions.) |
| **Background / Concepts** | the project isn't self-explanatory | The context a newcomer needs before the rest makes sense — prior work, the problem, the key ideas/vocabulary. The "what a colleague would tell you over coffee" version; link forward to a deep-dive tab if there is one. Skip it when the project is simple/obvious. |
| **Plan / Approach** | the *how* is non-obvious | The strategy — the phases, the sequencing rationale, why this shape and not another. Skip it when the plan is just "do the workstreams in order". |
| **Risks & open questions** | there are real ones | Risk register (`risk · likelihood/impact · mitigation · owner`) **plus** the unresolved questions the project hasn't answered yet. Include the ones the team already knows about — the honest caveats build trust. A low-risk project with no open questions can drop this. |
| **Decisions / FAQ** | people keep asking | The questions people actually ask, and the decisions made + rationale. "Why this approach?", "Why not X?", "What does done look like?" |

## Conventions (all domains)

- **Status banner at the top**, above the tabs, one line: phase · the lead workstream ·
  a couple of size/health numbers · any gate. It's the first thing the reader needs.
- **Next steps directly under the banner** (the template's `.next` strip), above the tabs
  so it's visible whichever tab is open. 1–3 items, most important first, each
  `who → the exact action → what it unblocks` — the concrete moves that take the project
  from its current state to the next one, not a restatement of the remaining workstreams.
  The strip is a collapsible `<details open>`: always ship it open, and keep the item
  count in its `<summary>` so a reader who collapses it still sees how much is pending
  (when the body is the one-line fallback, the summary count reads "none pending").
  Nothing pending? Keep the strip and say so in one line ("No action needed — …", naming
  whatever ambient work remains) rather than deleting it — "there is no next step" is
  itself the answer the reader came for. The strip stands on its own: it appears whether
  or not the page has an Attention tab; when that tab is present it holds the full
  waiting-on lists and the strip is their top. When no human owner is recorded, name
  whatever actor exists (the PR's author or reviewers, the owning team) rather than
  inventing one.
- **Status pills, not prose**, in tables: `done` / `in progress` / `next` / `blocked` /
  `⚠ caveat`. Define the classes in CSS once (template has them).
- **Keep section/tab ids stable across redeploys** (the template's `over`, `work`, `att`,
  … ids) — the next refresh edits the previous render in place and keys off them.
- **Self-contained — the CSP enforces it.** The Artifact page is served under a strict CSP
  that blocks requests to *any* external host: CDN scripts, external stylesheets, web
  fonts, remote images, fetch/XHR. Blocked resources don't error — the page just renders
  without them. Inline all CSS, embed any image as a `data:` URI; one small `<script>` for
  tabs is fine. System font stacks only.
- **Diagrams as inline SVG.** When a picture genuinely earns its place — an architecture
  sketch, a state machine, a data flow, a timeline — draw it as inline `<svg>` in the page,
  not an external image, a screenshot, or an ASCII-art block. SVG keeps the page
  self-contained, scales crisply, wraps with the layout, and can use `currentColor` / the
  CSS variables so it tracks light/dark. Keep it simple and also state the same fact in
  text — a diagram supplements the prose, it isn't the only place a fact lives. This is
  *not* a license to diagram the workstream dependencies: the ordering (and the X.Y
  numbering in `swe.md`) already encodes those — skip the DAG.
- **Plain language**, same bar as a good PR description or memo: lead with the visible
  effect, introduce jargon only where the reader needs it to follow along. Someone new to
  the project should be able to read it and know whether they care.

## Specializations

Domain-specific guidance lives in sibling files (same directory as this SKILL.md), so the
core idea above stays neutral:

- **`swe.md`** — software projects whose workstreams are PRs: the `gh`/`git` workflow to
  pull PR state, the **X.Y PR-numbering convention** (the one thing genuinely different
  from this base template — it encodes which PRs block which, so you don't draw a DAG), a
  per-PR detail block, and a short note on the extra tabs/rigor a thorough software project
  *tends* to want (architecture deep-dive, review findings, rollout/rollback, must-have vs
  nice-to-have requirements) — all of that optional, the skill user's call.

Add another sibling (`research.md`, `launch.md`, …) when a domain shows a repeated shape
worth capturing — but only once you've actually built two or three of that kind.

## Files

(All in the same directory as this SKILL.md.)

- `template.html` — domain-neutral skeleton: CSS, header, status banner, next-steps
  strip, both tab mechanisms, pill classes, one stub `<section>` per catalog tab with
  fill-in comments.
- `swe.md` — the software-project specialization (read it when the workstreams are PRs).
