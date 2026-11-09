---
slug: mvschwarz-openrig-packages-daemon-assets-plugins-openrig-core-skills-loading-addressable-markdown
name: loading-addressable-markdown
tagline: Use when a mission, slice, dashboard, or task references Markdown as
  path#h2-slug or path#h2-slug/h3-slug outside the OpenRig context-pack library.
summary: Load exactly one addressed Markdown section from any filesystem tree.
  The resolver mirrors OpenRig's shipped H2/H3 grammar without requiring the
  file to live in the context library.
categories:
  - agent-frameworks
tags:
  - agent-harness
  - agent-orchestration
  - agent-skills
  - ai-coding
status: active
quality_percentile: 63
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: mvschwarz/openrig
  subpath: packages/daemon/assets/plugins/openrig-core/skills/loading-addressable-markdown
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 8774
  last_commit: 2026-11-09T09:15:26Z
  stars_delta_7d: 126
  stars_growth_pct: 1.5
  trending_score: 127.84
  velocity_source: snapshot_delta
  sparkline_4w:
    - 7831
    - 8198
    - 8648
    - 8774
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: mvschwarz/openrig
  path: packages/daemon/assets/plugins/openrig-core/skills/loading-addressable-markdown/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:49.756Z
  truncated: false
type: agent_skill
skill:
  skill_name: loading-addressable-markdown
  description: Use when a mission, slice, dashboard, or task references Markdown
    as path#h2-slug or path#h2-slug/h3-slug outside the OpenRig context-pack
    library.
  folder_path: packages/daemon/assets/plugins/openrig-core/skills/loading-addressable-markdown
  extra_files:
    - scripts/resolve-markdown.mjs
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: mvschwarz-openrig
---

# Loading Addressable Markdown
## Overview

Load exactly one addressed Markdown section from any filesystem tree. The resolver mirrors OpenRig's shipped H2/H3 grammar without requiring the file to live in the context library.

## Use

Run the bundled script. Relative file references resolve from `--root`; without it they resolve from the current directory.

```bash
node ~/.agents/skills/loading-addressable-markdown/scripts/resolve-markdown.mjs \
  --root /path/to/mission \
  'slices/09-source-cleanup/SPEC.md#proposal'
```

The accepted forms are:

- `file.md` — whole file
- `file.md#h2-slug` — full H2 span, including child sections
- `file.md#h2-slug/h3-slug` — full H3 span

Slugs are lowercase; Markdown emphasis/code markers are removed; each other non-alphanumeric run becomes `-`. Duplicate or missing paths fail loudly. Headings inside fenced code blocks are ignored.

## Common mistakes

- Do not use `rig context get` for an arbitrary filesystem path; that command resolves context-library refs.
- Do not hand-slice headings with `sed` or line numbers; the bundled resolver owns span and fence behavior.
- Quote addresses in shell commands.
