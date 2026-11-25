# AI 协作日志 / AI Collaboration Log

项目：TransPrompt Bank · 译提示词库　｜　课程：5317 LLM Assignment 1　｜　参与者：周芝宇（学生）× WorkBuddy（AI 编程伙伴）

> 每轮均记录：关键提示词 → 遇到的问题 → 所做的更改 → 参与者所做的决定。

---

## 第一轮：读懂作业要求，把 Word 提示词表变成结构化数据

**关键提示词**

1. 「第一个文件是我这门课的作业要求。要做一个翻译相关的 vibe coding。然后我想把我这个 prompt bank 做成 vibe coding 并且按照作业提交要求部署上线（这里我想用 github），并且还要写 markdown 形式的 readme，请一步一步带着我来弄」
2. 「读取两份本地 docx 的内容：`vibe coding 作业要求.docx` 与 `Assignment 1 Prompt Bank 周芝宇.docx`」

**遇到的问题**

- 本地文档编辑服务返回 401（缺少 `editor_sdk_token`），无法用编辑器接口读取 Word。
- 第一次写提取脚本时，用 `1.1` / `2.1` 这类编号作为记录主键，导致三个阶段的编号互相覆盖——54 条提示词只提取出 9 条。
- 表格里 Stage 和 Scenario 列存在合并单元格，只有每组第一行有值，后续行为空。

**所做的更改**

- 改用只读方式直接解析 `word/document.xml`，不修改原始文件。  
  |  |  |  
  | --- | --- |
- 主键改为 `阶段 + 编号`（如 `pre|1.1`），重新提取得到 27 组记录，每组同时含中英版本，合计 54 条；另提取 2 个 Meta Prompt。
- 场景名称按阶段映射表补全合并单元格，生成 `data.js`。

**参与者所做的决定**

- 应用命名为 **TransPrompt Bank / 译提示词库**（学生选择）。
- 提示词数据保留原始模型名与版本号（含 `n.0`），不做「修正」，保证与作业素材一致。
- 部署目标定为 GitHub Pages，采用静态页面、无构建步骤的路线。

---

## 第二轮：从「能看」做到「好用」——筛选、双语与一键复制

**关键提示词**

1. 「把 prompt bank 做成网页：按阶段、场景筛选，中英切换，搜索，一键复制」
2. 「界面语言和提示词语言要能分开切换；提示词里的 xxx 也能填了再复制」

**遇到的问题**

- 原始提示词大量包含 `xx` / `xxx` 占位符，直接复制后仍要手动替换，体验断裂。
- 中文表和英文表的模型、版本、备注并不完全一致（例如 `pre-1.1` 中文用 Gemini-3.7-flash、英文用 Deepseek-V4.1-Flash-1017），简单合并会丢失信息。
- 只用 `navigator.clipboard` 在 `file://` 或非安全上下文下会失败。

**所做的更改**

|   |   |
| - | - |

- 每张卡片增加占位符输入框，复制时用 `xxx|xx` 正则替换为填写内容。
- 保留中英各自独立的 `model / version / note / format` 字段，随提示词语言切换同步显示。
- 复制逻辑加入 `document.execCommand('copy')` 兜底，并添加「已复制」按钮状态与浮层提示。
- 增加三张可点击的流程卡片（译前 → 译中 → 译后）、场景下拉、全文搜索、空状态和重置按钮。
- 界面语言（header 的 EN / 中 按钮）与提示词语言（工具栏分段控件）解耦，并记住界面语言偏好。

**参与者所做的决定**

- 不接入任何 LLM API：作业核心是提示词资产与流程展示，静态站点更稳、无需登录、符合「无需登录即可访问」的要求。
- 部署分工：AI 准备好全部代码与命令，学生自己在终端逐步执行（学生选择），避免未经确认的公开仓库操作。

---

## 第三轮：按提交规范收尾——README、截图与部署清单

**关键提示词**

1. 「按照作业要求写 markdown 形式的 README，必须双语，包含目标用户、问题、使用说明、AI 工具、至少两名真实用户反馈、根据反馈所做的改进」
2. 「记录至少三轮改进，每轮包括关键提示词、遇到的问题、所做的更改、参与者所做的决定」
3. 「生成首页和核心功能截图，给出 GitHub 部署步骤」

**遇到的问题**

- 作业要求「真实用户反馈」，但当时只有项目所有者本人确认过需求，第二位试用者的原话尚未收集。
- 本机未安装 `gh` CLI，Git 命令行工具也尚未就绪，无法由 AI 直接创建并推送公开仓库。
- 无 Playwright 环境，但本机有 Google Chrome。

**所做的更改**

- README 写成中英双语，覆盖全部提交项；反馈 1 使用学生本人真实表述，反馈 2 留成明确标注的待填模板，并附可直接发给同学的话术。
- 用 Chrome Headless 生成 `screenshots/home.png` 与 `screenshots/features.png`，纳入仓库。
- 编写本日志，按四要素记录三轮改进。
- 给出两可选的 GitHub 上传路径（网页上传 / 命令行），以及开启 Pages 的逐步清单。

**参与者所做的决定**

- 不编造第二位「真实用户」的原话：宁可留清晰占位，也不提交无法核实的反馈。学生需在提交前替换为同学试用的真实原话。
- 在线链接在部署完成后再回填 README 顶部，避免提交无效链接。
- 截图与源代码放在同一仓库，方便评分者核对。

---

## English summary

Three improvement rounds were recorded: (1) parsing the assignment and converting the Word prompt table into structured data — fixed a key-collision bug that initially reduced 54 prompts to 9; (2) turning the data into a usable static app with stage/scenario filters, decoupled interface and prompt language switches, placeholder substitution and clipboard fallback; (3) preparing submission assets — bilingual README, two headless-Chrome screenshots, this log, and a step-by-step GitHub Pages checklist. The participant deliberately left the second user-feedback entry as a clearly marked template rather than inventing a quote.
