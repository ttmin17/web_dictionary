---
slug: alirezarezvani-claude-skills-c-level-agents-skills-cro-review
name: cro-review
tagline: /c-level-agents:cro-review [plan] — Pipeline-paranoid interrogation of
  revenue, win rate, NRR, and ramp time. Use when the forecast misses pipeline
  co
summary: The pipeline-paranoid operator pressure-tests revenue assumptions. Six
  questions that surface next-quarter pain this quarter.
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
  subpath: c-level-agents/skills/cro-review
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
  path: c-level-agents/skills/cro-review/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:10.242Z
  truncated: false
type: agent_skill
skill:
  skill_name: cro-review
  description: /c-level-agents:cro-review [plan] — Pipeline-paranoid interrogation
    of revenue, win rate, NRR, and ramp time. Use when the forecast misses
    pipeline coverage, win rates drop, or before scaling the sales team.
  folder_path: c-level-agents/skills/cro-review
  extra_files: []
  pack_total_skills: 383
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: alirezarezvani-claude-skills
---

# /c-level-agents:cro-review — CRO Forcing Questions
**Command:** `/c-level-agents:cro-review <plan>`

The pipeline-paranoid operator pressure-tests revenue assumptions. Six questions that surface next-quarter pain this quarter.

## When to Run

- Before committing to a quarterly revenue target
- Before changing sales motion (PLG ↔ sales-led, mid-market ↔ enterprise)
- Before hiring a batch of reps
- When pipeline coverage drops below 3x
- When NRR is trending down

## The Six CRO Questions

### 1. Pipeline Coverage
**What is pipeline coverage for the current quarter, by stage?**
- Inbound-heavy: 3x. Outbound-heavy: 4x. Below either threshold = act now.
- Stage-weighted, not just total.

### 2. Win Rate Trajectory
**What's win rate this quarter vs the last 4 — and what's the leak point?**
- Stage-by-stage conversion.
- If a single stage softens, identify why before forecasting.

### 3. NRR Decomposition
**What's gross retention, contraction, and expansion separately?**
- NRR alone hides churn.
- A 110% NRR with 95% gross retention is different from 110% with 80%.

### 4. Ramp Time
**For the last 4 hires, how many days to first deal and to quota?**
- If ramp > 90 days at growth stage, hiring profile or enablement is broken.
- Forecasted hires must build in ramp.

### 5. Discount Discipline
**What's the median discount this quarter vs last 4? Where is it creeping?**
- Discount creep is the leading indicator of pricing or positioning weakness.
- Cap discounts by approver tier.

### 6. Pipeline Source Mix
**What % of pipeline is marketing-sourced, sales-sourced, partner-sourced?**
- If one source dominates > 80%, you have concentration risk.
- Cross-check with cs-cmo-advisor.

## Workflow

```bash
python ${CLAUDE_PLUGIN_ROOT}/vendor/c-level-advisor/cro-advisor/scripts/revenue_forecast_model.py
python ${CLAUDE_PLUGIN_ROOT}/vendor/c-level-advisor/cro-advisor/scripts/churn_analyzer.py
```

## Output Format

```markdown
# CRO Review: <plan>
**Date:** YYYY-MM-DD

## Pipeline
- Coverage: X.Xx (target 3x+)
- Win rate: X% (4Q trend: ↑ / → / ↓)
- Top leaking stage: <name>

## Retention
- Gross retention: X%
- NRR: X%
- Expansion: X%
- Contraction: X%

## Ramp
- New hires last quarter: N
- Median days to first deal: X
- Median days to quota: X

## Discount
- Median discount this quarter: X%
- Trend vs 4Q ago: <delta>

## Source Mix
- Marketing: X% | Sales: X% | Partner: X%

## Verdict
🟢 ON PLAN | 🟡 GAP | 🔴 PIPELINE CRISIS

## Next Steps
[3 concrete actions]
```

## Routing

- `/c-level-agents:cfo-review` — does this hit the cash plan?
- `/c-level-agents:cmo-review` — is pipeline source-mix healthy?
- `/c-level-agents:execute` — quarterly plan if GREEN
- `/c-level-agents:boardroom` — if RED

## Related

- Agent: [`cs-cro-advisor`](https://github.com/alirezarezvani/claude-skills/blob/main/c-level-agents/skills/cro-review/../../agents/cs-cro-advisor.md)
- Skill: [`cro-advisor`](https://github.com/alirezarezvani/claude-skills/blob/main/c-level-agents/skills/cro-review/${CLAUDE_PLUGIN_ROOT}/vendor/c-level-advisor/cro-advisor/SKILL.md)
- Execution: `../../../business-growth/`

---
**Version:** 1.0.0
