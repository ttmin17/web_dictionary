---
slug: jetbrains-thinkrail-packages-pi-thinkrail-workflow-skills-starting-a-new-project
name: starting-a-new-project
tagline: Use when the workspace is empty, has no code, and the user brings a raw
  project idea. Normally reached via setting-up-a-project; not for an existing p
summary: Hold the writing-specs bar. Read that concept skill before saving
  anything — it carries the short / honest / on-rails rules and the goal-doc
  shape every section you save must meet.
categories:
  - productivity-ops
tags:
  - agent-skills
  - agentic-ai
  - agentic-workflow
  - ai-coding
status: active
quality_percentile: 56
selection_reason: quality_percentile
first_seen: 2026-11-16
last_updated: 2026-11-16T09:17:13.266Z
source:
  kind: github_repo
  repo: JetBrains/thinkrail
  subpath: packages/pi-thinkrail-workflow/skills/starting-a-new-project
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 8293
  last_commit: 2026-11-16T09:07:55Z
  stars_delta_7d: 443
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 8293
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: JetBrains/thinkrail
  path: packages/pi-thinkrail-workflow/skills/starting-a-new-project/SKILL.md
  branch: main
  fetched_at: 2026-11-16T09:16:30.932Z
  truncated: false
type: agent_skill
skill:
  skill_name: starting-a-new-project
  description: Use when the workspace is empty, has no code, and the user brings a
    raw project idea. Normally reached via setting-up-a-project; not for an
    existing project.
  folder_path: packages/pi-thinkrail-workflow/skills/starting-a-new-project
  extra_files: []
  pack_total_skills: 13
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: jetbrains-thinkrail
---

# Starting a new project
The workspace is empty: no code, no decisions. Turn the user's idea into one clear, living product
document — `goal-and-requirements.md`. Later features, behavior changes, and bug fixes go through
`brainstorming`.

**Hold the writing-specs bar.** Read that concept skill before saving anything — it carries the
short / honest / on-rails rules and the goal-doc shape every section you save must meet.

## Method

1. **Build on what's already said.** Never re-ask what the request already told you.
2. **Infer, then confirm** — propose a concrete draft and let the user correct it; a suggestion beats an
   open question. Compose `ask_user_question` rounds per the **asking-user-questions** concept skill
   (read it before the first round — it carries the round, option, confirmation, and degradation norms).
3. **Smallest useful first build.** It is smaller than the user expects; every capability in it must
   justify itself. Ideas cut from it are handed back to the user, not saved (see writing-specs).
4. **Save incrementally.** Create the file as soon as the first section is settled, then add each
   confirmed section in template order. Don't batch; don't invent unconfirmed content.
5. A skipped question is not a blocker — proceed on the current model and note real gaps inline.

## Working model (infer from the request; never ask these directly)

```
audience:   personal | public | both        domain: what space this is in
tech:       stack mentioned, or null         scope:  small | large
depth:      light | standard | full          creator_is_user: does the maker use it?
```

`depth` scales the document: `light` = a one-liner idea → a few lines; `full` = named competitors /
multiple user types → a full PRD. It can only grow during the conversation, never shrink.

## Fast path — pre-filled brief

If the request already reads like a spec (several headings or a multi-section brief), parse it, treat those
sections as **confirmed**, save them immediately, and only pursue what's genuinely missing and required by
`depth`. Don't ask the user to confirm what they already wrote. Save in the goal-doc shape, not the
brief's: a version or roadmap split (`MVP` / `v1` / `v2` / later) becomes Capabilities for what is in
scope and Non-Goals only for what the brief rules out by decision; the rest goes back to the user
unsaved (writing-specs). The one always-offered extra is alternatives research (below).

## Flow

1. **Orient** — one line: "Let's nail the goal and scope, then I'll save it as `goal-and-requirements.md`."
2. **Overview** — infer it (`depth`-sized: a sentence → a paragraph naming what it replaces) and confirm.
3. **Problem** — one tailored question referencing the domain (never generic); turn the answer into a
   statement (who / what they do today / the specific breakdown) and confirm. Skip if the Overview already
   implies it.
4. **Route** from the model — don't ask "who's this for" unless genuinely ambiguous:
   personal / first-person pain / `depth=light` → **Personal spec**; public / named users / `depth=full`
   → **PRD**.
5. **Elicit the branch's sections** (below), inferring and confirming each, saving as you go.
6. **Research alternatives** (always offered, never forced): `web_search` + `fetch_content` for the
   closest open-source projects / products, then offer to add an **Alternatives Considered** section
   (name, one-line gap, URL). On a pre-filled brief, ask permission first.
7. **Review** the full draft in plain markdown and confirm, then finalize.

### Personal spec (sections)

`# Title` + one-line tagline · **Overview** · **Problem** · **Capabilities** (only what the tool is useless
without) · **Tech Notes** (the stack, once chosen).

### PRD (sections)

`# Title` + tagline · **Overview** · **Problem Statement** · **Target Users** (roles, not demographics) ·
**Jobs to Be Done** ("When [situation], I want [motivation], so I can [outcome]") · **Key User Story**
(one concrete scenario) · **Goals** (verb-first, measurable) · **Non-Goals** · **Success Metrics** /
**Success Conditions** · **Capabilities** (each justified against a Goal or success condition) ·
**Non-Functional Requirements** (only if they exist) · **Technology** (Aspect | Choice |
Rationale).

Skip any section the model already answers or that `depth` doesn't warrant (`light` → skip Goals/NFRs,
binary Success Conditions instead of metrics). Reject vague goals inline: "'Better UX' isn't a goal —
'first result in under 30s' is."

## Saving

- `spec_create` once, `path: "goal-and-requirements.md"`, a slug `id`, `type: "goal-and-requirements"`,
  `title`, `status: "draft"`; replace the scaffold with the chosen template + the sections settled so far.
- `edit` to add each confirmed section in template order.
- `spec_update` `status: draft → active` once the user approves the reviewed draft.

## Next

State plainly that the spec is saved and evolves with the project. Suggest the natural next step —
sketch `architecture.md`, then build each feature through `brainstorming`. There is no board/ticket
hand-off — say it and stop: **this workflow ends here**.
