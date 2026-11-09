---
slug: ruvnet-ruview-plugins-ruview-skills-ruview-mmwave
name: mmwave
tagline: Set up and run RuView mmWave / FMCW radar sensing — ESP32-C6 + Seeed
  MR60BHA2 (60 GHz, heart rate / breathing rate / presence) and HLK-LD2410 (24
  GHz,
summary: The C6 is RISC-V and can run the radar pipeline; it is not a WiFi-CSI
  node (use an ESP32-S3 for CSI). LD2410 is a UART module wired to a host or to
  the C6.
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
  subpath: plugins/ruview/skills/ruview-mmwave
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
  path: plugins/ruview/skills/ruview-mmwave/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:23.832Z
  truncated: false
type: agent_skill
skill:
  skill_name: mmwave
  description: Set up and run RuView mmWave / FMCW radar sensing — ESP32-C6 +
    Seeed MR60BHA2 (60 GHz, heart rate / breathing rate / presence) and
    HLK-LD2410 (24 GHz, presence + distance), plus mmWave↔WiFi-CSI sensor fusion
    (48-byte fused vitals, MR60BHA2/LD2410 auto-detect, v0.5.0+). Use when the
    deployment includes a millimetre-wave radar alongside or instead of WiFi
    CSI.
  folder_path: plugins/ruview/skills/ruview-mmwave
  extra_files: []
  pack_total_skills: 10
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruview
---

# RuView mmWave / FMCW Radar
The radio side-channel: 60 GHz and 24 GHz FMCW radar, standalone and fused with WiFi CSI.

## Hardware

| Device | Port | Band | Provides | ~Cost |
|--------|------|------|----------|-------|
| ESP32-C6 + Seeed MR60BHA2 | COM4 (typical) | 60 GHz FMCW | Heart rate, breathing rate, presence | ~$15 |
| HLK-LD2410 | — | 24 GHz FMCW | Presence + distance (gated zones) | ~$3 |

The C6 is RISC-V and can run the radar pipeline; it is **not** a WiFi-CSI node (use an ESP32-S3 for CSI). LD2410 is a UART module wired to a host or to the C6.

## 1. Firmware with mmWave fusion (v0.5.0+)

The ESP32 firmware auto-detects an attached MR60BHA2 or LD2410 and emits **48-byte fused vitals** records (CSI-derived + radar-derived, reconciled). Binary is ~12 KB larger than the CSI-only build. Build/flash as in `ruview-hardware-setup` (Windows: Python-subprocess; ESP-IDF v5.4 ≠ Git Bash). Recommended stable firmware tag: `v0.5.0-esp32` or later — see `docs/user-guide.md` release table.

```bash
# Provision the radar/fusion node (same provision.py; the firmware probes for the radar on boot)
python firmware/esp32-csi-node/provision.py --port COM8 --ssid "WiFi" --password "secret" --target-ip 192.168.1.20
# Confirm: serial monitor should report which radar was detected and start emitting fused vitals
```

## 2. mmWave ↔ WiFi-CSI fusion bridge (host side)

```bash
python scripts/mmwave_fusion_bridge.py            # bridges radar HR/BR + CSI → unified spatial model
node scripts/passive-radar.js                     # passive-radar style processing for exploration
```

The 3D point-cloud demo fuses **camera depth (MiDaS) + WiFi CSI + mmWave radar** → unified spatial model (~22 ms pipeline, 19K+ pts/frame; ADR-094). Drive it with `scripts/mmwave_fusion_bridge.py` plus the point-cloud front-end.

## 3. Standalone radar use

- **MR60BHA2 (60 GHz)** — best for contactless vitals on a (near-)stationary subject: blood pressure proxy, heart rate, breathing rate; $15 hardware, no wearable. See `examples/medical/README.md`.
- **LD2410 (24 GHz)** — best for cheap presence + coarse distance / gated zones; complements CSI presence (PIR-style fusion) for higher confidence.

## 4. When to use mmWave vs. WiFi CSI

| Situation | Prefer |
|-----------|--------|
| Contactless vitals, subject stationary, line of sight | **MR60BHA2** (cleaner HR/BR than CSI alone) |
| Cheap, robust presence / occupancy in a defined zone | **LD2410** (or LD2410 + CSI) |
| Through-wall presence / activity, no line of sight | **WiFi CSI** (mmWave doesn't penetrate walls) |
| Pose / skeletons | **WiFi CSI** (WiFlow) — mmWave doesn't do this here |
| Highest-confidence vitals | **Fusion** — 48-byte fused vitals reconcile CSI + radar |
| Volumetric 3D | **Fusion** — camera depth + CSI + mmWave point cloud |

## Reference

- Hardware tables: `README.md`, `docs/user-guide.md` (release table — v0.5.0 mmWave fusion notes, binary sizes)
- `scripts/mmwave_fusion_bridge.py`, `scripts/passive-radar.js`
- `examples/medical/README.md` (60 GHz mmWave vitals)
- ADR-094 (point-cloud GitHub Pages deployment)
- Validate firmware changes with the QEMU helpers and `ruview-verify`
