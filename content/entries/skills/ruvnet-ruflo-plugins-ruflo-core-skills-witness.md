---
slug: ruvnet-ruflo-plugins-ruflo-core-skills-witness
name: witness
tagline: Sign, verify, and track fix-marker regressions over time using an
  Ed25519 witness manifest. The default seed is public-commit-derived (integrity
  only)
summary: A temporal history (JSONL) tracks how the fix population evolves across
  releases — so when a regression appears, you can pinpoint the commit that
  introduced it, not just "it's broken now."
categories:
  - agent-frameworks
tags:
  - agentic-ai
  - agentic-framework
  - agentic-workflow
  - agents
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: ruvnet/ruflo
  subpath: plugins/ruflo-core/skills/witness
  official_vendor: false
  license: MIT
signals:
  stars: 79343
  last_commit: 2026-10-26T06:36:48Z
  stars_delta_7d: 2614
  stars_growth_pct: 3.4
  trending_score: 2703.05
  velocity_source: snapshot_delta
  sparkline_4w:
    - 74048
    - 74512
    - 76729
    - 79343
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: ruvnet/ruflo
  path: plugins/ruflo-core/skills/witness/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.543Z
  truncated: false
type: agent_skill
skill:
  skill_name: witness
  description: Sign, verify, and track fix-marker regressions over time using an
    Ed25519 witness manifest. The default seed is public-commit-derived
    (integrity only); set RUFLO_WITNESS_SEED/RUFLO_WITNESS_PUBLIC_KEY for
    authorship. Works in any project — clone the toolkit, run init, register
    fixes, regen on each release.
  folder_path: plugins/ruflo-core/skills/witness
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Witness — tamper-evident fix-regression tracking
The witness toolkit lets you ship every release with a *signed* manifest
that lists every documented fix in your codebase along with a sha256 +
marker substring. By default the signing seed is derived from the public
git commit, so anyone can reproduce the signature: this is an integrity
checksum, not proof of authorship. For authenticity, sign with a 32-byte
`RUFLO_WITNESS_SEED` and verify with a pinned `RUFLO_WITNESS_PUBLIC_KEY`.

A temporal history (JSONL) tracks how the fix population evolves across
releases — so when a regression appears, you can pinpoint *the commit
that introduced it*, not just "it's broken now."

This skill works two ways:
1. **Inside ruflo** — used by ruflo's own CI to gate publishes (see
   `.github/workflows/v3-ci.yml` job `witness-verify`).
2. **In your own project** — copy `plugins/ruflo-core/scripts/witness/`
   into your repo, run `init.mjs`, register your fixes in
   `witness-fixes.json`, and call `regen.mjs` from your release pipeline.

## Quick start (any project)

```bash
# One-time bootstrap — creates verification.md.json,
# verification-history.jsonl, and witness-fixes.json template
node plugins/ruflo-core/scripts/witness/init.mjs --root .

# Edit witness-fixes.json: add { id, desc, file, marker } per fix.
# A "marker" is a distinctive substring that MUST appear in `file`
# while the fix is present. If someone reverts the fix, the marker
# disappears and `verify` reports it as `regressed`.

# Regenerate the manifest (signing requires @noble/ed25519)
npm i @noble/ed25519
node plugins/ruflo-core/scripts/witness/regen.mjs \
  --manifest verification.md.json \
  --history verification-history.jsonl \
  --fixes witness-fixes.json

# Verify markers are present in the live tree
node plugins/ruflo-core/scripts/witness/verify.mjs \
  --manifest verification.md.json

# Or authenticate the manifest and check source markers in a clean clone.
# Generated dist/ entries are explicitly reported as skipped.
node plugins/ruflo-core/scripts/witness/verify.mjs \
  --manifest verification.md.json --source-only

# For a CI hash tripwire, also fail when a file changes but its marker remains.
node plugins/ruflo-core/scripts/witness/verify.mjs \
  --manifest verification.md.json --source-only --strict

# Authenticity: pin a release public key (the flag wins over the env var).
node plugins/ruflo-core/scripts/witness/verify.mjs \
  --manifest verification.md.json --public-key <64-hex-public-key>
```

Without `--strict`, marker-preserving SHA drift is reported but exits 0.
`--strict` makes that drift exit 1 without changing signature or missing-file checks.

## Temporal queries (ADR-103)

```bash
# Latest snapshot vs. previous
node plugins/ruflo-core/scripts/witness/history.mjs \
  --history verification-history.jsonl summary

# For each currently-regressed fix, find the commit that introduced it
node plugins/ruflo-core/scripts/witness/history.mjs \
  --history verification-history.jsonl regressions

# Status timeline for a specific fix
node plugins/ruflo-core/scripts/witness/history.mjs \
  --history verification-history.jsonl timeline --id F1

# Machine-readable for CI
node plugins/ruflo-core/scripts/witness/history.mjs \
  --history verification-history.jsonl summary --json
```

`summary` exits non-zero if any fix newly regressed since the last
snapshot — drop it in CI as a soft pre-merge gate.

## Anti-patterns

- **Hand-editing `verification.md.json`** — always regenerate via `regen.mjs`,
  otherwise the signature breaks.
- **Markers that are too generic** (`'function'`, `'import'`) — pick something
  unique enough that `grep` doesn't false-positive against unrelated code.
- **Skipping the history append** — without `--history`, you lose the
  ability to bisect when a regression was introduced.
- **Committing one without the other** — `verification.md.json` and
  `verification-history.jsonl` belong in the same commit; the JSONL is
  what lets future you verify the signed manifest is the latest in the line.

## Files

- `scripts/witness/lib.mjs` — shared regenerate / history logic.
- `scripts/witness/regen.mjs` — CLI: sign + append history.
- `scripts/witness/history.mjs` — CLI: query the temporal log.
- `scripts/witness/init.mjs` — CLI: bootstrap into a fresh project.
- `scripts/witness/verify.mjs` — CLI: validate signature + markers.

## In ruflo's CI

`v3-ci.yml` job `witness-verify` runs after the behavioral smoke tests
and before `publish`. Failure modes:

| Failure | Cause |
|---|---|
| `signatureValid: no` | manifest hand-edited; re-run regen |
| `regressed: > 0` | a documented fix lost its marker since issuance |
| `missing: > 0` | a cited dist file no longer exists; rebuild or remove the entry |
| `scope: source-only` | signature + source markers checked; generated entries intentionally skipped |
