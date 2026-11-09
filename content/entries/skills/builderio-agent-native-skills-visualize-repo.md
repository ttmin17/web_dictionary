---
slug: builderio-agent-native-skills-visualize-repo
name: visualize-repo
tagline: Open or create a repo-native visual documentation workspace backed by
  local Plan MDX files. Use when the user asks to visualize a repository, create
  d
summary: The command writes or updates agent-native.json with an
  apps.visualize-repo local-files section, creates a starter MDX folder at
  .agent-native/visual-docs/repo-overview, then serves it through the Plan local
  bridge. T...
categories:
  - agent-frameworks
tags:
  - agent-framework
  - agent-native
  - agentic-ai
  - agents
status: active
quality_percentile: 68
selection_reason: quality_percentile
first_seen: 2026-11-05
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: BuilderIO/agent-native
  subpath: skills/visualize-repo
  official_vendor: false
  license: MIT
signals:
  stars: 7652
  last_commit: 2026-11-09T08:19:09Z
  stars_delta_7d: 31
  stars_growth_pct: 0.4
  trending_score: 31.13
  velocity_source: snapshot_delta
  sparkline_4w:
    - 7621
    - 7652
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: BuilderIO/agent-native
  path: skills/visualize-repo/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:42.437Z
  truncated: false
type: agent_skill
skill:
  skill_name: visualize-repo
  description: Open or create a repo-native visual documentation workspace backed
    by local Plan MDX files. Use when the user asks to visualize a repository,
    create durable visual docs for APIs/components/models/flows, launch a visual
    repo viewer, review repo docs like a visual IDE, or collect Plan comments
    that should become coding-agent changes.
  folder_path: skills/visualize-repo
  extra_files: []
  pack_total_skills: 23
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: builderio-agent-native
---

# Visualize Repo
`/visualize-repo` opens a local, source-controlled visual documentation layer
for a repository. It is for durable repo understanding, not a one-off plan:
components can have wireframes, APIs can have specs, models can have schema
views, and reviewers can comment on those docs before sending work to a coding
agent.

## Default Command

Run the Agent-Native CLI from the repo root:

```bash
npx @agent-native/core@latest visualize-repo --open
```

Useful variants:

```bash
npx @agent-native/core@latest visualize-repo init
npx @agent-native/core@latest visualize-repo --target actions --target server/db/schema.ts
npx @agent-native/core@latest visualize-repo check
npx @agent-native/core@latest visualize-repo verify
npx @agent-native/core@latest visualize-repo --no-open
```

The command writes or updates `agent-native.json` with an
`apps.visualize-repo` local-files section, creates a starter MDX folder at
`.agent-native/visual-docs/repo-overview`, then serves it through the Plan
local bridge. The hosted Plan UI can render the review surface, but the plan
source stays in local files and bridge comments stay in `comments.json`.

## When There Is No Manifest

If `agent-native.json` does not exist, let the CLI bootstrap one. It scans for
high-value starting points such as `actions/`, `app/components/`,
`app/pages/`, `server/db/schema.ts`, `src/`, `packages/`, `templates/`,
`docs/`, and `content/`. Keep the first run targeted. Prefer 5-20 visualized
nodes over a generated wall of repo prose.

Use explicit targets when the user already knows the important surface:

```bash
npx @agent-native/core@latest visualize-repo \
  --target actions/webhooks.ts \
  --target server/db/schema.ts \
  --target app/components/PromptComposer.tsx
```

## Agent Workflow

1. Inspect `agent-native.json` and the generated `plan.mdx`.
2. Read the source anchors listed for each target before changing the visual
   docs.
3. Add only the visual blocks that earn their keep: `api-endpoint` for stable
   APIs, `data-model` for durable schema, `wireframe` for user-facing
   components/flows, `diagram` for architecture, and `annotated-code` for
   load-bearing implementation.
4. Run `npx @agent-native/core@latest visualize-repo check` after editing MDX.
5. Use `verify` before handoff when renderer correctness matters.

When acting on comments, treat local `comments.json` as the feedback inbox.
Agent-targeted comments should become code changes plus matching MDX updates so
the visual docs and executable code stay in sync.

## Privacy Boundary

`visualize-repo check` is local/offline lint. `visualize-repo --open` starts a
localhost bridge and opens the Plan UI against local files; it does not publish
the plan to hosted storage and performs no hosted Plan database writes.
`visualize-repo verify` may send the MDX folder to the Plan app's public
validation action so the real renderer schema can check it. For no hosted
content egress, pass `--app-url` pointing at a local Plan app or skip
`verify` and rely on `check`.

Do not call hosted Plan write tools for this workflow unless the user explicitly
asks to publish or share the docs. Avoid `create-visual-plan`,
`update-visual-plan`, `import-visual-plan-source`, `patch-visual-plan-source`,
and `get-plan-feedback` for local repo docs; edit the MDX files directly and
use the local bridge.
