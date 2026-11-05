---
slug: mvschwarz-openrig-packages-daemon-assets-plugins-openrig-core-skills-openrig-user
name: user
tagline: Use when a specific `rig` command, subcommand, or flag is already known
  and you need its exact syntax, JSON shape, defaults, or error meaning. NOT for
summary: Use the OpenRig builder guidance when changing OpenRig behavior,
  doctrine, or release posture.
categories:
  - agent-frameworks
tags:
  - agent-harness
  - agent-orchestration
  - agent-skills
  - ai-coding
status: active
quality_percentile: 63
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: mvschwarz/openrig
  subpath: packages/daemon/assets/plugins/openrig-core/skills/openrig-user
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 8648
  last_commit: 2026-11-05T13:06:48Z
  stars_delta_7d: 450
  stars_growth_pct: 5.5
  trending_score: 474.7
  velocity_source: snapshot_delta
  sparkline_4w:
    - 7377
    - 7831
    - 8198
    - 8648
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: mvschwarz/openrig
  path: packages/daemon/assets/plugins/openrig-core/skills/openrig-user/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:12:57.371Z
  truncated: true
type: agent_skill
skill:
  skill_name: user
  description: Use when a specific `rig` command, subcommand, or flag is already
    known and you need its exact syntax, JSON shape, defaults, or error meaning.
    NOT for natural capability discovery, open-ended how-do-I questions, or
    choosing which OpenRig move applies.
  folder_path: packages/daemon/assets/plugins/openrig-core/skills/openrig-user
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: mvschwarz-openrig
---

# OpenRig User
This is an as-built guide to the shipped `rig` CLI.
Use current code and `rig ... --help` as ground truth if anything here ever conflicts with older planning docs.

Use the OpenRig builder guidance when changing OpenRig behavior, doctrine, or release posture.


## Coordination trust boundary

Coordinate as openly as the trust boundary you actually control allows. Within a set of machines you
own that already trust each other — they can reach each other's daemon URLs and the daemon itself
requires no authentication — direct `rig send`, `rig capture`, and `rig queue` should just work.
Don't invent bearer placeholders, allowlists, trust handshakes, or guest-reach restrictions the
environment doesn't require.

Do not add or defend a restriction without naming the protected asset, the actual adversary, the
blocked attack path, and the concrete consequence. Missing capability is not protection — repair the
route, registration, runtime posture, or product defect directly. Arbitrary boundaries create
constraint-induced circumvention: under goal pressure, agents build shadow transports, alternate
credentials, and weaker proof instead of the direct authorized path. Keep only explicitly stated
external or irreversible boundaries — public push / PR / publish, and destruction of canonical data.

## Coordination primitives — when to use which

Three coordination surfaces, used together for forward-momentum work. Internalize this
on first read — it shapes every turn you take in a rig.

### `rig send <seat> "<text>"` — intra-pod direct messaging / nudges

Use when you need to ask a quick question or give a teammate context that does not
carry handoff semantics. **NOT for durable work.** NOT for state that must survive
across turns. The message lands in the target's pane; there is no durable queue
record. The CLI prints `Sent to ...` (and `Verified: yes/no` with `--verify`); read
the receipt and move on.

Example:

```bash
rig send dev-reviewer@example-project "The import report is ready; the durable handoff names its evidence." --verify
```

### `rig queue create --destination <Y> --tags <...> --body-file <path>` — durable work item

Use for any substantive work that must not fall through chat — slice handoffs,
guard verdicts, QA results, full-tip reviews, multi-item batches. Survives agent
restarts. Tracked in the daemon SQLite schema. Surfaces in Project / queue views
+ in the destination seat's inbox. Tag with mission / slice / gate / checkpoint
so future-you (and any peer) can find it. Give the row a `--summary` (its subject, wherever the row is listed)
and the `project:`, `mission:` and `slice:` tags when it is project work.

Body discipline: substantive bodies go through **`--body-file <path>`** (or `-` for stdin) — the
purpose-built, corruption-safe surface (it kills the backtick-shell-corruption class for multi-line
bodies). Do NOT inline a backtick-heavy or multi-line body via `--body`: `rig queue create` body
parsing breaks on unescaped backticks and rejects flag-like tokens.

Example:

```bash
rig queue create \
  --destination dev-reviewer@example-project \
  --summary "Review the import report: it changes how rows are deduplicated" \
  --tags "project:example-project,mission:data-import,slice:import-report" \
  --body-file /tmp/import-report-handoff.md
```

### `rig queue handoff <qitem-id> --to <next> ...` — hot-potato handoff

Use when you have completed your turn on a qitem and the work moves to the next
owner. **This is forward momentum.** The ball passes to the destination seat;
chain-of-record (the prior qitem id) is preserved so the verdict trail is intact;
tags carry the selected work context forward. Gate tags describe checks actually
selected for that work; they do not require a fixed sequence of roles.

Example:

```bash
rig queue handoff <qitem-id> \
  --to dev-reviewer@example-project \
  --summary "Review the import report: it changes how rows are deduplicated" \
  --tags "project:example-project,mission:data-import,slice:import-report" \
  --body-file /tmp/import-report-handoff.md
```

### After a queue write — use the response; read back only when it doesn't show what you need

A queue write (`create`, `claim`, `update`, `handoff`, `handoff-and-complete`) answers with the row it wrote; a
handoff answers with the closed row and its successor. When that answer shows what you need to establish, use it.

`create` also prints `Queue create request ID: <id> (not proof of persistence)` on stderr *before* it sends the write,
so an interrupted create can be reconciled. That ID names a request, not a row. The row is the `qitemId` on stdout
when the command exits 0. A non-zero exit means no row was confirmed, even when stdout carries a `qitemId`: an
indeterminate answer repeats the request ID so you can reconcile by it. Don't merge stderr into stdout and keep the
first `qitem-…` you find there; a refused create prints its request ID first, too.

Read back (`rig queue show <id> --full --json`, or `rig queue transitions <id>`) when the answer doesn't show what you
need, for example:

- the outcome was INDETERMINATE (a transport failure, or a 502 `remote_queue_write_failed` that may have reached the
  other host), or the write warned `qitem_body_not_saved` (an existing row came back). Reconcile by the original ID
  before any retry. A 502 whose `failureClass` is `unknown-host`, `unsupported-transport` or `registry` isn't
  indeterminate: the daemon refused before contacting any host and wrote nothing (`create` says "No row was
  created"). `unsupported-transport` means that host entry is SSH-declared. Use the http entry for the same machine
  from `rig host list`; if there isn't one, add it with that machine's daemon URL (`rig host add --id <id>
  --transport http --url <daemon-url>`), asking whoever runs that host for the URL;
- the output was compact or truncated and the field you need isn't in it (the compact receipt shows `bodyBytes`, not
  the body, and its footer names what it left out);
