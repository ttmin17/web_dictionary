---
slug: ruvnet-ruview-plugins-ruview-skills-ruview-quickstart
name: quickstart
tagline: "Onboarding and first-run for RuView (WiFi-DensePose) — Docker demo
  with simulated data, repo build, and the fastest path to a live sensing
  dashboard. "
summary: Use this to demo the dashboard, explore the API, or develop UI without
  a sensor.
categories:
  - productivity-ops
tags:
  - claude
  - claude-code
  - esp32
  - firmware
status: active
quality_percentile: 95
selection_reason: quality_percentile
first_seen: 2026-11-09
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: ruvnet/RuView
  subpath: plugins/ruview/skills/ruview-quickstart
  official_vendor: false
  license: MIT
signals:
  stars: 103119
  last_commit: 2026-11-09T06:22:16Z
  stars_delta_7d: 1386
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 103119
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: ruvnet/RuView
  path: plugins/ruview/skills/ruview-quickstart/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:23.832Z
  truncated: false
type: agent_skill
skill:
  skill_name: quickstart
  description: Onboarding and first-run for RuView (WiFi-DensePose) — Docker demo
    with simulated data, repo build, and the fastest path to a live sensing
    dashboard. Use when someone is new to RuView or wants the shortest path to
    "it works on my machine".
  folder_path: plugins/ruview/skills/ruview-quickstart
  extra_files: []
  pack_total_skills: 10
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruview
---

# RuView Quickstart
Get a newcomer from zero to a running RuView sensing dashboard. Three tiers, pick the one that matches the hardware on hand.

## Tier 0 — Docker, no hardware (2 minutes)

```bash
docker pull ruvnet/wifi-densepose:latest
docker run -p 3000:3000 ruvnet/wifi-densepose:latest
# open http://localhost:3000  — simulated CSI, full UI
```

Use this to demo the dashboard, explore the API, or develop UI without a sensor.

## Tier 1 — Build the repo from source

```bash
# Rust workspace (1,400+ tests, ~2 min)
cd v2
cargo test --workspace --no-default-features

# Single-crate sanity check (no GPU)
cargo check -p wifi-densepose-train --no-default-features

# Python proof (deterministic SHA-256 pipeline check)
cd ..
python archive/v1/data/proof/verify.py   # must print VERDICT: PASS
```

If `verify.py` fails on a hash mismatch after a numpy/scipy bump:
```bash
python archive/v1/data/proof/verify.py --generate-hash
python archive/v1/data/proof/verify.py
```

## Tier 2 — Live sensing with an ESP32-S3 ($9)

This is the real thing. Hand off to the `ruview-hardware-setup` skill for the flash/provision/monitor loop, then:

```bash
# Lightweight sensing server (consumes the ESP32 UDP CSI stream)
cd v2
cargo run -p wifi-densepose-sensing-server
# Live RF room scan / SNN learning helpers:
node ../scripts/rf-scan.js --port 5006
node ../scripts/snn-csi-processor.js --port 5006
```

## What to know before you start

- **ESP32-C3 and the original ESP32 are NOT supported** — single-core, can't run the CSI DSP pipeline. Use ESP32-S3 (8MB or 4MB) or ESP32-C6.
- A **single ESP32** has limited spatial resolution — 2+ nodes (or add a Cognitum Seed) for good results.
- Camera-free pose accuracy is limited (~84s to train, modest PCK). For 92.9% PCK@20 use camera-supervised training (see `ruview-model-training` skill, ADR-079).
- No cloud, no internet, no cameras required — everything runs on edge hardware.

## Next steps to suggest

| Goal | Skill / command |
|------|-----------------|
| Flash & provision an ESP32 node | `ruview-hardware-setup` · `/ruview-flash` · `/ruview-provision` |
| Tune channels / MAC filter / edge modules | `ruview-configure` |
| Run a sensing application (presence, vitals, pose, sleep, MAT) | `ruview-applications` · `/ruview-app` |
| Train a pose / sensing model | `ruview-model-training` · `/ruview-train` |
| Multistatic mesh, tomography, cross-viewpoint fusion | `ruview-advanced-sensing` · `/ruview-advanced` |
| Verify the build + generate a witness bundle | `ruview-verify` · `/ruview-verify` |

## Reference

- `README.md` — feature matrix, hardware table, install options
- `docs/user-guide.md`, `docs/wifi-mat-user-guide.md`, `docs/build-guide.md`, `docs/TROUBLESHOOTING.md`
- `docs/tutorials/`, `examples/` — runnable examples (environment, medical, sleep, stress, `ruview_live.py`)
