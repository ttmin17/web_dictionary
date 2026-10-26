---
slug: nvidia-ai-blueprints-video-search-and-summarization-skills-benchmarking-profile-vllm-performance
name: profile-vllm-performance
tagline: Profile vLLM and RT-VLM inference to identify and remove GPU-idle gaps,
  underfilled batches, transfer stalls, serialized multimodal work, scheduler ga
summary: Record the exact code, container, model revision, precision, hardware,
  scheduler settings, workload shape, media, prompt, token budget, sampling,
  cache state, concurrency, and success criteria. Prove semantic correctn...
categories:
  - browser-web
tags:
  - computer-vision
  - generative-ai
  - long-video-understanding
  - model-context-protocol
status: active
quality_percentile: 78
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: NVIDIA-AI-Blueprints/video-search-and-summarization
  subpath: skills/benchmarking/profile-vllm-performance
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 1947
  last_commit: 2026-10-26T07:13:28Z
  stars_delta_7d: 14
  stars_growth_pct: 0.7
  trending_score: 14.1
  velocity_source: snapshot_delta
  sparkline_4w:
    - 1933
    - 1947
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: NVIDIA-AI-Blueprints/video-search-and-summarization
  path: skills/benchmarking/profile-vllm-performance/SKILL.md
  branch: develop
  fetched_at: 2026-10-26T07:38:16.958Z
  truncated: false
type: agent_skill
skill:
  skill_name: profile-vllm-performance
  description: Profile vLLM and RT-VLM inference to identify and remove GPU-idle
    gaps, underfilled batches, transfer stalls, serialized multimodal work,
    scheduler gaps, or KV pressure. Use this skill when GPU utilization is
    unexpectedly low or bursty, capacity trails another runtime, TTFT or ITL
    regresses, or multimodal prefill and decode appear serialized. Not for
    running a first benchmark without a reproducible fixed-load signal.
  folder_path: skills/benchmarking/profile-vllm-performance
  extra_files:
    - evals/identify-serialized-vision.json
    - evals/reject-early-eos-osl-comparison.json
    - evals/reject-offered-load-gap.json
    - references/bubble-playbook.md
  pack_total_skills: 24
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: nvidia-ai-blueprints-video-search-and-summarization
---

# Profile vLLM Performance
Find the dominant loss mechanism, prove it with a correlated timeline, make the
smallest causal change, and validate the result with a matched A/B run. A capacity
number or average GPU-utilization sample is not bubble attribution.

## Freeze The Comparison

Record the exact code, container, model revision, precision, hardware, scheduler
settings, workload shape, media, prompt, token budget, sampling, cache state,
concurrency, and success criteria. Prove semantic correctness before optimizing.
Do not compare runtimes when any of these dimensions differ unless that dimension is
the declared variable.

## Establish The Signal

1. Verify actual output-token counts, successful work, fresh-stream coverage,
   dropped chunks, cancellations, and cleanup. Early EOS or silent failure is not
   throughput.
2. Reproduce at fixed load below the knee, near the highest stable point, and just
   beyond it when practical. Keep capacity search separate from profiling.
3. Record TTFT, inter-token latency, throughput, queue delay, batch size, scheduled
   tokens, active sequences, preemptions, KV occupancy, GPU memory, and phase
   durations available in the checked-out version.
4. Use scenario-scoped DCGM or `nvidia-smi dmon` for the resource envelope and a
   short Nsight Systems or repository profiler capture for attribution. Profilers
   perturb timing; never use a profiled run as the capacity result.

Define a performance bubble as GPU-idle or low-occupancy time while eligible work is
queued. Idle time caused by insufficient offered load is not a runtime bubble.
If the scheduler queue is empty throughout every observed idle interval, first check
whether eligible work is waiting upstream in media arrival, decode, preprocessing, or
engine submission. Upstream waiting work is frontend or media starvation, not an
offered-load gap. When neither the scheduler nor upstream stages have eligible work
waiting, classify the result as insufficient offered load and make the first experiment
a higher-fixed-concurrency replay with every other workload dimension unchanged. Do
not recommend scheduler, kernel, batching, cache, prefill, or decode optimization until
that replay shows GPU idle while eligible work remains queued.

## Correlate The Timeline

Use stable request, sequence, stream, and chunk identifiers across:

- media arrival and decode;
- CPU frame selection, resize, normalization, tokenization, and processor work;
- host-to-device transfer and synchronization;
- vision encoder and projector;
- text and visual prefill;
- scheduler admission, batch formation, KV allocation, preemption, and dispatch;
- decode, sampling, detokenization, and output delivery.

Capture only enough NVTX or structured timing to align these phases with CUDA
kernels, memory copies, CPU wakeups, and scheduler state. Avoid high-volume logging
in the measured path.

Read [references/bubble-playbook.md](https://github.com/NVIDIA-AI-Blueprints/video-search-and-summarization/blob/develop/skills/benchmarking/profile-vllm-performance/references/bubble-playbook.md) for the evidence
matrix and the shortest discriminating experiment for each bubble class.

## Prove The Dominant Bubble

For each candidate, state the precise idle or under-occupancy interval, whether
eligible work was queued, the event immediately preceding it, its frequency and
share of measured time, and the observation that rules out the nearest competing
explanation. Rank candidates by recoverable critical-path time, not visual prominence
in one trace.

Do not infer a decode bottleneck from an OSL capacity gap alone. Compare matched
fixed-concurrency prefill and decode timelines plus tokens per scheduler step.

For serialized vision, first compare an existing batched preprocessing or vision-
encoding path using the same fixed visual shapes and request set. State its acceptance
criteria explicitly: require output parity and multimodal visual-token count, order,
and position parity before attributing any performance improvement to the change.

## Fix And Validate

Stop at the first rung that removes the proven bubble:

1. Correct benchmark or configuration defects such as early EOS, mismatched shapes,
   cache policy, scheduler limits, or insufficient offered load.
2. Tune an existing runtime knob supported by the checked-out version.
3. Reuse an existing batching, preprocessing, cache, CUDA-graph, tensor-IPC, or
   scheduler path that is configured incorrectly or bypassed.
4. Fix an integration boundary that serializes or copies work unnecessarily.
5. Change scheduling or model-runner code only when traces prove the existing path
   cannot express the required overlap.
6. Change a kernel only after ruling out launch, scheduling, shape, and data movement.

Change one causal variable at a time. Repeat the short trace, then run an unprofiled
matched A/B or A/B/B/A comparison at fixed concurrency. Rerun the capacity boundary
only when capacity is the claim. Preserve output parity, ordering, cancellation, KV
lifetime, and multimodal token and position invariants.

Report `confirmed`, `improved`, `inconclusive`, or `invalid comparison`, followed by
the dominant bubble, recoverable-time estimate, evidence, ruled-out alternatives,
fix, before/after distributions, artifact paths, remaining bottleneck, and smallest
next experiment.

Do not install profilers, launch costly GPU work, push changes, or mutate a shared
machine without authorization.