- you need a transition note, a closure or blocker detail, or a successor that the output you saw omits;
- you need evidence from downstream of the write: the recipient's wake (`create --verify` waits for it), or its
  pickup or claim (a later read);
- your team's custody rule asks for a separate read-back.

Don't read back only to see again a field the response already showed you.

### §1b doctrine — turn ends by passing the ball

**A turn ends by passing the ball, never by going idle holding the slice waiting
on a confirmation the selected process does not include.** Follow the current
`mission-slice-sop`: proportional owner checks are the default; independent review
runs when selected, at the authored work boundary. Role names do not add per-commit
guard, QA, or orchestration gates. Do the authorized work, run its selected checks,
and return the outcome through durable custody.

Valid pauses are only:

- A genuine blocker — file a blocked-state qitem against the blocking peer or
  surface explicitly to orch.
- A scope-or-architecture question that requires owner input and changes the
  plan — surface to orch with the specific decision needed.

Implementing already-authorized work is neither of these. Proceed without
phantom-gating on an imagined "next prompt" or "operator confirmation" that the
process does not require.

### Anti-patterns

- Using `rig send` for durable work → use `rig queue create` instead. Sends do
  not survive restarts and do not show up in queue/project views.
- Idle-holding a slice for an imagined "next prompt" or "operator confirmation"
  that the process does not require → pass the ball via `rig queue handoff` and
  proceed to the next slice or stand by for the inbound verdict. See the §1b
  doctrine above.
- Inlining a multi-line / backtick-heavy body into `rig queue create --body`
  → use `--body-file /tmp/<descriptive-name>.txt` (or `-` for stdin), the
  corruption-safe surface. The body parser does not tolerate raw backticks or
  flag-like tokens inline.

## Runtime-Gated Coordination Primitives

OpenRig v0.3.1 is published publicly as `@openrig/cli@0.3.1` and GitHub Release
`v0.3.1`. It includes the bundled PL-004 Coordination Primitive System: Phase A
`rig stream` / `rig queue`, Phase B `rig project` / `rig view`, Phase C
`rig watchdog`, and Phase D `rig workflow` / `workflow-keepalive`.

These are shipped product surfaces in v0.3.x, but they require a compatible
v0.3.x daemon and matching SQLite schema at runtime — the installed package
version is not automatically the version of the daemon serving you. If a
coordination command behaves unexpectedly, confirm the running daemon with
`rig whoami --json` and daemon status before assuming a product bug.

Default posture:

- Treat daemon `rig queue`, `rig stream`, `rig project`, `rig view`, `rig watchdog`, and
  `rig workflow` as the product coordination surfaces when the active daemon is v0.2.0 or newer.
- Use daemon-backed `rig queue` for durable routing. `update / show / list`
  complement `create / handoff` for inspection and state changes; records in an
  unrelated store are not evidence that this daemon owns the work.
- If a daemon-backed coordination command fails, debug the command/runtime/schema edge directly;
  do not assume the right workaround is to drop back to a config-layer primitive.
- Do not perform daemon stop/start, production DB copy/mutation, release, publish, or other
  consequence-boundary actions unless the operator/workstream has granted that specific gate.

## First-user workspace setup

When booting into a rig on a host where the workspace is unset, gap-ridden, or
points at a stale layout, address that before substantive project work. The
shipped surface is small + bounded — reach for the canonical commands rather
than improvising.

### Detect workspace state at boot

Agent-actionable when the daemon is reachable.

```bash
rig workspace validate --json
rig workspace validate <path> --kind <user|project|knowledge|lab|delivery> --json
```

`rig workspace validate` walks the workspace root and emits a structured
frontmatter-gap report against the v0 contract. Exit code is non-zero when
gaps exist (operators chain into hygiene fix loops). Default root is the
current directory; pass a positional path to validate elsewhere. `--kind`
scopes the contract to a specific workspace kind; omit for a kind-agnostic
structural check.

If `rig workspace validate` reports a non-zero `gapCount` OR the workspace
root is unset / unwritable, the workspace needs instantiation — see the next
section.

### Instantiate the canonical workspace scaffold

Agent-actionable. The operation is additive and preserves existing files.

```bash
rig config init-workspace
rig config init-workspace --root <path>
rig config init-workspace --dry-run --json
```

`rig config init-workspace` scaffolds the canonical workspace layout at the
configured `workspace.root` (default `~/.openrig/workspace`):

- `missions/` — release missions + slices
- `exhaust/` — project-local coordination exhaust
- `SPEC.md` — project intent
- `project.yaml` — project catalog selections and mission root
- `workspace.yaml` — project registration
- `.gitignore` — local OpenRig state and exhaust exclusions

`--root <path>` targets a non-default root for this call; `--dry-run` reports
what would be created without writing. `--force` is deprecated compatibility
and still preserves existing files.

### Redirect the workspace root

Operator-gated when persistent. Agent-actionable when one-shot via env-var.

For a single command:

```bash
OPENRIG_WORKSPACE_ROOT=<path> rig <command> ...
```

For a persistent host-level redirect, the operator changes the config file or
runs the setter:

```bash
rig config set workspace.root <path>
```

ConfigStore precedence: `OPENRIG_WORKSPACE_ROOT` env > config-file
`workspace.root` > built-in default `~/.openrig/workspace`. The same
precedence governs `OPENRIG_WORKSPACE_SPECS_ROOT` → `workspace.specs_root`
(default `<workspace_root>/specs`).

Prefer the env-var form for one-shot redirects (transparent to operators);
reserve `rig config set` for changes the operator owns.

### Build a workspace from scratch

Agent-actionable. Same surface as the canonical scaffold above; the
`workspace.root` cascade handles non-existent host paths.

```bash
rig config init-workspace --root /path/to/new/workspace
```

The command additively creates any missing canonical entries and preserves
every existing one; only a complete six-entry scaffold is a no-op. Run
`rig workspace validate /path/to/new/workspace --json` after to confirm the
contract holds.

### Create a workflow inside an existing workspace

Authoring is operator-or-agent; validation + instantiation are
agent-actionable.

Workflow spec files live at:

```
<workspace_root>/specs/workflows/<name>.yaml
```

`<workspace_root>` resolves via the ConfigStore precedence named above.
There is no `rig workflow create` verb in v0.3.x — the spec YAML is authored
directly. Template by hand from the documented schema, or copy a built-in
starter from `<openrig install>/dist/builtins/workflow-specs/` and adapt.
Once written:

```bash
rig workflow validate <workspace_root>/specs/workflows/<name>.yaml --json

rig workflow instantiate <workspace_root>/specs/workflows/<name>.yaml \
  --root-objective "<one-line objective for the run>" \
  --created-by <your-session>@<your-rig> \
  --json
```

