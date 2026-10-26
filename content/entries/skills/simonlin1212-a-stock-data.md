---
slug: simonlin1212-a-stock-data
name: a-stock-data
tagline: Agent skill from simonlin1212/a-stock-data
summary: Agent skill from simonlin1212/a-stock-data
categories:
  - domain-research
tags:
  - a-share
  - ai-agent
  - ai-skill
  - china-stocks
status: active
quality_percentile: 89
selection_reason: quality_percentile
first_seen: 2026-05-11T01:08:15
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: simonlin1212/a-stock-data
  subpath: .
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 11139
  last_commit: 2026-10-23T13:56:57Z
  stars_delta_7d: 193
  stars_growth_pct: 1.8
  trending_score: 196.4
  rank_current: 62
  rank_delta: 4
  velocity_source: snapshot_delta
  sparkline_4w:
    - 10657
    - 10843
    - 10946
    - 11139
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: simonlin1212/a-stock-data
  path: SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:49.332Z
  truncated: false
type: agent_skill
skill:
  skill_name: a-stock-data
  description: Agent skill from simonlin1212/a-stock-data
  folder_path: .
  extra_files:
    - .github/FUNDING.yml
    - .gitignore
    - CHANGELOG.md
    - LICENSE
    - README.md
    - README_en.md
    - assets/.gitkeep
    - assets/bmc-qr.png
    - assets/bmc-sponsor.png
    - docs/source-integration-v3.8.0.md
  pack_total_skills: 1
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: simonlin1212-a-stock-data
---

