---
slug: alirezarezvani-claude-skills-business-growth-skills-business-growth-skills
name: business-growth-skills
tagline: Use when a growth request needs routing between
  customer-success-manager, sales-engineer, revenue-operations and
  contract-and-proposal-writer.
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
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: alirezarezvani/claude-skills
  subpath: business-growth/skills/business-growth-skills
  official_vendor: false
  license: MIT
signals:
  stars: 29502
  last_commit: 2026-11-05T06:58:08Z
  stars_delta_7d: 165
  stars_growth_pct: 0.6
  trending_score: 165.93
  velocity_source: snapshot_delta
  sparkline_4w:
    - 28730
    - 29337
    - 29502
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: alirezarezvani/claude-skills
  path: business-growth/skills/business-growth-skills/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:33.880Z
  truncated: false
type: agent_skill
skill:
  skill_name: business-growth-skills
  description: Use when a growth request needs routing between
    customer-success-manager, sales-engineer, revenue-operations and
    contract-and-proposal-writer.
  folder_path: business-growth/skills/business-growth-skills
  extra_files: []
  pack_total_skills: 25
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
