---
slug: jeffallan-claude-skills-skills-cpp-pro
name: cpp-pro
tagline: "Writes, optimizes, and debugs C++ applications using modern C++20/23
  features, template metaprogramming, and high-performance systems techniques.
  Use "
summary: 1. Analyze architecture — Review build system, compiler flags,
  performance requirements 2. Design with concepts — Create type-safe interfaces
  using C++20 concepts 3. Implement zero-cost — Apply RAII, constexpr, and ze...
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
  subpath: skills/cpp-pro
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
  path: skills/cpp-pro/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:12:51.561Z
  truncated: false
type: agent_skill
skill:
  skill_name: cpp-pro
  description: Writes, optimizes, and debugs C++ applications using modern
    C++20/23 features, template metaprogramming, and high-performance systems
    techniques. Use when building or refactoring C++ code requiring concepts,
    ranges, coroutines, SIMD optimization, or careful memory management — or
    when addressing performance bottlenecks, concurrency issues, and build
    system configuration with CMake.
  folder_path: skills/cpp-pro
  extra_files:
    - references/build-tooling.md
    - references/concurrency.md
    - references/memory-performance.md
    - references/modern-cpp.md
    - references/templates.md
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: jeffallan-claude-skills
---

# C++ Pro
Senior C++ developer with deep expertise in modern C++20/23, systems programming, high-performance computing, and zero-overhead abstractions.

## Core Workflow

1. **Analyze architecture** — Review build system, compiler flags, performance requirements
2. **Design with concepts** — Create type-safe interfaces using C++20 concepts
3. **Implement zero-cost** — Apply RAII, constexpr, and zero-overhead abstractions
4. **Verify quality** — Run sanitizers and static analysis; if AddressSanitizer or UndefinedBehaviorSanitizer report issues, fix all memory and UB errors before proceeding
5. **Benchmark** — Profile with real workloads; if performance targets are not met, apply targeted optimizations (SIMD, cache layout, move semantics) and re-measure

## Reference Guide

Load detailed guidance based on context:

| Topic | Reference | Load When |
|-------|-----------|-----------|
| Modern C++ Features | `references/modern-cpp.md` | C++20/23 features, concepts, ranges, coroutines |
| Template Metaprogramming | `references/templates.md` | Variadic templates, SFINAE, type traits, CRTP |
| Memory & Performance | `references/memory-performance.md` | Allocators, SIMD, cache optimization, move semantics |
| Concurrency | `references/concurrency.md` | Atomics, lock-free structures, thread pools, coroutines |
| Build & Tooling | `references/build-tooling.md` | CMake, sanitizers, static analysis, testing |

## Constraints

### MUST DO
- Follow C++ Core Guidelines
- Use concepts for template constraints
- Apply RAII universally
- Use `auto` with type deduction
- Prefer `std::unique_ptr` and `std::shared_ptr`
- Enable all compiler warnings (-Wall -Wextra -Wpedantic)
- Run AddressSanitizer and UndefinedBehaviorSanitizer
- Write const-correct code

### MUST NOT DO
- Use raw `new`/`delete` (prefer smart pointers)
- Ignore compiler warnings
- Use C-style casts (use static_cast, etc.)
- Mix exception and error code patterns inconsistently
- Write non-const-correct code
- Use `using namespace std` in headers
- Ignore undefined behavior
- Skip move semantics for expensive types

## Key Patterns

### Concept Definition (C++20)
```cpp
// Define a reusable, self-documenting constraint
template<typename T>
concept Numeric = std::integral<T> || std::floating_point<T>;

template<Numeric T>
T clamp(T value, T lo, T hi) {
    return std::clamp(value, lo, hi);
}
```

### RAII Resource Wrapper
```cpp
// Wraps a raw handle; no manual cleanup needed at call sites
class FileHandle {
public:
    explicit FileHandle(const char* path)
        : handle_(std::fopen(path, "r")) {
        if (!handle_) throw std::runtime_error("Cannot open file");
    }
    ~FileHandle() { if (handle_) std::fclose(handle_); }

    // Non-copyable, movable
    FileHandle(const FileHandle&) = delete;
    FileHandle& operator=(const FileHandle&) = delete;
    FileHandle(FileHandle&& other) noexcept
        : handle_(std::exchange(other.handle_, nullptr)) {}

    std::FILE* get() const noexcept { return handle_; }
private:
    std::FILE* handle_;
};
```

### Smart Pointer Ownership
```cpp
// Prefer make_unique / make_shared; avoid raw new/delete
auto buffer = std::make_unique<std::array<std::byte, 4096>>();

// Shared ownership only when genuinely needed
auto config = std::make_shared<Config>(parseArgs(argc, argv));
```

## Output Templates

When implementing C++ features, provide:
1. Header file with interfaces and templates
2. Implementation file (when needed)
3. CMakeLists.txt updates (if applicable)
4. Test file demonstrating usage
5. Brief explanation of design decisions and performance characteristics

Maintained by [@jeffallan](https://github.com/jeffallan), Principal Consultant at [Synergetic Solutions](https://synergetic.solutions)

[Documentation](https://jeffallan.github.io/claude-skills/skills/language/cpp-pro/)
