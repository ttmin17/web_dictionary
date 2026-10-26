---
slug: ruvnet-ruflo-plugins-ruflo-browser-skills-browser-scrape
name: browser-scrape
tagline: DEPRECATED in v0.2.0 -- use browser-extract instead; this is a thin
  shim for backward compatibility, kept as a shim and slated for removal in the
  next
summary: This skill delegates to browser-extract. Calling it emits a deprecation
  notice and proceeds.
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
  subpath: plugins/ruflo-browser/skills/browser-scrape
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
  path: plugins/ruflo-browser/skills/browser-scrape/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.543Z
  truncated: false
type: agent_skill
skill:
  skill_name: browser-scrape
  description: DEPRECATED in v0.2.0 -- use browser-extract instead; this is a thin
    shim for backward compatibility, kept as a shim and slated for removal in
    the next minor release
  folder_path: plugins/ruflo-browser/skills/browser-scrape
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Browser Scrape (deprecated)
> **Deprecated since plugin v0.2.0.** Kept as a shim; slated for removal in the next minor release.
>
> Use [`browser-extract`](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-browser/skills/browser-scrape/../browser-extract/SKILL.md) instead. It provides the same scraping capability plus:
>
> - RVF cognitive container per session (replayable, federatable)
> - Mandatory AIDefence PII + prompt-injection gates
> - Persistent `browser-templates` namespace for reusable recipes
> - Automatic `browser-selectors` namespace updates so DOM drift is recoverable

## Migration

| v0.1 invocation | v0.2 equivalent |
|-----------------|-----------------|
| `/browser-scrape <url>` | `/browser-extract <url>` |
| `/browser-scrape <url>` (with template intent) | `/browser-extract <url> --template <name>` |
| Manual selector storage in `browser-patterns` namespace | Automatic — `browser-extract` writes to `browser-templates` and `browser-selectors` |

## Behavior of this shim

This skill delegates to `browser-extract`. Calling it emits a deprecation notice and proceeds.

```bash
# This skill is intentionally minimal — it just points the agent at the new skill.
echo "browser-scrape is deprecated; running browser-extract instead." >&2
```

The deprecation notice is captured in the agent's transcript so callers see the remediation. There is no behavior preserved here beyond the redirect — if you depended on a specific extraction shape, port to `browser-extract` and use `--template` to encode it.
