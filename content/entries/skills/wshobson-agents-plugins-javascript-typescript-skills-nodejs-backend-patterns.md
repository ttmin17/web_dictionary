---
slug: wshobson-agents-plugins-javascript-typescript-skills-nodejs-backend-patterns
name: nodejs-backend-patterns
tagline: Build production-ready Node.js backend services with Express/Fastify,
  implementing middleware patterns, error handling, authentication, database
  integ
summary: "- Building REST APIs or GraphQL servers - Creating microservices with
  Node.js - Implementing authentication and authorization - Designing scalable
  backend architectures - Setting up middleware and error handling - Int..."
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
  subpath: plugins/javascript-typescript/skills/nodejs-backend-patterns
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
  path: plugins/javascript-typescript/skills/nodejs-backend-patterns/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.198Z
  truncated: false
type: agent_skill
skill:
  skill_name: nodejs-backend-patterns
  description: Build production-ready Node.js backend services with
    Express/Fastify, implementing middleware patterns, error handling,
    authentication, database integration, and API design best practices. Use
    when creating Node.js servers, REST APIs, GraphQL backends, or microservices
    architectures.
  folder_path: plugins/javascript-typescript/skills/nodejs-backend-patterns
  extra_files:
    - references/advanced-patterns.md
    - references/details.md
  pack_total_skills: 185
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: wshobson-agents
---

# Node.js Backend Patterns
Comprehensive guidance for building scalable, maintainable, and production-ready Node.js backend applications with modern frameworks, architectural patterns, and best practices.

## When to Use This Skill

- Building REST APIs or GraphQL servers
- Creating microservices with Node.js
- Implementing authentication and authorization
- Designing scalable backend architectures
- Setting up middleware and error handling
- Integrating databases (SQL and NoSQL)
- Building real-time applications with WebSockets
- Implementing background job processing

## Detailed patterns and worked examples

Detailed pattern documentation lives in `references/details.md`. Read that file when the navigation tier above is insufficient.

## Best Practices

1. **Use TypeScript**: Type safety prevents runtime errors
2. **Implement proper error handling**: Use custom error classes
3. **Validate input**: Use libraries like Zod or Joi
4. **Use environment variables**: Never hardcode secrets
5. **Implement logging**: Use structured logging (Pino, Winston)
6. **Add rate limiting**: Prevent abuse
7. **Use HTTPS**: Always in production
8. **Implement CORS properly**: Don't use `*` in production
9. **Use dependency injection**: Easier testing and maintenance
10. **Write tests**: Unit, integration, and E2E tests
11. **Handle graceful shutdown**: Clean up resources
12. **Use connection pooling**: For databases
13. **Implement health checks**: For monitoring
14. **Use compression**: Reduce response size
15. **Monitor performance**: Use APM tools

## Testing Patterns

See `javascript-testing-patterns` skill for comprehensive testing guidance.
