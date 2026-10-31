---
slug: redhat-et-ripwire-skills-ripwire-layers
name: layers
tagline: "Architecture HEALTH and ENFORCEMENT — 'is this a dependency mess /
  does the UI reach into the database / enforce module boundaries in CI?':
  cycles, th"
summary: "Trigger: you want a factual picture of architectural health before a
  large refactor, or you're reviewing whether the codebase is trending toward or
  away from clean layering."
categories:
  - coding-agents
tags:
  - ai-agents
  - call-graph
  - claude
  - claude-code
status: active
quality_percentile: 56
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: redhat-et/ripwire
  subpath: skills/ripwire-layers
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 2458
  last_commit: 2026-10-19T07:10:31Z
  stars_delta_7d: 0
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: snapshot_delta
  sparkline_4w:
    - 2443
    - 2458
    - 2458
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: redhat-et/ripwire
  path: skills/ripwire-layers/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:33:30.116Z
  truncated: false
type: agent_skill
skill:
  skill_name: layers
  description: >
    Architecture HEALTH and ENFORCEMENT — 'is this a dependency mess / does the
    UI reach into the database / enforce module boundaries in CI?': cycles, the
    godfile, propagation cost (how far a touch ripples), --arch rules with a
    baseline gate. Overview without gating → orient. One pass answers it.
  folder_path: skills/ripwire-layers
  extra_files: []
  pack_total_skills: 18
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: redhat-et-ripwire
---

# Layers with ripwire
> Nearest neighbours:
> • You want the file→file dependency graph itself (not a health read) → `--deps` is step 2 below, or
>   go straight to it if you already know you want godfiles/cycles.
> • Reviewing YOUR OWN diff for coupling risk, not a repo-wide sweep → **ripwire-change-check**.
> • Unfamiliar subsystem, general risk sweep (not architecture-specific) → **ripwire-fresh-eyes**.

Trigger: you want a factual picture of architectural health before a large refactor, or you're
reviewing whether the codebase is trending toward or away from clean layering.

`<dir>` = repo root. Every metric below has a NUMBER → THRESHOLD → ACTION — don't stop at reporting it.

1. **Layering rules** (if a rules file exists) — `ripwire <dir> --arch=rules.txt`
   Output: `<arch>` with violations listed by layer pair and file. Exit 2 = NEW violations
   found (CI gate). If no rules file exists yet, this step is the prompt to write one
   (grammar: `layer NAME = substr…`, `deny FROM -> TO`, `allow FROM -> TO`; `#` comments).
   **Action**: every violation is a concrete edge to either fix (remove the dependency) or
   explicitly `allow` (document why it's intentional) — don't leave it silently baselined forever.

   **Adopting rules on a codebase with existing debt** — the baseline workflow:
   - `ripwire <dir> --arch=rules.txt --baseline` — accept every CURRENT violation as known
     debt: writes a `.ripwire_arch_baseline` sidecar in the CWD (commit it), exits 0.
   - From then on, plain `--arch=rules.txt` suppresses baselined violations and exits 2 only
     on NEW ones — the gate stops the bleeding without demanding an up-front cleanup.
   - `--arch=rules.txt --baseline-update` — deliberately accept new debt by merging current
     violations into the sidecar (exit 0). Use sparingly, in its own reviewed commit.

   **`--arch=rules.txt` also emits `<metrics propagation_cost="X.XXX">`** — the DSM
   (design-structure-matrix) transitive-closure density: the fraction of the file-dep graph
   reachable from an average file (MacCormack; a validated coupling *form*, computed here as a
   directory-level estimate from name-based deps). **Direction: lower is better** — 0 means
   files are mostly isolated from each other's transitive reach, 1 means touching any file
   risks rippling through the whole tree. **Action at a high reading** (no fixed universal
   threshold — compare against this same repo's own history/other modules, or treat >0.3 as
   worth a look): a high propagation cost is a change-amplification TAX — every edit here is
   more likely to have knock-on effects. Don't just report the number; find which directories
   are driving it (the `<m path=... ca= ce=>` per-module rows) and formalize a boundary between
   them — a `layer`/`deny` rule in `rules.txt` that would have caught the coupling.

2. **Dependency health** — `ripwire <dir> --deps --legend=compact`
   Output: `<deps>` with `<health>` metrics:
   - `acd` (average component dependency) — lower is better
   - `nccd` (normalized CCD) — < 0.25 is healthy
   - `shape` — "horizontal" (layered, good) vs "vertical" (coupled, risk)
   Then `<godfiles>` ranked by `afferent` (dependents) — each godfile is an implicit layer
   boundary that hasn't been formalized. **`afferent`/cycles are validated defect predictors;
   `nccd` (Lakos) and the `--arch` Martin Ca/Ce/I/A/D `I`/`A`/`D`/`zone=` block are design
   heuristics — mechanistically plausible, widely implemented, but no independent
   outcome-based study has validated them. Trust the god-file/cycle read hardest; treat
   nccd/D as descriptive, not proof.**
   **Action**: a file in the top-3 by `afferent` is doing double duty as a de-facto layer
   boundary with no rule enforcing it — that's the concrete next step, not just a note: add it
   as a named `layer` in `rules.txt` and write the `deny` rules that keep new dependents out of
   its internals. A cycle in `--report` is worse than a high-afferent file — break it before
   formalizing anything downstream of it.

3. **Module clustering** — `ripwire <dir> --communities --legend=compact`
   Output: `<communities modules="N">` clusters with dominant directory and lead symbols.
   `<bridge edges="N">` shows where clusters are tightly coupled across module boundaries.
   High bridge counts between non-adjacent modules are the layering violations `--arch` catches.
   **Action**: a high bridge count between two clusters that AREN'T adjacent in your intended
   layering is the specific violation to gate — turn it into a `deny FROM -> TO` rule rather
   than leaving it as an observation; a high bridge count between clusters that ARE meant to
   talk to each other is fine and doesn't need a rule.

4. **Mermaid diagram** (optional, for visual review) — `ripwire <dir> --mermaid`
   Output: a `flowchart LR` Mermaid snippet with module nodes and inter-module call counts.
   Paste at mermaid.live to render. Edges labeled with high counts are the hot coupling seams —
   same action as step 3: a heavy edge crossing an intended boundary becomes a `deny` rule.

## Output

Health summary: `shape=`, `nccd=`, `propagation_cost=`, cycle count (from `--report`), top 3
god-files, and any `--arch` violations. Classify overall health: healthy / at-risk / needs
restructuring — and for anything "at-risk" or worse, name the specific boundary to formalize
(which layer, which `deny` rule) rather than stopping at the classification.
