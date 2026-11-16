---
slug: loopx-project-loopx
name: loopx
tagline: The control plane for 24/7 always-on agents. Turn long-horizon goals
  into verifiable results across Codex, Claude Code, and custom runtimes—from
  local
summary: Start with one goal. Keep long-running agent work verifiable.
categories:
  - agent-frameworks
tags:
  - agent-control-plane
  - agent-harness
  - agentic-software
  - ai-agents
status: active
quality_percentile: 60
selection_reason: quality_percentile
first_seen: 2026-11-16
last_updated: 2026-11-16T09:17:13.266Z
source:
  kind: github_repo
  repo: loopx-project/loopx
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 6687
  last_commit: 2026-11-16T08:58:46Z
  stars_delta_7d: 277
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 6687
language: en
needs_keys: false
prerequisites:
  - multi
readme_source:
  repo: loopx-project/loopx
  path: README.md
  branch: main
  fetched_at: 2026-11-16T09:16:59.385Z
  truncated: true
type: agent_tool
tool:
  subcategory: memory_rag
  install_command: pip install loopx
  runtime: multi
  execution_mode: local
  has_mcp_support: true
  mcp_launch:
    transport: stdio
    command: uvx
    args:
      - loopx
    env_vars: []
    confidence: manifest
---

<div align="center">

<h1 align="center">LoopX 2.0</h1>

<a href="https://trendshift.io/repositories/102379"><img src="https://trendshift.io/api/badge/repositories/102379" alt="LoopX — #1 on GitHub Trending, tracked by Trendshift" width="220" height="48"></a>

**Start with one goal. Keep long-running agent work verifiable.**

Tell the Agent you already use what you want done. LoopX preserves goals,
progress, decisions and verifiable results so work can continue across sessions.<br>
<sub>An open, harness-neutral control plane for 24/7 always-on agents across Codex, Claude Code, DeepSeek Harness and other runtimes—scaling from local SQLite workflows to multi-agent teams.</sub>

