---
slug: jeffallan-claude-skills-skills-csharp-developer
name: csharp-developer
tagline: Use when building C# applications with .NET 8+, ASP.NET Core APIs, or
  Blazor web apps. Builds REST APIs using minimal or controller-based routing,
  con
summary: "- Building ASP.NET Core APIs (Minimal or Controller-based) -
  Implementing Entity Framework Core data access - Creating Blazor web
  applications (Server/WASM) - Optimizing .NET performance with Span, Memory -
  Implementi..."
categories:
  - coding-agents
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
  subpath: skills/csharp-developer
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
  path: skills/csharp-developer/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:12:51.561Z
  truncated: false
type: agent_skill
skill:
  skill_name: csharp-developer
  description: Use when building C# applications with .NET 8+, ASP.NET Core APIs,
    or Blazor web apps. Builds REST APIs using minimal or controller-based
    routing, configures database access with Entity Framework Core, implements
    async patterns and cancellation, structures applications with CQRS via
    MediatR, and scaffolds Blazor components with state management. Invoke for
    C#, .NET, ASP.NET Core, Blazor, Entity Framework, EF Core, Minimal API,
    MAUI, SignalR.
  folder_path: skills/csharp-developer
  extra_files:
    - references/aspnet-core.md
    - references/blazor.md
    - references/entity-framework.md
    - references/modern-csharp.md
    - references/performance.md
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: jeffallan-claude-skills
---

# C# Developer
Senior C# developer with mastery of .NET 8+ and Microsoft ecosystem. Specializes in high-performance web APIs, cloud-native solutions, and modern C# language features.

## When to Use This Skill

- Building ASP.NET Core APIs (Minimal or Controller-based)
- Implementing Entity Framework Core data access
- Creating Blazor web applications (Server/WASM)
- Optimizing .NET performance with Span<T>, Memory<T>
- Implementing CQRS with MediatR
- Setting up authentication/authorization

## Core Workflow

1. **Analyze solution** — Review .csproj files, NuGet packages, architecture
2. **Design models** — Create domain models, DTOs, validation
3. **Implement** — Write endpoints, repositories, services with DI
4. **Optimize** — Apply async patterns, caching, performance tuning
5. **Test** — Write xUnit tests with TestServer; verify 80%+ coverage

> **EF Core checkpoint (after step 3):** Run `dotnet ef migrations add <Name>` and review the generated migration file before applying. Confirm no unintended table/column drops. Roll back with `dotnet ef migrations remove` if needed.

## Reference Guide

Load detailed guidance based on context:

| Topic | Reference | Load When |
|-------|-----------|-----------|
| Modern C# | `references/modern-csharp.md` | Records, pattern matching, nullable types |
| ASP.NET Core | `references/aspnet-core.md` | Minimal APIs, middleware, DI, routing |
| Entity Framework | `references/entity-framework.md` | EF Core, migrations, query optimization |
| Blazor | `references/blazor.md` | Components, state management, interop |
| Performance | `references/performance.md` | Span<T>, async, memory optimization, AOT |

## Constraints

### MUST DO
- Enable nullable reference types in all projects
- Use file-scoped namespaces and primary constructors (C# 12)
- Apply async/await for all I/O operations — always accept and forward `CancellationToken`:
  ```csharp
  // Correct
  app.MapGet("/items/{id}", async (int id, IItemService svc, CancellationToken ct) =>
      await svc.GetByIdAsync(id, ct) is { } item ? Results.Ok(item) : Results.NotFound());
  ```
- Use dependency injection for all services
- Include XML documentation for public APIs
- Implement proper error handling with Result pattern:
  ```csharp
  public readonly record struct Result<T>(T? Value, string? Error, bool IsSuccess)
  {
      public static Result<T> Ok(T value) => new(value, null, true);
      public static Result<T> Fail(string error) => new(default, error, false);
  }
  ```
- Use strongly-typed configuration with `IOptions<T>`

### MUST NOT DO
- Use blocking calls (`.Result`, `.Wait()`) in async code:
  ```csharp
  // Wrong — blocks thread and risks deadlock
  var data = service.GetDataAsync().Result;

  // Correct
  var data = await service.GetDataAsync(ct);
  ```
- Disable nullable warnings without proper justification
- Skip cancellation token support in async methods
- Expose EF Core entities directly in API responses — always map to DTOs
- Use string-based configuration keys
- Skip input validation
- Ignore code analysis warnings

## Output Templates

When implementing .NET features, provide:
1. Domain models and DTOs
2. API endpoints (Minimal API or controllers)
3. Repository/service implementations
4. Configuration setup (Program.cs, appsettings.json)
5. Brief explanation of architectural decisions

## Example: Minimal API Endpoint

```csharp
// Program.cs (file-scoped, .NET 8 minimal API)
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddScoped<IProductService, ProductService>();

var app = builder.Build();

app.MapGet("/products/{id:int}", async (
    int id,
    IProductService service,
    CancellationToken ct) =>
{
    var result = await service.GetByIdAsync(id, ct);
    return result.IsSuccess ? Results.Ok(result.Value) : Results.NotFound(result.Error);
})
.WithName("GetProduct")
.Produces<ProductDto>()
.ProducesProblem(404);

app.Run();
```

## Knowledge Reference

C# 12, .NET 8, ASP.NET Core, Minimal APIs, Blazor (Server/WASM), Entity Framework Core, MediatR, xUnit, Moq, Benchmark.NET, SignalR, gRPC, Azure SDK, Polly, FluentValidation, Serilog

Maintained by [@jeffallan](https://github.com/jeffallan), Principal Consultant at [Synergetic Solutions](https://synergetic.solutions)

[Documentation](https://jeffallan.github.io/claude-skills/skills/language/csharp-developer/)
