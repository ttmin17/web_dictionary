---
slug: alirezarezvani-claude-skills-c-level-agents-skills-cmo-review
name: cmo-review
tagline: /c-level-agents:cmo-review [plan] — Narrative-first interrogation of
  positioning, ICP, message house, and channel mix. Use when launching a
  campaign o
summary: The narrative-first strategist pressure-tests positioning before
  debating tactics.
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
  subpath: c-level-agents/skills/cmo-review
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
  path: c-level-agents/skills/cmo-review/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:10.242Z
  truncated: false
type: agent_skill
skill:
  skill_name: cmo-review
  description: /c-level-agents:cmo-review [plan] — Narrative-first interrogation
    of positioning, ICP, message house, and channel mix. Use when launching a
    campaign or repositioning, or when CAC is rising and the one-sentence
    positioning test fails.
  folder_path: c-level-agents/skills/cmo-review
  extra_files: []
  pack_total_skills: 383
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: alirezarezvani-claude-skills
---

# /c-level-agents:cmo-review — CMO Forcing Questions
**Command:** `/c-level-agents:cmo-review <plan>`

The narrative-first strategist pressure-tests positioning before debating tactics.

## When to Run

- Before launching any new campaign
- Before changing positioning, tagline, or category
- Before allocating > 10% of marketing budget to a new channel
- Before a major PR moment (funding announcement, product launch)
- When pipeline contribution is declining

## The Six CMO Questions

### 1. ICP (One Real Person)
**Name one real person in your ICP. Company, title, what they do daily, what they hate.**
- Persona ≠ ICP. ICP is real.
- If you can't name one, the ICP isn't sharp enough.

### 2. JTBD
**What job is the customer hiring this product to do, and what's the alternative they use today?**
- One sentence the customer would say out loud.
- "We use spreadsheets" is a valid alternative. So is "we don't."

### 3. Positioning Statement
**One sentence: For [ICP], who needs [job], we are [category] that [differentiator] unlike [alternative].**
- This is the headline. Everything cascades.
- If it doesn't fit in one sentence, it's not positioning yet.

### 4. Distribution Channel
**Where does the customer first hear your name — and is it inbound or outbound at this stage?**
- Name the channel, intent, and the path to first contact.
- PLG, sales-led, content-led, partnership-led — pick a primary.

### 5. CAC Payback
**Per channel: what's CAC, what's payback in months, and is it improving?**
- If a channel's payback is > 18 months, it isn't a channel — it's a hobby.

### 6. Defensibility of Brand
**If a well-funded competitor copies your messaging tomorrow, what's still yours?**
- Category position, founder-market fit, customer love, distribution lock — name one.

## Workflow

1. **Run the models:**
   ```bash
   python ${CLAUDE_PLUGIN_ROOT}/vendor/c-level-advisor/cmo-advisor/scripts/marketing_budget_modeler.py
   python ${CLAUDE_PLUGIN_ROOT}/vendor/c-level-advisor/cmo-advisor/scripts/growth_model_simulator.py
   ```
2. **Answer the six questions** in writing.
3. **Apply the verdict:**
   - 🟢 GREEN — story is sharp, channel mix sound
   - 🟡 YELLOW — sharpen positioning before scaling
   - 🔴 RED — positioning broken; do not spend

## Output Format

```markdown
# CMO Review: <plan>
**Date:** YYYY-MM-DD

## Positioning
One-sentence statement: <here>

## ICP
- Named persona: <name, title, company>
- JTBD: <one sentence in their words>

## Channel Mix
- Primary: <channel> | CAC $X | Payback Ym
- Secondary: <channel> | CAC $X | Payback Ym

## Verdict
🟢 / 🟡 / 🔴

## Next Steps
[3 concrete actions]
```

## Routing

- `/c-level-agents:cro-review` — pipeline contribution check
- `/c-level-agents:cpo-review` — product ↔ positioning alignment
- `/c-level-agents:decide` — log the verdict

## Related

- Agent: [`cs-cmo-advisor`](https://github.com/alirezarezvani/claude-skills/blob/main/c-level-agents/skills/cmo-review/../../agents/cs-cmo-advisor.md)
- Skill: [`cmo-advisor`](https://github.com/alirezarezvani/claude-skills/blob/main/c-level-agents/skills/cmo-review/${CLAUDE_PLUGIN_ROOT}/vendor/c-level-advisor/cmo-advisor/SKILL.md)
- Execution domain: `../../../marketing-skill/`

---

**Version:** 1.0.0
