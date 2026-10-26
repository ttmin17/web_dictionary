---
slug: davepoon-buildwithclaude-plugins-mortgage-skills-closing-costs
name: closing-costs
tagline: Calculates itemized state-specific closing costs for mortgage refinance
  transactions across 10 licensed states, with product-specific fees for Convent
summary: "- Calculating closing costs for a refinance quote - Presenting fee
  breakdowns to borrowers - Determining FHA UFMIP refund netting for Streamline
  refinances - Calculating VA funding fees with disability exemption handling"
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
  subpath: plugins/mortgage/skills/closing-costs
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
  path: plugins/mortgage/skills/closing-costs/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.621Z
  truncated: false
type: agent_skill
skill:
  skill_name: closing-costs
  description: Calculates itemized state-specific closing costs for mortgage
    refinance transactions across 10 licensed states, with product-specific fees
    for Conventional, FHA, FHA Streamline, VA IRRRL, and VA Cash-Out.
  folder_path: plugins/mortgage/skills/closing-costs
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# Closing Costs
Provides itemized estimated closing costs for refinance transactions with state-specific fee schedules, product-specific calculations, and compliance-required disclosures.

## When to Use This Skill

- Calculating closing costs for a refinance quote
- Presenting fee breakdowns to borrowers
- Determining FHA UFMIP refund netting for Streamline refinances
- Calculating VA funding fees with disability exemption handling

## What This Skill Does

1. Calculates Section A (lender fees), Section B (third-party fees), Section C (title/settlement), and Section E (recording/taxes)
2. Applies state-specific title insurance rate formulas for all 10 licensed states
3. Handles FHA UFMIP with refund netting for Streamline refinances
4. Handles VA funding fee with disability exemption detection
5. Presents full itemized breakdown with compliance disclosures

## Supported States

| State | Key Taxes/Fees |
|-------|---------------|
| Georgia (GA) | Intangible tax $3.00/$1,000 |
| Alabama (AL) | Mortgage recordation tax $1.50/$1,000 |
| Florida (FL) | Doc stamp $3.50/$1,000 + intangible $2.00/$1,000 |
| Kentucky (KY) | No transfer tax on refinance |
| North Carolina (NC) | Attorney-closing state, no excise tax on refi |
| Oregon (OR) | No mortgage recording tax |
| South Carolina (SC) | Attorney-closing state |
| Tennessee (TN) | Indebtedness tax $1.15/$1,000 |
| Texas (TX) | No mortgage recording tax |
| Utah (UT) | No mortgage tax |

## Installation

This skill is part of the mortgage plugin. Install via:

```
/plugin marketplace add lendtrain/mortgage
/plugin install mortgage@mortgage
```

Full source: [github.com/lendtrain/mortgage](https://github.com/lendtrain/mortgage)
