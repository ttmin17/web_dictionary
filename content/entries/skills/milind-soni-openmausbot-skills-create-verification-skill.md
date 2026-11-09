---
slug: milind-soni-openmausbot-skills-create-verification-skill
name: create-verification-skill
tagline: Create one skill that teaches a bot how to launch, drive, and verify a
  specific app or project. Use only when the user explicitly asks for a
  verificat
summary: "- the exact project or app being verified; - its existing launch
  command and reliable ready signal; - the safest available control surface:
  existing project CLI, browser, computer, phone, or shell; - one read-only
  hea..."
categories:
  - cloud-infra
tags:
  - ai-agents
  - claude-code
  - codex
  - computer-use
status: active
quality_percentile: 82
selection_reason: quality_percentile
first_seen: 2026-11-02
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: milind-soni/OpenMausBot
  subpath: skills/create-verification-skill
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 18995
  last_commit: 2026-11-09T04:53:35Z
  stars_delta_7d: 6412
  stars_growth_pct: 51
  trending_score: 9679.4
  rank_current: 1
  rank_delta: null
  velocity_source: snapshot_delta
  sparkline_4w:
    - 12583
    - 18995
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: milind-soni/OpenMausBot
  path: skills/create-verification-skill/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:38.670Z
  truncated: false
type: agent_skill
skill:
  skill_name: create-verification-skill
  description: Create one skill that teaches a bot how to launch, drive, and
    verify a specific app or project. Use only when the user explicitly asks for
    a verification skill.
  folder_path: skills/create-verification-skill
  extra_files:
    - manifest.json
  pack_total_skills: 4
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: milind-soni-openmausbot
---

# Create a verification skill
Create one compact, project-specific `SKILL.md` through `skill_manage`, which
shows the person every change with an Undo. Do not install skill files
directly or silently add scripts to the user's project.

## 1. Inspect before drafting

Use the tools already mounted on this bot to establish:

- the exact project or app being verified;
- its existing launch command and reliable ready signal;
- the safest available control surface: existing project CLI, browser,
  computer, phone, or shell;
- one read-only health check;
- up to three important user workflows and the observable result that proves
  each one worked;
- how to stop only the process or resource started by the verification run.

Prefer an existing control surface. If the project has no dependable way to
launch or drive the relevant workflow, report that prerequisite instead of
inventing commands, selectors, APIs, or a new control program.

## 2. Prove one workflow

Run the real launch, health check, one representative workflow, evidence
capture, and cleanup once. Use an isolated test profile or temporary data when
available; never drive the user's live data merely to author the skill. If the
workflow cannot be proved with the tools currently mounted, stop and explain
which capability is missing.

## 3. Draft one self-contained skill

The proposed `SKILL.md` must contain YAML frontmatter and these sections:

1. **Launch** — exact command, isolated data/profile, ready signal.
2. **Doctor** — one read-only check with an actionable failure message.
3. **Drive** — stable names, accessibility targets, routes, refs, or commands;
   never recorded screen coordinates.
4. **Evidence** — action plus resulting state and any important side effect.
5. **Cleanup** — stop only what this run started; preserve the evidence.
6. **Feature map** — at most three proven workflows, each with the user path,
   control recipe, success proof, and known gotcha.
7. **Maintenance** — re-run Doctor and the affected workflow when the app
   changes; update drifted instructions but never hide a product failure.

Keep it concise. Evidence about the user path is input to the draft—not
permission to retain secrets, audio, screenshots, or coordinates.

## 4. Save it

Call `skills_list` first. If an existing skill already covers the project,
report that and do not overwrite it. Otherwise call `skill_manage` with
`action="create"`, the complete `skill_md`, a short `gist`, and the exact
source used (repository path, URL, or `conversation`).

Read the `skill_manage` result. If it applied, tell the user the skill's name,
that it is on, and that they can undo it from the chat. Only if it is pending,
tell them it stays inactive until they decide on the in-app card. Never claim
it was enabled without an applied result.
