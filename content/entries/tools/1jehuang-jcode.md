---
slug: 1jehuang-jcode
name: jcode
tagline: High performance coding agent harness written in Rust, built for heavy
  multi-agent dev workflows
summary: High-performance coding agents. Run dozens of agents in parallel
  without melting your machine. More agents, less RAM, no lag.
categories:
  - coding-agents
tags:
  - ai-agent
  - ai-coding-agent
  - claude
  - cli
status: active
quality_percentile: 91
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: 1jehuang/jcode
  official_vendor: false
  license: MIT
signals:
  stars: 21407
  last_commit: 2026-11-02T08:44:17Z
  stars_delta_7d: 197
  stars_growth_pct: 0.9
  trending_score: 198.83
  rank_current: 39
  rank_delta: -2
  velocity_source: snapshot_delta
  sparkline_4w:
    - 21020
    - 21210
    - 21407
language: en
needs_keys: false
prerequisites:
  - rust
readme_source:
  repo: 1jehuang/jcode
  path: README.md
  branch: master
  fetched_at: 2026-11-02T09:07:02.606Z
  truncated: false
type: agent_tool
tool:
  subcategory: coding_agent
  install_command: cargo install --git https://github.com/1jehuang/jcode.git
  runtime: rust
  execution_mode: local
  has_mcp_support: false
---

<div align="center">

<p>
<a href="https://trendshift.io/repositories/25042?utm_source=repository-badge&amp;utm_medium=badge&amp;utm_campaign=badge-repository-25042" target="_blank" rel="noopener noreferrer"><img src="https://trendshift.io/api/badge/repositories/25042" alt="1jehuang/jcode | Trendshift" width="250" height="55"></a>
</p>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/brand/jcode-mark-inverse.svg">
  <img src="https://raw.githubusercontent.com/1jehuang/jcode/master/assets/brand/jcode-mark.svg" alt="jcode halftone donut logo" width="160">
</picture>

# jcode

<p>
  <strong>High-performance coding agents.</strong><br>
  Run dozens of agents in parallel without melting your machine. More agents, less RAM, no lag.
</p>

