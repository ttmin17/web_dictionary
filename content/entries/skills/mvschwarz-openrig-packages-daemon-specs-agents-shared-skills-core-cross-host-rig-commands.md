---
slug: mvschwarz-openrig-packages-daemon-specs-agents-shared-skills-core-cross-host-rig-commands
name: cross-host-rig-commands
tagline: Use when addressing a registered remote OpenRig host, choosing its
  transport, or interpreting a cross-host result.
summary: rig host list shows registered hosts. rig host add --help describes
  registry writes; rig host doctor --help describes reachability checks. Inspect
  the configured OpenRig home rather than assuming the default /.openrig...
categories:
  - agent-frameworks
tags:
  - agent-harness
  - agent-orchestration
  - agent-skills
  - ai-coding
status: active
quality_percentile: 64
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: mvschwarz/openrig
  subpath: packages/daemon/specs/agents/shared/skills/core/cross-host-rig-commands
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 8550
  last_commit: 2026-11-02T08:44:58Z
  stars_delta_7d: 352
  stars_growth_pct: 4.3
  trending_score: 367.11
  velocity_source: snapshot_delta
  sparkline_4w:
    - 7377
    - 7831
    - 8198
    - 8550
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: mvschwarz/openrig
  path: packages/daemon/specs/agents/shared/skills/core/cross-host-rig-commands/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:34.151Z
  truncated: false
type: agent_skill
skill:
  skill_name: cross-host-rig-commands
  description: Use when addressing a registered remote OpenRig host, choosing its
    transport, or interpreting a cross-host result.
  folder_path: packages/daemon/specs/agents/shared/skills/core/cross-host-rig-commands
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: mvschwarz-openrig
---

# Cross-host rig commands
Use a registered host address and the entry's declared transport. SSH entries
run a remote CLI through a single-hop shell; HTTP entries use the remote daemon.
These paths have different prerequisites and command coverage. Check the exact
command's help and the target installation before a consequential operation.

## Choose and inspect the destination

`rig host list` shows registered hosts. `rig host add --help` describes registry
writes; `rig host doctor --help` describes reachability checks. Inspect the
configured OpenRig home rather than assuming the default `~/.openrig/hosts.yaml`.
Registry changes affect later routing, so make them within the requested scope.

```yaml
hosts:
  - id: test-vm
    transport: ssh
    target: test-vm.local
    user: example-user
  - id: remote-dev
    transport: http
    url: http://remote-dev.example:7433
    bearer_env: REMOTE_RIG_TOKEN
```

The registry requires a hosts array, unique non-empty ids and a supported
transport. SSH needs a non-empty target; user and notes are optional. HTTP needs
a URL and accepts at most one of bearer_env or bearer_file. Omitting both is
valid for a tokenless target. A configured but unavailable bearer is a permission
failure, not anonymous fallback. Host ids also have reserved-name validation;
use the actual validator's error rather than inventing an alias that collides.

## Address the intended operation

```bash
rig send dev-worker@example-rig "check the assigned result" --host remote-dev --verify
rig capture dev-worker@example-rig --host remote-dev
rig ps --host remote-dev --nodes --json
rig whoami --host remote-dev
```

These coordination commands select SSH or HTTP from the registry entry. They
do not silently try another transport when one fails. A host-qualified target
can be convenient, but confirm its parsing and any persisted host selection
with the particular command. Explicit --host is preferable for consequential
cross-host work.

Queue destinations use explicit --host or a supported host-qualified destination;
queue writes do not follow persisted host selection. The CLI separates the host
from the canonical seat in the routing envelope. Different queue subcommands
have different flags: check their help instead of copying a flag from send.
A local success message alone does not establish remote persistence or pickup.

## Read failures at the layer that failed

| Signal | What to inspect |
|---|---|
| registry-load-failed / unknown-host | Registry path, entry and exact destination |
| ssh-unreachable | SSH connection, target and transport diagnostics |
| permission-gate | The configured SSH or HTTP credentials and target policy |
| remote-daemon-unreachable | Target listener and actual running daemon identity |
| remote-outcome-unknown | The request may have arrived (timeout, dropped connection, unreadable reply): check its effect, for a send the target pane, before any retry |
| remote-command-not-found | Remote CLI installation and executable lookup |
| remote-command-failed | The remote operation's own status and error |

The exact result taxonomy depends on the path. HTTP failures expose the remote
status/error; SSH distinguishes the shell transport from the remote command.
Do not start or replace a remote daemon merely because a diagnostic suggests it;
first establish the target's state and the authority for that lifecycle action.
A timed-out write may have reached its destination. Reconcile its durable effect
before retrying.

## Verification and attribution

Transport success is not delivery verification or agent consumption. SSH forwards
--verify and returns the remote CLI result. HTTP preserves the remote transport
verdict and explicitly reports that the local pane-effect check did not run
cross-host. Inspect that result and the destination effect required by the task;
never replace it with “SSH exited zero” or “HTTP returned successfully.”

Cross-host output names the host/target; JSON envelopes carry cross_host metadata.
The precise envelope differs by command and transport. Preserve the underlying
remote result when passing evidence onward.

A target's host suffix selects a destination; a sender's origin identifies where
a reply belongs. Use the rendered reply address and verify its host mapping.
Current send derives the sender from the executing seat context, not a caller's
--from assertion. It adds origin-host identity at cross-host forwarding; do not
assume local sends have the same suffix. Unknown identity remains unknown.

This guide describes the implemented command paths, not proof of a live remote
journey on your installation. Forks, handovers and other lifecycle compositions
need their own supported command and scoped authority; reading remote state
does not authorize them.

## See also

- openrig-user — exact command reference
- seat-continuity-and-handover — stable seat and occupant outcomes
