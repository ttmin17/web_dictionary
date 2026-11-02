---
slug: xiaomimimo-mimo-code-packages-cli-test-fixture-skills-cloudflare
name: cloudflare
tagline: Comprehensive Cloudflare platform skill covering Workers, Pages,
  storage (KV, D1, R2), AI (Workers AI, Vectorize, Agents SDK), networking
  (Tunnel, Spe
summary: Comprehensive Cloudflare platform skill covering Workers, Pages,
  storage (KV, D1, R2), AI (Workers AI, Vectorize, Agents SDK), networking
  (Tunnel, Spectrum), security (WAF, DDoS), and infrastructure-as-code
  (Terraform, Pulumi). Use for any Cloudflare development task.
categories:
  - cloud-infra
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
  subpath: packages/cli/test/fixture/skills/cloudflare
  official_vendor: false
  license: MIT
signals:
  stars: 13743
  last_commit: 2026-11-02T04:02:47Z
  stars_delta_7d: 18
  stars_growth_pct: 0.1
  trending_score: 18.02
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
  path: packages/cli/test/fixture/skills/cloudflare/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:07:00.006Z
  truncated: false
type: agent_skill
skill:
  skill_name: cloudflare
  description: Comprehensive Cloudflare platform skill covering Workers, Pages,
    storage (KV, D1, R2), AI (Workers AI, Vectorize, Agents SDK), networking
    (Tunnel, Spectrum), security (WAF, DDoS), and infrastructure-as-code
    (Terraform, Pulumi). Use for any Cloudflare development task.
  folder_path: packages/cli/test/fixture/skills/cloudflare
  extra_files: []
  pack_total_skills: 3
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: xiaomimimo-mimo-code
---

# Cloudflare Platform Skill
Consolidated skill for building on the Cloudflare platform. Use decision trees below to find the right product, then load detailed references.

## Quick Decision Trees

### "I need to run code"

```
Need to run code?
├─ Serverless functions at the edge → workers/
├─ Full-stack web app with Git deploys → pages/
├─ Stateful coordination/real-time → durable-objects/
├─ Long-running multi-step jobs → workflows/
├─ Run containers → containers/
├─ Multi-tenant (customers deploy code) → workers-for-platforms/
├─ Scheduled tasks (cron) → cron-triggers/
├─ Lightweight edge logic (modify HTTP) → snippets/
├─ Process Worker execution events (logs/observability) → tail-workers/
└─ Optimize latency to backend infrastructure → smart-placement/
```

### "I need to store data"

```
Need storage?
├─ Key-value (config, sessions, cache) → kv/
├─ Relational SQL → d1/ (SQLite) or hyperdrive/ (existing Postgres/MySQL)
├─ Object/file storage (S3-compatible) → r2/
├─ Message queue (async processing) → queues/
├─ Vector embeddings (AI/semantic search) → vectorize/
├─ Strongly-consistent per-entity state → durable-objects/ (DO storage)
├─ Secrets management → secrets-store/
├─ Streaming ETL to R2 → pipelines/
└─ Persistent cache (long-term retention) → cache-reserve/
```

### "I need AI/ML"

```
Need AI?
├─ Run inference (LLMs, embeddings, images) → workers-ai/
├─ Vector database for RAG/search → vectorize/
├─ Build stateful AI agents → agents-sdk/
├─ Gateway for any AI provider (caching, routing) → ai-gateway/
└─ AI-powered search widget → ai-search/
```

### "I need networking/connectivity"

```
Need networking?
├─ Expose local service to internet → tunnel/
├─ TCP/UDP proxy (non-HTTP) → spectrum/
├─ WebRTC TURN server → turn/
├─ Private network connectivity → network-interconnect/
├─ Optimize routing → argo-smart-routing/
├─ Optimize latency to backend (not user) → smart-placement/
└─ Real-time video/audio → realtimekit/ or realtime-sfu/
```

### "I need security"

```
Need security?
├─ Web Application Firewall → waf/
├─ DDoS protection → ddos/
├─ Bot detection/management → bot-management/
├─ API protection → api-shield/
├─ CAPTCHA alternative → turnstile/
└─ Credential leak detection → waf/ (managed ruleset)
```

### "I need media/content"

```
Need media?
├─ Image optimization/transformation → images/
├─ Video streaming/encoding → stream/
├─ Browser automation/screenshots → browser-rendering/
└─ Third-party script management → zaraz/
```

### "I need infrastructure-as-code"

```
Need IaC? → pulumi/ (Pulumi), terraform/ (Terraform), or api/ (REST API)
```

## Product Index

### Compute & Runtime

| Product               | Reference                           |
| --------------------- | ----------------------------------- |
| Workers               | `references/workers/`               |
| Pages                 | `references/pages/`                 |
| Pages Functions       | `references/pages-functions/`       |
| Durable Objects       | `references/durable-objects/`       |
| Workflows             | `references/workflows/`             |
| Containers            | `references/containers/`            |
| Workers for Platforms | `references/workers-for-platforms/` |
| Cron Triggers         | `references/cron-triggers/`         |
| Tail Workers          | `references/tail-workers/`          |
| Snippets              | `references/snippets/`              |
| Smart Placement       | `references/smart-placement/`       |

### Storage & Data

| Product         | Reference                     |
| --------------- | ----------------------------- |
| KV              | `references/kv/`              |
| D1              | `references/d1/`              |
| R2              | `references/r2/`              |
| Queues          | `references/queues/`          |
| Hyperdrive      | `references/hyperdrive/`      |
| DO Storage      | `references/do-storage/`      |
| Secrets Store   | `references/secrets-store/`   |
| Pipelines       | `references/pipelines/`       |
| R2 Data Catalog | `references/r2-data-catalog/` |
| R2 SQL          | `references/r2-sql/`          |

### AI & Machine Learning

| Product    | Reference                |
| ---------- | ------------------------ |
| Workers AI | `references/workers-ai/` |
| Vectorize  | `references/vectorize/`  |
| Agents SDK | `references/agents-sdk/` |
| AI Gateway | `references/ai-gateway/` |
| AI Search  | `references/ai-search/`  |

### Networking & Connectivity

| Product              | Reference                          |
| -------------------- | ---------------------------------- |
| Tunnel               | `references/tunnel/`               |
| Spectrum             | `references/spectrum/`             |
| TURN                 | `references/turn/`                 |
| Network Interconnect | `references/network-interconnect/` |
| Argo Smart Routing   | `references/argo-smart-routing/`   |
| Workers VPC          | `references/workers-vpc/`          |

### Security

| Product         | Reference                    |
| --------------- | ---------------------------- |
| WAF             | `references/waf/`            |
| DDoS Protection | `references/ddos/`           |
| Bot Management  | `references/bot-management/` |
| API Shield      | `references/api-shield/`     |
| Turnstile       | `references/turnstile/`      |

### Media & Content

| Product           | Reference                       |
| ----------------- | ------------------------------- |
| Images            | `references/images/`            |
| Stream            | `references/stream/`            |
| Browser Rendering | `references/browser-rendering/` |
| Zaraz             | `references/zaraz/`             |

### Real-Time Communication

| Product      | Reference                  |
| ------------ | -------------------------- |
| RealtimeKit  | `references/realtimekit/`  |
| Realtime SFU | `references/realtime-sfu/` |

### Developer Tools

| Product            | Reference                        |
| ------------------ | -------------------------------- |
| Wrangler           | `references/wrangler/`           |
| Miniflare          | `references/miniflare/`          |
| C3                 | `references/c3/`                 |
| Observability      | `references/observability/`      |
| Analytics Engine   | `references/analytics-engine/`   |
| Web Analytics      | `references/web-analytics/`      |
| Sandbox            | `references/sandbox/`            |
| Workerd            | `references/workerd/`            |
| Workers Playground | `references/workers-playground/` |

### Infrastructure as Code

| Product   | Reference               |
| --------- | ----------------------- |
| Pulumi    | `references/pulumi/`    |
| Terraform | `references/terraform/` |
| API       | `references/api/`       |

### Other Services

| Product       | Reference                   |
| ------------- | --------------------------- |
| Email Routing | `references/email-routing/` |
| Email Workers | `references/email-workers/` |
| Static Assets | `references/static-assets/` |
| Bindings      | `references/bindings/`      |
| Cache Reserve | `references/cache-reserve/` |