[![Last Commit](https://img.shields.io/github/last-commit/1jehuang/jcode/master?style=flat-square&logo=github)](https://github.com/1jehuang/jcode/commits/master)
[![GitHub Stars](https://img.shields.io/github/stars/1jehuang/jcode?style=flat-square&logo=github)](https://github.com/1jehuang/jcode/stargazers)
[![GitHub Downloads](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2F1jehuang%2Fjcode%2Fmaster%2Fdocs%2Fbadges%2Fdownloads.json&style=flat-square&logo=github)](https://github.com/1jehuang/jcode/releases)

[![Discord](https://img.shields.io/badge/Discord-Join%20Community-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.gg/nBe9vGyK9a)
[![Y Combinator](https://img.shields.io/badge/Y%20Combinator-S26-F26625?style=flat-square&logo=ycombinator&logoColor=white)](https://www.ycombinator.com/companies/jcode)
[![X (Twitter)](https://img.shields.io/badge/follow-%401jehuang-000000?style=flat-square&logo=x&logoColor=white)](https://x.com/1jehuang)

</div>

<div align="center">

  <a href="https://github.com/1jehuang/jcode/releases/download/readme-assets/jcode-performance-demo-2026-10.mp4">
    <img src="https://github.com/1jehuang/jcode/releases/download/readme-assets/jcode-performance-demo-2026-10-30fps.webp" alt="jcode performance demonstration" width="900">
  </a>

  <p><em>jcode performance demonstration (1x speed)</em></p>

<a href="https://github.com/1jehuang/jcode/releases/download/readme-assets/jcode-yc-launch.mp4">
  <img src="https://github.com/1jehuang/jcode/releases/download/readme-assets/jcode-yc-launch.webp" alt="jcode YC launch video" width="800">
</a>

</div>

<div align="center">

## Installation

</div>

```bash
# macOS & Linux
curl -fsSL https://jcode.sh/install | bash
```

<div align="center">

## Benches

</div>

### RAM per additional session (headless)

| Tool | First session | Each additional session | Comparison (additional) |
|---|---|---|---|
| **jcode** | **71.3 MB** | **~3.3 MB** | baseline |
| **OpenCode** | 637.1 MB | ~5.9 MB | **1.8× more RAM** |
| **pi** | 84.0 MB | ~79.6 MB | **24.1× more RAM** |
| **Claude Code** | 272.9 MB | ~169.3 MB | **51.3× more RAM** |
| **Codex CLI** | 398.6 MB | ~194.1 MB | **58.8× more RAM** |

[Reproduce](https://github.com/1jehuang/jcode/blob/master/scripts/bench_headless_memory.py).

### Time to first input

Time until typed text appears on screen, across 10 interactive launches.

| Tool | Time to first input | Comparison |
|---|---|---|
| **jcode** | **19.1 ms** | baseline |
| **pi** | 596.4 ms | **31.2× slower** |
| **Codex CLI** | 905.8 ms | **47.4× slower** |
| **OpenCode** | 1047.9 ms | **54.9× slower** |
| **Claude Code** | 3512.8 ms | **183.9× slower** |

Full numbers on [jcode.sh](https://jcode.sh).

<div align="center">

## Screenshots

[Browse the interactive gallery on jcode.sh](https://jcode.sh/#screenshots).

<table>
  <tr>
    <td align="center"><a href="https://jcode.sh/screenshots/inline-image-rendering.webp"><img src="https://jcode.sh/screenshots/thumbs/inline-image-rendering.webp" alt="Jcode rendering screenshots inline after reading image files" width="440" /></a><br>Inline images</td>
    <td align="center"><a href="https://jcode.sh/screenshots/resume-menu.webp"><img src="https://jcode.sh/screenshots/thumbs/resume-menu.webp" alt="Jcode resume menu with a session list and preview" width="440" /></a><br>Resume menu</td>
  </tr>
  <tr>
    <td align="center"><a href="https://jcode.sh/screenshots/latex-math-rendering.webp"><img src="https://jcode.sh/screenshots/thumbs/latex-math-rendering.webp" alt="Jcode rendering LaTeX mathematics inline" width="440" /></a><br>Inline LaTeX</td>
    <td align="center"><a href="https://jcode.sh/screenshots/cache-cold-notification.webp"><img src="https://jcode.sh/screenshots/thumbs/cache-cold-notification.webp" alt="Jcode warning that the prompt cache went cold" width="440" /></a><br>Cache cold notification</td>
  </tr>
</table>

</div>

## Swarm

Spawn two or more agents in the same repo, and they will automatically be managed by the server to allow native collaboration. When agent A edits a file that agent B has read (code shifting under its feet), the server notifies agent B. Agent B can ignore it if it is not relevant, or it can check the diff to make sure that it doesn't conflict. Each agent has messaging abilities, capable of DMing just one agent, broadcasting to all other agents hosted by the server, or just agents working in that repo. This allows you to spawn multiple sessions in the same repo, and have all conflicts automatically resolved.

Agents are also able to spawn their own swarms autonomously. They have a swarm tool which allows them to spawn in their own teamates to accomplish tasks in parallel. Doing so turns the main agent into a coordinator and the spawned agents into workers. Groups of agents, their messaging channels, their completion statuses, etc are all automatically managed. This can be done headlessly or headed.


## OAuth and Providers

Supports a [wide range of providers](https://jcode.sh/docs#providers), including Claude OAuth and OpenAI Codex OAuth.

## Customizability / Self-Dev

Jcode is inventing a new form of customizability. One that doesn't limit you to what a plugin or extension can do. Tell your jcode agent to enter self dev mode, and it will start modifying its own source code. Jcode is optimized to iterate on itself. There is significant infrastructure around self development, which allows it to edit, build, and test its own source code, then reload its own binary and continue work in your (potentially many) sessions, fully automatically.


<!-- Add self-dev demo thumbnail/video and fuller writeup here. -->

## Other

- [Token optimization](https://github.com/1jehuang/jcode/blob/master/docs/HARNESS.md#token-optimization)
- [KV cache](https://github.com/1jehuang/jcode/blob/master/docs/HARNESS.md#kv-cache)
- [Hill-climbable measurements](https://github.com/1jehuang/jcode/blob/master/docs/HARNESS.md#hill-climbable-measurements)
