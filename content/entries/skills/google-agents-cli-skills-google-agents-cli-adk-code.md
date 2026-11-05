---
slug: google-agents-cli-skills-google-agents-cli-adk-code
name: google-agents-cli-adk-code
tagline: 'This skill should be used when the user wants to "write agent code",
  "build an agent with ADK", "add a tool", "create a callback", "define an
  agent", '
summary: 'Python — read the topic index in references/recipes.md before
  answering "how do I build X". Worked implementations exist for:
  sandboxed/per-user code execution, agent-loadable SKILL.md skills,
  cross-session memory, ap...'
categories:
  - coding-agents
tags:
  - adk
  - agent-development-kit
  - agents
  - coding-agent
status: active
quality_percentile: 98
selection_reason: official_vendor
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: google/agents-cli
  subpath: skills/google-agents-cli-adk-code
  official_vendor: true
  license: Apache-2.0
signals:
  stars: 6304
  last_commit: 2026-11-04T17:44:59Z
  stars_delta_7d: 128
  stars_growth_pct: 2.1
  trending_score: 130.65
  rank_current: 89
  rank_delta: 0
  velocity_source: snapshot_delta
  sparkline_4w:
    - 6099
    - 6176
    - 6304
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: google/agents-cli
  path: skills/google-agents-cli-adk-code/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:40.008Z
  truncated: false
type: agent_skill
skill:
  skill_name: google-agents-cli-adk-code
  description: >
    This skill should be used when the user wants to "write agent code", "build
    an agent with ADK", "add a tool", "create a callback", "define an agent",
    "use state management" — in a project that needs ADK (Agent Development Kit)
    API patterns and code examples. It provides a quick reference for agent
    types, tool definitions, orchestration patterns, callbacks, state
    management, the graph Workflow API, and reference recipes to study. Do NOT
    use for scaffolding (use google-agents-cli-scaffold) or deployment (use
    google-agents-cli-deploy).
  folder_path: skills/google-agents-cli-adk-code
  extra_files:
    - references/adk-go-workflows.md
    - references/adk-go.md
    - references/adk-python-live.md
    - references/adk-python-workflows.md
    - references/adk-python.md
    - references/recipes.md
  pack_total_skills: 7
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: google-agents-cli
---

# ADK Code Reference
Activate `/google-agents-cli-workflow` first.

## 1. Study Recipes (No Project Needed)

**Python — read the topic index in `references/recipes.md` before answering "how do I build X".**
Worked implementations exist for: sandboxed/per-user code execution, agent-loadable `SKILL.md`
skills, cross-session memory, approval gates before risky actions, tool guardrails, per-user
credentials, and scheduled/event-driven runs.

**Go — read the upstream [`examples/`](https://github.com/google/adk-go/tree/main/examples).**
clone the repo and read the one matching the capability you need before implementing it.

## 2. Prerequisites for Writing Code

Do NOT write agent code until a project is scaffolded.

1. Verify project: run `agents-cli info` (proceed if config exists).
2. No project: load `/google-agents-cli-workflow` and agree the spec with the user (its Phase 0) before you scaffold.
3. Existing code: run `agents-cli scaffold enhance .`.

## Quick Reference — Most Common Patterns

See `references/adk-python.md` and `references/adk-go.md` for Python and Go code examples, respectively.

---

## References

Use the cheatsheets for common patterns. For deep knowledge, fetch the docs index or inspect the
installed package.

| Reference | Language | When to read |
|------|------|-------------|
| `references/recipes.md` | Python | **Topic-indexed catalog of ADK reference recipes.** Read in workflow Phase 1 — before scaffolding and before writing code — maps a capability to the recipe that implements it. |
| `references/adk-python.md` | Python | Core ADK API: `Agent`, tools, callbacks, plugins, state, artifacts, multi-agent systems, `SequentialAgent` / `ParallelAgent` / `LoopAgent`, custom `BaseAgent`, `ManagedAgent` (server-hosted first-party agents), A2A protocol, A2UI. Default for most agents. |
| `references/adk-python-workflows.md` | Python | Graph-based Workflow API (ADK Python 2.0): nodes, edges, fan-out/fan-in, HITL, parallel processing. Use when you need explicit graph topology. |
| `references/adk-python-live.md` | Python | Live and voice agents: `Runner.run_live`, `LiveRequestQueue`, model and regional availability, voice/`speech_config`, VAD, session limits, `/run_live` serving. Use for real-time voice or video agents. |
| `references/adk-go.md` | Go | Core ADK Go API: `llmagent`, tools, callbacks, plugins, state, artifacts, multi-agent systems, sequential/parallel/loop agents, custom agents, the runner, serving over HTTP, A2A protocol, and ambient triggers. Default for most agents. |
| `references/adk-go-workflows.md` | Go | Graph-based Workflow API: nodes, edges, fan-out/fan-in, HITL, parallel processing. Use when you need explicit graph topology. |
| [`examples/`](https://github.com/google/adk-go/tree/main/examples) | Go | Runnable upstream programs — the closest thing to a recipe catalog for Go. |
| `curl https://adk.dev/llms.txt` | Python | Docs index (every page title + URL). Fetch it, then `WebFetch` the specific page for anything beyond the cheatsheets. |
| Installed ADK package | Python | Exact signatures and symbols — inspect the source (see "Inspecting ADK Source Code" in `references/adk-python.md`). |

## Related Skills

- `/google-agents-cli-workflow` — Development workflow, coding guidelines, and operational rules
- `/google-agents-cli-scaffold` — Project creation and enhancement with `agents-cli scaffold create` / `scaffold enhance`
- `/google-agents-cli-eval` — Evaluation methodology, dataset schema, and the eval-fix loop
- `/google-agents-cli-deploy` — Deployment targets, CI/CD pipelines, and production workflows
