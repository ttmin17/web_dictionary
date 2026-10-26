---
slug: davepoon-buildwithclaude-plugins-origin-skills-debrief
name: debrief
tagline: "Alias for `/origin:handoff` — symmetric brief/debrief naming. Same
  behavior: end-of-session ritual that writes session log + project status +
  granular"
summary: Run the steps in /origin:handoff exactly. Same artifacts, same
  guardrails. The only reason this skill exists is the symmetric naming — /brief
  (session start) ↔ /debrief (session end). Pick whichever verb feels natural...
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
  subpath: plugins/origin/skills/debrief
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
  path: plugins/origin/skills/debrief/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.622Z
  truncated: false
type: agent_skill
skill:
  skill_name: debrief
  description: >
    Alias for `/origin:handoff` — symmetric brief/debrief naming. Same behavior:
    end-of-session ritual that writes session log + project status + granular
    MCP captures. Invoked as `/debrief`. Use when the user prefers the
    brief/debrief pair over brief/handoff.
  folder_path: plugins/origin/skills/debrief
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# /debrief
Alias for `/handoff`. Identical behavior — full end-of-session ritual:
git context grab (if repo), narrative session log at
`~/.origin/sessions/`, project status update, granular MCP captures.

Run the steps in `/origin:handoff` exactly. Same artifacts, same
guardrails. The only reason this skill exists is the symmetric naming —
`/brief` (session start) ↔ `/debrief` (session end). Pick whichever
verb feels natural; both invoke the same flow.

## When to use

- User says "wrapping up", "let's call it", "we're done", "debrief".
- Session about to close and useful state would otherwise be lost.

## When NOT to use

- Mid-flow capture during work → use `/capture` (single memory).
- Search / lookup → use `/recall`.
