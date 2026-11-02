---
slug: samugit83-redamon-skills-supply-chain-scan
name: supply-chain-scan
tagline: "Working on RedAmon's supply-chain scanner (offline OSV + GuardDog +
  retire + trufflehog): the offline OSV database that the scan path does not
  bootstr"
summary: "- Changing any of the three supply-chain layers (OSV, GuardDog,
  retire/trufflehog) or the offline database plumbing."
categories:
  - agent-frameworks
tags:
  - agentic-ai
  - ai-penetration-testing
  - ai-pentesting
  - autonomous-agents
status: active
quality_percentile: 94
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: samugit83/redamon
  subpath: skills/supply-chain-scan
  official_vendor: false
  license: MIT
signals:
  stars: 3264
  last_commit: 2026-11-01T16:47:54Z
  stars_delta_7d: 50
  stars_growth_pct: 1.6
  trending_score: 50.78
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3152
    - 3214
    - 3264
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: samugit83/redamon
  path: skills/supply-chain-scan/SKILL.md
  branch: master
  fetched_at: 2026-11-02T09:07:16.752Z
  truncated: false
type: agent_skill
skill:
  skill_name: supply-chain-scan
  description: >
    Working on RedAmon's supply-chain scanner (offline OSV + GuardDog + retire +
    trufflehog): the offline OSV database that the scan path does not bootstrap,
    the world-readable requirement for the hardened scanner, and the soft-error
    markers that record what was never analysed. Trigger: editing
    scanners/supply_chain_common/, scanners/supply_chain_analyzer/ or
    scanners/supply_chain_scan/; touching osv_db_sync.py, osv_runner.py,
    guarddog_runner.py, deep_recovery.py, or the offline OSV database handling.
  folder_path: skills/supply-chain-scan
  extra_files: []
  pack_total_skills: 16
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: samugit83-redamon
---

## When to Use

- Changing any of the three supply-chain layers (OSV, GuardDog, retire/trufflehog)
  or the offline database plumbing.

The `supply_chain_common`-must-be-bind-mounted rule is in the
[AGENTS.md](https://github.com/samugit83/redamon/blob/master/skills/supply-chain-scan/../../scanners/supply_chain_scan/AGENTS.md) CRITICAL RULES; this skill is the
scanning behaviour.

---

## Critical Rules

- **NEVER assume the offline OSV database is populated.** It is filled lazily,
  per-ecosystem, only on the explicit `--download-offline-databases` step - NOT on
  every scan and NOT at install time
  ([scanners/supply_chain_common/osv_db_sync.py](https://github.com/samugit83/redamon/blob/master/skills/supply-chain-scan/../../scanners/supply_chain_common/osv_db_sync.py)).
  A scan against an unsynced ecosystem must report it as missing, not crash.
- **NEVER `chmod` the OSV DB tighter than world-readable.** The scanner runs
  hardened and non-root; `osv_db_sync.py` makes the whole tree
  world-readable/traversable on purpose so the scanner can read it. Restricting it
  breaks offline scans silently.
- **NEVER erase an existing soft-error marker on a failed/invalid analysis.** A
  package the analyzer never actually inspected is recorded as a `soft_error`
  ([scanners/supply_chain_common/deep_recovery.py](https://github.com/samugit83/redamon/blob/master/skills/supply-chain-scan/../../scanners/supply_chain_common/deep_recovery.py));
  invalid GuardDog output must be dropped, not allowed to overwrite those markers
  (regression fixed in commit `c5cd6a16`).
- **NEVER run the OSV binary without the `--offline` pairing.** Offline mode uses
  the `--offline --download-offline-databases` pair; using one without the other
  either hits the network or reads an empty DB.

---

## Layers

| Layer | Runner | Note |
| --- | --- | --- |
| known vulns | [osv_runner.py](https://github.com/samugit83/redamon/blob/master/skills/supply-chain-scan/../../scanners/supply_chain_common/osv_runner.py) + [osv_db_sync.py](https://github.com/samugit83/redamon/blob/master/skills/supply-chain-scan/../../scanners/supply_chain_common/osv_db_sync.py) | offline OSV DB (named volume, lazily synced) |
| malicious behaviour | [guarddog_runner.py](https://github.com/samugit83/redamon/blob/master/skills/supply-chain-scan/../../scanners/supply_chain_common/guarddog_runner.py) | GuardDog heuristics; soft-errors via [deep_recovery.py](https://github.com/samugit83/redamon/blob/master/skills/supply-chain-scan/../../scanners/supply_chain_common/deep_recovery.py) |
| dispatch | [analyzer_dispatch.py](https://github.com/samugit83/redamon/blob/master/skills/supply-chain-scan/../../scanners/supply_chain_common/analyzer_dispatch.py) | routes a package to the right analyzer |

## Commands

```bash
./redamon.sh supply-chain-sync <ecosystems>    # bootstrap the offline OSV DB (separate from scans)
./redamon.sh test unit                         # supply_chain_* under the root-agent section
```

## Resources

- [docs/readmes/README.SUPPLY_CHAIN.md](https://github.com/samugit83/redamon/blob/master/skills/supply-chain-scan/../../docs/readmes/README.SUPPLY_CHAIN.md) - the 3-layer architecture and offline DB volume
- Related: supply_chain [AGENTS.md](https://github.com/samugit83/redamon/blob/master/skills/supply-chain-scan/../../scanners/supply_chain_scan/AGENTS.md) CRITICAL RULES (bind-mount `supply_chain_common`)
