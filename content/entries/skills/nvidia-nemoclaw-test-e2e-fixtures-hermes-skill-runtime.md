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
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: NVIDIA/NemoClaw
  subpath: test/e2e/fixtures/hermes-skill-runtime
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 22915
  last_commit: 2026-11-02T08:59:59Z
  stars_delta_7d: 71
  stars_growth_pct: 0.3
  trending_score: 71.22
  velocity_source: snapshot_delta
  sparkline_4w:
    - 22767
    - 22844
    - 22915
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: NVIDIA/NemoClaw
  path: test/e2e/fixtures/hermes-skill-runtime/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:59.007Z
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
