---
slug: davepoon-buildwithclaude-plugins-all-skills-skills-tycana
name: tycana
tagline: Persistent task management and productivity intelligence via MCP.
  Captures tasks from conversation, plans your day, tracks patterns, and gives
  persona
summary: "Homepage: tycana.com Getting started: tycana.com/getting-started"
categories:
  - agent-frameworks
tags:
  - claude
  - claude-code
  - claude-code-commands
  - claude-skills
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: davepoon/buildwithclaude
  subpath: plugins/all-skills/skills/tycana
  official_vendor: false
  license: MIT
signals:
  stars: 3678
  last_commit: 2026-10-26T00:07:50Z
  stars_delta_7d: 28
  stars_growth_pct: 0.8
  trending_score: 28.21
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3604
    - 3631
    - 3650
    - 3678
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: davepoon/buildwithclaude
  path: plugins/all-skills/skills/tycana/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.599Z
  truncated: false
type: agent_skill
skill:
  skill_name: tycana
  description: Persistent task management and productivity intelligence via MCP.
    Captures tasks from conversation, plans your day, tracks patterns, and gives
    personalized recommendations that improve over time.
  folder_path: plugins/all-skills/skills/tycana
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# Tycana Productivity
Tycana gives Claude persistent memory about your work across conversations. Connect once via MCP, and every session includes your tasks, projects, deadlines, blockers, and computed intelligence from your patterns.

**Homepage**: [tycana.com](https://www.tycana.com)
**Getting started**: [tycana.com/getting-started](https://www.tycana.com/getting-started/)

## Prerequisites

- Tycana MCP server connected at `https://app.tycana.com/mcp` (OAuth 2.1)
- Or install the Tycana Claude plugin: `/plugin install tycana`

## Available Tools

| Tool | Purpose |
|------|---------|
| `capture` | Create tasks from conversation context |
| `complete` | Mark items done with outcome and notes |
| `plan_day` | Generate prioritized daily plan |
| `what_next` | Energy-aware next action recommendation |
| `review` | Progress summary with pattern analysis |
| `get_context` | Load current work context |
| `search` | Find items by keyword or filter |
| `list_items` | List items with status/project filters |
| `get_item` | Get full detail on a specific item |
| `update_item` | Modify item properties |
| `relate_items` | Create blocking/dependency relationships |
| `remember` | Store personal preferences and constraints |
| `cleanup_project` | Archive completed items in a project |
| `delete_item` | Remove an item |

## Example Prompts

```
"Plan my day"
"Remind me to update the deployment docs before Friday"
"What should I work on next? I have about an hour and low energy"
"How's the infrastructure project going?"
"Review my week"
"Brain dump — I've got a bunch of things rattling around"
```

## Key Features

- **Capture from conversation** — mention something you need to do and it's captured with effort, energy, and project inferred from context
- **Computed intelligence** — velocity tracking, slip detection, effort calibration that improves over time
- **Energy-aware recommendations** — factors in your current energy level for task suggestions
- **Project graph** — items connect via blocking chains and dependencies, not flat lists
