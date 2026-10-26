---
slug: stablyai-orca-skills-orca-emulator-android
name: emulator-android
tagline: Android device and emulator control from inside Orca over adb, with the
  live device view in Orca's emulator pane. Use when driving an adb-connected em
summary: "Choose the executable once and reuse it for every later command:"
categories:
  - agent-frameworks
tags:
  - ade
  - agent-ide
  - ai-agents
  - automation
status: active
quality_percentile: 67
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: stablyai/orca
  subpath: skills/orca-emulator-android
  official_vendor: false
  license: MIT
signals:
  stars: 106220
  last_commit: 2026-10-26T07:33:33Z
  stars_delta_7d: 9043
  stars_growth_pct: 9.3
  trending_score: 9884.51
  velocity_source: snapshot_delta
  sparkline_4w:
    - 86961
    - 91386
    - 97177
    - 106220
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: stablyai/orca
  path: skills/orca-emulator-android/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:09.714Z
  truncated: false
type: agent_skill
skill:
  skill_name: emulator-android
  description: "Android device and emulator control from inside Orca over adb,
    with the live device view in Orca's emulator pane. Use when driving an
    adb-connected emulator or phone on Windows, Linux, or macOS: booting AVDs,
    taps, swipes, typing, hardware buttons, rotation, app install and launch,
    runtime permissions, the accessibility tree, and logcat. For an iOS
    simulator use the iOS emulator skill; build the APK with Gradle first."
  folder_path: skills/orca-emulator-android
  extra_files: []
  pack_total_skills: 11
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: stablyai-orca
---

# Orca Emulator (Android)
This discovery stub loads the version-matched guide from the Orca executable used for this session.

## Resolve the CLI for this session

Choose the executable once and reuse it for every later command:

- If the `ORCA_CLI_COMMAND` environment variable is set, use its value. Orca exports this
  for managed WSL sessions.
- Otherwise, in a dev checkout whose session exposes `ORCA_DEV_REPO_ROOT`, use `orca-dev`.
- Otherwise, on Linux outside an Orca-managed terminal, use `orca-ide`. Never run bare
  `orca` there — outside Orca's terminals it normally resolves to the
  GNOME Orca screen reader (`/usr/bin/orca`) and starts speech on the user's machine.
- Otherwise, use `orca`.

Below, `ORCA` is a placeholder for the executable you resolved. Substitute it before
running anything; do not create a shell variable or run `ORCA` literally. This works the
same way in POSIX shells, PowerShell, and cmd.exe.

If the selected executable cannot run, report its exact error and stop. Do not fall through
to another executable, which could silently target a different Orca build.

## Load the version-matched guide before running Orca commands

```text
ORCA skills get orca-emulator-android
```

Prefer `--json`. Use the selected executable's `--help` for commands or flags the guide does
not cover. If a command reports that Orca is not running, start it with `ORCA open --json`
and retry. If it fails with `runtime_access_denied`, your sandbox blocked the connection:
re-run it with escalated permissions, and do not run `ORCA open` or restart Orca. If
`skills get` is unknown, explain that updating Orca restores the guide; use `--help` for
read-only discovery and do not guess unsupported commands.
