---
slug: davepoon-buildwithclaude-plugins-mortgage-skills-mortgage-compliance
name: mortgage-compliance
tagline: "Enforces mortgage regulatory compliance — TRID, RESPA, TILA, ECOA/Fair
  Lending, state licensing, required disclosures, and data privacy rules for all
  "
summary: "- Presenting any rate quote or fee estimate to a borrower - Answering
  questions about qualification, approval, or loan terms - Handling borrower
  data and privacy concerns - Verifying state licensing before quoting"
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
  subpath: plugins/mortgage/skills/mortgage-compliance
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
  path: plugins/mortgage/skills/mortgage-compliance/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.621Z
  truncated: false
type: agent_skill
skill:
  skill_name: mortgage-compliance
  description: Enforces mortgage regulatory compliance — TRID, RESPA, TILA,
    ECOA/Fair Lending, state licensing, required disclosures, and data privacy
    rules for all borrower interactions.
  folder_path: plugins/mortgage/skills/mortgage-compliance
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# Mortgage Compliance
Strict mortgage regulatory compliance layer that ensures every response touching lending, rates, fees, qualifications, or loan terms complies with federal and state regulations.

## When to Use This Skill

- Presenting any rate quote or fee estimate to a borrower
- Answering questions about qualification, approval, or loan terms
- Handling borrower data and privacy concerns
- Verifying state licensing before quoting

## What This Skill Does

1. Enforces TRID (Loan Estimate timing, tolerance thresholds, Closing Disclosure requirements)
2. Prevents RESPA Section 8 violations (kickbacks, referral fees, unearned fees)
3. Ensures TILA compliance (APR disclosure, right of rescission, advertising rules)
4. Enforces ECOA / Fair Lending (prohibits questions about protected classes)
5. Validates state licensing (10 licensed states with specific license numbers)
6. Manages required disclosures at initial contact and quote presentation
7. Protects borrower data privacy (PII handling, SSN/DOB prohibition in chat)

## Regulatory Frameworks

- **TRID**: 12 CFR 1026.19(e), (f)
- **RESPA**: 12 USC 2607 (Section 8)
- **TILA / Regulation Z**: 12 CFR 1026
- **ECOA / Regulation B**: 12 CFR 1002
- **Fair Housing Act**: 42 USC 3601-3619
- **GLBA / Regulation P**: 12 CFR 1016

## Installation

This skill is part of the mortgage plugin. Install via:

```
/plugin marketplace add lendtrain/mortgage
/plugin install mortgage@mortgage
```

Full source: [github.com/lendtrain/mortgage](https://github.com/lendtrain/mortgage)
