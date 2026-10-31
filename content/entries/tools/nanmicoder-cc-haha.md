---
slug: nanmicoder-cc-haha
type: agent_tool
name: cc-haha
tagline: "本地优先的跨平台 Claude Code / AI Agent 桌面工作台：多 Agent 协作、Git Worktree、代码
  Diff、技能市场、多模型、Computer Use、桌面宠物；支持微信、飞书、钉钉及 H5 等远程访问。 | Local-first Claude
  Code / AI "
summary: cc-haha 是一个桌面端 Claude Code 工作台：多会话与全局搜索、分支 / Worktree 启动、Diff
  审阅、内置浏览器预览、图形化权限审批、模型自选（Claude / ChatGPT / Grok / 预设 / 本地端点）、图片生成、MCP 与
  SubAgent 可视化管理、Agent Teams 协作工作台、动态 Workflow 编排、模型请求追踪、Computer
  Use、技能市场、多主题、桌面宠物、H...
categories:
  - productivity-ops
tags:
  - git
status: active
quality_percentile: 100
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: NanmiCoder/cc-haha
  official_vendor: false
  license: MIT
signals:
  stars: 14994
  last_commit: 2026-10-13T14:57:24Z
  stars_delta_7d: 550
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 14893
    - 14994
    - 14994
language: zh
needs_keys: false
prerequisites:
  - Node.js >= 18
readme_source:
  repo: NanmiCoder/cc-haha
  path: README.md
  branch: main
  fetched_at: 2026-10-14T14:55:15.751Z
  truncated: false
tool:
  subcategory: desktop_ui
  install_command: git clone https://github.com/NanmiCoder/cc-haha.git
  runtime: node
  execution_mode: local
  has_mcp_support: true
  mcp_launch:
    transport: stdio
    command: npx
    args:
      - -y
      - claude-code-local
    env_vars: []
    confidence: manifest
---

# cc-haha
<p align="center">
  <img src="https://raw.githubusercontent.com/NanmiCoder/cc-haha/main/docs/images/readme-cover-zh.jpg" alt="cc-haha — Claude Code 开源桌面端" width="960">
</p>

<div align="center">

