---
slug: ag-ui-protocol-ag-ui-sdks-dotnet-plugins-ag-ui-dotnet-skills-agui-dotnet-server-tools
name: agui-dotnet-server-tools
tagline: Expose server-side (backend) tools an AG-UI agent can call with the
  AG-UI .NET SDK — C# functions that run on the server, where the server
  executes th
summary: A server tool is an ordinary Microsoft.Extensions.AI AIFunction
  registered on the server's IChatClient. The FunctionInvokingChatClient
  executes it inside the run; the client sends no tools and needs no tool code,
  and...
categories:
  - productivity-ops
tags:
  - ag-ui-protocol
  - agent-frontend
  - agent-ui
  - agentic-workflow
status: active
quality_percentile: 68
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: ag-ui-protocol/ag-ui
  subpath: sdks/dotnet/plugins/ag-ui-dotnet/skills/agui-dotnet-server-tools
  official_vendor: false
  license: MIT
signals:
  stars: 17031
  last_commit: 2026-11-05T12:17:49Z
  stars_delta_7d: 212
  stars_growth_pct: 1.3
  trending_score: 214.67
  velocity_source: snapshot_delta
  sparkline_4w:
    - 16674
    - 16819
    - 17031
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: ag-ui-protocol/ag-ui
  path: sdks/dotnet/plugins/ag-ui-dotnet/skills/agui-dotnet-server-tools/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:32.803Z
  truncated: false
type: agent_skill
skill:
  skill_name: agui-dotnet-server-tools
  description: >
    Expose server-side (backend) tools an AG-UI agent can call with the AG-UI
    .NET SDK — C# functions that run on the server, where the server executes
    the call and feeds the result back to the model. USE FOR: defining an
    AIFunction with AIFunctionFactory.Create and registering it on the server's
    IChatClient via ConfigureOptions + UseFunctionInvocation; making the model
    call your backend function during a run; AOT-safe tool arguments/results
    (registering a JsonSerializerContext for complex tool parameter types);
    parallel/concurrent backend tool calls (AllowConcurrentInvocation);
    TerminateOnUnknownCalls behavior. DO NOT USE FOR: tools that run in the
    client/frontend (use agui-dotnet-client-tools); pausing a tool for human
    approval or input (interrupts / human-in-the-loop); plain streaming chat
    with no tools (use agui-dotnet-streaming-chat); shared state, generative UI,
    multimodal, or protobuf.
  folder_path: sdks/dotnet/plugins/ag-ui-dotnet/skills/agui-dotnet-server-tools
  extra_files: []
  pack_total_skills: 10
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ag-ui-protocol-ag-ui
---

# AG-UI .NET — server (backend) tools
Goal: let the model call a C# function that runs on your server, with the server executing the call and returning the result so the run continues to a final answer.

A server tool is an ordinary `Microsoft.Extensions.AI` `AIFunction` registered on the server's `IChatClient`. The `FunctionInvokingChatClient` executes it inside the run; the client sends no tools and needs no tool code, and receives the final answer. Tool-call and result events still cross the wire — the client just never executes anything.

## Install

```bash
dotnet add package AGUI.Server
dotnet add package AGUI.Formatting
```

`Microsoft.Extensions.AI` supplies `AIFunctionFactory`, `AddChatClient`, and `UseFunctionInvocation`. Run `dotnet package search AGUI.Server --exact-match` for the current version.

## Define and register a tool

Create the function with `AIFunctionFactory.Create`, add it to the chat client's tools, and enable function invocation:

```csharp
using System.ComponentModel;
using Microsoft.Extensions.AI;

[Description("Search for restaurants in a location.")]
static RestaurantSearchResponse SearchRestaurants(
    [Description("Where to search and what cuisine.")] RestaurantSearchRequest request)
{
    // ... real lookup ...
}

var builder = WebApplication.CreateBuilder(args);

var searchRestaurants = AIFunctionFactory.Create(
    SearchRestaurants,
    serializerOptions: SampleJsonSerializerContext.Default.Options);

builder.Services.AddChatClient(
        new AzureOpenAIClient(new Uri(endpoint), new DefaultAzureCredential())
            .GetChatClient(deploymentName)
            .AsIChatClient())
    .ConfigureOptions(o => (o.Tools ??= []).Add(searchRestaurants))
    .UseFunctionInvocation(fic => fic.TerminateOnUnknownCalls = true);
```

