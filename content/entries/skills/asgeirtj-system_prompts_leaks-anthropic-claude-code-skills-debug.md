---
slug: asgeirtj-system_prompts_leaks-anthropic-claude-code-skills-debug
name: debug
tagline: Enable debug logging for this session and help diagnose issues
summary: Debug logging was OFF for this session until now. Nothing prior to this
  /debug invocation was captured.
categories:
  - cloud-infra
tags:
  - ai-agents
  - ai-prompts
  - anthropic
  - chatbot
status: active
quality_percentile: 86
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: asgeirtj/system_prompts_leaks
  subpath: Anthropic/claude-code/skills/debug
  official_vendor: false
  license: CC0-1.0
signals:
  stars: 70224
  last_commit: 2026-10-25T19:55:03Z
  stars_delta_7d: 344
  stars_growth_pct: 0.5
  trending_score: 345.69
  velocity_source: snapshot_delta
  sparkline_4w:
    - 69880
    - 70224
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: asgeirtj/system_prompts_leaks
  path: Anthropic/claude-code/skills/debug/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.810Z
  truncated: false
type: agent_skill
skill:
  skill_name: debug
  description: Enable debug logging for this session and help diagnose issues
  folder_path: Anthropic/claude-code/skills/debug
  extra_files: []
  pack_total_skills: 217
  is_pack_primary: false
  clients:
    - claude-code
  pack_slug: asgeirtj-system_prompts_leaks
---

# Debug Skill
Help the user debug an issue they're encountering in this current Claude Code session.

## Debug Logging Just Enabled

Debug logging was OFF for this session until now. Nothing prior to this /debug invocation was captured.

Tell the user that debug logging is now active at `~/.claude/debug/{{SESSION_ID}}.txt`, ask them to reproduce the issue, then re-read the log. If they can't reproduce, they can also restart with `claude --debug` to capture logs from startup.

## Session Debug Log

The debug log for the current session is at: `~/.claude/debug/{{SESSION_ID}}.txt`

No log file exists yet.

For additional context, grep for [ERROR] and [WARN] lines across the full file.

## Daemon

No daemon lock or status file found — the background daemon does not appear to be running. If the issue involves background sessions or `claude agents`, the daemon log (if any) is at `~/.claude/daemon.log`.

## Issue Description

The user did not describe a specific issue. Read the debug log and summarize any errors, warnings, or notable issues.

## Settings

Remember that settings are in:
* user - ~/.claude/settings.json
* project - /private/tmp/skillcap/.claude/settings.json
* local - /private/tmp/skillcap/.claude/settings.local.json

## Instructions

1. Review the user's issue description
2. The last 20 lines show the debug file format. Look for [ERROR] and [WARN] entries, stack traces, and failure patterns across the file
3. Consider launching the claude-code-guide subagent to understand the relevant Claude Code features
4. Explain what you found in plain language
5. Suggest concrete fixes or next steps