Both `--root-objective <text>` and `--created-by <session>` are REQUIRED
on `instantiate` — omitting either yields a Commander required-option
error before the daemon is contacted. `--entry-owner <session>` is an
optional override for the entry-step owner; default routing is per the
workflow spec.

`validate` returns a structured ok/error report; `instantiate` creates a
workflow instance + entry-step qitem. Inspect existing surface state with:

```bash
rig workflow specs --json              # list registered specs (built-in + operator-authored)
rig workflow list --json               # list active workflow instances
rig workflow show <instanceId> --json  # inspect one instance
rig workflow project <instanceId>      # ADVANCE an instance — projects the next-step packet
rig workflow continue <instanceId>     # read-only inspector of an instance (does NOT advance it)
```

*(Surface note — the current `rig workflow` command group registers **13** subcommands: `validate`, `instantiate`, `project`, `list`, `specs`, `show`, `trace`, `continue`, `run`, `watch`, `route`, `resume`, `status`. There is still no `create` verb — the spec YAML is authored on disk. `project` is the advancing verb (it projects the next-step packet); `continue` is a read-only inspector, NOT an advance — do not conflate them. The 13-verb set and the project-vs-continue semantics are verified against current product main `d37a08ad` (`packages/cli/src/commands/workflow.ts`, 13 registered `.command(...)` entries; the earlier "6-verb surface / continue-advances" claim here was stale). Verify individual subcommand flags with `rig workflow --help`.)*

## Permission policy — pick one at setup (onboarding)

OpenRig sets only a **minimal usability floor** on your harness permissions and otherwise stays out of the way — then it ships **recommended policies you opt into**. It never bakes a permission policy for you. On install / onboarding this is a required choice, presented as a top-level pick:

- **POLICY MODE** — pick a built-in policy and have it applied:
  - **Locked** — deny-by-default whitelist; untrusted rigs/work.
  - **Standard** ⭐ (recommended) — routine development including push is allowed; PR creation, publication, merge/release, force-push and destructive actions ask.
  - **Open** — allow-by-default; everything except explicitly-destructive, which ask.

  The built-in definitions ship as read-only policy spec files (Locked / Standard / Open); applying your pick is the job of the **`applying-a-permission-policy`** skill — it translates the chosen spec into your live harness config (Claude `settings.json` / Codex `config.toml`), interactively, showing the diff before it writes.
- **YOLO MODE** — done with permissions, just want it to work: OpenRig boots every seat with the harness full-bypass launch flag. No config policy is applied (the bypass overrides it). This is a deterministic OpenRig setting, not a skill.
- **No choice = the floor** — the minimal usability baseline (Claude `acceptEdits` / Codex workspace-only / Pi `--no-approve`), one consistent minimum, nothing more.

The floor and YOLO are **launch flags** OpenRig sets deterministically; the Locked / Standard / Open policies are **config-file** policies the skill applies (agent-driven, because harness config formats drift). A rig **carries** its chosen policy on its spec and boots with it — see Lifecycle → Bring a rig up. To (re)apply or change a policy, open **`applying-a-permission-policy`**.

## v0.3.x Starter, Workspace, And Plugin Surfaces

OpenRig v0.3.0 adds `rig agent-image`, `rig context-pack`, `rig workspace`, and
`rig config init-workspace`. *(0.5.0: the `rig context-pack` alias is retired — the store + compose library is the single `rig context` noun; see "Context packs and paced delivery (0.5.0)".)* It also shifts fresh-user starter guidance toward
`product-team` for human-directed work and `conveyor` for workflow-oriented
work. Treat `demo` as legacy/test content unless a task specifically asks for
the old demo spec. *(0.6.6: the built-in teams are `starter` and `factory`, plus the
specialist teams `code-review`, `research` and `pm`. `product-team`, `conveyor` and
`demo` are gone, and `first-project` is starter's old name. `workshop` is a rig
bundle.)*

OpenRig v0.3.1 adds public package/source surfaces for Plugin Primitive v0,
Claude Auto-Compaction Policy, migration `040_workflow_specs_diagnostic`,
Library Explorer finishing, Settings Destination Explorer, Dashboard/For You
vellum refresh, storytelling adapter, and action outcome + inline error UX.

`rig plugin` is read-only at v0:

```bash
rig plugin list
rig plugin show <id>
rig plugin used-by <id>
rig plugin validate <path>
```

There is no `rig plugin install` verb in v0.3.1. Plugin installation remains
explicit operator copy/symlink to `$OPENRIG_HOME/plugins/<plugin-id>/`.

The v0.3.1 package introduced opt-in Claude auto-compaction policy through
`policies.claude_compaction.*` ConfigStore keys. A package version alone says
nothing about a running daemon's configuration; inspect the selected instance
before relying on a policy or its default.

Compatibility checks:
- `rig down` accepts a rig name or id. An ambiguous name matching more than one
  active rig is refused with matching ids; use the intended id. It ends every
  agent's session and any work in progress, so check `rig ps --nodes --rig <rig>`
  and that the person asked; `rig up <rig> --existing` restores it.
- For queue/view JSON or limit differences, compare the installed command's help,
  the running daemon version and the actual response. A wrapper mismatch is not
  by itself a daemon-health failure, and historical workarounds are not current
  behavior guarantees.
- After a startup timeout, inspect status and logs before retrying; a timeout
  does not establish whether the underlying operation completed.

## Recovery and Resilience (v0.3.4+)

v0.3.4's theme is Recovery + Resilience. The surfaces below compose into a
single boot-to-running-rig path that survives crashes, hand-resumed sessions,
profile-load drift, and partial workspace state without silently fudging
status.

### `rig start` — recovery entrypoint

`rig start` is the top-level recovery sequencer. It does not invent recovery;
it composes existing primitives (daemon start + kernel verify + per-rig
restore) into one call.

```bash
rig start                    # interactive: daemon + kernel + pick-and-restore
rig start --last             # headless: restore rigs that were last running; a rig stopped on purpose stays down
rig start --all              # headless: restore all rigs with restore-usable snapshots
rig start --rigs <name> [<name>...]   # headless: restore only the named rigs
rig start --json             # JSON output for agents
```

`rig start --last` keeps down a rig that was stopped on purpose (`rig down` or `rig seat stop`).
Bring it back with `rig start --rigs <rig>`. A rig whose seat statuses can't be read is still
attempted, with a warning (`seat_status_unreadable`).

Framing: `rig start` is the RECOVERY entry point, not the getting-started
hero. The fresh-user boot hero remains `rig up <team>` (typically
`rig up starter` for a first change, or `rig up factory`). Reach for `rig start` after a host reboot, daemon
restart, or any "bring my rigs back" moment.

### `rig reconcile-session` — no-launch adopt of a hand-resumed session

When an operator has externally resumed an agent session (e.g. attached a
shell, restarted a runtime by hand) and you want OpenRig to reconcile its
lifecycle state without re-launching or sending input, use:

