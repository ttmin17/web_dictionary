---
slug: ruvnet-ruflo-plugins-ruflo-plugin-creator-skills-validate-plugin
name: validate-plugin
tagline: Validate a Claude Code plugin structure, frontmatter, and MCP tool references
summary: After creating or modifying a plugin, run validation to catch
  structural issues before publishing.
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
  subpath: plugins/ruflo-plugin-creator/skills/validate-plugin
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
  path: plugins/ruflo-plugin-creator/skills/validate-plugin/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.548Z
  truncated: false
type: agent_skill
skill:
  skill_name: validate-plugin
  description: Validate a Claude Code plugin structure, frontmatter, and MCP tool references
  folder_path: plugins/ruflo-plugin-creator/skills/validate-plugin
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Validate Plugin
Validate that a plugin follows the correct Claude Code plugin format.

## When to use

After creating or modifying a plugin, run validation to catch structural issues before publishing.

## Checks performed

1. **Directory structure** — `.claude-plugin/plugin.json` exists at plugin root
2. **plugin.json schema** — required fields present (name, description, version, non-empty keywords array); `name` equals the directory name; version is semver
3. **Skills auto-discovery** — every `skills/<name>/SKILL.md` is a valid skill (Claude Code auto-discovers from directory; `plugin.json` MUST NOT list a `skills` array)
4. **Commands auto-discovery** — every `commands/<name>.md` is a valid command (auto-discovered; no `commands` array in `plugin.json`)
5. **Agents auto-discovery** — every `agents/<name>.md` is a valid agent (auto-discovered; no `agents` array in `plugin.json`)
6. **No legacy arrays in plugin.json** — presence of `skills`, `commands`, or `agents` arrays in `plugin.json` is a validation error (they cause Claude Code to reject the plugin)
7. **SKILL.md frontmatter** — each skill has `name`, `description`, and `allowed-tools` (no wildcards)
8. **Agent frontmatter** — each agent has `name`, `description`, and `model`
9. **No files in wrong locations** — skills/commands/agents not inside `.claude-plugin/`
10. **MCP tool references** — tools in `allowed-tools` use the `mcp__plugin_ruflo-core_ruflo__*` prefix AND exist: list the real tools with `npx @claude-flow/cli@latest mcp tools` and flag any name not in it (typos such as `hooks_post_task` for `hooks_post-task`, or `agentdb_pattern_search` for `agentdb_pattern-search`, are format-valid but do not exist). Also run the repo gates when inside the ruflo repo: `node scripts/audit-skill-frontmatter.mjs`, `audit-plugin-manifest.mjs`, `audit-plugin-mcp-prefix.mjs`

## Steps

1. Read the plugin's `plugin.json` and assert no `skills` / `commands` / `agents` arrays present
2. Glob `skills/*/SKILL.md`, `commands/*.md`, `agents/*.md` and validate each frontmatter
3. For each SKILL.md, verify frontmatter has required fields and `allowed-tools` has no wildcards
4. For each agent .md, verify frontmatter has required fields
5. Report pass/fail for each check with actionable fix suggestions
