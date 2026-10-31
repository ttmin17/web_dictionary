---
slug: alirezarezvani-claude-skills-c-level-agents-skills-gc-review
name: gc-review
tagline: /c-level-agents:gc-review [plan] — General Counsel interrogation of
  contracts, IP, regulatory, term sheets, and employment-law surface. Use when
  revie
summary: The General Counsel lens. Six questions before any contract, term
  sheet, IP move, or regulatory commitment. This is a lane gstack has zero of —
  and one where a single missed clause costs more than a year of engineering.
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
  subpath: c-level-agents/skills/gc-review
  official_vendor: false
  license: MIT
signals:
  stars: 28730
  last_commit: 2026-10-23T11:30:28Z
  stars_delta_7d: 1198
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
  path: c-level-agents/skills/gc-review/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:10.243Z
  truncated: false
type: agent_skill
skill:
  skill_name: gc-review
  description: /c-level-agents:gc-review [plan] — General Counsel interrogation of
    contracts, IP, regulatory, term sheets, and employment-law surface. Use when
    reviewing a term sheet before signing, redlining a customer MSA, or checking
    IP assignment and regulatory exposure on a new product.
  folder_path: c-level-agents/skills/gc-review
  extra_files: []
  pack_total_skills: 383
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: alirezarezvani-claude-skills
---

# /c-level-agents:gc-review — General Counsel Forcing Questions
**Command:** `/c-level-agents:gc-review <plan>`

The General Counsel lens. Six questions before any contract, term sheet, IP move, or regulatory commitment. This is a lane gstack has zero of — and one where a single missed clause costs more than a year of engineering.

> ⚠️ **Not legal advice.** This command surfaces the right questions to ask before talking to outside counsel. Always engage qualified counsel for binding decisions.

## When to Run

- Before signing any contract > $100K or > 1 year
- Before issuing equity (employee grants, advisor grants)
- Before a term sheet response
- Before entering a regulated market (healthcare, fintech, defense)
- Before any open-source license decision in core IP
- Before an M&A LOI

## The Six GC Questions

### 1. IP Ownership
**Who owns the IP being created or shared in this transaction?**
- Work-for-hire vs license vs joint.
- For employees and contractors: written IP assignment in place?
- For OSS: license compatibility checked?

### 2. Liability & Indemnity
**What's the liability cap, and what's carved out from it?**
- Standard cap: 12 months of fees.
- Carve-outs: IP infringement, data breach, willful misconduct.
- Mutual indemnity desirable.

### 3. Data Processing
**What personal data is involved, and is a DPA in place?**
- GDPR / CCPA scope?
- Subprocessor flow-down?
- Data residency requirements?

### 4. Termination & Renewal
**What's the termination right, what's the notice period, and what's auto-renew?**
- Termination for convenience vs cause.
- Notice period (30 / 60 / 90 days).
- Auto-renewal trap?

### 5. Regulatory Surface
**Does this expose the company to a new regulatory regime?**
- Healthcare → HIPAA.
- Fintech → BSA/AML, state money-transmitter.
- Medical device → FDA, MDR, ISO 13485.
- Data → GDPR, CCPA, state breach laws.

### 6. Employment / Equity
**If this is a hire or contractor: jurisdiction, classification, equity grant, IP assignment?**
- Misclassification risk?
- Equity vesting standard (4-year, 1-year cliff)?
- Acceleration triggers?
- 409A current?

## Workflow

1. Read the contract / term sheet end to end
2. Run the six questions
3. Identify the top-3 issues that need outside counsel review
4. Apply the verdict

## Output Format

```markdown
# GC Review: <plan>
**Date:** YYYY-MM-DD

## Document
- Type: <contract / term sheet / grant / DPA>
- Counterparty: <name>
- $ value or scope: <amount>

## Issues
| # | Issue | Risk | Recommendation |
|---|---|---|---|
| 1 | <e.g., uncapped IP indemnity> | HIGH | Cap at fees paid, mutual |
| 2 | <e.g., 5-year auto-renew> | MED | 1-year max, 60-day notice |
| 3 | <e.g., no DPA, EU data> | HIGH | Require DPA before sign |

## Regulatory Trigger
- New regime triggered? <yes/no>
- Specific frameworks: <HIPAA / GDPR / etc.>

## Outside Counsel Action Items
- [ ] <specific item 1>
- [ ] <specific item 2>
- [ ] <specific item 3>

## Verdict
🟢 SIGN AS-IS (rare)
🟡 NEGOTIATE — counter on top-3 issues
🔴 DO NOT SIGN — material risk
```

## Routing

- `/c-level-agents:ciso-review` — for any data-touching contract
- `/c-level-agents:cfo-review` — for any commitment > 1 year or > 1% of revenue
- `/c-level-agents:decide` — log the verdict after outside counsel review

## Workflow Integration with `general-counsel-advisor` skill

Since v2.5.1, this command is backed by a full skill at `${CLAUDE_PLUGIN_ROOT}/vendor/c-level-advisor/general-counsel-advisor/` with two Python tools:

```bash
# Automated contract scan (12 founder-killer patterns)
python ${CLAUDE_PLUGIN_ROOT}/vendor/c-level-advisor/general-counsel-advisor/scripts/contract_risk_scanner.py path/to/contract.txt

# Term sheet scoring (0-100 founder-friendliness)
python ${CLAUDE_PLUGIN_ROOT}/vendor/c-level-advisor/general-counsel-advisor/scripts/term_sheet_analyzer.py path/to/term_sheet.json
```

The `cs-general-counsel-advisor` agent orchestrates both tools plus 3 references (contracts playbook, IP + regulatory, term sheet decoder).

## Related

- Skill: [`general-counsel-advisor`](https://github.com/alirezarezvani/claude-skills/blob/main/c-level-agents/skills/gc-review/${CLAUDE_PLUGIN_ROOT}/vendor/c-level-advisor/general-counsel-advisor/SKILL.md) — full skill with Python tools + references
- Agent: [`cs-general-counsel-advisor`](https://github.com/alirezarezvani/claude-skills/blob/main/c-level-agents/skills/gc-review/../../agents/cs-general-counsel-advisor.md)
- Compliance execution: `../../../ra-qm-team/`
- Adjacent: `${CLAUDE_PLUGIN_ROOT}/vendor/c-level-advisor/ma-playbook/`

---
**Version:** 1.0.0
