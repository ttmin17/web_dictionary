---
slug: nitrocloudofficial-nitrostack-sample-apps-rampd-ai-onboarding-offboarding-orchestrator-skills-mcp-app-architecture
name: mcp-app-architecture
tagline: "Best practices and guidelines for bootstrapping, defining modules,
  using dependency injection, managing server lifecycles, and handling events in
  the "
summary: "imports: Other modules whose exported providers should be available in
  this module. providers: Services, tools, resources, or prompts that should be
  instantiated and managed by the DI container within this module. exp..."
categories:
  - agent-frameworks
tags:
  - agentic-ai
  - chatgpt
  - chatgpt-apps
  - claude
status: active
quality_percentile: 99
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: nitrocloudofficial/nitrostack
  subpath: sample-apps/Rampd-AI-Onboarding-Offboarding-Orchestrator/skills/mcp-app-architecture
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 2528
  last_commit: 2026-10-19T12:56:19Z
  stars_delta_7d: 0
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: snapshot_delta
  sparkline_4w:
    - 2465
    - 2462
    - 2536
    - 2528
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: nitrocloudofficial/nitrostack
  path: sample-apps/Rampd-AI-Onboarding-Offboarding-Orchestrator/skills/mcp-app-architecture/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:38:02.722Z
  truncated: false
type: agent_skill
skill:
  skill_name: mcp-app-architecture
  description: Best practices and guidelines for bootstrapping, defining modules,
    using dependency injection, managing server lifecycles, and handling events
    in the NitroStack SDK.
  folder_path: sample-apps/Rampd-AI-Onboarding-Offboarding-Orchestrator/skills/mcp-app-architecture
  extra_files: []
  pack_total_skills: 5
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: nitrocloudofficial-nitrostack
---

## When to Use
Use this skill whenever you are bootstrapping a new NitroStack MCP server, creating modules, injecting services, or handling application lifecycle events.

## Bootstrapping a NitroStack App
A NitroStack application is initialized with the `@McpApp` decorator on a root class, accompanied by a root `@Module`.

```typescript
import { McpApp, Module } from '@nitrostack/core';
import { DatabaseModule } from './database/database.module.js';
import { UsersModule } from './users/users.module.js';

@McpApp({
  module: AppModule,
  server: {
    name: 'user-management-server',
    version: '1.0.0',
  },
})
@Module({
  imports: [DatabaseModule, UsersModule],
})
export class AppModule {}
```

## Modules
Modules organize your application structure. Use the `@Module` decorator to define imports, exports, and providers.

* **`imports`**: Other modules whose exported providers should be available in this module.
* **`providers`**: Services, tools, resources, or prompts that should be instantiated and managed by the DI container within this module.
* **`exports`**: Providers defined in this module that should be visible to other modules importing this one.

```typescript
import { Module } from '@nitrostack/core';
import { UsersService } from './users.service.js';
import { UsersTools } from './users.tools.js';

@Module({
  providers: [UsersService, UsersTools],
  exports: [UsersService],
})

## Controllers
Use the `@ControllerDecorator` (or alias it as `@Controller`) to group tools, resources, and prompts together. Controllers are automatically registered as singletons in the DI container.

### Key Controller Options:
* **`prefix`**: A string prefix applied to every `@Tool` defined in this controller. For example, `@ControllerDecorator('github')` prefixing a tool named `create_issue` exposes it to MCP clients as `github_create_issue`.

```typescript
import { ControllerDecorator as Controller, Tool, ExecutionContext } from '@nitrostack/core';

@Controller('github')
export class GitHubController {
  @Tool({
    name: 'create_issue',
    description: 'Create an issue in a repository',
    inputSchema: z.object({ /* ... */ })
  })
  async createIssue(input: any, ctx: ExecutionContext) {
    // Exposed to clients as "github_create_issue"
  }
}
```

## Dependency Injection (DI)
NitroStack uses a robust dependency injection container to manage class instances and lifecycles.

### Injection Lifecycles
1. **Singleton (Default)**: A single instance is shared across the entire application.
2. **Transient**: A new instance is created every time it is resolved/injected.
3. **Scoped**: A new instance is created per incoming request or context.

```typescript
import { Injectable, Scope } from '@nitrostack/core';

@Injectable({ scope: Scope.SINGLETON })
export class UsersService {
  constructor(private readonly db: DatabaseService) {}
  
  async getUser(id: string) {
    return this.db.query('SELECT * FROM users WHERE id = $1', [id]);
  }
}
```

## Lifecycles and Hooks
Implement NestJS-style lifecycle interfaces on modules, controllers, or providers to hook into application state changes:

* **`OnModuleInit`** (`onModuleInit`): Called after modules have initialized but before the server starts listening.
* **`OnApplicationBootstrap`** (`onApplicationBootstrap`): Called once the server is fully started and listening.
* **`OnModuleDestroy`** (`onModuleDestroy`): Called when the module or application is shutting down.
* **`BeforeApplicationShutdown`** (`beforeApplicationShutdown(signal?: string)`): Called before the application starts shutting down. Receives the OS signal (e.g. `SIGINT`).
* **`OnApplicationShutdown`** (`onApplicationShutdown(signal?: string)`): Called during shutdown. Receives the OS signal.

```typescript
import { 
  Injectable, 
  OnModuleInit, 
  OnApplicationBootstrap,
  OnModuleDestroy, 
  BeforeApplicationShutdown,
  OnApplicationShutdown 
} from '@nitrostack/core';

@Injectable()
export class DatabaseService 
  implements OnModuleInit, OnApplicationBootstrap, OnModuleDestroy, BeforeApplicationShutdown, OnApplicationShutdown 
{
  async onModuleInit() {
    await this.connect();
  }

  async onApplicationBootstrap() {
    console.log('App ready to handle connections.');
  }

  async onModuleDestroy() {
    await this.cleanupPendingQueries();
  }

  async beforeApplicationShutdown(signal?: string) {
    console.log(`Shutting down soon (signal: ${signal}).`);
  }

  async onApplicationShutdown(signal?: string) {
    await this.disconnect();
  }
}
```

---
## Eventing System (`emitEvent` and `@OnEvent`)
NitroStack includes an internal eventing system to decouple components. A service or tool can emit an event using `emitEvent`, and any injectable class (like a handler service or controller) can subscribe using the `@OnEvent` decorator.

### 1. Emitting Events
Call `emitEvent` to dispatch an event payload asynchronously.

```typescript
import { Injectable, emitEvent } from '@nitrostack/core';

@Injectable()
export class SpaceShipService {
  async launchShip(shipId: string) {
    // Process launch...
    
    // Dispatch event
    emitEvent('ship.launched', {
      shipId,
      timestamp: new Date().toISOString(),
    });
  }
}
```

### 2. Listening to Events
Decorate a method inside any `@Injectable()` class with `@OnEvent('event_pattern')` to register it as an event handler.

```typescript
import { Injectable, OnEvent } from '@nitrostack/core';

@Injectable({ deps: [] })
export class FlightLogHandler {
  @OnEvent('ship.launched')
  async logLaunch(data: { shipId: string; timestamp: string }) {
    console.error(`🚀 [EVENT] Ship ${data.shipId} was successfully launched at ${data.timestamp}`);
  }
}
```

> [!NOTE]
> For the `@OnEvent` decorator to register properly, the containing class must be declared as a provider inside an active module.
