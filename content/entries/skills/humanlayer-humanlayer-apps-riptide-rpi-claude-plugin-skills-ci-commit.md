---
slug: humanlayer-humanlayer-apps-riptide-rpi-claude-plugin-skills-ci-commit
name: ci-commit
tagline: Only use when the user explicitly invokes this skill by name.
summary: "1. Think about what changed: - Review the conversation history and
  understand what was accomplished - Run git status to see current changes - Run
  git diff to understand the modifications - Consider whether changes sho..."
categories:
  - other
tags:
  - agents
  - amp
  - claude-code
  - codex
status: active
quality_percentile: 64
selection_reason: quality_percentile
first_seen: 2026-10-26
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: humanlayer/humanlayer
  subpath: apps/riptide-rpi-claude-plugin/skills/ci-commit
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 12845
  last_commit: 2026-11-05T23:04:55Z
  stars_delta_7d: 35
  stars_growth_pct: 0.3
  trending_score: 35.1
  velocity_source: snapshot_delta
  sparkline_4w:
    - 12528
    - 12810
    - 12845
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: humanlayer/humanlayer
  path: apps/riptide-rpi-claude-plugin/skills/ci-commit/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:45.682Z
  truncated: false
type: agent_skill
skill:
  skill_name: ci-commit
  description: Only use when the user explicitly invokes this skill by name.
  folder_path: apps/riptide-rpi-claude-plugin/skills/ci-commit
  extra_files: []
  pack_total_skills: 22
  is_pack_primary: false
  clients:
    - claude-code
  pack_slug: humanlayer-humanlayer
---

# Commit Changes
You are tasked with creating git commits for the changes made during this session.

## Process:

1. **Think about what changed:**
   - Review the conversation history and understand what was accomplished
   - Run `git status` to see current changes
   - Run `git diff` to understand the modifications
   - Consider whether changes should be one commit or multiple logical commits

2. **Plan your commit(s):**
   - Identify which files belong together
   - Draft clear, descriptive commit messages
   - Use imperative mood in commit messages
   - Focus on why the changes were made, not just what

3. **Execute upon confirmation:**
   - Use `git add` with specific files (never use `-A` or `.`)
   - Never commit the `rpi/` directory or anything inside it!
   - Never commit dummy files, test scripts, or other files which you created or which appear to have been created but which were not part of your changes or directly caused by them (e.g. generated code)
   - Create commits with your planned messages until all of your changes are committed with `git commit -m`

## Remember:
- You have the full context of what was done in this session
- Group related changes together
- Keep commits focused and atomic when possible
- The user trusts your judgment - they asked you to commit
- **IMPORTANT**: - never stop and ask for feedback from the user.
