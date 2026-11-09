---
slug: builderio-agent-native-packages-core-docs
name: docs
tagline: How to look up version-matched Agent-Native framework docs and source
  in node_modules. Use before coding against @agent-native/core APIs or advanced
  f
summary: Before implementing non-trivial Agent-Native functionality, read the
  version-matched docs installed with @agent-native/core. When implementation
  examples or template patterns matter, inspect the packaged source corpus...
categories:
  - agent-frameworks
tags:
  - agent-framework
  - agent-native
  - agentic-ai
  - agents
status: active
quality_percentile: 68
selection_reason: quality_percentile
first_seen: 2026-11-05
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: BuilderIO/agent-native
  subpath: packages/core/docs
  official_vendor: false
  license: MIT
signals:
  stars: 7652
  last_commit: 2026-11-09T08:19:09Z
  stars_delta_7d: 31
  stars_growth_pct: 0.4
  trending_score: 31.13
  rank_current: 103
  rank_delta: null
  velocity_source: snapshot_delta
  sparkline_4w:
    - 7621
    - 7652
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: BuilderIO/agent-native
  path: packages/core/docs/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:42.434Z
  truncated: false
type: agent_skill
skill:
  skill_name: docs
  description: How to look up version-matched Agent-Native framework docs and
    source in node_modules. Use before coding against @agent-native/core APIs or
    advanced features.
  folder_path: packages/core/docs
  extra_files:
    - AGENTS.md
    - content/a2a-protocol.mdx
    - content/actions-access-control.mdx
    - content/actions-advanced.mdx
    - content/actions-agent-tools.mdx
    - content/actions-defining.mdx
    - content/actions-other-surfaces.mdx
    - content/actions-overview.mdx
    - content/actions-run-context.mdx
    - content/add-ui-to-your-agent.mdx
  pack_total_skills: 23
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: builderio-agent-native
---

# Agent-Native Docs Lookup
## Rule

Before implementing non-trivial Agent-Native functionality, read the
version-matched docs installed with `@agent-native/core`. When implementation
examples or template patterns matter, inspect the packaged source corpus too.

## How

1. Start from the generated app root.
2. Start cross-corpus discovery with `pnpm action framework-search --pattern "<feature>"`.
3. Use `--scope docs` or `--scope source` and `--mode glob`, `--mode sql-like`,
   or `--mode regex` when the question needs a narrower pattern.
4. Read a specific page with `pnpm action docs-search --slug <slug>`.
5. Search source examples with `pnpm action source-search --query "<pattern>"`
   or read a file with `pnpm action source-search --path <path>`. If it reports
   that template source is unavailable, install the matching corpus package:
   `pnpm add -D @agent-native/core-corpus@<installed-core-version>`.
6. If the action runner is unavailable, search
   `node_modules/@agent-native/core/docs` directly with `rg`.
   Search `node_modules/@agent-native/core-corpus/corpus` for source examples.
7. For app-specific rules, also read the app's own `AGENTS.md` and any relevant
   `.agents/skills/<name>/SKILL.md`.

## Useful Slugs

| Need | Slugs |
| --- | --- |
| Actions and typed client calls | `actions`, `client` |
| SQL, auth, access, sharing | `database`, `authentication`, `security`, `sharing` |
| UI state visible to the agent | `context-awareness` |
| Headless and chat-first apps | `pure-agent-apps`, `agent-surfaces`, `using-your-agent` |
| Automations and schedules | `automations`, `recurring-jobs` |
| Cross-app and external agents | `a2a-protocol`, `external-agents`, `mcp-protocol`, `mcp-apps` |
| Skills and instructions | `skills-guide`, `writing-agent-instructions` |

## Don't

- Do not rely on memory for framework APIs when local package docs are present.
- Do not add custom REST wrappers for normal app data before reading `actions`.
- Do not add inline LLM calls before reading `using-your-agent` and
  `agent-surfaces`.
