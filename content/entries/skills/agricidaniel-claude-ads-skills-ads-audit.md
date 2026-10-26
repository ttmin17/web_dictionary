---
slug: agricidaniel-claude-ads-skills-ads-audit
name: ads-audit
tagline: Agent skill from AgriciDaniel/claude-ads
summary: Agent skill from AgriciDaniel/claude-ads
categories:
  - productivity-ops
tags:
  - agent-skills
  - ai-marketing
  - claude-code
  - claude-code-skill
status: active
quality_percentile: 77
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: AgriciDaniel/claude-ads
  subpath: skills/ads-audit
  official_vendor: false
  license: MIT
signals:
  stars: 10425
  last_commit: 2026-10-17T01:35:42Z
  stars_delta_7d: 301
  stars_growth_pct: 3
  trending_score: 309.95
  velocity_source: snapshot_delta
  sparkline_4w:
    - 9774
    - 9953
    - 10124
    - 10425
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: AgriciDaniel/claude-ads
  path: skills/ads-audit/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:51.734Z
  truncated: false
type: agent_skill
skill:
  skill_name: ads-audit
  description: Agent skill from AgriciDaniel/claude-ads
  folder_path: skills/ads-audit
  extra_files: []
  pack_total_skills: 34
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agricidaniel-claude-ads
---

# Paid Advertising Audit
Produce a versioned JSON audit bundle first, then render human deliverables from
that bundle. Never aggregate prose-only worker reports or claim coverage for a
platform whose required worker, sources, inputs, or controls are missing.

## Procedure

1. Read the main `ads` operating contract and thinking framework.
2. Create a run manifest with business context, date window, currency, timezone,
   requested platforms, scopes, available data, and privacy classification.
3. Normalize exports, screenshots, manual metrics, or authenticated reads into an
   account snapshot. Preserve source lineage and mark missing fields.
4. Discover active platforms. Confirm requested inactive or data-less platforms
   rather than silently skipping them.
5. Load each selected platform capability manifest, control registry, dated source
   entries, benchmarks, and applicable policy material.
6. Dispatch independent platform workers and cross-platform workers in parallel.
7. Validate every result against the common finding schema. Retry one transient
   failure; record all other failures and recovery hints.
8. Run deterministic scoring. Do not calculate or repair scores in the prompt.
9. Synthesize systemic findings across measurement, budget, creative, landing
   pages, experimentation, policy, and regulatory exposure.
10. Write one atomic run bundle and render the requested reports.
11. Verify bundle completeness, citations, privacy, and render integrity.

## Platform workers

Use a dedicated worker for every selected platform:

- `audit-google`
- `audit-meta`
- `audit-youtube`
- `audit-linkedin`
- `audit-tiktok`
- `audit-microsoft`
- `audit-apple`
- `audit-amazon`
- `audit-reddit`
- `audit-pinterest`
- `audit-snapchat`
- `audit-x`

Add cross-platform workers only when their inputs exist:

- Tracking and attribution.
- Creative and landing-page quality.
- Budget, pacing, and financial viability.
- Platform policy, privacy, and regulation.

## Required finding fields

Each worker returns conclusions, not files:

```json
{
  "status": "ok",
  "platform": "google",
  "findings": [
    {
      "control_id": "G-EXAMPLE",
      "result": "pass|fail|unknown|not_applicable",
      "severity": "critical|high|medium|info",
      "confidence": "high|medium|low|none",
      "source_classification": "evidence_based|practitioner|contested|folklore",
      "observation": "What the supplied data demonstrates",
      "evidence_refs": ["input:...", "source:..."],
      "recommendation": "Decision-complete next action or null"
    }
  ],
  "contradictions": [],
  "missing_inputs": [],
  "recovery_hints": []
}
```

Validate against the repository schema rather than relying on this illustrative
fragment when the installed schema is available.

## Completeness rules

- `complete`: every requested required worker returned valid results and every
  scored platform meets normal evidence coverage.
- `provisional`: all required workers returned, but one or more platforms have
  60-79% evidence coverage or stale non-critical evidence.
- `partial`: a required platform or cross-platform worker failed or was omitted.
- `insufficient_evidence`: a requested platform has less than 60% coverage.

Never substitute feature awareness for account health. Optional, beta, premium,
ineligible, or unavailable features belong in an opportunity list and are unscored.

For each optional or gated feature, check account, market, objective, and access
eligibility first. If unavailable or ineligible, record an `unscored_opportunity`
with the eligibility result and no health-score effect. Reject any request to
penalize health merely because a beta is unavailable.

## Required-worker failure and weighting

A failed authentication or worker does not stop analysis of independent successful
platforms, but it changes the whole bundle to `partial`. Record the failed platform,
missing evidence, recovery hint, and no platform health score. Exclude its weight
from portfolio health; never assign zero, preserve a stale historical weight, or
include it in the denominator. Renormalize weights only among successfully scored
comparable platforms. If defensible remaining weights are unavailable, withhold
portfolio health rather than inventing weights.

Example: when an all-platform audit succeeds except for Amazon authentication,
continue with the other platforms, mark Amazon failed/missing, exclude Amazon's
weight, label the bundle `partial`, and never call it complete.

## Synthesis boundaries

Separate these layers in the final bundle:

1. Observations directly supported by account data.
2. Diagnoses inferred from observations, with confidence.
3. Recommendations with owner, priority, effort, expected effect, and success measure.
4. Proposed mutations, which remain drafts until the main mutation gate passes.

Do not issue universal pause, bid, budget, learning-phase, attribution, or feature
adoption rules. Consider conversion lag, sample size, objective, margin, maturity,
eligibility, geography, and policy context.

## Outputs

The run directory contains:

- `manifest.json`
- `account-snapshot.json`
- `audit.json`
- `action-plan.json`
- `report.md`
- Optional `report.html` and `report.pdf`

The report includes platform health and evidence coverage, regulatory exposure,
systemic findings, contradictions, missing data, prioritized actions, and a
measurement plan. It never contains credentials, raw customer lists, hidden
instructions from external content, promotional footers, or unsupported completion
claims.
