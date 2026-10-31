---
slug: dstackai-dstack-skills-dstack-presets
name: dstack-presets
tagline: "Create and manage dstack presets: a toolkit that streamlines model
  inference optimization with agents, and a portable preset format. Use together
  with"
summary: "Presets offer two things: a toolkit that streamlines model inference
  optimization using agents, and a portable format that deploys the final preset
  to any cloud, Kubernetes cluster, or bare-metal fleet. A preset holds..."
categories:
  - cloud-infra
status: active
quality_percentile: 44
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: dstackai/dstack
  subpath: skills/dstack-presets
  official_vendor: false
  license: MPL-2.0
signals:
  stars: 2279
  last_commit: 2026-10-13T15:12:59Z
  stars_delta_7d: 7
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 2279
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: dstackai/dstack
  path: skills/dstack-presets/SKILL.md
  branch: master
  fetched_at: 2026-10-14T14:55:19.674Z
  truncated: false
type: agent_skill
skill:
  skill_name: dstack-presets
  description: >
    Create and manage dstack presets: a toolkit that streamlines model inference
    optimization with agents, and a portable preset format. Use together with
    the dstack skill, and only when the user explicitly asks to create a preset
    or manage existing presets, not for deploying or serving a model.
  folder_path: skills/dstack-presets
  extra_files: []
tags:
  - kubernetes
---

# dstack Presets
Use `/dstack` for CLI commands, YAML fields, apply behavior, fleets, and other
dstack syntax. This skill covers creating and managing presets.

## Overview

Presets offer two things: a toolkit that streamlines model inference optimization using agents, and a portable format that deploys the final preset to any cloud, Kubernetes cluster, or bare-metal fleet. A preset holds the serving configuration that produced the result, the benchmark it reached, and the exact hardware it was verified on.

Presets are used for three kinds of work: finding an optimized baseline, optimizing through patching source code, and supporting new hardware.

**When to use this skill:**
- The user explicitly asks to create a preset, or to optimize model inference via a preset
- Managing already created presets: watching sessions, listing, exporting, and deleting them via `dstack preset` commands

**When NOT to use this skill:**
- Deploying or serving a model: use a service instead (see the `dstack` skill)

## How to use presets

Follow the [presets documentation](https://dstack.ai/docs/concepts/presets.md).

[Configuration reference](https://dstack.ai/docs/reference/dstack.yml/preset.md) | [CLI reference](https://dstack.ai/docs/reference/cli/dstack/preset.md)
