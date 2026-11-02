---
slug: jackwener-opencli-skills-opencli-adapter-author
name: adapter-author
tagline: Build or improve an OpenCLI JS adapter using observed site behavior,
  existing adapters and browser API evidence. For ad-hoc browser interaction,
  see o
summary: list returns {ok:true,data:{commands,total,nextOffset?}}; use --offset
  to continue, --limit to adjust page size. Detailed arguments belong in command
  help.
categories:
  - browser-web
tags:
  - ai-agent
  - ai-agents
  - ai-tools
  - browser-automation
status: active
quality_percentile: 62
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: jackwener/OpenCLI
  subpath: skills/opencli-adapter-author
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 30831
  last_commit: 2026-10-26T07:53:40Z
  stars_delta_7d: 181
  stars_growth_pct: 0.6
  trending_score: 182.07
  rank_current: 68
  rank_delta: -9
  velocity_source: snapshot_delta
  sparkline_4w:
    - 30421
    - 30650
    - 30831
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: jackwener/OpenCLI
  path: skills/opencli-adapter-author/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:58.667Z
  truncated: false
type: agent_skill
skill:
  skill_name: adapter-author
  description: Build or improve an OpenCLI JS adapter using observed site
    behavior, existing adapters and browser API evidence. For ad-hoc browser
    interaction, see opencli-browser.
  folder_path: skills/opencli-adapter-author
  extra_files:
    - references/adapter-template.md
    - references/api-discovery.md
    - references/coverage-matrix.md
    - references/deep-recon.md
    - references/field-conventions.md
    - references/field-decode-playbook.md
    - references/jsdom-fixture-pattern.md
    - references/output-design.md
    - references/site-memory.md
    - references/site-memory/bilibili.md
  pack_total_skills: 5
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: jackwener-opencli
---

# Adapter authoring
Choose the simplest implementation that reliably performs the requested task.
Use an existing site adapter when it already covers the capability:

```sh
opencli list search --site example
opencli example search --help -f json
```

`list` returns `{ok:true,data:{commands,total,nextOffset?}}`; use `--offset` to
continue, `--limit` to adjust page size. Detailed arguments belong in command help.

## Evidence available to you

```sh
opencli browser open https://example.com --session research
opencli browser state --diagnostics --session research
opencli browser network --session research
opencli browser network --static --session research
opencli browser network --detail RequestKey --session research
```

Network captures describe observed requests. Static analysis adds candidates
from loaded scripts without executing them. Inspect source locations, unresolved
expressions and capture provenance. Replay read requests when useful and compare
business data with the page. Write commands have real effects, including when run
through `adapter test`; use a suitable test account or a supported dry-run.

Prefer public APIs with a stable contract when available. Browser fetch, captured
responses, page state and semantic UI interactions are also valid choices. Select
based on the task and observed reliability. Do not guess endpoint parameters or
hide failed operations behind empty success results.

## JS interface

Adapters are ordinary files under `~/.opencli/clis/<site>/<command>.js` or repository
`clis/<site>/`. There is no draft directory, promotion step or required memory file.

```sh
opencli adapter init example/search
```

The existing `cli({...})` interface is unchanged: `func(args)` for Node execution,
`func(page, args)` with `browser: true`. Reuse neighboring adapters and shared helpers.
Return business data; the CLI adds the JSON success envelope. Throw a typed error
with an actionable hint for failures. Use `access: 'read'|'write'` accurately.
`columns` controls human table exports; JSON preserves nested results.

```js
import { cli, Strategy } from '@jackwener/opencli/registry';

cli({
  site: 'example', name: 'search', description: 'Search example items',
  access: 'read', strategy: Strategy.PUBLIC, browser: false,
  args: [{ name: 'query', positional: true, required: true }],
  func: async (args) => {
    const response = await fetch(`https://example.com/api/search?q=${encodeURIComponent(args.query)}`);
    if (!response.ok) throw new Error(`Search failed: HTTP ${response.status}`);
    return response.json();
  },
});
```

## Check and exercise

```sh
opencli adapter check example/search
opencli example search 'query'
opencli adapter test example/search --args '{"query":"query"}'
```

`check` validates definitions without executing adapters. `test` executes the normal
CLI and optionally compares an existing fixture. `--write-fixture`, `--update-fixture`
and `--no-fixture` control optional expectations; no row-shape or site-memory gate
is imposed. `--trace retain-on-failure` helps diagnose browser execution.

For repository changes, cover the core behavior and failure paths with focused
production-path tests, typecheck and build. Verify IDs, fields, units, pagination
and empty/error semantics relevant to the task. Do not automatically replay a
write with an unknown outcome; inspect state first.

## Optional references

Read only what is useful for the current task: `references/adapter-template.md`
for adapter patterns, `api-discovery.md` for request investigation,
`output-design.md` for result fields, `field-decode-playbook.md` for opaque fields,
and `deep-recon.md` for difficult private protocols. Site notes and fixtures are
optional knowledge aids; older reference checklists are not mandatory workflows.
