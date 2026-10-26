---
slug: davepoon-buildwithclaude-plugins-origin-skills-capture
name: capture
tagline: "Save a memory to Origin in flow. Active capture verb — use proactively
  when the user states a preference, makes a decision, corrects you, or shares a
  "
summary: Call the origin MCP server's capture tool with the user's content as a
  complete, self-contained statement. Attach topic from cwd or the conversation
  — don't make the user type it.
categories:
  - agent-frameworks
tags:
  - claude
  - claude-code
  - claude-code-commands
  - claude-skills
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: davepoon/buildwithclaude
  subpath: plugins/origin/skills/capture
  official_vendor: false
  license: MIT
signals:
  stars: 3678
  last_commit: 2026-10-26T00:07:50Z
  stars_delta_7d: 28
  stars_growth_pct: 0.8
  trending_score: 28.21
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3604
    - 3631
    - 3650
    - 3678
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: davepoon/buildwithclaude
  path: plugins/origin/skills/capture/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.622Z
  truncated: false
type: agent_skill
skill:
  skill_name: capture
  description: >
    Save a memory to Origin in flow. Active capture verb — use proactively when
    the user states a preference, makes a decision, corrects you, or shares a
    durable fact. Invoked as `/capture <content>`.
  folder_path: plugins/origin/skills/capture
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# /capture
Capture a single memory in the moment. Active verb: agent captures the
moment of insight, like a photograph.

## How to invoke

Call the `origin` MCP server's `capture` tool with the user's content as a
complete, self-contained statement. Attach `topic` from cwd or the
conversation — don't make the user type it.

```
capture(content="<args, written as a full sentence with WHY>",
        memory_type="<picked from the 6 types>",
        entity="<primary entity name, if any>",
        space=<inferred>)
```

### `memory_type` — agent picks one of 6

The daemon classifies when a local model or API key is configured. In
local memory mode it does not, so the agent picks the type from the content itself. Use this
mapping:

| Type | Use for |
|---|---|
| `identity` | Durable facts about the user (role, company, language preference) |
| `preference` | "I prefer X because Y" — a habit, a correction, a stylistic choice |
| `decision` | "Going with A over B because C" — a specific choice with rationale |
| `lesson` | Root cause found, workaround discovered, technical insight earned |
| `gotcha` | Sharp edge, surprising behavior, a thing to watch out for |
| `fact` | Durable info about people, projects, tools — anchor to `entity` when possible |

If two types fit, pick the one closest to *why the memory matters*. A
decision *also* implies a preference, but `decision` is more specific.

### `entity` — extract the anchor

Pick the single most important named thing in the content: a person,
project, tool, place. Use the exact name. Example: "Alice prefers TDD
because…" → `entity="Alice"`. If the content has no named anchor,
omit `entity`.

### `topic` / `space` inference

- cwd inside a repo → repo name (e.g. `~/Repos/origin/...` → `"origin"`).
- Outside any repo → most recent topic from the conversation, or omit.
- Always pass `space` when scope is known; if uncertain, run `list_spaces`
  later (post-PR-C) or omit.

### Multiple entities or relations

The MCP `capture` tool takes a single primary `entity`. For additional
entities or relations, use the dedicated MCP tools. If the content
names more than one entity, capture the memory first, then for each
additional entity:

```
create_entity(name="<entity>", entity_type="<person|project|tool|place>")
```

For a relation between two entities:

```
create_relation(from_entity="<a>", to_entity="<b>", relation_type="<verb>")
```

Skip these calls when the daemon has an LLM — its post-ingest enrichment
covers extraction.

## What to capture

- Decisions: "Going with approach A because B"
- Preferences: "Prefers TDD because catches regressions early"
- Corrections: "Actually it's C, not D"
- Identity / project facts: "Works on Origin, a local memory daemon for AI tools"

## What NOT to capture

- System prompts, boot logs, heartbeats
- Transient task state ("currently working on...")
- Tool output, command results, architecture dumps
- Single-word acknowledgments
- Things the user can trivially re-derive (file paths, recent git history)

## Atomic ideas

One capture = one idea. "Prefers TDD" and "Uses pytest" are two captures, not
one.

## When to use

- User explicitly says "remember this", "save that", "capture this".
- User states a durable preference / decision / correction proactively (no
  ask required — that's the floor, not the trigger).

## When NOT to use

- End of session bulk store → use `/handoff` (multi-item batch).
- Pulling memories back out → use `/recall`.

## Post-capture contradiction signal

After `capture` returns, check `response.triggered_revisions` and `response.auto_superseded`.

### auto_superseded (no action needed)

If `auto_superseded` is non-empty, the daemon already resolved the contradiction. Surface it as informational:

```
Note: auto-superseded mem_X. Origin replaced a prior protected memory because
trust=high and similarity > 0.9. No action needed.
```

No accept/dismiss call required. The revision was applied automatically.

### triggered_revisions (human review needed)

If `triggered_revisions` is non-empty (and `auto_superseded` is empty), render an inline block to the user:

```
Stored mem_new.

This capture topic-matches a protected memory now flagged for revision:
  - mem_target_abc

Action: accept (replace original content) | dismiss (drop the revision) | leave (decide later)
```

Inline verb map:

- accept: `accept_revision(target_source_id="mem_target_abc")`
- dismiss: `dismiss_revision(target_source_id="mem_target_abc")`
- leave: no call; surfaces again in next `/brief`

Both fields can technically be non-empty in a single response (multiple protected matches), but in practice only one fires per capture: `auto_superseded` fires when trust=full and similarity > 0.9, `triggered_revisions` fires otherwise.

If neither field is non-empty, the capture stored cleanly with no conflicts.
