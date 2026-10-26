---
slug: ruvnet-ruflo-plugins-ruflo-agent-skills-nested-subagents
name: nested-subagents
tagline: Spawn nested sub-agents (agents that spawn sub-agents, up to depth=5)
  via Claude Code's native Task tool — for context-managed deep delegation
summary: "- The problem decomposes into nested layers (research → expand →
  verify → synthesize), each of which would otherwise pollute the parent's
  context. - A single agent's context window would not be enough to hold all
  the..."
categories:
  - agent-frameworks
tags:
  - agentic-ai
  - agentic-framework
  - agentic-workflow
  - agents
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: ruvnet/ruflo
  subpath: plugins/ruflo-agent/skills/nested-subagents
  official_vendor: false
  license: MIT
signals:
  stars: 79343
  last_commit: 2026-10-26T06:36:48Z
  stars_delta_7d: 2614
  stars_growth_pct: 3.4
  trending_score: 2703.05
  velocity_source: snapshot_delta
  sparkline_4w:
    - 74048
    - 74512
    - 76729
    - 79343
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: ruvnet/ruflo
  path: plugins/ruflo-agent/skills/nested-subagents/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.542Z
  truncated: false
type: agent_skill
skill:
  skill_name: nested-subagents
  description: Spawn nested sub-agents (agents that spawn sub-agents, up to
    depth=5) via Claude Code's native Task tool — for context-managed deep
    delegation
  folder_path: plugins/ruflo-agent/skills/nested-subagents
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Nested Sub-Agents
Spawn a tree of sub-agents where each child can itself spawn children, up to 5 levels deep. The motivation is **context management**, not parallelism: each level gets a fresh context window so deep work doesn't blow the top-level agent's context budget.

## When to use

- The problem decomposes into nested layers (research → expand → verify → synthesize), each of which would otherwise pollute the parent's context.
- A single agent's context window would not be enough to hold all the intermediate state.
- The leaves of the tree are different `subagent_type`s and need their own specialized prompts (e.g., `pii-detector` at one leaf, `tester` at another).

Skip this skill when flat fan-out (`Task` × N in one message) suffices — nesting adds latency.

## Steps

1. **Invoke the coordinator** — spawn `nested-coordinator` as your top-level agent:
   ```
   Task({
     subagent_type: "nested-coordinator",
     name: "root-coordinator",
     description: "Decompose and delegate <problem>",
     prompt: "<problem statement, with constraints and expected output shape>"
   })
   ```

2. **The coordinator decomposes first** — it lays out the spawn tree via `TodoWrite` before any `Task` call. Inspect the tree before approving deep work.

3. **Children spawn children** — any `nested-coordinator` (or any other agent whose YAML frontmatter declares `tools: [..., Task]`) can itself call `Task` to spawn the next level. Leaf agents (without `Task` in their tools list) cannot.

4. **Each level reports a summary** — children return ~200-token structured summaries, not full transcripts. The whole point is to keep the parent's context clean.

5. **Tree shape is persisted** — the `post-task` hook writes `parent_agent_id` and `depth` to AgentDB on every spawn (ADR-147 P2). Query after the run for cost attribution and pattern learning.

## Depth budget

| Source | Limit |
|---|---|
| Anthropic API | 5 levels (announced 2026-06-09) |
| Ruflo default (`pre-task` hook) | 4 levels — one-level guard band, configurable in `claude-flow.config.json` |
| Strict-mode env var | `CLAUDE_FLOW_STRICT_NESTING=true` to enforce the ruflo cap |

The hook returns a typed `NESTING_DEPTH_EXCEEDED` error at the cap, with the full chain in the payload so the parent can decide to summarize, hand off, or abort.

## Benefits

- **Context isolation per level** — top-level coordinator never sees inner chatter; leaf summaries climb back up.
- **Deeper delegation without re-summarization** — eliminates the "summarize at level 1 to fit it all" anti-pattern that flat fan-out forces.
- **Tree-shaped cost attribution** — `parent_agent_id` lineage gives accurate per-tree spend, not just flat per-agent.
- **Maps cleanly onto ruflo's existing orchestrators** — `ruflo-sparc:sparc-orchestrator` (5 phases ≈ 5 levels), `ruflo-goals:dossier-investigator` (recursive entity expansion), `v3-queen-coordinator` (hierarchical-mesh top).

## Anti-patterns (do NOT)

- **Pass `Task` to leaf agents.** Leaves must not spawn. Add the leaf's `subagent_type` directly under the coordinator instead.
- **Wrap a Tier-1 codemod in a coordinator.** Codemods (`hooks_codemod`) are depth-0 deterministic transforms — never put them inside a spawn tree.
- **Nest "for cleanliness".** A premature nesting layer wastes latency and cost without saving context. If one agent can do the work, use one agent.
- **Return full transcripts from a child.** That defeats the entire purpose of nesting. Children return structured summaries.

## Related

- **Agent**: `ruflo-agent:nested-coordinator` — the orchestrator
- **ADR-147** — design rationale and four-phase rollout
- **ADR-144** — authorization propagation shares the depth counter as `AuthScope.delegationDepth`
- **ADR-099** — dossier investigator (recursive parallel research) is the textbook deep use case
