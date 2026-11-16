---
slug: nvidia-nemoclaw-test-e2e-fixtures-hermes-skill-runtime
name: nc-hermes-e2e
tagline: Verifies Hermes skill discovery and fresh-session execution
summary: When this skill is selected, do not use tools. Reply with exactly PONG
  and nothing else.
categories:
  - agent-frameworks
tags:
  - ai-agents
  - deep-agents
  - hermes
  - nvidia
status: active
quality_percentile: 78
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-16T09:17:13.266Z
source:
  kind: github_repo
  repo: NVIDIA/NemoClaw
  subpath: test/e2e/fixtures/hermes-skill-runtime
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 23034
  last_commit: 2026-11-16T08:58:45Z
  stars_delta_7d: 40
  stars_growth_pct: 0.2
  trending_score: 40.07
  velocity_source: snapshot_delta
  sparkline_4w:
    - 22844
    - 22952
    - 22994
    - 23034
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: NVIDIA/NemoClaw
  path: test/e2e/fixtures/hermes-skill-runtime/SKILL.md
  branch: main
  fetched_at: 2026-11-16T09:16:44.086Z
  truncated: false
type: agent_skill
skill:
  skill_name: nc-hermes-e2e
  description: Verifies Hermes skill discovery and fresh-session execution
  folder_path: test/e2e/fixtures/hermes-skill-runtime
  extra_files: []
  pack_total_skills: 2
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: nvidia-nemoclaw
---

<!-- SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved. -->
<!-- SPDX-License-Identifier: Apache-2.0 -->

# Hermes skill runtime verification

When this skill is selected, do not use tools. Reply with exactly `PONG` and nothing else.

Test inference control: `NEMOCLAW_E2E_FAKE_RESPONSE=PONG`

The following non-secret test canary must remain in the model-visible skill content:
`NEMOCLAW_E2E_REQUEST_CANARY_K9X2`

Do not include the canary in your response.
