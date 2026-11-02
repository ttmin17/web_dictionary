---
slug: humanlayer-humanlayer-apps-riptide-humanlayer-claude-plugin-skills-show-me
name: show-me
tagline: Help the user understand the current topic visually with concise
  diagrams, code-shape sketches, and focused HTML artifacts.
summary: Help the user understand the current topic of conversation visually.
  Skip the preamble and keep prose brief. Pick the smallest view that makes the
  key point clear.
categories:
  - other
tags:
  - agents
  - amp
  - claude-code
  - codex
status: active
quality_percentile: 71
selection_reason: quality_percentile
first_seen: 2026-10-26
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: humanlayer/humanlayer
  subpath: apps/riptide-humanlayer-claude-plugin/skills/show-me
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 12750
  last_commit: 2026-10-31T16:19:01Z
  stars_delta_7d: 222
  stars_growth_pct: 1.8
  trending_score: 225.93
  velocity_source: snapshot_delta
  sparkline_4w:
    - 12528
    - 12750
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: humanlayer/humanlayer
  path: apps/riptide-humanlayer-claude-plugin/skills/show-me/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:26.165Z
  truncated: false
type: agent_skill
skill:
  skill_name: show-me
  description: Help the user understand the current topic visually with concise
    diagrams, code-shape sketches, and focused HTML artifacts.
  folder_path: apps/riptide-humanlayer-claude-plugin/skills/show-me
  extra_files: []
  pack_total_skills: 22
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: humanlayer-humanlayer
---

Help the user understand the current topic of conversation visually. Skip the preamble and keep prose brief. Pick the smallest view that makes the key point clear.

- Show logic or an algorithm as pseudocode:

```text
on(save)
  if content is unchanged
    return cached result
  write new content
  return fresh result
```

- Show runtime control flow as a call tree:

```text
submitForm
  createSession
    persistPrompt
    launchAgent
  navigateToSession
```

- Show UI structure as a component tree, including state and module boundaries that matter:

```tsx
<SessionPage> (apps/example/src/routes/session.tsx)
  useSessionEvents()
  <SessionToolbar>
    <RunSkillButton> (packages/ui)
```

- Show file responsibility or a broad refactor as a shallow file tree:

```text
src/
├── commands/       # parses user actions
├── sessions/       # owns session state
└── transport/      # sends API requests
```

- Show component interaction, control flow, or data flow with Mermaid:

```mermaid
sequenceDiagram
    participant User
    participant UI
    participant Daemon
    User->>UI: choose command
    UI->>Daemon: send expanded prompt
    Daemon-->>UI: stream result
```

- Use `diff` when the point is what changes and the surrounding shape already exists. Match the diff shape to the topic.

For a component change:

```diff
 <SessionPage>
   useSessionEvents()
   <SessionToolbar>
+    <RunSkillButton />
   <SessionTimeline>
+    <SkillResultCard />
```

For a file-layout change:

```diff
 src/
 ├── commands/
+│   └── show-me.ts       # expands the slash command
 ├── sessions/
-└── transport.ts
+└── transport/
+    ├── client.ts
+    └── stream.ts
```

For a call-tree or call-stack change:

```diff
 submitForm
   createSession
     persistPrompt
+    expandSkillMention
     launchAgent
-  navigateToSession
+  navigateToSession
+    subscribeToEvents
```

For a state or control-flow change:

```diff
 on(save)
-  write content
+  if content is unchanged
+    return cached result
+  write new content
+  invalidate cache
```

- Show the whole block when most of it is new, when omitted context would hide ownership or order, or when the user needs a copyable target shape:

```ts
function expandSkill(command: string): string {
  const skillName = command.slice(1)
  return `use the ${skillName} skill`
}
```

- For a visual UI, layout, state comparison, or concept too dense for Mermaid, create one focused HTML artifact. Match the product's colors, type, spacing, and components; use real labels and data; support desktop and mobile; then display it inline:

```task-artifact
.humanlayer/tasks/{task-slug}/show-me-{description}.html
```

- Place each visual next to the short text it supports. Keep only the calls, files, props, states, and boundaries needed to answer the user's current question.
