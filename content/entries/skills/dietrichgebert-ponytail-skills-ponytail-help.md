---
slug: dietrichgebert-ponytail-skills-ponytail-help
name: help
tagline: >
  Quick reference for ponytail levels, skills and commands. One-shot display.
  Use for /ponytail-help, "ponytail help", "how do I use ponytail".
summary: Level sticks until changed or session end.
categories:
  - coding-agents
tags:
  - agent-skills
  - ai-agents
  - claude
  - claude-code
status: active
quality_percentile: 53
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: DietrichGebert/ponytail
  subpath: skills/ponytail-help
  official_vendor: false
  license: MIT
signals:
  stars: 176404
  last_commit: 2026-10-18T01:55:14Z
  stars_delta_7d: 9110
  stars_growth_pct: 5.4
  trending_score: 9606.09
  velocity_source: snapshot_delta
  sparkline_4w:
    - 157371
    - 162479
    - 167294
    - 176404
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: DietrichGebert/ponytail
  path: skills/ponytail-help/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.850Z
  truncated: false
type: agent_skill
skill:
  skill_name: help
  description: >
    Quick reference for ponytail levels, skills and commands. One-shot display.
    Use for /ponytail-help, "ponytail help", "how do I use ponytail".
  folder_path: skills/ponytail-help
  extra_files: []
  pack_total_skills: 6
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: dietrichgebert-ponytail
---

# Ponytail Help
Display this reference card when invoked. One-shot, do NOT change mode,
write flag files, or persist anything.

## Levels

| Level | Trigger | What change |
|-------|---------|-------------|
| **Lite** | `/ponytail lite` | Build what was asked, name the smaller option in one line. |
| **Full** | `/ponytail` | The smallest complete change, a check where the logic needs one, and a reply that names what was skipped and any risk. Default. |
| **Ultra** | `/ponytail ultra` | Also questions the request and pushes back before building. |

Level sticks until changed or session end.

## Skills

| Skill | Trigger | What it does |
|-------|---------|--------------|
| **ponytail** | `/ponytail` | Lazy mode itself: least new code, clear replies that name skipped work and risks. |
| **ponytail-review** | `/ponytail-review` | Quality review of a diff: bugs, security, load, missing tests, speed, what to cut. Each finding says what goes wrong and how to fix it. |
| **ponytail-audit** | `/ponytail-audit` | The same quality review for the whole repo, ranked. |
| **ponytail-debt** | `/ponytail-debt` | Harvest `shortcut:` comments into a tracked ledger. |
| **ponytail-gain** | `/ponytail-gain` | Measured-impact scoreboard: less code, less cost, more speed. |
| **ponytail-help** | `/ponytail-help` | This card. |

In Codex CLI and the IDE extension, invoke skills with `$ponytail:ponytail`,
`$ponytail:ponytail-review`, or `$ponytail:ponytail-help`. Claude Code and OpenCode use the
slash-command forms above (OpenCode ships all six as slash commands).

## Deactivate

Say "stop ponytail" or "normal mode". Resume anytime with `/ponytail`.
`/ponytail off` also works.

## Band (Claude Code)

`/ponytail band` hides the band above the prompt, the same command brings it back.
`/ponytail band on` and `/ponytail band off` set it directly. The level stays.
`/ponytail band import` adds your past Claude Code sessions (cost, agent time, tokens) to the board.

## Configure Default Mode

Default mode = `full`, auto-active every session. Change it:

**Environment variable** (highest priority):
```bash
export PONYTAIL_DEFAULT_MODE=ultra
```

**Config file** (`~/.config/ponytail/config.json`, Windows: `%APPDATA%\ponytail\config.json`):
```json
{ "defaultMode": "lite" }
```

Set `"off"` to disable auto-activation on session start, activate manually
with `/ponytail` when wanted.

Resolution: env var > config file > `full`.

## Update

Enable auto-update once: open `/plugin`, go to Marketplaces, pick ponytail, Enable auto-update. Claude Code then pulls new versions at startup (run `/reload-plugins` when it prompts). Manual refresh: `/plugin marketplace update ponytail` then `/reload-plugins`.

If `/plugin` is not recognized, your Claude Code is out of date. Update it (`npm install -g @anthropic-ai/claude-code@latest`, or `brew upgrade claude-code`) and restart. Other hosts use their own update flow.

## More

Full docs + examples: https://github.com/DietrichGebert/ponytail