> 📦 项目主页：https://github.com/simonlin1212/a-stock-data — 更新、反馈、支持作者
> 
> 作者：Simon 林 · X [@linsizhen](https://x.com/linsizhen) · 邮箱：simonlin0423@gmail.com

# A股全栈数据工具包 V3.10.2

十五层数据架构，87 个能力端点（82 主端点 + 5 备胎）、34 个来源。V3.10 新增的 2 个入口于 2026-09-22 实测，V3.9 新增的 25 个入口于 2026-09-20 实测；旧端点的验证日期见各章节。覆盖主板/创业板/科创板/ST，北交所覆盖依端点而异；已有备胎的数据可按「备用源速查」降级。

> **V3.10.2（PE 消化年数修正，2026-10-11 · #58）：** 入口数、来源数不变。`full_valuation()` 的 `digest_years`：
> 前向 PE 高于 30x 而下一年预测缺失或盈利不增长、或当年 EPS 缺失 / 不为正时，原来返回 `0`（像是已经消化完），现在返回 `None`；其余情况不变。

> **V3.10.1（成交量单位与对账口径更正 · 逐笔提速与盘后核对，2026-10-07 · #57）：** 入口数、来源数不变，返回的数据不变。
> - §1.2 `tencent_kline()` 的 `volume`：**科创板（688 / 689）是股**，其余是手；此前文档全写成「手」，按此换算科创板会大 100 倍。
>   备用源速查里「成交额 = 量(手) × 100 × 均价」同样更正。
> - §1.2 补成交量对账口径：科创板以外日线是整手、最近一个交易日的分钟量也是整手（下一个交易日才回填成精确股数）；
>   1 分钟线 09:30 那根只有集合竞价、13:01 开盘价是上午收盘价；深市整分时刻的成交腾讯与 Baostock 分在相邻两根；无成交分钟：第一笔成交以前沪深都没有行，之后深市会缺行。
> - §1.4 `tencent_ticks()` 改走复用连接、自动重试的 `V39_RETRY_SESSION`：一次约 70 秒 → 约 25 秒；连接失败、等响应超时、
>   429 / 5xx 自动重试，不再一次抖动就整次失败（读响应体中途卡住不重试）。
>   新增 `frame.attrs["complete"]`，15:31 以后用快照的盘后成交额核对盘后定价各笔（此前末尾缺笔完全看不出；低价 ETF 一两手的小额缺笔仍看不出）。
> - §13.7 `futures_kline()` 同样自动重试，单次超时收短到 (5, 20) 秒；补上中金所主力连续只从 2017-01-17 起。

> **V3.10.0（逐笔替代 / 期货日 K / 行情层重排，2026-09-22）：** 85→87 个能力入口（82 主 + 5 备胎），来源数不变（34）。
> - **§1.4 腾讯逐笔 `tencent_ticks()`**：替代 #52 后返回空的 mootdx `transaction()`。最近一个交易日的全部分笔（沪深个股 + ETF），
>   收盘后与行情快照的当日成交额核对，连续竞价段缺笔直接报错；只有当日、不含北交所。
> - **§13.7 新浪期货日 K `futures_kline()`**：单个合约或主力连续的逐日 K 线，六家交易所含大商所（此前大商所只有实时价）；
>   实测价格与交易所官方逐日一致。
> - **行情层重排**：能用的在前，mootdx 行情命令移到 §1.7 留档。新旧编号对照见 Layer 1 开头；下面历史版本说明里写的仍是旧编号。
> - **期货修正**：上期能源在各类数据首日前抛 `ValueError`（此前报成「格式可能已变」的 `RuntimeError`），期权首日更正为 2021-06-21；
>   上期所日行情实测最早 2002-01-07、中金所 2010-04-16，文档原写 2015 年。

> **V3.9.0（期货大宗 / 事件驱动 / 可转债 / 利率 + 四个 issue，2026-09-20）：** 新增 §13 期货与大宗商品、§14 事件驱动、
> §15 可转债三层，并在原有各层补齐 K 线、研报、ETF 份额、新闻、ST 名单、沪市问答、利率曲线等入口。
> 12→15 层，60→85 个能力入口（80 主 + 5 备胎），22→34 个来源（新增通达信官网盘后包、华尔街见闻、央视网、上证e互动、
> 中债、中国货币网、上期所、上期能源、郑商所、中金所、广期所、上金所）；无新增安装依赖，保留 Python 3.9。
> - **#52 mootdx 行情命令失效**：通达信公开服务器的 K 线 / 盘口 / 逐笔返回 0 行，财务与 F10 正常。`tdx_client(check='finance')`
>   让财务 / F10 按财务命令验活；K 线改走 §1.5 腾讯 / §1.6 通达信盘后包，`tdx_client()` 失败时的报错直接指路。
> - **#49 商品期货 / 期权**：§13 接入五家期货交易所官方日行情与商品 / 股指期权、四家（广期所除外）的会员持仓排名，另有新浪实时期货（含大商所）、
>   A50 期指与上海金交所现货。大商所官网有反爬，日行情未接入。
> - **#53 研报来源**：新增 §2.4 新浪研报列表，作为东财之外的第二来源（只有列表，无评级与目标价）。
> - **#55 聚宽代码**：`norm_ticker()` / `get_prefix()` 认 `.XSHG` / `.XSHE`，新增 `to_joinquant()`；FAQ 说明回测能力边界。
> - 新端点统一返回带 `source` / `source_url` / `fetched_at` 的 DataFrame，「确实没有」与「接口坏了」分开报错。
>   25 个新入口于 2026-09-20 用本文件原文代码实测，见 [本次数据源整合记录](https://github.com/simonlin1212/a-stock-data/blob/main/docs/source-integration-v3.9.0.md)。

> **V3.8.0（官方指数与交易基础数据，2026-09-05）：** 新增 §12 指数与交易日历层，
> 中证/国证成分与权重、中证 PE/股息率、深交所整月日历，以及沪深官方两融、北交所行情两个备胎。
> 11→12 层，54→60 个能力入口，19→22 个来源（新增中证、国证、北交所）；无新增安装依赖，保留 Python 3.9。
> 国证当前文件是月末快照；历史调样、集合竞价、需 Key 的同花顺增强 API 暂不算已支持。
> 实测记录、候选取舍和边界见 [本次数据源整合记录](https://github.com/simonlin1212/a-stock-data/blob/main/docs/source-integration-v3.8.0.md)。

> **V3.7.2（北交所号段判定对齐，2026-09-02）：**`_natural_market()`（`norm_ticker()` 校验显式前缀是否自相矛盾）与 §8.5 `_anomaly_market()`（异动记录→交易所）此前只枚举 `43/83/87` 三个前两位与 `920`，而 `get_prefix()` 用 `startswith(("4", "8"))` + `startswith("92")` 覆盖整个北交所号段——同一份文件两套规则（#51）。现统一为 `startswith(("4", "8", "92"))`。实测（2026-09-01）北交所在市代码只有 `43x/83x/87x/920x` 四段、`921` 段尚未启用，故**不改变任何现有标的的判定结果**，修的是一致性与前向兼容。
>
> **V3.7.1（后缀路由修复，2026-08-20）：**`get_prefix()` 认显式前缀（`sh000016`）却不认等价的后缀写法（`000016.SH`）——而 `norm_ticker()` 文档明文支持后缀式，且 `em_market_code()`/`em_secid()`（V3.7.0 新增）把**未归一化的原串**直接喂给 `get_prefix()`：`000016.SH` 以 `0` 开头落到默认深市分支，secid 拼成 `0.000016`（深康佳A）而非 `1.000016`（上证50 指数），**静默返回另一只标的的数据**。已在 `get_prefix()` 开头加后缀识别分支（`.sh/.sz/.bj` 与显式前缀等价透传），号段推断与沪指数白名单逻辑不变。⚠️ 走「前缀+原串拼接」的端点（`tencent_quote()`、新浪财报等）仍只认纯 6 位或前缀式——后缀式会把 `.SH` 拼进请求串，**先过 `norm_ticker()` 再传**的总原则不变。
>
> **V3.7.0（宏观层 + 筹码分布 + 复权因子 + 估值历史，2026-08-19）：**新增 **1 个数据层、7 个端点、4 个数据源**（baostock / 申万 / 人民银行 / 国家统计局，全部零注册零 key）。全部端点于 2026-08-19 实跑验证。
>
> - **§4.6 筹码分布 CYQ** — 补上本层名实不符的窟窿：Layer 4 叫「资金面 / **筹码**层」但 §4.1~§4.5 全是资金面数据，一直没有真正的筹码分布。**东财没有公开 CYQ 接口**（实测 `push2`/`push2his` 的 `cyq/get` 均 404），本端点用 OHLC + 换手率**本地推演**，零新增数据源。输出获利比例 / 平均成本 / 90-70 成本区间与集中度 / 筹码峰。⚠️ 初始筹码**播种为首日全部流通盘**——从全零起步会把窗口前的存量持仓一笔勾销（两个 1% 换手日会被算成 50/50，真实应约 99%/1%）。
> - **§6.5 估值历史** — §1.2 腾讯只有**当日**估值快照，本端点给**日频历史序列**（实测茅台 2016-01-04 起 2581 行），并一次补齐此前完全缺失的四项：**换手率**（筹码分布的必需输入）、**停牌状态**、**ST 标记**（实测 000004 有 276 天 isST=1）、历史 PE/PB/PS/PCF。⚠️ **baostock 不支持北交所**，服务端报 `10004011`，本实现在**登录前**就拦掉抛 `ValueError`。
> - **§1.4 复权因子** — §1.1 通达信 `bars()` 是**不复权**数据，跨除权日直接比价必错。新浪 qfq/hfq 因子序列一次 HTTP 约 1.8KB。⚠️ 响应末尾挂着 `/* base64 */` 注释块，**不能用 `$` 锚定正则**，须用 `raw_decode`。
> - **§6.6 上市/退市日** — 唯一能拿到**退市日期**的零鉴权源，配合 §1.2 `is_stale` 可在筛选阶段剔除僵尸标的。
> - **§6.7 申万行业变迁史** — §3.7 东财只有**当前**行业归属，用它做历史研究是**前视偏差**。本端点给每只股票的行业变迁（实测 12,893 行 / 5,905 只 / 38 个一级行业；有标的历史变更过 10 次）。⚠️ 申万官方只发代码不发中文名。
> - **§11.1/§11.2 宏观层（新）** — 人民银行社融（月度 12 列）+ 国家统计局 PMI。⚠️ 社融链路是三级跳，未发布月份**整行丢弃**而非返回 NaN（否则调用方会把 12 行当 12 个月真数据）；PMI 正文是全角括号**内带空格**，空白必须**整个删掉**才匹配得到。

> **V3.6.1（龙虎榜空窗口崩溃修复，2026-08-09 · #45）：**`dragon_tiger_board()` 在回看窗口内无上榜记录时抛 `UnboundLocalError`——而大市值 / 低换手率标的（如贵州茅台）常态无上榜，等于**调用即崩**，调用方还无法区分「无数据」与「接口异常」。已修，空窗口返回语义一致的空结构。
>
> **V3.6.0（静默失败修复 + 重点监控池/日内异动，2026-07-31 · #15）：**
> - **🔴 北交所老号段（43/83/87）会返回僵尸数据且不报错**：实测在市 342 只中 **336 只已迁至 `920xxx`**（锦波生物 `832982`→`920982`、贝特瑞 `835185`→`920185`），老码在东财研报静默返回 **0 篇**、在腾讯行情返回**定格报价**（成交量 0，价差达 17%~100%+）却仍是 HTTP 200。新增全局警告章节；`tencent_quote()` 增加 `is_stale`/`stale_reason` 标志（实测老码 2/2 命中、正常票 4/4 无误报）；`eastmoney_reports()` 遇老码**抛 ValueError 而非返回空**。
> - **🔴 §2.1/§2.2 研报层 ticker 未归一化（静默空）**：`eastmoney_reports("SH600519")` / `"600519.SH"` 一律返回 **0 篇**（reportapi 只认纯 6 位），而文档「Ticker 格式归一化」明文承诺全接口支持带前缀写法——**承诺与实现不符，且失败方式是静默空**，调用方会误读成「该标的无研报覆盖」。新增 `norm_ticker()` 实现（解析失败抛 ValueError，绝不返回空串），`eastmoney_reports()` / `ths_eps_forecast()` 接入。
> - **§8.4 `em_stock_monitor()` 东财重点监控池新增（#15）**：交易所风险警示 / 重点监控名单 + 生效时间窗，零鉴权静态 JSON。
> - **§8.5 `em_price_anomaly()` / `em_price_anomaly_count()` 日内异动池新增（#15）**：交易所「严重异常波动」口径的异动明细与按标的聚合统计，含 12 条异动规则码全解释。⚠️ 必须带 `team=h5` 等固定参数，缺失返回 `unknow team`——已做 `result!=0` 冒泡而非静默返回空。
> - **§2.1 行业研报去硬编码日期**：`begin` 默认由固定的 `2024-01-01` 改为「相对今天往前两年」，避免时间窗越用越旧。
> - 端点 44 → 47。实测 24/24 通过（含前缀格式 4/4、老号段拦截、新端点真数据、异动接口拒绝冒泡）。
>
> **V3.5.0（板块资金流向，2026-07-23 · #37）：**
> - **§3.8 `board_fund_flow()` 板块资金流向新增**：补上此前缺失的**板块级资金流**——行业/概念/地域三类板块 × 今日/5日/10日三周期，主力净流入额/净占比 + 超大/大/中/小单四档明细 + 领涨股。与 §3.7 板块排名**同源同接口**（东财 push2 `clist`），此前只请求了价格/涨跌家数字段，本版补请求 `f62/f184/f66...` 资金流字段即覆盖。走 `em_get` 限流防封。端点 43 → 44。
> - 实测（2026-07-23）：行业今日 100 个板块主力净额降序（电力设备 64.66亿 = 超大 43.55亿 + 大 21.11亿）、概念 5 日、地域 10 日均真实返回；参数校验拒绝非法 board_type/period。
>
> **V3.4.1（前缀路由 + mootdx 验活修复，2026-07-23）：**
> - **§1.2/§市场前缀规则 前缀路由修复（#40 #41）**：`5` 开头沪市 ETF（`510300`/`588200` 等）、沪深指数（`000300`/`000016` 等）此前落到 `else → sz`，腾讯接口返回空**或错票**（`000016` 被误判为 `sz000016` *ST康佳A，静默返回不相干标的的数据，比返空更危险）。`get_prefix()` 与 `tencent_quote()` 两处同步修复：`5x→sh`、沪指数白名单、支持显式前缀（`sh000001`/`sz000001`）透传解决 `000001`（上证指数 vs 平安银行）歧义。
> - **§1.1 `tdx_client()` 真实取数验活（#43）**：`_probe()` 仅做 TCP 握手，握手成功 ≠ 能取数——坏服务器可握手通过却回 2 字节空 body，导致**静默返回空 DataFrame 或连接崩溃**且走不到 fallback。新增 `_validate()`：每个候选 server 必须真实拉一根 K 线成功才采用，并对 `factory()` 连接异常做 try/except 跳过，全部失败才抛明确错误。
> - **备用源速查 K线行新增腾讯 m5 分钟 K 线（#43）**：同花顺 K 线备胎只有 30/60 分，mootdx 一挂就无 5 分钟源。补腾讯 `ifzq.gtimg.cn` 分钟 K（m1/m5/m15/m30/m60，零鉴权不封 IP）。⚠️ 第 7 字段是**换手率基点**不是成交额（差 3 个数量级），成交额需自算。
>
> **V3.4.0（接口质量 + 备用源韧性，2026-07-11）：**
> - **§5.2 财联社快讯复活**：旧 nodeapi 2026-05 下线后，改走官方 `v1/roll/get_roll_list` + 本地签名（`sign=md5(sha1(排序query))`，零 key），V3.2 移除的全市场电报能力恢复，与东财 7×24 互为独立备份。实测 errno=0。
> - **新增「备用源速查 & 降级策略」章节**：十层主源→独立备胎速查表（不同域名/不同风控面）+ 3 个实测备胎函数——`dragon_tiger_backup()`（沪深交易所官方龙虎榜，含营业部席位）、`fund_flow_backup()`（新浪日度资金流）、`announcements_backup()`（深市深交所官方/沪市东财公告+PDF）。端点 40 → 43，数据源 13 → 15（新增沪深交易所官方）。
> - **§3.6 解禁字段修复**：东财 `RPT_LIFT_STAGE` 改列名致 `type`/`shares` 恒空 → 改 `FREE_SHARES_TYPE`/`FREE_SHARES`，并新增 `able_shares`（实际可流通股数，更贴近真实抛压）。
> - **§3.7 行业排名排序修复**：clist 请求补 `fid=f3`，`top`/`bottom` 现按涨跌幅真实排序（此前缺排序字段，切片结果非涨幅序）。
> - **§3.2 深股通标注**：北向盘中披露收紧后 sgt 分钟序列不可靠（hgt 可用），权威北向用 HKEX 官方日统计（见备用源速查）。
> - **体验**：顶部新增「端点路由速查」总表（§→函数→用途→源，可按需局部读取）；FAQ 新增东财被封对策 / 财联社复活 / mootdx 库烂尾说明。
>
> **V3.2.3（行业研报新增）：**
> - **§2.1 东财行业研报 `eastmoney_industry_reports()`**：研报层补上行业研报端点（此前只有个股研报）。与个股研报**同端点** `reportapi.eastmoney.com/report/list`，仅 `qType=1`；`industry_code="*"` 拉全行业、传东财行业码（如 `1238`=IT服务Ⅱ）精确过滤，PDF 复用 `download_pdf()`，走 `em_get` 限流。端点数 27 → 28。
> - 实测（2026-06-20）：全行业 `hits=47928`、按行业码 `1238` 过滤 `hits=1863`，首篇 PDF `H3_{infoCode}_1.pdf` 下载成功（2.5MB，`%PDF` 头）；行业码表端点（`bxpa` 等）404 不存在，用 `"*"` 拉取后从结果反查行业码。

> **V3.2.2（失效接口替换 + 隐藏 Bug 修复）：**
> - **§3.3 概念板块归属（#18）**：百度 PAE `getrelatedblock` 失效（`ResultCode 10003` + 空数组）→ 改用东财 `slist`（`spt=3`）`eastmoney_concept_blocks()`，一次请求拿全个股所属板块（行业/概念/地域 + BK码 + 涨跌幅 + 龙头股），零鉴权走 `em_get` 限流。
> - **§7.1 巨潮公告 orgId（#19）**：硬编码 `gssx0{code}` 致大量 601xxx 股票 `totalAnnouncement=0` → 新增 `_cninfo_orgid()` 动态查官方映射表 `szse_stock.json`（6198 只股，模块级缓存），硬编码降为 fallback。
> - **综合示例修复**：示例仍调用 v3.1 已删的 `baidu_fund_flow_history` → 改 `eastmoney_fund_flow_minute`。
> - **§4.5/§5.1 风控说明**：部分大陆住宅 IP 被东财间歇风控（`HTTP 000`/空）非代码 Bug，加重试/换网络提示。
> - 新代码原样 exec smoke test 实测：板块归属 茅台27/五粮液28/绿的谐波21；公告 平安601318/工行601398 原失效股恢复。
>
> **V3.2.1（Bug 修复）：** 修复两个内嵌函数的解析逻辑（预先存在，非 V3.2 引入）——
> - **§5.1 东财个股新闻**：东财实际返回里 `result.cmsArticleWebOld` 直接就是文章列表，旧写法对 list 调 `.get("list")` 触发 AttributeError / 返回空 → 改为遍历 `cmsArticleWebOld` 列表本身。
> - **§6.4 新浪财报三表**：新浪实际结构是 `result.data.report_list`（按报告期为键的 dict，每期 `data` 才是行项列表），旧写法取 `result.data.{lrb}` 永久返回空 → 改为遍历 `report_list` 期次、从每期 `data` 按 `item_title` 提取。
> - 两函数均用茅台 600519 公开 API（零 key）实测返回非空、字段正确。
>
> **V3.2（防封 + 失效修复）：**
> - **数据源优先级 + 东财防封**：明确「通达信(mootdx)/腾讯不封IP 优先用，东财仅用于其独有数据」原则；新增统一节流入口 `em_get()`，所有东财接口内置串行限流（间隔≥1s+随机抖动）+ 会话复用，AI 抄代码即自带防封。详见「数据源优先级 & 东财防封」章节。
> - **财联社快讯下线（#14）**：`cls.cn` 旧 API 全面 404，标注弃用并改用东财全球资讯。
>
> **V3.1 修复：** 替换 4 个失效接口（百度 PAE 资金流→东财 push2、大宗交易 RPT 报表名更新、机构席位改用 BUY/SELL 明细筛选）+ 修复东财全球资讯 req_trace 参数 + 修复巨潮公告 orgId 格式。
>
> **V3.0 Breaking Change**：彻底移除 akshare 依赖，所有数据源改为直连 HTTP API（仅 mootdx 保留 TCP）。
> ⚠️ V3.7 起 §6.5/§6.6 另需第三方客户端 `baostock`（TCP），因此「零第三方封装依赖」现仅适用于其余端点。

**使用方式：** 将本文件放入 `~/.claude/skills/a-stock-data/SKILL.md`，Claude Code 会自动识别并在 A 股相关对话中激活。

```
行情层（实时，不封IP）
├── 腾讯财经 API   → PE/PB/市值/换手率/涨跌停/指数/ETF (HTTP)
├── 腾讯 K 线      → 沪深日/周/月前后复权 + 1~60 分钟，三入口轮换 (V3.9 新增)
├── 通达信盘后包   → 某交易日沪深北全市场日线含成交额 (tdx.com.cn HTTP，V3.9 新增)
├── 腾讯逐笔       → 最近一个交易日的分笔成交明细，沪深个股 + ETF (HTTP，V3.10 新增)
├── 百度股市通     → K线带MA5/10/20 (V3.0 新增，HTTP)
├── 新浪复权因子   → qfq/hfq 因子序列 + 套用到不复权K线 (V3.7 新增)
└── mootdx        → K线 + 五档盘口 + 逐笔成交 (TCP 7709；⚠️ 2026-09 起行情命令返回空，#52，留档)

研报层
├── 东财 reportapi → 个股研报 + 行业研报 + PDF下载 + 评级 + 三年EPS
├── 同花顺 THS     → 一致预期EPS (直连 basic.10jqka.com.cn)
├── iwencai        → NL语义搜索研报 (唯一能力，需X-Claw)
└── 新浪研报列表   → 标题/机构/研究员/日期，研报第二来源 (V3.9 新增)

信号层
├── 同花顺热点     → 当日强势股 + 题材归因 reason tags (零鉴权 73ms)
├── 同花顺北向     → hgt/sgt 分钟资金流向 + 本地自缓存历史
├── 东财 slist     → 个股所属板块/概念归属 (V3.2.2 替换百度PAE)
├── 东财 push2     → 个股资金流向 分钟级 (V3.1 替换百度PAE)
├── 龙虎榜席位     → 上榜记录 + 买卖席位 TOP5 + 机构动向 (datacenter-web)
├── 全市场龙虎榜   → 每日全市场上榜股票 + 净买额排名 (datacenter-web)
├── 限售解禁日历   → 历史解禁 + 未来90天待解禁 (datacenter-web)
├── 行业板块排名   → 东财行业涨跌/上涨下跌家数 (V3.0 替换同花顺)
└── 板块资金流向   → 行业/概念/地域 × 今日/5日/10日 主力+超大/大/中/小四档 (push2, V3.5)

资金面 / 筹码层
├── 融资融券明细   → 日级融资余额/买入/偿还 + 融券 (datacenter-web)
├── 大宗交易       → 成交价/量 + 买卖方营业部 (datacenter-web)
├── 股东户数变化   → 季度股东户数 + 环比变化 (datacenter-web)
├── 分红送转       → 历史每股派息/送股/转增 (datacenter-web)
├── 个股资金流120日 → 主力/大单/中单/小单 日级净流入 (push2his)
├── 筹码分布 CYQ   → 获利比例/平均成本/90-70成本区间/筹码峰 (本地计算，V3.7 新增)
└── ETF 份额       → 上交所按日归档 / 深交所当前快照，万份 (V3.9 新增)

新闻层
├── 东财个股新闻   → 个股相关新闻 (search-api-web JSONP)
├── 财联社快讯     → 全市场实时电报 (v1 API+本地签名零key，✅V3.4 复活)
├── 东财全球资讯   → 7×24 财经快讯 (np-weblist，与财联社互备)
├── 华尔街见闻     → 7×24 快讯，按频道 + 翻页游标 (V3.9 新增)
└── 新闻联播       → 当日条目标题 + 文字稿 (央视网，V3.9 新增)

基础数据层
├── mootdx finance → 季报快照 (37字段, EPS/ROE/净利)
├── mootdx F10     → 最新提示 (公告/报道/大宗/两融/风险提示摘要；2026-09 起只剩这一类)
├── 东财个股信息   → 行业/总股本/流通股/市值/上市日期 (push2)
├── 新浪财报三表   → 资产负债表/利润表/现金流量表 (quotes.sina.cn)
├── baostock 估值历史 → 日频 PE/PB/PS/PCF + 换手率 + 停牌 + ST (不支持北交所，V3.7 新增)
├── baostock 标的信息 → 上市日/退市日/状态 (V3.7 新增)
├── 申万行业分类   → 行业归属变迁史，消除前视偏差 (仅代码无中文名，V3.7 新增)
└── ST 名单        → 沪深京 ST / *ST 当日快照 (东财，baostock 兜底，V3.9 新增)

公告层
├── 巨潮 cninfo    → 公告全文检索+下载 (cninfo.com.cn)
└── mootdx F10     → 最新公告摘要

打板层 (V3.3 新增)
├── 东财涨停池     → 连板数/几天几板/封板资金/炸板次数/行业 (push2ex)
├── 东财炸板池     → 涨停后开板 + 振幅/涨速 (push2ex)
├── 东财跌停池     → 封单资金/连续跌停/开板次数 (push2ex)
├── 东财昨涨停池   → 昨涨停今表现，算晋级率/赚钱效应 (push2ex)
└── 同花顺涨停揭秘 → 涨停原因题材/封板成功率/板型 (10jqka)

ETF期权层 (V3.3 新增)
├── 合约清单       → 50ETF/300ETF/科创50/500ETF 各月认购认沽 (新浪)
├── T型报价        → 买卖五档/持仓量/行权价/最新价 (新浪)
└── 希腊字母+IV    → Delta/Gamma/Theta/Vega/隐含波动率 (新浪)

舆情互动层 (V3.3 新增)
├── 互动易问答     → 投资者提问+公司回复 (巨潮，深市)
├── 上证e互动      → 沪市投资者提问+公司回复 (上交所运营的独立平台，V3.9 新增)
├── 同花顺热榜     → 人气值/概念标签/排名变化 (10jqka)
├── 东财人气榜     → 排名+排名变化+名称价格 (emappdata)
└── 东财概念命中   → 个股被归到哪些概念在炒+热度 (emappdata)

宏观与利率层 (V3.7 新增，V3.9 扩展)
├── 人民银行社融   → 社会融资规模增量 月度12列 (pbc.gov.cn，三级跳取 xls 附件)
├── 国家统计局PMI  → 制造业/非制造业/综合 + 大中小型企业分档 (stats.gov.cn)
├── 中债收益率曲线 → 国债 / 商业银行 AAA / 中短票 AAA，3月~30年 (V3.9 新增)
├── 回购定盘利率   → FR001/007/014 + FDR (中国货币网，V3.9 新增)
├── LPR            → 1 年 / 5 年全历史 (东财，V3.9 新增)
└── 全球宏观日历   → 公布值/预期/前值 + 重要事件 (华尔街见闻，V3.9 新增)

指数与交易日历层 (V3.8 新增)
├── 中证指数       → 当前成分 / 月末权重 / 近期 PE 与股息率
├── 国证指数       → 最近公布的成分与权重（月末快照）
└── 深交所日历     → 官方整月交易标志（完整性校验）

期货与大宗商品层 (V3.9 新增，#49)
├── 期货日行情     → 上期所/上期能源/郑商所/中金所/广期所 官方收盘数据
├── 期权日行情     → 商品期权 + 股指期权，Delta / 隐含波动率（中金所不公布这两项）
├── 持仓排名       → 会员成交量 / 持买 / 持卖前 20 名
├── 实时期货       → 新浪实时价（含大商所品种）
├── 期货日 K       → 新浪单合约 / 主力连续逐日 K 线（含大商所，V3.10 新增）
├── A50 期指       → 富时中国 A50 连续合约报价
└── 上海金现货     → 上金所 Au99.99 / Au(T+D) / Ag(T+D) 日线

事件驱动层 (V3.9 新增)
├── 业绩预告 · 机构调研 · 股东增减持 · 股票回购
└── 股权质押（中国结算周度） · 新股申购日历   (均为东财 datacenter)

可转债层 (V3.9 新增)
└── 可转债全表     → 条款 + 转股价 / 债价 / 转股价值 / 溢价率 (东财)

官方备胎扩展 (V3.8 新增)
├── 上交所/深交所  → 两融明细（分交易所调用，金额元、余量股/份）
└── 北交所         → 当前行情与五档快照（必须核对交易日）
```

## 端点路由速查（按需定位，不必通读全文）

只需一类数据时，按下表定位章节（§）局部读取。除 iwencai 需 API Key 外全部零 key。

| § | 函数 | 拿什么 | 源 |
|---|------|--------|----|
| 前置 | `norm_ticker(code)` | 任意写法→纯6位（`SH600519`/`600519.SH`/`600519.XSHG` 皆可；解析失败抛错不返空） | 本地 |
| 前置 | `to_joinquant(code)` | 转聚宽代码 `600519.XSHG` / `000001.XSHE`（北交所不转换） | 本地 |
| 1.1 | `tencent_quote(codes)` | 实时价/PE/PB/市值/换手/涨跌停/指数/ETF（带 `is_stale` 僵尸报价标志） | 腾讯 |
| 1.2 | `tencent_kline(code, period, adjust, start, end, count)` | 日/周/月前后复权 + 1~60 分钟 K 线（沪深，不含北交所） | 腾讯 |
| 1.3 | `tdx_daily_package(date)` | 某交易日沪深北全部证券日线（含成交额） | 通达信官网 |
| 1.4 | `tencent_ticks(code)` | 最近一个交易日的分笔成交（价/手/元/主动买卖；沪深个股+ETF，不含北交所） | 腾讯 |
| 1.5 | `baidu_kline_with_ma(code)` | 日K线带 MA5/10/20 | 百度 |
| 1.6 | `sina_adjust_factor(code, kind)` / `apply_adjust(bars, factors)` | 复权因子 qfq/hfq + 套用到不复权K线 | 新浪 |
| 1.7 | `tdx_client()` → `.bars()` / `.quotes()` / `.transaction()` | K线(多周期,不复权) / 五档盘口 / 逐笔成交（⚠️ 2026-09 起返回空，#52，留档） | 通达信 |
| 2.1 | `eastmoney_reports(code)` / `download_pdf(rec)` | 个股研报+评级+三年EPS / 研报PDF | 东财 |
| 2.1 | `eastmoney_industry_reports(industry_code)` | 行业研报 | 东财 |
| 2.2 | `ths_eps_forecast(code)` | 机构一致预期 EPS | 同花顺 |
| 2.3 | `iwencai_search(query)` / `iwencai_query(query)` | NL 语义搜研报/选股（需 Key） | iwencai |
| 2.4 | `sina_research_reports(code=None, page=1)` | 研报列表：标题/类型/机构/研究员（无评级） | 新浪 |
| 3.1 | `ths_hot_reason()` | 当日强势股+题材归因 | 同花顺 |
| 3.2 | `hsgt_realtime()` | 北向分钟流向（hgt 可用 / sgt 仅参考） | 同花顺 |
| 3.3 | `eastmoney_concept_blocks(code)` | 个股所属板块/概念归属 | 东财 |
| 3.4 | `eastmoney_fund_flow_minute(code)` | 个股资金流（分钟级） | 东财 |
| 3.5 | `dragon_tiger_board(code, date)` | 个股龙虎榜+买卖席位 TOP5 | 东财 |
| 3.6 | `lockup_expiry(code, date)` | 解禁历史+未来90天待解禁 | 东财 |
| 3.7 | `industry_comparison()` | 行业板块涨跌排名 | 东财 |
| 3.8 | `board_fund_flow(board_type, period)` | 板块资金流向（行业/概念/地域 × 今日/5日/10日，主力+四档） | 东财 |
| 3.9 | `daily_dragon_tiger(date)` | 全市场龙虎榜+净买额排名 | 东财 |
| 4.1 | `margin_trading(code)` | 融资融券明细 | 东财 |
| 4.2 | `block_trade(code)` | 大宗交易+营业部 | 东财 |
| 4.3 | `holder_num_change(code)` | 股东户数变化 | 东财 |
| 4.4 | `dividend_history(code)` | 分红送转历史 | 东财 |
| 4.5 | `stock_fund_flow_120d(code)` | 个股资金流（120日，日级） | 东财 |
| 4.6 | `chip_distribution(df)` | 筹码分布（获利比例/平均成本/90-70成本区间/筹码峰） | 本地计算 |
| 4.7 | `etf_shares(date, exchange)` | ETF 份额（万份）：上交所历史日期 / 深交所当前快照 | 上交所/深交所 |
| 5.1 | `eastmoney_stock_news(code)` | 个股新闻 | 东财 |
| 5.2 | `cls_telegraph()` | 财联社电报（7×24，本地签名零key） | 财联社 |
| 5.3 | `eastmoney_global_news()` | 全球资讯（7×24） | 东财 |
| 5.4 | `wallstreetcn_lives(channel, limit, cursor)` | 7×24 快讯（按频道，可翻页） | 华尔街见闻 |
| 5.5 | `cctv_news(date, with_content=True)` | 新闻联播条目 + 文字稿（政策信号研究用） | 央视网 |
| 6.1 | `tdx_client(check='finance').finance(symbol)` | 季报快照 37 字段 | 通达信 |
| 6.2 | `tdx_client(check='finance').F10(symbol, name)` | F10 文本（2026-09 起服务端只剩「最新提示」一类） | 通达信 |
| 6.3 | `eastmoney_stock_info(code)` | 行业/股本/市值/上市日期 | 东财 |
| 6.4 | `sina_financial_report(code, type)` | 财报三表 | 新浪 |
| 6.5 | `baostock_valuation_history(code, s, e)` | 估值历史 PE/PB/PS/PCF + 换手率 + 停牌 + ST（**不支持北交所**） | baostock |
| 6.6 | `baostock_stock_basic(code)` | 上市日 / **退市日** / 状态 | baostock |
| 6.7 | `sw_industry_history()` / `sw_industry_as_of(df, code, d)` | 申万行业**变迁史**（消除前视偏差，仅代码无中文名） | 申万 |
| 6.8 | `st_stock_list()` | 沪深京 ST / *ST 当日名单 | 东财（baostock 兜底） |
| 7.1 | `cninfo_announcements(code)` | 公告检索+PDF 下载 | 巨潮 |
| 7.2 | `tdx_client(check='finance').F10(symbol, name='最新提示')` | 最新公告摘要 | 通达信 |
| 8.1 | `em_zt_pool` / `em_zb_pool` / `em_dt_pool` / `em_yzt_pool` | 涨停/炸板/跌停/昨涨停四池 | 东财 |
| 8.2 | `ths_limit_up_pool(date)` | 涨停原因题材+封板成功率+板型 | 同花顺 |
| 8.3 | `limit_up_sentiment(date)` | 炸板率/连板高度/连板梯队 | 东财(四池组合) |
| 8.4 | `em_stock_monitor()` | 重点监控池（风险警示名单+生效时间窗） | 东财 |
| 8.5 | `em_price_anomaly()` / `em_price_anomaly_count()` | 日内异动明细 / 按标的聚合异动统计（严重异常波动） | 东财 |
| 9.1 | `sina_option_codes` / `sina_option_tquote` / `sina_option_greeks` | ETF期权合约清单 / T型报价 / 希腊字母+IV | 新浪 |
| 10.1 | `cninfo_irm(code)` | 互动易问答（提问+公司回复，深市） | 巨潮 |
| 10.2 | `ths_hot_list()` / `em_hot_rank()` / `em_hot_concept(code)` | 热榜/人气榜/概念命中 | 同花顺+东财 |
| 10.3 | `sse_e_interaction(code=None, kind='answered')` | 上证e互动问答（沪市） | 上证e互动（上交所运营） |
| 11.1 | `pboc_social_financing(year)` | 社会融资规模增量（月度12列） | 人民银行 |
| 11.2 | `nbs_pmi()` | 制造业/非制造业/综合 PMI + 大中小型企业 | 国家统计局 |
| 11.3 | `chinabond_yield_curve(start, end, curve)` | 国债 / 银行 AAA / 中短票 AAA 收益率曲线 3月~30年 | 中债 |
| 11.4 | `repo_fixing_rates(kind)` | 回购定盘利率 FR / FDR 001·007·014 | 中国货币网 |
| 11.5 | `lpr_history()` | LPR 1 年 / 5 年全历史 | 东财 |
| 11.6 | `macro_calendar(start, end, country, min_importance)` | 全球宏观日历（公布值/预期/前值） | 华尔街见闻 |
| 12.1 | `index_constituents(index_code, provider)` | 最近公布的沪深北指数成分；csi/cni 显式选源 | 中证/国证 |
| 12.2 | `index_weights(index_code, provider)` | 最近公布的指数权重（百分数），保留真实日期 | 中证/国证 |
| 12.3 | `index_valuation(index_code)` | 两种口径 PE、股息率；不含 PB | 中证 |
| 12.4 | `trading_calendar(year, month)` | 官方整月交易日历 | 深交所 |
| 13.1 | `futures_daily(date, exchange)` | 期货日行情（SHFE/INE/CZCE/CFFEX/GFEX） | 五家期货交易所 |
| 13.2 | `options_daily(date, exchange)` | 商品期权 / 股指期权日行情 + Delta / IV（中金所不公布这两项） | 五家期货交易所 |
| 13.3 | `futures_position_rank(date, exchange, symbol)` | 会员成交 / 持买 / 持卖前 20 名 | 上期所/能源/郑商所/中金所 |
| 13.4 | `futures_realtime(symbols)` | 实时期货（含大商所品种） | 新浪 |
| 13.5 | `a50_futures()` | 富时中国 A50 期指 | 新浪 |
| 13.6 | `sge_spot(instrument)` | 上海金交所现货日线（黄金/白银/铂金） | 上金所 |
| 13.7 | `futures_kline(symbol, start, end)` | 期货日 K：单个合约 / 主力连续的逐日序列（含大商所） | 新浪 |
| 14.1 | `earnings_forecast(code, report_date, limit)` | 业绩预告 | 东财 |
| 14.2 | `institution_survey(code, start, end, detail, limit)` | 机构调研（汇总 / 逐机构） | 东财 |
| 14.3 | `holder_trades(code, direction, start, end, limit)` | 股东增减持 | 东财 |
| 14.4 | `share_buyback(code, progress, limit)` | 股票回购方案与进度 | 东财 |
| 14.5 | `equity_pledge(code, date, limit)` | 股权质押比例（中国结算周度，仅沪深） | 东财 |
| 14.6 | `ipo_calendar(limit)` | 新股申购日历 | 东财 |
| 15.1 | `convertible_bonds(include_delisted=False)` | 可转债条款 + 转股价值 / 溢价率 | 东财 |
| 官方备胎扩展 | `margin_trading_backup(date, exchange, code=None)` | 单所两融明细（先执行 §12 helper） | 上交所/深交所 |
| 官方备胎扩展 | `bse_quote_backup(date, code=None)` | 北交所全板/单票当前快照（先执行 §12 helper） | 北交所 |
| 备用源速查 | `dragon_tiger_backup` / `fund_flow_backup` / `announcements_backup` | 龙虎榜/资金流/公告官方备胎（主源被封时降级） | 交易所官方+新浪+东财(沪市公告) |
| 估值公式 | `forward_pe` / `pe_digestion` / `calc_peg` / `full_valuation(code)` | 前向PE / PE消化时间 / PEG / 单票估值全景 | 本地计算 |

## 数据源优先级 & 东财防封（重要，先读）

### 优先级原则：能用腾讯 / 交易所官方，就别用东财

| 优先级 | 数据源 | 协议 | 封 IP 风险 | 覆盖 |
|--------|--------|------|-----------|------|
| **1（首选）** | **腾讯财经** | HTTP | **不封 IP**（K 线单入口约 600 次后限流，§1.2 三入口轮换） | 实时价、PE/PB/市值/换手率/涨跌停、指数、ETF、日周月/分钟 K 线、当日逐笔 |
| **2** | **交易所 / 官方机构** | HTTP | 极低（避免高频） | 通达信盘后包、沪深北交易所、五家期货交易所、上金所、中债、货币网、中证/国证 |
| **3** | 新浪 / 巨潮 / 同花顺 / 华尔街见闻 | HTTP | 低 | 财报三表、复权因子、公告、一致预期/热点、研报列表、快讯 |
| **4** | **mootdx（通达信）** | TCP 7709 二进制 | 不封 IP | 财务快照、F10 正常；**K 线 / 盘口 / 逐笔 2026-09 起返回空（#52）** |
| **5（仅独有数据才用）** | **东财 eastmoney** | HTTP | **有风控，会封 IP** | 见下 |

**凡是行情 / K线 / 实时价 / 市值 / 财务三表能从腾讯、交易所官方或新浪拿到的，一律走它们**——实测不封 IP，可放心使用（仍应控制频率）。

### 东财只用于它「独有、别处拿不到」的数据

下列能力默认走东财（须限流）；已有交易所备胎的龙虎榜、两融可按文末速查表切换，不应视为东财独占：

> 龙虎榜席位 · 全市场龙虎榜 · 限售解禁日历 · 融资融券 · 大宗交易 · 股东户数 · 分红送转 · 个股资金流向（分钟/日级）· 行业板块排名 · 研报列表/PDF · 个股新闻 · 全球资讯 · ST 名单 · LPR · 事件驱动（业绩预告/机构调研/增减持/回购/质押/新股）· 可转债

### 东财风控阈值（社区实测，2026-05）

| 行为 | 触发封禁的阈值 | 风险 |
|------|---------------|------|
| 每秒请求数 | > 5 次/秒 | 高 |
| 单 IP 并发连接 | ≥ 10 | 高 |
| 1 分钟请求总数 | ≥ 200 次 | 中高 |
| 5 分钟请求总数 | ≥ 300 次 | 触发封禁 |
| User-Agent | 空 UA / 无浏览器特征 | 中 |

被封表现：连续请求后 `403` / `429` / 连接超时 / 返回空数据。临时封禁通常几分钟到几小时。

### ⚠️ 实测封禁案例（2026-06-30，一手数据，感谢 [@luodada99](https://github.com/luodada99) issue #36）

上表是社区口径；下面这条是**真实踩到 IP 级封禁**的完整记录，比阈值表更有参考价值：

- **触发方式**：选股脚本 10 线程并发、**完全不走 `em_get()` 限流**，1 小时内发出 45000+ 请求（三个版本的脚本同时跑全市场 5208 只）
- **后果**：`push2` / `push2his` **全系列** `RemoteDisconnected`，**IP 级封禁持续 20+ 小时**——不是"几分钟到几小时"那种临时限速
- **关键观察一**：`datacenter-web.eastmoney.com` **不受影响**——东财不同子域走不同 WAF，`push2` 被封不代表整个东财都不能用
- **关键观察二**：**腾讯 K 线（`web.ifzq.gtimg.cn`）连续 5000+ 次后会返回空**，但这是**限流不是封 IP**，降速或换新浪即可恢复
- **降级实测**：东财被封时，第一只股票花 10.9s 完成"检测被封 + 降级"，之后每只 0.4s 走腾讯，数据准确

**这个案例正是「限流是铁律」的实证**：`em_get()` 的默认间隔（1s + 抖动、串行）下，1 小时最多约 3000 次请求，与踩坑者的 45000 次差一个数量级。

**被封后的降级路径**（各层备胎详见「备用源速查」章节）：

| 被封端点 | 替代方案 | 差异 |
|---|---|---|
| `push2/clist/get`（股票列表） | `datacenter-web` + 腾讯行情批量 | 行业字段来自 datacenter 的 `BOARD_NAME` |
| `push2his/kline/get`（K线） | 腾讯 `fqkline/get`（前复权）→ 新浪 `getKLineData`（不复权） | 腾讯有前复权，新浪没有；量的单位新浪是股，腾讯科创板是股、其余是手（见 §1.2） |
| `push2/stock/get`（个股） | 腾讯 `qt.gtimg.cn` | 腾讯无行业/概念字段 |

### 防封铁律（调用东财时必须遵守）

1. **串行，不并发**——绝不对东财开多线程/协程并发请求
2. **每次间隔 ≥ 1 秒 + 随机抖动**（QPS ≤ 2），批量筛选时调大到 1.5~2 秒
3. **复用 HTTP 会话**（Keep-Alive），不要每次新建连接
4. **带正常 UA + Referer**（本 SKILL 各端点已配好）
5. **批量场景每只股票之间 sleep**——AI 跑批量循环（如筛选 100 只股逐个拉龙虎榜/资金流）是被封的头号元凶

### 已内置限流：所有东财请求走 `em_get()`

本 SKILL 提供统一的节流入口 `em_get()`（定义见下方「东财数据中心统一查询（共用 helper）」），它自动做到：串行限流（最小间隔 `EM_MIN_INTERVAL=1.0s` + 随机抖动）+ 复用 `EM_SESSION`（Keep-Alive）+ 默认 UA。**所有 `eastmoney.com` 端点的代码块都已改用 `em_get` 而非裸 `requests.get`**，AI 直接抄代码即自带防封。批量任务把 `EM_MIN_INTERVAL` 调大即可进一步降速。

> 注：`em_get` / `EM_SESSION` / `EM_MIN_INTERVAL` 是所有东财代码块共用的前置定义，使用任一东财端点前需先执行「共用 helper」代码块。

---## When to Activate

- 用户需要**指数成分、指数权重、指数 PE / 股息率、官方交易日历、沪深官方两融或北交所行情备份**（V3.8）。
- 用户要看**商品期货 / 期权 / 持仓排名 / A50 / 黄金现货**，或**业绩预告 / 机构调研 / 增减持 / 回购 / 股权质押 / 新股申购 / 可转债**，
  或**国债收益率曲线 / 回购利率 / LPR / 全球宏观日历**、**ETF 份额**、**ST 名单**、**新闻联播**、**沪市互动问答**、**全市场当日日线**（V3.9）。
- 用户要把代码转成**聚宽格式**（`600519.XSHG`）或问**能否回测**（V3.9，见 FAQ）。

- 用户要查 A 股个股估值（一致预期 / PE / PEG / PE消化）
- 用户要拉实时行情（价格 / 五档盘口 / K线 / 涨跌停价）
- 用户要搜研报（按主题 / 按标的 / 按行业 / 下载PDF）
- 用户要看**当日强势股 / 题材归因 / 概念热点**
- 用户要看**北向资金动向**（沪股通/深股通分钟流向）
- 用户要看**概念板块归属**（行业/概念/地域）
- 用户要看**个股资金流向**（主力/散户/超大单/大单分钟级）
- 用户要看**龙虎榜席位**（营业部 + 机构买卖）
- 用户要看**全市场龙虎榜**（当日所有上榜股票 + 净买额排名）
- 用户要看**限售解禁日历**（历史解禁 + 未来待解禁）
- 用户要做**行业横向对比**（涨跌排名 / 资金流入 / 领涨股）
- 用户要看**融资融券 / 两融数据**（融资余额 + 融券余额）
- 用户要看**大宗交易**（成交价/量 + 买卖方营业部）
- 用户要看**股东户数变化**（筹码集中度）
- 用户要看**分红送转历史**（每股派息 + 送股 + 转增）
- 用户要看**指数/ETF行情**（上证指数 / 沪深300 / 创业板指 / ETF）
- 用户要看**涨停 / 打板情绪**（涨停池 / 连板梯队 / 炸板率 / 跌停 / 涨停原因题材）
- 用户要看**ETF 期权**（T型报价 / 希腊字母 Delta·Gamma·Theta·Vega / 隐含波动率 IV）
- 用户要看**投资者互动问答**（公司如何回应某传闻/利好 · 互动易）
- 用户要看**市场热度 / 人气榜**（同花顺热榜 / 东财人气榜 / 个股概念命中）
- 用户要看新闻资讯（个股新闻 / 财联社快讯 / 全球资讯）
- 用户要查公告（巨潮公告全文）
- 用户要做产业链调研 / 批量横向对比
- 关键词：估值、一致预期、机构预测、市盈率、PEG、市值、研报、产业链、行业研究、K线、盘口、公告、新闻、**强势股、题材、热点、概念归因、北向资金、沪股通、深股通、概念板块、资金流向、主力、龙虎榜、席位、营业部、全市场龙虎榜、净买入、解禁、限售、行业对比、行业轮动、融资融券、两融、大宗交易、股东户数、筹码集中、分红、派息、送股、指数、ETF、涨停、打板、连板、炸板、跌停、涨停原因、封板、晋级率、ETF期权、希腊字母、隐含波动率、互动易、投资者关系、热榜、人气榜、市场热度、期货、商品期权、股指期权、持仓排名、A50、黄金、上海金、业绩预告、机构调研、增减持、回购、股权质押、新股申购、打新、可转债、转股溢价率、国债收益率、收益率曲线、回购利率、FR007、LPR、宏观日历、ETF份额、ST、新闻联播、上证e互动、聚宽、回测**

---## Prerequisites

```bash
pip install mootdx requests pandas stockstats numpy baostock xlrd openpyxl
```

| 依赖 | 版本要求 | 用途 |
|------|---------|------|
| mootdx | >= 0.10 | TCP 财务快照+F10（非 HTTP 依赖之一；K 线/盘口/逐笔 2026-09 起返回空，#52）；0.11.x 用 `tdx_client()` 规避 BESTIP bug，见下节 |
| requests | any | 所有HTTP API直连 |
| pandas | any | 数据处理+HTML表格解析 |
| stockstats | any | 技术指标计算（RSI/MACD/BOLL等） |
| numpy | any | §4.6 筹码分布的网格计算 |
| baostock | >= 0.8 | §6.5/§6.6 估值历史·换手率·停牌·ST·退市日，§6.8 ST 名单兜底（TCP，免注册免 key；**不支持北交所**） |
| xlrd | >= 2.0 | 读 `.xls`（§6.7 申万行业分类、§12 中证） |
| openpyxl | any | 读 `.xlsx`（§11.1 社融、§12 国证、深交所两融） |

> **架构：** 除 mootdx 与 baostock（均为 TCP 客户端库）外，所有数据源均为直连 HTTP API，不经第三方数据封装。每个 HTTP 端点的底层 URL/参数完全暴露，方便调试和定制。

### iwencai API Key（仅语义搜索需要）

```bash
# 环境变量方式
export IWENCAI_API_KEY="your_key_here"
export IWENCAI_BASE_URL="https://openapi.iwencai.com"

# 申请地址: https://www.iwencai.com/skillhub
# 注册后安装 SkillHub CLI，再安装 report-search 技能即可获得 Key
```

其他数据源（腾讯 / 东财 / 同花顺 / 百度股市通 / 新浪 / 巨潮 / 财联社 / mootdx / baostock / 申万 / 人民银行 / 国家统计局 / 沪深北交易所 / 中证 / 国证 / 通达信官网 / 华尔街见闻 / 央视网 / 中债 / 中国货币网 / 五家期货交易所 / 上金所）全部免费，无需 key。

### mootdx 客户端（必读，规避 0.11.x BESTIP 空串 bug）

> **已知 bug（mootdx 0.11.x）：** 全新安装后 `Quotes.factory(market='std')` 裸调用可能抛 `ValueError: not enough values to unpack (expected 2, got 0)`。
> 根因：`~/.mootdx/config.json` 的 `BESTIP.HQ` 初始是空字符串 `""`（不是缺失键），mootdx 用 `dict.get(key, default)` 取不到 default，拆包失败。**老用户（config 曾填充过 IP）不会触发，所以容易漏测。**
> **不要靠锁版本解决：** 锁 `mootdx==0.10.12` 在部分环境（如干净的 Python 3.9）下 `import mootdx` 会因 numpy/pandas 二进制不兼容直接崩。正确做法是用下面的 `tdx_client()`——显式传 server 绕过 BESTIP，对 0.10 / 0.11 都适用。

**统一用以下 helper 创建客户端（所有 mootdx 调用都走它）：**

```python
import socket
from mootdx.quotes import Quotes

# 实测可用的备选服务器（按延迟排序，2026-06 验证）
_TDX_SERVERS = [
    ('119.97.185.59', 7709), ('124.70.133.119', 7709), ('116.205.183.150', 7709),
    ('123.60.73.44', 7709),  ('116.205.163.254', 7709), ('121.36.225.169', 7709),
    ('123.60.70.228', 7709), ('124.71.9.153', 7709),    ('110.41.147.114', 7709),
    ('124.71.187.122', 7709),
]

def _probe(ip, port, timeout=2.0):
    """TCP 握手探测（快速粗筛）。注意：握手成功 ≠ 能取数，必须再经 _validate 验活。"""
    try:
        with socket.create_connection((ip, port), timeout=timeout):
            return True
    except Exception:
        return False

def _validate(client, market: str = 'std', check: str = 'bars') -> bool:
    """真实取数验活：坏服务器可 TCP 握手通过却回 2 字节空 body → 静默空表。用一次真实请求兜底。

    check='bars'   ：用 K 线请求验活（§1.7 行情类调用）；
    check='finance'：财务快照、F10 类别表里的「最新提示」及其正文都要取到才算活（§6.1 财务 / §6.2、§7.2 F10 调用），
                     只验财务会选中「财务正常、F10 为空」的服务器，F10 随后静默给空文本；
                     只看类别表非空，又会放过只回别的类别或畸形对象的服务器。
    两者要分开：2026-09 起通达信公开服务器的行情类命令（bars / quotes / transaction）普遍返回空表，
    而 finance / F10「最新提示」/ 除权除息仍正常（#52）。财务类调用若仍用 K 线验活，会被误判成「全部不可达」。
    验活样本 '000001' 是 A 股代码，只对 market='std' 有意义。其它市场（如扩展行情 'ext'）
    用它必然取不到数，会把所有正常服务器都判死、误报「全部不可达」，故非 std 时跳过验活。
    """
    if market != 'std':
        return True
    try:
        if check == 'finance':
            cats = client.F10C(symbol='000001')
            if not any(isinstance(c, dict) and c.get('name') == '最新提示' for c in cats):
                return False
            text = client.F10(symbol='000001', name='最新提示')
            if not isinstance(text, str) or not text.strip():
                return False
            df = client.finance(symbol='000001')
        else:
            df = client.bars(symbol='000001', frequency=9, offset=1)
        return df is not None and not df.empty
    except Exception:
        return False

def tdx_client(market='std', check='bars'):
    """
    创建 mootdx 客户端，规避 0.11.x BESTIP.HQ 空串 bug + 坏服务器静默空表（#43）。
    check: 'bars'（默认，K 线 / 盘口 / 逐笔）或 'finance'（财务快照 / F10），决定用哪类请求验活（#52）。
    每个候选都必须「真实取数验活」通过才采用（_probe TCP 握手是假阳性来源）：
      1) 顺序探测 _TDX_SERVERS，对 probe 通过者再 _validate 真实取数，取第一个验活成功的；
      2) 全部失败 → 回退 mootdx 自带 bestip 测速选优（同样验活）；
      3) 再回退裸 factory（老用户 config 已有可用 BESTIP 时成立）；
      4) 仍失败 → 抛 RuntimeError，明确报错而非静默返回空表 / 崩溃。
    """
    if check not in ('bars', 'finance'):
        raise ValueError("check 只能是 'bars' 或 'finance'")
    for ip, port in _TDX_SERVERS:
        if not _probe(ip, port):
            continue
        try:
            c = Quotes.factory(market=market, server=(ip, port))
            if _validate(c, market, check):
                return c
        except Exception:
            continue                                        # 握手过但取数崩 → 跳过下一台
    for kwargs in ({'bestip': True}, {}):                   # fallback: bestip 测速 / 裸 factory
        try:
            c = Quotes.factory(market=market, **kwargs)
            if _validate(c, market, check):
                return c
        except Exception:
            continue
    hint = ("海外网络通常全部超时（TCP 7709），请走国内代理或更新 _TDX_SERVERS 列表。")
    if check == 'bars':
        hint += ("若国内网络也如此：2026-09 起通达信公开服务器的 K 线 / 盘口 / 逐笔命令普遍返回空（#52），"
                 "K 线改用 §1.2 tencent_kline()（日周月 + 1~60 分钟）或 §1.3 tdx_daily_package()"
                 "（全市场当日日线含成交额），逐笔改用 §1.4 tencent_ticks()（当日）；"
                 "财务与 F10 用 tdx_client(check='finance') 仍可取。")
    raise RuntimeError("所有 mootdx 服务器均无法取到数据（TCP 可达但返回空 / 被 reset）。" + hint)

# 用法：client = tdx_client()                  # K 线 / 盘口 / 逐笔（#52：目前普遍取不到，见 §1.7 警告）
#       client = tdx_client(check='finance')   # 财务快照 / F10（正常）
```

> **海外 IP 用户：** mootdx 走通达信 TCP 7709，海外环境通常全部超时。`tdx_client()` 会快速失败给出明确报错，而非死等。
>
> **⚠️ 行情命令失效（#52，2026-09-20 实测）：** 内置 10 台服务器逐台测试，TCP 均可达，`finance` / `xdxr` 正常、
> `F10` 只剩「最新提示」一类（见 §6.2），但 `bars` / `quotes` / `transaction` 全部返回 0 行。财务与 F10 调用请传 `check='finance'`；
> K 线改走 §1.2 腾讯 / §1.3 通达信盘后包，实时价与五档走 §1.1 腾讯，当日逐笔走 §1.4 腾讯。

### 市场前缀规则（全局通用）

```python
# 沪市指数白名单：与深市 000xxx 个股同段，需白名单区分（沪深300/上证50/中证500/科创50/中证1000/上证180）
SH_INDEX = {"000300", "000905", "000016", "000688", "000852", "000010"}

def get_prefix(code: str) -> str:
    """6位代码 → 市场前缀（sh/sz/bj）。支持显式前缀/后缀（sh000016 / 000016.SH）透传以解决歧义。"""
    c = code.lower().strip()
    if c.endswith((".sh", ".sz", ".bj")):    # 后缀写法与前缀等价：000016.SH ≡ sh000016。
        return c[-2:]                        # 不认后缀会让 000016.SH 落到默认深市 → 静默查成深康佳A
    if c.endswith((".xshg", ".xshe")):       # 聚宽写法（#55）：.XSHG=上交所 / .XSHE=深交所，000001.XSHG=上证指数
        return "sh" if c.endswith(".xshg") else "sz"
    if c.startswith(("sh", "sz", "bj")):     # 显式前缀透传（如 sh000001=上证指数 vs sz000001=平安银行）
        return c[:2]
    if c.startswith("92"):                   # 北交所 2024-10 起的新股号段，必须先于下面的 9x 判断
        return "bj"
    if c.startswith(("5", "6", "9")):        # 5x=沪 ETF/LOF，6/9=沪个股（900xxx=沪 B 股）
        return "sh"
    if c.startswith(("4", "8")):             # 4x/8x=北交所【老号段，多数已迁 920，见下方警告】
        return "bj"
    if c in SH_INDEX:                         # 沪深300/上证50 等沪指数（000xxx）
        return "sh"
    return "sz"                              # 深市个股/ETF（00/30/15x/16x/159 等），深指数 399xxx 亦走 sz

```

> **歧义说明：** `000001` 默认按个股→`sz000001`（平安银行）；要上证指数请显式传 `sh000001`。`000016` 默认按沪指数→上证50；要深康佳A 请传 `sz000016`。

> ### ⚠️ 北交所老号段（43/83/87）已基本作废 — 会拿到僵尸数据且不报错
>
> **2026-07-31 实测：** 东财北交所在市 342 只中 **336 只已是 `920xxx` 号段**，仅剩 3 只老码且全部停牌。存量公司代码已整体迁移（如 锦波生物 `832982`→`920982`、贝特瑞 `835185`→`920185`）。
>
> **危险在于老码不会报错，而是返回看似正常的脏数据：**
>
> | 接口 | 传老码 `832982` | 传新码 `920982` |
> |------|----------------|----------------|
> | 腾讯行情 | 返回 **112.60、成交量 0**（定格在迁移日） | 131.74，正常成交 ✅ |
> | 腾讯行情（贝特瑞） | `835185` → 45.91、成交量 0 | `920185` → 21.05 ✅ |
> | 东财研报 | **0 篇**（静默空） | 79 篇 ✅ |
>
> 老码行情价与真实价可差 17%~100%+，直接拿去算估值会得出完全错误的结论。
>
> **判定僵尸报价：** `成交量 == 0 且 最新价 == 昨收` → 极可能是已迁移的废码（真停牌股同样满足，两者都不该用于估值）。`tencent_quote()` 已内置该检测并置 `is_stale` 标志，见 §1.1。
>
> **拿新码：** 用 `push2` 北交所全量清单 `fs=m:0+t:81+s:2048` 按名称反查现行代码。

### Ticker 格式归一化

`norm_ticker()` 把下列写法统一成纯 6 位数字：

> ⚠️ **不是所有端点都自动归一化**（V3.6.0 前这里写的是「所有接口统一支持」，与实现不符，已改正）。
> - **已内置归一化**：§2.1 `eastmoney_reports()`、§2.2 `ths_eps_forecast()`。
> - **只认纯 6 位或显式 `sh`/`sz`/`bj` 前缀**（其余端点）：`tencent_quote()` 等走 `get_prefix()` 路由的函数
>   支持 `600519` 和 `sh600519`，但**不认后缀式** `600519.SH`——实测会拼成 `sh600519.SH` 并返回空载荷（静默失败）。
> - **结论**：拿到用户输入的代码，**先过一遍 `norm_ticker()` 再传给任何端点**，最省事也最安全。
>   例外：输入本身带市场信息且落在 000 歧义段（`000001.SH` / `000001.XSHG` = 上证指数）时，`norm_ticker()` 会丢掉市场，
>   应改用 `get_prefix(c) + norm_ticker(c)` 得到 `sh000001` 再传。聚宽代码互转见下方 `to_joinquant()`（#55）。

| 输入 | 归一化结果 |
|------|-----------|
| `688017` | `688017` |
| `SH688017` / `sh688017` | `688017` |
| `688017.SH` / `688017.sh` | `688017` |
| `SZ000001` | `000001` |
| `BJ920982` | `920982` |
| `600519.XSHG` / `000001.XSHE`（聚宽写法，#55） | `600519` / `000001` |

```python
import re

# 整串锚定匹配，只认下表列出的写法；市场标识前缀、后缀**二选一，不能同时出现**。
# ⚠️ 两个坑都会造成「静默拿到另一只股票的数据」，比报错危险得多：
#   ① 别用 re.search(r"\d{6}") 从任意串里"捞"6 位："6005190"/"foo600519bar" 会被截成 600519。
#   ② 别让前后缀同时可选：`SH000001.SZ` 这种自相矛盾的写法会被照单全收，
#      而 000001 恰是歧义码（sh000001=上证指数 / sz000001=平安银行），静默丢掉市场信息＝选错标的。
# 捕获组：1=前缀市场 2=前缀式代码 | 3=后缀式代码 4=后缀市场
# 市场标识要**同时**从前缀和后缀取——只认 startswith("sh") 会漏掉 `000001.SH` 这种后缀写法。
_TICKER_RE = re.compile(
    r"^(?:(sh|sz|bj)(\d{6})|(\d{6})(?:\.(sh|sz|bj|xshg|xshe))?)$", re.IGNORECASE)
_JQ_SUFFIX = {"xshg": "sh", "xshe": "sz"}    # 聚宽后缀 → 市场（#55）；聚宽未公开北交所后缀，不猜

def _natural_market(digits: str) -> str:
    """6 位码的自然归属市场。仅用于校验显式前缀是否自相矛盾。
    注意 000xxx 是沪指数/深个股共用的歧义段，由调用处单独处理，不走这里。"""
    if digits.startswith(("4", "8", "92")):
        return "bj"                      # 北交所：与 get_prefix() 同一套号段规则（92x 现行 / 4x·8x 老号段，#51）
    if digits[0] in ("5", "6", "9"):
        return "sh"                      # 5x 沪 ETF/LOF，6xx 沪个股，9xx 沪 B 股
    return "sz"                          # 00x/30x/15x/16x/39x 等

def norm_ticker(code: str, stock_only: bool = False) -> str:
    """任意受支持写法 → 纯 6 位数字代码。

    支持 600519 / SH600519 / sh600519 / 600519.SH / BJ920982 等。
    stock_only=True：个股专用接口（研报、一致预期等）传这个，会拒绝显式指数写法。
    ⚠️ 不匹配时**抛 ValueError，绝不静默返回空串或猜一个代码**——
    否则调用方会把「代码格式写错」误读成「这只票没有数据」，
    或者更糟：拿到另一只股票的数据还以为是对的。
    """
    raw = str(code).strip()
    m = _TICKER_RE.match(raw)
    if not m:
        raise ValueError(
            f"无法把 {code!r} 解析为 6 位股票代码；"
            f"支持格式：600519 / SH600519 / sh600519 / 600519.SH / 600519.XSHG（聚宽）"
            f"（前缀与后缀二选一，不能同时写）"
        )
    digits = m.group(2) or m.group(3)
    market = (m.group(1) or m.group(4) or "").lower()      # 前缀式与后缀式都要认
    market = _JQ_SUFFIX.get(market, market)                  # 600519.XSHG ≡ 600519.SH
    # 归一化会丢掉市场标识，若标识与号段矛盾就会静默落到另一只票上，必须在这里拦。
    if market:
        if digits.startswith("000"):
            # 000xxx 是**沪市指数 / 深市个股共用**的歧义段，显式标识在这里是「消歧」不是「矛盾」：
            #   sh000001=上证指数 vs sz000001=平安银行；sh000016=上证50 vs sz000016=深康佳A。
            if market == "bj":
                raise ValueError(f"{code!r} 市场标识与号段矛盾：000xxx 不属北交所。")
            # 沪市个股只有 600/601/603/605/688/689（B 股 900），**不存在 000xxx 沪市个股**，
            # 所以「显式 sh + 000 段」必然是指数。实测不拦的话：sh000001→平安银行研报 100 篇、
            # sh000016→深康佳A、sh000039→中集集团 84 篇，全是别人的数据。
            if stock_only and market == "sh":
                raise ValueError(
                    f"{code!r} 指向沪市指数而非个股（沪市无 000xxx 个股），本接口只服务个股。"
                    f"要查同号段的深市个股请显式传 sz{digits}。"
                )
        else:
            nat = _natural_market(digits)
            if market != nat:
                raise ValueError(
                    f"{code!r} 的市场标识与号段矛盾：{digits} 属 {nat} 市，而不是 {market} 市。"
                    f"（改用 {nat}{digits} 或去掉市场标识）"
                )
    return digits

# 用法
norm_ticker("SH600519")      # '600519'
norm_ticker("600519.SH")     # '600519'
norm_ticker("bj920982")      # '920982'
norm_ticker("6005190")       # ValueError（7 位，不会被截成 600519）
norm_ticker("茅台")           # ValueError
norm_ticker("SH000001.SZ")   # ValueError（前后缀矛盾，不猜市场）
norm_ticker("SH000001", stock_only=True)     # ValueError（上证指数，不是平安银行）
norm_ticker("000001.SH", stock_only=True)    # ValueError（后缀写法同样拦下）
norm_ticker("SZ600519")                      # ValueError（600519 是沪市，标识矛盾）
norm_ticker("sz000016")                      # '000016'（深康佳A，000 段的显式消歧，合法）
norm_ticker("600519.XSHG")                   # '600519'（聚宽写法，#55）
norm_ticker("600519.XSHE")                   # ValueError（600519 是沪市，聚宽后缀同样校验）


def em_market_code(code: str) -> int:
    """东财 secid 的市场号：**沪=1，深/北=0**（V3.7.0 新增 · #46）。

    ⚠️ 绝不要用 `code.startswith("6")` 判市场 —— 那会把**沪市 ETF（51x）**、
    **科创板 ETF（588x）**、**沪 B 股（900x）** 全部错判成深市，接口返回 `data: null`。
    2026-08-19 实测：510300 / 588000 / 600519 / 688112 / 900901 → m=1；
    300750 / 159915 / 920982 / 832982 → m=0（北交所与深市共用 m=0）。
    """
    return 1 if get_prefix(code) == "sh" else 0


def em_secid(code: str) -> str:
    """东财 push2/push2his 的 secid，如 `1.600519` / `0.300750`。"""
    return f"{em_market_code(code)}.{norm_ticker(code)}"


def to_joinquant(code: str) -> str:
    """任意受支持写法 → 聚宽代码，如 `600519.XSHG` / `000001.XSHE`（#55）。

    000 段歧义码按 get_prefix() 的规则走：`to_joinquant("sh000001")` → `000001.XSHG`（上证指数），
    `to_joinquant("000001")` → `000001.XSHE`（平安银行）。反方向（聚宽 → 本 Skill）用
    `get_prefix(c) + norm_ticker(c)` 得到 `sh000001` 这类显式前缀写法，再传给各端点。
    北交所：聚宽公开文档与 jqdatasdk 源码（2026-09-20 查）只有 .XSHG / .XSHE，没查到北交所后缀，抛 ValueError 不猜。
    """
    digits, market = norm_ticker(code), get_prefix(code)
    if market == "bj":
        raise ValueError(f"{code!r} 是北交所证券；聚宽公开文档未给出北交所后缀，不做转换")
    return f"{digits}.{'XSHG' if market == 'sh' else 'XSHE'}"
```

### 东财数据中心统一查询（共用 helper）

龙虎榜/解禁/融资融券/大宗交易/股东户数/分红 共用同一 base URL：

```python
import time
import random
import requests

UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
DATACENTER_URL = "https://datacenter-web.eastmoney.com/api/data/v1/get"

# ── 东财防封：全局节流 + 会话复用 ────────────────────────────────────
# 东财系 HTTP 接口（push2 / datacenter / reportapi / search / np-weblist）有风控：
#   每秒 >5 次 / 单 IP 并发 ≥10 / 1 分钟 ≥200 次  →  临时封 IP。
# 所有 eastmoney.com 请求一律走 em_get()：串行限流（最小间隔 + 随机抖动）+ 复用
# Keep-Alive 会话，批量调用时自动降速，避免被封。详见「数据源优先级 & 东财防封」章节。
EM_SESSION = requests.Session()
EM_SESSION.headers.update({"User-Agent": UA})
# 连接级自动重试：瞬态连接错误 / 429 / 5xx 指数退避重试（住宅IP偶发风控更稳）。
# 注意：403 不重试（东财风控信号，重试无益反而加重；按下方 EM_MIN_INTERVAL 降频应对）。
try:
    from requests.adapters import HTTPAdapter
    from urllib3.util.retry import Retry
    _em_adapter = HTTPAdapter(max_retries=Retry(
        total=3, connect=3, backoff_factor=0.6,
        status_forcelist=[429, 500, 502, 503, 504], allowed_methods=["GET"]))
    EM_SESSION.mount("https://", _em_adapter)
    EM_SESSION.mount("http://", _em_adapter)
except Exception:
    pass  # 老版本 urllib3 缺 allowed_methods 等参数时降级为无重试，不影响主流程
from typing import Optional     # 3.9 兼容：不能写 `dict | None`（那是 3.10+ 语法）

EM_MIN_INTERVAL = 1.0          # 两次东财请求最小间隔(秒)；批量筛选建议调大到 1.5~2
_em_last_call = [0.0]          # 模块级上次请求时间戳

def em_get(url: str, params: Optional[dict] = None, headers: Optional[dict] = None,
           timeout: int = 15, **kwargs):
    """东财统一请求入口：自动节流 + 复用 session + 默认 UA。
    所有 eastmoney.com 接口都应通过它请求，避免高频被封 IP。"""
    wait = EM_MIN_INTERVAL - (time.time() - _em_last_call[0])
    if wait > 0:
        time.sleep(wait + random.uniform(0.1, 0.5))
    try:
        return EM_SESSION.get(url, params=params, headers=headers, timeout=timeout, **kwargs)
    finally:
        _em_last_call[0] = time.time()

def eastmoney_datacenter(report_name: str, columns: str = "ALL",
                          filter_str: str = "", page_size: int = 50,
                          sort_columns: str = "", sort_types: str = "-1") -> list[dict]:
    """东财数据中心统一查询 — 龙虎榜/解禁/融资融券/大宗交易/股东户数/分红 共用（已内置限流）"""
    params = {
        "reportName": report_name, "columns": columns,
        "filter": filter_str, "pageNumber": "1", "pageSize": str(page_size),
        "sortColumns": sort_columns, "sortTypes": sort_types,
        "source": "WEB", "client": "WEB",
    }
    r = em_get(DATACENTER_URL, params=params, timeout=15)
    d = r.json()
    if d.get("result") and d["result"].get("data"):
        return d["result"]["data"]
    return []
```

### V3.9.0 共用 helper（§1.2 腾讯 K 线起的所有 V3.9.0 / V3.10.0 新端点都依赖它）

先执行上面的 `get_prefix` / `norm_ticker` / 东财 `em_get` 代码块，再执行本块。V3.9.0 新端点统一返回 DataFrame，
末尾附 `source` / `source_url` / `fetched_at` 三列。**「确实没有数据」与「接口坏了」分开处理**：前者返回空表或抛
`ValueError`（非交易日、日期太早），后者抛 `RuntimeError`（结构改变、重复行、全市场 0 行），不把错误页当空结果。
东财请求一律经 `em_get()` 限流；`_em_datacenter_strict()` 与旧 `eastmoney_datacenter()` 的区别是会翻页、并把错误码抛出来。

<!-- v39-helpers:start -->
```python
import functools
import math
import re
from datetime import date as _date_cls, datetime, timezone

import pandas as pd
import requests

V39_UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
          "(KHTML, like Gecko) Chrome/126.0 Safari/537.36")

# 一次要翻几十页（§1.4 腾讯逐笔）或偶尔握手卡住（§13.7 新浪期货日 K）的请求走这个会话：复用连接，
# 连接失败、握手或等响应头超时、429 / 5xx 指数退避重试（写法同 EM_SESSION）；读响应体中途超时不重试，
# 也不按服务端给的 Retry-After 等待。
V39_RETRY_SESSION = requests.Session()
try:
    from requests.adapters import HTTPAdapter
    from urllib3.util.retry import Retry
    _v39_retry_adapter = HTTPAdapter(max_retries=Retry(
        total=3, connect=3, backoff_factor=0.6, respect_retry_after_header=False,
        status_forcelist=[429, 500, 502, 503, 504], allowed_methods=["GET"]))
    V39_RETRY_SESSION.mount("https://", _v39_retry_adapter)
    V39_RETRY_SESSION.mount("http://", _v39_retry_adapter)
except Exception:
    # 老版本 urllib3（< 1.26）缺 allowed_methods：不重试，也不复用连接（复用的连接被服务端断开时没有重试兜底），同 v3.10.0
    V39_RETRY_SESSION = None


def _v39_http(url, params=None, data=None, headers=None, method="GET", timeout=(10, 40),
              allow_status=(), allow_redirects=True, session=None):
    """非东财的 HTTP 请求：带浏览器 UA。网络错误、非 2xx 一律抛 RuntimeError（不把错误页当数据）；
    allow_status 里的状态码（源用 404 表示「当天没发布」时）原样返回，由调用方判断。
    session：传 V39_RETRY_SESSION 复用连接并自动重试（哪些情况重试见它的定义）；不传每次新建连接、不重试。"""
    merged = {"User-Agent": V39_UA}
    merged.update(headers or {})
    try:
        response = (session or requests).request(method, url, params=params, data=data, headers=merged,
                                                 timeout=timeout, allow_redirects=allow_redirects)
        if response.status_code not in allow_status:
            response.raise_for_status()
    except requests.RequestException as exc:
        raise RuntimeError(f"请求 {url} 失败: {type(exc).__name__}: {exc}") from exc
    return response


def _v39_json(response):
    """解析 JSON；不是 JSON 抛 RuntimeError。json 的解析错误是 ValueError 的子类，
    不转换会被调用方当成「确实没有数据」。"""
    try:
        return response.json()
    except ValueError as exc:
        raise RuntimeError(f"{getattr(response, 'url', '')} 返回的不是 JSON，可能是错误页") from exc


def _v39_date(value):
    """'2026-09-18' / '20260918' / date 对象 → '2026-09-18'；其他写法抛 ValueError。"""
    if isinstance(value, datetime):
        return value.date().isoformat()
    if isinstance(value, _date_cls):
        return value.isoformat()
    text = str(value).strip()
    fmt = "%Y%m%d" if re.fullmatch(r"[0-9]{8}", text) else "%Y-%m-%d"
    return datetime.strptime(text, fmt).date().isoformat()


def _v39_src_date(value):
    """来源返回的日期 → 'YYYY-MM-DD'；认不出抛 RuntimeError（源格式变了，不是参数写错）。"""
    try:
        return _v39_date(value)
    except ValueError as exc:
        raise RuntimeError(f"来源返回了无法识别的日期 {value!r}") from exc


def _v39_num(value):
    """'1,234.50' → 1234.5；空串 / '-' / '--' / None → None；其他非数字抛 RuntimeError
    （来源给了认不出的值是「源的格式变了」，不能和参数错误的 ValueError 混在一起）。
    JSON 布尔值同样抛错：float(True)=1.0 会把格式错误静默写成价格 / 成交量。"""
    if value is None:
        return None
    if isinstance(value, bool):
        raise RuntimeError(f"来源在数值字段给了布尔值 {value!r}")
    if isinstance(value, (int, float)):
        if isinstance(value, float) and not math.isfinite(value):
            return None
        return float(value)
    text = str(value).replace(",", "").strip()
    if text in ("", "-", "--", "None", "null"):
        return None
    try:
        number = float(text)
    except ValueError as exc:
        raise RuntimeError(f"来源返回了无法识别的数值 {value!r}") from exc
    return number if math.isfinite(number) else None


def _v39_rows(value, what):
    """来源里可能整段缺失的行列表：字段没有（None）按空处理，其余必须是对象列表。
    写成 `value or []` 会把 {} / '' / 0 这类结构改变也当成空表，静默丢掉整段数据。"""
    if value is None:
        return []
    if not isinstance(value, list) or not all(isinstance(row, dict) for row in value):
        raise RuntimeError(f"{what} 应为对象列表，实际是 {type(value).__name__}: {str(value)[:120]}")
    return value


def _v39_labels(value, what):
    """来源的标签数组（频道名之类）：None 按空处理，其余必须是字符串列表。
    直接 `value or []` 再 join，来源把数组改成字符串时会被拆成单字（'ab' → 'a,b'）。"""
    if value is None:
        return []
    if not isinstance(value, list) or not all(isinstance(x, str) for x in value):
        raise RuntimeError(f"{what} 应为字符串列表，实际是 {type(value).__name__}: {str(value)[:120]}")
    return value


def _v39_req_num(value, what):
    """必填数值（价格、成交量）：在 _v39_num 之上，空值 / NaN / inf 也抛 RuntimeError，不能当缺失放过。"""
    number = _v39_num(value)
    if number is None:
        raise RuntimeError(f"来源的 {what} 为空或不是有限数值: {value!r}")
    return number


def _v39_contract(func):
    """统一异常契约：来源行缺字段时 row["X"] 会漏出 KeyError，调用方按「参数错 / 没数据」处理就会
    把「来源格式变了」当成正常情况。这里把它转成带函数名和字段名的 RuntimeError。
    （函数内所有按用户参数取字典的地方都先校验过参数，不会走到这里。）"""
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        try:
            return func(*args, **kwargs)
        except KeyError as exc:
            raise RuntimeError(f"{func.__name__}: 来源数据缺少字段 {exc}，格式可能已变") from exc
    return wrapper


def _v39_count(value, what):
    """来源自报的页数 / 条数 → 非负 int。只认 int 或纯数字串；bool 抛错（int(True)=1 会让
    「只返回 1 条」通过完整性核对），其他写法也抛 RuntimeError。"""
    text = str(value).strip() if isinstance(value, (int, str)) and not isinstance(value, bool) else ""
    if not re.fullmatch(r"[0-9]+", text):
        raise RuntimeError(f"{what} 不是非负整数: {value!r}")
    return int(text)


def _v39_frame(rows, source, url, columns=None):
    """统一出表：附 source / source_url / fetched_at。rows 为空时返回带列名的空表，
    是否允许为空由调用方判断（「确实没有」与「接口坏了」要分开处理）。"""
    frame = pd.DataFrame(rows, columns=columns)
    frame["source"] = source
    frame["source_url"] = url
    frame["fetched_at"] = datetime.now(timezone.utc).isoformat()
    return frame


def _em_datacenter_strict(report_name, filter_str="", sort_columns="", sort_types="",
                          page_size=500, max_rows=5000, columns="ALL", extra=None):
    """东财 datacenter 严格版：code=0 取数据；第 1 页就 9201(返回数据为空) → []；其他错误码直接抛。

    与旧 eastmoney_datacenter() 的区别：后者把任何失败都变成 []，调用方分不清
    「这只票确实没有」和「参数写错/被风控」。sortTypes 个数必须与 sortColumns 一致，
    否则东财返回 9501「排序字段和顺序数量不一致」。
    翻页中途失败（第 2 页起 9201、空页、非末页不满页、缺 pages / count、总页数或总条数变了、
    最终条数与 count 不符）抛 RuntimeError，不把部分结果当完整结果返回。
    payload / result 不是对象、data 不是由对象组成的列表，同样抛 RuntimeError。
    只有「第 1 页、pages=1、data 为空」才算确实没有数据。
    max_rows 只在来源自报总数 count > max_rows 时提前截断；count 不超过上限的，一律走完分页并核对总数。
    """
    n_cols = len([c for c in sort_columns.split(",") if c]) if sort_columns else 0
    n_types = len([t for t in sort_types.split(",") if t]) if sort_types else 0
    if n_cols != n_types:
        raise ValueError(f"sortColumns({n_cols}) 与 sortTypes({n_types}) 个数不一致")
    rows, page, first = [], 1, None
    while True:
        params = {"reportName": report_name, "columns": columns, "filter": filter_str,
                  "pageNumber": str(page), "pageSize": str(page_size),
                  "sortColumns": sort_columns, "sortTypes": sort_types,
                  "source": "WEB", "client": "WEB"}
        params.update(extra or {})
        try:
            response = em_get(DATACENTER_URL, params=params, timeout=20)
            response.raise_for_status()
        except requests.RequestException as exc:
            raise RuntimeError(f"东财 {report_name} 请求失败: {type(exc).__name__}: {exc}") from exc
        payload = _v39_json(response)
        if not isinstance(payload, dict):
            raise RuntimeError(f"东财 {report_name} 返回的不是 JSON 对象: {str(payload)[:100]}")
        if payload.get("code") == 9201:
            if page == 1:
                return []
            raise RuntimeError(f"东财 {report_name} 第 {page} 页返回「数据为空」，"
                               f"前面已取 {len(rows)} 条，结果不完整")
        if payload.get("code") != 0 or not payload.get("result"):
            raise RuntimeError(f"东财 {report_name} 返回错误: "
                               f"{payload.get('code')} {payload.get('message')}")
        result = payload["result"]
        if not isinstance(result, dict):
            raise RuntimeError(f"东财 {report_name} 的 result 不是对象: {str(result)[:100]}")
        pages, count, data = result.get("pages"), result.get("count"), result.get("data")
        if data is None:
            data = []
        if not isinstance(data, list) or not all(isinstance(r, dict) for r in data):
            raise RuntimeError(f"东财 {report_name} 第 {page} 页的 data 不是由对象组成的列表，格式可能已变")
        if (any(isinstance(v, bool) or not isinstance(v, int) for v in (pages, count))
                or pages < 1 or count < 0):
            raise RuntimeError(f"东财 {report_name} 缺少分页信息（pages={pages!r}, count={count!r}）")
        if first is None:
            first = (pages, count)
        elif (pages, count) != first:
            raise RuntimeError(f"东财 {report_name} 翻页时总页数 / 总条数从 {first} 变成 {(pages, count)}，"
                               "结果可能错位，请重试")
        if not data and (page > 1 or pages > 1):
            raise RuntimeError(f"东财 {report_name} 第 {page}/{pages} 页是空的，结果不完整")
        if page < pages and len(data) != int(page_size):
            raise RuntimeError(f"东财 {report_name} 第 {page}/{pages} 页只有 {len(data)} 条"
                               f"（非末页应为 {page_size} 条），结果不完整")
        rows.extend(data)
        # 只有来源自报的总数确实超过上限才提前截断；否则（count <= max_rows 却已拿到更多行）
        # 必须走完分页并核对总数，不然「data 比 count 还多」这种格式异常会被当成正常截断放过
        if len(rows) >= max_rows and count > max_rows:
            return rows[:max_rows]
        if page >= pages:
            if len(rows) != count:
                raise RuntimeError(f"东财 {report_name} 翻页后 {len(rows)} 条，与总数 {count} 不符")
            return rows
        page += 1


def _em_day(value):
    """东财日期串 '2026-09-18 00:00:00' → '2026-09-18'；空值 → None；认不出的写法抛 RuntimeError
    （只截前 10 个字符会把 '2026/09/18' 原样放行，再拿去和日期串比较就会比错）。"""
    return _v39_src_date(str(value)[:10]) if value else None
```
<!-- v39-helpers:end -->

---## Layer 1: 行情层（实时，不封IP）

> **V3.10.0 起本层重排：能用的在前，2026-09 起失效的 mootdx 行情命令移到最后（§1.7，留档）。**
> 旧编号 → 新编号：1.2→1.1 腾讯实时、1.5→1.2 腾讯 K 线、1.6→1.3 通达信盘后包、1.3→1.5 百度、1.4→1.6 新浪复权因子、1.1→1.7 mootdx；
> §1.4 腾讯逐笔为新增。CHANGELOG 与文件开头的历史版本说明里写的仍是旧编号。

### 1.1 腾讯财经 API — PE/PB/市值/换手率/涨跌停/指数/ETF

HTTP GET，GBK 编码，`~` 分隔 88 个字段，不封IP。

```python
import urllib.request

def tencent_quote(codes: list[str]) -> dict[str, dict]:
    """
    批量拉取腾讯财经实时行情。
    codes: ["688017", "300476", "002463"]
    也支持指数: ["000001", "000300", "399006"]
    也支持ETF: ["510050", "510300"]
    返回: {code: {name, price, pe_ttm, pb, mcap, ...}}
    """
    # 前缀路由：与全局 get_prefix() 一致。5x 沪ETF / 000300 等沪指数不能落到 sz（会返回空或错票）。
    SH_INDEX = {"000300", "000905", "000016", "000688", "000852", "000010"}   # 沪指数白名单
    prefixed = []
    key_of = {}          # 带前缀的查询键 → 调用方原始写法，保证结果键与入参一一对应
    for c in codes:
        low = c.lower()
        if low.startswith(("sh", "sz", "bj")):        # 显式前缀透传，解决 000001 等歧义
            p = low
        elif c.startswith("92"):                      # 北交所 920 号段须先于 9x 判断
            p = f"bj{c}"
        elif c in SH_INDEX or c.startswith(("5", "6", "9")):
            p = f"sh{c}"
        elif c.startswith(("4", "8")):
            p = f"bj{c}"
        else:
            p = f"sz{c}"
        prefixed.append(p)
        key_of[p] = c    # 显式前缀入参原样返回，裸代码返回裸代码

    url = "https://qt.gtimg.cn/q=" + ",".join(prefixed)
    req = urllib.request.Request(url)
    req.add_header("User-Agent", "Mozilla/5.0")
    resp = urllib.request.urlopen(req, timeout=10)
    data = resp.read().decode("gbk")

    result = {}
    for line in data.strip().split(";"):
        if not line.strip() or "=" not in line or '"' not in line:
            continue
        key = line.split("=")[0].split("_")[-1]
        vals = line.split('"')[1].split("~")
        if len(vals) < 53:
            continue
        # 用入参原样做键：批量里同时传 sh000001 与 sz000001 时，若都退回裸 6 位码
        # 会撞成同一个键、后者静默覆盖前者，显式前缀这个特性就白做了。
        code = key_of.get(key, key[2:])
        result[code] = {
            "name":         vals[1],
            "price":        float(vals[3]) if vals[3] else 0,
            "last_close":   float(vals[4]) if vals[4] else 0,
            "open":         float(vals[5]) if vals[5] else 0,
            "change_amt":   float(vals[31]) if vals[31] else 0,
            "change_pct":   float(vals[32]) if vals[32] else 0,
            "high":         float(vals[33]) if vals[33] else 0,
            "low":          float(vals[34]) if vals[34] else 0,
            "amount_wan":   float(vals[37]) if vals[37] else 0,
            "turnover_pct": float(vals[38]) if vals[38] else 0,
            "pe_ttm":       float(vals[39]) if vals[39] else 0,
            "amplitude_pct":float(vals[43]) if vals[43] else 0,
            # ⚠️ 44=流通市值、45=总市值（曾标反）。总股本≠流通股本时差数倍，见上方踩坑提醒二
            "float_mcap_yi":float(vals[44]) if vals[44] else 0,
            "mcap_yi":      float(vals[45]) if vals[45] else 0,
            "pb":           float(vals[46]) if vals[46] else 0,
            "limit_up":     float(vals[47]) if vals[47] else 0,
            "limit_down":   float(vals[48]) if vals[48] else 0,
            "vol_ratio":    float(vals[49]) if vals[49] else 0,
            "pe_static":    float(vals[52]) if vals[52] else 0,
        }
        # 僵尸报价检测：腾讯对「已迁移的北交所老码 / 长期停牌股」照样返回 HTTP 200 +
        # 一份定格在最后交易日的报价（成交量 0、最新价==昨收），不报任何错。
        # 直接拿去算估值会得出完全错误的结论（实测 bj832982 报 112.60，真实新码 920982 为 131.74）。
        q = result[code]
        q["is_stale"] = (q["amount_wan"] == 0 and q["price"] == q["last_close"] and q["price"] > 0)
        if q["is_stale"] and key[2:4] in ("43", "83", "87"):
            q["stale_reason"] = "北交所老号段，多数已迁至 920xxx，请按名称反查现行代码"
        elif q["is_stale"]:
            q["stale_reason"] = "成交量为 0（停牌 / 未开盘 / 废码），报价非当日真实成交"
    return result

# 用法: 个股
quotes = tencent_quote(["688017", "300476", "002463"])
for code, q in quotes.items():
    print(f"{q['name']}({code}): {q['price']}元 PE={q['pe_ttm']} PB={q['pb']} 市值={q['mcap_yi']}亿")

# 用法: 指数 — sh000001=上证指数, sh000300=沪深300, sz399006=创业板指
index_quotes = tencent_quote(["000001", "000300", "399006"])

# 用法: ETF — sh510050=上证50ETF, sh510300=沪深300ETF
etf_quotes = tencent_quote(["510050", "510300"])
```

#### 腾讯财经字段索引速查（实测校准 2026-05-03）

| 索引 | 含义 | 示例 |
|------|------|------|
| 1 | 名称 | 绿的谐波 |
| 3 | 当前价 | 224.12 |
| 4 | 昨收 | 215.01 |
| 5 | 今开 | 214.10 |
| 9-18 | 买一~买五(价+量) | |
| 19-28 | 卖一~卖五(价+量) | |
| 31 | 涨跌额 | 9.11 |
| 32 | 涨跌幅% | 4.24 |
| 33 | 最高 | 229.62 |
| 34 | 最低 | 214.10 |
| 37 | 成交额(万) | 187040 |
| 38 | 换手率% | 4.55 |
| **39** | **PE(TTM)** | 300.45 |
| **43** | **振幅%（不是PB！）** | 7.22 |
| **44** | **流通市值(亿)** | 410.88 |
| **45** | **总市值(亿)** | 410.88 |
| **46** | **PB(市净率)** | 11.51 |
| **47** | **涨停价** | 258.01 |
| **48** | **跌停价** | 172.01 |
| 49 | 量比 | 1.20 |
| **52** | **PE(静)** | 314.76 |

> **踩坑提醒一：** 网上很多教程把索引 43 写成 PB，实测是振幅%。PB 在索引 46。
>
> **踩坑提醒二（2026-07-26 修正）：** **44 是流通市值、45 才是总市值**，此前本表标反了。
> 多数股票两者相等，所以看不出来；但**总股本 ≠ 流通股本的票（科创板/次新股/有限售股）会差出数倍**。
> 实测中船特气(688146)：`f[44]=356.15亿`(流通股本 1.45亿股)、`f[45]=1300.61亿`(总股本 5.29亿股)，**差 3.65 倍**。
> 用市值做筛选时取错会把大市值公司误判成小盘股。可用 `f[45] ÷ 现价` 反推总股本核对（与东财 `f84` 一致）。
> 参考：东财 push2 的 `f116`=总市值 / `f117`=流通市值 方向与腾讯相反，实测确认无误，勿混用。

### 1.2 腾讯 K 线 — 日/周/月前后复权 + 1~60 分钟（V3.9.0 新增 · #52）

§1.7 mootdx K 线失效（#52）后的主力 K 线源。三个入口是同一后端、限流各自独立：某入口返回空或异常时冷却 120 秒、换下一个，
三个都不可用才抛错（#52 实测单入口约 600 次后返回空 JSON）。**只支持沪深**：腾讯对北交所只返回最新 1 根日线、
区间和分钟线都是空的（2026-09-20 实测 920021 / 920982 / 920185），函数遇北交所代码直接抛 `ValueError`，北交所日线用 §1.3。

| 参数 | 说明 |
|---|---|
| `period` | `day` / `week` / `month`：默认前复权，可 `adjust='hfq'` 或 `adjust=''`（不复权）；`m1` / `m5` / `m15` / `m30` / `m60`：只有不复权、只能取最近 ≤320 根 |
| `start` / `end` | 仅日周月可用，自动按段翻页（单段 <640 根）；不给 `start` 时取最近 `count` 根（≤640） |
| 返回列 | `code` / `adjust`（仅日周月）/ `date` / `open` / `high` / `low` / `close` / `volume`；分钟线另有 `turnover_rate_pct`，日期列名为 `datetime` |
| `volume` 单位 | **科创板（688 / 689）是股**，其余是手：沪深主板、创业板、B 股、ETF（含科创板 ETF 588）、LOF、REITs 1 手 = 100 股 / 份，可转债 1 手 = 10 张，指数也是手；日周月线、分钟线、复权与否都是这个规则 |

> ⚠️ **腾讯前复权是等差口径**（逐次减去每股分红）：茅台 2020-01-02 原始价 1130.00、腾讯 qfq 870.741，差额正是此后累计分红；
> 高分红老股早年会被减成负数（茅台 2015 年约 -117.6）。本函数遇到 ≤0 价格直接抛错。**长区间回测请取 `adjust=''`，
> 再用 §1.6 的比例因子复权**。本接口**没有成交额**，需要成交额用 §1.3。

> ⚠️ **成交量按股对账前先看这几条**（#57，2026-10-05 对照通达信盘后包与 Baostock 实测）：
> - **整手取整**：科创板以外，日线的量是当日总股数取整到手——2020-03-11 起基本是四舍五入（实测差 −52～+50 股），更早是舍去零头（差 −99～0 股），
>   日线不会回填，周 / 月线是日线相加。分钟线**最近一个交易日**也是逐根整手，要到下一个交易日才回填成精确股数（会出现 34967.59 这样的小数手），
>   回填后当日各根合计与盘后包逐股一致；确切的回填时点没测出来。科创板的分钟量当天就是精确股数。
>   ⇒ **最近一个交易日的分钟量别拿来按股精确对账**。本函数 m1 最多 320 根（约 1.3 天），要拿整天已回填的数据用 m5 / m60（320 根约 6 / 80 个交易日）。
> - **1 分钟线**每天 241 根：09:30 那根只有开盘集合竞价（竞价没成交就没有这根），m5 及以上把竞价并进第一根。
>   13:01 那根的开盘价是上午收盘价、不是午后第一笔，用 m1 自己合成 5 分钟线时 13:05 的开盘价会和腾讯原生 m5 / Baostock 对不上。
> - **深市分钟边界**：整分那一刻（hh:mm:00）的成交，腾讯算进下一根（m1、原生 m5 都是；11:30:00 那一刻例外，留在 11:30 那根），Baostock 算进上一根，所以深市逐根量价对不上
>   （改按开始时刻分桶也拼不回来）、全天合计一致；沪市已回填的日子腾讯原生 m5 与 Baostock 5 分钟逐根一致。
> - **没有成交的分钟**：当天第一笔成交以前沪深都没有行（集合竞价没成交时连 09:30 那根也没有；09-30 抽 54 只沪深 B 股，第一笔晚于 09:30 的 43 只都从第一笔那分钟才有行）。
>   第一笔以后，沪市没有成交的分钟给一根量为 0、四个价基本都等于上一根收盘的行，不缺行；深市大多也这样，但会整根缺失
>   （09-30 抽 51 只低成交深市股，25 只共缺 64 分钟，抽查的缺失分钟逐笔里都没有成交）。按分钟格点对齐时要自己处理缺行。

<!-- v39-tencent-kline:start -->
```python
import time
from datetime import date, datetime, timedelta

# 三个入口是同一后端，但限流各自独立（#52 实测单域名约 600 次后返回空 JSON）。
TENCENT_KLINE_HOSTS = ["https://web.ifzq.gtimg.cn",
                       "https://proxy.finance.qq.com/ifzqgtimg",
                       "https://ifzq.gtimg.cn"]
_TENCENT_HOST_COOLDOWN = 120          # 某入口失败后暂停使用的秒数
_tencent_host_down_until = {}
_TENCENT_MINUTES = ("m1", "m5", "m15", "m30", "m60")
_TENCENT_SPAN_DAYS = {"day": 700, "week": 3650, "month": 18250}   # 每段 < 640 根


def _tencent_kline_call(path, param):
    """按顺序尝试三个入口；空响应或异常视为该入口被限流，冷却后换下一个。返回 (data, 实际成功的入口)。"""
    errors = []
    for host in TENCENT_KLINE_HOSTS:
        if _tencent_host_down_until.get(host, 0) > time.time():
            continue
        try:
            response = _v39_http(host + path, params={"param": param},
                                 headers={"Referer": "https://gu.qq.com/"}, timeout=(8, 20))
            payload = _v39_json(response) if response.text.strip() else {}
        except RuntimeError as exc:
            errors.append(f"{host}: {type(exc.__cause__ or exc).__name__}")
            _tencent_host_down_until[host] = time.time() + _TENCENT_HOST_COOLDOWN
            continue
        if not isinstance(payload, dict):    # 顶层变成数组 / 字符串：当作这个入口坏了，换下一个
            errors.append(f"{host}: 顶层是 {type(payload).__name__}，不是对象")
            _tencent_host_down_until[host] = time.time() + _TENCENT_HOST_COOLDOWN
            continue
        if payload.get("msg") == "param error":
            raise ValueError(f"腾讯 K 线参数错误（区间过长或代码不存在）: {param}")
        if isinstance(payload.get("data"), dict) and payload["data"]:
            return payload["data"], host
        errors.append(f"{host}: 空响应")
        _tencent_host_down_until[host] = time.time() + _TENCENT_HOST_COOLDOWN
    raise RuntimeError("腾讯 K 线三个入口均不可用（可能被限流，稍后重试）: " + "; ".join(errors))

*(README truncated for display. [Read the full README on GitHub](https://github.com/simonlin1212/a-stock-data)).*
