---
slug: davepoon-buildwithclaude-plugins-all-skills-skills-internal-comms
name: internal-comms
tagline: A set of resources to help me write all kinds of internal
  communications, using the formats that my company likes to use. Claude should
  use this skill
summary: "To write any internal communication:"
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
  subpath: plugins/all-skills/skills/internal-comms
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
  path: plugins/all-skills/skills/internal-comms/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.588Z
  truncated: false
type: agent_skill
skill:
  skill_name: internal-comms
  description: A set of resources to help me write all kinds of internal
    communications, using the formats that my company likes to use. Claude
    should use this skill whenever asked to write some sort of internal
    communications (status reports, leadership updates, 3P updates, company
    newsletters, FAQs, incident reports, project updates, etc.).
  folder_path: plugins/all-skills/skills/internal-comms
  extra_files:
    - LICENSE.txt
    - examples/3p-updates.md
    - examples/company-newsletter.md
    - examples/faq-answers.md
    - examples/general-comms.md
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

## When to use this skill
To write internal communications, use this skill for:
- 3P updates (Progress, Plans, Problems)
- Company newsletters
- FAQ responses
- Status reports
- Leadership updates
- Project updates
- Incident reports

## How to use this skill

To write any internal communication:

1. **Identify the communication type** from the request
2. **Load the appropriate guideline file** from the `examples/` directory:
    - `examples/3p-updates.md` - For Progress/Plans/Problems team updates
    - `examples/company-newsletter.md` - For company-wide newsletters
    - `examples/faq-answers.md` - For answering frequently asked questions
    - `examples/general-comms.md` - For anything else that doesn't explicitly match one of the above
3. **Follow the specific instructions** in that file for formatting, tone, and content gathering

If the communication type doesn't match any existing guideline, ask for clarification or more context about the desired format.

## Keywords
3P updates, company newsletter, company comms, weekly update, faqs, common questions, updates, internal comms
