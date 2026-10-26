---
slug: mvschwarz-openrig-packages-daemon-assets-plugins-openrig-core-skills-agent-operated-software
name: agent-operated-software
tagline: Agent skill from mvschwarz/openrig
summary: Agent skill from mvschwarz/openrig
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
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: mvschwarz/openrig
  subpath: packages/daemon/assets/plugins/openrig-core/skills/agent-operated-software
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 8198
  last_commit: 2026-10-26T07:30:13Z
  stars_delta_7d: 367
  stars_growth_pct: 4.7
  trending_score: 384.2
  rank_current: 39
  rank_delta: -11
  velocity_source: snapshot_delta
  sparkline_4w:
    - 5667
    - 7377
    - 7831
    - 8198
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: mvschwarz/openrig
  path: packages/daemon/assets/plugins/openrig-core/skills/agent-operated-software/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:44:00.582Z
  truncated: false
type: agent_skill
skill:
  skill_name: agent-operated-software
  description: Agent skill from mvschwarz/openrig
  folder_path: packages/daemon/assets/plugins/openrig-core/skills/agent-operated-software
  extra_files: []
  pack_total_skills: 54
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: mvschwarz-openrig
---

# Agent-Operated Software
**Agent-Operated Software** is an ongoing application whose functioning runtime includes an OpenRig
agent or rig in its live backend or control loop. The application surface can be thin: structured
state and specialist roles do the work, while the UI makes that work legible and steerable.

## Start with the shared taxonomy

- **AI-enabled software:** application code owns the control loop and calls a model as one capability.
- **Agent-Operated Workflow:** an agent owns one bounded procedure with a start and stop condition;
  see `agent-operated-workflows`.
- **Agent-Operated Software:** agents participate in an ongoing application's functioning runtime.

An application may compose many Agent-Operated Workflows. A bounded workflow does not by itself make
its surrounding product Agent-Operated Software, and a model call is neither category unless an agent
owns part of the control loop.

## Agents are part of the backend

In this architecture, behavior is not located only in functions. It is distributed across agents,
skills, instructions, bootstrap files, schemas, Markdown, YAML, JSON, folders, and deterministic
tools. A surprising result may therefore be a code defect or a coherence gap in this control plane.
Trace the path that actually produced the behavior before choosing which layer to repair.

This is not permission to tolerate defects in OpenRig core or another rock-solid substrate. There,
reproduce the bug, fix the code, and hold the full gate. The faster coherence-first posture belongs
to recoverable agent-operated application layers whose state and behavior can be inspected and
repaired cheaply.

## Markdown is the control plane

Markdown is maximally useful to an agent while remaining legible enough for a human to steer. Put
intent, work state, evidence, and decisions into stable addressed artifacts rather than private chat
or an opaque custom database. Keep schemas and conventions aligned with the running behavior: the
agent population acts on those files as executable context.

Use **progressive disclosure**. A skill's name and description are the hot trigger; its body is cold
procedure. Descriptions say when to load, not how to work. The body should route the reader to exact
sources instead of copying them into another doctrine fork.

Scripts can act as prompts. A good script returns the context or exact effect an agent needs; when it
cannot, its failure teaches what it observed, why it stopped, and safe next actions. Keep deterministic
mechanics in tools and judgment in agents.

## Make artifacts self-certifying

When a tool produces an artifact, do not make every consumer invent a completeness test:

1. Write to a partial path, never the final path.
2. Verify the property that can actually be wrong, such as duration, streams, resolution, or schema.
3. Flush and atomically rename the partial artifact to its final path.
4. Write the manifest, then a `.done` sentinel last.

Consumers fail closed on the shared proof. A filename or exit code is not content verification.

## Build with an agent SDLC

Select the rigor required by the outcome and the project's policy. Scope relationships,
attributed evidence-backed item judgment, and genuinely distinct higher judgment have separate
owners. One item judgment derives its upstream readiness; agents do not synchronize parent
checkboxes, queue tags, or status prose. Capture alone is not acceptance, and readiness does not
publish or advance a workflow. Use `openrig-operating-model` and `rig proof --help` for the
supported judgment, correction, and read path. Keep historical locks and evidence addressable.
The human supplies steering, taste, and decisions the project's authority reserves for them.

For studio applications, the running product is usually the best iteration surface. A separate mockup
earns its cost only when it resolves a real design uncertainty that the running app cannot expose as
cheaply. This removes a redundant artifact, not the visual review or proof contract.

## Repair the narrowest authoritative layer

Find the generator or source that every affected agent actually consumes. Fix a code defect in code;
fix a missing trigger in the skill; fix a malformed contract in its schema. Then verify through the
consumer. Editing a rendered or installed copy creates a temporary fork, not a repair.

The payoff compounds: a correction to the shared application control plane changes the next agent's
starting point. That is how an ongoing agent-operated system improves without making one human its
permanent router.
