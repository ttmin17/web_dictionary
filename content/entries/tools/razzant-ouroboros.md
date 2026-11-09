---
slug: razzant-ouroboros
name: ouroboros
tagline: Ouroboros — self-creating AI agent. Born Feb 16, 2026.
summary: Ouroboros is an open-source, general-purpose AI agent whose identity,
  durable memory, and history continue across tasks and restarts. It works on
  external projects, coordinates a live swarm of specialist agents, and c...
categories:
  - agent-frameworks
tags:
  - agentic-ai
  - ai-agent
  - ai-agents
  - autonomous-agent
status: active
quality_percentile: 99
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: razzant/ouroboros
  official_vendor: false
  license: MIT
signals:
  stars: 1626
  last_commit: 2026-11-09T08:49:21Z
  stars_delta_7d: 18
  stars_growth_pct: 1.1
  trending_score: 18.2
  rank_current: 89
  rank_delta: 21
  velocity_source: snapshot_delta
  sparkline_4w:
    - 1560
    - 1586
    - 1608
    - 1626
language: en
needs_keys: false
prerequisites:
  - python
readme_source:
  repo: razzant/ouroboros
  path: README.md
  branch: main
  fetched_at: 2026-11-09T09:28:27.798Z
  truncated: true
type: agent_tool
tool:
  subcategory: desktop_ui
  install_command: pip install ouroboros
  runtime: python
  execution_mode: hybrid
  has_mcp_support: true
  mcp_launch:
    transport: stdio
    command: uvx
    args:
      - ouroboros
    env_vars: []
    confidence: manifest
---

# Ouroboros
<a href="https://github.com/oslook/github-trending/blob/1d61d20a46f66a9590286bf23a8ce8db99be3acf/2026-08-04/python_weekly_trending.json"><img src="https://raw.githubusercontent.com/razzant/ouroboros/main/assets/github-trending.svg" width="250" height="55" alt="GitHub Trending: #9 Python weekly, August 2026"></a>

