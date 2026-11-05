---
slug: phuryn-pm-skills-pm-execution-skills-sprint-plan
name: sprint-plan
tagline: Plan a sprint with capacity estimation, story selection, dependency
  mapping, and risk identification. Use when preparing for sprint planning,
  estimati
summary: Plan a sprint by estimating team capacity, selecting and sequencing
  stories, and identifying risks.
categories:
  - productivity-ops
tags:
  - agent-skill-repository
  - agent-skills
  - agentic-skills
  - claude-code-marketplace
status: active
quality_percentile: 69
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: phuryn/pm-skills
  subpath: pm-execution/skills/sprint-plan
  official_vendor: false
  license: MIT
signals:
  stars: 27709
  last_commit: 2026-10-29T19:09:57Z
  stars_delta_7d: 328
  stars_growth_pct: 1.2
  trending_score: 331.93
  velocity_source: snapshot_delta
  sparkline_4w:
    - 26957
    - 27192
    - 27381
    - 27709
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: phuryn/pm-skills
  path: pm-execution/skills/sprint-plan/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:07.698Z
  truncated: false
type: agent_skill
skill:
  skill_name: sprint-plan
  description: Plan a sprint with capacity estimation, story selection, dependency
    mapping, and risk identification. Use when preparing for sprint planning,
    estimating team capacity, selecting stories, or balancing sprint scope
    against velocity.
  folder_path: pm-execution/skills/sprint-plan
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: phuryn-pm-skills
---

## Sprint Planning

Plan a sprint by estimating team capacity, selecting and sequencing stories, and identifying risks.

### Context

You are helping plan a sprint for **$ARGUMENTS**.

If the user provides files (backlogs, velocity data, team rosters, or previous sprint reports), read them first.

### Instructions

1. **Estimate team capacity**:
   - Number of team members and their availability (PTO, meetings, on-call)
   - Historical velocity (average story points per sprint from last 3 sprints)
   - Capacity buffer: reserve 15-20% for unexpected work, bugs, and tech debt
   - Calculate available capacity in story points or ideal hours

2. **Review and select stories**:
   - Pull from the prioritized backlog (highest priority first)
   - Verify each story meets the Definition of Ready (clear AC, estimated, no blockers)
   - Flag stories that need refinement before committing
   - Stop adding stories when capacity is reached

3. **Map dependencies**:
   - Identify stories that depend on other stories or external teams
   - Sequence dependent stories appropriately
   - Flag external dependencies and owners
   - Identify the critical path

4. **Identify risks and mitigations**:
   - Stories with high uncertainty or complexity
   - External dependencies that could slip
   - Knowledge concentration (only one person can do it)
   - Suggest mitigations for each risk

5. **Create the sprint plan summary**:

   ```
   Sprint Goal: [One sentence describing what success looks like]
   Duration: [2 weeks / 1 week / etc.]
   Team Capacity: [X story points]
   Committed Stories: [Y story points across Z stories]
   Buffer: [remaining capacity]

   Stories:
   1. [Story title] — [points] — [owner] — [dependencies]
   ...

   Risks:
   - [Risk] → [Mitigation]
   ```

6. **Define the sprint goal**: A single, clear sentence that captures the sprint's primary value delivery.

Think step by step. Save as markdown.

---

### Further Reading

- [Product Owner vs Product Manager: What's the difference?](https://www.productcompass.pm/p/product-manager-vs-product-owner)
