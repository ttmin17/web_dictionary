---
slug: pacifio-atlas-vendor-atlas-engine-skills-src-assets-samples-skill-installer
name: installer
tagline: Agent skill from pacifio/atlas
summary: "--- name: skill-installer description: Install Atlas Agent skills into
  $ATLASAGENTHOME/skills from a curated list or a GitHub repo path. Use when a
  user asks to list installable skills, install a curated skill, or ins..."
categories:
  - agent-frameworks
tags:
  - ai-coding-assistant
  - claude-code
  - codex
  - coding-agents
status: active
quality_percentile: 71
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: pacifio/atlas
  subpath: vendor/atlas-engine/skills/src/assets/samples/skill-installer
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 9561
  last_commit: 2026-11-02T05:01:45Z
  stars_delta_7d: 18
  stars_growth_pct: 0.2
  trending_score: 18.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 9593
    - 9622
    - 9543
    - 9561
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: pacifio/atlas
  path: vendor/atlas-engine/skills/src/assets/samples/skill-installer/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:31.062Z
  truncated: false
type: agent_skill
skill:
  skill_name: installer
  description: Agent skill from pacifio/atlas
  folder_path: vendor/atlas-engine/skills/src/assets/samples/skill-installer
  extra_files:
    - LICENSE.txt
    - agents/openai.yaml
    - assets/skill-installer-small.svg
    - assets/skill-installer.png
    - scripts/github_utils.py
    - scripts/install-skill-from-github.py
    - scripts/list-skills.py
  pack_total_skills: 6
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: pacifio-atlas
---

<!-- Modified by Atlas from upstream OpenAI Codex (Apache-2.0). See CONTEXT.md. -->
---
name: skill-installer
description: Install Atlas Agent skills into $ATLAS_AGENT_HOME/skills from a curated list or a GitHub repo path. Use when a user asks to list installable skills, install a curated skill, or install a skill from another repo (including private repos).
metadata:
  short-description: Install curated skills from openai/skills or other repos
---

# Skill Installer

Helps install skills. By default these are from https://github.com/openai/skills/tree/main/skills/.curated, but users can also provide other locations. Experimental skills live in https://github.com/openai/skills/tree/main/skills/.experimental and can be installed the same way.

Use the helper scripts based on the task:
- List skills when the user asks what is available, or if the user uses this skill without specifying what to do. Default listing is `.curated`, but you can pass `--path skills/.experimental` when they ask about experimental skills.
- Install from the curated list when the user provides a skill name.
- Install from another repo when the user provides a GitHub repo/path (including private repos).

Install skills with the helper scripts.

## Communication

When listing skills, output approximately as follows, depending on the context of the user's request. If they ask about experimental skills, list from `.experimental` instead of `.curated` and label the source accordingly:
"""
Skills from {repo}:
1. skill-1
2. skill-2 (already installed)
3. ...
Which ones would you like installed?
"""

After installing a skill, tell the user it will be available on their next turn.

## Scripts

All of these scripts use network, so when running in the sandbox, request escalation when running them.

- `scripts/list-skills.py` (prints skills list with installed annotations)
- `scripts/list-skills.py --format json`
- Example (experimental list): `scripts/list-skills.py --path skills/.experimental`
- `scripts/install-skill-from-github.py --repo <owner>/<repo> --path <path/to/skill> [<path/to/skill> ...]`
- `scripts/install-skill-from-github.py --url https://github.com/<owner>/<repo>/tree/<ref>/<path>`
- Example (experimental skill): `scripts/install-skill-from-github.py --repo openai/skills --path skills/.experimental/<skill-name>`

## Behavior and Options

- Defaults to direct download for public GitHub repos.
- If download fails with auth/permission errors, falls back to git sparse checkout.
- Aborts if the destination skill directory already exists.
- Installs into `$ATLAS_AGENT_HOME/skills/<skill-name>` (defaults to `~/.atlas_engine/skills`).
- Multiple `--path` values install multiple skills in one run, each named from the path basename unless `--name` is supplied.
- Options: `--ref <ref>` (default `main`), `--dest <path>`, `--method auto|download|git`.

## Notes

- Curated listing is fetched from `https://github.com/openai/skills/tree/main/skills/.curated` via the GitHub API. If it is unavailable, explain the error and exit.
- Private GitHub repos can be accessed via existing git credentials or optional `GITHUB_TOKEN`/`GH_TOKEN` for download.
- Git fallback tries HTTPS first, then SSH.
- The skills at https://github.com/openai/skills/tree/main/skills/.system are preinstalled, so no need to help users install those. If they ask, just explain this. If they insist, you can download and overwrite.
- Installed annotations come from `$ATLAS_AGENT_HOME/skills`.
