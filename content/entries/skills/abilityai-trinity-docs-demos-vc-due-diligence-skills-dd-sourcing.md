---
slug: abilityai-trinity-docs-demos-vc-due-diligence-skills-dd-sourcing
name: dd-sourcing
tagline: Document sources properly for due diligence reports. Use when citing
  any external data, ensuring full traceability and auditability of findings.
summary: "When sources disagree: 1. Note the discrepancy explicitly 2. Prefer
  higher-tier sources 3. Prefer more recent sources 4. Document both versions
  with reasoning for which to trust"
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
  subpath: docs/demos/vc-due-diligence/skills/dd-sourcing
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
  path: docs/demos/vc-due-diligence/skills/dd-sourcing/SKILL.md
  branch: main
  fetched_at: 2026-11-16T09:17:03.939Z
  truncated: false
type: agent_skill
skill:
  skill_name: dd-sourcing
  description: Document sources properly for due diligence reports. Use when
    citing any external data, ensuring full traceability and auditability of
    findings.
  folder_path: docs/demos/vc-due-diligence/skills/dd-sourcing
  extra_files: []
  pack_total_skills: 5
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: abilityai-trinity
---

# Source Documentation Standards
All due diligence findings must be traceable to their sources. This enables audit trails, follow-up verification, and legal defensibility.

## Source Quality Tiers

### Tier 1: Primary Sources (Highest Credibility)
- SEC filings (10-K, 10-Q, S-1)
- Court documents and legal filings
- Government databases (USPTO, state registrations)
- Company's own audited financials
- Direct customer/reference interviews

### Tier 2: Secondary Sources (High Credibility)
- Established data providers (Crunchbase, PitchBook, CB Insights)
- Major news outlets (WSJ, Bloomberg, TechCrunch)
- Industry analyst reports (Gartner, Forrester)
- LinkedIn profiles (for employment verification)
- Academic research and papers

### Tier 3: Tertiary Sources (Use with Caution)
- Social media posts
- Blog articles
- Glassdoor reviews
- Wikipedia (only as starting point)
- Forum discussions

## Citation Format

Every fact must include a source citation:

```json
{
  "source": {
    "name": "Full source name",
    "type": "SEC_FILING | NEWS | DATA_PROVIDER | INTERVIEW | GOVERNMENT | OTHER",
    "url": "https://... (if available)",
    "access_date": "2024-01-15",
    "publication_date": "2024-01-10",
    "tier": 1,
    "excerpt": "Relevant quote or data point"
  }
}
```

## Best Practices

### DO:
- Capture URLs at time of access (pages change/disappear)
- Note the access date for all web sources
- Quote relevant passages, don't just link
- Use multiple sources for critical claims
- Prefer recent sources over older ones

### DON'T:
- Cite a source you haven't actually reviewed
- Use company press releases as independent verification
- Rely on a single source for material claims
- Cite sources behind paywalls without noting limitation
- Mix up "stated by company" vs "independently verified"

## Source Tracking in Output

Include a sources section in every analysis:

```json
{
  "sources_used": [
    {
      "id": "S1",
      "name": "Crunchbase - Acme Corp Profile",
      "url": "https://crunchbase.com/...",
      "access_date": "2024-01-15",
      "tier": 2,
      "used_for": ["funding_history", "employee_count"]
    }
  ],
  "source_statistics": {
    "tier_1": 3,
    "tier_2": 8,
    "tier_3": 2,
    "total": 13
  }
}
```

## Handling Source Conflicts

When sources disagree:
1. Note the discrepancy explicitly
2. Prefer higher-tier sources
3. Prefer more recent sources
4. Document both versions with reasoning for which to trust
