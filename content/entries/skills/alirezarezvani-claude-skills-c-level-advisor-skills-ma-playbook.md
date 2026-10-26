---
slug: alirezarezvani-claude-skills-c-level-advisor-skills-ma-playbook
name: ma-playbook
tagline: M&A strategy for acquiring companies or being acquired. Due diligence,
  valuation, integration, and deal structure. Use when evaluating acquisitions,
  p
summary: "Acquiring: Start with strategic rationale → target screening → due
  diligence → valuation → negotiation → integration."
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
  subpath: c-level-advisor/skills/ma-playbook
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
  path: c-level-advisor/skills/ma-playbook/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:10.241Z
  truncated: false
type: agent_skill
skill:
  skill_name: ma-playbook
  description: M&A strategy for acquiring companies or being acquired. Due
    diligence, valuation, integration, and deal structure. Use when evaluating
    acquisitions, preparing for acquisition, M&A due diligence, integration
    planning, or deal negotiation.
  folder_path: c-level-advisor/skills/ma-playbook
  extra_files:
    - references/due-diligence-checklist.md
    - references/integration-playbook.md
  pack_total_skills: 383
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: alirezarezvani-claude-skills
---

# M&A Playbook
Frameworks for both sides of M&A: acquiring companies and being acquired.

## Keywords
M&A, mergers and acquisitions, due diligence, acquisition, acqui-hire, integration, deal structure, valuation, LOI, term sheet, earnout

## Quick Start

**Acquiring:** Start with strategic rationale → target screening → due diligence → valuation → negotiation → integration.

**Being Acquired:** Start with readiness assessment → data room prep → advisor selection → negotiation → transition.

## When You're Acquiring

### Strategic Rationale (answer before anything else)
- **Buy vs Build:** Can you build this faster/cheaper? If yes, don't acquire.
- **Acqui-hire vs Product vs Market:** What are you really buying? Talent? Technology? Customers?
- **Integration complexity:** How hard is it to merge this into your company?

### Due Diligence Checklist
| Domain | Key Questions | Red Flags |
|--------|--------------|-----------|
| Financial | Revenue quality, customer concentration, burn rate | >30% revenue from 1 customer |
| Technical | Code quality, tech debt, architecture fit | Monolith with no tests |
| Legal | IP ownership, pending litigation, contracts | Key IP owned by individuals |
| People | Key person risk, culture fit, retention risk | Founders have no lockup/earnout |
| Market | Market position, competitive threats | Declining market share |
| Customers | Churn rate, NPS, contract terms | High churn, short contracts |

### Valuation Approaches

The ranges below are **illustrative, not current market data** — always verify against current market comps before using them in a model or negotiation.

- **Revenue multiple:** Industry-dependent (illustrative range: 2-15x ARR for SaaS, varying with growth rate, NRR, and rate environment)
- **Comparable transactions:** What similar companies sold for — the most defensible anchor
- **DCF:** For profitable companies only (most startups: use multiples)
- **Acqui-hire:** Illustrative range: $1-3M per engineer in hot talent markets

**Sources to verify against (check the latest edition):** the SaaS Capital Index (private SaaS revenue multiples, updated monthly), Software Equity Group (SEG) Annual/Quarterly SaaS M&A Reports (transaction multiples), and Aventis Advisors' SaaS valuation multiples reports. Cross-check at least two before anchoring a price.

### Integration Frameworks
See `references/integration-playbook.md` for the 100-day integration plan.

## When You're Being Acquired

### Readiness Signals
- Inbound interest from strategic buyers
- Market consolidation happening around you
- Fundraising becomes harder than operating
- Founder ready for a transition

### Preparation (6-12 months before)
1. Clean up financials (audited if possible)
2. Document all IP and contracts
3. Reduce customer concentration
4. Lock up key employees
5. Build the data room
6. Engage an M&A advisor

### Negotiation Points
| Term | What to Watch | Your Leverage |
|------|--------------|---------------|
| Valuation | Earnout traps (unreachable targets) | Multiple competing offers |
| Earnout | Milestone definitions, measurement period | Cash-heavy vs earnout-heavy split |
| Lockup | Duration, conditions | Your replaceability |
| Rep & warranties | Scope of liability | Escrow vs indemnification cap |
| Employee retention | Who gets offers, at what terms | Key person dependencies |

## Red Flags (Both Sides)

- No clear strategic rationale beyond "it's a good deal"
- Culture clash visible during due diligence and ignored
- Key people not locked in before close
- Integration plan doesn't exist or is "we'll figure it out"
- Valuation based on projections, not actuals

## Verification Loop (before any LOI or signature)

This skill frames the deal; two sibling skills verify it. Hand off — don't duplicate:

1. **Legal terms** → `general-counsel-advisor`: run the LOI/term sheet through `../general-counsel-advisor/scripts/term_sheet_analyzer.py` (12-dimension 0-100 score) and the definitive docs through `../general-counsel-advisor/scripts/contract_risk_scanner.py` (12 founder-killer patterns: earnout traps, uncapped indemnity, vague IP, etc.). Any 🔴 finding goes to outside counsel before signing.
2. **Data diligence** → `chief-data-officer-advisor`: run `../chief-data-officer-advisor/scripts/ai_training_data_audit.py` (training-data rights, GDPR Art. 6 basis) and `../chief-data-officer-advisor/scripts/data_asset_valuator.py` (data-asset value, M&A multiplier with carve-out penalties) on the target's data estate. Undocumented consent provenance is a price-reduction or walk-away item.
3. **Valuation math** → `cfo-advisor` tools for the quantitative model; this playbook stays qualitative.

Loop the findings back into the negotiation-points table above before the next counter.

## Integration with C-Suite Roles

| Role | Contribution to M&A |
|------|-------------------|
| CEO | Strategic rationale, negotiation lead |
| CFO | Valuation, deal structure, financing |
| GC | LOI/term sheet review, contract risk scan, regulatory triggers |
| CDO | Data diligence: training-data rights, data-asset valuation |
| CTO | Technical due diligence, integration architecture |
| CHRO | People due diligence, retention planning |
| COO | Integration execution, process merge |
| CPO | Product roadmap impact, customer overlap |

## Resources
- `references/integration-playbook.md` — 100-day post-acquisition integration plan
- `references/due-diligence-checklist.md` — comprehensive DD checklist by domain
- `../general-counsel-advisor/SKILL.md` — term sheet analyzer + contract risk scanner
- `../chief-data-officer-advisor/SKILL.md` — data diligence + data-asset valuation
