---
slug: ag-ui-protocol-ag-ui-sdks-dotnet-plugins-ag-ui-dotnet-skills-agui-dotnet-reasoning
name: agui-dotnet-reasoning
tagline: Surface a reasoning/thinking model's intermediate thoughts separately
  from its final answer with the AG-UI .NET SDK — so a client can show the agent
  "
summary: "A reasoning model emits two kinds of text in the stream: its thinking
  and its answer. In Microsoft.Extensions.AI these arrive as different content
  types on each ChatResponseUpdate — TextReasoningContent for the though..."
categories:
  - productivity-ops
tags:
  - ag-ui-protocol
  - agent-frontend
  - agent-ui
  - agentic-workflow
status: active
quality_percentile: 69
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: ag-ui-protocol/ag-ui
  subpath: sdks/dotnet/plugins/ag-ui-dotnet/skills/agui-dotnet-reasoning
  official_vendor: false
  license: MIT
signals:
  stars: 17074
  last_commit: 2026-11-08T04:33:23Z
  stars_delta_7d: 43
  stars_growth_pct: 0.3
  trending_score: 43.11
  velocity_source: snapshot_delta
  sparkline_4w:
    - 16674
    - 16819
    - 17031
    - 17074
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: ag-ui-protocol/ag-ui
  path: sdks/dotnet/plugins/ag-ui-dotnet/skills/agui-dotnet-reasoning/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:19.054Z
  truncated: false
type: agent_skill
skill:
  skill_name: agui-dotnet-reasoning
  description: >
    Surface a reasoning/thinking model's intermediate thoughts separately from
    its final answer with the AG-UI .NET SDK — so a client can show the agent
    "thinking" before it responds, and handle that reasoning trace correctly
    across turns. USE FOR: distinguishing the model's reasoning trace from its
    answer on the client by matching TextReasoningContent vs TextContent in each
    ChatResponseUpdate's Contents; rendering thinking and answer in different
    ways as they stream; deciding whether to carry the reasoning text into later
    turns (whether to append/resend the model's reasoning back into conversation
    history). DO NOT USE FOR: plain text streaming with no reasoning display
    (use agui-dotnet-streaming-chat); tools, shared state, interrupts,
    multimodal, generative UI, or protobuf.
  folder_path: sdks/dotnet/plugins/ag-ui-dotnet/skills/agui-dotnet-reasoning
  extra_files: []
  pack_total_skills: 10
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ag-ui-protocol-ag-ui
---

# AG-UI .NET — reasoning (thinking) events
Goal: show a reasoning model's intermediate thoughts as they stream, kept visually separate from the final answer.

A reasoning model emits two kinds of text in the stream: its thinking and its answer. In `Microsoft.Extensions.AI` these arrive as different content types on each `ChatResponseUpdate` — `TextReasoningContent` for the thoughts, `TextContent` for the answer. `update.Text` only concatenates the answer parts, so to display thinking you inspect `update.Contents`.

## Separate thinking from the answer

Iterate `update.Contents` and branch on the content type instead of reading `update.Text`:

```csharp
using Microsoft.Extensions.AI;

var messages = new List<ChatMessage>
{
    new(ChatRole.User, "20 heads, 56 legs — how many chickens and rabbits? Show your reasoning."),
};

await foreach (var update in client.GetStreamingResponseAsync(messages))
{
    foreach (var content in update.Contents)
    {
        switch (content)
        {
            case TextReasoningContent { Text: { Length: > 0 } thinking }:
                RenderThinking(thinking);   // e.g. a dimmed/collapsible panel
                break;
            case TextContent { Text: { Length: > 0 } answer }:
                RenderAnswer(answer);       // the user-facing reply
                break;
        }
    }
}
```

Both stream incrementally and can interleave: thinking deltas arrive, then answer deltas. Render each as it comes rather than buffering, so the "thinking…" state is visible before the answer lands.

## Anti-patterns

- **Re-sending the reasoning text as conversation history.** The thinking is scratch work for a single turn, not a message. Appending captured `TextReasoningContent` into the next request's messages bloats the prompt, and some providers reject prior reasoning as input. Carry forward only the assistant's answer.
- **Treating reasoning as part of the answer.** The thinking is a separate channel; concatenating it into the reply shows the user the model's scratch work as if it were the response. Keep the two render paths distinct.

## Verify

1. For a prompt that asks the model to reason, the stream yields `TextReasoningContent` updates before the final `TextContent` answer.
2. The rendered answer contains only the response, with the reasoning shown (or hidden) through its own path — not mixed into the answer text.
