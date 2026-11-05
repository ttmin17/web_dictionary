---
slug: zeronsh-zeron
name: zeron
tagline: A native control plane for Claude Code, Codex, Cursor, Devin and other
  coding agents.
summary: "- macOS — zeron--macos-arm64.dmg - Windows —
  zeron--windows-x8664-setup.exe - Linux — zeron--linux-.tar.gz, then run its
  install.sh"
categories:
  - coding-agents
tags:
  - claude-code
  - codex
  - coding-agent
  - cursor
status: active
quality_percentile: 50
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: zeronsh/zeron
  official_vendor: false
  license: MIT
signals:
  stars: 3454
  last_commit: 2026-11-05T12:29:26Z
  stars_delta_7d: 92
  stars_growth_pct: 2.7
  trending_score: 94.52
  rank_current: 75
  rank_delta: -4
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3301
    - 3362
    - 3454
language: en
needs_keys: false
prerequisites:
  - rust
readme_source:
  repo: zeronsh/zeron
  path: README.md
  branch: main
  fetched_at: 2026-11-05T13:13:37.579Z
  truncated: false
type: agent_tool
tool:
  subcategory: coding_agent
  install_command: cargo install --git https://github.com/zeronsh/zeron.git
  runtime: rust
  execution_mode: local
  has_mcp_support: false
---

# Zeron
Control your coding agents (Claude Code, Codex, Cursor, Devin, Grok, Hermes, Pi, Antigravity) locally by default, with optional multi-device sync.

*English | [简体中文](https://github.com/zeronsh/zeron/blob/main/README.zh-CN.md) | [한국어](https://github.com/zeronsh/zeron/blob/main/README.ko.md) | [日本語](https://github.com/zeronsh/zeron/blob/main/README.ja.md) | [Español](https://github.com/zeronsh/zeron/blob/main/README.es.md)*

![Zeron desktop app](https://raw.githubusercontent.com/zeronsh/zeron/main/docs/media/readme/app-screenshot.jpg)

## Desktop app

Download the latest release for your platform from [GitHub Releases](https://github.com/zeronsh/zeron/releases/latest):

- **macOS** — `zeron-<version>-macos-arm64.dmg`
- **Windows** — `zeron-<version>-windows-x86_64-setup.exe`
- **Linux** — `zeron-<version>-linux-<arch>.tar.gz`, then run its `install.sh`

No account or network connection is needed; sessions stay on your device. The app updates itself.

## Headless (CLI)

For servers and other machines without a display, such as a VPS that keeps agents running after you close your laptop. Linux only:

```bash
curl -fsSL https://zeron.sh/install.sh | sh
zeron status
```

The installer starts the engine as a background service that survives reboots.

```bash
zeron status      # local/synced mode and engine status
zeron update      # update to the latest release
zeron daemon start|stop|restart|status
```

## Multi-device sync (optional)

Sign in to start an agent on one device and follow or drive it from another:

```bash
zeron daemon stop
zeron login        # or: zeron logout to return to local-only
zeron daemon start
```

Devices signed in to the same account can read and write each other's workspace files, so only sign in devices you trust. Existing local sessions are never uploaded.

## Sponsors

Thank you to [The Context Company](https://www.thecontextcompany.com/) for sponsoring Zeron. You can help fund Zeron's development too by [becoming a sponsor on GitHub](https://github.com/sponsors/zeronsh).

---

Developing or curious how it works? [Ask DeepWiki](https://deepwiki.com/zeronsh/zeron) or check out [ARCHITECTURE.md](https://github.com/zeronsh/zeron/blob/main/ARCHITECTURE.md).

Licensed under the [MIT License](https://github.com/zeronsh/zeron/blob/main/LICENSE).
