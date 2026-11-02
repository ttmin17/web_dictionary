---
slug: zju-real-easel-skills-builtin-doc-convert
name: doc-convert
tagline: 把 Markdown 文稿排版并转换为 HTML、可打印 PDF 或长图 PNG。当用户说“Markdown/MD 转
  HTML/PDF/图片、文章导出长图、MD 排版/渲染”时使用。仅处理 Markdown；DOCX/PPT 不在范围内，层级大纲转脑图用 mindmap。
summary: "- 输入：Markdown 文件（支持标题、列表、表格、代码块、引用、图片等）。 - 输出（outputs/主题名/）：按后缀 .html
  / .pdf / .png（长图）。"
categories:
  - productivity-ops
tags:
  - content-automation
  - content-creation
  - content-generation
  - openclaw
status: active
quality_percentile: 92
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: ZJU-REAL/Easel
  subpath: skills/builtin/doc-convert
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 4323
  last_commit: 2026-11-02T08:18:55Z
  stars_delta_7d: 233
  stars_growth_pct: 5.7
  trending_score: 246.27
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3567
    - 3844
    - 4090
    - 4323
language: zh
needs_keys: false
prerequisites: []
readme_source:
  repo: ZJU-REAL/Easel
  path: skills/builtin/doc-convert/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:38.013Z
  truncated: false
type: agent_skill
skill:
  skill_name: doc-convert
  description: 把 Markdown 文稿排版并转换为 HTML、可打印 PDF 或长图 PNG。当用户说“Markdown/MD 转
    HTML/PDF/图片、文章导出长图、MD 排版/渲染”时使用。仅处理 Markdown；DOCX/PPT 不在范围内，层级大纲转脑图用
    mindmap。
  folder_path: skills/builtin/doc-convert
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: zju-real-easel
---

# Markdown 格式转换 / 排版
> 把 Markdown 排版成 HTML / PDF / 长图 PNG。走 `skills/shared/scripts/doc_convert.py`
> （python-markdown 排版 + Chromium 打印/截图）。

> 思维导图见 mindmap；公众号专属排版见 skill-wechat-publisher；卡片/海报见 card-*/poster-hero。

## 输入 / 输出

- 输入：Markdown 文件（支持标题、列表、表格、代码块、引用、图片等）。
- 输出（`outputs/主题名/`）：按后缀 `.html` / `.pdf` / `.png`（长图）。

## 执行

脚本路径（相对项目根）：`skills/shared/scripts/doc_convert.py`（`convert -h`）。

```bash
# 转干净 HTML（可读排版 + CJK 字体）
python skills/shared/scripts/doc_convert.py convert -i article.md -o outputs/主题名/a.html

# 转 PDF（A4 可打印，适合存档/发送）
python skills/shared/scripts/doc_convert.py convert -i article.md -o outputs/主题名/a.pdf

# 转长图 PNG（适合发不支持 MD 的平台/朋友圈存档）
python skills/shared/scripts/doc_convert.py convert -i article.md -o outputs/主题名/a.png --width 800
```

## 前置

- MD→HTML：需 `pip install markdown`。
- MD→PDF/PNG：需 playwright + chromium（`playwright install chromium`）。

## 规则

1. 长图宽度 `--width` 按平台调（朋友圈/小红书 ~750-1080）；正文宽度 `--page-width` 控制 HTML/PDF 版心。
2. 图片用相对/绝对可访问路径，渲染时要能加载到。
3. 需要 DOCX/PPT/富交互排版时本 SKILL 不覆盖（提示用 pandoc 或对应平台工具）。
4. 产物统一进 `outputs/主题名/`。

## 参考来源

python-markdown（含 extra/tables/fenced_code/toc 扩展）做 MD→HTML，Chromium 无头
`page.pdf()`/`screenshot(full_page)` 出 PDF/长图，替代 pandoc 完成最常用的 MD 排版分发需求。
