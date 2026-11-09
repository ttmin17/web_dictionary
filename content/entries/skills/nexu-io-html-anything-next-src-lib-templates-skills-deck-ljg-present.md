---
slug: nexu-io-html-anything-next-src-lib-templates-skills-deck-ljg-present
name: deck-ljg-present
tagline: 把 outline 1:1 铸成色块大字宣言 deck, 原文不动只做美化。三档主题 black / red / yellow
summary: "【模板: 宣言式演讲（Outline-Faithful）】"
categories:
  - media-creative
tags:
  - agent-skills
  - agentic
  - ai-agents
  - ai-design
status: active
quality_percentile: 70
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: nexu-io/html-anything
  subpath: next/src/lib/templates/skills/deck-ljg-present
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 9478
  last_commit: 2026-11-09T09:21:19Z
  stars_delta_7d: 365
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 9173
    - 9246
    - 9478
language: zh
needs_keys: false
prerequisites: []
readme_source:
  repo: nexu-io/html-anything
  path: next/src/lib/templates/skills/deck-ljg-present/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:49.668Z
  truncated: false
type: agent_skill
skill:
  skill_name: deck-ljg-present
  description: 把 outline 1:1 铸成色块大字宣言 deck, 原文不动只做美化。三档主题 black / red / yellow
  folder_path: next/src/lib/templates/skills/deck-ljg-present
  extra_files:
    - example.html
    - example.md
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: nexu-io-html-anything
---

【模板: 宣言式演讲（Outline-Faithful）】

【意图】把用户的 outline / markdown 1:1 视觉化为色块大字 manifesto deck。**不抽提、不重写、不重排、不浓缩**——只决定每一行/每一节渲染为哪一页。审美参考：Felipe Franco / BIG STUDIOS 的 manifesto 大字海报。

【铁律 — 全部违反必须重做】
- 标题不改字, 段落不改字, 列表不改字, 顺序不重排
- 唯一允许的"动"是**物理分页**（一段太长拆成多页）
- 不抽 manifesto / 不写新句子 / 不删内容 / 不放图片图标 / 不用过渡动画
- 一篇只用一个主题色（black / red / yellow 三选一）

【outline → 页面映射】

| 输入元素 | 输出页 |
|---|---|
| `# 一级标题` | 独占 **emphasis** 封面页（accent 底色, 通常单字/单短词） |
| `## 二级标题` | 独占 **theme** 页（大字标题独占一页） |
| `### 三级标题`+ | 独占 theme 页（字号自动降一档） |
| 段落（≤30字） | 单 theme 页 |
| 段落（30-80字, 多句号） | 每句一页（medium 档） |
| 段落（>80字） | 按 ~30 字一页拆, 末尾加 `⋯` |
| `- 列表项`（≤4） | 一页全展示, indent 按嵌套深度 0/1/2 |
| 列表 5-8 项 | 拆 2 页, 每页 3-4 项, 项数接近 |
| 列表 >8 项 | 拆多页, 每页 4 项 |
| 表格 ≤6 行 | 单页 |
| 表格 >6 行 | 拆多页, 每页保留表头 |
| `**强调**` / `` `code` `` | 自动 `hl: true` |
| `---` 分隔符 | 独立 **emphasis 休止页**（空 emphasis, 纯色块） |

**首末页自动 emphasis**：文档首段（如已是 `#` 则合并）+ 文档末段 = emphasis 开场 / 收束页。一级标题就是天然的章节断点, 不要为了凑节奏强行加 emphasis。

【主题色推断 — 一篇只能一个】

| 文档调性 / 标签 | theme | 默认页 | emphasis 页 | hl 色（仅 theme 页生效） |
|---|---|---|---|---|
| 沉思 / 论证 / 笔记（默认） | **black** | 黑底白字 | 红底白字 | 红 `#E63956` |
| 宣言 / 号召 / 演讲（含 `share` / `manifesto` / `keynote` / `talk` 标签或语气） | **red** | 红底白字 | 黑底白字 | 柔金黄 `#FFE082` |
| 反讽 / 警觉 / 批判（含 `critique` / `warn` / `rant`） | **yellow** | 黄底黑字 | 黑底白字 | 红 `#E63956` |

显式覆盖：用户写"用 red / 用 yellow / 用黑底"即按指令。无任何线索时默认 black。

【视觉规范 — 数值锁死】

色板（仅 4 色, 不许改 hex）：
```
--c-black:  #1A1A1A
--c-red:    #E63956
--c-yellow: #FFD400
--c-white:  #FFFFFF
--c-gold:   #FFE082
```

