---
slug: alirezarezvani-claude-skills-c-level-agents-skills-brief
name: brief
tagline: "/c-level-agents:brief [topic] — Generate a one-page strategy brief
  from an office-hours intake. First step in the strategic sprint pipeline. Use
  when "
summary: Turns intake (raw question or office-hours output) into a one-page
  strategy brief that the boardroom can deliberate on. This is Step 1 of the
  strategic sprint pipeline.
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
  subpath: c-level-agents/skills/brief
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
  path: c-level-agents/skills/brief/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:10.242Z
  truncated: false
type: agent_skill
skill:
  skill_name: brief
  description: /c-level-agents:brief [topic] — Generate a one-page strategy brief
    from an office-hours intake. First step in the strategic sprint pipeline.
    Use when a strategic question needs to be framed before boardroom
    deliberation — e.g. locking options, assumptions, and success criteria for a
    pricing change or a market-entry decision.
  folder_path: c-level-agents/skills/brief
  extra_files: []
  pack_total_skills: 383
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: alirezarezvani-claude-skills
---

# /c-level-agents:brief — One-Page Strategy Brief
**Command:** `/c-level-agents:brief <topic>` or `/c-level-agents:brief <office-hours-output>`

Turns intake (raw question or office-hours output) into a one-page strategy brief that the boardroom can deliberate on. This is **Step 1** of the strategic sprint pipeline.

## Pipeline Position

```
/c-level-agents:office-hours  →  /c-level-agents:brief  →  /c-level-agents:boardroom  →  /c-level-agents:decide  →  /c-level-agents:execute  →  /c-level-agents:post-mortem
                       ↑ you are here
```

## Inputs

- A topic string, **or**
- An office-hours brief (preferred — more rigor)
- `~/.claude/company-context.md` (loaded automatically)

## Output

A single Markdown file under `~/.claude/briefs/YYYY-MM-DD-<slug>.md` with this structure:

```markdown
# Strategy Brief: <topic>
**Date:** YYYY-MM-DD
**Author:** cs-chief-of-staff
**Status:** DRAFT | UNDER REVIEW | APPROVED | RETIRED

## Context
[1-2 paragraphs: where the company sits today on this topic — pulled from company-context.md]

## Question
[The one sentence question the boardroom must answer]

## Options
1. **Option A:** <name> — <one-sentence summary>
2. **Option B:** <name> — <one-sentence summary>
3. **Option C:** <name> — <one-sentence summary>

(Minimum 2 options. "Do nothing" is always an option.)

## Assumptions
- <assumption 1 — explicit>
- <assumption 2>
- <assumption 3>

## Constraints
- Time: <by when must this decide>
- Money: <budget envelope>
- People: <who can / can't be reallocated>
- Reversibility: <one-way door | two-way door>

## Affected Roles
[Which cs-* advisors should weigh in. Used to route to /c-level-agents:boardroom panel composition.]

- [ ] cs-ceo-advisor
- [ ] cs-cfo-advisor
- [ ] cs-cto-advisor
- [ ] cs-cmo-advisor
- [ ] cs-cro-advisor
- [ ] cs-cpo-advisor
- [ ] cs-coo-advisor
- [ ] cs-chro-advisor
- [ ] cs-ciso-advisor
- [ ] cs-general-counsel-advisor
- [ ] cs-cdo-advisor
- [ ] cs-caio-advisor
- [ ] cs-cco-advisor
- [ ] cs-vpe-advisor
- [ ] cs-chief-of-staff

## Success Criteria
[Measurable outcomes that define success — set BEFORE the decision]
- <metric 1, threshold, timeframe>
- <metric 2, threshold, timeframe>

## Kill Criteria
[What signal would tell you in 90 days that this was the wrong call]
- <metric, threshold, action if missed>
```

## Workflow

1. Load company-context.md via context-engine
2. If input is office-hours output, parse the 6 answers
3. If input is a raw topic, prompt the founder for the missing pieces
4. Draft 2-3 options (never just one — every brief needs a counterfactual)
5. Make assumptions and constraints explicit
6. Identify affected roles → drives panel composition for `/c-level-agents:boardroom`
7. Write success + kill criteria BEFORE the decision (this is the rigor moment)
8. Save to `~/.claude/briefs/`

## Why This Step Exists

The biggest decision-making failure is debating implementation before agreeing on the question. The brief locks the question, options, and success criteria so the boardroom can deliberate without scope creep.

This is also the **artifact handoff** — the next command consumes this file, not your memory.

## Routing

- `/c-level-agents:boardroom <brief>` — multi-role deliberation
- `/c-level-agents:cross-eval <brief>` — multi-model sanity check before boardroom (for high-stakes)
- `/c-level-agents:freeze <brief>` — cooldown lock for irreversible decisions

## Related

- Agent: [`cs-chief-of-staff`](https://github.com/alirezarezvani/claude-skills/blob/main/c-level-agents/skills/brief/../../agents/cs-chief-of-staff.md)
- Skills: [`context-engine`](https://github.com/alirezarezvani/claude-skills/blob/main/c-level-agents/skills/brief/${CLAUDE_PLUGIN_ROOT}/vendor/c-level-advisor/context-engine/SKILL.md), [`board-meeting`](https://github.com/alirezarezvani/claude-skills/blob/main/c-level-agents/skills/brief/${CLAUDE_PLUGIN_ROOT}/vendor/c-level-advisor/board-meeting/SKILL.md)

---
**Version:** 1.0.0
