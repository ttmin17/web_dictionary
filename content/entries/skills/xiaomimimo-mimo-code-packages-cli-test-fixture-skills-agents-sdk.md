---
slug: xiaomimimo-mimo-code-packages-cli-test-fixture-skills-agents-sdk
name: agents-sdk
tagline: Build AI agents on Cloudflare Workers using the Agents SDK. Load when
  creating stateful agents, durable workflows, real-time WebSocket apps,
  scheduled
summary: Fetch current docs from
  https://github.com/cloudflare/agents/tree/main/docs before implementing.
categories:
  - agent-frameworks
tags:
  - ai-agents
  - cli
  - mimo
  - mimo-code
status: active
quality_percentile: 55
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: XiaomiMiMo/MiMo-Code
  subpath: packages/cli/test/fixture/skills/agents-sdk
  official_vendor: false
  license: MIT
signals:
  stars: 13743
  last_commit: 2026-11-02T04:02:47Z
  stars_delta_7d: 18
  stars_growth_pct: 0.1
  trending_score: 18.02
  rank_current: 121
  rank_delta: -14
  velocity_source: snapshot_delta
  sparkline_4w:
    - 13688
    - 13725
    - 13743
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: XiaomiMiMo/MiMo-Code
  path: packages/cli/test/fixture/skills/agents-sdk/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:07:00.006Z
  truncated: false
type: agent_skill
skill:
  skill_name: agents-sdk
  description: Build AI agents on Cloudflare Workers using the Agents SDK. Load
    when creating stateful agents, durable workflows, real-time WebSocket apps,
    scheduled tasks, MCP servers, or chat applications. Covers Agent class,
    state management, callable RPC, Workflows integration, and React hooks.
  folder_path: packages/cli/test/fixture/skills/agents-sdk
  extra_files:
    - references/callable.md
  pack_total_skills: 3
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: xiaomimimo-mimo-code
---

# Cloudflare Agents SDK
**STOP.** Your knowledge of the Agents SDK may be outdated. Prefer retrieval over pre-training for any Agents SDK task.

## Documentation

Fetch current docs from `https://github.com/cloudflare/agents/tree/main/docs` before implementing.

| Topic               | Doc                           | Use for                                        |
| ------------------- | ----------------------------- | ---------------------------------------------- |
| Getting started     | `docs/getting-started.md`     | First agent, project setup                     |
| State               | `docs/state.md`               | `setState`, `validateStateChange`, persistence |
| Routing             | `docs/routing.md`             | URL patterns, `routeAgentRequest`, `basePath`  |
| Callable methods    | `docs/callable-methods.md`    | `@callable`, RPC, streaming, timeouts          |
| Scheduling          | `docs/scheduling.md`          | `schedule()`, `scheduleEvery()`, cron          |
| Workflows           | `docs/workflows.md`           | `AgentWorkflow`, durable multi-step tasks      |
| HTTP/WebSockets     | `docs/http-websockets.md`     | Lifecycle hooks, hibernation                   |
| Email               | `docs/email.md`               | Email routing, secure reply resolver           |
| MCP client          | `docs/mcp-client.md`          | Connecting to MCP servers                      |
| MCP server          | `docs/mcp-servers.md`         | Building MCP servers with `McpAgent`           |
| Client SDK          | `docs/client-sdk.md`          | `useAgent`, `useAgentChat`, React hooks        |
| Human-in-the-loop   | `docs/human-in-the-loop.md`   | Approval flows, pausing workflows              |
| Resumable streaming | `docs/resumable-streaming.md` | Stream recovery on disconnect                  |

Cloudflare docs: https://developers.cloudflare.com/agents/

## Capabilities

The Agents SDK provides:

- **Persistent state** - SQLite-backed, auto-synced to clients
- **Callable RPC** - `@callable()` methods invoked over WebSocket
- **Scheduling** - One-time, recurring (`scheduleEvery`), and cron tasks
- **Workflows** - Durable multi-step background processing via `AgentWorkflow`
- **MCP integration** - Connect to MCP servers or build your own with `McpAgent`
- **Email handling** - Receive and reply to emails with secure routing
- **Streaming chat** - `AIChatAgent` with resumable streams
- **React hooks** - `useAgent`, `useAgentChat` for client apps

