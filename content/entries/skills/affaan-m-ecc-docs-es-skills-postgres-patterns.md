---
slug: affaan-m-ecc-docs-es-skills-postgres-patterns
name: postgres-patterns
tagline: Patrones de base de datos PostgreSQL para optimización de consultas,
  diseño de esquemas, indexación y seguridad. Basado en las buenas prácticas de
  Sup
summary: "- Escribir consultas SQL o migraciones - Diseñar esquemas de base de
  datos - Diagnosticar consultas lentas - Implementar Row Level Security -
  Configurar connection pooling"
categories:
  - databases-memory
tags:
  - ai-agents
  - anthropic
  - claude
  - claude-code
status: active
quality_percentile: 96
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: affaan-m/ECC
  subpath: docs/es/skills/postgres-patterns
  official_vendor: false
  license: MIT
signals:
  stars: 289072
  last_commit: 2026-10-26T04:56:56Z
  stars_delta_7d: 5578
  stars_growth_pct: 2
  trending_score: 5687.75
  velocity_source: snapshot_delta
  sparkline_4w:
    - 274698
    - 278380
    - 283494
    - 289072
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: affaan-m/ECC
  path: docs/es/skills/postgres-patterns/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.001Z
  truncated: false
type: agent_skill
skill:
  skill_name: postgres-patterns
  description: Patrones de base de datos PostgreSQL para optimización de
    consultas, diseño de esquemas, indexación y seguridad. Basado en las buenas
    prácticas de Supabase.
  folder_path: docs/es/skills/postgres-patterns
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# Patrones PostgreSQL
Referencia rápida de las buenas prácticas de PostgreSQL. Para orientación detallada, usa el agente `database-reviewer`.

## Cuándo Activar

- Escribir consultas SQL o migraciones
- Diseñar esquemas de base de datos
- Diagnosticar consultas lentas
- Implementar Row Level Security
- Configurar connection pooling

## Referencia Rápida

### Tabla de Índices

| Patrón de Consulta | Tipo de Índice | Ejemplo |
|-------------------|----------------|---------|
| `WHERE col = value` | B-tree (por defecto) | `CREATE INDEX idx ON t (col)` |
| `WHERE col > value` | B-tree | `CREATE INDEX idx ON t (col)` |
| `WHERE a = x AND b > y` | Compuesto | `CREATE INDEX idx ON t (a, b)` |
| `WHERE jsonb @> '{}'` | GIN | `CREATE INDEX idx ON t USING gin (col)` |
| `WHERE tsv @@ query` | GIN | `CREATE INDEX idx ON t USING gin (col)` |
| Rangos de series temporales | BRIN | `CREATE INDEX idx ON t USING brin (col)` |

### Referencia Rápida de Tipos de Datos

| Caso de Uso | Tipo Correcto | Evitar |
|-------------|--------------|--------|
| IDs | `bigint` | `int`, UUID aleatorio |
| Cadenas | `text` | `varchar(255)` |
| Timestamps | `timestamptz` | `timestamp` |
| Dinero | `numeric(10,2)` | `float` |
| Flags | `boolean` | `varchar`, `int` |

### Patrones Comunes

**Orden del Índice Compuesto:**
```sql
-- Columnas de igualdad primero, luego columnas de rango
CREATE INDEX idx ON orders (status, created_at);
-- Funciona para: WHERE status = 'pending' AND created_at > '2024-01-01'
```

**Índice de Cobertura:**
```sql
CREATE INDEX idx ON users (email) INCLUDE (name, created_at);
-- Evita la búsqueda en tabla para SELECT email, name, created_at
```

**Índice Parcial:**
```sql
CREATE INDEX idx ON users (email) WHERE deleted_at IS NULL;
-- Índice más pequeño, solo incluye usuarios activos
```

**Política RLS (Optimizada):**
```sql
CREATE POLICY policy ON orders
  USING ((SELECT auth.uid()) = user_id);  -- ¡Envolver en SELECT!
```

**UPSERT:**
```sql
INSERT INTO settings (user_id, key, value)
VALUES (123, 'theme', 'dark')
ON CONFLICT (user_id, key)
DO UPDATE SET value = EXCLUDED.value;
```

**Paginación por Cursor:**
```sql
SELECT * FROM products WHERE id > $last_id ORDER BY id LIMIT 20;
-- O(1) vs OFFSET que es O(n)
```

**Procesamiento de Cola:**
```sql
UPDATE jobs SET status = 'processing'
WHERE id = (
  SELECT id FROM jobs WHERE status = 'pending'
  ORDER BY created_at LIMIT 1
  FOR UPDATE SKIP LOCKED
) RETURNING *;
```

### Detección de Anti-Patrones

```sql
-- Encontrar claves foráneas sin índice
SELECT conrelid::regclass, a.attname
FROM pg_constraint c
JOIN pg_attribute a ON a.attrelid = c.conrelid AND a.attnum = ANY(c.conkey)
WHERE c.contype = 'f'
  AND NOT EXISTS (
    SELECT 1 FROM pg_index i
    WHERE i.indrelid = c.conrelid AND a.attnum = ANY(i.indkey)
  );

-- Encontrar consultas lentas
SELECT query, mean_exec_time, calls
FROM pg_stat_statements
WHERE mean_exec_time > 100
ORDER BY mean_exec_time DESC;

-- Verificar bloat de tablas
SELECT relname, n_dead_tup, last_vacuum
FROM pg_stat_user_tables
WHERE n_dead_tup > 1000
ORDER BY n_dead_tup DESC;
```

### Plantilla de Configuración

```sql
-- Límites de conexión (ajustar según RAM)
ALTER SYSTEM SET max_connections = 100;
ALTER SYSTEM SET work_mem = '8MB';

-- Timeouts
ALTER SYSTEM SET idle_in_transaction_session_timeout = '30s';
ALTER SYSTEM SET statement_timeout = '30s';

-- Monitoreo
CREATE EXTENSION IF NOT EXISTS pg_stat_statements;

-- Valores predeterminados de seguridad
REVOKE ALL ON SCHEMA public FROM public;

SELECT pg_reload_conf();
```

## Relacionado

- Agente: `database-reviewer` - Flujo de trabajo completo de revisión de base de datos
- Skill: `clickhouse-io` - Patrones de analítica en ClickHouse
- Skill: `backend-patterns` - Patrones de API y backend

---
*Basado en Agent Skills de Supabase (crédito: equipo de Supabase) (Licencia MIT)*
