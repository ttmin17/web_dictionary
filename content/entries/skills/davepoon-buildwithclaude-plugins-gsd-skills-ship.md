---
slug: davepoon-buildwithclaude-plugins-gsd-skills-ship
name: gsd:ship
tagline: Create PR, run review, and prepare for merge after verification passes
summary: "Bridge local completion → merged PR. After /gsd:verify-work passes,
  ship the work: push branch, create PR with auto-generated body, optionally
  trigger review, and track the merge."
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
  subpath: plugins/gsd/skills/ship
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
  path: plugins/gsd/skills/ship/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.620Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:ship
  description: Create PR, run review, and prepare for merge after verification passes
  folder_path: plugins/gsd/skills/ship
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
Bridge local completion → merged PR. After /gsd:verify-work passes, ship the work: push branch, create PR with auto-generated body, optionally trigger review, and track the merge.

Closes the plan → execute → verify → ship loop.
</objective>

<execution_context>
@${CLAUDE_PLUGIN_ROOT}/workflows/ship.md
</execution_context>

Execute the ship workflow from @${CLAUDE_PLUGIN_ROOT}/workflows/ship.md end-to-end.

<output_format>
When the ship workflow concludes (PR created and tracked), emit a Next Up continuation block following the pattern in `references/continuation-format.md`:

- Show ship status (e.g., `## ✓ Phase N / Milestone v1.x Shipped — PR #123`) with the PR URL
- Emit a `## ▶ Next Up` heading with the next command (`/gsd:next` if there's more in the milestone, `/gsd:complete-milestone` if this was the last phase)
- Use **`` `/clear` then: ``** before the command
- Include a parenthetical: *(`/clear` is safe — `/gsd:resume-work` restores position from `HANDOFF.json` if you change your mind)*
- Add an "Also available:" section with `/gsd:review` (cross-AI review) or PR-specific actions

PR creation is a clean boundary — review/merge happens out-of-band; the just-finished implementation conversation rarely informs the next phase. Suggesting `/clear` here keeps the next start small.
</output_format>