字体栈（必须用 ultra-bold 900, letter-spacing `-0.05em`）：
```
"Helvetica Neue", "Arial Black", "Inter", "PingFang SC", "Heiti SC", "STHeiti", -apple-system, sans-serif
font-weight: 900
```

字号档位（按本页**最长那一行**字符数, CJK 按 1.8 计权, 多行页降一档）：

| 档位 | 字符数 | font-size |
|---|---|---|
| single | ≤2 | `clamp(320px, 80vmin, 1100px)` |
| short | 3-6 | `clamp(240px, 55vmin, 780px)` |
| medium | 7-14 | `clamp(150px, 35vmin, 480px)` |
| long | 15-26 | `clamp(100px, 22vmin, 320px)` |
| xlong | 27+ | `clamp(64px, 14vmin, 200px)` |

排版：
- padding `6vmin 7vmin`, 让大字撑满边缘
- `.lines` 块在屏幕内水平居中, 但块内每行 **left-aligned**（消除右侧空白同时保 indent 错位）
- line-height `1.05`, 行间 gap `0.15em`
- 内容垂直居中
- 页脚：左下页码（`01 / 08`）+ 右下副标题, 13px monospace, opacity 0.5, uppercase, letter-spacing `0.12em`
- emphasis 页：背景换 `--acc-bg`, 字色换 `--acc-fg`, 行内 `.hl` 自动 `color: inherit`（emphasis 整页就是高亮）
- indent 档位：0 = `0`, 1 = `7vmin`, 2 = `16vmin`

【输出契约】

输出**单文件 HTML**, 完全自包含, inline CSS + inline JS, 直接在 iframe sandbox 里能跑。骨架照下面这个模板, 把 `SLIDES` 数组、`<title>`、`{{SUBTITLE}}`、`body[data-theme]` 填好即可。**不要外链 CDN, 不要外部资源**。

SLIDES 数组每项形态：
```js
// 默认 theme 页
{ lines: [ { indent: 0, chunks: [ {t: "前段"}, {t: "高亮词", hl: true}, {t: "后段"} ] } ] }
// emphasis 页（accent 底色, inline hl 自动忽略）
{ emphasis: true, lines: [ { indent: 0, chunks: [ {t: "AI"} ] } ] }
// 休止页 = emphasis + 空 lines
{ emphasis: true, lines: [] }
```

完整 HTML 骨架（agent 应**复用 CSS 与 JS 不要改**, 只填 SLIDES / title / subtitle / data-theme）：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title><!-- 文档标题 --></title>

</head>
<body data-theme="red"><!-- black|red|yellow -->
<div class="stage" id="stage"></div>
<div class="pager" id="pager">01 / 01</div>
<div class="subtitle" id="subtitle"><!-- 副标题 / 品牌, 可空 --></div>

</body>
</html>
```

【调用流程 — agent 内部】
1. 读用户内容（markdown / outline / 纯文本）
2. 按上面表格做 **outline → slides 数组** 映射, 不抽提不重写
3. 推断 theme（标签 > 语气 > 默认 black）
4. 复用骨架, 替换 `<title>` / `data-theme` / `<div id="subtitle">` 内容 / `SLIDES` 数组
5. 一次性输出整个 HTML 文档

【品味准则】
- outline 是真理, skill 是渲染器
- 一级标题 = emphasis 封面（天然章节断点）
- 二级标题 = 独占 theme 页（给标题应有的重量）
- 列表错位靠 indent 0/1/2 体现嵌套深度
- `**强调**` 自动 hl
- 拆页保持视觉一致性（同源块字号/缩进对齐）
- 左对齐不居中——这是 manifesto 美学的灵魂

【禁区】
- 不抽 manifesto（不要"找钉子", 作者已经写好了 outline）
- 不写新句子、不重组顺序、不删内容
- 不放图片 / 不放图标 / 不加过渡动画
- 不在 emphasis 页用 inline hl（emphasis 整页就是高亮）
- 不混用多个 theme（一篇一个气质）
- 不擅自加 emphasis（只有一级标题 / 首末页 / 分隔符）

【致谢】
本 skill 改编自 [lijigang/ljg-skills · ljg-present](https://github.com/lijigang/ljg-skills/tree/md/skills/ljg-present)（v3.0.0）。原版输出多主题包含 cyber-hacker 模式与 PNG 投影; html-anything 版只保留 3 主题 + 单文件 HTML 输出。审美灵感继续指向 Felipe Franco / BIG STUDIOS 的 manifesto 字体海报。
