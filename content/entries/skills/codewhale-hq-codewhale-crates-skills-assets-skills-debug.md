---
slug: codewhale-hq-codewhale-crates-skills-assets-skills-debug
name: debug
tagline: Reproduce, minimize, localize, identify root cause, and distinguish
  diagnosis from an authorized fix. Prefer root-cause over symptom patches.
summary: Reproduce, minimize, localize, identify root cause, and distinguish
  diagnosis from an authorized fix. Prefer root-cause over symptom patches.
categories:
  - coding-agents
tags:
  - agent-orchestration
  - ai-agent
  - cli
  - codewhale
status: active
quality_percentile: 87
selection_reason: quality_percentile
first_seen: 2026-11-02
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: codewhale-hq/Codewhale
  subpath: crates/skills/assets/skills/debug
  official_vendor: false
  license: MIT
signals:
  stars: 41158
  last_commit: 2026-11-05T13:03:13Z
  stars_delta_7d: 40
  stars_growth_pct: 0.1
  trending_score: 40.04
  velocity_source: snapshot_delta
  sparkline_4w:
    - 41101
    - 41118
    - 41158
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: codewhale-hq/Codewhale
  path: crates/skills/assets/skills/debug/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:37.248Z
  truncated: false
type: agent_skill
skill:
  skill_name: debug
  description: Reproduce, minimize, localize, identify root cause, and distinguish
    diagnosis from an authorized fix. Prefer root-cause over symptom patches.
  folder_path: crates/skills/assets/skills/debug
  extra_files: []
  pack_total_skills: 22
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: codewhale-hq-codewhale
---

# Debug
## When to use
Use for failures, flakes, wrong outputs, crashes, and regressions.

## Non-goals
- Do not jump to a fix before reproduction/localization when the bug is unclear.
- Do not treat “run all tests” as debugging by default.

## Workflow
1. Reproduce or gather the strongest available failure signal.
2. Minimize the case.
3. Localize to component/file/line.
4. State root cause vs symptoms.
5. Fix only when authorized; otherwise hand back a diagnosis with evidence.

## Output shape
- Symptom
- Reproduction
- Localization
- Root cause
- Fix status / next step
