---
slug: abilityai-trinity-docs-demos-vc-due-diligence-skills-dd-verification
name: dd-verification
tagline: Verify claims in pitch decks and founder statements using multiple
  independent sources. Use when analyzing any claim about market size, traction,
  team
summary: "Watch for these warning signs: - Round numbers without context (\"$10M
  ARR exactly\") - Claims that can't be independently verified - Metrics that
  don't match industry standards - Vague timeframes (\"recently\", \"soon\")
  -..."
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
  subpath: docs/demos/vc-due-diligence/skills/dd-verification
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
  path: docs/demos/vc-due-diligence/skills/dd-verification/SKILL.md
  branch: main
  fetched_at: 2026-11-16T09:17:03.940Z
  truncated: false
type: agent_skill
skill:
  skill_name: dd-verification
  description: Verify claims in pitch decks and founder statements using multiple
    independent sources. Use when analyzing any claim about market size,
    traction, team background, or competitive positioning.
  folder_path: docs/demos/vc-due-diligence/skills/dd-verification
  extra_files: []
  pack_total_skills: 5
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: abilityai-trinity
---

# Claim Verification Methodology
When analyzing claims from pitch decks, founder statements, or company materials, follow this rigorous verification process.

## Verification Levels

Assign one of these confidence levels to every claim:

| Level | Definition | Requirements |
|-------|------------|--------------|
| **VERIFIED** | Confirmed via 2+ independent sources | Multiple credible sources agree |
| **PARTIALLY VERIFIED** | Some evidence supports, gaps remain | One credible source + logical consistency |
| **UNVERIFIED** | Cannot confirm with available data | No independent sources found |
| **CONTRADICTED** | Evidence conflicts with claim | Sources disagree with stated claim |

## Verification Process

### 1. Identify the Claim
Extract the specific, testable assertion:
- ❌ "We're growing fast" (vague)
- ✅ "We grew 300% YoY in 2024" (specific, testable)

### 2. Find Independent Sources
Never rely solely on company-provided materials. Seek:
- Public filings (SEC, state records)
- Third-party data providers (Crunchbase, PitchBook, LinkedIn)
- Press coverage (with dates)
- Customer reviews and testimonials
- Industry reports from analysts

### 3. Cross-Reference
Compare across sources:
- Do numbers align within reasonable variance (±10%)?
- Are timelines consistent?
- Do different sources tell the same story?

### 4. Document Everything
For each verified claim, record:
```json
{
  "claim": "The specific claim text",
  "confidence": "VERIFIED | PARTIALLY VERIFIED | UNVERIFIED | CONTRADICTED",
  "sources": [
    {"name": "Source name", "url": "URL if available", "date": "YYYY-MM-DD"}
  ],
  "notes": "Any caveats or context"
}
```

## Red Flags

Watch for these warning signs:
- Round numbers without context ("$10M ARR exactly")
- Claims that can't be independently verified
- Metrics that don't match industry standards
- Vague timeframes ("recently", "soon")
- Comparisons without clear methodology

## Output Format

Include a verification summary in your analysis:

```json
{
  "verification_summary": {
    "total_claims_analyzed": 15,
    "verified": 8,
    "partially_verified": 4,
    "unverified": 2,
    "contradicted": 1
  },
  "key_concerns": [
    "Market size claim contradicted by industry reports",
    "Founder employment dates don't match LinkedIn"
  ]
}
```
