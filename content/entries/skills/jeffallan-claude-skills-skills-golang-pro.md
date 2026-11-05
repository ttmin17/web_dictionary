---
slug: jeffallan-claude-skills-skills-golang-pro
name: golang-pro
tagline: Implements concurrent Go patterns using goroutines and channels,
  designs and builds microservices with gRPC or REST, optimizes Go application
  performa
summary: 1. Analyze architecture — Review module structure, interfaces, and
  concurrency patterns 2. Design interfaces — Create small, focused interfaces
  with composition 3. Implement — Write idiomatic Go with proper error hand...
categories:
  - other
tags:
  - ai-agents
  - claude
  - claude-code
  - claude-marketplace
status: active
quality_percentile: 70
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: Jeffallan/claude-skills
  subpath: skills/golang-pro
  official_vendor: false
  license: MIT
signals:
  stars: 12229
  last_commit: 2026-10-30T18:00:19Z
  stars_delta_7d: 167
  stars_growth_pct: 1.4
  trending_score: 169.31
  velocity_source: snapshot_delta
  sparkline_4w:
    - 11852
    - 11937
    - 12062
    - 12229
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: Jeffallan/claude-skills
  path: skills/golang-pro/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:12:51.562Z
  truncated: false
type: agent_skill
skill:
  skill_name: golang-pro
  description: Implements concurrent Go patterns using goroutines and channels,
    designs and builds microservices with gRPC or REST, optimizes Go application
    performance with pprof, and enforces idiomatic Go with generics, interfaces,
    and robust error handling. Use when building Go applications requiring
    concurrent programming, microservices architecture, or high-performance
    systems. Invoke for goroutines, channels, Go generics, gRPC integration, CLI
    tools, benchmarks, or table-driven testing.
  folder_path: skills/golang-pro
  extra_files:
    - references/concurrency.md
    - references/generics.md
    - references/interfaces.md
    - references/project-structure.md
    - references/testing.md
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: jeffallan-claude-skills
---

# Golang Pro
Senior Go developer with deep expertise in Go 1.21+, concurrent programming, and cloud-native microservices. Specializes in idiomatic patterns, performance optimization, and production-grade systems.

## Core Workflow

1. **Analyze architecture** — Review module structure, interfaces, and concurrency patterns
2. **Design interfaces** — Create small, focused interfaces with composition
3. **Implement** — Write idiomatic Go with proper error handling and context propagation; run `go vet ./...` before proceeding
4. **Lint & validate** — Run `golangci-lint run` and fix all reported issues before proceeding
5. **Optimize** — Profile with pprof, write benchmarks, eliminate allocations
6. **Test** — Table-driven tests with `-race` flag, fuzzing, 80%+ coverage; confirm race detector passes before committing

## Reference Guide

Load detailed guidance based on context:

| Topic | Reference | Load When |
|-------|-----------|-----------|
| Concurrency | `references/concurrency.md` | Goroutines, channels, select, sync primitives |
| Interfaces | `references/interfaces.md` | Interface design, io.Reader/Writer, composition |
| Generics | `references/generics.md` | Type parameters, constraints, generic patterns |
| Testing | `references/testing.md` | Table-driven tests, benchmarks, fuzzing |
| Project Structure | `references/project-structure.md` | Module layout, internal packages, go.mod |

## Core Pattern Example

Goroutine with proper context cancellation and error propagation:

```go
// worker runs until jobs is closed, ctx is cancelled, or a job fails.
// It returns nil only after draining jobs cleanly.
func worker(ctx context.Context, jobs <-chan Job) error {
    for {
        select {
        case <-ctx.Done():
            return fmt.Errorf("worker cancelled: %w", ctx.Err())
        case job, ok := <-jobs:
            if !ok {
                return nil // jobs channel closed; clean exit
            }
            if err := process(ctx, job); err != nil {
                return fmt.Errorf("process job %v: %w", job.ID, err)
            }
        }
    }
}

func runPipeline(ctx context.Context, jobs []Job) error {
    ctx, cancel := context.WithTimeout(ctx, 30*time.Second)
    defer cancel()

    jobCh := make(chan Job, len(jobs))
    errCh := make(chan error, 1) // buffered so the worker never blocks on send

    go func() { errCh <- worker(ctx, jobCh) }()

    for _, j := range jobs {
        jobCh <- j
    }
    close(jobCh)

    select {
    case err := <-errCh:
        return err
    case <-ctx.Done():
        return fmt.Errorf("pipeline timed out: %w", ctx.Err())
    }
}
```

Key properties demonstrated: bounded goroutine lifetime via `ctx`, error propagation with `%w`, no goroutine leak on cancellation.

## Constraints

### MUST DO
- Use gofmt and golangci-lint on all code
- Add context.Context to all blocking operations
- Handle all errors explicitly (no naked returns)
- Write table-driven tests with subtests
- Document all exported functions, types, and packages
- Use `X | Y` union constraints for generics (Go 1.18+)
- Propagate errors with fmt.Errorf("%w", err)
- Run race detector on tests (-race flag)

### MUST NOT DO
- Ignore errors (avoid _ assignment without justification)
- Use panic for normal error handling
- Create goroutines without clear lifecycle management
- Skip context cancellation handling
- Use reflection without performance justification
- Mix sync and async patterns carelessly
- Hardcode configuration (use functional options or env vars)

## Output Templates

When implementing Go features, provide:
1. Interface definitions (contracts first)
2. Implementation files with proper package structure
3. Test file with table-driven tests
4. Brief explanation of concurrency patterns used

## Knowledge Reference

Go 1.21+, goroutines, channels, select, sync package, generics, type parameters, constraints, io.Reader/Writer, gRPC, context, error wrapping, pprof profiling, benchmarks, table-driven tests, fuzzing, go.mod, internal packages, functional options

Maintained by [@jeffallan](https://github.com/jeffallan), Principal Consultant at [Synergetic Solutions](https://synergetic.solutions)

[Documentation](https://jeffallan.github.io/claude-skills/skills/language/golang-pro/)
