---
slug: alirezarezvani-claude-skills-business-growth-skills-business-growth-skills
name: business-growth-skills
tagline: "Router/index for the 4 business & growth skills bundled in this
  plugin: customer-success-manager (health scoring, churn risk, expansion),
  sales-engine"
summary: Match the request, then load business-growth/skills//SKILL.md. If
  multiple rows match, ask one clarifying question first.
categories:
  - coding-agents
tags:
  - agent-plugins
  - agent-skills
  - agentic-ai
  - ai-coding-agent
status: active
quality_percentile: 82
selection_reason: quality_percentile
first_seen: 2026-10-26
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: alirezarezvani/claude-skills
  subpath: business-growth/skills/business-growth-skills
  official_vendor: false
  license: MIT
signals:
  stars: 28730
  last_commit: 2026-10-23T11:30:28Z
  stars_delta_7d: 523
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 27812
    - 28112
    - 28730
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: alirezarezvani/claude-skills
  path: business-growth/skills/business-growth-skills/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:10.234Z
  truncated: false
type: agent_skill
skill:
  skill_name: business-growth-skills
  description: "Router/index for the 4 business & growth skills bundled in this
    plugin: customer-success-manager (health scoring, churn risk, expansion),
    sales-engineer (RFP analysis, competitive matrices, PoC planning),
    revenue-operations (pipeline, forecast accuracy, GTM efficiency), and
    contract-and-proposal-writer. Use when a growth/revenue request doesn't
    obviously match one skill and you need to pick the right one (e.g., 'which
    accounts are at risk', 'should we bid on this RFP')."
  folder_path: business-growth/skills/business-growth-skills
  extra_files: []
  pack_total_skills: 383
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: alirezarezvani-claude-skills
---

# Business & Growth Skills — Router
This plugin bundles **4 skills** (this router is the 5th folder under `business-growth/skills/`). Each skill is self-contained.

## Routing table

Match the request, then load `business-growth/skills/<skill>/SKILL.md`. If multiple rows match, ask one clarifying question first.

| Request signals | Skill | Path |
|---|---|---|
| Customer health scores, churn risk, expansion plays | customer-success-manager | `skills/customer-success-manager/` |
| RFP/RFI coverage, competitive positioning, PoC plans | sales-engineer | `skills/sales-engineer/` |
| Pipeline coverage, forecast accuracy (MAPE), GTM efficiency | revenue-operations | `skills/revenue-operations/` |
| Proposals, contracts, statements of work, DPAs | contract-and-proposal-writer | `skills/contract-and-proposal-writer/` |

## Quick start

```bash
# Example: route an account-health request
cat business-growth/skills/customer-success-manager/SKILL.md
python3 business-growth/skills/customer-success-manager/scripts/health_score_calculator.py --help
```

## Rules

- Route to exactly one skill, then follow that skill's workflow. This router ships no tools of its own.
- Use the skills' Python scorers for metrics, not manual estimates; deal/contract outputs are drafts for human legal/commercial review.
