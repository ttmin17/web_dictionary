---
slug: davepoon-buildwithclaude-plugins-all-skills-skills-ontoly-software-graph
name: ontoly-software-graph
tagline: Use Ontoly's deterministic Software Graph and MCP server for codebase
  architecture, request tracing, dependency analysis, and impact analysis.
summary: Ontoly builds a deterministic Software Graph from a TypeScript
  repository and exposes it through CLI queries, MCP capabilities, and agent
  skills. The skill teaches workflow only; Ontoly remains the source of truth.
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
  subpath: plugins/all-skills/skills/ontoly-software-graph
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
  path: plugins/all-skills/skills/ontoly-software-graph/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.592Z
  truncated: false
type: agent_skill
skill:
  skill_name: ontoly-software-graph
  description: Use Ontoly's deterministic Software Graph and MCP server for
    codebase architecture, request tracing, dependency analysis, and impact
    analysis.
  folder_path: plugins/all-skills/skills/ontoly-software-graph
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# Ontoly Software Graph
Use Ontoly when a coding agent needs graph-backed software understanding before searching source files directly.

Ontoly builds a deterministic Software Graph from a TypeScript repository and exposes it through CLI queries, MCP capabilities, and agent skills. The skill teaches workflow only; Ontoly remains the source of truth.

## Workflow

1. Check whether an Ontoly graph already exists in the repository, such as `.ontoly/`, `SoftwareGraph.json`, or documented Ontoly scripts.
2. If the graph is missing and local graph output is appropriate, run `ontoly build .`.
3. Check graph diagnostics, trust, semantic coverage, framework detection, and validation before making architecture claims.
4. Prefer Ontoly CLI or MCP capabilities for architecture summaries, request tracing, dependency analysis, configuration lookup, framework reports, and impact analysis.
5. Inspect source files only when the graph is missing, incomplete, untrusted for the question, or the user explicitly asks for source-level verification.

## Use Cases

- Explain repository architecture, module ownership, services, routes, packages, or dependencies.
- Trace a request, route, controller, service, provider, dependency, or call chain.
- Estimate impact for removing, renaming, or refactoring a symbol, module, package, route, or service.
- Review circular imports, dead code, configuration usage, environment variables, or graph diagnostics.

## Evidence Rules

- Separate graph facts from inference.
- Cite exact graph nodes, edges, packages, routes, diagnostics, or query outputs when available.
- Treat unresolved imports, low trust, missing framework detection, and validation failures as answer limitations.
- Do not claim a relationship exists unless Ontoly reports it or the answer labels it as inferred.

## Example Prompts

```text
Use Ontoly to explain this repository's architecture.
```

```text
Use Ontoly to trace the login flow from route to controller, service, and repository.
```

```text
Use Ontoly to find what depends on UserRepository and what breaks if it changes.
```
