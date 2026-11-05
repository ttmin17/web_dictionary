---
slug: cloudflare-vibesdk-worker-agents-think-skills-app-ai-binding
name: app-ai-binding
tagline: Build AI features in generated apps using the platform-provided Workers
  AI binding. Load this skill for chatbots, summarization, classification, embed
summary: Generated apps can call Workers AI from the App Durable Object through
  this.env.AI. The platform provides this binding automatically in Dynamic
  Worker previews and native Cloudflare deployments. Do not add an ai secti...
categories:
  - cloud-infra
tags:
  - cloudflare-workers
  - coding-agent
  - durable-objects
  - text-to-app
status: active
quality_percentile: 99
selection_reason: official_vendor
first_seen: 2026-10-26
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: cloudflare/vibesdk
  subpath: worker/agents/think/skills/app-ai-binding
  official_vendor: true
  license: MIT
signals:
  stars: 5458
  last_commit: 2026-10-22T01:20:01Z
  stars_delta_7d: 31
  stars_growth_pct: 0.6
  trending_score: 31.18
  rank_current: 114
  rank_delta: 4
  velocity_source: snapshot_delta
  sparkline_4w:
    - 5411
    - 5427
    - 5458
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: cloudflare/vibesdk
  path: worker/agents/think/skills/app-ai-binding/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:38.337Z
  truncated: false
type: agent_skill
skill:
  skill_name: app-ai-binding
  description: Build AI features in generated apps using the platform-provided
    Workers AI binding. Load this skill for chatbots, summarization,
    classification, embeddings, semantic search, image understanding,
    transcription, translation, or other model inference.
  folder_path: worker/agents/think/skills/app-ai-binding
  extra_files: []
  pack_total_skills: 5
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: cloudflare-vibesdk
---

Generated apps can call Workers AI from the `App` Durable Object through `this.env.AI`. The platform provides this binding automatically in Dynamic Worker previews and native Cloudflare deployments. Do not add an `ai` section to the generated app's `wrangler.json`.

Use only `AI.run(model, inputs, options?)`. Preview uses a restricted proxy with this method, while deployed Workers receive the native Workers AI binding. Methods such as `AI.gateway()`, `AI.models()`, `AI.autorag()`, and `AI.toMarkdown()` are not portable between preview and deployment.

## Type and usage

```ts
import { DurableObject } from "cloudflare:workers";

interface Env {
  AI: Ai;
}

export class App extends DurableObject<Env> {
  async fetch(request: Request): Promise<Response> {
    const { prompt } = await request.json<{ prompt: string }>();
    const result = await this.env.AI.run("@cf/meta/llama-4-scout-17b-16e-instruct", {
      messages: [
        { role: "system", content: "Answer clearly and concisely." },
        { role: "user", content: prompt },
      ],
    });
    return Response.json(result);
  }
}
```

Keep AI calls in the server-side `App` class. Browser code should call an app API route; it must never receive model credentials or call the binding directly.

## Common tasks

### Text generation

Use `@cf/meta/llama-4-scout-17b-16e-instruct` with either `prompt` or `messages`:

```ts
const result = await this.env.AI.run("@cf/meta/llama-4-scout-17b-16e-instruct", {
  messages: [{ role: "user", content: userPrompt }],
  max_tokens: 512,
});
```

### Embeddings

Use `@cf/baai/bge-base-en-v1.5`. The response contains embedding vectors in `data`:

```ts
const result = await this.env.AI.run("@cf/baai/bge-base-en-v1.5", {
  text: ["first document", "second document"],
});
```

### Image classification

Use `@cf/microsoft/resnet-50` with image bytes converted to a number array:

```ts
const image = [...new Uint8Array(await request.arrayBuffer())];
const result = await this.env.AI.run("@cf/microsoft/resnet-50", { image });
```

### Speech transcription

Use `@cf/openai/whisper` with audio bytes:

```ts
const audio = [...new Uint8Array(await request.arrayBuffer())];
const result = await this.env.AI.run("@cf/openai/whisper", { audio });
```

Model input and output shapes differ. Keep model-specific parsing close to the call and validate user input before inference. Use only active model IDs from the current Workers AI model catalog; never generate code with a deprecated model.

## Limits and errors

Dynamic Worker previews enforce a per-app AI call limit. AI features must fail transparently when inference is unavailable.

- Never return canned, random, mock, placeholder, or hard-coded content as a fallback for an AI response.
- Never catch an `AI.run()` error and continue with an apparently successful response.
- Never return `200` with fields such as `fallbackUsed` after inference fails.
- Return a non-2xx JSON response containing a safe, useful error message. The frontend must display that error to the user.
- Do not retry rate-limit failures in a loop.

```ts
try {
  const result = await this.env.AI.run("@cf/meta/llama-4-scout-17b-16e-instruct", {
    messages: [{ role: "user", content: userPrompt }],
  });
  return Response.json(result);
} catch (error) {
  const message = error instanceof Error ? error.message : "AI inference failed";
  return Response.json({ error: "AI inference failed", details: message }, { status: 503 });
}
```

Frontend callers must inspect both the HTTP status and error body:

```ts
const response = await fetch("./api/chat", requestOptions);
const body = await response.json<{ content?: string; error?: string; details?: string }>();
if (!response.ok) throw new Error(body.details || body.error || "AI request failed");
```

Use non-streaming calls for preview-compatible code. Native Workers AI deployments support `{ stream: true }`, but streaming across the preview proxy is not guaranteed.
