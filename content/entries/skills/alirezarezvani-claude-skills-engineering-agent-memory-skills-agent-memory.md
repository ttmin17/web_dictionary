---
slug: alirezarezvani-claude-skills-engineering-agent-memory-skills-agent-memory
name: agent-memory
tagline: "Use when a project's CLAUDE.md has grown past what anyone reads and
  you want the agent to learn durable facts from its own sessions instead — or
  when "
summary: "A project's CLAUDE.md is a memory system with one tier and no
  eviction: every durable fact and every passing preference land in the same
  always-loaded file, until the important lines are diluted by the incidental
  ones..."
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
  subpath: engineering/agent-memory/skills/agent-memory
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
  path: engineering/agent-memory/skills/agent-memory/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:10.255Z
  truncated: false
type: agent_skill
skill:
  skill_name: agent-memory
  description: Use when a project's CLAUDE.md has grown past what anyone reads and
    you want the agent to learn durable facts from its own sessions instead — or
    when asking why the agent keeps re-learning the same correction, why a
    remembered rule is wrong, or where a memory line came from. Implements a
    four-tier store (L0 transcripts / L1 candidates / L2 project context / L3
    stable persona) where promotion is earned by recurrence across sessions and
    days, never by one confident statement, and nothing reaches a committed file
    without a human adopting it.
  folder_path: engineering/agent-memory/skills/agent-memory
  extra_files:
    - assets/memory_schema.json
    - references/hook_capture_discipline.md
    - references/promotion_gate_design.md
    - references/tiered_memory_canon.md
    - scripts/memory_core.py
    - scripts/memory_extract.py
    - scripts/memory_inspect.py
    - scripts/memory_promote.py
    - scripts/validate_examples.py
  pack_total_skills: 383
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: alirezarezvani-claude-skills
---

# Agent Memory — promotion is earned, not asserted
> **Portability:** stdlib only. No database, no embeddings, no network, no LLM calls.

## The problem

A project's `CLAUDE.md` is a memory system with one tier and no eviction: every
durable fact and every passing preference land in the same always-loaded file,
until the important lines are diluted by the incidental ones. Facts learned
mid-session vanish at teardown unless someone writes them down.

**The fix is not more storage — it is a promotion ladder.** A claim earns its
way toward always-loaded context by recurring; a human confirms the last step.

## The four tiers

Tiers are distinguished by **injection policy**, not storage format.

| Tier | Holds | Injected | Committed |
|---|---|---|---|
| **L0** | raw session transcripts | never | no (already on disk) |
| **L1** | candidate atoms | on relevance, at prompt time | no (gitignored) |
| **L2** | this project's context | every session start | yes, after adopt |
| **L3** | stable cross-project persona | always | yes, after adopt |

## The gates

Nothing moves up because it sounded important. It moves up because it recurred.

- **L0 → L1** — an explicit marker fires (a directive, a correction, a stated
  preference, a named lesson, a reproducible failure). Rule-based, high
  precision, deliberately low recall.
- **L1 → L2** — ≥ 3 distinct sessions spanning ≥ 2 distinct calendar days. A
  claim stated outright needs 2 sessions; the distinct-day rule still applies. A
  verified claim promotes on one observation and is the only day-exempt path.
- **L2 → L3** — held in ≥ 2 distinct projects, aged ≥ 30 days, uncontested.

**Two gates refuse rather than guess.** A claim whose text was altered by
redaction never promotes on evidence alone — the flag firing is evidence the
source was sensitive, and a lexical filter finding one secret is not proof it
found all of them. A claim with an open contradiction is frozen at L1 until a
human resolves it; the incumbent is never silently overwritten.

## Use it

```bash
# what is remembered, and what is blocking the next promotion
python3 scripts/memory_inspect.py --tier L1

# where did this line come from — sessions, days, transcript, quoted source
python3 scripts/memory_inspect.py --why "PR base branch is dev"

# every claim with an open contradiction, both directions of the join
python3 scripts/memory_inspect.py --contested

# dry-run the promotion pass; writes nothing
python3 scripts/memory_promote.py
```

Three hooks run the loop unattended: `SessionStart` injects L2 + L3,
`UserPromptSubmit` recalls relevant L1 atoms, `SessionEnd` captures and stages.
Each is disabled independently with `AGENT_MEMORY_SESSIONSTART=0`,
`AGENT_MEMORY_USERPROMPTSUBMIT=0`, `AGENT_MEMORY_SESSIONEND=0`. Every hook fails
open: a broken memory system costs you memory, never a session.

## Hard rules

1. **Redact before writing.** Every atom passes the filter before it reaches
   disk. Anything altered is quarantined from promotion.
2. **Propose, never apply.** Promotions land in `.memory/staged/`. Only an
   explicit `/cs-memory adopt` touches a `CLAUDE.md`, and it backs both up first.
3. **Cite, don't invent.** Every atom carries a back-pointer to the transcript
   line that produced it. `--why` resolving to *ambiguous* prints nothing rather
   than guess: a wrong citation is worse than a missing one.
4. **Never surface a contested claim as fact.** It is still injected — hiding
   the conflict is worse — but always tagged.
5. **The committed tiers carry no paths.** Promotion strips the back-pointer
   prefix, which embeds an OS username.

## Forcing questions

Walk these one at a time before trusting the store.

1. Which line in your `CLAUDE.md` did you last actually read before acting?
2. Would you rather the agent forget a true thing, or remember a false one?
3. When two remembered rules disagree, who decides — and when?
4. What would make you delete `.memory/` entirely?

Rationale, open decisions, field schema: [`../../DESIGN.md`](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/agent-memory/skills/agent-memory/../../DESIGN.md).
