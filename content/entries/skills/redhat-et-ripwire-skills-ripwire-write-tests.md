---
slug: redhat-et-ripwire-skills-ripwire-write-tests
name: write-tests
tagline: "Write tests for EXISTING code that has none — 'this is untested, add
  coverage', 'add a safety net first'; also verify a new test reaches its
  intended "
summary: = repo root. This skill answers "what should I write a test for, and
  what does it need to cover" — not "is my diff safe" (that's change-check).
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
  subpath: skills/ripwire-write-tests
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
  path: skills/ripwire-write-tests/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:33:30.119Z
  truncated: false
type: agent_skill
skill:
  skill_name: write-tests
  description: >
    Write tests for EXISTING code that has none — 'this is untested, add
    coverage', 'add a safety net first'; also verify a new test reaches its
    intended code. Finds what no test reaches: --seams ranks untested
    cross-module edges, --callers gives the outside contract. Diff test
    selection → change-check. For one target one --seams or --callers pass
    suffices.
  folder_path: skills/ripwire-write-tests
  extra_files: []
  pack_total_skills: 18
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: redhat-et-ripwire
---

# Writing tests with ripwire
> Routing:
> • Vetting a diff you already wrote (does it have test cover) → **ripwire-change-check**.
> • Judging whether your OWN code got better/worse → **ripwire-quality-bar**.
> • Don't know which symbol is even the bug → **ripwire-find-bug**.
> • Not sure which skill? → **ripwire-router**.

`<dir>` = repo root. This skill answers "what should I write a test for, and what does it need to cover" —
not "is my diff safe" (that's change-check).

## Find the gap

1. **Untested integration seams** — `ripwire <dir> --seams --legend=compact` → `<seams>` lists cross-module call edges no
   test reaches. These are the highest-value targets: a bug here crosses a boundary silently, and one test
   per seam buys the most coverage per line written. Scope with `<dir>` = a subsystem to focus the seam list.
2. **The `tested=1` coverage lens** — `ripwire <dir> --metrics --legend=compact --top-k=50` (or `--for="<area>"`, which
   carries the same lens inline) → `tested="1"` means an indexed test-path symbol transitively reaches this
   production symbol. On these explicit metric surfaces the attribute is omitted when no indexed test
   reaches it; the binary never prints a fabricated zero. Cross an omitted `tested` with `in=` (fan-in): a
   widely-relied-on function with no indexed safety net is a sharper priority than an uncovered leaf.
   Shell/subprocess test coverage remains outside the call graph, so absence is a structural finding, not
   proof that no external test exists.
3. **Pick the target** — prefer a seam over a symbol lacking `tested=1` when both are candidates; a seam test
   proves two modules cooperate correctly, a unit test on one function does not.

## Write it with the right contract

4. **The contract from OUTSIDE** — `ripwire <dir> --callers=SYM --legend=compact` for the symbol you're testing. Callers show
   the preconditions and argument shapes callers actually rely on — write the test against that observed
   contract, not just the signature.
5. **The body, to know what branches exist** — `ripwire <dir> --expand=SYM --legend=compact` → full source + callee
   signatures. Cover the branches; don't just re-assert the happy path the caller already exercises.

## Verify the test actually registers

6. **Confirm it's wired in** — `ripwire <dir> --affected=<the file you just changed> --legend=compact` should now list your
   new test file among the tests that transitively reach the changed code. If it doesn't show up, the test
   harness isn't discovering the new file (wrong naming convention, missing registration) — fix that before
   trusting the coverage.
6b. **Read what an existing test already covers** — `ripwire <dir> --exercises=test/<harness> --legend=compact` lists the
   non-test symbols that test transitively calls into, ranked. Use it before writing anything to avoid
   re-covering ground a neighbouring harness already holds, and use it as the first call when an existing
   test FAILS and you only have its name. (A non-test path refuses — the verb is the test/non-test
   partition; for "what does this file call", use `--callees`.)
7. **Close the loop with the gate** — once `--affected` proves the test registers, `ripwire <dir> --test-gate --legend=compact`
   on the symbol's file should now go green (the symbol drops out of the untested-blast-radius list). This is
   the same TDAD-parity gate **ripwire-change-check** runs before merge — writing the test here is what makes
   it pass there.

## Output

Name the seam or symbol lacking `tested=1` chosen and why (seam > high-fan-in symbol > leaf), the contract drawn from
`--callers`, and confirmation from `--affected` that the new test registers. Re-run `--seams`/`--metrics`
afterward — the gap you targeted should be gone.
