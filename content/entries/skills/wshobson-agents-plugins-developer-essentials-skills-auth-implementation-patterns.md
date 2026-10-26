---
slug: wshobson-agents-plugins-developer-essentials-skills-auth-implementation-patterns
name: auth-implementation-patterns
tagline: Master authentication and authorization patterns including JWT, OAuth2,
  session management, and RBAC to build secure, scalable access control systems.
summary: "- Implementing user authentication systems - Securing REST or GraphQL
  APIs - Adding OAuth2/social login - Implementing role-based access control
  (RBAC) - Designing session management - Migrating authentication systems..."
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
  subpath: plugins/developer-essentials/skills/auth-implementation-patterns
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
  path: plugins/developer-essentials/skills/auth-implementation-patterns/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.194Z
  truncated: false
type: agent_skill
skill:
  skill_name: auth-implementation-patterns
  description: Master authentication and authorization patterns including JWT,
    OAuth2, session management, and RBAC to build secure, scalable access
    control systems. Use when implementing auth systems, securing APIs, or
    debugging security issues.
  folder_path: plugins/developer-essentials/skills/auth-implementation-patterns
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

# Authentication & Authorization Implementation Patterns
Build secure, scalable authentication and authorization systems using industry-standard patterns and modern best practices.

## When to Use This Skill

- Implementing user authentication systems
- Securing REST or GraphQL APIs
- Adding OAuth2/social login
- Implementing role-based access control (RBAC)
- Designing session management
- Migrating authentication systems
- Debugging auth issues
- Implementing SSO or multi-tenancy

## Core Concepts

### 1. Authentication vs Authorization

**Authentication (AuthN)**: Who are you?

- Verifying identity (username/password, OAuth, biometrics)
- Issuing credentials (sessions, tokens)
- Managing login/logout

**Authorization (AuthZ)**: What can you do?

- Permission checking
- Role-based access control (RBAC)
- Resource ownership validation
- Policy enforcement

### 2. Authentication Strategies

**Session-Based:**

- Server stores session state
- Session ID in cookie
- Traditional, simple, stateful

**Token-Based (JWT):**

- Stateless, self-contained
- Scales horizontally
- Can store claims

**OAuth2/OpenID Connect:**

- Delegate authentication
- Social login (Google, GitHub)
- Enterprise SSO

## Detailed patterns and worked examples

Detailed pattern documentation lives in `references/details.md`. Read that file when the navigation tier above is insufficient.

## Best Practices

1. **Never Store Plain Passwords**: Always hash with bcrypt/argon2
2. **Use HTTPS**: Encrypt data in transit
3. **Short-Lived Access Tokens**: 15-30 minutes max
4. **Secure Cookies**: httpOnly, secure, sameSite flags
5. **Validate All Input**: Email format, password strength
6. **Rate Limit Auth Endpoints**: Prevent brute force attacks
7. **Implement CSRF Protection**: For session-based auth
8. **Rotate Secrets Regularly**: JWT secrets, session secrets
9. **Log Security Events**: Login attempts, failed auth
10. **Use MFA When Possible**: Extra security layer

## Common Pitfalls

- **Weak Passwords**: Enforce strong password policies
- **JWT in localStorage**: Vulnerable to XSS, use httpOnly cookies
- **No Token Expiration**: Tokens should expire
- **Client-Side Auth Checks Only**: Always validate server-side
- **Insecure Password Reset**: Use secure tokens with expiration
- **No Rate Limiting**: Vulnerable to brute force
- **Trusting Client Data**: Always validate on server
