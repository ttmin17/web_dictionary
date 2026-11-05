---
slug: nexu-io-open-design-design-templates-hr-onboarding
name: hr-onboarding
tagline: |-
  A new-hire onboarding plan as a single page — first week schedule,
  buddy + manager intro, learning track, equipment checklist, and "you're
  set when…" 
summary: "1. Read the active DESIGN.md. 2. Identify the role + tenure
  expectations from the brief. Default to a 30/60/90-day shape if unspecified.
  3. Layout: - Cover banner: name placeholder, role, start date, manager +
  buddy...."
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
  subpath: design-templates/hr-onboarding
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
  path: design-templates/hr-onboarding/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:07.778Z
  truncated: false
type: agent_skill
skill:
  skill_name: hr-onboarding
  description: |
    A new-hire onboarding plan as a single page — first week schedule,
    buddy + manager intro, learning track, equipment checklist, and "you're
    set when…" outcomes. Use when the brief mentions "onboarding",
    "new hire", "first week plan", or "入职".
  folder_path: design-templates/hr-onboarding
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

# HR Onboarding Skill
Produce a single-screen onboarding plan in HTML.

## Workflow

1. Read the active DESIGN.md.
2. Identify the role + tenure expectations from the brief. Default to a
   30/60/90-day shape if unspecified.
3. Layout:
   - Cover banner: name placeholder, role, start date, manager + buddy.
   - "Day 1" panel with the literal schedule (kickoff time, lunch, 1:1 slot).
   - First-week timeline (Mon → Fri, two activities per day).
   - 30 / 60 / 90 day milestone cards with three concrete outcomes each.
   - Resource list: handbook, Slack channels, key dashboards, payroll setup.
   - "You're set when…" checklist — five outcomes with checkboxes.
4. Single inline `<style>`, semantic HTML.

## Output contract

```
<artifact identifier="onboarding-plan" type="text/html" title="Onboarding Plan">
<!doctype html>...</artifact>
```
