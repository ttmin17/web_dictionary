---
slug: davepoon-buildwithclaude-plugins-all-skills-skills-tracedocs
name: tracedocs
tagline: Turn any codebase into evidence-grounded Markdown docs plus a
  machine-readable index.json. Every claim cites its source; never invents
  deployment step
summary: "Full skill, references, templates, and a validated sample output:
  https://github.com/wxggzz/tracedocs (MIT)."
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
  subpath: plugins/all-skills/skills/tracedocs
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
  path: plugins/all-skills/skills/tracedocs/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.598Z
  truncated: false
type: agent_skill
skill:
  skill_name: tracedocs
  description: Turn any codebase into evidence-grounded Markdown docs plus a
    machine-readable index.json. Every claim cites its source; never invents
    deployment steps.
  folder_path: plugins/all-skills/skills/tracedocs
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# tracedocs
Turn any codebase into an evidence-grounded documentation package (overview,
operation, deployment, learning, architecture, API/data, troubleshooting,
maintenance) plus a machine-readable `index.json` for AI agents. Every
operational/deployment claim cites a source file and a confidence label
(Verified / Inferred / Unknown / Needs confirmation); it never invents
deployment steps and records gaps instead.

Full skill, references, templates, and a validated sample output:
https://github.com/wxggzz/tracedocs (MIT).

## When to Use This Skill

- Onboarding to, or documenting, an unfamiliar codebase
- Producing durable, in-repo docs for operation, deployment, and maintenance
- Preparing an AI-agent-ready knowledge handoff (with `index.json`)
- Turning a repo into a study guide whose claims are traceable to source

## What This Skill Does

1. Analyzes the codebase (stack, scripts, entry points, env-var names, deploy
   signals, tests).
2. Builds an evidence map (source map, assumptions, generation log) with
   confidence labels.
3. Writes the Markdown manuals and an `index.json` manifest; never invents
   deployment steps.
4. Runs a quality check (paths exist, commands sourced, no secret values, gaps
   documented).

## How to Use

### Basic Usage

```
Use tracedocs to generate evidence-grounded study docs for this repository. Write the output to study-docs/.
```

## Example

**User**: "Document ./my-app with tracedocs"

The skill scans the repo and writes a `study-docs/` package (00-10 manuals +
`index.json` + `_evidence/`), citing each operational claim's source and
labelling its confidence - and explicitly noting anything it cannot verify
(for example, "no deployment configuration found in the repo").
