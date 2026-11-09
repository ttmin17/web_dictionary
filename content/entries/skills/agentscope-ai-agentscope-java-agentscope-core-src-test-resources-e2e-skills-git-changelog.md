---
slug: agentscope-ai-agentscope-java-agentscope-core-src-test-resources-e2e-skills-git-changelog
name: git-changelog
tagline: Use this skill when the task involves generating a changelog, release
  notes, or commit summary from a Git repository's history. Suitable for tasks
  lik
summary: "- scripts/generatechangelog.py — Read git log between two refs and
  produce a grouped Markdown changelog (features, fixes, chores)"
categories:
  - agent-frameworks
tags:
  - adk
  - agent-framework
  - agentic
  - agentic-ai
status: active
quality_percentile: 94
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: agentscope-ai/agentscope-java
  subpath: agentscope-core/src/test/resources/e2e-skills/git-changelog
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 6300
  last_commit: 2026-11-09T00:55:32Z
  stars_delta_7d: 35
  stars_growth_pct: 0.6
  trending_score: 35.2
  velocity_source: snapshot_delta
  sparkline_4w:
    - 6038
    - 6121
    - 6265
    - 6300
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: agentscope-ai/agentscope-java
  path: agentscope-core/src/test/resources/e2e-skills/git-changelog/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:42.415Z
  truncated: false
type: agent_skill
skill:
  skill_name: git-changelog
  description: Use this skill when the task involves generating a changelog,
    release notes, or commit summary from a Git repository's history. Suitable
    for tasks like "generate a changelog for v2.0", "summarize what changed
    since last release", or "create release notes from git commits". Requires
    access to a Git repository.
  folder_path: agentscope-core/src/test/resources/e2e-skills/git-changelog
  extra_files:
    - scripts/generate_changelog.py
  pack_total_skills: 19
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agentscope-ai-agentscope-java
---

# Git Changelog Skill
Generates formatted changelogs and release notes from Git commit history.

## Available Scripts

- `scripts/generate_changelog.py` — Read git log between two refs and produce a grouped Markdown changelog (features, fixes, chores)

## Usage

```
python3 scripts/generate_changelog.py --from v1.0.0 --to HEAD --output CHANGELOG.md
python3 scripts/generate_changelog.py --from v1.0.0 --to v2.0.0
```
