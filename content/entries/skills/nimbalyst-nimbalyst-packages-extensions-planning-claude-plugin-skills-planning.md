---
slug: nimbalyst-nimbalyst-packages-extensions-planning-claude-plugin-skills-planning
name: planning
tagline: Create structured plan documents and track work items using YAML
  frontmatter. Use when the user wants to plan a feature, track progress, log
  bugs/task
summary: "- draft: Initial planning phase - ready-for-development: Approved and
  ready to start - in-development: Currently being worked on - in-review:
  Implementation complete, pending review - completed: Successfully
  completed..."
categories:
  - coding-agents
tags:
  - agentic-ai
  - agentic-ide
  - ai-agents
  - ai-coding-assistant
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: nimbalyst/nimbalyst
  subpath: packages/extensions/planning/claude-plugin/skills/planning
  official_vendor: false
  license: MIT
signals:
  stars: 2047
  last_commit: 2026-11-04T07:28:07Z
  stars_delta_7d: 24
  stars_growth_pct: 1.2
  trending_score: 24.28
  velocity_source: snapshot_delta
  sparkline_4w:
    - 1931
    - 1975
    - 2023
    - 2047
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: nimbalyst/nimbalyst
  path: packages/extensions/planning/claude-plugin/skills/planning/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:27.663Z
  truncated: false
type: agent_skill
skill:
  skill_name: planning
  description: Create structured plan documents and track work items using YAML
    frontmatter. Use when the user wants to plan a feature, track progress, log
    bugs/tasks/ideas, or organize project work.
  folder_path: packages/extensions/planning/claude-plugin/skills/planning
  extra_files: []
  pack_total_skills: 16
  is_pack_primary: false
  clients:
    - claude-code
  pack_slug: nimbalyst-nimbalyst
---

# Planning and Tracking System
Nimbalyst uses structured markdown documents with YAML frontmatter for planning and tracking work.

## Plan Documents

Plans live in `nimbalyst-local/plans/` with YAML frontmatter:

```yaml
---
planStatus:
  planId: plan-[unique-identifier]
  title: [Plan Title]
  status: draft
  planType: feature
  priority: medium
  owner: [owner-name]
  stakeholders: []
  tags: []
  created: "YYYY-MM-DD"
  updated: "YYYY-MM-DDTHH:MM:SS.sssZ"
  progress: 0
---
```

### Status Values

- `draft`: Initial planning phase
- `ready-for-development`: Approved and ready to start
- `in-development`: Currently being worked on
- `in-review`: Implementation complete, pending review
- `completed`: Successfully completed
- `rejected`: Plan has been rejected
- `blocked`: Progress blocked by dependencies

### Plan Types

- `feature`: New feature development
- `bug-fix`: Bug fix or issue resolution
- `refactor`: Code refactoring/improvement
- `system-design`: Architecture/design work
- `research`: Research/investigation task
- `initiative`: Large multi-feature effort
- `improvement`: Enhancement to existing feature

## Tracking Items

Track bugs, tasks, ideas, and other items in `nimbalyst-local/tracker/`:

```markdown
- [Brief description] #[type][id:[idPrefix]_[ulid] status:[default-status] priority:medium created:YYYY-MM-DD]
```

### CRITICAL: Custom Tracker Types

**Before creating any tracker item, always check `.nimbalyst/trackers/*.yaml` in the workspace root for custom tracker type definitions.** Each YAML file defines a tracker type with:
- `type`: The type name used in `#[type][...]` syntax (e.g., `devblog-post`)
- `idPrefix`: The prefix for generated IDs (e.g., `dev` produces `dev_abc123`)
- `fields`: Available fields including status options with custom values
- `sync`: Whether items sync to the team (shared/local/hybrid)

**Always use the exact `type` name from the YAML when creating items.** Do not substitute a built-in type when a custom type matches the user's intent.

### Built-in Tracker Types

- **bugs.md**: Issues and defects (`#bug`, prefix: `bug`)
- **tasks.md**: Work items and todos (`#task`, prefix: `tsk`)
- **ideas.md**: Concepts to explore (`#idea`, prefix: `id`)
- **decisions.md**: Important decisions (`#decision`, prefix: `dec`). Not every choice needs one. If the project has a Wiki, follow its "How we write this wiki" page: mark the decision in the page it affects, and add a decision item only when no single page owns it, work hangs off it, it isn't settled, or its reasons don't fit in the mark. Without a Wiki, a decision usually belongs in its plan doc.
- **plans.md**: Plans and features (`#plan`, prefix: `pln`)

### Custom Tracker Types (per-workspace)

Defined in `.nimbalyst/trackers/*.yaml`. Examples:
- **feature-requests.md** (`#feature-request`, prefix: `feat`)
- **tech-debt.md** (`#tech-debt`, prefix: `debt`)
- **devblog-posts.md** (`#devblog-post`, prefix: `dev`)
- Any other type defined in the workspace's YAML files

## When to Use

- **Creating plans**: When user wants to plan a feature, project, or initiative
- **Tracking items**: When user mentions bugs, tasks, ideas, or wants to log something
- **Progress updates**: When completing work, update plan status and progress
- **Implementation**: Use /implement to execute a plan with progress tracking
- **Board cleanup**: Use /session-cleanup to tidy the Sessions board -- fix session phases, mark finished work complete, and flag old sessions to archive
- **Getting more from Nimbalyst**: Use /planning:nimbalyst-coach to review this project and recent sessions and suggest extensions, features, and agent-instruction changes

## File Naming

- Plans: `nimbalyst-local/plans/[descriptive-name].md` (kebab-case)
- Trackers: `nimbalyst-local/tracker/[type]s.md` (pluralize the type name)

## Best Practices

- Always check `.nimbalyst/trackers/` for custom types before using built-in types
- Keep plans focused on a single objective
- Update progress regularly as work proceeds
- Use appropriate priorities (low, medium, high, critical)
- Link related plans and tracker items
- Include stakeholders who need visibility
