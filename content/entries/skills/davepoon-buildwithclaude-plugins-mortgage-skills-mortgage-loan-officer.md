---
slug: davepoon-buildwithclaude-plugins-mortgage-skills-mortgage-loan-officer
name: mortgage-loan-officer
tagline: Guides borrowers through mortgage refinance evaluation — collects loan
  data, extracts mortgage statement fields, evaluates qualification, and
  delivers
summary: "- Borrower wants to explore refinance options - Need to collect and
  validate loan scenario data - Extracting fields from uploaded mortgage
  statements - Evaluating credit score tiers, DTI ratios, and LTV thresholds"
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
  subpath: plugins/mortgage/skills/mortgage-loan-officer
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
  path: plugins/mortgage/skills/mortgage-loan-officer/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.621Z
  truncated: false
type: agent_skill
skill:
  skill_name: mortgage-loan-officer
  description: Guides borrowers through mortgage refinance evaluation — collects
    loan data, extracts mortgage statement fields, evaluates qualification, and
    delivers recommendations with consumer-friendly communication.
  folder_path: plugins/mortgage/skills/mortgage-loan-officer
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# Mortgage Loan Officer
Knowledgeable mortgage loan officer assistant that guides borrowers through a refinance evaluation by collecting information, extracting data from mortgage statements, analyzing refinance scenarios, and delivering clear recommendations.

## When to Use This Skill

- Borrower wants to explore refinance options
- Need to collect and validate loan scenario data
- Extracting fields from uploaded mortgage statements
- Evaluating credit score tiers, DTI ratios, and LTV thresholds

## What This Skill Does

1. Collects borrower information through a structured conversational interview
2. Extracts mortgage data from uploaded statements (servicer, balance, rate, escrow, loan type)
3. Validates all inputs against underwriting guidelines
4. Detects FHA Streamline and VA IRRRL eligibility automatically
5. Maps collected data to a LoanScenario for the pricing engine

## Supported Loan Types

- Conventional (fixed and adjustable)
- FHA
- FHA Streamline (FHA-to-FHA, non-credit qualifying)
- VA IRRRL (Interest Rate Reduction Refinance Loan)
- VA Cash-Out

## Installation

This skill is part of the mortgage plugin. Install via:

```
/plugin marketplace add lendtrain/mortgage
/plugin install mortgage@mortgage
```

Full source: [github.com/lendtrain/mortgage](https://github.com/lendtrain/mortgage)
