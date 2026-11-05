---
slug: makecindy-cindy-apps-desktop-resources-bot-packages-ad-spend-watch-0-5-2-skills-ad-spend-watch-evidence
name: ad-spend-watch-evidence
tagline: 对用户提供的台账行套用门槛和最小样本规则，输出越线项；缺项保持未知，不联网、不估算、不操作广告账户。
summary: 输入输出示例见 templates/input.json 与
  templates/contract.md。用户要求对已提供数据做本地处理时，先检查脚本，再从stdin传JSON运行：
categories:
  - productivity-ops
tags:
  - ai-agent
  - ai-assistant
  - android
  - claude-code
status: active
quality_percentile: 76
selection_reason: quality_percentile
first_seen: 2026-11-02
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: makecindy/cindy
  subpath: apps/desktop/resources/bot-packages/ad-spend-watch/0.5.2/skills/ad-spend-watch-evidence
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 9318
  last_commit: 2026-11-05T13:08:04Z
  stars_delta_7d: 616
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 9318
language: zh
needs_keys: false
prerequisites: []
readme_source:
  repo: makecindy/cindy
  path: apps/desktop/resources/bot-packages/ad-spend-watch/0.5.2/skills/ad-spend-watch-evidence/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:12:57.380Z
  truncated: false
type: agent_skill
skill:
  skill_name: ad-spend-watch-evidence
  description: 对用户提供的台账行套用门槛和最小样本规则，输出越线项；缺项保持未知，不联网、不估算、不操作广告账户。
  folder_path: apps/desktop/resources/bot-packages/ad-spend-watch/0.5.2/skills/ad-spend-watch-evidence
  extra_files:
    - scripts/spend_ledger.py
    - templates/contract.md
    - templates/input.json
  pack_total_skills: 25
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: makecindy-cindy
---

# 原创离线辅助检查
对用户提供的台账行套用门槛和最小样本规则，输出越线项；缺项保持未知，不联网、不估算、不操作广告账户。

输入输出示例见 templates/input.json 与 templates/contract.md。用户要求对已提供数据做本地处理时，先检查脚本，再从stdin传JSON运行：

    python3 scripts/spend_ledger.py < selected-input.json

脚本只用Python 3.10+标准库，不访问网络/Home，不写文件，不执行子进程。安装与打包不会执行它。成功exit0，输入结构/引用错误exit2；语义缺口在输出字段中保持可见。输入≤1MiB，最多10000条；所有示例都是合成数据。输出不是凭证、授权、测试或真实连接证明。