[![Release](https://img.shields.io/github/v/release/loopx-project/loopx?color=brightgreen)](https://github.com/loopx-project/loopx/releases/latest) [![License](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](https://raw.githubusercontent.com/loopx-project/loopx/main/LICENSE) [![TypeScript core](https://img.shields.io/badge/core-TypeScript-3178C6?logo=typescript&logoColor=white)](https://raw.githubusercontent.com/loopx-project/loopx/main/docs/architecture/rfcs/typescript-control-plane-migration-v0.md) [![Python](https://img.shields.io/badge/python-3.11%2B-blue.svg)](https://raw.githubusercontent.com/loopx-project/loopx/main/pyproject.toml)

[![Local-first state](https://img.shields.io/badge/local--first-state-brightgreen.svg)](https://raw.githubusercontent.com/loopx-project/loopx/main/docs/public-private-boundary.md) [![Loop Agents](https://img.shields.io/badge/status-loop%20agents%20supported-brightgreen.svg)](https://raw.githubusercontent.com/loopx-project/loopx/main/docs/product/release-readiness.md) [![GitHub contributors](https://img.shields.io/github/contributors-anon/loopx-project/loopx?color=blue)](https://github.com/loopx-project/loopx/graphs/contributors) [![Discord](https://img.shields.io/badge/Discord-Join-5865F2?logo=discord&logoColor=white)](https://discord.gg/XmGgQyCFZd) [![Listed on dsh-plugin.org](https://dsh-plugin.org/badges/listed.svg)](https://dsh-plugin.org/plugins/loopx-project/loopx)

[Get started](#quick-start) · [Why LoopX](#why-loopx) · [24/7 Always-On](#always-on-agents) · [See it in action](#see-loopx-in-action) · [Evidence](#evidence) · [Contribute](#contributing) · [Docs](https://loopx-project.github.io/loopx/docs/) · [简体中文](https://raw.githubusercontent.com/loopx-project/loopx/main/README.zh-CN.md) · [日本語](https://github.com/loopx-project/loopx/blob/main/README.ja.md)

</div>

---

<a id="quick-start"></a>

## Start with one goal

**1. Install LoopX once.** Requires Python 3.11+ and
Node.js 22.22.3+ (24 LTS recommended).

```bash
python3 -m pip install --upgrade loopx && loopx workflow-skills --install
```

[Install options and upgrades](https://github.com/loopx-project/loopx/blob/main/docs/guides/installing-loopx.md)

**2. Tell your Agent the outcome.** Restart your Agent host, open your project,
then send one natural-language goal:

```text
$loopx speed up this project's slowest workflow; compare approaches and verify the gains
```

LoopX turns that into a visible plan, decisions that need you, and verification
as needed. Claude Code uses `/loopx <complex task>`; see
[host setup](#start-from-your-agent) for other runtimes. Prefer a guided first
run? [Choose a task below](#try-loopx).

## 📰 News

<!-- Curate major product/architecture releases, research findings, consequential
     engineering lessons and substantive community milestones. Each needs a public
     source and a distinct reader takeaway; version bumps or PR merges alone are
     not news. Keep both languages aligned, newest first, using verified publication
     dates (UTC). -->

- **2026-11-01 · 📘 [Progressive context delivery for 24/7 agents](https://loopx-project.github.io/loopx/blog/context-delivery/)** — Compaction-cycle structured deltas and progressive views cut control-plane bytes across 213 model-facing wakes (`32.5%` single-layer progressive view; `3.0%` body / `5.0%` CLI stacked first-read entry across 112 in-cycle continuations) while preserving lossless baseline recovery ([47-day freshness postmortem](https://loopx-project.github.io/loopx/blog/five-freshness-incidents/)).
- **2026-10-25 · 🤝 [Long-horizon agent research: collaborators welcome](https://loopx-project.github.io/loopx/blog/edgebench-feedback-and-memory/)** — Exploring **breakthroughs in long-horizon outcomes under equal budgets**, through feedback, replanning and reproducible evaluation on EdgeBench and real-world tasks. Academic labs and industry teams are welcome to collaborate, comparing outcomes and total cost. [Discuss collaboration](https://github.com/loopx-project/loopx/discussions).
- **2026-10-20 · 🚀 [LoopX 2.0](https://github.com/loopx-project/loopx/releases/tag/v2.0.0)** — A shared TypeScript state layer and long-horizon research workbench. [Migration guide](https://github.com/loopx-project/loopx/blob/main/docs/product/releases/v2.0.0.md) · [Engineering story](https://loopx-project.github.io/loopx/blog/typescript-control-plane-refactor/).
- **2026-10-14 · 🤖 [Agentic software](https://loopx-project.github.io/loopx/blog/semantic-software-development/)** — Connecting goals, evidence and human feedback to engineering delivery.
- **2026-10-02 · 🧠 [Long-horizon bootstrapping & RSI](https://loopx-project.github.io/loopx/blog/long-horizon-rsi/)** — Four months of developing LoopX with LoopX: public project history and a design perspective on system-level self-improvement.
- **2026-09-18 · 🧪 [LoopX × LHTB](https://loopx-project.github.io/loopx/benchmarks/lhtb/)** — A 46-task, same-model study provides empirical support for **trading more compute for better outcomes**: LoopX 1.0.3 Heartbeat continued runs reach mean reward 17.3% above Plain Codex and 10.6% above native Goal.
- **2026-09-06 · 🎉 [LoopX 1.0](https://github.com/loopx-project/loopx/releases/tag/v1.0.0)** — A Personal Agent Workspace to follow agent work, act on decisions, and inspect delivered results across sessions. [Workspace guide](https://github.com/loopx-project/loopx/blob/v1.0.0/docs/guides/personal-workspace-user-guide.md).
- **2026-08-02 · ⏱️ [200+ hour trajectories shared on X](https://x.com/huangruiteng/status/2083904257494024425)** — Early owner-run examples spanning 200+ elapsed hours drew broad attention on X, showing work across execution, waits, human decisions and recovery. [Trajectories and limits](#open-source-issue-fix).

[All releases](https://github.com/loopx-project/loopx/releases)

<a id="how-it-works"></a>

## Why LoopX

You should not have to learn LoopX internals before the first useful action.
The default path is goal-first: describe the outcome, let the Agent prepare the
plan, and inspect the machinery only when a decision or debugging need calls
for it.

An agent can finish a task in one session. Long-running work is harder:
objectives change, owner decisions appear, evidence goes stale, and agents
hand work to peers. A timer can keep a loop running without making it useful.

- **Continue without starting over.** Keep the Goal, accepted requirements,
  decisions and evidence across sessions and restarts.
- **[Coordinate without dropping context.](https://loopx-project.github.io/loopx/blog/agent-facing-kanban/#walkthrough)** Connect delegated work, dependent
  artifacts, review and returned results while keeping responsibility explicit.
- **Judge progress by what changed.** Inspect deliverables, supporting and
  refuting evidence, costs and the next decision—not just activity.

Your Agent runtime supplies the model and tools. LoopX’s durable state layer
preserves goals, acceptance, decisions, ownership and evidence across sessions
and runtimes for engineering, research and operations. Agents and people use
those facts to reassess what to do next. Human authorization still governs
protected actions.

<a id="learn-loopx"></a>

| What you want to do | Start here |
| --- | --- |
| Keep a coding or research agent working across sessions | [Install and start](#quick-start) |
| Manage personal projects, schedules and decisions in one place | [Personal Agent Workspace](#meet-the-personal-agent-workspace) |
| Wire up a 24/7 always-on agent without hand-rolling infra | [24/7 Always-On Agent Control Plane](#always-on-agents) |
| Let agents collaborate and deliver verifiable results | [Agent collaboration guide](https://github.com/loopx-project/loopx/blob/main/docs/product/use-cases/cross-runtime/README.md) |

LoopX keeps the durable work state in one compact layer:

<picture>
  <source media="(max-width: 640px)" srcset="docs/assets/harness-neutral.en.mobile.svg">
  <img src="https://raw.githubusercontent.com/loopx-project/loopx/main/docs/assets/harness-neutral.en.svg" alt="Your harness runs the turn. LoopX carries the work." width="1200">
</picture>

Agent runtimes execute the work. LoopX keeps the state that lets engineering,
research, discovery, and operations loops continue across runs. It is not
another agent framework or a provider-specific orchestration runtime.

<details>
<summary>Advanced: how the control layer works and where it fits</summary>

<picture>
  <source media="(max-width: 640px)" srcset="docs/assets/control-plane-board.en.mobile.svg">
  <img src="https://raw.githubusercontent.com/loopx-project/loopx/main/docs/assets/control-plane-board.en.svg" alt="Advanced view of a governed state transition, not just a timer." width="1200">
</picture>

A useful mental model is an
**[agent-native Kanban for long-running work](https://github.com/loopx-project/loopx/blob/main/docs/development/control-plane-course/00-concept-primer.md)**.
Cards carry identity, authority, evidence, and continuation. Moves are validated
operators such as claim, gate, monitor, and writeback. The board is a
projection; LoopX state remains the source of truth.

Registered agents are peers. Claims, leases, task boundaries, capabilities, and
typed continuation decide who acts next; no durable leader identity is
required.

LoopX is useful when you run:

- multi-day engineering, research, benchmark, or experiment objectives;
- issue and PR loops that must preserve scope, evidence, and review state;
- recurring heartbeat or monitor work;
- projects with owner, safety, publication, or private-data gates;
- peer-agent teams where ownership, leases, and handoff matter;
- creator, research, or operations workflows whose progress must remain
  legible to a non-engineering operator.

LoopX is not an autonomous production controller. Dangerous permissions,
publishing, production writes, and final ownership stay with the human.

</details>

<a id="always-on-agents"></a>

### Building 24/7 Always-On Agents Without Hand-Rolling the 5 Subsystems

[Anthropic's *Building always-on agents*](https://claude.com/resources/articles/building-always-on-agents)
notes that effective persistent agents spend most of their wall-clock life
asleep at zero tokens and wake for bounded runs across five surrounding
subsystems: **Event Inbox**, **Timers**, **Memory**, **Permissions**, and an
**Outbox**. In practice, teams often re-build fragile glue—cron scripts, JSON
queues, prompt compaction, and ad-hoc approval checks—for every agent host, only
to hit silent staleness, duplicate writes, or noisy status spam by week two.

LoopX packages that open, harness-neutral control layer so the runtimes you
already use (Codex CLI, Claude Code, DeepSeek Harness, or custom runners) can
operate 24/7 with explicit durability and human gates:

| Always-on primitive | LoopX control-plane subsystem | What it prevents in multi-week runs |
| --- | --- | --- |
| **Event Inbox** | Single-flight **Goal / Todo / Hard Lease** queue, async app inbox, and connected Lark / GitHub listeners | Duplicate workers mutating the same repo state; dropped human inputs mid-run |
| **Timers & Wakeups** | **Guarded Heartbeat** and safe recurring presets (`daily-triage`, `changelog-draft`, `pr-watch`; inspect via `loopx preset list`) | Blind cron loops burning tokens when nothing changed or a gate is still waiting on a human |
| **Memory & Compaction** | [`Decision Context`](https://github.com/loopx-project/loopx/blob/main/loopx/capabilities/decision_context/README.md) source tracking, compaction-cycle **Progressive + Delta** [`context_delivery`](https://loopx-project.github.io/loopx/blog/context-delivery/) (`32.5%` view across 213 wakes; `3.0% / 5.0%` first-read entry across 112 in-cycle wakes), and optional [`Reward Memory`](https://github.com/loopx-project/loopx/blob/main/loopx/capabilities/reward_memory/README.md) | Silent source staleness ([5 incidents across 253 turns / 47 days](https://loopx-project.github.io/loopx/blog/five-freshness-incidents/)); compounding prompt replay or broken deltas across compaction |
| **Permissions & Deferred Calls** | Explicit **owner, safety, publication, and private-data gates**, isolated worktrees, and review-ready handoffs | Autonomous cron runs publishing externally, forcing merges, or leaking private context |
| **Outbox** | Shared Workspace & Lark Goal/Decision/Evidence views surfacing genuine completions, blockers, and open gates | Fragmented terminal logs and high-noise pings that force humans to babysit runs |

**Solo local to team & organizational scale—on one set of contracts:**

| Scale | How LoopX runs | Authority, collaboration & governance posture |
| --- | --- | --- |
| **Solo developer & local agent** | `python3 -m pip install --upgrade loopx` with zero external infrastructure; connect your existing CLI/Desktop runtime | Canonical local **SQLite** store with hard leases (plus existing File setups), surviving restarts and compaction at zero idle tokens |
| **Engineering team & enterprise path** | Peer workers claim todos and return reviewed artifacts on shared Goals via Desktop Workspace, GitHub, and Lark ([three-agent demo](https://github.com/loopx-project/loopx/blob/main/examples/collaboration-delivery/README.md)) | Preserves worker ownership and human approval gates; extends to staged **PostgreSQL** remote authority ([provider](https://github.com/loopx-project/loopx/blob/main/loopx/control_plane/coordination/postgresql_authority_store.ts)) and planned org governance—RBAC, SSO, quotas, signed audit—in the [adoption & SaaS roadmap](https://github.com/loopx-project/loopx/blob/main/docs/product/roadmaps/saas-opportunity-assessment.md) |

## See LoopX in Action

<a href="https://github.com/user-attachments/assets/543af0b1-c3d4-4cfb-aedd-a68563a20601"><img src="https://raw.githubusercontent.com/loopx-project/loopx/main/docs/assets/personal-workspace/research-workbench-hero.webp" alt="LoopX 2.0, the long-horizon research workbench for enterprise teams, research organizations and independent builders; recorded research history with count ribbons redrawn to scale in a labelled App frame" width="960"></a><br>
<sub><a href="https://github.com/user-attachments/assets/543af0b1-c3d4-4cfb-aedd-a68563a20601">Watch the research-workbench film · 86s</a> · <a href="https://github.com/loopx-project/loopx/blob/main/docs/assets/personal-workspace/loopx-research-films.md">transcripts, subtitles and sources</a>. Recorded App excerpts, synthetic examples and illustrations are labelled.</sub>

<a id="research-workbench"></a>

### Research that can continue

Open a Goal to inspect its work, responsible Agents and recorded Explore history.
Use **Deep analysis** to inspect a registered trajectory, its citations, native
outcome readback and separately measured costs. Research also shows source-bound
[human attention](https://github.com/loopx-project/loopx/blob/main/docs/reference/trajectory-assessment.md#human-attention-in-research-optional),
with recorded inputs, timing coverage and inspectable optimization points. An Agent prepares the source;
opening a page or reading a result does not start a model call. Explicit analysis
uses the configured host and account.

Keep supported, refuted and unknown findings visible. Inspect why an approach
changed or continued, then carry the evidence into the next attempt.

### Meet the Personal Agent Workspace

Keep long-horizon goals in one local-first workspace. Goals, attention,
conversations, tasks, files, schedules, and recovery stay durable across days,
restarts, and harnesses. Reopen a project, inspect the previous turn’s state
and evidence, and continue the next permitted action.

For a new default Codex Goal, review the task and workspace permission before
confirming **Create Goal and start first run**. The original task continues in
its original conversation when independent checks and allowance are ready;
ordinary messages remain read-only. Follow the [workspace guide](https://github.com/loopx-project/loopx/blob/main/docs/guides/personal-workspace-user-guide.md#在原对话执行已检查的任务--run-the-checked-original-task)
for waiting, result readback and recovery.

LoopX brings these long-horizon control states into the Personal Workspace. It gives you one place to:

- see what needs you, what is running, what is being watched, and what is
  scheduled or stopped;
- configure Goal capabilities, distinguish machine defaults from Goal overrides,
  and preview changes before applying them;
- steer a live turn, queue a message, or use the async inbox from a connected
  Lark conversation with explicit Goal/Agent/session routing;
- inspect deliverable files, periodic reports, and their supporting evidence;
- continue across Codex, Claude Code, direct-model, and other registered Agent
  sessions without losing Goal state or evidence;
- review protected changes through typed preview, explicit confirmation, and
  receipts while LoopX state—not the browser—remains authoritative.

For Manager group conversations, LoopX keeps message visibility separate from
Turn authority; see the bilingual [Lark Manager context and authority
contract](https://github.com/loopx-project/loopx/blob/main/docs/reference/protocols/lark-manager-context-authority-v0.md).

```bash
loopx dashboard
```

`loopx dashboard` is the supported browser/PWA launch path. You can also download
native desktop previews from the [current release](https://github.com/loopx-project/loopx/releases/latest);
they reuse the same loopback services and Goal state. Apple Silicon macOS supports
signed App updates that pair the shell with its bundled runtime, plus repair and
recovery. Python 3.11+ is required; the App is ad-hoc signed, not notarized.
Windows NSIS preview installers support the same signed update flow on the main
channel, with a separately installed CLI; the stable channel and MSI installs stay
manual, App rollback and repair are unavailable, and the installer carries no
Authenticode certificate (Windows may show a SmartScreen prompt).
[Desktop installation, updates, and source development](https://github.com/loopx-project/loopx/blob/main/apps/desktop/loopx-control-plane/README.md).

<img src="https://raw.githubusercontent.com/loopx-project/loopx/main/docs/assets/personal-workspace/capability-1.0.webp" alt="Real Workspace recording: configure child-task capacity and allowed responsibility domains" width="960">

<details>
<summary>Capability settings and reproducible workspace scenarios</summary>

From a source checkout, run `python -m demo.workspace serve` to explore a community
event, a home-energy comparison, and a neighborhood website release. Each has four
work roles, 18 tasks, two decisions, and two watches. The screenshot above comes
from this reproducible workspace. [Scenarios and replay instructions](https://github.com/loopx-project/loopx/blob/main/demo/workspace/README.md).

</details>

[Watch the full 32-second walkthrough](https://github.com/loopx-project/loopx/blob/main/docs/assets/personal-workspace/loopx-dashboard-launch.mp4)
· [Read the workspace guide](https://github.com/loopx-project/loopx/blob/main/docs/guides/personal-workspace-user-guide.md)
· [Try the five-minute tour](https://github.com/loopx-project/loopx/blob/main/docs/guides/personal-workspace-trial-guide.md)

## Try LoopX

Choose a walkthrough with a result you can inspect:

| Start with | What you'll do |
| --- | --- |
| [Your first bug-fixing loop](https://github.com/loopx-project/loopx/blob/main/docs/guides/first-bugfix-loop.md) | Reproduce two bugs in a small Python project, let the Agent fix them, then check the tests and patch. |
| [Long-running coding work](https://github.com/loopx-project/loopx/blob/main/docs/guides/long-running-coding-agents.md) | Fix an issue or keep improving your own repository, with review, evidence and recovery across sessions. |
| [Personal Agent Workspace (中文)](https://github.com/loopx-project/loopx/blob/main/docs/guides/personal-workspace-user-guide.md) | Follow the illustrated guide to manage projects, conversations, tasks and delivered results in the App. |

### Start From Your Agent

After the [two-step setup](#quick-start), use the entry for your host in a
session opened on your project:

| Host | Start and confirm continuation |
| --- | --- |
| Codex App | `$loopx <complex task>`; confirm the [heartbeat automation is saved](https://github.com/loopx-project/loopx/blob/main/docs/guides/first-bugfix-loop.md#confirm-that-it-actually-started). |
| Codex CLI | `$loopx <complex task>`; activate the generated [native `/goal`](https://github.com/loopx-project/loopx/blob/main/docs/product/runtimes/codex-cli/codex-cli-packaged-install.md#current-user-path) in the same session. |
| Claude Code | `/loopx <complex task>`; follow the [loop driver setup](https://github.com/loopx-project/loopx/blob/main/docs/guides/newcomer-command-path.md#choose-the-loop-driver) for recurring work. |
| DeepSeek Harness | Install the [native DSH plugin](https://github.com/loopx-project/loopx/blob/main/packages/dsh-loopx-plugin/README.md), select the `loopx` skill, then describe the task |

LoopX reuses existing project state or connects the project, plans the work as
Todos and guides host activation. Ask your Agent to confirm the active Goal,
next Todo and continuation mechanism; a setup packet alone is not an active loop.
Keep the host available for continued work. `loopx status` shows the Goal,
decisions waiting for you and the next Todo; `loopx doctor` diagnoses the install.

[Installing LoopX](https://github.com/loopx-project/loopx/blob/main/docs/guides/installing-loopx.md) covers native Windows, `pipx`,
upgrades, rollback and uninstall.

**Upgrading from 1.x?** Read the [2.0 migration and recovery guide](https://github.com/loopx-project/loopx/blob/main/docs/product/releases/v2.0.0.md) before continuing existing Goals.

<details>
<summary><b>Other hosts, loop drivers and custom runners</b></summary>

| Host | Recommended start | Loop driver |
| --- | --- | --- |
| Codex App | `$loopx <complex task>`, or choose `loopx` from `/skills`, in a thread opened on the project. | Codex App heartbeat automation, refreshed from `quota should-run.scheduler_hint` |
| Codex App over SSH | `loopx agent-onboard --agent-type codex-app-ssh --project .` | The returned visible `/goal <task_body>` |
| Codex CLI | Start `codex` in the project, then `$loopx <complex task>` or `/skills`. | Visible `/goal <task_body>`; no hidden headless execution by default |
| Claude Code | Install the opt-in adapter, then run `/loopx <task>` followed by `/loop`. | Native Claude Code `/loop` gated by LoopX |
| KunlunCode | Run `loopx-kunluncode connect --project . --goal-id <goal-id> --agent-id <registered-agent-id>`, add a bounded todo, then run `loopx-kunluncode run --project .`. | Native Goal Pro through app-server; LoopX writes completion and quota only after strict verification |
| OpenCode | Install the static command facade; opt in to `--with-goal-bridge` for recurring goals. | OpenCode command facade and explicit goal bridge |
| Pi | Install the opt-in goal extension with `loopx slash-commands --install --surface pi`, then use `/loopx <task>` from a trusted Pi session. | Visible Pi goal extension gated by LoopX quota (`loopx_goal_activate` + `agent_settled` continuation) |
| ZCode | Install the skill facade with `loopx slash-commands --install --surface zcode`, then invoke the `$loopx` skill (or `/loopx <complex task>`) from a ZCode session in the project. | The ZCode session's own turn loop; every continuation enters through `quota should-run` |
| Antigravity CLI (agy) | Install the skill facade with `loopx slash-commands --install --surface agy`, then invoke the `loopx` skill (or `/loopx <complex task>`) from an `agy` session in the project. | The session's native `/goal` loop (audited until `<!-- GOAL_COMPLETE -->`) with `schedule` self-wakes while the session lives; the facade instructs every turn/wake to re-enter through `quota should-run` — advisory pacing, not a host-enforced gate |
| Kiro CLI | Install the skill facade with `loopx slash-commands --install --surface kiro-cli`, then run `/loopx <complex task>` from a `kiro-cli` session in the project. | The session's native `/goal --max <N> <task_body> Done when: <criteria>` loop, with the acceptance criteria stated inside the goal statement because the host derives them from it, bounded by the host's own iteration budget (default 5) and settled through the built-in `goal` completion contract; the facade instructs every turn and iteration to re-enter through `quota should-run` — advisory pacing, not a host-enforced gate |
| DeepSeek Harness (dsh) | Install the [native DSH plugin](https://github.com/loopx-project/loopx/blob/main/packages/dsh-loopx-plugin/README.md), select the `loopx` skill, and describe the task. The [dsh goal-mode adapter](https://github.com/loopx-project/loopx/blob/main/loopx/dsh_goal_mode/README.md) remains available for headless turns. | Native same-session continuation and GoalBar, or headless dsh segments; both remain gated by LoopX authority |
| Cursor, shell, or custom runner | `loopx start-goal --guided --project . --goal-text "<task>"`, or call LoopX from your runner. | Your shell, scheduler, or runner |

The exact, copy-ready setup messages and host recovery paths live in
[Getting Started](https://github.com/loopx-project/loopx/blob/main/docs/guides/getting-started.md). Host integrations can inspect
the [Codex App host command registry contract](https://github.com/loopx-project/loopx/blob/main/docs/reference/protocols/codex-app-host-command-registry-v0.md),
the [Codex CLI packaged install path](https://github.com/loopx-project/loopx/blob/main/docs/product/runtimes/codex-cli/codex-cli-packaged-install.md),
the [Claude Code adapter](https://github.com/loopx-project/loopx/blob/main/loopx/claude_goal_mode/README.md), the
[KunlunCode native Goal adapter](https://github.com/loopx-project/loopx/blob/main/loopx/kunluncode_goal_mode/README.md), the
[Kiro CLI goal-mode adapter](https://github.com/loopx-project/loopx/blob/main/loopx/kiro_cli_goal_mode/README.md), or the
[DeepSeek Harness turn adapter](https://github.com/loopx-project/loopx/blob/main/loopx/dsh_goal_mode/README.md).

See the [60-second DSH × LoopX Replan recording and reproducible
fixture](https://github.com/loopx-project/loopx/blob/main/docs/showcases/cases/dsh-loopx-replan-demo.md) for the native path:
install the plugin, select one skill, change a material constraint, and inspect
the preserved decision trail.

For custom runners, start with the
[minimal custom runtime example](https://github.com/loopx-project/loopx/blob/main/docs/guides/minimal-custom-runtime-example.md)
(`python3 examples/custom-runtime-minimal-cli-turn-smoke.py`), then the full
[Embed LoopX in Your Agent Runner](https://github.com/loopx-project/loopx/blob/main/docs/guides/custom-agent-runner-integration.md)
guide and the [worker bridge install contract](https://github.com/loopx-project/loopx/blob/main/docs/integrations/worker-bridge-install-contract.md).
The core tick is deliberately small:

```text
loopx quota should-run      # should this registered agent act now?
loopx todo claim            # who owns this slice?
loopx todo update           # what changed?
loopx refresh-state         # what should the next turn see?
loopx quota spend-slot      # account for a completed, validated slice
```

Clone-based install is only for contributors who want the live canary wrapper:

```bash
git clone https://github.com/loopx-project/loopx ~/loopx
~/loopx/scripts/install-local.sh
loopx doctor
```

</details>

### First-Run Feedback

If LoopX works for you, a one-minute public issue helps us learn what a real
first run looks like. It is optional, contains no telemetry, and should not
include logs, paths, credentials, internal project names, or goal contents:

- [First-run feedback](https://github.com/loopx-project/loopx/issues/new?template=first_run.yml)
- [Usage story for longer runs](https://github.com/loopx-project/loopx/issues/new?template=usage_story.yml)

`loopx first-run-report` prints the same prefilled link locally without
sending anything.

Basic usage statistics default on after first-use disclosure: a daily random-ID
heartbeat for platform support and continued use, plus separate ID-free CLI
counts. No content is collected. Disable both in Settings → Capability Center
or with `loopx usage-ping disable` / `LOOPX_USAGE_PING=0`; inspect payloads with
`loopx usage-ping status`. See [Basic usage statistics](https://github.com/loopx-project/loopx/blob/main/docs/reference/usage-ping.md).

<a id="see-it-in-action"></a>

## Evidence

<a id="lhtb-results"></a>

### LHTB: Higher Mean Reward With the Same Model

**LoopX 1.0.3 Heartbeat reaches 0.4948 mean reward across 46 matched tasks:**
**+17.3% over Plain Codex** and **+10.6% over native Codex Goal**.
All three use GPT-5.6 Sol, max reasoning effort, and disabled Web Search.
[Long-Horizon Terminal-Bench](https://zli12321.github.io/LHTB/index.html) goes beyond coding: these tasks span research
reproduction, scientific simulation, multimodal analysis, professional
workflows, games, and systems work.

| Execution mode | Mean reward ↑ | Strict pass rate (≥0.95) | Pass rate (≥0.80) |
| --- | ---: | ---: | ---: |
| Plain Codex | 0.4218 | 7/46 (15.2%) | 12/46 (26.1%) |
| Native Codex Goal | 0.4475 | 4/46 (8.7%) | 14/46 (30.4%) |
| **LoopX 1.0.3 Heartbeat** | **0.4948** | **7/46 (15.2%)** | **15/46 (32.6%)** |

The ≥0.80 threshold is a supplementary, post-hoc view; ≥0.95 remains the
benchmark's strict solved threshold. No score in this study equals 0.80, so
these counts also match the study brief's >0.80 view.

Against native Goal, task-level rewards improve on **23**, tie on **13**, and
regress on **10** tasks. Strict solves match Plain Codex, so the mean gain is
not a claim that every task improves or that more tasks are fully solved than
Plain. Mean reward also credits partial progress.

One effective trial per task and mode; designated replacement trials and
unequal runtime/budgets, including longer budgets for some Heartbeat replacements.
These are observed system results, not an equal-budget efficiency result or
an isolated causal estimate of LoopX's effect.

[Interactive results, task comparisons and methodology](https://loopx-project.github.io/loopx/benchmarks/lhtb/)
· [Five-arm study and limits](https://github.com/loopx-project/loopx/blob/main/benchmark/LHTB/studies/five-arm-gpt56sol-max/README.md)
· [Public task-level scores](https://github.com/loopx-project/loopx/blob/main/benchmark/LHTB/studies/five-arm-gpt56sol-max/data.json)

Beyond benchmarks, LoopX also has inspectable long-running project evidence.
The public OpenViking contribution sequence spans
**200+ hours of elapsed loop lifetime**, preserving
bounded turns, decisions, and evidence updates. This measures wall-clock project
time, not continuous model execution or unattended production autonomy. Open
the visual to inspect the public-safe task graph, evidence branches, and
cross-turn decisions; the case states its source and reproducibility boundary.

### Open-Source Issue Fix

**200+ hour public contribution arc: PR delivery and reusable fix knowledge
evolve together.**

<a href="https://github.com/loopx-project/loopx/blob/main/docs/assets/long-running-loop-openviking-trajectory.png">
  <img src="https://raw.githubusercontent.com/loopx-project/loopx/main/docs/assets/long-running-loop-openviking-trajectory.png" alt="Open-source issue-fix trajectory linking focused PR delivery with reusable LoopX capabilities" width="760">
</a>

<details>
<summary>Contribution sources and evidence boundary</summary>

LoopX's creator uses this path as an
[OpenViking contributor](https://github.com/volcengine/OpenViking/pulls?q=is%3Apr+author%3Ahuangruiteng).
The represented public contribution sequence spans more than 200 elapsed hours
from its first PR creation to the latest represented review or update. The
[Issue-Fix capability](https://github.com/loopx-project/loopx/blob/main/loopx/capabilities/issue_fix/README.md) keeps rolling
repository context, revision-stamped fix knowledge, and reviewer-facing
preferences separate; linked PRs plus current checkout source and tests remain
authoritative.

</details>

### Used In Real Projects

- **Independent user · `>13h` C++ accuracy run.** The user reported that a
  multi-stage task stayed aligned, triggered public research, adopted a
  [public code-memory tool](https://github.com/DeusData/codebase-memory-mcp),
  and improved final precision. [Read the evidence boundary](https://github.com/loopx-project/loopx/blob/main/docs/showcases/cases/independent-cpp-accuracy-long-run.md).
- **Independent user · `4d` unattended run.** The user reported four days
  without human intervention, useful ongoing work, and a periodic report
  surface. [Read the redacted case](https://github.com/loopx-project/loopx/blob/main/docs/showcases/cases/independent-four-day-unattended-agent.md).
- **Independent user · `7` merged PRs.** A LoopX-attributed Engine refactor is
  visible in a [public issue](https://github.com/zilliztech/mfs/issues/166) and
  seven merged PRs; attribution and the reported `1B+` token scale remain user
  reports. [Inspect the case](https://github.com/loopx-project/loopx/blob/main/docs/showcases/cases/independent-public-engine-refactor.md).
- **Independent user · vLLM optimization merged upstream.**
  [Zheng Cai](https://x.com/zigzagcai/status/2109952174822408443) reports using
  LoopX as the workflow engine for profiling, research, experiments, and
  correctness checks. [vLLM PR #54951](https://github.com/vllm-project/vllm/pull/54951)
  merged a sparse-indexer optimization; its reported **32.59%** total-token
  throughput gain is for GLM-5.3-Flash at 1M input tokens, 4×H200, TP4, C1.
  [Inspect the workflow, full conditions, and evidence boundary](https://github.com/loopx-project/loopx/blob/main/docs/showcases/cases/independent-vllm-long-context-optimization.md).

These are four featured independent-user cases, not the full inventory. Browse the
[complete Showcase catalog](https://github.com/loopx-project/loopx/blob/main/docs/showcases/README.md) for contributor cases,
creator dogfooding, reproducible demos, and explicit evidence-strength labels.

### Exploratory Benchmark Studies

- **[SWE-Marathon](https://loopx-project.github.io/loopx/benchmarks/swe-marathon/):**
  Five execution modes on 15 matched tasks compare self-verification, scores,
  and cost. More self-verification did not consistently yield higher scores.
- **[LHTB × LoopX](https://loopx-project.github.io/loopx/benchmarks/lhtb/):**
  The [results above](#lhtb-results) lead into five execution mechanisms,
  task-level comparisons, regressions, and exploratory task-type analysis.
- **[DeepSWE behavior analysis](https://loopx-project.github.io/loopx/benchmarks/deepswe/behavior-discovery/)** (Chinese):
  Selected cases examine how domain hints relate to requirement retention and
  verification choices, offering mechanism hypotheses for further testing.

SWE-Marathon and LHTB have one effective trial per task and mode; DeepSWE uses
selected cases and post-hoc analysis.

More inspectable surfaces:

- the [public homepage](https://loopx-project.github.io/loopx/) for the product
  narrative, quick start, and long-running evidence;
- the [complete Showcase catalog](https://github.com/loopx-project/loopx/blob/main/docs/showcases/README.md) and its
  [bilingual hosted index](https://github.com/loopx-project/loopx/blob/main/docs/showcases/index.html);
- the [Agent collaboration guide](https://github.com/loopx-project/loopx/blob/main/docs/product/use-cases/cross-runtime/README.md) for dependent artifacts, independent review and returned results;
- the public [user manual](https://my.feishu.cn/wiki/CaL5wMk9ui17ngkWzeUcMlAYnZg).

<a id="capability-surface"></a>

## Capabilities

Start with the outcome you need. Optional capabilities reuse the same Goal,
work ownership and evidence; check their support and permission boundaries.

### Product Capability Paths

Capabilities turn those generic primitives into outcome-owned work lanes. Start
from the outcome, then inspect the current registered implementation and its
write boundary:

| You need to... | Capability | Start with |
| --- | --- | --- |
| Turn a public issue into a reviewable, evidence-backed change | [Issue Fix](https://github.com/loopx-project/loopx/blob/main/loopx/capabilities/issue_fix/README.md) | `loopx capability show issue-fix --format json` |
| Qualify the exact final diff before delivery | [Change Quality](https://github.com/loopx-project/loopx/blob/main/loopx/capabilities/change_quality/README.md) | `loopx capability show change-quality-qualification --format json` |
| Notice busy-but-off-goal work rounds before the periodic review | [Progress-Review Sentinel](https://github.com/loopx-project/loopx/blob/main/loopx/capabilities/progress_review/README.md) | `loopx capability show progress-review-sentinel --format json` |
| Preserve a changing stack of already reviewed branches | [Integration Branch](https://github.com/loopx-project/loopx/blob/main/loopx/capabilities/integration_branch/README.md) | `loopx capability show integration-branch-reconcile --format json` |
| Explore uncertain research without losing hypotheses and findings | [Explore](https://github.com/loopx-project/loopx/blob/main/loopx/capabilities/explore/README.md) | `loopx capability show explore --format json` |
| Rebase decisions on current evidence and verified outcomes | [Decision Context](https://github.com/loopx-project/loopx/blob/main/loopx/capabilities/decision_context/README.md) | `loopx capability show decision-context --format json` |
| Produce scheduled or progress-triggered reports with receipts | [Periodic Report](https://github.com/loopx-project/loopx/blob/main/loopx/capabilities/periodic_report/README.md) | `loopx capability show periodic-report --format json` |

Run `loopx capability list --format json` for the authoritative catalog in the
installed release. A capability detail reports its user value, maturity,
provider readiness, entry commands, write boundaries, protocols, and durable
validation. Browse the [human-readable capability index](https://github.com/loopx-project/loopx/blob/main/loopx/capabilities/README.md)
to choose by outcome; use [Extensions and Capabilities](https://github.com/loopx-project/loopx/blob/main/docs/reference/extensions.md)
when installing or building a provider.

### Core Control-Plane Promises

The Kernel folds its mechanics into five questions. Each question delivers one
product promise on top of any agent harness: objective → long-horizon state;
next → semantic decisions; human judgment → human-agent collaboration;
evidence → recovery; continuation → governance.

| Question | What LoopX keeps visible |
| --- | --- |
| What is the objective? | The active goal, explicit scope, and current authority. |
| What happens next? | Ordered user and agent todos, ownership, claims, and leases. |
| What needs human judgment? | Concrete user gates instead of a vague "waiting for owner." |
| What evidence changed? | Compact run history, validation, blockers, and accepted writeback. |
| May the loop continue? | Quota, capabilities, safe fallback, scheduler hints, and stop conditions. |

Preview a Goal stop with `loopx goal-lifecycle --goal-id <id> --operation stop`;
use `--operation resume` to restore eligibility. Apply the transition with
`--actor-kind owner --execute`, retaining a fresh `--expected-state-fingerprint`
when supplied by the Goal actions view. The ordinary and standalone
[`loopx-core`](https://github.com/loopx-project/loopx/blob/main/packages/loopx-core/README.md) CLI use the same lifecycle owner.

<details>
<summary>Architecture, control-plane surfaces and runtime responsibilities</summary>

LoopX keeps the architecture explicit so the same governed outcome can survive
a change of agent harness or external provider. The terms describe different
boundaries rather than interchangeable kinds of plugin:

| Boundary | Meaning | Go deeper |
| --- | --- | --- |
| **Kernel** | Owns durable goal, todo, gate, evidence, quota, recovery, and scheduling truth. | [Architecture](https://github.com/loopx-project/loopx/blob/main/docs/architecture.md) |
| **Capability** | Defines a stable, provider-neutral contract for producing one bounded, verifiable caller outcome from LoopX state. | [Capability catalog](https://github.com/loopx-project/loopx/blob/main/loopx/capabilities/README.md) |
| **Provider** | Calls an external system or local implementation and returns bounded observations, effect results, and readback. | [Provider responsibilities](https://github.com/loopx-project/loopx/blob/main/docs/reference/extensions.md#runtime-responsibilities) |
| **Extension** | Packages and operates an optional provider through explicit install, readiness, enable, upgrade, disable, and rollback lifecycle. | [Extension lifecycle](https://github.com/loopx-project/loopx/blob/main/docs/reference/extensions.md#runtime-lifecycle) |

Host declarations such as `--available-capability shell` describe observed
execution support. They are runtime capacities in this product map, not product
capabilities and not permission grants. The effective capability still applies
its own policy and authority checks before proposing a transition.

### Control-Plane Surface

| Surface | What it does | Start with |
| --- | --- | --- |
| Goal state and status | Tracks active state, todos, claims, gates, evidence, run history, and first-screen attention. | `loopx status`, `loopx diagnose`, `loopx review-packet` |
| Quota and interaction contract | Decides whether a turn should deliver, ask, wait, self-repair, or stay quiet. | `loopx quota should-run`, [quota allocation](https://github.com/loopx-project/loopx/blob/main/docs/quota-allocation.md) |
| Agent runtime bridges | Keeps Codex App, Codex CLI, Claude Code, and generic workers aligned with the same guard. | `loopx heartbeat-prompt`, `loopx codex-cli-bootstrap-message`, `loopx worker-bridge` |
| Operator surfaces | Renders compact status without making the browser the state authority. | `loopx serve-status`, [dashboard](https://github.com/loopx-project/loopx/blob/main/apps/presentation/dashboard/README.md) |
| Session dash | Starts a live single-page panel that tracks fleet progress: sessions, their goals, and each goal's status/todo progress, with result statistics; auto-refreshes in place. | `loopx dash`, [session dash design](https://github.com/loopx-project/loopx/blob/main/docs/product/surfaces/session-dash-panel-design.md) |
| External projections | Projects todos and gates into collaboration surfaces while LoopX remains authoritative. | `loopx lark-kanban`, [Lark Kanban adapter](https://github.com/loopx-project/loopx/blob/main/docs/integrations/lark-kanban-control-plane-adapter.md) |
| Domain capabilities | Packages repeatable work lanes such as issue fixing, content operations, value connector planning, ML experiment advice, benchmark evidence, and Explore. | `loopx issue-fix`, `loopx content-ops`, `loopx value-connectors`, `loopx ml-experiment`, `loopx benchmark`, [Explore](https://github.com/loopx-project/loopx/blob/main/loopx/capabilities/explore/README.md) |
| Experimental context learning | Lets named registered agents trial provider-neutral Reward Memory through ignored, default-off project configuration. OpenViking is one provider option, not a global dependency. | `loopx reward-memory experiment-status`, [Reward Memory architecture](https://github.com/loopx-project/loopx/blob/main/loopx/capabilities/reward_memory/README.md) |
| Governance patterns | Captures reusable routing, gate, evidence, projection, and planning shapes. | [interaction patterns](https://github.com/loopx-project/loopx/blob/main/docs/concepts/interaction-pattern-catalog.md), [state model](https://github.com/loopx-project/loopx/blob/main/docs/state-interaction-model.md) |

The shipped primitives include lifetime goals, concrete user gates, audited safe
fallbacks, peer todo ownership, quota and steering, compact run history,
evidence-backed handoff, a read-first management surface, project-level value
signals, and public/private boundary checks.

### Runtime Responsibilities

| Role | Responsibility |
| --- | --- |
| **Agent** | Plans, analyzes, uses tools, and performs one bounded action through a host/runtime. |
| **Provider** | Calls external systems and returns observations, effect results, and readback. |
| **Capability** | Defines the caller outcome, normalizes provider output, validates it, and proposes a typed transition. |
| **Kernel** | Owns durable todos, gates, monitors, accepted writeback, quota, recovery, and scheduling. |

The execution path is `Agent -> Capability -> Provider`; the control path
returns `Provider readback -> Capability transition -> Kernel`. An extension is
how an optional provider is packaged and managed, not another control-plane
owner. See [Architecture](https://github.com/loopx-project/loopx/blob/main/docs/architecture.md) and
[Extensions and Capabilities](https://github.com/loopx-project/loopx/blob/main/docs/reference/extensions.md).

</details>

<details>
<summary>Personal agents, teams and self-improving workflows</summary>

### Personal Agents, Teams, and Self-Improving Workflows

[Meta Muse](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/),
[Grok Bot](https://x.ai/news/introducing-grok-bot), and
[Anthropic's *Building always-on agents*](https://claude.com/resources/articles/building-always-on-agents)
make persistent personal agents and sleep/wake event-driven runs a familiar product
and architecture model. LoopX approaches that space as an open, provider-neutral
[24/7 control plane](#always-on-agents) for agents you already run—not as a hosted
replacement for either product.

- **Personal agent:** use the shipped Workspace and connected Lark surfaces to
  inspect goals, steer work and resolve decisions. The
  [persistent steward and semantic handoff RFC](https://github.com/loopx-project/loopx/blob/main/docs/architecture/rfcs/capable-manager-semantic-handoff-v0.md)
  extends this toward one capable front door for a team; the complete journey
  remains under qualification.
- **Agent team:** share goals without erasing worker ownership. Claims, evidence
  and explicit returns keep implementation and review connected. See the
  [three-agent collaboration demo](https://github.com/loopx-project/loopx/blob/main/examples/collaboration-delivery/README.md)
  for a bounded example, including corrections and two review rounds.
- **Self-improving workflows:** connect feedback to the next attempt through
  [Reward Memory](https://github.com/loopx-project/loopx/blob/main/loopx/capabilities/reward_memory/README.md), and evaluate
  candidate changes through [Explore](https://github.com/loopx-project/loopx/blob/main/loopx/capabilities/explore/README.md).
  Both are optional. The link to **recursive self-improvement (RSI)** is the
  engineering loop—propose, test, review, retain—not a claim that LoopX has
  demonstrated autonomous model improvement or compounding capability gains.

A personal steward is an interaction role, not a second source of authority.
Background execution still needs an available host and configured runtime.
The [overall roadmap](https://github.com/loopx-project/loopx/blob/main/docs/architecture/rfcs/loopx-overall-roadmap-v0.md)
separates shipped foundations from the next end-to-end acceptance milestones.

</details>

<a id="loopx-20-1"></a>
<a id="whats-new-in-20"></a>

<details>
<summary>2.0 background and migration</summary>

| A shared control plane | A long-horizon research workbench |
| --- | --- |
| TypeScript owns the migrated transactions, authority and recovery rules. Python retains real host/provider IO and specialized computation. | Follow a research question through delegated work, Explore history, artifacts, trajectory analysis and the next decision. |
| [Two months of engineering, source history and core statistics](https://loopx-project.github.io/loopx/blog/typescript-control-plane-refactor/) | [Watch the 86-second film](https://github.com/user-attachments/assets/543af0b1-c3d4-4cfb-aedd-a68563a20601) · [Read the analysis contract](https://github.com/loopx-project/loopx/blob/main/docs/reference/trajectory-assessment.md) |

**Upgrading from 1.x?** 2.0 retires ordinary writes to unpromoted Markdown Goals.
Review the [migration and recovery guide](https://github.com/loopx-project/loopx/blob/main/docs/product/releases/v2.0.0.md) before
continuing those Goals. Installation does not silently convert existing state.

</details>

## Advanced Paths

The first useful loop does not require every optional surface. Add these only
when the work needs them.

Inspect the current goal's read-only capability catalog before enabling an
advanced path:

```bash
loopx configure-goal --goal-id <goal-id>
```

Without `--execute`, this reports current/default state, fit, boundaries, and
copyable commands without changing project state.

### Recurring Work Presets

Safe presets cover daily triage, changelog drafts, and PR watching. Start with
the [beginner preset guide](https://github.com/loopx-project/loopx/blob/main/docs/product/foundations/beginner-loop-presets.md).

```bash
loopx preset list
loopx preset show daily-triage
```

Preset inspection is read-only. For a connected recurring goal,
`loopx ready-score --goal-id <goal-id> --agent-id <agent-id>` reports whether
the loop is ready to run repeatedly.

### Governed Turns

LoopX can generate one pure, bounded turn decision from a validated receipt,
fresh quota state, and a provider-neutral budget. The current Codex CLI
quickstart and activation contract are documented in
[LoopX Turn for Codex CLI](https://github.com/loopx-project/loopx/blob/main/docs/product/runtimes/codex-cli/loopx-turn-codex-cli-quickstart.md).

### Explore Graph and Harness

Explore is supported, optional, and default-off. It works best when a task has
a measurable offline evaluation, baseline, treatment, and guardrails; it is not
a substitute for production approval. Start with the
[Explore capability](https://github.com/loopx-project/loopx/blob/main/loopx/capabilities/explore/README.md) and its
[Lark presentation mapping](https://github.com/loopx-project/loopx/blob/main/loopx/capabilities/explore/README.md#presentation-sink-lark-mapping).

### Review Agent Work

Use `loopx review-packet` for a compact owner-facing view of decisions,
evidence, validation, and unresolved gates. The
[intelligent management surface](https://github.com/loopx-project/loopx/blob/main/docs/product/surfaces/intelligent-management-surface.md)
describes the operator model; the
[project-level reward model](https://github.com/loopx-project/loopx/blob/main/docs/product/foundations/project-level-reward-model.md)
describes conservative value signals across output quantity, quality, token
cost, and user attention cost.

For a concrete peer workflow, start with the
[Agent collaboration guide](https://github.com/loopx-project/loopx/blob/main/docs/product/use-cases/cross-runtime/README.md):
a builder consumes an analyst's artifact, obtains independent review, handles
an owner correction and returns the checked result. The guide distinguishes
the runnable same-host example from the earlier cross-runtime design sketch.

### App and Projection Paths

- Local read-first UI: [dashboard guide](https://github.com/loopx-project/loopx/blob/main/apps/presentation/dashboard/README.md)
- Public product overview: [public homepage](https://loopx-project.github.io/loopx/)
- Documentation portal: [hosted docs](https://loopx-project.github.io/loopx/docs/)
- Feishu/Lark projection: [Lark Kanban adapter](https://github.com/loopx-project/loopx/blob/main/docs/integrations/lark-kanban-control-plane-adapter.md)
- Generic host integration: [integration guide](https://github.com/loopx-project/loopx/blob/main/docs/integration.md)
- Custom multi-agent runner:
  [minimal custom runtime example](https://github.com/loopx-project/loopx/blob/main/docs/guides/minimal-custom-runtime-example.md),
  then [custom runner integration](https://github.com/loopx-project/loopx/blob/main/docs/guides/custom-agent-runner-integration.md)

Optional projections make state easier to inspect; they do not become the
source of truth.

### Operating and Recovery

Start daily inspection with:

```bash
loopx status
loopx history --goal-id your-project-goal
loopx quota should-run --goal-id your-project-goal
```

Automatic turns must check quota first and append spend only after validated
writeback. Quiet skips, preflight failures, and dry-run previews do not spend.
When a user gate blocks one lane, a separately audited safe fallback may
continue, but it must not bypass the gate.

Peer agents use `loopx todo claim` before delivery and `loopx todo update`
after validation so ownership and evidence remain visible.

Scheduler cadence follows `quota should-run.scheduler_hint`; installed Codex
App automations acknowledge the current hint through the returned
`ack_hint.cli_args`. Collision recovery, monitor semantics, self-repair, and
the exact operator commands are maintained in
[Getting Started](https://github.com/loopx-project/loopx/blob/main/docs/guides/getting-started.md),
[Quota Allocation](https://github.com/loopx-project/loopx/blob/main/docs/quota-allocation.md), and
[Long-Task Cadence Policy](https://github.com/loopx-project/loopx/blob/main/docs/operations/long-task-cadence-policy.md).

Before publishing public docs or examples:

```bash
loopx check \
  --scan-path README.md \
  --scan-path docs/ \
  --scan-path examples/
```

## Current Technical Directions

LoopX has three active strategic programs plus an architecture and research
incubator. These are direction signals, not delivery promises; `main`, released
artifacts, and stable reference contracts remain the source of shipped truth.

- **Long-Horizon Benchmarks and Evidence:** reproducible capability evidence
  and controlled mechanism research across complementary benchmark
  environments. [Direction tracker](https://github.com/loopx-project/loopx/issues/3243)
- **Operator Surface and IM Integration:** an operator workspace, session
  records, and bounded collaboration surfaces. The Personal Workspace is
  shipped; unified steward, execution, and recovery journeys remain under
  qualification, with `@maxliux5` as implementation lead.
  [Direction tracker](https://github.com/loopx-project/loopx/issues/3244)
- **Shared Goal Authority and Cross-host Coordination:** provider-neutral
  coordination for explicitly shared goals, with NoKV as an unpromoted
  provider candidate rather than a new control-plane authority.
  [Direction tracker](https://github.com/loopx-project/loopx/issues/3245)
- **Architecture and Research Incubator:** Effect Program hardening,
  TypeScript parity migration, hierarchical stride, research exploration,
  human attention, artifact lifecycle, and memory utility work at explicitly
  different maturity levels.
  [Direction tracker](https://github.com/loopx-project/loopx/issues/3246)

Read the canonical
[Technical Directions map](https://github.com/loopx-project/loopx/blob/main/docs/project/technical-directions.md) for stages,
promotion gates, contributor-safe cuts, and ownership boundaries. Use the
pinned [GitHub Discussion](https://github.com/loopx-project/loopx/discussions/2851)
for community discussion. Core control-plane reliability continues as the
shared foundation beneath these programs.

## Advanced Documentation

[Product website](https://loopx-project.github.io/loopx/) · [Blog](https://loopx-project.github.io/loopx/blog/) · [Developer Book](https://loopx-project.github.io/loopx/docs/book/en/)

Start with the path that matches your current task. Use the hosted
[documentation portal](https://loopx-project.github.io/loopx/docs/) for the
published docs site; the [documentation index](https://github.com/loopx-project/loopx/blob/main/docs/README.md) remains the
complete source map. This list stays selective; each category index owns its
deeper documents and versioned protocols.

### Use and Operate

- [Getting Started](https://github.com/loopx-project/loopx/blob/main/docs/guides/getting-started.md): install, connect,
  diagnose, daily workflow, heartbeats, dashboard, development, and commands.
- [User Manual](https://my.feishu.cn/wiki/CaL5wMk9ui17ngkWzeUcMlAYnZg):
  public onboarding, concepts, FAQ, and selected cases.
- [Operations](https://github.com/loopx-project/loopx/blob/main/docs/operations/README.md): goal continuation, todo, cadence,
  attention, and authority workflows.
- [Quota Allocation](https://github.com/loopx-project/loopx/blob/main/docs/quota-allocation.md) and
  [Heartbeat Automation Prompt](https://github.com/loopx-project/loopx/blob/main/docs/heartbeat-automation-prompt.md): scheduler
  eligibility, spend, and scheduled continuation.
- [Dashboard](https://github.com/loopx-project/loopx/blob/main/apps/presentation/dashboard/README.md) and
  [Status Data Contract](https://github.com/loopx-project/loopx/blob/main/docs/status-data-contract.md): operator-facing state
  and projection contracts.
- [Release Readiness](https://github.com/loopx-project/loopx/blob/main/docs/product/release-readiness.md): install/update paths,
  compatibility gates, release notes, and safe-to-depend-on surfaces.

### Understand the Control Plane

- [Architecture](https://github.com/loopx-project/loopx/blob/main/docs/architecture.md): lifetime-goal invariant and kernel.
- [State Interaction Model](https://github.com/loopx-project/loopx/blob/main/docs/state-interaction-model.md): actors, stores,
  interaction contract, and writeback.
- [Concepts](https://github.com/loopx-project/loopx/blob/main/docs/concepts/README.md): reusable routing, gate, evidence,
  projection, and planning patterns.
- [Product Foundations](https://github.com/loopx-project/loopx/blob/main/docs/product/foundations/README.md): Loop Engineering
  principles, project-level reward, and reward-style replanning.
- [Product Vision](https://github.com/loopx-project/loopx/blob/main/docs/product/vision.md): the broader Loop Agent direction.

### Integrate and Extend

- [Integration Guide](https://github.com/loopx-project/loopx/blob/main/docs/integration.md)
- [Minimal Custom Runtime Example](https://github.com/loopx-project/loopx/blob/main/docs/guides/minimal-custom-runtime-example.md)
- [Custom Agent Runner Integration](https://github.com/loopx-project/loopx/blob/main/docs/guides/custom-agent-runner-integration.md)
- [Integrations](https://github.com/loopx-project/loopx/blob/main/docs/integrations/README.md): runtime, host, collaboration, and
  external-system adapters, including worker bridge and Lark.
- [Extensions and Capabilities](https://github.com/loopx-project/loopx/blob/main/docs/reference/extensions.md)

*(README truncated for display. [Read the full README on GitHub](https://github.com/loopx-project/loopx)).*
