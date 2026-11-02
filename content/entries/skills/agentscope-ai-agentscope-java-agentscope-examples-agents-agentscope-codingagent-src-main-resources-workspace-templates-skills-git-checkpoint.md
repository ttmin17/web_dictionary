---
slug: agentscope-ai-agentscope-java-agentscope-examples-agents-agentscope-codingagent-src-main-resources-workspace-templates-skills-git-checkpoint
name: git-checkpoint
tagline: Use git as a safety net - create a checkpoint commit before risky or
  large changes and roll back cleanly if a change makes things worse. Use before
  mu
summary: "Before a large refactor or anything you are unsure about, save the
  current good state:"
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
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: agentscope-ai/agentscope-java
  subpath: agentscope-examples/agents/agentscope-codingagent/src/main/resources/workspace-templates/skills/git-checkpoint
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 6214
  last_commit: 2026-11-02T08:27:45Z
  stars_delta_7d: 93
  stars_growth_pct: 1.5
  trending_score: 94.41
  velocity_source: snapshot_delta
  sparkline_4w:
    - 6038
    - 6121
    - 6214
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: agentscope-ai/agentscope-java
  path: agentscope-examples/agents/agentscope-codingagent/src/main/resources/workspace-templates/skills/git-checkpoint/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:07:24.989Z
  truncated: false
type: agent_skill
skill:
  skill_name: git-checkpoint
  description: Use git as a safety net - create a checkpoint commit before risky
    or large changes and roll back cleanly if a change makes things worse. Use
    before multi-file refactors.
  folder_path: agentscope-examples/agents/agentscope-codingagent/src/main/resources/workspace-templates/skills/git-checkpoint
  extra_files: []
  pack_total_skills: 19
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agentscope-ai-agentscope-java
---

# Git Checkpoint and Rollback
You work in a git-backed sandbox. Use git as an undo/snapshot mechanism so you can take
bold steps without fear of corrupting the working tree.

## Checkpoint before risky work

Before a large refactor or anything you are unsure about, save the current good state:

```bash
git add -A && git commit -m "checkpoint: before <short description>" --no-verify
```

Record the commit hash (`git rev-parse HEAD`) so you can return to it.

## Roll back on failure

If a change makes things worse and you cannot quickly fix it, revert rather than piling
on more edits:

- Discard uncommitted changes to a file: `git checkout -- <file>`
- Discard ALL uncommitted changes: `git reset --hard HEAD`
- Return to a checkpoint: `git reset --hard <checkpoint-hash>`

Then re-read the code and try a different approach.

## Rules

- NEVER create `.bak` / backup files — git is your history.
- Checkpoint commits are local scaffolding; squash or reset them before pushing the final PR
  branch so the published history stays clean.
