---
slug: ruvnet-ruview-plugins-ruview-skills-ruview-cli-api
name: cli-api
tagline: Use the RuView `wifi-densepose` CLI binary (incl. MAT
  scan/status/zones/survivors/alerts/export subcommands), the REST API
  (`wifi-densepose-api`, Axum
summary: "Top-level subcommands: version, and mat (Mass Casualty Assessment Tool)."
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
  subpath: plugins/ruview/skills/ruview-cli-api
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
  path: plugins/ruview/skills/ruview-cli-api/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:23.832Z
  truncated: false
type: agent_skill
skill:
  skill_name: cli-api
  description: Use the RuView `wifi-densepose` CLI binary (incl. MAT
    scan/status/zones/survivors/alerts/export subcommands), the REST API
    (`wifi-densepose-api`, Axum), and the browser/WASM build
    (`wifi-densepose-wasm`, `wifi-densepose-wasm-edge`). Use when integrating
    RuView into another program, scripting it from the shell, exposing it over
    HTTP, or shipping it to the browser / ESP32-WASM3.
  folder_path: plugins/ruview/skills/ruview-cli-api
  extra_files: []
  pack_total_skills: 10
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruview
---

# RuView CLI, API & WASM
The programmatic surfaces of RuView — the `wifi-densepose` binary, the HTTP API, and the WebAssembly builds.

## 1. The `wifi-densepose` CLI binary (`wifi-densepose-cli`)

```bash
cd v2
cargo run -p wifi-densepose-cli -- --help        # or: cargo build -p wifi-densepose-cli --release  → target/release/wifi-densepose
cargo run -p wifi-densepose-cli -- version
```

Top-level subcommands: `version`, and `mat` (Mass Casualty Assessment Tool).

### `wifi-densepose mat …` — disaster survivor detection

| Subcommand | Purpose | Key flags |
|------------|---------|-----------|
| `mat scan [zone]` | Start scanning for survivors | `--disaster-type <…>`, `--sensitivity 0.0–1.0`, `--max-depth <m>`, `--continuous`, `--interval <ms>`, `--simulate` |
| `mat status` | Current scan status | `--detailed`, `--format <…>`, `--watch` |
| `mat zones …` | Manage scan zones | `zones list [--active-only]`, plus add/remove/update |
| `mat survivors` | List detected survivors with triage status | |
| `mat alerts` | View / manage alerts | |
| `mat export` | Export scan data | JSON or CSV |

Example:
```bash
cargo run -p wifi-densepose-cli -- mat scan rubble-A --disaster-type earthquake --sensitivity 0.7 --max-depth 5 --continuous --interval 2000
cargo run -p wifi-densepose-cli -- mat survivors --format json
cargo run -p wifi-densepose-cli -- mat export --format csv > survivors.csv
```

Use `--simulate` for testing without hardware. Background and user guide: `docs/wifi-mat-user-guide.md`, `wifi-densepose-mat` crate.

## 2. REST API (`wifi-densepose-api`, Axum)

Library crate (`v2/crates/wifi-densepose-api/src/lib.rs`) — the Axum router/handlers; configured via the `wifi-densepose-config` crate. It's wired into the server binaries (e.g. the sensing server / Docker image), not a standalone `cargo run` target by itself.

```bash
# Easiest way to exercise it: the Docker image exposes the API + dashboard on :3000
docker run -p 3000:3000 ruvnet/wifi-densepose:latest
# Then hit the HTTP endpoints (see the API module / docs for routes) and open http://localhost:3000

# v1 Python service config reference: example.env, pyproject.toml (archive/v1/)
```

When embedding the API crate in your own binary, take the router from `wifi_densepose_api`, supply config via `wifi-densepose-config`, and serve with Axum/Tokio. Keep input validation at the boundary (project rule).

## 3. WASM / browser & ESP32-WASM3

- **`wifi-densepose-wasm`** — compiles the stack to `wasm32-unknown-unknown` with a JS-friendly API:
  ```bash
  cd v2/crates/wifi-densepose-wasm
  wasm-pack build --target web --features mat        # recommended (produces pkg/)
  cargo build --target wasm32-unknown-unknown --features mat   # plain cargo build
  ```
  See `v2/crates/wifi-densepose-wasm/README.md` for the exported surface.
- **`wifi-densepose-wasm-edge`** — 60 edge modules (609 tests) that compile to `wasm32-unknown-unknown` and run on ESP32-S3 via WASM3; shared utils in `src/vendor_common.rs`. These are the ADR-041 edge-intelligence modules in WASM form.
- Browser demos: pose-fusion (ADR-059), point-cloud (ADR-094) — deployed via GitHub Pages from the WASM build.

## 4. Where it fits

| You want to… | Use |
|--------------|-----|
| Script a survivor scan / export results | `wifi-densepose mat …` |
| Expose sensing over HTTP | `wifi-densepose-api` (via a server binary / Docker) |
| Run sensing in a browser | `wifi-densepose-wasm` → `wasm-pack build --target web` |
| Run an edge module on an ESP32 in WASM | `wifi-densepose-wasm-edge` + WASM3 |
| A long-running CSI sink + training | `wifi-densepose-sensing-server` (see `ruview-applications` / `ruview-model-training`) |

## Reference

- Crates: `wifi-densepose-cli`, `wifi-densepose-api`, `wifi-densepose-config`, `wifi-densepose-wasm`, `wifi-densepose-wasm-edge`, `wifi-densepose-mat`
- ADRs: 041 (edge modules), 059 (live ESP32 pipeline), 094 (point-cloud GitHub Pages)
- `docs/wifi-mat-user-guide.md`, `docs/edge-modules/`, `docs/security-audit-wasm-edge-vendor.md`
- Validate after changes: `cd v2 && cargo test -p wifi-densepose-cli -p wifi-densepose-api -p wifi-densepose-wasm --no-default-features`
