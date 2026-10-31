---
slug: dstackai-dstack-skills-dstack-prototyping
name: dstack-prototyping
tagline: "Use with the dstack skill for model-serving work when the image,
  serving command, resources, backend/fleet choice, or service behavior is not
  proven. "
summary: Find a working dstack service configuration for the requested model.
categories:
  - agent-frameworks
status: active
quality_percentile: 44
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: dstackai/dstack
  subpath: skills/dstack-prototyping
  official_vendor: false
  license: MPL-2.0
signals:
  stars: 2279
  last_commit: 2026-10-13T15:12:59Z
  stars_delta_7d: 7
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 2279
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: dstackai/dstack
  path: skills/dstack-prototyping/SKILL.md
  branch: master
  fetched_at: 2026-10-14T14:55:19.685Z
  truncated: false
type: agent_skill
skill:
  skill_name: dstack-prototyping
  description: >
    Use with the dstack skill for model-serving work when the image, serving
    command, resources, backend/fleet choice, or service behavior is not proven.
    Guides task-first prototyping on real hardware, choosing fleets/backends
    that can reuse idle instances and caches, checking vLLM/SGLang sources, and
    verifying the final dstack service with a model request.
  folder_path: skills/dstack-prototyping
  extra_files: []
tags: []
---

# dstack Prototyping
Use `/dstack` for CLI commands, YAML fields, apply/attach behavior, service URLs,
and other dstack syntax. This skill explains how to use dstack runs while the
model-serving configuration is still unknown.

## Goal

Find a working dstack service configuration for the requested model.

Before submitting a service, use a task on real hardware to test the serving
image, install/runtime assumptions, model download, cache path, command, port,
launch flags, resources, env vars, backend/fleet choice, and local model
request. Then submit the same configuration as a service and verify the model
through the dstack service URL.

## Choose Where To Run

Pick the offer whose hardware best fits the goal at hand. Only when several offers fit comparably, choose a VM-based backend, an SSH fleet, or a Kubernetes fleet: they support idle instances and/or instance volumes, so later runs reuse the provisioned/idle instance or instance volumes for caching model weights (and possibly other writes), while container-based backends start clean on every run.

Fetch `https://dstack.ai/docs/concepts/backends.md` and classify backends
from the fetched document, not from memory.

If the intention is to use PD disaggregation, the fleet must use `placement: cluster`. Since PD disaggregation implies running a router, unlike workers that must run on GPUs, the router normally should run on a CPU instance. Use `dstack fleet` to see existing fleets and `dstack fleet get <fleet name> --json` to inspect a specific fleet.

## Check Serving Sources

Check serving-framework sources early enough to choose the image, command,
launch flags, resources, cache paths, request format, and expected model
behavior.

For vLLM and SGLang, use these as credible sources:

- vLLM recipes and model index: `https://recipes.vllm.ai/` and
  `https://recipes.vllm.ai/models.json`
- SGLang docs: `https://docs.sglang.io/` (fetch `/llms.txt` for the page
  index)
- SGLang model recipes: `https://docs.sglang.io/cookbook/autoregressive/intro`
- Release notes: `https://github.com/vllm-project/vllm/releases` and
  `https://github.com/sgl-project/sglang/releases`
- Performance-loop methodology (profiling, benchmark contracts):
  `https://www.lmsys.org/blog/2026-07-02-agent-assisted-sglang-development`

## Use A Task Before Service

Before submitting a service, start a long-lived task:

```yaml
commands:
  - sleep infinity
```

or an equivalent idle command.

Submit the task detached, attach or SSH into it when available, and run commands
inside the live environment. Test the image, installs, model download and cache
path, serving command, port, launch flags, local model request, and expected
model behavior.

When starting a long-running command in the background from a non-interactive
SSH command, use `nohup`, redirect stdin from `/dev/null`, and redirect
stdout/stderr to a log file so the SSH command returns while the process keeps
running. For example (the command can be any long-running command):

```shell
nohup vllm serve ... </dev/null > /tmp/vllm.log 2>&1 &
```

If the image, hardware choice, or major install path changes, submit another
task so the changed setup is tested before service verification.

Do not move to a service after checking only GPU visibility, imports, logs, or a
health endpoint. Start the server inside the task and send a request that uses
the requested model. For a chat or reasoning model, check the response behavior
the endpoint is expected to support, such as reasoning output when that model is
supposed to expose it.

Follow `/dstack` structured status guidance when polling task or service status.
After requesting a task or service stop before another submission, wait until
that run reaches a terminal status. This allows dstack to reuse its instance or
instance volumes when available.

## Verify As A Service

Submit the service after the task has verified the configuration: image,
command, port, resources, env vars, cache mounts if used, backend/fleet choice,
and model request.

Use the service as a duplicate check of the same configuration under dstack
service runtime. The model request that worked locally in the task must also work
through the dstack service URL.

If service verification fails because the image, install, model download,
command, resources, cache, or model behavior needs to change, go back to a task.
If the tested serving setup is still right and only the dstack service
configuration is wrong, fix the configuration and submit the service again.

## Router

If a fleet has `placement: cluster` and a CPU-only instance, you must use a
configuration with the router on the CPU-only instance, regardless of whether
the workers are aggregated or PD disaggregated.
Whenever possible, connect the workers over gRPC, not HTTP: with a gRPC
router, request parsing, serialization, and tokenization move from the
serving engine to the router, so latency improves just by introducing it.

When using a router:

- Use node groups for the task and replica groups for the service: tasks' node
  groups are the equivalent of services' replica groups.
- With tasks, still use `sleep infinity` even when using `groups` (set it in
  each group's `commands`; top-level `commands` is not allowed with `groups`),
  and run the actual commands on each node interactively over SSH.
- When testing inference, call the router endpoint, not the workers directly
  (unless you want to test if they are alive).
- Look for "Prototyping services" in `https://dstack.ai/docs/concepts/tasks.md`
  and "Router" in `https://dstack.ai/docs/concepts/services.md`.

## PD disaggregation

If the intention is to use PD disaggregation:

- Follow `## Router`: the router and the prefill/decode workers run as
  separate groups, and the fleet needs an interconnect (`placement: cluster`).
- Look for "Node groups" and "PD disaggregation" in
  `https://dstack.ai/docs/concepts/tasks.md` and "Replica groups" and
  "PD disaggregation" in `https://dstack.ai/docs/concepts/services.md`.
