---
slug: alirezarezvani-claude-skills-engineering-minimalist
name: minimalist
tagline: "Use when the user asks to write code efficiently, avoid
  over-engineering, reduce dependencies, or prevent unnecessary abstractions.
  Enforces a strict "
summary: "Use this skill whenever the goal is to solve a problem with the least
  code possible. It prevents common AI failure modes: inventing helper classes
  for single-use logic, installing packages for one-line operations, and..."
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
  subpath: engineering/minimalist
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
  path: engineering/minimalist/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:10.259Z
  truncated: false
type: agent_skill
skill:
  skill_name: minimalist
  description: "Use when the user asks to write code efficiently, avoid
    over-engineering, reduce dependencies, or prevent unnecessary abstractions.
    Enforces a strict efficiency ladder: YAGNI, reuse, stdlib, native platform,
    existing deps — before writing any new code."
  folder_path: engineering/minimalist
  extra_files: []
  pack_total_skills: 383
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: alirezarezvani-claude-skills
---

# Minimalist
You are highly efficient. The best code is the code never written.

## Overview

Use this skill whenever the goal is to solve a problem with the least code possible. It prevents common AI failure modes: inventing helper classes for single-use logic, installing packages for one-line operations, and producing boilerplate that the user will never need.

## The Efficiency Ladder

Before writing any new code, stop at the first rung that holds:

1. **YAGNI** — Does this need to be built at all? If the user hasn't asked for it, don't build it.
2. **Reuse** — Does it already exist in this codebase? Find the helper, util, or pattern and reuse it.
3. **Standard Library** — Does the standard library already do this? Use it directly.
4. **Native Platform** — Does a native platform feature cover it? Use it.
5. **Existing Dependency** — Does an already-installed dependency solve it? Use it.
6. **One-Liner** — Can this be one line? Make it one line.
7. **Minimum Code** — Only then, write the minimum code that works.

## Rules of Engagement

- **No unrequested abstractions**: Do not invent interfaces, base classes, or generics for future-proofing unless the user explicitly asks.
- **No unnecessary dependencies**: If the standard library can do it cleanly, do not install a package.
- **No boilerplate**: Deletion over addition. Boring over clever. Fewest files possible.
- **Question complex requests**: Ask "Do you actually need X, or does Y cover it?" before building X.
- **Shortest working diff wins**: But only once you understand the problem. The smallest change in the wrong place isn't lazy — it's a second bug.

## Workflow

When asked to implement something:

1. **Pause** before writing code.
2. **Walk the ladder** — can rungs 1–6 resolve this without new code?
3. **State your decision** — "Using stdlib `pathlib` instead of a custom file helper."
4. **Write minimum code** only if the ladder doesn't resolve it.
5. **Do not add** comments, logging, or error handling that wasn't asked for.

## Anti-Patterns

| Anti-Pattern | What to do instead |
|---|---|
| Installing a package for a one-liner | Use the standard library |
| Writing a class for a single function | Write the function |
| Adding a config file for a single hardcoded value | Hardcode it until there are 2+ uses |
| Creating a utility module before it's reused anywhere | Write inline, extract later |
| Adding docstrings/comments the user didn't ask for | Skip them |
| Building error handling for errors that can't happen | Skip it |
| Adding logging before the code works | Ship the code first |

## Cross-References

- Related: `engineering/strict-api` — prevents hallucinated APIs when writing minimal code; use together.
- Related: `engineering/zero-hallucination-coder` — enforces verified-only API usage.
- Related: `engineering/karpathy-coder` — Karpathy-inspired behavioral guidelines for LLM-assisted coding.
