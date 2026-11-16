---
slug: abilityai-trinity-docs-demos-vc-due-diligence-skills-dd-risk-scoring
name: dd-risk-scoring
tagline: Calculate weighted risk scores from specialist agent reports. Use when
  synthesizing multiple due diligence reports into an overall investment risk
  ass
summary: If ANY specialist reports a score >80 in their domain, flag for manual
  review regardless of overall score. Single-domain critical risks can be
  deal-breakers.
categories:
  - agent-frameworks
tags:
  - agent-orchestration
  - agent-runtime
  - agentic-ai
  - ai-agent
status: active
quality_percentile: 67
selection_reason: quality_percentile
first_seen: 2026-11-16
last_updated: 2026-11-16T09:17:13.266Z
source:
  kind: github_repo
  repo: Abilityai/trinity
  subpath: docs/demos/vc-due-diligence/skills/dd-risk-scoring
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 777
  last_commit: 2026-11-16T09:03:18Z
  stars_delta_7d: 27
  stars_growth_pct: 3.6
  trending_score: 27.97
  velocity_source: snapshot_delta
  sparkline_4w:
    - 701
    - 735
    - 750
    - 777
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: Abilityai/trinity
  path: docs/demos/vc-due-diligence/skills/dd-risk-scoring/SKILL.md
  branch: main
  fetched_at: 2026-11-16T09:17:03.939Z
  truncated: false
type: agent_skill
skill:
  skill_name: dd-risk-scoring
  description: Calculate weighted risk scores from specialist agent reports. Use
    when synthesizing multiple due diligence reports into an overall investment
    risk assessment.
  folder_path: docs/demos/vc-due-diligence/skills/dd-risk-scoring
  extra_files: []
  pack_total_skills: 5
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: abilityai-trinity
---

# Risk Scoring Methodology
As the Deal Lead, you synthesize reports from 9 specialist agents into a single investment risk score. This methodology ensures consistent, defensible scoring.

## Scoring Weights

| Specialist | Weight | Rationale |
|------------|--------|-----------|
| Founder/Team (dd-founder) | 20% | Team is #1 predictor of startup success |
| Technology (dd-tech) | 15% | Core IP and technical moat |
| Business Model (dd-bizmodel) | 15% | Path to profitability |
| Traction (dd-traction) | 15% | Evidence of product-market fit |
| Market (dd-market) | 15% | TAM and growth opportunity |
| Competition (dd-competitor) | 10% | Competitive positioning |
| Compliance (dd-compliance) | 5% | Regulatory risk |
| Cap Table (dd-captable) | 3% | Investor alignment |
| Legal (dd-legal) | 2% | Legal structure and IP |

**Total: 100%**

## Calculation Formula

```
Overall Risk Score = Σ (specialist_score × weight)
```

Example:
```
Founder: 25 × 0.20 = 5.0
Tech:    40 × 0.15 = 6.0
BizModel: 30 × 0.15 = 4.5
Traction: 35 × 0.15 = 5.25
Market:   20 × 0.15 = 3.0
Competitor: 45 × 0.10 = 4.5
Compliance: 15 × 0.05 = 0.75
CapTable:  25 × 0.03 = 0.75
Legal:     30 × 0.02 = 0.6
--------------------------------
Overall Risk Score: 30.35
```

## Risk Score Interpretation

| Score Range | Rating | Recommendation |
|-------------|--------|----------------|
| 0-20 | **Strong Invest** | Exceptional opportunity, minimal risks |
| 21-35 | **Invest** | Good opportunity, manageable risks |
| 36-50 | **Negotiate** | Proceed with caution, address key risks |
| 51-70 | **Pass** | Too many concerns, high risk |
| 71-100 | **Strong Pass** | Critical issues, do not invest |

## Adjustment Factors

Apply these modifiers to the calculated score:

### Positive Adjustments (reduce score)
- Repeat founder with successful exit: -5
- Strategic fit with portfolio: -3
- Strong reference checks: -2
- Clear competitive moat: -3

### Negative Adjustments (increase score)
- Missing key team member: +5
- Unverified core claims: +10
- Regulatory uncertainty: +5
- Customer concentration >50%: +5
- Burn rate concern: +3

## Output Format

```json
{
  "risk_scoring": {
    "weighted_scores": {
      "founder": {"raw": 25, "weight": 0.20, "weighted": 5.0},
      "tech": {"raw": 40, "weight": 0.15, "weighted": 6.0}
    },
    "base_score": 30.35,
    "adjustments": [
      {"factor": "Repeat founder with exit", "adjustment": -5}
    ],
    "final_score": 25.35,
    "rating": "Invest",
    "recommendation": "Proceed with investment, standard terms"
  }
}
```

## Red Flag Escalation

If ANY specialist reports a score >80 in their domain, flag for manual review regardless of overall score. Single-domain critical risks can be deal-breakers.