```bash
rig reconcile-session <session>
rig reconcile-session <session> --rig <rigId> --node <logicalId>
rig reconcile-session <session> --no-launch
rig reconcile-session <session> --json
rig reconcile-session <session> --repair-missing-pane --no-launch
```

This is a no-launch, no-input adopt: it records a new claimed session row for
the seat (any running row is superseded); it re-captures the resume token if
it can, and conversation continuity stays unverified. `--rig`/`--node`
disambiguate when the canonical session name does not uniquely resolve.
`--no-launch` is accepted for explicitness.

`--repair-missing-pane --no-launch` is different: for a running launched seat
whose tmux pane was never recorded, it fills in the pane and keeps the
session, resume token and generation. It never adopts. Both forms refuse
while the seat's typing protection is on.

### Five-term restore status vocabulary

The shipped restore vocabulary is intentionally honest. It surfaces in
`rig up` / `rig restore` / `rig ps`. Use the term that fits — do not collapse
to a generic "ok/failed":

- `resumed` — seat resumed from its original session/snapshot and is live.
- `fresh-primed` — seat opted into `--fresh` and was freshly started.
- `awaiting-decision` — zero-session honest state. There is no resumable
  session AND no `--fresh` opt-in was given; the seat is waiting for an
  operator decision. Previously fudged as `failed`; that was wrong — nothing
  is broken, the system is asking for input.
- `attention_required` — seat is in a state needing operator attention; not
  a transport failure. Clear via `rig seat clear-attention` once the
  attention has been resolved.
- `failed` — the send transport or launch genuinely failed.

This replaces the prior collapsed model (the v0.3.3 four-term vocabulary, in
which `rebuilt` was a term, is retired).

### `rig seat clear-attention` — audited reconcile of stuck attention

When a seat is stuck in `attention_required`, do NOT hand-edit SQLite to
fake-clear the state. Use the evidence-gated, operator-attested, audited
reconcile:

```bash
rig seat clear-attention <session>
rig seat clear-attention <session> --reason "operator attested: the operator re-authed, confirmed live"
rig seat clear-attention <session> --json
```

`--reason <text>` can acknowledge startup-status and subset-restore attention.
It does not bypass full-restore continuity checks or an active pane-identity
mismatch/missing-pane check; those run first. Successful identity re-verification
can also clear coexisting startup or subset-restore attention. If neither earlier
path clears attention, omitting `--reason` requires activity or send evidence.
Startup and restore clears write their corresponding audit events; an identity-only
clear updates the current binding and identity verdict without a clear event.
Acknowledgment or responsiveness alone does not prove that the original
conversation resumed.

Two startup cases also end in `attention_required`, and the result says what to do:
- **Assisted startup** (a community harness preset with `startup_assisted: true`): the startup text and Enter were
  sent but submission isn't confirmed. Check the pane and submit any staged text, don't resend it, then run the
  reported `rig seat clear-attention <session> --reason "..."` once the seat has responded.
- **A refused startup turn** (Claude answered a startup turn with a refusal such as an expired login): nothing more is
  typed into the seat, and the result names how many later startup inputs weren't sent. A fresh start that ran no
  one-shot action stays continuable: `rig seat continue <seat>` delivers the whole startup again, the refused turn
  included. A resumed or forked seat keeps its conversation and isn't offered continue; a fresh start that can't
  continue names `rig seat launch <seat> --fresh --stop --reason "<why>"`.

A 422 response names the uncleared class and its failed check. If the recorded
native token needs correction and you know the actual token, use
`rig seat set-resume-token <session> --token-stdin --reason <explanation>`, then
rerun `rig seat clear-attention <session>` to check the live evidence. The token
update records operator provenance; it does not itself prove continuity.
Stopping/relaunching a working seat is a separate disruptive operation, not a
required cleanup or proof of resumed lineage.

### Periodic snapshots — crash-insurance floor

The daemon ships a periodic-snapshot scheduler. It runs independently of
teardown events and provides the crash-insurance floor that prior
event-only/teardown-only snapshots could not provide on hard crashes.

Config keys (SettingsStore):
- `snapshots.periodic.enabled` — default `true`
- `snapshots.periodic.interval_seconds` — default `300`
- `snapshots.periodic.retention_keep` — default `10`

Newest-wins semantics: when both `auto-periodic` and `auto-pre-down`
snapshots exist for a rig, the freshest of the two is selected for restore.
A newer `auto-periodic` beats a stale `auto-pre-down` (the crash fix); a
genuinely-fresher `auto-pre-down` still wins on graceful cycles. Manual
snapshots are handled separately. See
`packages/daemon/src/domain/snapshot-repository.ts` for the ordering rule.

The last-snapshot floor surfaces in `rig ps` / status output so an operator
can see at a glance how recent the crash-insurance floor is.

### Codex profile-v2 preflight

Profile-bearing launch/restore surfaces run a profile-load preflight. When
profile-load issues are detected, the failure is honest and actionable
(named error + remediation pointer) instead of a silent partial launch that
would later look like an attention_required seat with no explanation.

### cmux launch readiness

cmux-backed launches no longer produce silent partial workspace state. When
parts of the workspace are missing, the launch surfaces partial state
honestly and the UI exposes a one-click open-missing affordance.

(See also `## Token-Efficient Defaults (v0.4.0+)` below for the compact-by-default read-command surface that lands in 0.4.0.)

## Token-Efficient Defaults (v0.4.0+)

v0.4.0 flips the five most frequently invoked read-commands from firehose-by-default to compact-by-default, and `rig queue list` adopts the docker / kubectl read-command grammar. **All defaults preserve breadth and capability — the firehose is one explicit flag away.**

### `rig ps` — scope-aware: bare `rig ps` = ALL rigs; `--nodes` = your rig only

```bash
rig ps                      # ALL active rigs on the host, one compact row each — RUN FIRST to know the world
rig ps --rig <name>         # one named rig's summary
rig ps --nodes --rig <name> # per-node (seat) detail for a NAMED rig — the normal drill-in
rig ps --nodes              # per-node detail — CURRENT rig ONLY (deliberately narrow; NOT the whole host)
rig ps --json               # compact JSON (default = a bare array of ALL non-archived rigs)
rig ps --nodes -A           # cross-rig node inventory (was v0.3.4 default)
rig ps --nodes --full       # complete record (the v0.3.4 per-node default shape; resumeToken VALUE retained here for downstream consumers)
rig ps --nodes --session <sess>  # narrow to one canonical session
rig ps --active             # opt-in active-state filter (does NOT change the all-states default — ps surfaces topology/readiness, where stopped/recoverable/attention IS the actionable signal)
```

