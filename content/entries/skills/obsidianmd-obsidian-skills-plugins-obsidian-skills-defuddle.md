---
slug: obsidianmd-obsidian-skills-plugins-obsidian-skills-defuddle
name: defuddle
tagline: Extract clean Markdown from HTML pages with Defuddle CLI.
summary: Check availability with defuddle --help. If it is missing, explain the
  dependency and offer installation with npm install -g defuddle. Do not claim
  extraction succeeded if the tool is unavailable or returns an error.
categories:
  - productivity-ops
tags:
  - agents
  - agentskills
  - bases
  - chatgpt
status: active
quality_percentile: 58
selection_reason: quality_percentile
first_seen: 2026-11-16
last_updated: 2026-11-16T09:17:13.266Z
source:
  kind: github_repo
  repo: obsidianmd/obsidian-skills
  subpath: plugins/obsidian/skills/defuddle
  official_vendor: false
  license: MIT
signals:
  stars: 52878
  last_commit: 2026-11-11T16:12:33Z
  stars_delta_7d: 1105
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 52878
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: obsidianmd/obsidian-skills
  path: plugins/obsidian/skills/defuddle/SKILL.md
  branch: main
  fetched_at: 2026-11-16T09:15:51.187Z
  truncated: false
type: agent_skill
skill:
  skill_name: defuddle
  description: Extract clean Markdown from HTML pages with Defuddle CLI.
  folder_path: plugins/obsidian/skills/defuddle
  extra_files: []
  pack_total_skills: 7
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: obsidianmd-obsidian-skills
---

# Defuddle
Use Defuddle CLI when the user wants clean Markdown extracted from a web page. It removes navigation, ads, and other page clutter.

Check availability with `defuddle --help`. If it is missing, explain the dependency and offer installation with `npm install -g defuddle`. Do not claim extraction succeeded if the tool is unavailable or returns an error.

## Usage

Always use `--md` for markdown output:

```bash
defuddle parse <url> --md
```

Save to file:

```bash
defuddle parse <url> --md -o content.md
```

Extract specific metadata:

```bash
defuddle parse <url> -p title
defuddle parse <url> -p description
defuddle parse <url> -p domain
```

## Output formats

| Flag | Format |
|------|--------|
| `--md` | Markdown (default choice) |
| `--json` | JSON with both HTML and markdown |
| (none) | HTML |
| `-p <name>` | Specific metadata property |
