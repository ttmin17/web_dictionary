---
slug: mvschwarz-openrig-packages-daemon-assets-plugins-openrig-core-skills-delegating-work
name: delegating-work
tagline: Agent skill from mvschwarz/openrig
summary: Agent skill from mvschwarz/openrig
categories:
  - agent-frameworks
tags:
  - agent-harness
  - agent-orchestration
  - agent-skills
  - ai-coding
status: active
quality_percentile: 64
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: mvschwarz/openrig
  subpath: packages/daemon/assets/plugins/openrig-core/skills/delegating-work
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 8198
  last_commit: 2026-10-26T07:30:13Z
  stars_delta_7d: 367
  stars_growth_pct: 4.7
  trending_score: 384.2
  velocity_source: snapshot_delta
  sparkline_4w:
    - 5667
    - 7377
    - 7831
    - 8198
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: mvschwarz/openrig
  path: packages/daemon/assets/plugins/openrig-core/skills/delegating-work/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:44:00.582Z
  truncated: false
type: agent_skill
skill:
  skill_name: delegating-work
  description: Agent skill from mvschwarz/openrig
  folder_path: packages/daemon/assets/plugins/openrig-core/skills/delegating-work
  extra_files: []
  pack_total_skills: 54
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: mvschwarz-openrig
---

# Delegating work — who should do this task?
## The core question: context performance
Getting work done well is a context problem. The agent best suited to a task is **the one who already holds the context that task requires.** Before you spawn a subagent or grind it out yourself, ask who that is.

## The decision
**Ask: how much would a blank slate have to read in before it could do this correctly?**

- **A lot to read in → route to a real agent in the topology that already holds it.** This is what the role structure is FOR — reviewers, QA, implementers who have been on a project over time. An agent that already understands the work produces a better, safer result than any amount of briefing.
- **A little — a prompt plus light grounding is enough → spawn a subagent.**
- **Genuinely unsure → err toward a real agent, or do it yourself.**

## Subagents are underused — reach for them far more
For self-contained work that is fully specifiable in the prompt, spawn a subagent instead of spending your own context: tracing, research, grounding passes, summarizing, scanning log files, searching, fetching, web search, mechanical extraction with citations. This is the common shape and it is under-used.

## The failure mode — the part that matters most
**Subagents start as blank slates, and you cannot anticipate everything they need to know.** Give one a task where there is a lot to understand and it will have blind spots it does not know it has — it will complete the task and **return a false conclusion**, not from weakness but because it lacked the context to know what "correct" even looked like.

This is the unknown-unknowns problem, and it is the single most common subagent failure: **a poorly-contextualized summary is worse than no summary, because it arrives looking like an answer.** Overreliance on subagents for context-heavy work causes more problems than it solves — and a team burned by it stops using subagents at all, which is the wrong correction. The fix is not "avoid subagents"; it is "match the task to the context it needs."

## The practical test
Before delegating to a blank slate, ask: **would a wrong-but-plausible answer here be detectable?** If the requester cannot check the result against something they already know — a citation they can open, a count they can re-run — the blind-spot risk is unacceptable, and that task belongs with an agent that holds the context.

## Worked examples
- **GOOD (→ subagent):** extract how four apps implement a UI mechanism, with `file:line` citations and an explicit instruction to report facts, not recommendations. Self-contained; the requester can verify the citations.
- **BAD to delegate blind (→ routed to the context-holder):** an independent security re-sweep of a rewritten git branch, where knowing which commit range must stay byte-identical, and that "lightly obfuscated real values" is the thing to hunt, takes a paragraph to explain and one sentence to get wrong. It went to the agent already holding the context.

## It generalizes
This is really **"route work to whoever holds the context,"** with subagents as the option for work that needs none. The audience is **every agent** — implementers and QA seats make this call as much as orchestrators do.

## Hand over intent, not instructions
Whoever does the work, give them the goal, why it matters, the context you hold and where to find more, then let
them decide how. When you have the requester's own words, pass them on instead of compressing them into a list of
steps. A capable agent with the goal builds better than one painting inside a narrow spec, which gets exactly what
was written and not what was wanted. Keep exact instructions for the few things that must be exact, and say why.

## Once you've decided
- Decided on subagents for 2+ independent tasks → `dispatching-parallel-agents` (the fan-out mechanics).
- Subagents executing a plan's independent tasks → `subagent-driven-development`.
- Routing to a real agent you will direct over multiple rounds → `directing-partner-agents`.
- The right context-holder is the human → `human-in-the-loop`.
