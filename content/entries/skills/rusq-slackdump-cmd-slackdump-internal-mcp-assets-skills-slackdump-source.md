---
slug: rusq-slackdump-cmd-slackdump-internal-mcp-assets-skills-slackdump-source
name: slackdump-source
tagline: Explains the different Slackdump sources structure.
summary: Databases were introduced in Slackdump version 3.1.
categories:
  - other
status: active
quality_percentile: 37
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: rusq/slackdump
  subpath: cmd/slackdump/internal/mcp/assets/skills/slackdump-source
  official_vendor: false
  license: AGPL-3.0
signals:
  stars: 2822
  last_commit: 2026-10-12T09:27:13Z
  stars_delta_7d: 102
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 2822
    - 2822
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: rusq/slackdump
  path: cmd/slackdump/internal/mcp/assets/skills/slackdump-source/SKILL.md
  branch: master
  fetched_at: 2026-10-14T14:55:00.992Z
  truncated: false
type: agent_skill
skill:
  skill_name: slackdump-source
  description: Explains the different Slackdump sources structure.
  folder_path: cmd/slackdump/internal/mcp/assets/skills/slackdump-source
  extra_files: []
tags: []
---

### Notes about source structure
#### Directory with database

Databases were introduced in Slackdump version 3.1.

Slackdump directory with database contains:
- an Sqlite3 database with the Slack workspace data, it is usually in the file
  `slackdump.sqlite`, unless renamed by the user afterwards.
- an optional `__uploads` directory with the files uploaded to the Slack workspace;
- an optional `__avatars` directory.

Fetch the current [archive command documentation][1] that contains the database
and directory structure description.

#### Standalone database
A user may choose to access just the slackdump database file. In this case
there will be no uploads or avatars, but the structure stays the same.

#### Chunk directory
Chunk directory preceded database archive format, and were introduced
in version 3.0 to address the shortcomings of export and dump formats, such as:
- high memory consumption during data aggregation
- inability to extend, for example, it would not be possible to store
  search results in these formats.

Chunk directory contains:
- a set of `*.json.gz` files.

The format and structure are described in the [chunk documentation][2]

#### Dump directory
Dump is the initial format of Slackdump since version 1.0.

It **WILL** contain one or more of the following files:
- `/[CHANNEL_ID].json` - messages from the conversation CHANNEL_ID.

It **MIGHT** contain additional metadata:
- `/[CHANNEL_ID]/*` - attachments from messages in conversation CHANNEL_ID.
  Each file is named: `[FILE_ID]-[original filename].[original extension]`
- `/channels.json` - raw combined output of the payload from channels.list calls
  (all channels in the dump)
- `/users.json` - raw combined output of the payload from users.list API calls
  (all users)
- `/workspace.json` - workspace information.

#### Export directory
Export is a reproduction of the native Slack export format with a *file storage
extension*, described in File storage types section below. Introduced in
version 2.0.

JSON structure in the ZIP/directory follows the Slack native format exactly,
but some newer features may be missing.

For the JSON structure see [Official slack Export description][3].

#### Export ZIP file and Dump ZIP file
The structure is exactly the same as Dump or Export directory, but instead of a
directory is uses a ZIP file as a container.

### File storage types
Native Slack exports are not supposed to store file attachments.  Slackdump works around this
by adding files to the export, and they can be stored in two different layouts (types):

- Standard: this is Slackdump's legacy storage format, introduced in version
  2.0 Files are stored in the `/[CHANNEL_ID]/attachments/` directory and have
  the same naming as Dump Attachments.
- Mattermost:  the "Mattermost" compatible storage format.  All attachments
  from all channels are stored in the `/__uploads/*` directory in the root of the
  directory. Full format is the following:
  ```
  /__uploads/[FILE_ID]/[original filename].[original extension]
  ```

[1]: https://raw.githubusercontent.com/rusq/slackdump/refs/heads/master/cmd/slackdump/internal/archive/assets/archive.md
[2]: https://raw.githubusercontent.com/rusq/slackdump/refs/heads/master/cmd/slackdump/internal/man/assets/chunk.md
[3]: https://slack.com/intl/en-au/help/articles/220556107-How-to-read-Slack-data-exports
