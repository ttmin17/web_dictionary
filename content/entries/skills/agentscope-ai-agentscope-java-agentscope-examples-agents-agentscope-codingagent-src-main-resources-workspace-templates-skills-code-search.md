---
slug: agentscope-ai-agentscope-java-agentscope-examples-agents-agentscope-codingagent-src-main-resources-workspace-templates-skills-code-search
name: code-search
tagline: Search a codebase efficiently with ripgrep regular expressions, file
  globs, and git history search. Use to locate symbols, usages, and definitions
  ins
summary: '- Symbol definition: rg -n "fn\s+\w+\(" src/, rg -n --type java "class
  \w+Service". - Usages of a name: rg -n "\bmyFunction\b". - Limit by file type:
  rg -n --type ts "useEffect\(". - List files only: rg -l "TODO"; fin...'
categories:
  - agent-frameworks
tags:
  - adk
  - agent-framework
  - agentic
  - agentic-ai
status: active
quality_percentile: 94
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: agentscope-ai/agentscope-java
  subpath: agentscope-examples/agents/agentscope-codingagent/src/main/resources/workspace-templates/skills/code-search
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 6265
  last_commit: 2026-11-05T08:34:33Z
  stars_delta_7d: 144
  stars_growth_pct: 2.4
  trending_score: 147.39
  velocity_source: snapshot_delta
  sparkline_4w:
    - 6038
    - 6121
    - 6265
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: agentscope-ai/agentscope-java
  path: agentscope-examples/agents/agentscope-codingagent/src/main/resources/workspace-templates/skills/code-search/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:59.722Z
  truncated: false
type: agent_skill
skill:
  skill_name: code-search
  description: Search a codebase efficiently with ripgrep regular expressions,
    file globs, and git history search. Use to locate symbols, usages, and
    definitions instead of reading whole files.
  folder_path: agentscope-examples/agents/agentscope-codingagent/src/main/resources/workspace-templates/skills/code-search
  extra_files: []
  pack_total_skills: 19
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agentscope-ai-agentscope-java
---

# Code Search
The built-in `grep` tool matches LITERAL text only. For real regular-expression search and
history-aware lookups, drive ripgrep and git through `execute`.

## Ripgrep (regex)

- Symbol definition: `rg -n "fn\s+\w+\(" src/`, `rg -n --type java "class \w+Service"`.
- Usages of a name: `rg -n "\bmyFunction\b"`.
- Limit by file type: `rg -n --type ts "useEffect\("`.
- List files only: `rg -l "TODO"`; find files by name: `rg --files | rg <name>` or use `glob`.

## Git history search

- When a string was introduced/removed: `git log -S "<string>" --oneline`.
- Who/why a line changed: `git blame -L <start>,<end> <file>`.
- Search tracked files: `git grep -n "<regex>"`.

## Tips

- Prefer a targeted regex over reading whole files when locating symbols or call sites.
- Escape regex metacharacters when you want a literal match, or pass `-F` to ripgrep.
- Narrow scope with a path argument to keep output small (tool output is truncated).
