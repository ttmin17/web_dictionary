---
slug: davepoon-buildwithclaude-plugins-gsd-skills-secure-phase
name: gsd:secure-phase
tagline: Retroactively verify threat mitigations for a completed phase
summary: "Verify threat mitigations for a completed phase. Three states: - (A)
  SECURITY.md exists — audit and verify mitigations - (B) No SECURITY.md,
  PLAN.md with threat model exists — run from artifacts - (C) Phase not
  execut..."
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
  subpath: plugins/gsd/skills/secure-phase
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
  path: plugins/gsd/skills/secure-phase/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.620Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:secure-phase
  description: Retroactively verify threat mitigations for a completed phase
  folder_path: plugins/gsd/skills/secure-phase
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

<objective>
Verify threat mitigations for a completed phase. Three states:
- (A) SECURITY.md exists — audit and verify mitigations
- (B) No SECURITY.md, PLAN.md with threat model exists — run from artifacts
- (C) Phase not executed — exit with guidance

Output: updated SECURITY.md.
</objective>

<execution_context>
@${CLAUDE_PLUGIN_ROOT}/workflows/secure-phase.md
</execution_context>

<context>
Phase: $ARGUMENTS — optional, defaults to last completed phase.
</context>

<process>
Execute @${CLAUDE_PLUGIN_ROOT}/workflows/secure-phase.md.
Preserve all workflow gates.
</process>
