---
slug: nexu-io-open-design-design-templates-eng-runbook
name: eng-runbook
tagline: |-
  An engineering runbook — service overview, alerts table, dashboards
  links, common procedures with copy-pasteable commands, on-call rotation,
  and an in
summary: "1. Read DESIGN.md. 2. Identify the service from the brief. 3. Layout:
  - Header: service name, owner team, severity tier, version. - Service summary
  paragraph + dependency list. - Alerts table: alert name / severity /..."
categories:
  - media-creative
tags:
  - agent-skills
  - ai-design
  - byok
  - claude-code-for-design
status: active
quality_percentile: 76
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: nexu-io/open-design
  subpath: design-templates/eng-runbook
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 106053
  last_commit: 2026-11-05T12:59:13Z
  stars_delta_7d: 2028
  stars_growth_pct: 1.9
  trending_score: 2067.54
  velocity_source: snapshot_delta
  sparkline_4w:
    - 100908
    - 102299
    - 104025
    - 106053
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: nexu-io/open-design
  path: design-templates/eng-runbook/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:07.777Z
  truncated: false
type: agent_skill
skill:
  skill_name: eng-runbook
  description: |
    An engineering runbook — service overview, alerts table, dashboards
    links, common procedures with copy-pasteable commands, on-call rotation,
    and an incident-response checklist. Use when the brief mentions
    "runbook", "ops doc", "on-call guide", "SRE doc", or "运维手册".
  folder_path: design-templates/eng-runbook
  extra_files:
    - example.html
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: nexu-io-open-design
---

# Engineering Runbook Skill
Produce a single-page engineering runbook.

## Workflow

1. Read DESIGN.md.
2. Identify the service from the brief.
3. Layout:
   - Header: service name, owner team, severity tier, version.
   - Service summary paragraph + dependency list.
   - Alerts table: alert name / severity / what it means / first response.
   - Dashboards & links list.
   - Common procedures block (3–4) with code blocks (deploy, rollback, rotate keys).
   - On-call rotation table (week / primary / secondary / backup).
   - Incident response checklist (5 numbered steps).
4. One inline `<style>`, semantic HTML, monospace for code blocks.

## Output contract

```
<artifact identifier="runbook-name" type="text/html" title="Service Runbook">
<!doctype html>...</artifact>
```
