---
slug: samber-cc-skills-golang-skills-golang-context
name: golang-context
tagline: Idiomatic context.Context usage in Golang — propagation through API
  boundaries, cancellation, timeouts and deadlines, request-scoped values,
  context.W
summary: context.Context is Go's mechanism for propagating cancellation signals,
  deadlines, and request-scoped values across API boundaries and between
  goroutines. Think of it as the "session" of a request — it ties together e...
categories:
  - other
status: active
quality_percentile: 35
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: samber/cc-skills-golang
  subpath: skills/golang-context
  official_vendor: false
  license: MIT
signals:
  stars: 3467
  last_commit: 2026-10-01T12:32:20Z
  stars_delta_7d: 106
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 3467
    - 3467
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: samber/cc-skills-golang
  path: skills/golang-context/SKILL.md
  branch: main
  fetched_at: 2026-10-14T14:55:19.251Z
  truncated: false
type: agent_skill
skill:
  skill_name: golang-context
  description: Idiomatic context.Context usage in Golang — propagation through API
    boundaries, cancellation, timeouts and deadlines, request-scoped values,
    context.WithoutCancel for background work outliving requests. Apply when
    designing context propagation across layers, debugging leaked or unexpired
    contexts, choosing between context.Background/TODO/WithoutCancel, or storing
    values in context. Not for code that merely accepts ctx as first parameter.
  folder_path: skills/golang-context
  extra_files:
    - evals/evals.json
    - references/cancellation.md
    - references/http-services.md
    - references/values-tracing.md
tags: []
---

> **Community default.** A company skill that explicitly supersedes `samber/cc-skills-golang@golang-context` skill takes precedence.

# Go context.Context Best Practices

`context.Context` is Go's mechanism for propagating cancellation signals, deadlines, and request-scoped values across API boundaries and between goroutines. Think of it as the "session" of a request — it ties together every operation that belongs to the same unit of work.

## Best Practices Summary

1. Propagate the same context through the entire request lifecycle: HTTP handler → service → DB → external APIs — any link that starts a fresh context keeps working after the client is gone.
2. Take `ctx` as the first parameter, named `ctx context.Context` — the fixed position is what makes context-aware APIs recognizable at a glance and what linters check.
3. Pass context through function parameters instead of storing it in a struct — the struct outlives the request that filled it, so later calls reuse a context that is already cancelled or belongs to someone else.
4. Pass `context.TODO()` rather than a `nil` context — `nil` panics on the first `Done()` or `Value()` call, far from the caller that passed it.
5. Call `cancel()` on all control-flow paths for `WithCancel`/`WithTimeout`/`WithDeadline`, unless ownership of the context and cancel function is explicitly returned or transferred — an uncalled `cancel()` keeps the child attached to its parent and leaks its timer until the parent finishes.
6. Create `context.Background()` only at top-level entry points (main, init, tests). Deeper in the call chain — especially mid-request — it detaches the work from the caller's deadline and cancellation, the propagation break shown below.
7. Use `context.TODO()` as a placeholder when a context is needed but none exists yet — it marks the gap for a later fix instead of hiding it behind a `Background()` that looks deliberate.
8. Declare context value keys as unexported types — with a plain `string` key, two packages using `"user"` silently overwrite each other.
9. Carry only request-scoped metadata in context values, never function parameters — values retrieved through `Value()` lose compile-time typing and disappear from the function signature.
10. Use `context.WithoutCancel` (Go 1.21+) when spawning background work that must outlive the parent request — otherwise the handler returning cancels the audit log or cleanup just started.

## Creating Contexts

| Situation | Use |
| --- | --- |
| Entry point (main, init, test) | `context.Background()` |
| Function needs context but caller doesn't provide one yet | `context.TODO()` |
| Inside an HTTP handler | `r.Context()` |
| Need cancellation control | `context.WithCancel(parentCtx)` |
| Need a deadline/timeout | `context.WithTimeout(parentCtx, duration)` |

## Context Propagation: The Core Principle

The most important rule: **propagate the same context through the entire call chain**. When you propagate correctly, cancelling the parent context cancels all downstream work automatically.

```go
// ✗ Bad — creates a new context, breaking the chain
func (s *OrderService) Create(ctx context.Context, order Order) error {
    return s.db.ExecContext(context.Background(), "INSERT INTO orders ...", order.ID)
}

// ✓ Good — propagates the caller's context
func (s *OrderService) Create(ctx context.Context, order Order) error {
    return s.db.ExecContext(ctx, "INSERT INTO orders ...", order.ID)
}
```

## Deep Dives

- **[Cancellation, Timeouts & Deadlines](https://github.com/samber/cc-skills-golang/blob/main/skills/golang-context/references/cancellation.md)** — How cancellation propagates: `WithCancel` for manual cancellation, `WithTimeout` for automatic cancellation after a duration, `WithDeadline` for absolute time deadlines. Patterns for listening (`<-ctx.Done()`) in concurrent code, `AfterFunc` callbacks, and `WithoutCancel` for operations that must outlive their parent request (e.g., audit logs).

- **[Context Values & Cross-Service Tracing](https://github.com/samber/cc-skills-golang/blob/main/skills/golang-context/references/values-tracing.md)** — Safe context value patterns: unexported key types to prevent namespace collisions, when to use context values (request ID, user ID) vs function parameters. Trace context propagation: OpenTelemetry trace headers, correlation IDs for log aggregation, and marshaling/unmarshaling context across service boundaries.

- **[Context in HTTP Servers & Service Calls](https://github.com/samber/cc-skills-golang/blob/main/skills/golang-context/references/http-services.md)** — HTTP handler context: `r.Context()` for request-scoped cancellation, middleware integration, and propagating to services. HTTP client patterns: `NewRequestWithContext`, client timeouts, and retries with context awareness. Database operations: always use `*Context` variants (`QueryContext`, `ExecContext`) to respect deadlines.

## Cross-References

- → See the `samber/cc-skills-golang@golang-concurrency` skill for goroutine cancellation patterns using context
- → See the `samber/cc-skills-golang@golang-database` skill for context-aware database operations (QueryContext, ExecContext)
- → See the `samber/cc-skills-golang@golang-observability` skill for trace context propagation with OpenTelemetry
- → See the `samber/cc-skills-golang@golang-design-patterns` skill for timeout and resilience patterns

## Enforce with Linters

Many context pitfalls are caught automatically by linters: `govet`, `staticcheck`. → See the `samber/cc-skills-golang@golang-lint` skill for configuration and usage.
