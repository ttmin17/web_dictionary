---
slug: rusq-slackdump-cmd-slackdump-internal-mcp-assets-skills-slackdump-sqlite3
name: slackdump-sqlite3
tagline: Guidance for querying a Slackdump SQLite3 database directly via the
  sqlite3 CLI.
summary: Use this skill when the Slackdump MCP and SQLite MCP are both
  unavailable and you must fall back to the sqlite3 command-line tool.
categories:
  - databases-memory
status: active
quality_percentile: 37
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: rusq/slackdump
  subpath: cmd/slackdump/internal/mcp/assets/skills/slackdump-sqlite3
  official_vendor: false
  license: AGPL-3.0
signals:
  stars: 2822
  last_commit: 2026-10-12T09:27:13Z
  stars_delta_7d: 9
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 2822
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: rusq/slackdump
  path: cmd/slackdump/internal/mcp/assets/skills/slackdump-sqlite3/SKILL.md
  branch: master
  fetched_at: 2026-10-14T14:55:00.998Z
  truncated: false
type: agent_skill
skill:
  skill_name: slackdump-sqlite3
  description: Guidance for querying a Slackdump SQLite3 database directly via the
    sqlite3 CLI.
  folder_path: cmd/slackdump/internal/mcp/assets/skills/slackdump-sqlite3
  extra_files: []
tags:
  - sqlite
---

## Querying Slackdump database with sqlite3

Use this skill when the Slackdump MCP and SQLite MCP are both unavailable and
you must fall back to the `sqlite3` command-line tool.

### Locate the database

Look for `slackdump.sqlite` in the current directory or the archive directory.
If multiple files exist, ask the user to choose one.

### Read-only access

You must not run any `UPDATE`, `DELETE`, `INSERT`, `DROP`, `CREATE`, or other
DML/DDL statements. Only `SELECT` and data-dictionary queries are permitted.

### Useful pragmas

```sql
-- List all tables
.tables

-- Show schema for a table
.schema MESSAGE

```

### Key tables

| Table        | Description                                      |
|--------------|--------------------------------------------------|
| SESSION      | One row per slackdump invocation                 |
| CHUNK        | One row per Slack API call                       |
| TYPES        | Chunk type lookup (e.g. MESSAGES, THREADS)       |
| MESSAGE      | Channel and thread messages                      |
| CHANNEL      | Slack channels / conversations                   |
| S_USER       | Workspace members                                |
| FILE         | File attachments linked to messages              |
| WORKSPACE    | Workspace information                            |
| CHANNEL_USER | Members of a channel                             |
| SEARCH_MESSAGE | Messages from `slackdump search` results     |
| SEARCH_FILE    | Files from `slackdump search` results        |

### Chunk types (TYPES table)

| ID | NAME            | Stores data in    |
|----|-----------------|-------------------|
|  0 | MESSAGES        | MESSAGE           |
|  1 | THREAD_MESSAGES | MESSAGE           |
|  2 | FILES           | FILE              |
|  3 | USERS           | S_USER            |
|  4 | CHANNELS        | CHANNEL           |
|  5 | CHANNEL_INFO    | CHANNEL           |
|  6 | WORKSPACE_INFO  | WORKSPACE         |
|  7 | CHANNEL_USERS   | CHANNEL_USER      |
|  8 | STARRED_ITEMS   | (no table)        |
|  9 | BOOKMARKS       | (no table)        |
| 10 | SEARCH_MESSAGES | SEARCH_MESSAGE    |
| 11 | SEARCH_FILES    | SEARCH_FILE       |

Chunk types with (no table) are not implemented yet, but reserved for future
implementation.  You will not see those chunks in the database.

### Thread messages

A `MESSAGE` row is a thread reply when `PARENT_ID IS NOT NULL AND IS_PARENT = FALSE`.

Note: thread-parent messages also have `PARENT_ID` set (equal to their own
`ID`), so `PARENT_ID IS NOT NULL` alone matches both parents and replies.
Use `IS_PARENT = TRUE` to select thread-parent messages, and
`IS_PARENT = FALSE AND PARENT_ID IS NOT NULL` for replies only.

### MESSAGE.ID vs MESSAGE.TS

`MESSAGE.ID` is **not** the Slack timestamp string. It is the timestamp
converted to an int64 by stripping the dot:
e.g. `"1648085300.726649"` → `1648085300726649`.

Use `MESSAGE.TS` for the human-readable Slack timestamp (e.g. for display or
for passing to `get_thread`).

### DATA column — full JSON blob