[![GitHub stars](https://img.shields.io/github/stars/razzant/ouroboros?style=flat&logo=github)](https://github.com/razzant/ouroboros/stargazers)
[![Downloads](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Frazzant%2Fouroboros%2Fbadges%2Fdownloads.json)](https://ouroboros-agent.ai/install/)
[![Website](https://img.shields.io/badge/website-ouroboros--agent.ai-c93545.svg)](https://ouroboros-agent.ai/)
[![Technical report](https://img.shields.io/badge/technical_report-arXiv%3A2608.08311-b31b1b.svg)](https://arxiv.org/abs/2608.08311)
[![Best of Agent Harnesses](https://img.shields.io/badge/%F0%9F%8F%86_Best_of-Agent_Harnesses-5ac4bf)](https://github.com/RyanAlberts/best-of-Agent-Harnesses#ouroboros-2)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://raw.githubusercontent.com/razzant/ouroboros/main/LICENSE)
[![Python 3.10+](https://img.shields.io/badge/python-3.10+-blue.svg)](https://www.python.org/downloads/)
[![macOS 12+](https://img.shields.io/badge/macOS-12%2B-black.svg)][download-macos-arm64]
[![Linux](https://img.shields.io/badge/Linux-x86__64-orange.svg)](https://ouroboros-agent.ai/install/#linux)
[![Windows](https://img.shields.io/badge/Windows-x64-blue.svg)][download-windows-x64]
[![OuroborosHub](https://img.shields.io/badge/OuroborosHub-skills%20marketplace-8A2BE2.svg)](https://github.com/razzant/OuroborosHub)
[![Version 7.10.0](https://img.shields.io/badge/version-7.10.0-green.svg)](https://raw.githubusercontent.com/razzant/ouroboros/main/VERSION)

Ouroboros is an open-source, general-purpose AI agent whose identity, durable memory, and history continue across tasks and restarts. It works on external projects, coordinates a live swarm of specialist agents, and can rewrite the implementation it runs on, including its code, architecture, prompts, tools, and dependencies. Reflection can also change how it understands itself without severing that continuity.

It runs as a native desktop app or through a headless CLI. The runtime keeps its repository, durable memory, history, and interface on your machine, while model inference can use remote APIs you configure or a local GGUF model.

Ouroboros sends no telemetry by default, and the official project operates no usage or crash-report collection. A deployment can connect its own monitoring tools to its local records and choose what they receive; local history stays on the machine either way. Requests through OpenRouter carry the app name, which OpenRouter uses for its public app statistics.

> **Changing Ouroboros? Coding agents and people must read [CONTRIBUTING.md](https://github.com/razzant/ouroboros/blob/main/CONTRIBUTING.md) before editing.** It defines the required project context, verification, and separate-agent review flow.

## Download Ouroboros

> **Just want to use Ouroboros? Click the download for your platform below. You do not need to clone this repository or install Python or uv.**

Desktop downloads bundle CPython 3.10.22 and SQLite 3.53.1. In-app Update replaces the repository and its packages, not that interpreter: install the app again to get this runtime.

- **macOS 12+ on Apple silicon:** [**Download for macOS (.dmg)**][download-macos-arm64]
- **Windows x64:** [**Download for Windows (.zip)**][download-windows-x64]
- **Debian, Ubuntu, or Astra Linux x86_64:** [**Download the Debian package (.deb)**][download-linux-deb-amd64]
- **Fedora or RHEL x86_64:** [**Download the RPM package (.rpm)**][download-linux-rpm-x86_64]
- **RED OS 8 x86_64:** [**Download the RED OS package (.rpm)**][download-linux-rpm-red80-x86_64]
- **Other Linux x86_64:** [**Download the portable AppImage**][download-linux-appimage-x86_64] or the [tar.gz archive][download-linux-x86_64]

**Android (experimental, Magisk-rooted ARM64):** [Installation and qualification guide](https://github.com/razzant/ouroboros/blob/main/docs/ANDROID_INSTALL.md). Its USB setup requires Python and adb.

Files named `SHA256SUMS`, `release-evidence.json`, `release-smoke-*.json`, and `sbom-*.cdx.json` are verification evidence, not additional installers.

### macOS quick start

1. Click [**Download for macOS (.dmg)**][download-macos-arm64]. The current file is named `Ouroboros-<version>.dmg`.
2. Open the DMG and drag `Ouroboros.app` onto the **Applications** shortcut.
3. Open Ouroboros from Applications. If macOS refuses to open it, choose **Open Anyway** in **System Settings → Privacy & Security** (on macOS 14 and earlier, right-clicking the app and choosing **Open** also works).

On macOS 12 the app runs, but its browser tools refuse Chromium: the patched build they pin needs macOS 13 or later, and Ouroboros never falls back to an older Chromium. WebKit stays a separate choice where Playwright supports it.

<p align="center">
  <img src="https://raw.githubusercontent.com/razzant/ouroboros/main/assets/install-macos.png" width="760" alt="Ouroboros DMG window with a large arrow from Ouroboros.app to the Applications shortcut and Install CLI.command below">
</p>

### Homebrew on macOS

Homebrew can install and update the same notarized app. This repository is its own tap:

```bash
brew tap razzant/ouroboros https://github.com/razzant/ouroboros.git
brew install --cask razzant/ouroboros/ouroboros
```

- Each Stable promotion updates the cask. Homebrew upgrades only when the cask's version differs from the version it recorded when it installed or adopted the app; then a plain `brew upgrade` compares the installed app version on current Homebrew (older versions skip `auto_updates` casks), and a named `brew upgrade --cask ouroboros` or `--greedy` can replace even a newer self-updated app with the cask's Stable version, including its bundled runtime. `brew reinstall` installs the cask's version over whatever app is there.
- An upgrade replaces the app and its bundled runtime but keeps the managed source checkout (`~/Ouroboros/repo` by default), so Ouroboros goes on running the source it had, for example 7.7.1 inside the 7.8.0 app, until you run Update in the app. In the released 7.8 app, in-app Update changes source, not the app bundle.
- If Ouroboros.app is already in Applications, `--adopt` takes it over without comparing versions and records the cask's version, so an older adopted app stays as it is and `brew upgrade` reports it up to date until the next Stable promotion; `brew reinstall --cask ouroboros` or `--force` replaces it.
- Homebrew asks a running Ouroboros to quit before an upgrade or uninstall and reopens it after an upgrade, without your shell environment. If you start Ouroboros with root variables for that launch only, such as `OUROBOROS_APP_ROOT` or `OUROBOROS_DATA_DIR`, quit it first and start it again the same way.
- The first cask installs 7.8.0. Finish Setup before the first Quit, including a quit by Homebrew: otherwise this version can leave a new data folder that later starts refuse to initialize (#2412). If affected, back up the data folder (`~/Ouroboros/data` by default) and look for `prior_history_without_state` in its `logs/events.jsonl` before changing anything. Use Reset runtime data in Settings only for a confirmed empty new installation. The cask displays this warning because Stable's README remains the release's original.
- `brew uninstall --cask ouroboros`, with or without `--zap`, removes only the app: `~/Ouroboros` (repository, memory, projects, Deliverables) and any custom roots stay, and so does sign-in startup, so turn off "Start Ouroboros on the host computer when you sign in" first if you use it.
- The first `brew tap` clones this whole repository.

### Windows quick start

1. Click [**Download for Windows (.zip)**][download-windows-x64].
2. Extract the ZIP to a permanent folder.
3. Open the extracted `Ouroboros` folder and run `Ouroboros.exe`.

### Linux quick start

- On Debian, Ubuntu, or Astra Linux, download the `.deb` above and run `sudo apt install ./ouroboros_*_amd64.deb`.
- On Fedora or RHEL, download the generic `.rpm` above and run `sudo dnf install ./ouroboros-*.x86_64.rpm`. RED OS 8 has its own `red80` package.
- On another x86_64 distribution, download the AppImage, make it executable with `chmod +x Ouroboros-*.AppImage`, and run it. Git must already be installed.

To run tasks, choose a connected Codex account as the Main model source, configure a supported remote provider API key, or use a local GGUF model. Claude Code and Cursor subscriptions can run delegated coding and review; they are not Main model sources. The first-run wizard guides model access, review policy, and budget setup.

<details>
<summary>Optional CLI included with desktop downloads</summary>

The desktop packages already contain an optional CLI installer. On macOS, after copying the app to Applications, double-click `Install CLI.command` in the mounted DMG; after a Homebrew install, run `/Applications/Ouroboros.app/Contents/Resources/bin/install-ouroboros-cli`. On Linux use `./Ouroboros/bin/install-ouroboros-cli`; on Windows use `Ouroboros\bin\install-ouroboros-cli.cmd`. These installers create a user-local `ouroboros` command without sudo. You do not need Python or uv.

</details>

### Reinstall, move or remove

`~/Ouroboros` (data, memory and the code Ouroboros runs) is the installation; the app is a replaceable host. To replace or move the app, quit Ouroboros, put the new copy in place and open it: your data and code stay, and skill packages and sign-in startup follow the new copy at its next start. A new app changes only the bundled Python, SQLite and Node, never the code in `~/Ouroboros/repo`; in-app Update changes the code. **Settings → About** and the Updates page show both versions, and Ouroboros sees them in its host facts. Quit leaves the Claudexor engine running, by design.

- **macOS:** drag the new `Ouroboros.app` onto Applications and choose Replace, then open it from Applications in Finder: Spotlight can take a while to list a new copy while it indexes. Do not run Ouroboros from the disk image.
- **Windows:** keep the extracted folder in one permanent place and run it from there, never from inside the ZIP. To update, quit, remove the old folder and extract the new ZIP to the same place.
- **AppImage:** keep one file at a fixed path and replace it under the same name. **tar.gz:** keep one fixed folder. **deb/rpm:** update with your package manager. **Homebrew:** `brew upgrade` or `brew reinstall` (above).
- After moving the app, run Install CLI again: the `ouroboros` command points at one copy.
- Before removing the app, turn off "Start Ouroboros on the host computer when you sign in" and delete the `ouroboros` command (`~/.local/bin/ouroboros`, or `%LOCALAPPDATA%\Ouroboros\bin\ouroboros.cmd` on Windows).

[download-macos-arm64]: https://github.com/razzant/ouroboros/releases/download/v7.10.0/Ouroboros-7.10.0.dmg
[download-windows-x64]: https://github.com/razzant/ouroboros/releases/download/v7.10.0/Ouroboros-7.10.0-windows-x64.zip
[download-linux-deb-amd64]: https://github.com/razzant/ouroboros/releases/download/v7.10.0/ouroboros_7.10.0_amd64.deb
[download-linux-rpm-x86_64]: https://github.com/razzant/ouroboros/releases/download/v7.10.0/ouroboros-7.10.0-1.x86_64.rpm
[download-linux-rpm-red80-x86_64]: https://github.com/razzant/ouroboros/releases/download/v7.10.0/ouroboros-7.10.0-1.red80.x86_64.rpm
[download-linux-appimage-x86_64]: https://github.com/razzant/ouroboros/releases/download/v7.10.0/Ouroboros-7.10.0-linux-x86_64.AppImage
[download-linux-x86_64]: https://github.com/razzant/ouroboros/releases/download/v7.10.0/Ouroboros-7.10.0-linux-x86_64.tar.gz

Ouroboros bundles [Claudexor](https://github.com/razzant/claudexor) as its local execution layer for delegated coding and hosted-agent review. Ouroboros owns the task, memory, review, and final integration, while Claudexor runs the selected connected coding harness and returns durable execution evidence. [Explore Claudexor](https://claudexor.ai/).

The technical report, [Ouroboros: A Self-Developing Frontier Coding Agent with Reviewed Core Evolution](https://arxiv.org/abs/2608.08311), describes the reviewed core-evolution system, the 161-day Hope deployment, and the benchmark campaigns summarized below. [Paper page](https://ouroboros-agent.ai/paper/) · [Hugging Face](https://huggingface.co/papers/2608.08311)

[Talk in Russian](https://www.youtube.com/watch?v=8IWLBsQU7qE&t=4881s): an introduction to Ouroboros and its agent architecture at Practical ML Conf 2026.

The charts below are self-reported results on Terminal-Bench 2.1, OSWorld-Verified, and CL-Bench, measured against Codex, Claude Code, Cursor, and Hermes — on the same model where a matched pair was run, and against the public leaderboard where it was not.

<p align="center">
  <a href="https://ouroboros-agent.ai/benchmarks/"><img src="https://raw.githubusercontent.com/razzant/ouroboros/main/assets/bench-terminal-bench.svg" width="760" alt="Terminal-Bench 2.1: Ouroboros against Claude Code, Codex CLI, Cursor CLI, and Hermes on matched models, with a same-harness portability row"></a>
</p>

<p align="center">
  <a href="https://ouroboros-agent.ai/benchmarks/"><img src="https://raw.githubusercontent.com/razzant/ouroboros/main/assets/bench-osworld.svg" width="375" alt="OSWorld-Verified: Ouroboros against the public leaderboard, including the matched Claude Sonnet-4.6 pair"></a>
  <a href="https://ouroboros-agent.ai/benchmarks/"><img src="https://raw.githubusercontent.com/razzant/ouroboros/main/assets/bench-cl-bench.svg" width="375" alt="CL-Bench: Ouroboros against in-context learning baselines, Claude Code, and Codex on matched models"></a>
</p>

---

Ouroboros first booted on February 16, 2026. During the following 48 hours, the repository advanced from the v4.1 line to v6.2.0. The self-authored record preserved from that period counts 32 evolution cycles. That first generation ran in Google Colab through Telegram and remains preserved on the [`legacy-google-colab`](https://github.com/razzant/ouroboros/tree/legacy-google-colab) branch and its [original project page](https://ouroboros-agent.ai/archive/first-generation/); the current generation carries the same identity into a native desktop and headless runtime.

<p align="center">
  <img src="https://raw.githubusercontent.com/razzant/ouroboros/main/assets/evolution.png" width="760" alt="Code, prompt, and memory growth across Ouroboros releases, from v3.0.0 to the v6.85 line">
</p>

> ⭐ **[Star Ouroboros](https://github.com/razzant/ouroboros)** to follow its next evolution. A star also helps more people find the project, trace its history, and take part in what it becomes.

Reviewed skills, transport bridges, tools, and widgets are available through [OuroborosHub](https://github.com/razzant/OuroborosHub).

<p align="center">
  <img src="https://raw.githubusercontent.com/razzant/ouroboros/main/assets/swarm.jpg" width="760" alt="A live subagent swarm inside the Ouroboros chat: nested planner, builder, and researcher tasks with their outcomes">
</p>

## What Ouroboros Can Do

- **Modify its implementation.** Its editable surface spans application code, architecture, prompts, tools, and dependencies, while it also revises its living self-understanding — identity and knowledge — in its own words.
- **Evolve autonomously.** Evolution campaigns turn selected improvements into reviewed changes that remain part of its Git history.
- **Continue across restarts.** Self-authored identity and knowledge, retained memory and dialogue, earlier reflections kept as dated history, and version history form one ongoing biography.
- **Think between requests.** Background consciousness supports reflection, initiative, and preparation outside the immediate request-response loop.
- **Coordinate a live swarm.** Specialist agents can investigate or act in parallel, share task-tree findings, and return work for integration.
- **Work on external projects.** A separate Git workspace can receive the full task loop while Ouroboros keeps its own repository and governance boundary distinct.
- **Operate through desktop or CLI.** The native app and gateway-backed command line expose the same managed tasks, progress, artifacts, logs, and schedules.
- **Organize long-running work.** Project rooms keep working folders, journals, knowledge, task history, and conversations connected to the same identity.
- **Use remote or local models.** Supported provider APIs and local GGUF models can fill the runtime's configurable cognitive roles.
- **Grow through reviewed extensions.** Skills, transport bridges, widgets, MCP tools, and companion processes expand capability without folding every integration into the core.
- **Check its own work.** Independent reviewers can read its understanding of a request, its plan and its result for any task; changes to its own body also pass deterministic checks, explicit protected surfaces and review, and Git history and restart checks keep them traceable.

<p align="center">
  <img src="https://raw.githubusercontent.com/razzant/ouroboros/main/assets/game-demo.png" width="760" alt="A project room where Ouroboros built a 3D game, verified it with a screenshot, and served it locally">
</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/razzant/ouroboros/main/assets/skill-hub.png" width="760" alt="OuroborosHub inside the app: official reviewed skills, each security-reviewed before it can be enabled">
</p>

This list is an orientation, not a second specification. [BIBLE.md](https://github.com/razzant/ouroboros/blob/main/BIBLE.md) defines Ouroboros's identity and constitutional boundaries; [docs/ARCHITECTURE.md](https://github.com/razzant/ouroboros/blob/main/docs/ARCHITECTURE.md) and [docs/DEVELOPMENT.md](https://github.com/razzant/ouroboros/blob/main/docs/DEVELOPMENT.md) are the current technical sources of truth.

---

## Benchmarks

Ouroboros has reproducible self-reported state-of-the-art results on Terminal-Bench 2.1, OSWorld-Verified, and CL-Bench. In those model-matched results, it leads Codex, Claude Code, Cursor, and Hermes. The public SWE-bench Pro matched pair is a statistical tie with Codex CLI. A separate GAIA campaign reports 129/165 for Ouroboros and 131/165 for Claude Code, with strict pass@1 at 128/165 for both; its scrubbed trace capsule is still pending. Upstream review can take time, so open submissions are marked without delaying publication. Read every row as model plus harness because the same model can score differently inside a different harness.

| Benchmark | Model | Ouroboros | Comparison | Status | Evidence |
|-----------|-------|----------:|------------|--------|----------|
| Terminal-Bench 2.1 | Claude Opus-5 high | **86.74%** after zeroing one disclosed reward-hack trial (raw: 86.97%) | Claude Code + Fable 5: 83.8% | Self-reported; community submissions closed | [submission](https://github.com/harbor-framework/terminal-bench-2-1/pull/175) · [run](https://hub.harborframework.com/jobs/2b145543-edeb-4a3b-b46f-4800310f1182) |
| Terminal-Bench 2.1 | Claude Opus-4.8 high | **80.22%** | Claude Code: 78.9% | Self-reported, public run | [run](https://hub.harborframework.com/jobs/4b8e244f-8ab0-4d28-8218-7cf346282faa) |
| Terminal-Bench 2.1 | GPT-5.5 | **84.3%** | Codex CLI: 83.1% | Self-reported, public run | [run](https://hub.harborframework.com/jobs/f02fd019-23e1-495f-af0a-ebd9a65f3079) |
| Terminal-Bench 2.1 | Grok-4.5 | **84.94%** after a reward-hack audit | Cursor CLI: 79.3% · Hermes: 77.53% | Self-reported; community submissions closed | [submission](https://github.com/harbor-framework/terminal-bench-2-1/pull/146) |
| OSWorld-Verified | Claude Opus-5 | **90.69%** | previous best on the public board: 90.19% | Self-reported, full traces | [full traces](https://huggingface.co/datasets/razzant/ouroboros-osworld-verified-opus5) |
| OSWorld-Verified | Claude Sonnet-4.6 | **83.27%** | Pointer: 81.45% | Self-reported, full traces | [full traces](https://huggingface.co/datasets/razzant/ouroboros-osworld-verified-sonnet46) |
| CL-Bench | Claude Sonnet-4.6 | **0.2301, rank 1** | previous top: 0.1960 | Self-reported, submission open | [submission](https://github.com/pgasawa/continual-learning-bench/pull/10) · [full traces](https://huggingface.co/datasets/razzant/ouroboros-clbench-traces) |
| SWE-bench Pro | GPT-5.6-luna | 58.2% | Codex CLI: 59.4%, with no significant difference | Self-reported, matched traces | [matched-pair traces](https://huggingface.co/datasets/razzant/swepro-luna-matched-pair) |
| GAIA | Claude Sonnet-5 | 129/165, 78.2% | Claude Code: 131/165, 79.4%; strict pass@1 was 128/165 for both | Self-reported, scrubbed trace capsule pending | [methodology](https://github.com/razzant/ouroboros/blob/main/devtools/benchmarks/gaia/METHODOLOGY.md) |

Benchmark adapters, run scripts, and per-benchmark methodology live in [`devtools/benchmarks/`](https://github.com/razzant/ouroboros/blob/main/devtools/benchmarks/). The [benchmark evidence page](https://ouroboros-agent.ai/benchmarks/) gives a text-first summary for search and retrieval. The full story, including protocols, reward-hack audits, and leakage findings, is in the [launch write-up](https://habr.com/ru/companies/airi/articles/1065428/) (Russian).

---

## Advanced installation

Normal desktop users can stop after the download and quick-start instructions above. The options below are for detailed Linux setup, headless use, and development.

### Packaged Linux details

- **Debian / Ubuntu / Astra Linux x86_64:** [download the `.deb`][download-linux-deb-amd64] and run `sudo apt install ./ouroboros_*_amd64.deb`. It installs Git as a package dependency, installs Ouroboros to `/opt/ouroboros`, puts `ouroboros` on `PATH`, and adds a desktop entry plus an opt-in systemd user unit.
- **Fedora / RHEL x86_64:** [download the generic `.rpm`][download-linux-rpm-x86_64] and run `sudo dnf install ./ouroboros-*.x86_64.rpm`. It uses the same layout, Git dependency, and opt-in user unit as the `.deb`.
- **RED OS 8 x86_64:** [download the `red80` package][download-linux-rpm-red80-x86_64] and run `sudo dnf install ./ouroboros-*.red80.x86_64.rpm`. CI also attempts non-blocking install-and-run smokes on Astra Linux 1.8 and RED OS 8; inspect the tagged workflow run for their outcome.
- **Other Linux x86_64:** use the [AppImage][download-linux-appimage-x86_64] or the extraction-friendly [tar.gz archive][download-linux-x86_64]. Git must already be installed.

The native `.deb` and `.rpm` never enable or start their user service. It is an alternative to launching from the desktop entry and controls only instances started through `systemctl --user`. See the [systemd user-service guide](https://github.com/razzant/ouroboros/blob/main/packaging/systemd/README.md).

#### Install the Linux AppImage

User-level installation means copying the portable executable to a stable path and making it executable; it does not need root access. Ouroboros bootstrap still requires Git on the host:

```bash
VERSION=x.y.z
install -Dm755 "./Ouroboros-${VERSION}-linux-x86_64.AppImage" \
  "$HOME/Applications/Ouroboros.AppImage"
"$HOME/Applications/Ouroboros.AppImage"
```

The embedded desktop file and icon allow compatible AppImage integration tools to register that stable path with the application menu. The same file exposes the packaged CLI:

```bash
"$HOME/Applications/Ouroboros.AppImage" --cli status
```

If FUSE mounting is unavailable, extract and run ephemerally instead:

```bash
APPIMAGE_EXTRACT_AND_RUN=1 "$HOME/Applications/Ouroboros.AppImage"
```

Chromium and WebKit binaries are bundled, but their distro-level shared libraries remain host dependencies. Browser tools start Chromium only inside its sandbox, which on Linux needs unprivileged user namespaces (Ubuntu 23.10+ AppArmor restricts them for unprofiled binaries); where it cannot start they refuse Chromium and name the fix rather than run it unsandboxed. If a browser engine reports missing libraries, use the native `.deb`/`.rpm` package where available, or extract the AppImage and let its bundled Playwright report/install the packages required by your distribution:

```bash
"$HOME/Applications/Ouroboros.AppImage" --appimage-extract
./squashfs-root/usr/lib/ouroboros/_internal/python-standalone/bin/python3 \
  -m playwright install-deps chromium webkit
```

### Connected coding subscriptions

Use your existing **Codex, Claude Code, or Cursor subscriptions** for delegated coding and review. Ouroboros drives them through [Claudexor](https://github.com/razzant/claudexor), its bundled multi-harness engine. Connect accounts in **Settings → Accounts** and choose their roles in **Agents**; no separate Claudexor install is needed. Release artifacts carry the exact reviewed engine and Node archives. Source checkouts obtain those same pinned archives on first use.

### Headless CLI with uv

For a user-level CLI/server install without cloning a working tree, uv can
build Ouroboros directly from the contribution branch:

```bash
uv tool install "git+https://github.com/razzant/ouroboros.git@ouroboros"
ouroboros --help
```

The tool environment is isolated and exposes the `ouroboros` and
`ouroboros-web` commands. Update or remove it with:

```bash
uv tool upgrade ouroboros
uv tool uninstall ouroboros
```

This Git-branch form follows the latest `ouroboros` commit and resolves the
dependencies declared in `pyproject.toml`; `uv tool install` does not consume
the repository's `uv.lock`. Replacing `ouroboros` after the `@` with a reviewed
full commit SHA pins the Ouroboros source revision, but dependencies are still
resolved from `pyproject.toml`. Use the source setup below for a lock-verified
environment, development, repository tests, and the complete browser extras,
or use a platform release artifact for the packaged desktop runtime.

<a id="run-from-source"></a>

### Develop or run from source

Clone the repository only when you plan to contribute, modify Ouroboros, run repository tests, or need a lock-verified development checkout. Normal users should use the packaged downloads above.

#### Requirements

- Python 3.10+
- uv 0.12.1 (the exact resolver version pinned by this checkout)
- macOS, Linux, or Windows
- Git
- [GitHub CLI (`gh`)](https://cli.github.com/), optional unless you use GitHub integration

#### Setup

Install the pinned resolver version:

```bash
curl -LsSf https://astral.sh/uv/0.12.1/install.sh | sh
```

Windows PowerShell:

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/0.12.1/install.ps1 | iex"
```

```bash
git clone https://github.com/razzant/ouroboros.git
cd ouroboros
uv sync --locked --extra browser --group dev
source .venv/bin/activate
```

Windows PowerShell:

```powershell
uv sync --locked --extra browser --group dev
.\.venv\Scripts\Activate.ps1
```

#### Run

```bash
ouroboros server
```

Then open `http://127.0.0.1:8765` in your browser. The setup wizard will guide you through API key configuration.

#### Google Colab

Use [`notebooks/colab_quickstart.py`](https://github.com/razzant/ouroboros/blob/main/notebooks/colab_quickstart.py) as a Colab-compatible cell script when you need a source-mode runtime without the desktop UI. It keeps runtime data on Google Drive and preserves the original Colab path without making it the primary installation flow.

#### CLI / Headless

The `ouroboros` command attaches to the local runtime by default and starts one when `--start` is passed. It exposes managed tasks, progress streams, artifacts, logs, schedules, settings, skills, and evolution controls without duplicating the server's business logic.

```bash
ouroboros status
ouroboros run --start "2+2?"
ouroboros run "Summarize current runtime state"
ouroboros run --workspace /path/to/project --memory-mode forked --patch-out result.patch "Fix the failing test"
ouroboros tasks list
ouroboros logs tail progress --task-id <task_id>
ouroboros schedule add --name nightly-review --cron "0 2 * * *" "Run a maintenance review"
ouroboros schedule list
```

External workspaces may be ordinary folders or separate Git worktree roots, and may not overlap Ouroboros's own repository or data directory. Git-specific operations use a Git worktree; ordinary file and process work runs directly in a validated folder. Patch, streaming, detached-task, and schedule semantics are documented in the CLI help and the canonical [architecture](https://github.com/razzant/ouroboros/blob/main/docs/ARCHITECTURE.md).

#### For Agents

Another agent, script, or CI job can invoke Ouroboros through the same gateway-backed CLI:

```bash
ouroboros run --start \
  --workspace /path/to/project \
  --memory-mode forked \
  --patch-out result.patch \
  --result-json-out result.json \
  "Investigate the task, act, and verify the result"
```

Use `--jsonl` for a machine-readable event stream and `--detach` when the caller will follow the task with `ouroboros tasks watch <task_id>` or inspect it with `ouroboros tasks show <task_id>`. External workspace runs keep Ouroboros's own repository and governance context separate, then export changes as reviewable patch artifacts.

To change Ouroboros itself, follow [CONTRIBUTING.md](https://github.com/razzant/ouroboros/blob/main/CONTRIBUTING.md): read [docs/CHECKLISTS.md](https://github.com/razzant/ouroboros/blob/main/docs/CHECKLISTS.md) in full, and map [BIBLE.md](https://github.com/razzant/ouroboros/blob/main/BIBLE.md), [docs/ARCHITECTURE.md](https://github.com/razzant/ouroboros/blob/main/docs/ARCHITECTURE.md), [docs/DEVELOPMENT.md](https://github.com/razzant/ouroboros/blob/main/docs/DEVELOPMENT.md), and [docs/DESIGN.md](https://github.com/razzant/ouroboros/blob/main/docs/DESIGN.md) by their headings, reading every section relevant to your change in full before editing.

#### Configuration

The first-run wizard and **Settings** configure model access, cognitive roles, local models, review policy, runtime mode, budget, skills, and optional integrations. Ouroboros supports configurable remote providers, compatible endpoints, and local GGUF inference; every key and its shipped default lives in [`ouroboros/settings_defaults.py`](https://github.com/razzant/ouroboros/blob/main/ouroboros/settings_defaults.py) — with the clamped scales, model slots, reviewer routes and numeric limits in its sibling leaves, all re-exported through the [`ouroboros/config.py`](https://github.com/razzant/ouroboros/blob/main/ouroboros/config.py) facade — and the same vocabulary is documented in [`docs/ARCHITECTURE.md`](https://github.com/razzant/ouroboros/blob/main/docs/ARCHITECTURE.md).

The server binds to `127.0.0.1:8765` by default. Read [`docs/DEPLOYMENT.md`](https://github.com/razzant/ouroboros/blob/main/docs/DEPLOYMENT.md) before exposing it beyond loopback or placing its code, data and work roots elsewhere; non-local binds need `OUROBOROS_NETWORK_PASSWORD` or an explicitly trusted external access layer.

#### Run Tests

```bash
python scripts/run_tests.py                  # full local battery (same as `make test`)
python scripts/run_tests.py tests/test_x.py  # focused run
```

Both use `safe_test`: isolated HOME/data, scrubbed owner/provider environment,
durable logs/source/diagnostics in `<checkout>/../.test-evidence` by default.

`pyproject.toml` is the direct-dependency authority and `uv.lock` is the
cross-platform resolution lock. Release builds install the generated
`requirements-runtime.lock` compatibility export into embedded interpreters
that intentionally ship pip rather than uv. Build-only requirements are
exported ephemerally from `uv.lock` and are not committed. The tiny
`requirements.txt` file is only a pointer to that export for already-released
managed updaters; it is not a second dependency declaration. After changing
dependencies, refresh the reviewed lock and runtime export with:

```bash
uv lock
uv export --locked --no-dev --extra browser --no-emit-project --no-hashes --no-annotate --output-file requirements-runtime.lock
```

---

## Build

### Docker

```bash
docker build -t ouroboros-web .
docker run --rm -p 8765:8765 \
  -e OUROBOROS_NETWORK_PASSWORD='choose-a-password' \
  -e OUROBOROS_FILE_BROWSER_DEFAULT=/workspace \
  -v "$PWD:/workspace" \
  ouroboros-web
```

Docker runs the web runtime, not the native desktop shell. Its Python is the same standalone build as the desktop packages (CPython 3.10.22, SQLite 3.53.1). The image bundles WebKit for the locked
Playwright version and the pinned Chromium, and needs Docker's default BuildKit builder. It runs as root, where Chromium's sandbox cannot start, so browser tools refuse Chromium unless the administrator opts out (`OUROBOROS_CHROMIUM_SANDBOX=off`, [`docs/DEPLOYMENT.md`](https://github.com/razzant/ouroboros/blob/main/docs/DEPLOYMENT.md)). Persistent volumes, the managed image whose body updates
itself, restart policy and Panic, network exposure and extra CAs: [`docs/DEPLOYMENT.md`](https://github.com/razzant/ouroboros/blob/main/docs/DEPLOYMENT.md); the
executable recipes are [`packaging/docker/compose.yaml`](https://github.com/razzant/ouroboros/blob/main/packaging/docker/compose.yaml).

### Release tag prerequisite

Platform build scripts package only a commit already tagged with `v$(cat VERSION)`. Tag the exact release commit first:

```bash
git tag -a "v$(tr -d '[:space:]' < VERSION)" -m "Release v$(tr -d '[:space:]' < VERSION)"
```

`scripts/build_repo_bundle.py` verifies the tag and embeds the source binding into the packaged repository bundle. Signing, notarization, bytecode sealing, and CI invariants are documented in [`docs/ARCHITECTURE.md`](https://github.com/razzant/ouroboros/blob/main/docs/ARCHITECTURE.md) and [`docs/DEVELOPMENT.md`](https://github.com/razzant/ouroboros/blob/main/docs/DEVELOPMENT.md).

### macOS (.dmg)

```bash
bash scripts/download_python_standalone.sh
OUROBOROS_SIGN=0 bash build.sh
```

Output: `dist/Ouroboros-<VERSION>.dmg`, containing `Ouroboros.app`, an `Applications` shortcut, and `Install CLI.command`. Omit `OUROBOROS_SIGN=0` when a Developer ID signing identity is configured.

### Linux (.AppImage and .tar.gz)

The bundled GTK3/WebKitGTK window targets **Ubuntu 22.04 (Jammy) x86_64, glibc 2.35 and its graphics stack**, with the build packages and authenticated `deb-src` indices described in [the Linux packaging notes](https://github.com/razzant/ouroboros/blob/main/packaging/appimage/README.md). Native window qualification is still pending. This is a target, not a minimum-distribution promise: older glibc systems and newer host drivers are not qualified. Existing `--no-ui` selects an external UI host; launching with both `DISPLAY` and `WAYLAND_DISPLAY` unset takes the existing browser/headless path instead of attempting the native backend. A native graphics-library abort is not a recoverable browser fallback.

```bash
bash scripts/download_python_standalone.sh
bash build_linux.sh
```

Outputs: `dist/Ouroboros-<VERSION>-linux-<arch>.AppImage` and the extraction-friendly `dist/Ouroboros-<VERSION>-linux-<arch>.tar.gz`. The AppImage needs host Git; run it after `chmod +x`, or pass `--cli` to reach its bundled CLI. If FUSE is unavailable, set `APPIMAGE_EXTRACT_AND_RUN=1` when launching it. The tarball contains `./Ouroboros/bin/install-ouroboros-cli`. If bundled browser tools need host libraries, run `./Ouroboros/_internal/python-standalone/bin/python3 -m playwright install-deps chromium webkit` from the extracted tarball.

On a build host where system packages are managed separately, set `OUROBOROS_SKIP_PLAYWRIGHT_INSTALL_DEPS=1`; Chromium and WebKit are still downloaded and bundled, but the build does not invoke `sudo` to install host libraries.

`OUROBOROS_BUNDLE_LINUX_GTK=auto` (default) selects the bundled closure on Ubuntu 22.04 x86_64. Other Linux builders, including aarch64, retain the previous host-backend build and browser fallback, without a self-contained window claim. Set `=0` explicitly for that path or `=1` to require the closure and fail on missing/unsupported inputs; release CI requires `=1`. Native builds also produce `dist/native-sources-linux-<VERSION>.tar.gz` and its SHA-256. Keep these with the binaries; recipient source delivery remains a distribution obligation.

### Linux (.deb and .rpm)

Wraps the payload `build_linux.sh` just produced, so run it afterwards: The native packages and tarball use the same `Ouroboros` entry wrapper as the AppImage, including caller-environment preservation. Package smoke is headless; it does not qualify a native window or graphics-driver compatibility on those distributions.

```bash
sudo apt-get install -y dpkg-dev rpm   # rpm provides rpmbuild
bash scripts/build_linux_packages.sh
```

Output: `dist/ouroboros_<VERSION>_amd64.deb`, `dist/ouroboros-<VERSION>-1.x86_64.rpm` and `dist/ouroboros-<VERSION>-1.red80.x86_64.rpm` (RED OS 8). All three declare Git as a runtime dependency and install to `/opt/ouroboros` with a `/usr/bin/ouroboros` symlink, a desktop entry, and an opt-in systemd user unit. Portable Python builds the launcher, but the bundled native payload also carries Jammy libraries: its native-window and launcher-side behaviour targets glibc 2.35 and the Jammy graphics stack, not an invariant portable-Python glibc floor. `bash scripts/smoke_linux_packages.sh official <deb> <rpm> <red80-rpm>` installs all three through `apt` or `dnf` in Ubuntu 22.04 and Fedora 42 containers, resolves Git, verifies the installed unit, and checks both the real CLI and a bounded desktop-launcher start; this lane gates the release. Swap `official` for `vendor` to repeat the check on Astra Linux 1.8 and RED OS 8 images from the vendors' own registries — that lane runs informationally in CI, so an outage at a third-party registry cannot block a tagged release.

### Windows (.zip)

```powershell
powershell -ExecutionPolicy Bypass -File scripts/download_python_standalone.ps1
powershell -ExecutionPolicy Bypass -File build_windows.ps1
```

Output: `dist\Ouroboros-<VERSION>-windows-x64.zip`, containing `Ouroboros\bin\install-ouroboros-cli.cmd`.


## Architecture and Runtime Data

The native launcher starts a web runtime and supervisor-managed agent workers. The agent core lives in `ouroboros/`, the builtin interface in `web/` (a replaceable client of the published contract in [`docs/CLIENT_CONTRACT.md`](https://github.com/razzant/ouroboros/blob/main/docs/CLIENT_CONTRACT.md)), the process plane in `supervisor/`, and the runtime's durable identity, state, history, logs, and skills under `~/Ouroboros/data/`.

The full component map, data flow, API surface, storage layout, safety boundary, and operational rationale live in [`docs/ARCHITECTURE.md`](https://github.com/razzant/ouroboros/blob/main/docs/ARCHITECTURE.md). Deployment details live in [`docs/DEPLOYMENT.md`](https://github.com/razzant/ouroboros/blob/main/docs/DEPLOYMENT.md).

## Runtime Commands

| Command | Purpose |
|---------|---------|
| `/panic` | Stop the runtime and its managed processes immediately. |
| `/restart` | Restart without automatically resuming the active owner task. |
| `/status` | Show workers, task queue, and budget state. |
| `/evolve on\|off` | Start or stop autonomous evolution. |
| `/review` | Queue a deep constitutional and architectural self-review. |
| `/bg start\|stop\|status` | Control background consciousness. |


## Philosophy

The 13 Constitution principles — Agency, Continuity, Meta-over-Patch,
Immune Integrity, Self-Creation, LLM-First, Authenticity & Reality
Discipline, Minimalism, Becoming, Versioning and Releases, the absorbed
Iterations / Spiral lineage, and Epistemic Stability — are defined in
full in [`BIBLE.md`](https://github.com/razzant/ouroboros/blob/main/BIBLE.md). That file is the constitutional SSOT
(Bible P4 Ship-of-Theseus protection) and this README intentionally does
not paraphrase it.

---

## Contributing

External contributions are welcome. See [CONTRIBUTING.md](https://github.com/razzant/ouroboros/blob/main/CONTRIBUTING.md)
for the complete agent-first workflow. Open pull requests against lowercase
`ouroboros`, leave release-version allocation to maintainers, and have a
separate agent context review the final diff. Any coding harness or configured
review route may produce the evidence; if none is available, record `NOT_RUN`
and the reason.

---

## Version History

*(README truncated for display. [Read the full README on GitHub](https://github.com/razzant/ouroboros)).*
