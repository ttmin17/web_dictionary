---
slug: egonex-ai-understand-anything-understand-anything-plugin-skills-understand-onboard
name: understand-onboard
tagline: Use when you need to generate an onboarding guide for new team members
  joining a project
summary: "The knowledge graph JSON has this structure: - project — {name,
  description, languages, frameworks, analyzedAt, gitCommitHash} - nodes[] —
  each has {id, type, name, filePath?, summary, tags[], complexity,
  languageNote..."
categories:
  - coding-agents
tags:
  - antigravity-skills
  - business-knowledge
  - claude-code
  - claude-skills
status: active
quality_percentile: 72
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: Egonex-AI/Understand-Anything
  subpath: understand-anything-plugin/skills/understand-onboard
  official_vendor: false
  license: MIT
signals:
  stars: 88302
  last_commit: 2026-10-26T07:05:22Z
  stars_delta_7d: 1382
  stars_growth_pct: 1.6
  trending_score: 1403.97
  velocity_source: snapshot_delta
  sparkline_4w:
    - 85511
    - 86141
    - 86920
    - 88302
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: Egonex-AI/Understand-Anything
  path: understand-anything-plugin/skills/understand-onboard/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:16.231Z
  truncated: false
type: agent_skill
skill:
  skill_name: understand-onboard
  description: Use when you need to generate an onboarding guide for new team
    members joining a project
  folder_path: understand-anything-plugin/skills/understand-onboard
  extra_files: []
  pack_total_skills: 9
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: egonex-ai-understand-anything
---

# /understand-onboard
Generate a comprehensive onboarding guide from the project's knowledge graph.

## Graph Structure Reference

The knowledge graph JSON has this structure:
- `project` — {name, description, languages, frameworks, analyzedAt, gitCommitHash}
- `nodes[]` — each has {id, type, name, filePath?, summary, tags[], complexity, languageNotes?}
  - Code node types: file, function, class, module, concept
  - Non-code node types: config, document, service, table, endpoint, pipeline, schema, resource
  - Domain/knowledge node types: domain, flow, step, article, entity, topic, claim, source
  - IDs use the node type as prefix, e.g. `file:path`, `function:path:name`, `config:path`, `article:path`
- `edges[]` — each has {source, target, type, direction, weight}
  - Key types: imports, contains, calls, depends_on, configures, documents, deploys, triggers, contains_flow, flow_step, related, cites
- `layers[]` — each has {id, name, description, nodeIds[]}
- `tour[]` — each has {order, title, description, nodeIds[]}

## How to Read Efficiently

1. Use Grep to search within the JSON for relevant entries BEFORE reading the full file
2. Only read sections you need — don't dump the entire graph into context
3. Node names and summaries are the most useful fields for understanding
4. Edges tell you how components connect — follow imports and calls for dependency chains

## Instructions

1. **Resolve the data directory `$UA_DIR`.** Run `UA_DIR=$([ -d .understand-anything ] && echo .understand-anything || echo .ua)` — this is the legacy `.understand-anything/` when it already exists, otherwise the new `.ua/`. Check that `$UA_DIR/knowledge-graph.json` exists. If not, tell the user to run `/understand` first.

2. **Check graph freshness before using graph-derived context**:
   - Read `project.gitCommitHash` from the graph metadata as `GRAPH_COMMIT_RAW`. Resolve it as a commit before using it in any Git diff, then compare it with `git rev-parse HEAD` and inspect project-scoped committed and working-tree changes from the project root:
     ```bash
     GRAPH_COMMIT=$(git rev-parse --verify --end-of-options "${GRAPH_COMMIT_RAW}^{commit}" 2>/dev/null)
     git rev-parse HEAD
     git diff --name-only "$GRAPH_COMMIT" HEAD -- .
     git diff --cached --name-only -- .
     git diff --name-only -- .
     git ls-files --others --exclude-standard -- .
     ```
   - The `-- .` pathspec is required: commits that only touch a sibling monorepo project must not make this graph stale. A hash mismatch alone is not stale when the project diff is empty.
   - Ignore the selected data directory (`.ua/` or legacy `.understand-anything/`) in every command's output because it contains generated graph artifacts, not project source drift.
   - If the committed diff or any working-tree command reports project files, warn before generating the guide that onboarding content may omit those changes. Suggest: Run `/understand` to refresh the graph.
   - Run the commit diff only when `GRAPH_COMMIT_RAW` resolves successfully. If the graph commit or Git metadata is missing, invalid, or unavailable, give a brief best-effort warning and continue instead of blocking.

3. **Read project metadata** — use Grep or Read with a line limit to extract the `"project"` section (name, description, languages, frameworks).

4. **Read layers** — Grep for `"layers"` to get the full layers array. These define the architecture and will structure the guide.

5. **Read the tour** — Grep for `"tour"` to get the guided walkthrough steps. These provide the recommended learning path.

6. **Read file-level structural nodes only** — use Grep to find nodes with file-level types (`file`, `config`, `document`, `service`, `pipeline`, `table`, `schema`, `resource`, `endpoint`) in the knowledge graph. Skip function-level and class-level nodes to keep the guide high-level. Extract each node's `name`, `filePath`, `summary`, and `complexity`.

7. **Identify complexity hotspots** — from the file-level nodes, find those with the highest `complexity` values. These are areas new developers should approach carefully.

8. **Generate the onboarding guide** with these sections:
   - **Project Overview**: name, languages, frameworks, description (from project metadata)
   - **Architecture Layers**: each layer's name, description, and key files (from layers + file nodes)
   - **Key Concepts**: important patterns and design decisions (from node summaries and tags)
   - **Guided Tour**: step-by-step walkthrough (from the tour section)
   - **File Map**: what each key file does (from file-level nodes, organized by layer)
   - **Complexity Hotspots**: areas to approach carefully (from complexity values)

9. Format as clean markdown
10. Offer to save the guide to `docs/UA_ONBOARDING.md` in the project
11. Suggest the user commit it to the repo for the team