Every entity table (`MESSAGE`, `CHANNEL`, `S_USER`, `FILE`, etc.) stores the
complete Slack API JSON payload in a `DATA` column (stored as a blob). Columns
like `TS`, `PARENT_ID`, `IS_PARENT`, `MODE`, `NAME` are extracted for indexing,
but all other fields (reactions, edited timestamps, message subtypes, user
profiles, etc.) are only accessible via SQLite's `JSON_EXTRACT`:

```sql
-- Example: get the subtype and reaction count of messages
SELECT TS,
       JSON_EXTRACT(DATA, '$.subtype') AS subtype,
       JSON_ARRAY_LENGTH(DATA, '$.reactions') AS reaction_count
FROM MESSAGE
WHERE CHUNK_ID = 44;
```

### Fetching the latest version of a message

The same message (same `MESSAGE.TS` AND `MESSAGE.CHANNEL_ID`) can appear in
multiple chunks and multiple sessions. There are two distinct reasons:

1. **Multiple sessions** — e.g. after a `slackdump resume` run the same
   message may be fetched again and stored in a newer session.
2. **Multiple chunk types within the same session** — a thread-starter message
   is stored twice in the same session: once under `CHUNK.TYPE_ID=0`
   (channel history) and once under `CHUNK.TYPE_ID=1` (thread messages).

Always scope your query to the correct chunk type first, then pick the latest
session:

#### Latest Channel messages
- Use `CHUNK.TYPE_ID = 0` when querying **channel history** messages.

```sql
-- Latest version of each channel-history message in a channel (TYPE_ID=0)
WITH LATEST AS (
    SELECT T.ID, MAX(CHUNK_ID) AS CHUNK_ID 
    FROM MESSAGE AS T 
    JOIN CHUNK AS CH ON CH.ID = T.CHUNK_ID
    WHERE 1=1 
    AND CH.TYPE_ID IN (0,1) 
    AND (
      T.CHANNEL_ID = [CHANNEL_ID]
      AND (
            ( CH.TYPE_ID=0 AND (CH.THREAD_ONLY=FALSE OR CH.THREAD_ONLY IS NULL)) 
         OR (CH.TYPE_ID=1 AND CH.THREAD_ONLY=TRUE AND T.IS_PARENT=TRUE)
         )
    )
    GROUP BY T.ID
)
SELECT T.ID,T.CHUNK_ID,T.CHANNEL_ID,T.TS,T.PARENT_ID,T.THREAD_TS,T.IS_PARENT,T.IDX,T.NUM_FILES,T.TXT,T.DATA,T.LATEST_REPLY
FROM LATEST L
JOIN MESSAGE AS T ON 1 = 1 AND T.ID = L.ID
 AND T.CHUNK_ID = L.CHUNK_ID JOIN CHUNK CH ON T.CHUNK_ID = CH.ID WHERE 1=1
ORDER BY T.ID;
```

#### Latest thread messages
- Use `CHUNK.TYPE_ID = 1` when querying **thread** messages.
```sql
-- Latest version of each thread message in a thread (TYPE_ID=1)
WITH LATEST AS (
    SELECT T.ID, MAX(CHUNK_ID) AS CHUNK_ID
      FROM MESSAGE AS T
      JOIN CHUNK AS CH ON CH.ID = T.CHUNK_ID
    WHERE 1=1
      AND CH.TYPE_ID IN (0,1)
      AND (
            T.CHANNEL_ID = [CHANNEL_ID]
        AND T.PARENT_ID = [PARENT_MESSAGE_ID]
        AND ( JSON_EXTRACT(T.DATA, '$.subtype') IS NULL OR (JSON_EXTRACT(T.DATA, '$.subtype') = 'thread_broadcast' AND CH.TYPE_ID = 1 )   )
      )
    GROUP BY T.ID
)
SELECT T.ID,T.CHUNK_ID,T.CHANNEL_ID,T.TS,T.PARENT_ID,T.THREAD_TS,T.IS_PARENT,T.IDX,T.NUM_FILES,T.TXT,T.DATA,T.LATEST_REPLY
  FROM LATEST L
  JOIN MESSAGE AS T ON 1 = 1 AND T.ID = L.ID
   AND T.CHUNK_ID = L.CHUNK_ID JOIN CHUNK CH ON T.CHUNK_ID = CH.ID WHERE 1=1
ORDER BY T.ID
```
### Ignore V_* views

Other views prefixed with `V_` are internal to slackdump and track unprocessed
threads during execution. Do not rely on them for analysis.
