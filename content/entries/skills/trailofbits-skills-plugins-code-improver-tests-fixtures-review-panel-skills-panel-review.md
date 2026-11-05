---
slug: trailofbits-skills-plugins-code-improver-tests-fixtures-review-panel-skills-panel-review
name: panel-review
tagline: Reviews a code target by launching a panel of specialist auditor agents
  and merging their reports. Use when asked to run a panel review.
summary: "1. Launch BOTH specialists over the target (Task dispatches): -
  subagenttype: review-panel:naming-auditor — prompt it with the target path and
  ask for its full naming/codename audit report. - subagenttype: review-pane..."
categories:
  - security-auth
tags:
  - agent-skills
  - research
  - security
status: active
quality_percentile: 62
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: trailofbits/skills
  subpath: plugins/code-improver/tests/fixtures/review-panel/skills/panel-review
  official_vendor: false
  license: CC-BY-SA-4.0
signals:
  stars: 8017
  last_commit: 2026-11-04T17:39:20Z
  stars_delta_7d: 213
  stars_growth_pct: 2.7
  trending_score: 218.81
  velocity_source: snapshot_delta
  sparkline_4w:
    - 7507
    - 7640
    - 7804
    - 8017
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: trailofbits/skills
  path: plugins/code-improver/tests/fixtures/review-panel/skills/panel-review/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:13.935Z
  truncated: false
type: agent_skill
skill:
  skill_name: panel-review
  description: Reviews a code target by launching a panel of specialist auditor
    agents and merging their reports. Use when asked to run a panel review.
  folder_path: plugins/code-improver/tests/fixtures/review-panel/skills/panel-review
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: trailofbits-skills
---

# Panel Review
This review runs as a panel of specialists. Do NOT perform their audits yourself — each
auditor applies rules that live only in its own definition, so an inline imitation
misses them.

1. Launch BOTH specialists over the target (Task dispatches):
   - `subagent_type: review-panel:naming-auditor` — prompt it with the target path and
     ask for its full naming/codename audit report.
   - `subagent_type: review-panel:todo-auditor` — prompt it with the target path and
     ask for its full leftover-marker audit report.
2. Wait for both reports.
3. Merge: report every defect either auditor found, keeping each auditor's severity.
   Add any defect you observed yourself while merging, at your own severity.
