---
slug: trailofbits-skills-plugins-static-analysis-skills-semgrep
name: semgrep
tagline: Agent skill from trailofbits/skills
summary: Agent skill from trailofbits/skills
categories:
  - security-auth
tags:
  - agent-skills
  - research
  - security
status: active
quality_percentile: 57
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: trailofbits/skills
  subpath: plugins/static-analysis/skills/semgrep
  official_vendor: false
  license: CC-BY-SA-4.0
signals:
  stars: 7804
  last_commit: 2026-10-24T01:53:03Z
  stars_delta_7d: 164
  stars_growth_pct: 2.1
  trending_score: 167.52
  velocity_source: snapshot_delta
  sparkline_4w:
    - 7412
    - 7507
    - 7640
    - 7804
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: trailofbits/skills
  path: plugins/static-analysis/skills/semgrep/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:44:55.637Z
  truncated: false
type: agent_skill
skill:
  skill_name: semgrep
  description: Agent skill from trailofbits/skills
  folder_path: plugins/static-analysis/skills/semgrep
  extra_files:
    - agents/openai.yaml
    - assets/trail-of-bits-mark.svg
    - references/rulesets.md
    - references/scan-modes.md
    - scripts/merge_sarif.py
    - scripts/run-scans.sh
    - scripts/test_merge_sarif.py
    - workflows/scan-workflow.md
  pack_total_skills: 97
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: trailofbits-skills
---

Agent skill from trailofbits/skills
