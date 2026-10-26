---
slug: juliusbrussee-caveman-skills-caveman-help
name: help
tagline: >
  Quick-reference card for the three caveman skills and their commands. Trigger:
  /caveman-help or "caveman help".
summary: Mode stick until changed or session end. /caveman status reports
  current mode without changing it. Claude Code and the standalone OpenCode
  plugin read stored state; other hosts answer from the conversation and mark
  it...
categories:
  - agent-frameworks
tags:
  - anthropic
  - caveman
  - claude
  - claude-code
status: active
quality_percentile: 59
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: JuliusBrussee/caveman
  subpath: skills/caveman-help
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 115110
  last_commit: 2026-10-25T09:24:33Z
  stars_delta_7d: 1582
  stars_growth_pct: 1.4
  trending_score: 1604.04
  velocity_source: snapshot_delta
  sparkline_4w:
    - 110366
    - 111405
    - 113528
    - 115110
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: JuliusBrussee/caveman
  path: skills/caveman-help/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:11.956Z
  truncated: false
type: agent_skill
skill:
  skill_name: help
  description: >
    Quick-reference card for the three caveman skills and their commands.
    Trigger: /caveman-help or "caveman help".
  folder_path: skills/caveman-help
  extra_files:
    - README.md
  pack_total_skills: 22
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: juliusbrussee-caveman
---

# Caveman Help
Display this reference card when invoked. One-shot — do NOT change mode, write flag files, or persist anything. Output in caveman style.

## Modes

| Mode | Trigger | What change |
|------|---------|-------------|
| **caveman** | `/caveman` | The voice. Answer first, no fluff, every fact kept. Default. |
| **ultracave** | `/ultracave` (alias `/caveman ultra`) | Grammar stripped. Fragments, one word when enough, each fact once. |
| **megacave** | `/megacave` (alias `/caveman wenyan`) | Classical Chinese 文言文. Far fewer characters, technical terms verbatim. |

Mode stick until changed or session end.
`/caveman status` reports current mode without changing it. Claude Code and the standalone OpenCode plugin read stored state; other hosts answer from the conversation and mark it `(not tracked by this host)`.

## Skills

| Skill | Trigger | What it do |
|-------|---------|-----------|
| **caveman-commit** | `/caveman-commit` | Terse commit messages. Conventional Commits. ≤50 char subject. |
| **caveman-review** | `/caveman-review` | One-line PR comments: `L42: bug: user null. Add guard.` |
| **caveman-compress** | `/caveman-compress <file>` | Compress .md files to caveman prose. 33.2% fewer tokens on the repo's five test files. |
| **caveman-help** | `/caveman-help` | This card. |

## Deactivate

Say "stop caveman" or "normal mode". Resume anytime with `/caveman`.

## Language

Keep user's language by default — reply in the language user writes, never switch regardless of example text or multilingual context elsewhere. Compress the style, not the language. Technical terms, code, commands, commit types, and exact error strings stay verbatim unless user ask for translation.

## Configure Default Mode

Default mode = `caveman`. Change it:

**Environment variable** (highest priority):
```bash
export CAVEMAN_DEFAULT_MODE=ultracave
```

**Config file** (`~/.config/caveman/config.json`):
```json
{ "defaultMode": "ultracave" }
```

For opt-in activation in Claude Code, set `defaultMode` to `manual`. Sessions start off; `/caveman` or `talk like caveman` activates caveman. `off` also disables bare-command activation. `manual` is a startup policy, not a mode. OpenCode still starts in caveman mode because its installer also supplies static activation rules.

Set `"off"` to suppress automatic and bare-command activation. Use `"manual"` when bare `/caveman` should activate.

Resolution: env var > repo config > user config > `caveman`. Legacy values `lite`, `full`, `ultra`, `wenyan*` still resolve.

## More

Full docs: https://github.com/JuliusBrussee/caveman