The `[Description]` attributes become the tool and parameter schema the model sees. Any `Microsoft.Extensions.AI` provider works in place of Azure OpenAI.

## AOT-safe tool arguments and results

When a tool takes or returns a complex type (anything beyond primitives), its schema and (de)serialization must be source-generated, not reflection-based. Put the parameter and result types in a `JsonSerializerContext`, register it on the host's JSON options, and pass it to `AIFunctionFactory.Create`:

```csharp
[JsonSerializable(typeof(RestaurantSearchRequest))]
[JsonSerializable(typeof(RestaurantSearchResponse))]
internal sealed partial class SampleJsonSerializerContext : JsonSerializerContext;

builder.Services.ConfigureHttpJsonOptions(o =>
    o.SerializerOptions.TypeInfoResolverChain.Add(SampleJsonSerializerContext.Default));

var searchRestaurants = AIFunctionFactory.Create(
    SearchRestaurants,
    serializerOptions: SampleJsonSerializerContext.Default.Options);
```

The same context is registered on the host (so the wire `RunAgentInput` round-trips the types) and passed to the function (so its argument binding uses source-gen).

## Host the endpoint

The endpoint streams the registered `IChatClient` — function calls are resolved server-side inside the stream before any text reaches the client:

```csharp
using AGUI.Abstractions;
using AGUI.Formatting;
using AGUI.Server;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.AI;
using Microsoft.Extensions.Options;
using JsonOptions = Microsoft.AspNetCore.Http.Json.JsonOptions;

builder.Services.AddSingleton<IAGUIEventStreamFormatter, SseEventStreamFormatter>();
var app = builder.Build();

app.MapPost("/", async (
    [FromBody] RunAgentInput input,
    IChatClient chatClient,
    IAGUIEventStreamFormatter formatter,
    IOptions<JsonOptions> jsonOptions,
    HttpContext http,
    CancellationToken ct) =>
{
    var ctx = input.ToChatRequestContext(jsonOptions.Value.SerializerOptions);
    var updates = chatClient.GetStreamingResponseAsync(ctx.Messages, ctx.ChatOptions, ct);
    var events = updates.AsAGUIEventStreamAsync(ctx, ct);

    http.Response.ContentType = formatter.MediaType;
    http.Response.Headers.CacheControl = "no-cache";
    await formatter.WriteAsync(events, http.Response.Body, ct);
});

app.Run();
```

## Parallel tool calls

When the model requests several tool calls in one turn, let the function-invoking client run them concurrently:

```csharp
.UseFunctionInvocation(fic =>
{
    fic.TerminateOnUnknownCalls = true;
    fic.AllowConcurrentInvocation = true;
});
```

The model decides whether to batch calls; `AllowConcurrentInvocation` only controls whether the already-requested calls execute in parallel instead of serially.

## Anti-patterns

- **Registering a tool with complex parameters but no source-gen context.** Reflection-based schema generation breaks under Native AOT and trimming. Every non-primitive tool argument or result type needs a `JsonSerializerContext` entry, registered on the host and passed to `AIFunctionFactory.Create`.
- **Leaving `TerminateOnUnknownCalls` at its default when client tools are also in play.** With it set, a tool the server doesn't own (one the client declared) ends the server run cleanly so the client can execute it; without it the unknown call surfaces as an error mid-run.

## Verify

1. Send a prompt that needs the tool and watch the stream: a `TOOL_CALL_START` / `TOOL_CALL_ARGS` / `TOOL_CALL_END` followed by a `TOOL_CALL_RESULT`, then assistant text that uses the result — all within one run that ends `RUN_FINISHED`.
2. The client receives the final answer with no tool code of its own.
3. If targeting Native AOT, `dotnet publish` produces no trim/AOT warnings for the tool types.
