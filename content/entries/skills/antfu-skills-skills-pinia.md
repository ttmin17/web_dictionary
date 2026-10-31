---
slug: antfu-skills-skills-pinia
name: pinia
tagline: Pinia official Vue state management library, type-safe and extensible.
  Use when defining stores, working with state/getters/actions, or implementing
  s
summary: "- Prefer Setup Stores for complex logic, composables, and watchers -
  Use storeToRefs() when destructuring state/getters to preserve reactivity -
  Actions can be destructured directly - they're bound to the store - Call..."
categories:
  - other
status: active
quality_percentile: 31
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: antfu/skills
  subpath: skills/pinia
  official_vendor: false
  license: MIT
signals:
  stars: 5969
  last_commit: 2026-10-09T06:36:34Z
  stars_delta_7d: 206
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 5969
    - 5969
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: antfu/skills
  path: skills/pinia/SKILL.md
  branch: main
  fetched_at: 2026-10-14T14:55:18.168Z
  truncated: false
type: agent_skill
skill:
  skill_name: pinia
  description: Pinia official Vue state management library, type-safe and
    extensible. Use when defining stores, working with state/getters/actions, or
    implementing store patterns in Vue apps.
  folder_path: skills/pinia
  extra_files:
    - GENERATION.md
    - references/advanced-hmr.md
    - references/advanced-nuxt.md
    - references/advanced-ssr.md
    - references/best-practices-outside-component.md
    - references/best-practices-testing.md
    - references/core-stores.md
    - references/features-composables.md
    - references/features-composing-stores.md
    - references/features-plugins.md
tags: []
---

# Pinia
Pinia is the official state management library for Vue, designed to be intuitive and type-safe. It supports both Options API and Composition API styles, with first-class TypeScript support and devtools integration.

> The skill is based on Pinia v4.0.3, generated at 2026-09-25.

## Core References

| Topic | Description | Reference |
|-------|-------------|-----------|
| Stores | Defining stores, state, getters, actions, storeToRefs, subscriptions | [core-stores](https://github.com/antfu/skills/blob/main/skills/pinia/references/core-stores.md) |

## Features

### Extensibility

| Topic | Description | Reference |
|-------|-------------|-----------|
| Plugins | Extend stores with custom properties, state, and behavior | [features-plugins](https://github.com/antfu/skills/blob/main/skills/pinia/references/features-plugins.md) |

### Composability

| Topic | Description | Reference |
|-------|-------------|-----------|
| Composables | Using Vue composables within stores (VueUse, etc.) | [features-composables](https://github.com/antfu/skills/blob/main/skills/pinia/references/features-composables.md) |
| Composing Stores | Store-to-store communication, avoiding circular dependencies | [features-composing-stores](https://github.com/antfu/skills/blob/main/skills/pinia/references/features-composing-stores.md) |

## Best Practices

| Topic | Description | Reference |
|-------|-------------|-----------|
| Testing | Unit testing with @pinia/testing, mocking, stubbing | [best-practices-testing](https://github.com/antfu/skills/blob/main/skills/pinia/references/best-practices-testing.md) |
| Outside Components | Using stores in navigation guards, plugins, middlewares | [best-practices-outside-component](https://github.com/antfu/skills/blob/main/skills/pinia/references/best-practices-outside-component.md) |

## Advanced

| Topic | Description | Reference |
|-------|-------------|-----------|
| SSR | Server-side rendering, state hydration | [advanced-ssr](https://github.com/antfu/skills/blob/main/skills/pinia/references/advanced-ssr.md) |
| Nuxt | Nuxt integration, auto-imports, SSR best practices | [advanced-nuxt](https://github.com/antfu/skills/blob/main/skills/pinia/references/advanced-nuxt.md) |
| HMR | Hot module replacement for development | [advanced-hmr](https://github.com/antfu/skills/blob/main/skills/pinia/references/advanced-hmr.md) |

## Key Recommendations

- **Prefer Setup Stores** for complex logic, composables, and watchers
- **Use `storeToRefs()`** when destructuring state/getters to preserve reactivity
- **Actions can be destructured directly** - they're bound to the store
- **Call stores inside functions** not at module scope, especially for SSR
- **Add HMR support** to each store for better development experience
- **Use `@pinia/testing`** for component tests with mocked stores