[![GitHub Stars](https://img.shields.io/github/stars/NanmiCoder/cc-haha?style=social)](https://github.com/NanmiCoder/cc-haha/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/NanmiCoder/cc-haha?style=social)](https://github.com/NanmiCoder/cc-haha/network/members)
[![GitHub Issues](https://img.shields.io/github/issues/NanmiCoder/cc-haha)](https://github.com/NanmiCoder/cc-haha/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/NanmiCoder/cc-haha)](https://github.com/NanmiCoder/cc-haha/pulls)
[![License](https://img.shields.io/badge/License-MIT-blue)](https://github.com/NanmiCoder/cc-haha/blob/main/LICENSE)
[![中文](https://img.shields.io/badge/🇨🇳_简体中文-当前-blue)](https://raw.githubusercontent.com/NanmiCoder/cc-haha/main/README.md)
[![English](https://img.shields.io/badge/🇺🇸_English-Available-green)](https://raw.githubusercontent.com/NanmiCoder/cc-haha/main/README.en.md)
[![Docs](https://img.shields.io/badge/📖_文档站点-Visit-FF7A00)](https://cchaha.ai)

**简体中文** · [English](https://github.com/NanmiCoder/cc-haha/blob/main/README.en.md)

</div>

cc-haha 是一个**桌面端 Claude Code 工作台**：多会话与全局搜索、分支 / Worktree 启动、Diff 审阅、内置浏览器预览、图形化权限审批、模型自选（Claude / ChatGPT / Grok / 预设 / 本地端点）、图片生成、MCP 与 SubAgent 可视化管理、Agent Teams 协作工作台、动态 Workflow 编排、模型请求追踪、Computer Use、技能市场、多主题、桌面宠物、H5 远程访问、IM 接入和定时任务，集中在一个 macOS / Windows / Linux APP 里。**在 macOS 上，Computer Use 能操作其他应用，同时不占用你的真实鼠标和键盘。**

<p align="center"><b>白金赞助商 · Modelflare</b></p>

<p align="center">
  <a href="https://modelflare.dev/sign-up?utm_source=github&amp;utm_campaign=cchaha">
    <img src="https://raw.githubusercontent.com/NanmiCoder/cc-haha/main/docs/images/sponsors/modelflare-banner-zh.png" width="720" alt="Modelflare：满血稳定不掺水，低成本享受全球 SOTA 模型">
  </a>
</p>

<p><sub>感谢 <a href="https://modelflare.dev/sign-up?utm_source=github&amp;utm_campaign=cchaha">Modelflare</a> 赞助本项目！Modelflare：满血稳定不掺水，低成本享受全球 SOTA 模型。站点由美国 LLC 主体 Havenbyte LLC 运营，支持 GPT、Claude、Gemini、Grok 等主流模型和常用兼容协议，还支持 40 多种图片和视频模型。</sub></p>

<p><sub><b>缓存补偿是一大亮点：</b>部分 OpenAI 价格优先、稳定和高级分组提供每日 65%、75%、85% 的缓存命中率保障，符合条件的请求没达到目标的，平台补偿差额，结算后可在用量看板查看。</sub></p>

<p><sub><b>特惠活动：</b>单笔充值 US$20 即可解锁 0.015 倍价格倍率的 GPT 特惠分组，单笔充值 US$50 即可解锁 0.03 倍价格倍率的 Claude 特惠分组。通过 <a href="https://modelflare.dev/sign-up?utm_source=github&amp;utm_campaign=cchaha">专属链接注册</a>即可参与。</sub></p>

<p align="center">
  <a href="#桌面端预览">桌面端预览</a> · <a href="#安装桌面端">安装桌面端</a> · <a href="#桌面端亮点">桌面端亮点</a> · <a href="#更多文档">更多文档</a> · <a href="#赞助与合作">赞助与合作</a> · <a href="#用户交流群">用户交流群</a>
</p>

---## 桌面端预览

<p align="center">
  <a href="https://github.com/NanmiCoder/cc-haha/releases"><img src="https://img.shields.io/badge/⬇_下载桌面端-macOS_%7C_Windows_%7C_Linux-FF7A00?style=for-the-badge" alt="下载桌面端"></a>
</p>

<p align="center">
  <a href="https://cdn.zizhi1.com/cc-haha/site/cchaha-film-1080p-v2.mp4"><img src="https://raw.githubusercontent.com/NanmiCoder/cc-haha/main/docs/images/readme-film-cover-zh-CN.webp" width="720" alt="观看 62 秒 cc-haha 宣传片"></a>
  <br><sub>由 Claude 制作的 62 秒宣传片，无旁白，点击在浏览器中播放。</sub>
</p>

从 0 开始：[下载安装](https://github.com/NanmiCoder/cc-haha/blob/main/docs/start/install.md) → [连接模型](https://github.com/NanmiCoder/cc-haha/blob/main/docs/start/models.md) → [跑通第一条会话](https://github.com/NanmiCoder/cc-haha/blob/main/docs/start/first-session.md) → [设置指南](https://github.com/NanmiCoder/cc-haha/blob/main/docs/desktop/settings.md) → [实战案例](https://github.com/NanmiCoder/cc-haha/blob/main/docs/cases/index.md)。想体验不抢鼠标的跨应用操作，接着看 [Computer Use 指南](https://github.com/NanmiCoder/cc-haha/blob/main/docs/desktop/computer-use.md)。

---## 赞助与合作

本项目由个人利用业余时间维护，欢迎企业或个人赞助支持持续开发，也可洽谈定制、集成或商务合作。

<table>
  <thead>
    <tr>
      <th width="220">赞助商</th>
      <th align="left">介绍</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center" valign="middle">
        <a href="https://aruhub.com/sign-up?aff=Z54g">
          <img src="https://raw.githubusercontent.com/NanmiCoder/cc-haha/main/docs/images/sponsors/aruhub-logo.png" width="180" alt="AruHub">
        </a>
      </td>
      <td valign="middle">
        感谢 <a href="https://aruhub.com/sign-up?aff=Z54g">AruHub</a> 对本项目的赞助！AruHub 专注为开发者提供长期稳定的主力 API 上游服务。面向 Codex / Claude Code 等高频 AI Coding 场景，提供 GPT 企业分组官方接口、Claude 稳定企业分组，适合长时间持续调用；同时覆盖 GPT、Claude 等主流模型。Image 2 / 2.5 全天稳定供应，低至 0.04 元/张。按量付费，支持企业大用量、开发票及退款。通过 <a href="https://aruhub.com/sign-up?aff=Z54g">专属链接</a>注册即送 1 美元全模型通用额度，不限制模型使用。
      </td>
    </tr>
  </tbody>
</table>

📧 **联系邮箱**：relakkes@gmail.com

---## 安装桌面端

1. 前往 [Releases](https://github.com/NanmiCoder/cc-haha/releases) 下载 macOS / Windows / Linux 桌面端安装包。
2. 首次启动后，在桌面端设置里配置模型提供商、API Key 和默认模型。
3. 正式 macOS Release 需要经过签名和公证；如果安装的是 draft/unsigned 临时包，首次打开可能仍需手动放行。Windows 未签名安装包可能出现 SmartScreen 提示，点「更多信息」→「仍要运行」即可。详见 [桌面端安装指南](https://github.com/NanmiCoder/cc-haha/blob/main/docs/start/install.md)。

发布可信度与隐私：[Code signing policy](https://github.com/NanmiCoder/cc-haha/blob/main/docs/start/code-signing.md) · [隐私与联网说明](https://github.com/NanmiCoder/cc-haha/blob/main/docs/start/privacy.md)

## 从源码启动 CLI

适合想调试底层 CLI、服务端或自行开发的用户：

```bash
bun install
cp .env.example .env
./bin/claude-haha
```

更多配置见 [环境变量](https://github.com/NanmiCoder/cc-haha/blob/main/docs/cli/env.md) 和 [命令行安装与启动](https://github.com/NanmiCoder/cc-haha/blob/main/docs/cli/index.md)。

---## 用户交流群

使用过程中有问题、想反馈 Bug，或者想看看别人怎么用，欢迎扫码加入 cc-haha 企业微信用户群。也可以直接来 [Issues](https://github.com/NanmiCoder/cc-haha/issues) 提问。企业定制 / 私有化部署 / Agent 定制需求，请联系作者 [NanmiCoder](https://github.com/NanmiCoder)。

<p align="center">
  <img src="https://raw.githubusercontent.com/NanmiCoder/cc-haha/main/docs/images/community/wechat-group-qr.png" width="300" alt="cc-haha 企业微信用户群二维码">
</p>

---## ☕ 请作者喝杯咖啡

如果这个项目对您有帮助，欢迎打赏支持，您的每一份支持都是我持续更新的动力 ❤️

<table>
<tr>
<td align="center" width="33%">
<img src="https://raw.githubusercontent.com/NanmiCoder/cc-haha/main/docs/images/donate/wechat_pay.jpeg" width="250" alt="微信赞赏"><br>
<b>微信赞赏</b>
</td>
<td align="center" width="33%">
<img src="https://raw.githubusercontent.com/NanmiCoder/cc-haha/main/docs/images/donate/zfb_pay.png" width="250" alt="支付宝"><br>
<b>支付宝</b>
</td>
<td align="center" width="33%">
<a href="https://buymeacoffee.com/relakkes" target="_blank">
<img src="https://raw.githubusercontent.com/NanmiCoder/cc-haha/main/docs/images/donate/bmc_button.png" width="250" alt="Buy Me a Coffee">
</a><br>
<b>Buy Me a Coffee</b>
</td>
</tr>
</table>

---## 桌面端亮点

- **多会话工作台**：标签页、项目切换、终端入口和会话历史集中管理，侧边栏宽度可拖拽。
- **全局搜索**：按 Cmd+K 跨所有会话全文搜索，一键跳到命中位置。
- **分支 / Worktree 启动**：新会话可以选择仓库分支，并决定用当前工作树还是隔离 Worktree。
- **改动逐个文件审阅**：右侧工作区列出本轮改动，点开就是带语法高亮的 Diff，整轮可撤销。
- **内置浏览器预览**：Agent 刚改完的页面直接在应用内渲染，登录态和 Cookie 真实可用。
- **五档权限模式**：从「询问权限」到「跳过权限」，危险命令、工具调用和 AI 反问都在桌面端审批。
- **模型自选**：Claude / ChatGPT / Grok 官方账号可直接登录；DeepSeek、Kimi、智谱 GLM 等第三方 API 有现成预设；LM Studio、Ollama 的本地模型也接得上。
- **图片生成**：聊天中直接生成和编辑图片——ChatGPT / Grok 授权登录即可使用，也支持接入任意 OpenAI 兼容的 Images API。
- **MCP 图形化管理**：界面化增删改 MCP Server，支持 STDIO / Streamable HTTP / SSE 三种传输方式与项目私有、共享、全局三种作用域。
- **六套配色主题**：纯白、纸墨、经典暖色、青瓷、墨夜、墨夜蓝，可跟随系统深浅色自动切换。
- **技能市场**：发现、预览、安装 ClawHub / SkillHub 的第三方技能，来源和安全状态摆在明处。
- **会话活动面板**：集中查看任务进度、后台任务、SubAgent 与来源。
- **可视化 SubAgent 管理**：图形界面创建和调校子代理，选择模型、工具与权限模式。
- **Agent Teams 协作工作台**：桌面端可视化多 Agent 协作团队——成员、任务、通信流和依赖泳道一目了然。
- **动态 Workflow 编排**：模型当场编写并运行编排脚本，并发或流水线调度多个子代理，支持阶段视图、中断与断点续跑。
- **模型请求追踪**：本地记录每轮模型请求的状态与耗时，可搜索筛选，快速定位卡死或失败调用。
- **Computer Use**：让 Agent 在授权后截图、点击、输入并控制桌面应用；macOS 原生运行时不占用你的真实鼠标和键盘。
- **桌面宠物**：搭搭、弧弧、补补、回回随任务状态换动作，也能自己做一只（默认关闭）。
- **H5 远程访问**：扫码用手机浏览器接入当前会话，锁屏切后台都不打断正在跑的任务。
- **IM 接入**：通过 Telegram / 飞书 / 微信 / 钉钉 / WhatsApp / 企业微信 / QQ / Slack 远程对话、切换项目和审批权限。
- **定时任务与用量统计**：创建计划任务在独立会话执行，并查看本机 Token 使用趋势。

---## 更多文档

完整文档站：<https://cchaha.ai>

| 分区 | 文档 |
|------|------|
| **开始使用** | [这是什么](https://github.com/NanmiCoder/cc-haha/blob/main/docs/start/index.md) · [下载与安装](https://github.com/NanmiCoder/cc-haha/blob/main/docs/start/install.md) · [连接模型服务](https://github.com/NanmiCoder/cc-haha/blob/main/docs/start/models.md) · [跑通第一条会话](https://github.com/NanmiCoder/cc-haha/blob/main/docs/start/first-session.md) · [故障排查](https://github.com/NanmiCoder/cc-haha/blob/main/docs/start/troubleshooting.md) |
| **桌面端功能** | [功能总览](https://github.com/NanmiCoder/cc-haha/blob/main/docs/desktop/index.md) · [Computer Use](https://github.com/NanmiCoder/cc-haha/blob/main/docs/desktop/computer-use.md) · [桌面宠物](https://github.com/NanmiCoder/cc-haha/blob/main/docs/desktop/pets.md) · [手机 H5 与 IM 接力](https://github.com/NanmiCoder/cc-haha/blob/main/docs/desktop/remote.md) |
| **IM 接入** | [总览与配对流程](https://github.com/NanmiCoder/cc-haha/blob/main/docs/im/index.md) · [飞书](https://github.com/NanmiCoder/cc-haha/blob/main/docs/im/feishu.md) · [Telegram](https://github.com/NanmiCoder/cc-haha/blob/main/docs/im/telegram.md) · [微信](https://github.com/NanmiCoder/cc-haha/blob/main/docs/im/wechat.md) · [钉钉](https://github.com/NanmiCoder/cc-haha/blob/main/docs/im/dingtalk.md) · [WhatsApp](https://github.com/NanmiCoder/cc-haha/blob/main/docs/im/whatsapp.md) · [企业微信](https://github.com/NanmiCoder/cc-haha/blob/main/docs/im/wecom.md) · [QQ](https://github.com/NanmiCoder/cc-haha/blob/main/docs/im/qq.md) · [Slack](https://github.com/NanmiCoder/cc-haha/blob/main/docs/im/slack.md) |
| **命令行** | [安装与启动](https://github.com/NanmiCoder/cc-haha/blob/main/docs/cli/index.md) · [命令参考](https://github.com/NanmiCoder/cc-haha/blob/main/docs/cli/reference.md) · [环境变量](https://github.com/NanmiCoder/cc-haha/blob/main/docs/cli/env.md) |
| **深入原理** | [桌面端架构](https://github.com/NanmiCoder/cc-haha/blob/main/docs/internals/desktop.md) · [多 Agent 系统](https://github.com/NanmiCoder/cc-haha/blob/main/docs/internals/agent.md) · [Skills 系统](https://github.com/NanmiCoder/cc-haha/blob/main/docs/internals/skills.md) · [记忆系统](https://github.com/NanmiCoder/cc-haha/blob/main/docs/internals/memory.md) · [Computer Use 架构](https://github.com/NanmiCoder/cc-haha/blob/main/docs/internals/computer-use.md) · [本地 Server 与 API](https://github.com/NanmiCoder/cc-haha/blob/main/docs/internals/server.md) · [Channel 系统](https://github.com/NanmiCoder/cc-haha/blob/main/docs/internals/channel.md) · [项目结构](https://github.com/NanmiCoder/cc-haha/blob/main/docs/internals/structure.md) · [参与贡献与质量门禁](https://github.com/NanmiCoder/cc-haha/blob/main/docs/internals/contributing.md) |

---## 技术栈

| 类别 | 技术 |
|------|------|
| 语言 | TypeScript |
| 桌面 APP | Electron |
| 桌面 UI | React + Vite |
| 本地运行时 | [Bun](https://bun.sh) |
| 终端 UI | React + [Ink](https://github.com/vadimdemedes/ink) |
| CLI 解析 | Commander.js |
| API | Anthropic SDK |
| 协议 | MCP, LSP |

## 致谢

感谢以下开源项目和社区实践为本项目提供参考与启发：

- [React](https://github.com/facebook/react)：前端工程与组件化 UI 生态。
- [Electron](https://github.com/electron/electron)：跨端桌面应用能力与工程实践。
- [cc-switch](https://github.com/farion1231/cc-switch)：模型供应商配置能力参考。
- [LINUX DO](https://linux.do/)：新的理想型开发者社区。
- [AtomGit](https://atomgit.com/NanmiCoder/cc-haha)：为本项目提供国内代码托管。

---## ⭐ Star History

如果这个项目对你有帮助，欢迎点一个 ⭐ Star，让更多人发现 cc-haha。

<a href="https://www.repostars.dev/?repos=NanmiCoder%2Fcc-haha&theme=ocean">
  <img alt="Star History Chart" src="https://www.repostars.dev/api/embed?repo=NanmiCoder%2Fcc-haha&theme=ocean" />
</a>
