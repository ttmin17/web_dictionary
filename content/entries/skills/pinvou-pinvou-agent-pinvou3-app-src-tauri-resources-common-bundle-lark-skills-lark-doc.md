---
slug: pinvou-pinvou-agent-pinvou3-app-src-tauri-resources-common-bundle-lark-skills-lark-doc
name: lark-doc
tagline: 【何时用:仅当用户明确指向飞书/Lark(发到飞书、飞书文档等)时使用;泛指做个文档或PPT或表格或方案默认走本地工具,不要误用飞书】飞书云文档(Docx/Wiki)与思维笔记内容操作:读取、创建、编辑,插入/下载图片附件,查询/回滚历史版本。用户给出文档URL/token(doubao.com
  /
summary: CRITICAL：先判断场景，再读取该场景的参考文件；不要在任务开始时一次性读取全部参考文件。每个文件只在首次进入对应阶段时读取一次。
categories:
  - agent-frameworks
tags:
  - agent-client-protocol
  - agent-skills
  - agentic-ai
  - ai-agent
status: active
quality_percentile: 83
selection_reason: quality_percentile
first_seen: 2026-11-16
last_updated: 2026-11-16T09:17:13.266Z
source:
  kind: github_repo
  repo: Pinvou/pinvou-agent
  subpath: pinvou3-app/src-tauri/resources/common/bundle/lark-skills/lark-doc
  official_vendor: false
  license: MIT
signals:
  stars: 3034
  last_commit: 2026-11-16T09:05:06Z
  stars_delta_7d: 185
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 3034
language: zh
needs_keys: false
prerequisites: []
readme_source:
  repo: Pinvou/pinvou-agent
  path: pinvou3-app/src-tauri/resources/common/bundle/lark-skills/lark-doc/SKILL.md
  branch: main
  fetched_at: 2026-11-16T09:16:53.950Z
  truncated: false
type: agent_skill
skill:
  skill_name: lark-doc
  description: 【何时用:仅当用户明确指向飞书/Lark(发到飞书、飞书文档等)时使用;泛指做个文档或PPT或表格或方案默认走本地工具,不要误用飞书】飞书云文档(Docx/Wiki)与思维笔记内容操作:读取、创建、编辑,插入/下载图片附件,查询/回滚历史版本。用户给出文档URL/token(doubao.com
    /docx/、/wiki/)按路径/token 路由;`/page/<token>` 是妙搭应用非云文档;内嵌表格/多维表格提取 token 切对应
    skill;画板无技能,CLI 直连。评论走 lark-drive;表格/Base 内部操作不在本 skill。
  folder_path: pinvou3-app/src-tauri/resources/common/bundle/lark-skills/lark-doc
  extra_files:
    - references/genres/business-analysis.md
    - references/genres/data-report.md
    - references/genres/email.md
    - references/genres/execution-plan.md
    - references/genres/formal-doc.md
    - references/genres/meeting-minutes.md
    - references/genres/memo-brief.md
    - references/genres/official-redhead.md
    - references/genres/prd.md
    - references/genres/proposal.md
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: pinvou-pinvou-agent
---

# docs
## 场景与 Shortcut 路由

**CRITICAL：先判断场景，再读取该场景的参考文件；不要在任务开始时一次性读取全部参考文件。每个文件只在首次进入对应阶段时读取一次。**

**身份：文档操作推荐显式指定 `--as user`。**

**本地文件引用统一遵循文件访问权限：CWD 内优先使用 `@./相对路径`，其他目录使用 `@绝对路径`。XML 内的相对资源路径先查 CWD；仅文件不存在时再查源 XML 文件所在目录，同名文件以 CWD 为准。内联内容、stdin、在线文档没有源文件目录，不执行回退。**

### 文档内容

- **读取 / 摘要 — [`+fetch`](https://github.com/Pinvou/pinvou-agent/blob/main/pinvou3-app/src-tauri/resources/common/bundle/lark-skills/lark-doc/references/lark-doc-fetch.md)**：先读参考再获取文档。
- **从零创作 — [`创建工作流`](https://github.com/Pinvou/pinvou-agent/blob/main/pinvou3-app/src-tauri/resources/common/bundle/lark-skills/lark-doc/references/lark-doc-create-workflow.md)**：先完整执行创建工作流，**简单任务不是跳过的理由**；
- **导入 / 空文档 — [`+create`](https://github.com/Pinvou/pinvou-agent/blob/main/pinvou3-app/src-tauri/resources/common/bundle/lark-skills/lark-doc/references/lark-doc-create.md)**：仅创建空文档或原样导入用户提供的完整内容时，跳过创建工作流。
- **编辑 / block 直达链接 — [`+update`](https://github.com/Pinvou/pinvou-agent/blob/main/pinvou3-app/src-tauri/resources/common/bundle/lark-skills/lark-doc/references/lark-doc-update.md)**：语义改写、润色、重组、补写或排版均按 update 参考完成。

### 辅助能力

- **草稿初始化、解析与统计 — [`+script`](https://github.com/Pinvou/pinvou-agent/blob/main/pinvou3-app/src-tauri/resources/common/bundle/lark-skills/lark-doc/references/lark-doc-script.md)**：支持解析文档 URL / token 与本地 XML，统计字数并返回字符诊断；不支持 Markdown 输入。
- **历史版本 — [`+history-list` / `+history-revert` / `+history-revert-status`](https://github.com/Pinvou/pinvou-agent/blob/main/pinvou3-app/src-tauri/resources/common/bundle/lark-skills/lark-doc/references/lark-doc-history.md)**：查询、回滚文档历史版本或检查回滚任务状态。

### 资源、画板与思维笔记

- **插入本地素材 — [`+media-insert`](https://github.com/Pinvou/pinvou-agent/blob/main/pinvou3-app/src-tauri/resources/common/bundle/lark-skills/lark-doc/references/lark-doc-media-insert.md)**：在文末插入本地图片或文件。
- **预览素材 — [`+media-preview`](https://github.com/Pinvou/pinvou-agent/blob/main/pinvou3-app/src-tauri/resources/common/bundle/lark-skills/lark-doc/references/lark-doc-media-preview.md)**：预览文档或评论中的图片、附件或素材。
- **下载素材 — [`+media-download`](https://github.com/Pinvou/pinvou-agent/blob/main/pinvou3-app/src-tauri/resources/common/bundle/lark-skills/lark-doc/references/lark-doc-media-download.md)**：下载文档中的图片、附件、素材或画板缩略图。
- **Docx 封面 — [`+resource-download` / `+resource-update` / `+resource-delete`](https://github.com/Pinvou/pinvou-agent/blob/main/pinvou3-app/src-tauri/resources/common/bundle/lark-skills/lark-doc/references/lark-doc-resource-cover.md)**：下载、更新或删除 Docx 封面。
- **画板 — [`画板工作流`](https://github.com/Pinvou/pinvou-agent/blob/main/pinvou3-app/src-tauri/resources/common/bundle/lark-skills/lark-doc/references/lark-doc-whiteboard.md)**：创建或更新画板时先读取工作流；更新已有画板必须复用现有 token，禁止新建空白画板。lark-whiteboard skill 未随包收录，写入用 `lark-cli whiteboard +update`（用法以 `--help` 为准）。
- **思维笔记 — `mindnotes`**：已有思维笔记走 [`思维笔记链路`](https://github.com/Pinvou/pinvou-agent/blob/main/pinvou3-app/src-tauri/resources/common/bundle/lark-skills/lark-doc/references/lark-doc-mindnote.md)。新建思维笔记暂无专门的 docs/mindnotes 创建命令：要新建到知识库，用 `wiki +node-create --obj-type mindnote`（见 [`lark-wiki-node-create.md`](https://github.com/Pinvou/pinvou-agent/blob/main/pinvou3-app/src-tauri/resources/common/bundle/lark-skills/lark-doc/../lark-wiki/references/lark-wiki-node-create.md)），创建后按思维笔记链路维护节点；思维笔记不是画板（whiteboard），不要路由到画板工作流。

### 认证与 Scope

执行 Shortcut 时，不预读 [`lark-shared`](https://github.com/Pinvou/pinvou-agent/blob/main/pinvou3-app/src-tauri/resources/common/bundle/lark-skills/lark-doc/../lark-shared/SKILL.md) 或预跑 `auth status --verify`；仅遇到未认证、token / 身份或 scope 错误时读取该 Skill，修复后重试。认证、身份或 scope 管理请求则直接使用该 Skill。

## 不在本 Skill 范围

- **Drive 文件级操作**：找文档、导入导出、云空间文件上传 / 下载 / 权限管理 → [`lark-drive`](https://github.com/Pinvou/pinvou-agent/blob/main/pinvou3-app/src-tauri/resources/common/bundle/lark-skills/lark-doc/../lark-drive/SKILL.md)。复制文档、创建副本或另存为副本时，按其指引使用 `lark-cli drive +copy`（复制到知识库用 `wiki +node-copy`）；不要用 `docs +fetch` + `docs +create` 重建正文。
- **独立评论操作**：添加、分页查看、回复评论或增删 reaction → [`lark-drive`](https://github.com/Pinvou/pinvou-agent/blob/main/pinvou3-app/src-tauri/resources/common/bundle/lark-skills/lark-doc/../lark-drive/SKILL.md)；只需紧凑评论上下文时，直接使用默认 JSON 响应的 `docs +fetch`。
- **Drive 原生文件的历史版本**：`docx` 等在线文档的历史版本走本 skill 的 `+history-*`；但 Drive 二进制文件（`type=file`，如上传的附件）的历史版本查询 / 下载 / 回滚 / 删除 → [`lark-drive`](https://github.com/Pinvou/pinvou-agent/blob/main/pinvou3-app/src-tauri/resources/common/bundle/lark-skills/lark-doc/../lark-drive/SKILL.md) 的 `+version-*`，不走本 skill。
