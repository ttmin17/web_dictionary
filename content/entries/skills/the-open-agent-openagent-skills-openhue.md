---
slug: the-open-agent-openagent-skills-openhue
name: openhue
tagline: Control Philips Hue lights and scenes via the OpenHue CLI.
summary: '- "Turn on/off the lights" - "Dim the living room lights" - "Set a
  scene" or "movie mode" - Controlling specific Hue rooms or zones - Adjusting
  brightness, color, or color temperature'
categories:
  - agent-frameworks
tags:
  - agentic
  - agentic-ai
  - agi
  - chatbot
status: active
quality_percentile: 87
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: the-open-agent/openagent
  subpath: skills/openhue
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 5712
  last_commit: 2026-10-25T13:57:48Z
  stars_delta_7d: 14
  stars_growth_pct: 0.2
  trending_score: 14.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 5688
    - 5698
    - 5712
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: the-open-agent/openagent
  path: skills/openhue/SKILL.md
  branch: master
  fetched_at: 2026-10-26T07:38:10.203Z
  truncated: false
type: agent_skill
skill:
  skill_name: openhue
  description: Control Philips Hue lights and scenes via the OpenHue CLI.
  folder_path: skills/openhue
  extra_files: []
  pack_total_skills: 54
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: the-open-agent-openagent
---

# OpenHue CLI
Use `openhue` to control Philips Hue lights and scenes via a Hue Bridge.

## When to Use

✅ **USE this skill when:**

- "Turn on/off the lights"
- "Dim the living room lights"
- "Set a scene" or "movie mode"
- Controlling specific Hue rooms or zones
- Adjusting brightness, color, or color temperature

## When NOT to Use

❌ **DON'T use this skill when:**

- Non-Hue smart devices (other brands) → not supported
- HomeKit scenes or Shortcuts → use Apple's ecosystem
- TV or entertainment system control
- Thermostat or HVAC
- Smart plugs (unless Hue smart plugs)

## Common Commands

### List Resources

```bash
openhue get light       # List all lights
openhue get room        # List all rooms
openhue get scene       # List all scenes
```

### Control Lights

```bash
# Turn on/off
openhue set light "Bedroom Lamp" --on
openhue set light "Bedroom Lamp" --off

# Brightness (0-100)
openhue set light "Bedroom Lamp" --on --brightness 50

# Color temperature (warm to cool: 153-500 mirek)
openhue set light "Bedroom Lamp" --on --temperature 300

# Color (by name or hex)
openhue set light "Bedroom Lamp" --on --color red
openhue set light "Bedroom Lamp" --on --rgb "#FF5500"
```

### Control Rooms

```bash
# Turn off entire room
openhue set room "Bedroom" --off

# Set room brightness
openhue set room "Bedroom" --on --brightness 30
```

### Scenes

```bash
# Activate scene
openhue set scene "Relax" --room "Bedroom"
openhue set scene "Concentrate" --room "Office"
```

## Quick Presets

```bash
# Bedtime (dim warm)
openhue set room "Bedroom" --on --brightness 20 --temperature 450

# Work mode (bright cool)
openhue set room "Office" --on --brightness 100 --temperature 250

# Movie mode (dim)
openhue set room "Living Room" --on --brightness 10
```

## Notes

- Bridge must be on local network
- First run requires button press on Hue bridge to pair
- Colors only work on color-capable bulbs (not white-only)
