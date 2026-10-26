---
slug: wshobson-agents-plugins-developer-essentials-skills-nx-workspace-patterns
name: nx-workspace-patterns
tagline: Configure and optimize Nx monorepo workspaces. Use when setting up Nx,
  configuring project boundaries, optimizing build caching, or implementing
  affec
summary: "- Setting up new Nx workspaces - Configuring project boundaries -
  Optimizing CI with affected commands - Implementing remote caching - Managing
  dependencies between projects - Migrating to Nx"
categories:
  - coding-agents
tags:
  - agent-skills
  - agentic-ai
  - ai-agents
  - anthropic
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: wshobson/agents
  subpath: plugins/developer-essentials/skills/nx-workspace-patterns
  official_vendor: false
  license: MIT
signals:
  stars: 41725
  last_commit: 2026-10-26T01:08:14Z
  stars_delta_7d: 673
  stars_growth_pct: 1.6
  trending_score: 684.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 40271
    - 40590
    - 41052
    - 41725
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: wshobson/agents
  path: plugins/developer-essentials/skills/nx-workspace-patterns/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.195Z
  truncated: false
type: agent_skill
skill:
  skill_name: nx-workspace-patterns
  description: Configure and optimize Nx monorepo workspaces. Use when setting up
    Nx, configuring project boundaries, optimizing build caching, or
    implementing affected commands.
  folder_path: plugins/developer-essentials/skills/nx-workspace-patterns
  extra_files:
    - references/details.md
  pack_total_skills: 185
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: wshobson-agents
---

# Nx Workspace Patterns
Production patterns for Nx monorepo management.

## When to Use This Skill

- Setting up new Nx workspaces
- Configuring project boundaries
- Optimizing CI with affected commands
- Implementing remote caching
- Managing dependencies between projects
- Migrating to Nx

## Core Concepts

### 1. Nx Architecture

```
workspace/
├── apps/              # Deployable applications
│   ├── web/
│   └── api/
├── libs/              # Shared libraries
│   ├── shared/
│   │   ├── ui/
│   │   └── utils/
│   └── feature/
│       ├── auth/
│       └── dashboard/
├── tools/             # Custom executors/generators
├── nx.json            # Nx configuration
└── workspace.json     # Project configuration
```

### 2. Library Types

| Type            | Purpose                          | Example             |
| --------------- | -------------------------------- | ------------------- |
| **feature**     | Smart components, business logic | `feature-auth`      |
| **ui**          | Presentational components        | `ui-buttons`        |
| **data-access** | API calls, state management      | `data-access-users` |
| **util**        | Pure functions, helpers          | `util-formatting`   |
| **shell**       | App bootstrapping                | `shell-web`         |

## Templates and detailed worked examples

Full template library and detailed worked examples live in `references/details.md`. Read that file when you need the concrete templates.

## Best Practices

### Do's

- **Use tags consistently** - Enforce with module boundaries
- **Enable caching early** - Significant CI savings
- **Keep libs focused** - Single responsibility
- **Use generators** - Ensure consistency
- **Document boundaries** - Help new developers

### Don'ts

- **Don't create circular deps** - Graph should be acyclic
- **Don't skip affected** - Test only what changed
- **Don't ignore boundaries** - Tech debt accumulates
- **Don't over-granularize** - Balance lib count