**v0.4.0 breadth + projection changes**:
- **Rig-level `rig ps` lists ALL active rigs** (one row each — the cheap "know the world" view). The **`--nodes` (per-seat) view defaults to your CURRENT rig only** (from `OPENRIG_SESSION_NAME`'s `@<rig>` suffix); `--rig <name>` picks another rig, `-A` widens `--nodes` to the whole host (expensive — prefer `--fields`/`--limit`).
- **Per-node TL;DR projection (compact) is the default**; `--full` returns the raw byte-equivalent passthrough. Daemon-side `recoveryGuidance` relocated to a guidance-by-reference map (no longer duplicated per-node) — even `--full` benefits.
- **All-states stays default** (different from `rig queue list` which defaults to active-only) — for `ps`, non-running states ARE often the actionable signal.
- **Resume-token security**: `--full` JSON emits `resumeTokenPresent` (boolean) — the actual `resumeToken` value also remains in `--full` for downstream consumers that legitimately need it, but the compact default never carries it (an orch glance never accidentally leaks token material).

**⚠ SCOPE-AWARENESS — the one that bites:** `rig ps --nodes` (and `--nodes --json`) show ONLY your current rig's seats, by design — the narrow default protects your context window. **Narrow output is not the whole world.** Never conclude "my rig is the only rig on the host" from a `--nodes` read — run bare `rig ps` FIRST (cheap; it lists every rig), then `rig ps --nodes --rig <name>` for the one you need. (`-A` widens to the whole-host node view; choose it when that breadth is needed.)

### `rig whoami` — compact-by-default + `--full` (`--verbose` alias)

```bash
rig whoami                  # compact: identity + peers names + edges + transcript path
rig whoami --json           # compact JSON
rig whoami --json --all-peers  # compact JSON with every peer, when output.compact bounds the list
rig whoami --full           # complete payload (v0.3.4 default shape)
rig whoami --verbose        # alias of --full
```

The first command every agent runs on boot AND every compaction-restore. The compact default keeps identity-recovery essentials (`identity`, `peers` names + sessionNames, `peersNote`, `edges` directional `kind` + `to.sessionName`, the transcript path). `--full` adds `contextUsage`, `commands`, `runtimeContext` and `workspace`. With `output.compact` on, compact JSON lists at most `output.whoami_peers` peers (default 8): edge peers first, then your pod, then roster order. `peersNote` and `peersOmitted` then say how many were left out, and `--all-peers` lists every one; `edges` stays complete. The compact-default is an ALLOWLIST projection — future payload fields default to `--full` and cannot silently re-bloat the every-boot path.

### `rig queue list` — active-frontier + docker/kubectl grammar

```bash
rig queue list                       # active, compact, CURRENT-rig (docker-ps default)
rig queue list -a                    # + closed/done history within current breadth (docker -a)
rig queue list -A                    # cross-rig breadth (kubectl -A)
rig queue list --full                # add body + chain-of-record + transition history
rig queue list -o json               # compact JSON (token-safe, machine-parseable)
rig queue list --full -o json        # full JSON
rig queue list --mine                # just the caller's items
rig queue list --destination <s>     # destined to <s>
rig queue list --source <s>          # sourced by <s>
rig queue show <qitemId>             # bounded single-item body preview
rig queue show <qitemId> --full      # complete body and chain fields; a closed row adds closingTransition (the close's state, reason, target, actor, time and note)
```

Four orthogonal axes (scope × history × field-breadth × encoding), all composable. **STOP using bare `rig queue list` as the cross-rig firehose.** Default is now active + compact + current-rig. Cross-rig history with full bodies is opt-in via `-A -a --full`; request only the breadth and fields needed for the question.

### `rig restore-check` — summary + not-ready-only default + `--full`

```bash
rig restore-check               # summary counts + not-ready seats (with reasons) only
rig restore-check --full        # complete per-seat readiness across the fleet (v0.3.4 default)
rig restore-check --rig <name>  # narrow
rig restore-check --as <session>  # narrow to one seat
```

The summary retains not-ready seats and their reasons; `--full` adds ready-seat detail when needed. Scope the query before expanding its payload.

### `rig context` — context-window usage viewer (0.4.x; REMOVED in 0.5.0)

```bash
rig context                # compact summary        (0.4.x only)
rig context --full         # complete current payload
rig context --rig <name>   # narrow to one rig
rig context --threshold 80 # filter to seats at/above 80%
```

Lower leverage than the others; keeps the read-command surface compact-by-default after the 0.4.0 upgrade. **⚠ 0.5.0: this usage viewer is removed entirely and the `rig context` name is reassigned to the context library (store + compose) — see "Context packs and paced delivery (0.5.0)" below. On a 0.5.0 host, bare `rig context` is the library, not this viewer.**

### Keep routine reads bounded

Choose scope, active/history breadth and fields before expanding a result. A
status question usually needs identifiers, owner, state and reason; open the full
body or artifact when it is relevant. Preserve full evidence on disk instead of
repeatedly loading unchanged output. Compact defaults reduce reading cost; they
do not remove the full-detail path or prove that nothing exists outside the scope.

### `rig scope mission|slice progress` — deterministic progress updates

```bash
rig scope mission progress <mission> --add "<line>"   # append a progress line; --set replaces; --section <heading> (default Rail); --status active|done|blocked
rig scope slice progress <slice-path> --add "<line>"  # same flags: --add / --set, --section <heading>, --status active|done|blocked
```

Replaces hand-editing `PROGRESS.md` with markdown. Writes the canonical structure the OpenRig PROGRESS UI page reads. `rig scope mission create` + `rig scope slice create` now scaffold `PROGRESS.md` automatically.

### `rig scope mission|slice stage / verified / repair` — deterministic maturity vocabulary

```bash
rig scope slice stage <slice> <new-stage>             # wip / provisional / established / canonical / superseded / retired
rig scope slice stage <slice> superseded --successor <id>  # superseded REQUIRES --successor (rejected otherwise)
rig scope mission stage <mission> <new-stage>         # same enum + rules at mission tier

rig scope slice verified <slice> --against "<source>" # stamp `verified: <today> against <source>`; --against MANDATORY
rig scope mission verified <mission> --against "<source>"

rig scope slice repair <slice>                        # idempotent repair: backfill PROGRESS.md, conform id/stage/verified, repair ghosts
rig scope mission repair <mission>                    # mission-tier idempotent repair

rig scope slice show <slice>                          # derives read-time effective-reliability from (stage × verified)
                                                      # — stale-`verified` `canonical` reported as effectively `provisional`
```

Composes with the `progress` command + scaffolding to update scope IDs and maturity vocabulary through `rig scope`. Agents update `stage` / `verified` / `id` through commands rather than hand-editing markdown and drifting. The `--against` MANDATORY rule on `verified` is the anti-stale keystone: bare timestamps are rejected because a bare timestamp is exactly what lets stale trackers lie while looking fresh. **STOP hand-editing the `stage` / `verified` / `id` fields in scope frontmatter; use the new verbs.** Existing missions / slices with `id:null` ghosts or missing `PROGRESS.md` are repaired idempotently via `repair`.

### `rig skill audit` — skill cascade provenance

```bash
rig skill audit                  # human report of findings
rig skill audit --json           # structured findings
rig skill audit --severity warn  # stale + mirror-drift only
rig skill audit --rig <name>     # narrow to embedded skill copies for one rig
```

Read-only audit of the skill cascade. Detects `missing` / `stale` / `self-referential` / `invalid-date` / `mirror-drift` across the canonical skills workspace → product mirror → hub cwd → installed plugin chain. Findings route back to the lifecycle for shaped propagation runs. **False-green prevention**: when audit evidence is unavailable, the CLI emits `unable-to-audit` with exit code `2` rather than reporting `clean`.

### `rig seat clear-attention` — extended to derived projection staleness

`clear-attention` also reaches restore-derived attention even when
`startupStatus=ready` and `sessionStatus=running`. Full-restore attention requires
the restore reconciler's exact native-token and usable-pane checks; `--reason`
cannot replace them. Subset-restore attention can reach the attestation path
when no active pane-identity class takes precedence. That path records
`operator_recovered` with `runtimeCwdVerified:false`; it is an acknowledgment,
not proof of resumed lineage. Without an explicit stored continuity outcome,
inventory leaves continuity null (`unverified` in `rig seat status`) unless the
same restore attempt has a matching receipt and reconciliation with strict
native-token and usable-pane proof. Explicit stored outcomes remain historical
facts; acknowledgment or responsiveness alone cannot infer `resumed`.

### Native Codex session id capture

Codex seats can now record the real native session id from the Codex
`SessionStart` hook instead of relying on scrape-shaped identity. Corroborate the id across the current hook payload, provider history and
managed record before relying on it. A release introducing native capture does
not prove that every existing seat uses it; retain any unavailable or conflicting
identity evidence explicitly.

### Codex resume preserves approval posture

Resuming a Codex seat preserves the launching seat's approval/sandbox posture
and profile flags. Product-emitted resume commands carry the posture flags
instead of silently falling back to implicit-deny or an unrelated profile.

Do not "fix" a resumed Codex seat by relaunching it with broader approvals
unless the operator explicitly grants a bounded window. Verify the seat's
active posture first, and preserve it when composing recovery commands.

### `rig seat set-resume-token --token-stdin`

```bash
printf '%s' "$RESUME_TOKEN" | rig seat set-resume-token <session> --token-stdin
```

Use this command to set or restore a seat resume token. It replaces direct
SQLite edits, rejects unauthorized writes and bad/null token false-ready paths,
records redacted audit/provenance, and keeps token material out of command
arguments, stdout, logs, and normal status rows. Use stdin, not an inline flag,
when passing token material.

## Core Loop

Most work in OpenRig reduces to this loop:
- recover identity: `rig whoami` (compact default; add `--full` only when you need the heavy payload)
- inspect inventory: `rig ps --nodes` (compact default; add `--full` only when you need the firehose)
- read context: `rig transcript ...`, `rig ask ...`, `rig chatroom history ...`
- act: `rig send`, `rig capture`, `rig broadcast`, lifecycle commands

## Agent-Managed Apps

An agent-managed app is a deployable OpenRig unit made of:
- the software or service
- one specialist agent dedicated to that software

Treat the specialist as the domain delegate for that app.
The current canonical example is:
- rig: `secrets-manager`
- pod: `vault`
- member: `specialist`
- logical ID: `vault.specialist`
- session: `vault-specialist@secrets-manager`

Typical operator loop:

```bash
rig up secrets-manager --cwd /path/to/project
rig ps --nodes --json
rig send vault-specialist@secrets-manager "Check Vault health and report back." --verify
rig env status secrets-manager
rig env logs secrets-manager
```

Cross-rig communication is valid when the target session resolves uniquely.
Example:

```bash
rig send vault-specialist@secrets-manager "Read secret/data/dogfood and report the value." --verify
```

Use the specialist instead of teaching every peer the same app-specific toolchain.
For Vault, ask `vault.specialist` to do secrets-domain work rather than improvising curl or Vault CLI usage in unrelated agents.

## Identity and Recovery

Start here after launch, compaction, or confusion:

```bash
rig whoami --json
```

What it gives you today:
- identity: rig, logical ID, pod/member, session name, runtime
- peers and directional edges
- transcript info
- `contextUsage` when available

Flags:
```bash
rig whoami --session <name>
rig whoami --node-id <id>
```

If the daemon is unreachable but identity can still be inferred, `--json` may return a partial result instead of crashing.

`WhoamiResult` (v0.3.3+) carries a required `peersNote` field with three pointers
the agent can use to navigate the rest of the rig from a cold start. The
human-formatted CLI output preserves the literal `Peers:` line prefix verbatim
(parser/test compatibility) and surfaces the clarifier in-band beneath it; the
JSON form exposes `peersNote` directly for programmatic consumers.

## Inventory and Monitoring

```bash
rig ps                      # ALL active rigs on the host, one compact row each (run FIRST to know the world)
rig ps --nodes              # compact node inventory (current rig)
rig ps -A                   # all-rigs breadth (was the pre-0.4.0 default)
rig ps --nodes --full       # complete per-node record (the firehose — opt-in)
rig ps --nodes --json       # compact JSON node inventory (add --full for the full record)
```

**v0.4.0 flipped these to compact-by-default — see the `rig ps` compact-defaults section above; STOP using bare `rig ps --nodes --json` as a fleet-wide firehose (scope and detail are separate choices).** The compact `rig ps --nodes` node inventory (add `--full` only when you need the complete record, `-A` for cross-rig breadth) carries, per node:
- session name
- runtime
- session/startup status
- restore outcome (compact: `resumeTokenPresent` boolean; the token VALUE is in `--full`)
- attach/resume commands
- latest error

Other health surfaces:

```bash
rig status
rig daemon status
rig config
rig preflight
rig doctor
rig env status <rig>
rig env logs <rig>
rig env down <rig>
```

### Bounded agent self-scout

Use the typed health projection before reading raw coordination history. The
default query is the current seat; widen deliberately when the evidence points
beyond it:

```bash
rig health --json
rig health --rig <rig-id> --json
rig health --instance --json
rig health explain <finding-id> --json
```

Follow the returned stable finding ID and `suggestedInspection`. Use `explain`
when the summary matters: it returns the same canonical record with its bounded
window, freshness, literal detector rule, evidence references, and next
inspection. Human output projects those same fields; it does not calculate a
second score.

An empty result means only that no records matched the bounded query. It is
**not a healthy assertion**. Stale, unavailable, contradictory, and
indeterminate evidence stays explicit. Never read raw SQLite for a self-scout,
and never turn a finding into an acknowledgement, notification, queue row, or
remediation automatically: `rig health` is strictly read-only.

## Transcript and Communication

### Transcript access

```bash
rig transcript <session> --tail 100
rig transcript <session> --grep "pattern"
rig transcript <session> --json
```

### Send to one session

```bash
rig send <session> "message"
rig send <session> "message" --verify
rig send <session> "message" --wait-for-idle <seconds>
rig send <session> "message" --raw
rig send <session> "message" --dangerously-interact --reason "<why>"
rig send <session> "message" --host <id>
rig send <session> "message" --json
```

**The send-guard (v0.4.0) — the default is SAFE.** A default `rig send` is guarded: it will NOT submit into an interactive prompt / permission block on the target pane. That includes Claude's MCP server approval menu (`N new MCP servers found in .mcp.json`, ending `Space to select · Enter to confirm · Esc to reject all`) while it is the current screen: the send is refused with reason `target_needs_input` and `Refused: '<session>' is at an interactive prompt (selection_prompt). A message must not select or approve it. … No text was sent.` Approving or rejecting those servers is the person's call; `--dangerously-interact` drives it only deliberately. Flags:
- `--verify` — delivery evidence.
- `--force` — **a back-compat no-op on the send DECISION**: it never bypasses the interactive-prompt/permission guard and never changes whether a message is delivered (a mid-task/busy pane already sends-with-advisory by default). *(It does NOT "bypass activity-risk checks" — that earlier teaching is retired.)* It is **not fully inert**, though — it is still parsed solely to be **rejected in combination with `--wait-for-idle`**: `rig send … --force --wait-for-idle <n>` prints `--wait-for-idle cannot be combined with --force`, exits 1, and sends nothing. So do not read "no-op" as "`--force --wait-for-idle` is harmless"; that pairing errors. *(Verified against current product main `d37a08ad`: the guard-bypass no-op is declared at `send.ts` and confirmed by runtime capture — a plain `--force` send delivers through the ordinary path; the `--wait-for-idle` rejection is enforced at `send.ts`, `routes/transport.ts`, and `session-transport.ts`, and confirmed by runtime capture — exit 1, nothing sent.)*
- `--wait-for-idle <seconds>` — wait until the target is explicitly idle before sending. **Cannot be combined with `--force`** (that pairing is rejected: exit 1, nothing sent).
- `--raw` — send exact text/keystrokes without the From/To messaging envelope (still guarded against interactive prompts).
- `--dangerously-interact --reason "<why>"` — the ONLY override of the prompt/permission guard: deliberately drive an interactive prompt/permission block (implies `--raw`, requires `--reason`, audit-logged).
  On a guard-attached managed seat, a non-menu override stops and shows existing typed/pasted input (author unknown) with `override_input_present`; unreadable input stops with `override_input_unknown`. Recognized dim suggestions are shown separately and count as empty; a collapsed paste shows only its label, not hidden contents.
  Inspect the input, deliberately clear the native prompt with native/tmux controls, then retry. Manual clearing is outside OpenRig's lease and observation checks and is not recorded; human typing can still race a read and paste.
  When you deliberately need to type without that composer check (for example an unsupported input you inspected yourself), add `--type-without-checking` with `--dangerously-interact --reason "<why>"`. It does not clear input and may join or submit existing text. Ordinary sends and wakes keep their current rules.
- `--host <id>` — send on a remote host declared in `~/.openrig/hosts.yaml` (ssh hosts shell out; http hosts go CLI-direct to the remote daemon).
- `--from <session>` — deprecated and ignored; it does not select the sender. Sender identity comes from the current seat and transport provenance; cross-host envelopes use the durable local origin, not the supplied flag or a relay identity.
- `--context <ref>` **(0.5.0)** — attach a composed context pack/piece by ref (see "Context packs and paced delivery"). Small piece → `send --context`; a real pack → `rig walk`. The noun `rig context` composes the ref; the verb delivers it.

> **Durable work goes to the QUEUE, not `send`.** `rig send` is an *ephemeral* message to a pane — it can be missed, and its delivery status is pane-render, not receipt. If you are **assigning work, or the message is important enough that losing it would be a real bummer**, use `rig queue` (below): it's durable, owned, tracked, and survives compaction and restart. Reach for `send` for a quick conversational nudge; reach for the **queue** for anything that must not get lost. Do not default to `send` for work — that's the most common mistake.

As of v0.3.3, content beginning with `--` or `-` is safe:
`rig send <session> "content starting with -- or - is now safe"` delivers
literally. The daemon's `send_text` path carries an explicit `--`
end-of-options sentinel so tmux no longer parses dash-prefixed content
as its own flags. The CLI surface itself is unchanged. For multi-line
or large bodies handed off as durable work, use
`rig queue create --body-file <path>` (`-` for stdin) — that's the
queue-side surface, not `rig send`.

`--verify` delivery outcomes (v0.3.3+):
- `delivered` — text + Enter both succeeded and capture re-confirmed the body landed.
- `rendered-unconfirmed` — text + Enter both succeeded but capture could not re-confirm the body (TUI redraw race or scroll). The message landed; the post-send re-check could not prove it. Treat as landed-but-unconfirmable, NOT failure.
- `failed` — the send transport itself failed.

The legacy `Verified: yes/no` line is preserved verbatim (parser/test
compatibility). A new `Delivery: <outcome>` line carries the named outcome
above.

Observed operator nuance for `--verify`:
- `Sent to ...` + `Verified: yes` (`Delivery: delivered`) = strong positive delivery evidence.
- `Sent to ...` + `Verified: no` + `Delivery: rendered-unconfirmed` = the message landed; capture could not re-prove it. Don't blind-retry — check reply / `rig capture` / transcript before sending again.
- `Sent to ...` + `Verified: no` + `Delivery: failed` = send-transport failure.
- no `Sent to ...` line or a hard error = send failure.

When you get `Verified: no`, do not immediately retry blindly. First check one of:
- a direct reply from the target
- `rig capture <session>`
- transcript evidence
- queue/outbox state if the message asked for a durable handoff

### Capture terminal output

```bash
rig capture <session>
rig capture <session> --lines 50
rig capture --rig <name>
rig capture --pod <name> --rig <name>
rig capture --rig <name> --json
```

### Broadcast

```bash
rig broadcast --rig <name> "message"
rig broadcast --pod <name> "message"
rig broadcast "message"
rig broadcast --rig <name> "message" --json
```

**Use `rig broadcast` sparingly — prefer `rig send` fan-out.** Without `--rig` or `--pod`, broadcast targets
**every running session across ALL rigs** (plus attached external_cli nodes) — the fastest way to cause a
broadcast storm. Reserve `rig broadcast` for small rigs or a genuine all-hands emergency. For the normal
"message several seats at once" case, use `rig send`, which scopes the fan-out and keeps the messaging
envelope, the delivery/interactive-prompt guards, and per-recipient results:

```bash
rig send --to dev-impl@my-rig,dev-qa@my-rig "message to specific seats"   # named seats (comma-list or repeat --to)
rig send --pod dev "message to one pod"                                    # scoped fan-out
rig send --rig my-rig "message to one rig"                                 # scoped fan-out
```

### Chatroom

```bash
rig chatroom send <rig> <message> [--sender <name>]
rig chatroom history <rig> [--topic <name>] [--after <id>] [--since <ts>] [--sender <name>] [--limit <n>] [--json]
rig chatroom wait <rig> [--after <id>] [--topic <name>] [--sender <name>] [--timeout <seconds>] [--json]
rig chatroom clear <rig>
rig chatroom topic <rig> <topic-name> [--body <text>] [--sender <name>]
rig chatroom watch <rig> [--tmux]
```

**Key commands:**
- `send` — post a message
- `history` — retrieve with composable filters (sender, since, after, topic)
- `wait` — block until new matching messages arrive (polls history, times out honestly)
- `clear` — delete all messages for the rig (destructive, rig-scoped)

## See something, say something

OpenRig has an **observation stream** — the fleet's zero-friction institutional memory, mined for
real product improvements. When you notice **anything worth externalizing**, say something and keep
working:

- a **bug**, a rough edge, or something that needs fixing
- a **feature idea** or an improvement
- something that **worked really well** — a technique, tool, or pattern worth spreading
- an **observation**, positive or negative feedback, or something genuinely cool, productive, or funny

```bash
rig stream emit --source <your-session> --body "what you noticed"
```

That's the whole reflex. **Don't** decide where it goes or who it's for — the intake router triages
(destination/type/urgency/tags are optional hints — `--hint-type review|handoff|idea`,
`--hint-urgency routine|urgent|critical`, `--hint-tags` — never required). One command, then carry
on; the value is the habit, not the polish. **Don't overdo it, either:** stream real signal, not
narration — a good observation beats ten noisy ones. It's a passing thought you externalize, not a chore.
- `topic` — set a topic marker
- `watch` — SSE or tmux-based live stream

**Roundtable protocol:**
1. Inspect old room: `rig chatroom history my-rig --limit 5`
2. Save if needed: `rig chatroom history my-rig --json > /tmp/old-room.json`
3. Clear if needed: `rig chatroom clear my-rig`
4. Set topic: `rig chatroom topic my-rig "ROUND START"`
5. Post: `rig chatroom send my-rig "position..." --sender <session>`
6. Monitor: `rig chatroom wait my-rig --timeout 120`
7. Close: `rig chatroom topic my-rig "ROUND CLOSED"`

### `rig ask`

```bash
rig ask <rig> "question"
rig ask <rig> "question" --json
```

Current shipped behavior:
- queries the daemon for evidence
- returns rig summary
- returns transcript excerpts
- may return chat excerpts
- returns insufficiency state and optional guidance

This is an evidence/context command. It is not a hidden second-LLM call.

### `rig auth` — agent auth-profile management (v0.4.1, product-native)

Product-native switching of agent auth profiles from the CLI. The runtime is a **flag** (`--runtime <codex>`), not a command noun — never `rig codex-auth`.

```bash
rig auth status --runtime codex          # presence / mode / parseability / login-state (never prints token contents)
rig auth list --runtime codex            # saved profiles
rig auth save <profile> --runtime codex  # snapshot the auth FILE (mode-guarded), never echoes contents
rig auth switch <profile> --runtime codex
rig auth validate <profile> --runtime codex
rig auth seats … --runtime codex         # seat -> profile registry (metadata only; NOT proof of a live account)
```

**Hard secret boundary:** no token value is ever printed, logged, queued, streamed, or committed; status/validate report presence/mode/login-state only; seat labels are metadata, not live-account proof. MVP is `--runtime codex`; other runtimes use the same surface with a different `--runtime`, never a parallel command.

### Give a seat its own Claude or Codex account

A runtime's login lives in its home: Claude Code's in its config dir (`CLAUDE_CONFIG_DIR`, default `~/.claude`), Codex's
in `CODEX_HOME` (default `~/.codex`). A seat that names its own home in `env:` runs on that home's login.

1. **Prepare the home once, natively,** in a terminal: `CLAUDE_CONFIG_DIR=/abs/path claude`, then `/login`; or
   `CODEX_HOME=/abs/path codex login`. The person signs in; never copy credential files between homes.
2. **Name it in the member's `env:`** in `rig.yaml`, not with `rig up --env`, which leaves these two out
   (`CLAUDE_CONFIG_DIR: /abs/path` or `CODEX_HOME: /abs/path`), or in
   the rig's `env:` for every seat of that runtime. The member's value wins. It must be an absolute path: any other
   value is reported and ignored, and the seat keeps the daemon's home.
3. **It takes effect at the seat's next launch** (a fresh launch, restore or handover); a running seat keeps the home
   it started with. A conversation saved under the old home doesn't resume from the new one.
4. **Check it:** `rig seat status <seat>` shows the home and where it came from, and `rig provider status` lists it as
   the seat's configured account. Both say what's configured, not which login a running session holds.

Seats may share a home. OpenRig writes its own settings (Codex hooks, managed `config.toml` and plugin; Claude's
first-run trust settings) into the seat's home.

### Move one Codex seat to another login

For a Codex seat on Linux. The login must already be saved in the Codex home the seat runs on (`rig seat status <seat>`
shows it). Other operating systems, and moving a seat to another home, aren't supported by this command yet: say so instead
of improvising. A Claude seat moves differently; see the next section.

1. **Save each login once, in that home:** `CODEX_HOME=<home> codex login` (the person signs in), then
   `CODEX_HOME=<home> rig auth save <name>`. `rig auth list --codex-home <home>` lists them.
2. **Check:** `rig provider precheck --seat <seat> --to-account <name>` shows the home, what the seat is doing, and every
   peer on that home. A refusal says what's missing, and nothing changes.
3. **Move:** `rig provider switch --seat <seat> --to-account <name>`. It saves the home's current login as
   `before-switch-<time>`, activates the chosen one, and restarts the seat in place on the same conversation. If the
   current login can't be saved first, nothing changes. Peers on the home aren't restarted. Each keeps its current login
   only until its next token refresh, when Codex stops it with "signed in to another account". Run the printed
   `rig seat restart <peer> --keep-conversation --reason "..."` for each to move it too. Don't sign in again in that home: that replaces
   the login you just switched to.
4. **Confirm:** after the seat completes a real tool-using turn, run the printed
   `rig seat restart <seat> --keep-conversation --verify --expect-account <its Account line>`. Until then the move is
   unconfirmed. An uncertain restart is reported; never restart it a second time.

*(README truncated for display. [Read the full README on GitHub](https://github.com/mvschwarz/openrig)).*
