# AI Tools Web Dictionary & Weekly Trend Radar

[![CI](https://github.com/ttmin17/web_dictionary/actions/workflows/ci.yml/badge.svg)](https://github.com/ttmin17/web_dictionary/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Data: CC BY 4.0](https://img.shields.io/badge/Data-CC%20BY%204.0-lightgrey.svg)](LICENSE-DATA)

An authoritative, zero-database Web Dictionary and Weekly Velocity Radar for the AI agent ecosystem across **3 Pillars**:
1. **MCP Servers (`/mcp`):** Standardized Model Context Protocol servers with 1-click launch configs for **Claude Code**, **OpenAI Codex**, and **Google Antigravity**.
2. **Agent Skills (`/skills`):** Reusable task instruction sets and prompts packaged in `SKILL.md` format, organized as deduplicated **Skill Packs**.
3. **Agent Tools & Repos (`/tools`):** Autonomous agent frameworks, coding assistants, desktop harnesses, and developer CLIs with quickstart commands.

---

## 🌟 Key Highlights

- **The 3 Pillars of AI Tooling:** Complete coverage of MCP servers, Agent skills, and standalone Agent developer tools under a unified, strictly-typed schema.
- **Weekly Trend & Velocity Radar (`/trending`):** Week-over-week GitHub star velocity engine computing 7-day deltas ($\Delta S_{7\text{d}}$), breakout newcomers ($\le 60$ days old), historical snapshot issues (`/trending/2026-Wxx`), and zero-JS inline SVG sparklines.
- **RSS 2.0 Feed (`/rss.xml`):** Instant RSS distribution of weekly top trending tools and fresh ecosystem discoveries.
- **Standardized 6-Line Dictionary Definition Box:** Every entry page leads with an authoritative definition (What it is, Pillar & Runtime, Category & Tags, Auth & Cost, Target Interface / Compatible Clients, and Weekly Trend Telemetry) backed by a 4-tier deterministic fallback hierarchy.
- **Monorepo Skill Packs:** Multi-skill repositories collapse into single representative cards in `/catalog` with `📦 Pack of N skills` badges, accompanied by interactive repository skill drawers.
- **9 Balanced Dictionary Categories:** Balanced taxonomy (`coding-agents`, `browser-web`, `databases-memory`, `agent-frameworks`, `productivity-ops`, `cloud-infra`, `media-creative`, `security-auth`, `domain-research`) preventing category over-concentration.
- **100% Static & Zero-Maintenance:** Git-backed Markdown (`content/entries/`) and JSON time series (`data/signals/`). Built with **Astro 5**, styled with **Tailwind CSS**, and searchable in $<10\text{ms}$ offline via **Pagefind**.

---

## 📁 Repository Structure

```text
.
├── apps/
│   ├── pipeline/            # Discovery, scoring, Stage 8 trends, enrichment & catalog writer
│   └── site/                # Astro 5 static site (/trending, /tools, /mcp, /skills, /rss.xml)
├── packages/
│   ├── schema/              # Shared Zod schemas (Entry, LaunchSpec, SkillSpec, ToolSpec, TrendingReport)
│   └── renderers/           # Multi-client config adapters (Claude Code, Codex, Antigravity)
├── content/
│   ├── clients/             # Supported AI agent client definitions (*.yaml)
│   ├── categories/          # 9 balanced Dictionary categories (*.yaml)
│   └── entries/
│       ├── mcp/             # MCP servers (*.md)
│       ├── skills/          # Agent skills (*.md)
│       └── tools/           # Autonomous agent tools & repos (*.md)
├── data/
│   ├── archive/pruned/      # Safe historical archive of pruned entries (SG-1)
│   ├── overrides/           # Manual curation overrides (blocklist, pins, vendors)
│   ├── runs/                # Weekly trend boards (trending.json) and diffs (diff.json)
│   ├── signals/             # Weekly signal snapshot time series (YYYY-Wxx.json)
│   └── state/               # Catalog totals and slug alias registry (slug-aliases.json)
├── docs/                    # Architecture documents, v3 plans & audit reports
└── .github/workflows/       # CI verification, weekly cron pipeline & deployment
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** `v22` or `v24` (see [`.nvmrc`](.nvmrc))
- **pnpm** `v9` or newer

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/ttmin17/web_dictionary.git
cd web_dictionary

# 2. Install workspace dependencies
pnpm install

# 3. (Optional) Set up GitHub Token for pipeline runs
cp .env.example .env
# Edit .env and insert your GITHUB_TOKEN (read:public_repo)
```

### Development & Build Commands

| Command | Description |
|---|---|
| `pnpm run site:dev` | Start local Astro development server with hot reload |
| `pnpm run site:build` | Build production static site into `dist/` and generate Pagefind search index |
| `pnpm run pipeline:report` | Run pipeline dry-run and generate audit report in `data/runs/<week>/report.md` |
| `pnpm run pipeline:run` | Run production pipeline and update `content/entries/`, `data/signals/`, and `data/runs/` |
| `pnpm test` | Run all 94 Vitest unit and hermetic pipeline tests |
| `pnpm run typecheck` | Typecheck all workspace packages (`schema`, `renderers`, `pipeline`, `site`) |

---

## 🤖 Supported Agent Clients
 
| Client | Launch Command / Snippet | Default Config Path | Skills Path |
|---|---|---|---|
| **Claude Code** | `claude mcp add <name> -- <cmd>` or `.mcp.json` | `.mcp.json` (workspace) / `~/.claude.json` (global) | `.claude/skills/<name>/SKILL.md` |
| **OpenAI Codex** | `.codex/config.toml` | `.codex/config.toml` (workspace) / `~/.codex/config.toml` (global) | `.codex/skills/<name>/SKILL.md` |
| **Google Antigravity** | `.gemini/mcp_servers.json` | `.gemini/mcp_servers.json` (workspace) / `~/.gemini/antigravity/mcp_servers.json` (global) | `~/.gemini/config/skills/<name>/SKILL.md` |

---

## 🔄 CI / CD Automation

- **`ci.yml`:** Runs on every pull request and push to `main`: verifies typechecking, executes Vitest tests, and confirms static site generation.
- **`pipeline.yml`:** Runs weekly at 02:00 UTC every Monday: automatically discovers new tools, applies gates and scoring, computes weekly trends, enriches launch configs, and commits updates to `content/` and `data/`.
- **`deploy.yml`:** Builds the static site and deploys `apps/site/dist/` to GitHub Pages / Cloudflare Pages.

---

## 📚 Documentation Index

All architectural guidelines and reference specs are available in [`docs/`](docs/):

- [`01_ARCHITECTURE.md`](docs/01_ARCHITECTURE.md): Complete v3 architecture overview, 3-pillar schema, and velocity engine.
- [`02_REPO_QUALITY_CRITERIA.md`](docs/02_REPO_QUALITY_CRITERIA.md): Hard gates (G1–G9), type check, scoring formulas, and anti-fake star heuristics.
- [`03_GROWTH_AND_SEO.md`](docs/03_GROWTH_AND_SEO.md): Programmatic SEO, 1-click config hooks, and growth timeline.
- [`04_FUTURE_ROADMAP.md`](docs/04_FUTURE_ROADMAP.md): Deferred scope, non-goals, and future ideas parking lot.
- [`05_FOLDER_STRUCTURE.md`](docs/05_FOLDER_STRUCTURE.md): Detailed workspace structure, content schemas, and folder ownership rules.
- [`06_DEPLOYMENT_AND_HOSTING_GUIDE.md`](docs/06_DEPLOYMENT_AND_HOSTING_GUIDE.md): Zero-cost GitHub Pages deployment, GitHub Actions pipeline automation, and hosting setup.
- [`docs/archive/`](docs/archive/): Historical sprint designs, milestone reviews, and implementation audits (`00` through `12`).

---

## 📜 Licenses

- **Code:** [MIT License](LICENSE)
- **Catalog Metadata & Signals:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](LICENSE-DATA)