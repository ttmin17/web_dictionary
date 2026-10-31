---
slug: ruvnet-ruflo-plugins-ruflo-federation-skills-federation-audit
name: federation-audit
tagline: Query federation audit logs with compliance filtering
summary: Query structured federation audit logs. Supports compliance mode
  filtering (HIPAA, SOC2, GDPR) and severity filtering.
categories:
  - agent-frameworks
tags:
  - agentic-ai
  - agentic-framework
  - agentic-workflow
  - agents
status: active
quality_percentile: 79
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: ruvnet/ruflo
  subpath: plugins/ruflo-federation/skills/federation-audit
  official_vendor: false
  license: MIT
signals:
  stars: 76729
  last_commit: 2026-10-19T06:30:38Z
  stars_delta_7d: 0
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: snapshot_delta
  sparkline_4w:
    - 74048
    - 74512
    - 76729
    - 76729
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: ruvnet/ruflo
  path: plugins/ruflo-federation/skills/federation-audit/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:31:55.775Z
  truncated: false
type: agent_skill
skill:
  skill_name: federation-audit
  description: Query federation audit logs with compliance filtering
  folder_path: plugins/ruflo-federation/skills/federation-audit
  extra_files: []
  pack_total_skills: 161
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Query structured federation audit logs. Supports compliance mode filtering (HIPAA, SOC2, GDPR) and severity filtering.

Steps:
1. Parse compliance mode, date range, and severity from arguments
2. `npx -y -p @claude-flow/plugin-agent-federation@latest ruflo-federation audit --compliance MODE --since DATE --severity LEVEL`
3. Summarize findings: total events, PII detections, threat blocks, trust changes
4. Highlight any critical or error-severity events

| Compliance Mode | What's Logged |
|----------------|---------------|
| HIPAA | Full audit trail, no PII in logs, PHI detection, 6-year retention |
| SOC2 | Access control events, change management, availability monitoring |
| GDPR | Data processing records, consent tracking, right to erasure, data residency |
