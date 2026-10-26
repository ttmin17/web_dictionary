---
slug: anthropics-claude-plugins-official-plugins-cwc-makers-skills-cardputer-buddy
name: cardputer-buddy
tagline: "Iterate on the Cardputer-Adv MicroPython app bundle (Claude Buddy,
  Snake, Hello) after the device is already provisioned via m5-onboard. Use when
  the "
summary: main.py scans /flash/apps/ at boot and lists every .py as a menu entry.
  Drop a file into buddy/device/apps/, push it, and it appears on next boot.
categories:
  - other
tags:
  - claude-code
  - skills
status: active
quality_percentile: 98
selection_reason: official_vendor
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: anthropics/claude-plugins-official
  subpath: plugins/cwc-makers/skills/cardputer-buddy
  official_vendor: true
  license: Apache-2.0
signals:
  stars: 44625
  last_commit: 2026-10-25T07:34:42Z
  stars_delta_7d: 1711
  stars_growth_pct: 4
  trending_score: 1779.22
  velocity_source: snapshot_delta
  sparkline_4w:
    - 37497
    - 37789
    - 42914
    - 44625
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: anthropics/claude-plugins-official
  path: plugins/cwc-makers/skills/cardputer-buddy/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:05.836Z
  truncated: false
type: agent_skill
skill:
  skill_name: cardputer-buddy
  description: Iterate on the Cardputer-Adv MicroPython app bundle (Claude Buddy,
    Snake, Hello) after the device is already provisioned via m5-onboard. Use
    when the user wants to add a new app, push a single changed .py without
    re-flashing, watch device serial logs, or run a one-shot REPL command.
    Trigger on "add an app", "push to the cardputer", "tail the device", "run on
    the device", or follow-up work after /maker-setup.
  folder_path: plugins/cwc-makers/skills/cardputer-buddy
  extra_files: []
  pack_total_skills: 29
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: anthropics-claude-plugins-official
---

# Cardputer Buddy app bundle
The `buddy/` directory in the local `build-with-claude` clone is the MicroPython payload that `m5-onboard` installs onto `/flash/`. Work inside that clone.

## Device layout

```
/flash/
├── main.py              launcher menu (replaces UIFlow's boot flow)
├── buddy_*.py           shared libs (BLE, UI, state, protocol, chars)
├── burst_frames.py      sprite frames
└── apps/
    ├── claude_buddy.py  BLE client → Claude Desktop's Hardware Buddy
    ├── hello_cardputer.py
    └── snake.py
```

`main.py` scans `/flash/apps/` at boot and lists every `.py` as a menu entry. Drop a file into `buddy/device/apps/`, push it, and it appears on next boot.

## Adding an app

Crib from `buddy/device/apps/hello_cardputer.py` — smallest example of keyboard polling, font, and exit conventions. Then push without re-flashing:

```bash
python3 onboard/scripts/install_apps.py --port <PORT> --src buddy
```

`<PORT>` is whatever `detect.py` reported last run (e.g. `/dev/cu.usbmodem1101`, `/dev/ttyACM0`, `COM3`).

## Dev loop tooling (`buddy/scripts/`)

```bash
# Push a subset of files over USB-serial
python3 buddy/scripts/push.py --port <PORT> --files apps/snake.py

# Watch device logs
python3 buddy/scripts/tail_serial.py --port <PORT>

# One-shot REPL exec
python3 buddy/scripts/repl_run.py --port <PORT> --script "import os; print(os.listdir('/flash'))"
```
