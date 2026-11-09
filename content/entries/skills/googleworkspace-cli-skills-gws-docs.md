---
slug: googleworkspace-cli-skills-gws-docs
name: gws-docs
tagline: Read and write Google Docs.
summary: "- batchUpdate — Applies one or more updates to the document. Each
  request is validated before being applied. If any request is not valid, then
  the entire request will fail and nothing will be applied. Some requests ha..."
categories:
  - productivity-ops
tags:
  - agent-skills
  - ai-agent
  - automation
  - cli
status: active
quality_percentile: 57
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: googleworkspace/cli
  subpath: skills/gws-docs
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 32202
  last_commit: 2026-11-03T01:37:22Z
  stars_delta_7d: 79
  stars_growth_pct: 0.2
  trending_score: 79.19
  velocity_source: snapshot_delta
  sparkline_4w:
    - 31663
    - 32123
    - 32202
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: googleworkspace/cli
  path: skills/gws-docs/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:58.286Z
  truncated: false
type: agent_skill
skill:
  skill_name: gws-docs
  description: Read and write Google Docs.
  folder_path: skills/gws-docs
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: googleworkspace-cli
---

# docs (v1)
> **PREREQUISITE:** Read `../gws-shared/SKILL.md` for auth, global flags, and security rules. If missing, run `gws generate-skills` to create it.

```bash
gws docs <resource> <method> [flags]
```

## Helper Commands

| Command | Description |
|---------|-------------|
| [`+write`](https://github.com/googleworkspace/cli/blob/main/skills/gws-docs/../gws-docs-write/SKILL.md) | Append text to a document |

## API Resources

### documents

  - `batchUpdate` — Applies one or more updates to the document. Each request is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests.
  - `create` — Creates a blank document using the title given in the request. Other fields in the request, including any provided content, are ignored. Returns the created document.
  - `get` — Gets the latest version of the specified document.

## Discovering Commands

Before calling any API method, inspect it:

```bash
# Browse resources and methods
gws docs --help

# Inspect a method's required params, types, and defaults
gws schema docs.<resource>.<method>
```

Use `gws schema` output to build your `--params` and `--json` flags.
