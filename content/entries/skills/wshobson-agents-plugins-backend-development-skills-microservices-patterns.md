---
slug: wshobson-agents-plugins-backend-development-skills-microservices-patterns
name: microservices-patterns
tagline: Design microservices architectures with service boundaries,
  event-driven communication, and resilience patterns. Use when building
  distributed systems
summary: "- Decomposing monoliths into microservices - Designing service
  boundaries and contracts - Implementing inter-service communication - Managing
  distributed data and transactions - Building resilient distributed systems..."
categories:
  - coding-agents
tags:
  - agent-skills
  - agentic-ai
  - ai-agents
  - anthropic
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: wshobson/agents
  subpath: plugins/backend-development/skills/microservices-patterns
  official_vendor: false
  license: MIT
signals:
  stars: 41725
  last_commit: 2026-10-26T01:08:14Z
  stars_delta_7d: 673
  stars_growth_pct: 1.6
  trending_score: 684.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 40271
    - 40590
    - 41052
    - 41725
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: wshobson/agents
  path: plugins/backend-development/skills/microservices-patterns/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.191Z
  truncated: false
type: agent_skill
skill:
  skill_name: microservices-patterns
  description: Design microservices architectures with service boundaries,
    event-driven communication, and resilience patterns. Use when building
    distributed systems, decomposing monoliths, or implementing microservices.
  folder_path: plugins/backend-development/skills/microservices-patterns
  extra_files:
    - references/details.md
  pack_total_skills: 185
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: wshobson-agents
---

# Microservices Patterns
Master microservices architecture patterns including service boundaries, inter-service communication, data management, and resilience patterns for building distributed systems.

## When to Use This Skill

- Decomposing monoliths into microservices
- Designing service boundaries and contracts
- Implementing inter-service communication
- Managing distributed data and transactions
- Building resilient distributed systems
- Implementing service discovery and load balancing
- Designing event-driven architectures

## Core Concepts

### 1. Service Decomposition Strategies

**By Business Capability**

- Organize services around business functions
- Each service owns its domain
- Example: OrderService, PaymentService, InventoryService

**By Subdomain (DDD)**

- Core domain, supporting subdomains
- Bounded contexts map to services
- Clear ownership and responsibility

**Strangler Fig Pattern**

- Gradually extract from monolith
- New functionality as microservices
- Proxy routes to old/new systems

### 2. Communication Patterns

**Synchronous (Request/Response)**

- REST APIs
- gRPC
- GraphQL

**Asynchronous (Events/Messages)**

- Event streaming (Kafka)
- Message queues (RabbitMQ, SQS)
- Pub/Sub patterns

### 3. Data Management

**Database Per Service**

- Each service owns its data
- No shared databases
- Loose coupling

**Saga Pattern**

- Distributed transactions
- Compensating actions
- Eventual consistency

### 4. Resilience Patterns

**Circuit Breaker**

- Fail fast on repeated errors
- Prevent cascade failures

**Retry with Backoff**

- Transient fault handling
- Exponential backoff

**Bulkhead**

- Isolate resources
- Limit impact of failures

## Detailed patterns and worked examples

Detailed pattern documentation lives in `references/details.md`. Read that file when the navigation tier above is insufficient.
