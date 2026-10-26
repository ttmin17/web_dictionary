---
slug: davepoon-buildwithclaude-plugins-all-skills-skills-skill-share
name: share
tagline: A skill that creates new Claude skills and automatically shares them on
  Slack using Rube for seamless team collaboration and skill discovery.
summary: "Use this skill when you need to: - Create new Claude skills with
  proper structure and metadata - Generate skill packages ready for distribution
  - Automatically share created skills on Slack channels for team visibilit..."
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
  subpath: plugins/all-skills/skills/skill-share
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
  path: plugins/all-skills/skills/skill-share/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.596Z
  truncated: false
type: agent_skill
skill:
  skill_name: share
  description: A skill that creates new Claude skills and automatically shares
    them on Slack using Rube for seamless team collaboration and skill
    discovery.
  folder_path: plugins/all-skills/skills/skill-share
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

## When to use this skill

Use this skill when you need to:
- **Create new Claude skills** with proper structure and metadata
- **Generate skill packages** ready for distribution
- **Automatically share created skills** on Slack channels for team visibility
- **Validate skill structure** before sharing
- **Package and distribute** skills to your team

Also use this skill when:
- **User says he wants to create/share his skill** 

This skill is ideal for:
- Creating skills as part of team workflows
- Building internal tools that need skill creation + team notification
- Automating the skill development pipeline
- Collaborative skill creation with team notifications

## Key Features

### 1. Skill Creation
- Creates properly structured skill directories with SKILL.md
- Generates standardized scripts/, references/, and assets/ directories
- Auto-generates YAML frontmatter with required metadata
- Enforces naming conventions (hyphen-case)

### 2. Skill Validation
- Validates SKILL.md format and required fields
- Checks naming conventions
- Ensures metadata completeness before packaging

### 3. Skill Packaging
- Creates distributable zip files
- Includes all skill assets and documentation
- Runs validation automatically before packaging

### 4. Slack Integration via Rube
- Automatically sends created skill information to designated Slack channels
- Shares skill metadata (name, description, link)
- Posts skill summary for team discovery
- Provides direct links to skill files

## How It Works

1. **Initialization**: Provide skill name and description
2. **Creation**: Skill directory is created with proper structure
3. **Validation**: Skill metadata is validated for correctness
4. **Packaging**: Skill is packaged into a distributable format
5. **Slack Notification**: Skill details are posted to your team's Slack channel

## Example Usage

```
When you ask Claude to create a skill called "pdf-analyzer":
1. Creates /skill-pdf-analyzer/ with SKILL.md template
2. Generates structured directories (scripts/, references/, assets/)
3. Validates the skill structure
4. Packages the skill as a zip file
5. Posts to Slack: "New Skill Created: pdf-analyzer - Advanced PDF analysis and extraction capabilities"
```

## Integration with Rube

This skill leverages Rube for:
- **SLACK_SEND_MESSAGE**: Posts skill information to team channels
- **SLACK_POST_MESSAGE_WITH_BLOCKS**: Shares rich formatted skill metadata
- **SLACK_FIND_CHANNELS**: Discovers target channels for skill announcements

## Requirements

- Slack workspace connection via Rube
- Write access to skill creation directory
- Python 3.7+ for skill creation scripts
- Target Slack channel for skill notifications
