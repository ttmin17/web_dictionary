---
slug: ruvnet-ruflo-plugins-ruflo-adr-skills-adr-verify
name: adr-verify
tagline: Read back adr-patterns + adr-edges namespaces, surface dangling refs /
  supersede cycles / Unknown statuses; exit 1 on cycles
summary: "- Dangling refs — edge points at an ADR ID that doesn't exist in
  adr-patterns. Common cause: the referenced ADR is in a sibling repo or got
  deleted. - Supersede cycles — ADR-A supersedes ADR-B and ADR-B supersedes
  ADR..."
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
  subpath: plugins/ruflo-adr/skills/adr-verify
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
  path: plugins/ruflo-adr/skills/adr-verify/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.541Z
  truncated: false
type: agent_skill
skill:
  skill_name: adr-verify
  description: Read back adr-patterns + adr-edges namespaces, surface dangling
    refs / supersede cycles / Unknown statuses; exit 1 on cycles
  folder_path: plugins/ruflo-adr/skills/adr-verify
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# ADR Verify
Companion to `adr-index`. After import, reads the persisted graph and surfaces integrity issues:

- **Dangling refs** — edge points at an ADR ID that doesn't exist in `adr-patterns`. Common cause: the referenced ADR is in a sibling repo or got deleted.
- **Supersede cycles** — `ADR-A supersedes ADR-B` and `ADR-B supersedes ADR-A` (or longer cycles). Always data corruption.
- **Status mismatches** — an ADR is the source of a `supersedes` edge but its own status isn't `Superseded`. Usually a missed status update during a successor ADR's promotion.

**What this skill cannot catch:** an `adr-patterns` row for an ADR that was deleted from disk and has zero edges referencing it or from it — invisible to every check above (issue #2666). If the reported ADR count looks higher than what's actually on disk, run `adr-reindex`, not `adr-verify` again.

## When to use

- Right after `adr-index` to confirm the graph is healthy
- In CI as a fail-closed gate (`VERIFY_STRICT=1` exits 1 on any issue)
- Before publishing an ADR-related release

## Steps

```bash
node plugins/ruflo-adr/scripts/verify.mjs
```

Optional env:
- `VERIFY_FORMAT=json` — JSON instead of markdown
- `VERIFY_STRICT=1` — exit 1 on ANY issue (default: only on cycles)

## Exit codes

| Code | Meaning |
|---|---|
| `0` | Graph healthy (or dangling refs / status mismatches present in non-strict mode) |
| `1` | Supersede cycle detected, OR strict mode + any issue present |

## Cross-references

- `adr-index` — populates the data this skill verifies
- `scripts/import.mjs` — has its own dry-run validation; this skill is the read-back companion
- `adr-reindex` — reconciles a deleted ADR that `adr-verify` cannot detect
