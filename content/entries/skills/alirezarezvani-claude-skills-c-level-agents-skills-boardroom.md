---
slug: alirezarezvani-claude-skills-c-level-agents-skills-boardroom
name: boardroom
tagline: /c-level-agents:boardroom [brief] — 6-phase multi-role deliberation
  across the C-suite with Phase 2 isolation, critic pre-screen, and synthesis.
  Outpu
summary: Runs the board-meeting skill protocol across the C-suite for a single
  strategy brief. This is the heart of the plugin — the multi-role deliberation
  that gstack's review chain only approximates.
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
  subpath: c-level-agents/skills/boardroom
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
  path: c-level-agents/skills/boardroom/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:10.242Z
  truncated: false
type: agent_skill
skill:
  skill_name: boardroom
  description: /c-level-agents:boardroom [brief] — 6-phase multi-role deliberation
    across the C-suite with Phase 2 isolation, critic pre-screen, and synthesis.
    Outputs a board memo. Use when a decision spans multiple executive domains —
    e.g. a pricing change touching finance, positioning, and product, or a
    raise-vs-cut runway call.
  folder_path: c-level-agents/skills/boardroom
  extra_files: []
  pack_total_skills: 383
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: alirezarezvani-claude-skills
---

# /c-level-agents:boardroom — Multi-Role Boardroom Deliberation
**Command:** `/c-level-agents:boardroom <brief-path>`

Runs the `board-meeting` skill protocol across the C-suite for a single strategy brief. This is the **heart of the plugin** — the multi-role deliberation that gstack's review chain only approximates.

## Pipeline Position

```
/c-level-agents:office-hours  →  /c-level-agents:brief  →  /c-level-agents:boardroom  →  /c-level-agents:decide  →  /c-level-agents:execute  →  /c-level-agents:post-mortem
                                     ↑ you are here
```

## The 6 Phases (from board-meeting skill)

### Phase 1 — Briefing
- Chief of Staff distributes the brief to all advisors marked in **Affected Roles**.
- Each advisor reads company-context.md + the brief.
- No discussion yet.

### Phase 2 — Independent Thinking (ISOLATION)
- **Critical:** each advisor produces their position **independently**, without seeing others' positions.
- This prevents groupthink and surfaces dissent.
- Each writes: their voice's opening, recommendation, top 3 concerns, top 3 supports.

### Phase 3 — Cross-Examination
- Positions revealed simultaneously.
- Each advisor critiques the others' positions on the dimensions they own:
  - cs-cfo-advisor critiques the math
  - cs-ciso-advisor critiques the risk
  - cs-cpo-advisor critiques the JTBD
  - cs-cmo-advisor critiques the positioning
  - cs-cro-advisor critiques the revenue math
  - etc.

### Phase 4 — Devil's Advocate Pass
- `executive-mentor/devils-advocate` agent runs `/em:challenge` on the leading option.
- Surfaces three concerns with severity ratings.

### Phase 5 — Synthesis
- Chief of Staff synthesizes: which option commands majority, what are unresolved dissents.
- Produces the **board memo** with recommendation + dissent.

### Phase 6 — Decision Hand-off
- Memo is presented to the founder.
- Founder accepts, modifies, or rejects.
- Approved memo routes to `/c-level-agents:decide` for logging.

## Output: Board Memo

Saved to `~/.claude/boardroom/YYYY-MM-DD-<slug>.md`:

```markdown
# Board Memo: <topic>
**Date:** YYYY-MM-DD
**Brief:** <link to /c-level-agents:brief file>
**Status:** AWAITING FOUNDER DECISION | APPROVED | REJECTED

## Question
[One sentence from the brief]

## Recommended Option
**<Option name>** — chosen because <synthesis reasoning>

## Vote Tally
| Advisor | Vote | One-Sentence Reason |
|---|---|---|
| cs-ceo-advisor | A | <reason> |
| cs-cfo-advisor | A | <reason> |
| cs-cto-advisor | B | <reason> |
| ... | | |

## Dissent
- **<dissenter>:** <unresolved concern>

## Devil's Advocate Concerns
1. **CRITICAL** — <concern> — Mitigation: <plan>
2. **HIGH** — <concern> — Mitigation: <plan>
3. **MEDIUM** — <concern> — Mitigation: <plan>

## Success & Kill Criteria
[Copied from brief, refined by the panel]

## Recommended Decision Path
- `/c-level-agents:decide` → log the decision
- `/c-level-agents:execute` → 90-day plan
- `/c-level-agents:cross-eval` → multi-model sanity check (optional, high-stakes)
- `/c-level-agents:freeze N` → cooldown lock (optional, irreversible)
```

## Why Phase 2 Isolation Matters

If advisors see each other's positions before forming their own, they anchor. Phase 2 isolation is the single highest-leverage practice in the board-meeting protocol — it surfaces the dissents that sycophancy would have suppressed.

## Why This Beats gstack's Review Chain

| | gstack `/autoplan` | `/c-level-agents:boardroom` |
|---|---|---|
| Roles | CEO → design → eng (3) | Up to 10 C-roles |
| Order | Sequential | Phase 2 isolation, then simultaneous |
| Dissent capture | Implicit | Explicit dissent column |
| Adversarial pass | No | Phase 4 devil's advocate |
| Output | Reviewed plan | Voted memo with dissent + kill criteria |

## Workflow

1. Read brief from `~/.claude/briefs/<file>`
2. Identify affected roles
3. Invoke each cs-* advisor independently (Phase 2)
4. Collect positions
5. Run cross-examination round (Phase 3)
6. Run `/em:challenge` on leading option (Phase 4)
7. Synthesize memo (Phase 5)
8. Hand off to founder (Phase 6)

## Routing

- `/c-level-agents:decide` — log approved memo
- `/c-level-agents:cross-eval` — high-stakes second opinion
- `/c-level-agents:freeze` — cooldown lock

## Related

- Agent: [`cs-chief-of-staff`](https://github.com/alirezarezvani/claude-skills/blob/main/c-level-agents/skills/boardroom/../../agents/cs-chief-of-staff.md)
- Skills: [`board-meeting`](https://github.com/alirezarezvani/claude-skills/blob/main/c-level-agents/skills/boardroom/${CLAUDE_PLUGIN_ROOT}/vendor/c-level-advisor/board-meeting/SKILL.md), [`executive-mentor`](https://github.com/alirezarezvani/claude-skills/blob/main/c-level-agents/skills/boardroom/../../../c-level-advisor/executive-mentor/)

---

**Version:** 1.0.0