## FIRST: Verify Installation

```bash
npm ls agents  # Should show agents package
```

If not installed:

```bash
npm install agents
```

## Wrangler Configuration

```jsonc
{
  "durable_objects": {
    "bindings": [{ "name": "MyAgent", "class_name": "MyAgent" }],
  },
  "migrations": [{ "tag": "v1", "new_sqlite_classes": ["MyAgent"] }],
}
```

## Agent Class

```typescript
import { Agent, routeAgentRequest, callable } from "agents"

type State = { count: number }

export class Counter extends Agent<Env, State> {
  initialState = { count: 0 }

  // Validation hook - runs before state persists (sync, throwing rejects the update)
  validateStateChange(nextState: State, source: Connection | "server") {
    if (nextState.count < 0) throw new Error("Count cannot be negative")
  }

  // Notification hook - runs after state persists (async, non-blocking)
  onStateUpdate(state: State, source: Connection | "server") {
    console.log("State updated:", state)
  }

  @callable()
  increment() {
    this.setState({ count: this.state.count + 1 })
    return this.state.count
  }
}

export default {
  fetch: (req, env) => routeAgentRequest(req, env) ?? new Response("Not found", { status: 404 }),
}
```

## Routing

Requests route to `/agents/{agent-name}/{instance-name}`:

| Class      | URL                        |
| ---------- | -------------------------- |
| `Counter`  | `/agents/counter/user-123` |
| `ChatRoom` | `/agents/chat-room/lobby`  |

Client: `useAgent({ agent: "Counter", name: "user-123" })`

## Core APIs

| Task                | API                                                    |
| ------------------- | ------------------------------------------------------ |
| Read state          | `this.state.count`                                     |
| Write state         | `this.setState({ count: 1 })`                          |
| SQL query           | `` this.sql`SELECT * FROM users WHERE id = ${id}` ``   |
| Schedule (delay)    | `await this.schedule(60, "task", payload)`             |
| Schedule (cron)     | `await this.schedule("0 * * * *", "task", payload)`    |
| Schedule (interval) | `await this.scheduleEvery(30, "poll")`                 |
| RPC method          | `@callable() myMethod() { ... }`                       |
| Streaming RPC       | `@callable({ streaming: true }) stream(res) { ... }`   |
| Start workflow      | `await this.runWorkflow("ProcessingWorkflow", params)` |

## React Client

```tsx
import { useAgent } from "agents/react"

function App() {
  const [state, setLocalState] = useState({ count: 0 })

  const agent = useAgent({
    agent: "Counter",
    name: "my-instance",
    onStateUpdate: (newState) => setLocalState(newState),
    onIdentity: (name, agentType) => console.log(`Connected to ${name}`),
  })

  return <button => agent.setState({ count: state.count + 1 })}>Count: {state.count}</button>
}
```

## References

- **[references/workflows.md](https://github.com/XiaomiMiMo/MiMo-Code/blob/main/packages/cli/test/fixture/skills/agents-sdk/references/workflows.md)** - Durable Workflows integration
- **[references/callable.md](https://github.com/XiaomiMiMo/MiMo-Code/blob/main/packages/cli/test/fixture/skills/agents-sdk/references/callable.md)** - RPC methods, streaming, timeouts
- **[references/state-scheduling.md](https://github.com/XiaomiMiMo/MiMo-Code/blob/main/packages/cli/test/fixture/skills/agents-sdk/references/state-scheduling.md)** - State persistence, scheduling
- **[references/streaming-chat.md](https://github.com/XiaomiMiMo/MiMo-Code/blob/main/packages/cli/test/fixture/skills/agents-sdk/references/streaming-chat.md)** - AIChatAgent, resumable streams
- **[references/mcp.md](https://github.com/XiaomiMiMo/MiMo-Code/blob/main/packages/cli/test/fixture/skills/agents-sdk/references/mcp.md)** - MCP server integration
- **[references/email.md](https://github.com/XiaomiMiMo/MiMo-Code/blob/main/packages/cli/test/fixture/skills/agents-sdk/references/email.md)** - Email routing and handling
- **[references/codemode.md](https://github.com/XiaomiMiMo/MiMo-Code/blob/main/packages/cli/test/fixture/skills/agents-sdk/references/codemode.md)** - Code Mode (experimental)
