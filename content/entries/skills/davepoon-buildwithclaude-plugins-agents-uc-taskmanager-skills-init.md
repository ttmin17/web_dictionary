---
slug: davepoon-buildwithclaude-plugins-agents-uc-taskmanager-skills-init
name: uctm-init
tagline: Initialize uc-taskmanager for the current project. Creates works/
  directory and configures Bash permissions in .claude/settings.local.json. Use
  when t
summary: 'Ask the user first: "에이전트에 필요한 Bash 권한을 .claude/settings.local.json에
  자동 설정할까요? (recommended) [Y/n]"'
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
  subpath: plugins/agents-uc-taskmanager/skills/init
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
  path: plugins/agents-uc-taskmanager/skills/init/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.577Z
  truncated: false
type: agent_skill
skill:
  skill_name: uctm-init
  description: Initialize uc-taskmanager for the current project. Creates works/
    directory and configures Bash permissions in .claude/settings.local.json.
    Use when the user says "uctm init", "initialize uctm", "uctm 초기화", or "초기화".
  folder_path: plugins/agents-uc-taskmanager/skills/init
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# uc-taskmanager Init
Initialize the current project for uc-taskmanager pipeline execution.

## Steps

### 1. Create works/ directory

```
if works/ does not exist:
  create works/
  report: ✓ works/ directory created
else:
  report: - works/ already exists
```

### 2. Configure Bash Permissions

**Ask the user first:** "에이전트에 필요한 Bash 권한을 .claude/settings.local.json에 자동 설정할까요? (recommended) [Y/n]"

If the user approves (or says yes/Y/확인):

Read `.claude/settings.local.json` (create if not exists). Merge the following permissions into `permissions.allow` array — **skip any that already exist** (do not duplicate):

```json
[
  "Read(/**)",
  "Edit(/**)",
  "Write(/**)",
  "Read(**)",
  "Edit(**)",
  "Write(**)",
  "Bash(ls:*)",
  "Bash(cat:*)",
  "Bash(mkdir:*)",
  "Bash(basename:*)",
  "Bash(find:*)",
  "Bash(wc:*)",
  "Bash(sort:*)",
  "Bash(tail:*)",
  "Bash(head:*)",
  "Bash(echo:*)",
  "Bash(printf:*)",
  "Bash(grep:*)",
  "Bash(sed:*)",
  "Bash(cut:*)",
  "Bash(tr:*)",
  "Bash(node:*)",
  "Bash(npm run:*)",
  "Bash(npm test:*)",
  "Bash(bun run:*)",
  "Bash(yarn:*)",
  "Bash(cargo:*)",
  "Bash(go build:*)",
  "Bash(go test:*)",
  "Bash(python:*)",
  "Bash(ruff:*)",
  "Bash(make:*)",
  "Bash(git:*)",
  "Bash(curl:*)"
]
```

Preserve any existing entries in `permissions.allow` and `permissions.deny` — only add missing ones.

```
if permissions added:
  report: ✓ {N} permissions added to .claude/settings.local.json (total: {T})
else if skipped by user:
  report: - Skipped permission setup
else:
  report: - All permissions already configured
```

### 3. Summary

After all steps, show a summary:

```
uc-taskmanager initialized!

  ✓ works/ directory ready
  ✓ Bash permissions configured

  Next: Type [new-feature] Add a hello world feature
```

## Arguments

$ARGUMENTS
