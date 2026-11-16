---
slug: abilityai-trinity-docs-demos-vc-due-diligence-skills-dd-report-format
name: dd-report-format
tagline: Standard output format for due diligence analysis reports. Use when
  producing your final analysis to ensure consistency across all specialist
  agents.
summary: "Use a 0-100 scale where: - 0-20: Minimal risk (green light) - 21-35:
  Low risk (proceed with standard diligence) - 36-50: Moderate risk (proceed
  with caution) - 51-70: High risk (significant concerns) - 71-100: Critica..."
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
  subpath: docs/demos/vc-due-diligence/skills/dd-report-format
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 777
  last_commit: 2026-11-16T09:03:18Z
  stars_delta_7d: 27
  stars_growth_pct: 3.6
  trending_score: 27.97
  rank_current: 113
  rank_delta: -60
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
  path: docs/demos/vc-due-diligence/skills/dd-report-format/SKILL.md
  branch: main
  fetched_at: 2026-11-16T09:17:03.939Z
  truncated: false
type: agent_skill
skill:
  skill_name: dd-report-format
  description: Standard output format for due diligence analysis reports. Use when
    producing your final analysis to ensure consistency across all specialist
    agents.
  folder_path: docs/demos/vc-due-diligence/skills/dd-report-format
  extra_files: []
  pack_total_skills: 5
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: abilityai-trinity
---

# Due Diligence Report Format
All specialist agents must output their analysis in this standardized JSON format. This enables automated synthesis by the Deal Lead agent.

## Standard Report Structure

```json
{
  "metadata": {
    "agent": "dd-{specialist}",
    "company": "Company Name",
    "analysis_date": "2024-01-15T10:30:00Z",
    "version": "1.0"
  },

  "executive_summary": {
    "headline": "One-sentence assessment",
    "recommendation": "POSITIVE | NEUTRAL | NEGATIVE | CRITICAL",
    "confidence": "HIGH | MEDIUM | LOW",
    "key_findings": [
      "Finding 1",
      "Finding 2",
      "Finding 3"
    ]
  },

  "risk_assessment": {
    "overall_score": 35,
    "category_scores": {
      "category_name": {
        "score": 30,
        "weight": 0.25,
        "rationale": "Brief explanation"
      }
    },
    "red_flags": [
      {
        "severity": "HIGH | MEDIUM | LOW",
        "description": "Description of the red flag",
        "evidence": "Supporting evidence",
        "mitigation": "Possible mitigation or none"
      }
    ],
    "green_flags": [
      {
        "description": "Positive indicator",
        "evidence": "Supporting evidence"
      }
    ]
  },

  "detailed_analysis": {
    "section_name": {
      "findings": "Detailed analysis text",
      "data": {},
      "sources": ["S1", "S2"]
    }
  },

  "sources": [
    {
      "id": "S1",
      "name": "Source name",
      "url": "URL",
      "tier": 1,
      "access_date": "2024-01-15"
    }
  ],

  "verification_summary": {
    "total_claims": 15,
    "verified": 10,
    "partially_verified": 3,
    "unverified": 1,
    "contradicted": 1
  },

  "follow_up_items": [
    {
      "priority": "HIGH | MEDIUM | LOW",
      "description": "Item requiring further investigation",
      "assigned_to": "dd-{specialist} or HUMAN"
    }
  ]
}
```

## Risk Scoring

Use a 0-100 scale where:
- **0-20**: Minimal risk (green light)
- **21-35**: Low risk (proceed with standard diligence)
- **36-50**: Moderate risk (proceed with caution)
- **51-70**: High risk (significant concerns)
- **71-100**: Critical risk (major red flags)

## File Naming Convention

Save your report to the shared folder as:
```
/shared-out/{your-domain}-analysis/{company_name}_{date}.json
```

Example:
```
/shared-out/founder-analysis/acme_corp_2024-01-15.json
```

## Markdown Summary

In addition to JSON, create a human-readable summary:
```
/shared-out/{your-domain}-analysis/{company_name}_{date}_summary.md
```

This should include:
- Executive summary (2-3 paragraphs)
- Key findings (bullet points)
- Risk assessment visualization
- Recommended actions
