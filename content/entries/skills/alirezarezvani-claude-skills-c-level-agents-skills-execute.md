---
slug: alirezarezvani-claude-skills-c-level-agents-skills-execute
name: execute
tagline: /c-level-agents:execute [decision] — Generate a 90-day execution plan
  with weekly milestones, DRIs, and check-in cadence from an approved decision.
  Us
summary: "Turns an approved decision into a 90-day plan with weekly milestones,
  named DRIs, and a check-in cadence. Where most decisions die: between \"we
  decided\" and \"what's next Monday?\""
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
  subpath: c-level-agents/skills/execute
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
  path: c-level-agents/skills/execute/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:10.243Z
  truncated: false
type: agent_skill
skill:
  skill_name: execute
  description: /c-level-agents:execute [decision] — Generate a 90-day execution
    plan with weekly milestones, DRIs, and check-in cadence from an approved
    decision. Use when a logged decision needs to become an operating plan —
    e.g. turning an approved market-entry call into weekly milestones with DRIs.
  folder_path: c-level-agents/skills/execute
  extra_files: []
  pack_total_skills: 383
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: alirezarezvani-claude-skills
---

# /c-level-agents:execute — 90-Day Execution Plan
**Command:** `/c-level-agents:execute <decision-path>`

Turns an approved decision into a 90-day plan with weekly milestones, named DRIs, and a check-in cadence. Where most decisions die: between "we decided" and "what's next Monday?"

## Pipeline Position

```
/c-level-agents:office-hours  →  /c-level-agents:brief  →  /c-level-agents:boardroom  →  /c-level-agents:decide  →  /c-level-agents:execute  →  /c-level-agents:post-mortem
                                                                       ↑ you are here
```

## Input

An approved decision record (output of `/c-level-agents:decide`).

## Output Plan Format

Saved to `~/.claude/execution/YYYY-MM-DD-<slug>.md`:

```markdown
# Execution Plan: <decision title>
**Decision:** <link to /c-level-agents:decide record>
**Owner (Sponsor):** <founder or exec>
**Start:** YYYY-MM-DD
**Checkpoint:** YYYY-MM-DD (90d)

## Outcome (binding)
[Copied from decision: success + kill criteria]

## Workstreams
| Workstream | DRI | Success Metric | Status |
|---|---|---|---|
| <e.g., Pricing rollout> | <name> | <metric, threshold> | Not started |
| <e.g., Comms> | <name> | <metric> | Not started |
| <e.g., Eng changes> | <name> | <metric> | Not started |

## Weekly Milestones
| Week | Milestone | DRI | Definition of Done |
|---|---|---|---|
| 1 | <e.g., positioning locked> | <name> | <observable outcome> |
| 2 | <e.g., draft launched> | <name> | <observable> |
| 3 | ... | | |
| 12 | <e.g., checkpoint review> | <name> | <observable> |

## Cadence
- **Weekly:** Owner reviews status (15 min)
- **Bi-weekly:** Cross-functional sync (30 min)
- **Day 30 / 60 / 90:** Checkpoint with cs-chief-of-staff

## Dependencies
- Internal: <list>
- External: <vendors, regulators, customers>

## Risk Register
| Risk | Likelihood | Impact | Owner | Mitigation |
|---|---|---|---|---|
| <e.g., delayed legal review> | M | H | <name> | <plan> |

## Kill Criteria Watch
[Copied from decision; reviewed at every checkpoint]
- <metric, threshold, action>
```

## Workflow

1. Read the decision record
2. Decompose the chosen option into 3-6 workstreams
3. Name a DRI for each workstream
4. Reverse-engineer 12 weekly milestones from the checkpoint date
5. Set the cadence (weekly + bi-weekly + 30/60/90 checkpoints)
6. Build the risk register (cross-reference original Phase 4 devil's-advocate concerns)
7. Save and notify DRIs

## Why 90 Days

- Long enough to show real signal (not just activity)
- Short enough to course-correct before damage compounds
- Matches quarterly OKR cycle, fundraise sprints, and most board cadences

## Routing

- `/c-level-agents:post-mortem <decision>` — at day 90 (or earlier if kill criteria trigger)
- `/c-level-agents:boardroom` — if a checkpoint reveals a need to re-decide

## Related

- Skills: [`coo-advisor`](https://github.com/alirezarezvani/claude-skills/blob/main/c-level-agents/skills/execute/${CLAUDE_PLUGIN_ROOT}/vendor/c-level-advisor/coo-advisor/SKILL.md), [`strategic-alignment`](https://github.com/alirezarezvani/claude-skills/blob/main/c-level-agents/skills/execute/${CLAUDE_PLUGIN_ROOT}/vendor/c-level-advisor/strategic-alignment/SKILL.md), [`change-management`](https://github.com/alirezarezvani/claude-skills/blob/main/c-level-agents/skills/execute/${CLAUDE_PLUGIN_ROOT}/vendor/c-level-advisor/change-management/SKILL.md)
- Agent: [`cs-coo-advisor`](https://github.com/alirezarezvani/claude-skills/blob/main/c-level-agents/skills/execute/../../agents/cs-coo-advisor.md)

---
**Version:** 1.0.0
