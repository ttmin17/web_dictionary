---
slug: davepoon-buildwithclaude-plugins-origin-skills-review
name: review
tagline: Power-user audit of Origin's pending surfaces. Most users want `/brief`
  for revisions. That handles the daily flow. Use `/review` only for explicit de
summary: "- Pending revisions surface in /brief automatically (top 3 with inline
  accept/dismiss). - Pending captures from this session surface in /handoff's
  preview block (top 3, informational). Use /review captures for the dee..."
categories:
  - agent-frameworks
tags:
  - claude
  - claude-code
  - claude-code-commands
  - claude-skills
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: davepoon/buildwithclaude
  subpath: plugins/origin/skills/review
  official_vendor: false
  license: MIT
signals:
  stars: 3678
  last_commit: 2026-10-26T00:07:50Z
  stars_delta_7d: 28
  stars_growth_pct: 0.8
  trending_score: 28.21
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3604
    - 3631
    - 3650
    - 3678
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: davepoon/buildwithclaude
  path: plugins/origin/skills/review/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.622Z
  truncated: false
type: agent_skill
skill:
  skill_name: review
  description: >
    Power-user audit of Origin's pending surfaces. Most users want `/brief` for
    revisions. That handles the daily flow. Use `/review` only for explicit
    deep-walk audits after bulk imports, or when you want to walk the full queue
    rather than the top 3 shown in /brief. Invoked as `/review captures` or
    `/review revisions`.
  folder_path: plugins/origin/skills/review
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# /review
Power-user audit lever. Most users do not need /review in daily flow:

- **Pending revisions** surface in `/brief` automatically (top 3 with inline accept/dismiss).
- **Pending captures from this session** surface in `/handoff`'s preview
  block (top 3, informational). Use `/review captures` for the deep walk.
- **Orphan wikilinks** surface in `/distill`'s topic-suggestion block.

Use /review only when you want the deep walk those skills intentionally do not force.

## Scoped invocation

- `/review captures`: walk every unconfirmed memory (`list_pending`,
  unfiltered by session). Per item: accept (`confirm_memory`), edit
  (`capture` with `supersedes=<old_id>` then `forget(old_id)`), or
  reject (`forget`).

- `/review revisions`: walk every pending revision (`list_pending_revisions`,
  no cap). Per item: accept (`accept_revision`), dismiss (`dismiss_revision`),
  or skip.

Bare `/review` (no arg) prints this help block and exits. Does not auto-walk.

## When to use

- After a bulk import (ChatGPT, Obsidian dump) when you want to audit
  every auto-classification before sealing.
- When `/brief` shows ">3 pending revisions" and you want to clear the
  full queue, not just the top 3.

## When NOT to use

- Daily session work. `/brief` handles the surface that matters today.
- Specific factual lookup: use `/recall`.
- Searching for facts: use `/recall`.

## Cost

Read-only until the user confirms or rejects. No LLM calls. Cheap.
