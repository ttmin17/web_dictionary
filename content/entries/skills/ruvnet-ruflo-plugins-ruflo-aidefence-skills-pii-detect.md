---
slug: ruvnet-ruflo-plugins-ruflo-aidefence-skills-pii-detect
name: pii-detect
tagline: Detect and flag personally identifiable information (PII) in text,
  code, and configurations. Use before committing code, writing logs, storing
  data, o
summary: Before committing code, storing data, or sending responses that might
  contain PII (emails, phone numbers, SSNs, API keys, passwords).
categories:
  - agent-frameworks
tags:
  - agentic-ai
  - agentic-framework
  - agentic-workflow
  - agents
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: ruvnet/ruflo
  subpath: plugins/ruflo-aidefence/skills/pii-detect
  official_vendor: false
  license: MIT
signals:
  stars: 79343
  last_commit: 2026-10-26T06:36:48Z
  stars_delta_7d: 2614
  stars_growth_pct: 3.4
  trending_score: 2703.05
  velocity_source: snapshot_delta
  sparkline_4w:
    - 74048
    - 74512
    - 76729
    - 79343
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: ruvnet/ruflo
  path: plugins/ruflo-aidefence/skills/pii-detect/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.542Z
  truncated: false
type: agent_skill
skill:
  skill_name: pii-detect
  description: Detect and flag personally identifiable information (PII) in text,
    code, and configurations. Use before committing code, writing logs, storing
    data, or sending model responses that might contain emails, phone numbers,
    SSNs, API keys, or passwords.
  folder_path: plugins/ruflo-aidefence/skills/pii-detect
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# PII Detection
Detect personally identifiable information before it enters logs, commits, or responses.

## When to use

Before committing code, storing data, or sending responses that might contain PII (emails, phone numbers, SSNs, API keys, passwords).

## Steps

1. **Quick PII check** — call `mcp__plugin_ruflo-core_ruflo__aidefence_has_pii` with the text for a boolean result
2. **Detailed scan** — call `mcp__plugin_ruflo-core_ruflo__transfer_detect-pii` for categorized PII findings
3. **Full analysis** — call `mcp__plugin_ruflo-core_ruflo__aidefence_analyze` for context-aware PII detection
4. If PII found, flag the specific locations and suggest redaction

## PII categories detected

- Email addresses, phone numbers
- Social security numbers, tax IDs
- Credit card numbers
- API keys, tokens, passwords
- Physical addresses
- Names linked to sensitive data
