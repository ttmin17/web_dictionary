---
slug: nimbalyst-nimbalyst-packages-extensions-datamodellm-claude-plugin-skills-datamodellm
name: datamodellm
tagline: "Create visual data models for database schemas using Nimbalyst's
  DataModelLM editor. Use when the user wants to design a data model, database
  schema, "
summary: "- Designing database schemas - Creating entity relationship diagrams
  (ERDs) - Planning data models for applications - Working with Prisma schemas -
  Any visual data modeling task"
categories:
  - coding-agents
tags:
  - agentic-ai
  - agentic-ide
  - ai-agents
  - ai-coding-assistant
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: nimbalyst/nimbalyst
  subpath: packages/extensions/datamodellm/claude-plugin/skills/datamodellm
  official_vendor: false
  license: MIT
signals:
  stars: 2047
  last_commit: 2026-11-04T07:28:07Z
  stars_delta_7d: 24
  stars_growth_pct: 1.2
  trending_score: 24.28
  velocity_source: snapshot_delta
  sparkline_4w:
    - 1931
    - 1975
    - 2023
    - 2047
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: nimbalyst/nimbalyst
  path: packages/extensions/datamodellm/claude-plugin/skills/datamodellm/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:27.662Z
  truncated: false
type: agent_skill
skill:
  skill_name: datamodellm
  description: Create visual data models for database schemas using Nimbalyst's
    DataModelLM editor. Use when the user wants to design a data model, database
    schema, entity relationship diagram, or Prisma schema.
  folder_path: packages/extensions/datamodellm/claude-plugin/skills/datamodellm
  extra_files: []
  pack_total_skills: 16
  is_pack_primary: false
  clients:
    - claude-code
  pack_slug: nimbalyst-nimbalyst
---

# DataModelLM - Visual Data Modeling
DataModelLM is Nimbalyst's visual editor for creating database schemas using Prisma format. It displays entity-relationship diagrams with a visual canvas.

## When to Use DataModelLM

- Designing database schemas
- Creating entity relationship diagrams (ERDs)
- Planning data models for applications
- Working with Prisma schemas
- Any visual data modeling task

## File Format

- **Extension**: `.prisma`
- **Format**: Prisma schema with special metadata header
- **Location**: Any directory (commonly workspace root or `models/`, `schema/`)

### Required Header

Every DataModelLM file MUST start with a `@nimbalyst` metadata comment:

```prisma
// @nimbalyst {"viewport":{"x":0,"y":0,"zoom":1},"positions":{},"entityViewMode":"standard"}
```

### Basic Structure

```prisma
// @nimbalyst {"viewport":{"x":0,"y":0,"zoom":1},"positions":{},"entityViewMode":"standard"}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  posts     Post[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
  createdAt DateTime @default(now())
}
```

## Supported Types

### Scalar Types
- `Int`, `BigInt`, `Float`, `Decimal`
- `String`, `Boolean`
- `DateTime`, `Json`, `Bytes`

### Modifiers
- `?` - Optional field
- `[]` - Array/list

### Attributes
- `@id` - Primary key
- `@unique` - Unique constraint
- `@default(value)` - Default value
- `@updatedAt` - Auto-update timestamp
- `@relation` - Define relationships

## Relationship Patterns

### One-to-Many
```prisma
model User {
  posts Post[]
}
model Post {
  author   User @relation(fields: [authorId], references: [id])
  authorId Int
}
```

### One-to-One
```prisma
model User {
  profile Profile?
}
model Profile {
  user   User @relation(fields: [userId], references: [id])
  userId Int  @unique
}
```

### Many-to-Many (Implicit)
```prisma
model Post {
  categories Category[]
}
model Category {
  posts Post[]
}
```

## Best Practices

1. **Always include the @nimbalyst header** - Required for visual editor
2. **Use meaningful model names** - PascalCase, singular (User not Users)
3. **Include timestamps** - Add createdAt and updatedAt to most models
4. **Define explicit relations** - Always specify @relation with fields and references
