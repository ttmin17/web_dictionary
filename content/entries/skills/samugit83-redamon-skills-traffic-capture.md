---
slug: samugit83-redamon-skills-traffic-capture
name: traffic-capture
tagline: "Working on the HTTP capture proxy and its replay/fuzz path: the egress
  guard that stops the proxy becoming an SSRF pivot, why it checks the resolved
  I"
summary: "- Changing how the proxy forwards, captures, ingests, or replays traffic."
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
  subpath: skills/traffic-capture
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
  path: skills/traffic-capture/SKILL.md
  branch: master
  fetched_at: 2026-11-02T09:07:16.752Z
  truncated: false
type: agent_skill
skill:
  skill_name: traffic-capture
  description: >
    Working on the HTTP capture proxy and its replay/fuzz path: the egress guard
    that stops the proxy becoming an SSRF pivot, why it checks the resolved IP,
    and keeping capture off the scan's critical path. Trigger: editing
    scanners/capture_proxy/ (capture_addon.py, egress.py, ingest_worker.py);
    adding a forward/replay/fuzz path; changing EgressPolicy or the internal
    denylist; wiring an agent tool that replays captured traffic.
  folder_path: skills/traffic-capture
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

- Changing how the proxy forwards, captures, ingests, or replays traffic.

The one-line "route every egress through the guard" rule is in the capture_proxy
[AGENTS.md](https://github.com/samugit83/redamon/blob/master/skills/traffic-capture/../../scanners/capture_proxy/AGENTS.md) CRITICAL RULES; this skill is the mechanism.

---

## Critical Rules

- **NEVER match the internal denylist on the hostname alone.** The guard denies
  on the **resolved IP** (RFC1918 and friends), because a hostname that resolves
  to an internal address (or re-resolves after a check) is the SSRF/DNS-rebinding
  case. See [scanners/capture_proxy/egress.py](https://github.com/samugit83/redamon/blob/master/skills/traffic-capture/../../scanners/capture_proxy/egress.py) (the block
  conditions operate on the resolved IP).
- **NEVER build a replay/fuzz target from unvalidated LLM output and send it
  straight out.** The replay path is a new egress path; it must pass the same
  `EgressPolicy` guard as captured traffic, or the agent can be steered into an
  internal pivot. Args must not reach the wire un-guarded.
- **NEVER remove a block condition to "make replay work".** Each condition is
  individually toggleable via `EgressPolicy` (surfaced in settings); loosen it
  there, per-condition, not by deleting the check.
- **ALWAYS keep capture and ingest off the scan's critical path.** Capture writes
  an append-only spool; a separate worker tails it into Postgres
  ([scanners/capture_proxy/ingest_worker.py](https://github.com/samugit83/redamon/blob/master/skills/traffic-capture/../../scanners/capture_proxy/ingest_worker.py)). That
  decoupling is deliberate - capture must never block or slow the scan it observes.

---

## The capture pipeline

| Stage | File | Note |
| --- | --- | --- |
| intercept | [capture_addon.py](https://github.com/samugit83/redamon/blob/master/skills/traffic-capture/../../scanners/capture_proxy/capture_addon.py) | mitmproxy addon; request/response hooks |
| egress guard | [egress.py](https://github.com/samugit83/redamon/blob/master/skills/traffic-capture/../../scanners/capture_proxy/egress.py) | resolved-IP denylist + `EgressPolicy` toggles; the SSRF backstop |
| ingest | [ingest_worker.py](https://github.com/samugit83/redamon/blob/master/skills/traffic-capture/../../scanners/capture_proxy/ingest_worker.py) | tails the spool -> Postgres; off the scan path |

## Commands

```bash
docker compose --profile capture build capture-proxy  # image rebuild (Dockerfile change, or a change to
                                                      # recon_orchestrator/hard_guardrail.py, which it bundles)
./redamon.sh test unit                                # capture_proxy section
```

A build alone does not swap the running proxy: the orchestrator spawns it, not
compose. Stop and start traffic capture once after a rebuild so it is recreated
from the new image; that interrupts every session's capture.

## Resources

- [docs/readmes/README.TRAFFIC.md](https://github.com/samugit83/redamon/blob/master/skills/traffic-capture/../../docs/readmes/README.TRAFFIC.md) - capture/replay/fuzz architecture and settings
- Related: capture_proxy [AGENTS.md](https://github.com/samugit83/redamon/blob/master/skills/traffic-capture/../../scanners/capture_proxy/AGENTS.md) CRITICAL RULES (route egress through the guard)
