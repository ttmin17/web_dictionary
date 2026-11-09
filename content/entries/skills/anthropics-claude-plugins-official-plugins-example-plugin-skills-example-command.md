---
slug: anthropics-claude-plugins-official-plugins-example-plugin-skills-example-command
name: example-command
tagline: An example user-invoked skill that demonstrates frontmatter options and
  the skills/<name>/SKILL.md layout
summary: "The user invoked this with: $ARGUMENTS"
categories:
  - other
tags:
  - claude-code
  - skills
status: active
quality_percentile: 98
selection_reason: official_vendor
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: anthropics/claude-plugins-official
  subpath: plugins/example-plugin/skills/example-command
  official_vendor: true
  license: Apache-2.0
signals:
  stars: 46522
  last_commit: 2026-11-08T07:28:26Z
  stars_delta_7d: 329
  stars_growth_pct: 0.7
  trending_score: 331.34
  velocity_source: snapshot_delta
  sparkline_4w:
    - 42914
    - 44625
    - 46193
    - 46522
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: anthropics/claude-plugins-official
  path: plugins/example-plugin/skills/example-command/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:29.799Z
  truncated: false
type: agent_skill
skill:
  skill_name: example-command
  description: An example user-invoked skill that demonstrates frontmatter options
    and the skills/<name>/SKILL.md layout
  folder_path: plugins/example-plugin/skills/example-command
  extra_files: []
  pack_total_skills: 21
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: anthropics-claude-plugins-official
---

# Example Command (Skill Format)
This demonstrates the `skills/<name>/SKILL.md` layout for user-invoked slash commands. It is functionally identical to the legacy `commands/example-command.md` format — both are loaded the same way; only the file layout differs.

## Arguments

The user invoked this with: $ARGUMENTS

## Instructions

When this skill is invoked:

1. Parse the arguments provided by the user
2. Perform the requested action using allowed tools
3. Report results back to the user

## Frontmatter Options Reference

Skills in this layout support these frontmatter fields:

- **name**: Skill identifier (matches directory name)
- **description**: Short description shown in /help
- **argument-hint**: Hints for command arguments shown to user
- **allowed-tools**: Pre-approved tools for this skill (reduces permission prompts)
- **model**: Override the model (e.g., "haiku", "sonnet", "opus")

## Example Usage

```
/example-command my-argument
/example-command arg1 arg2
```
