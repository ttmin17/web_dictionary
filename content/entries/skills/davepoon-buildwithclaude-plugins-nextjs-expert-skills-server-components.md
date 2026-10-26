---
slug: davepoon-buildwithclaude-plugins-nextjs-expert-skills-server-components
name: server-components
tagline: This skill should be used when the user asks about "Server Components",
  "Client Components", "'use client' directive", "when to use server vs client",
summary: React Server Components (RSC) allow components to render on the server,
  reducing client-side JavaScript and enabling direct data access. In Next.js
  App Router, all components are Server Components by default.
categories:
  - agent-frameworks
tags:
  - claude
  - claude-code
  - claude-code-commands
  - claude-skills
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: davepoon/buildwithclaude
  subpath: plugins/nextjs-expert/skills/server-components
  official_vendor: false
  license: MIT
signals:
  stars: 3678
  last_commit: 2026-10-26T00:07:50Z
  stars_delta_7d: 28
  stars_growth_pct: 0.8
  trending_score: 28.21
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3604
    - 3631
    - 3650
    - 3678
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: davepoon/buildwithclaude
  path: plugins/nextjs-expert/skills/server-components/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.622Z
  truncated: false
type: agent_skill
skill:
  skill_name: server-components
  description: This skill should be used when the user asks about "Server
    Components", "Client Components", "'use client' directive", "when to use
    server vs client", "RSC patterns", "component composition", "data fetching
    in components", or needs guidance on React Server Components architecture in
    Next.js.
  folder_path: plugins/nextjs-expert/skills/server-components
  extra_files:
    - examples/data-fetching-patterns.md
    - references/composition-patterns.md
    - references/server-vs-client.md
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# React Server Components in Next.js
## Overview

React Server Components (RSC) allow components to render on the server, reducing client-side JavaScript and enabling direct data access. In Next.js App Router, all components are Server Components by default.

## Server vs Client Components

### Server Components (Default)

Server Components run only on the server:

```tsx
// app/users/page.tsx (Server Component - default)
async function UsersPage() {
  const users = await db.user.findMany() // Direct DB access

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}
```

**Benefits:**
- Direct database/filesystem access
- Keep sensitive data on server (API keys, tokens)
- Reduce client bundle size
- Automatic code splitting

### Client Components

Add `'use client'` directive for interactivity:

```tsx
// components/counter.tsx
'use client'

import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}
```

**Use Client Components for:**
- `useState`, `useEffect`, `useReducer`
- Event handlers (`onClick`, `onChange`)
- Browser APIs (`window`, `document`)
- Custom hooks with state

## The Mental Model

Think of the component tree as having a "client boundary":

```
Server Component (page.tsx)
├── Server Component (header.tsx)
├── Client Component ('use client') ← boundary
│   ├── Client Component (child)
│   └── Client Component (child)
└── Server Component (footer.tsx)
```

**Key rules:**
1. Server Components can import Client Components
2. Client Components cannot import Server Components
3. You can pass Server Components as `children` to Client Components

## Composition Patterns

### Pattern 1: Server Data → Client Interactivity

Fetch data in Server Component, pass to Client:

```tsx
// app/products/page.tsx (Server)
import { ProductList } from './product-list'

export default async function ProductsPage() {
  const products = await getProducts()
  return <ProductList products={products} />
}

// app/products/product-list.tsx (Client)
'use client'

export function ProductList({ products }: { products: Product[] }) {
  const [filter, setFilter] = useState('')

  const filtered = products.filter(p =>
    p.name.includes(filter)
  )

  return (
    <>
      <input => setFilter(e.target.value)} />
      {filtered.map(p => <ProductCard key={p.id} product={p} />)}
    </>
  )
}
```

### Pattern 2: Children as Server Components

Pass Server Components through children prop:

```tsx
// components/client-wrapper.tsx
'use client'

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button => setIsOpen(!isOpen)}>Toggle</button>
      {isOpen && children} {/* Server Component content */}
    </div>
  )
}

// app/page.tsx (Server)
import { ClientWrapper } from '@/components/client-wrapper'
import { ServerContent } from '@/components/server-content'

export default function Page() {
  return (
    <ClientWrapper>
      <ServerContent /> {/* Renders on server! */}
    </ClientWrapper>
  )
}
```

### Pattern 3: Slots for Complex Layouts

Use multiple children slots:

```tsx
// components/dashboard-shell.tsx
'use client'

interface Props {
  sidebar: React.ReactNode
  main: React.ReactNode
}

export function DashboardShell({ sidebar, main }: Props) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="flex">
      {!collapsed && <aside>{sidebar}</aside>}
      <main>{main}</main>
    </div>
  )
}
```

## Data Fetching

### Async Server Components

Server Components can be async:

```tsx
// app/posts/page.tsx
export default async function PostsPage() {
  const posts = await fetch('https://api.example.com/posts')
    .then(res => res.json())

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
```

### Parallel Data Fetching

Fetch multiple resources in parallel:

```tsx
export default async function DashboardPage() {
  const [user, posts, analytics] = await Promise.all([
    getUser(),
    getPosts(),
    getAnalytics(),
  ])

  return (
    <Dashboard user={user} posts={posts} analytics={analytics} />
  )
}
```

### Streaming with Suspense

Stream slow components:

```tsx
import { Suspense } from 'react'

export default function Page() {
  return (
    <div>
      <Header /> {/* Renders immediately */}
      <Suspense fallback={<PostsSkeleton />}>
        <SlowPosts /> {/* Streams when ready */}
      </Suspense>
    </div>
  )
}
```

## Decision Guide

**Use Server Component when:**
- Fetching data
- Accessing backend resources
- Keeping sensitive info on server
- Reducing client JavaScript
- Component has no interactivity

**Use Client Component when:**
- Using state (`useState`, `useReducer`)
- Using effects (`useEffect`)
- Using event listeners
- Using browser APIs
- Using custom hooks with state

## Common Mistakes

1. **Don't** add `'use client'` unnecessarily - it increases bundle size
2. **Don't** try to import Server Components into Client Components
3. **Do** serialize data at boundaries (no functions, classes, or dates)
4. **Do** use the children pattern for composition

## Resources

For detailed patterns, see:
- `references/server-vs-client.md` - Complete comparison guide
- `references/composition-patterns.md` - Advanced composition
- `examples/data-fetching-patterns.md` - Data fetching examples
