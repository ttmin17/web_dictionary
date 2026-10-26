---
slug: wshobson-agents-plugins-javascript-typescript-skills-modern-javascript-patterns
name: modern-javascript-patterns
tagline: Master ES6+ features including async/await, destructuring, spread
  operators, arrow functions, promises, modules, iterators, generators, and
  functional
summary: "- Refactoring legacy JavaScript to modern syntax - Implementing
  functional programming patterns - Optimizing JavaScript performance - Writing
  maintainable and readable code - Working with asynchronous operations -
  Bui..."
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
  subpath: plugins/javascript-typescript/skills/modern-javascript-patterns
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
  path: plugins/javascript-typescript/skills/modern-javascript-patterns/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.198Z
  truncated: false
type: agent_skill
skill:
  skill_name: modern-javascript-patterns
  description: Master ES6+ features including async/await, destructuring, spread
    operators, arrow functions, promises, modules, iterators, generators, and
    functional programming patterns for writing clean, efficient JavaScript
    code. Use when refactoring legacy code, implementing modern patterns, or
    optimizing JavaScript applications.
  folder_path: plugins/javascript-typescript/skills/modern-javascript-patterns
  extra_files:
    - references/advanced-patterns.md
    - references/details.md
  pack_total_skills: 185
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: wshobson-agents
---

# Modern JavaScript Patterns
Comprehensive guide for mastering modern JavaScript (ES6+) features, functional programming patterns, and best practices for writing clean, maintainable, and performant code.

## When to Use This Skill

- Refactoring legacy JavaScript to modern syntax
- Implementing functional programming patterns
- Optimizing JavaScript performance
- Writing maintainable and readable code
- Working with asynchronous operations
- Building modern web applications
- Migrating from callbacks to Promises/async-await
- Implementing data transformation pipelines

## Detailed patterns and worked examples

Detailed pattern documentation lives in `references/details.md`. Read that file when the navigation tier above is insufficient.

## Best Practices

1. **Use const by default**: Only use let when reassignment is needed
2. **Prefer arrow functions**: Especially for callbacks
3. **Use template literals**: Instead of string concatenation
4. **Destructure objects and arrays**: For cleaner code
5. **Use async/await**: Instead of Promise chains
6. **Avoid mutating data**: Use spread operator and array methods
7. **Use optional chaining**: Prevent "Cannot read property of undefined"
8. **Use nullish coalescing**: For default values
9. **Prefer array methods**: Over traditional loops
10. **Use modules**: For better code organization
11. **Write pure functions**: Easier to test and reason about
12. **Use meaningful variable names**: Self-documenting code
13. **Keep functions small**: Single responsibility principle
14. **Handle errors properly**: Use try/catch with async/await
15. **Use strict mode**: `'use strict'` for better error catching

For common pitfalls (this binding, promise anti-patterns, memory leaks), see [references/advanced-patterns.md](https://github.com/wshobson/agents/blob/main/plugins/javascript-typescript/skills/modern-javascript-patterns/references/advanced-patterns.md).
