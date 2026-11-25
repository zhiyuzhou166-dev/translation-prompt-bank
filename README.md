[README.md](https://github.com/user-attachments/files/35402033/README.md)
# TransPrompt Bank · 译提示词库

> 在线访问 / Live demo：`<部署后填入：https://<你的用户名>.github.io/translation-prompt-bank/>`

一个把翻译工作流（译前 → 译中 → 译后）整理成可检索、可筛选、可一键复制的提示词工具站。纯静态页面，无需登录、无需 API Key。

A static, login-free prompt library that organizes the full translation workflow (pre-production → production → post-production) into searchable, filterable, one-click-copy prompts.

---

## 中文

### 目标用户

- 翻译 / MTI 专业学生：做中英互译练习时，不知道每一步该向大模型问什么。
- 自由译者与内容本地化从业者：需要按流程复用成熟的提问模板，而不是每次从零写提示词。
- LLM 提示词学习者：想观察同一个任务在 DeepSeek、Gemini、GPT、Grok 等不同模型上的提示词写法差异。
- 课程教师与助教：需要一个可直接演示「提示词工程 + 翻译流程」的可运行样例。

### 解决什么问题

1. **提示词散落**：原始 Prompt Bank 是一份 Word 表格，54 条中英提示词混在一起，查找成本高。本工具把它们结构化，支持按阶段、场景、关键词筛选。
2. **流程不清晰**：很多使用者只会说「帮我翻译」，缺少译前调研、术语提取、译后复盘意识。三阶段流水线把专业翻译流程显性化。
3. **占位符麻烦**：原提示词里大量 `xx` / `xxx` 占位符，每次都要手动替换。现在可在卡片里填入内容，复制时自动替换。
4. **中英切换繁琐**：原文档中文表和英文表分离。现在同时提供界面语言切换与提示词语言切换，二者独立。

### 功能

- 27 组双语提示词（中英合计 54 条），按译前 / 译中 / 译后 3 阶段、每阶段 3 场景组织。
- 2 个 Meta Prompt：Prompt Generator（想法升级为专业提示词）与 Prompt Optimiser（诊断并优化现有提示词），均含中英版本。
- 阶段快捷筛选（首页三张流程卡片可点击跳转）、场景下拉筛选、全文搜索。
- 占位符自动替换 + 一键复制（带复制成功反馈）。
- 响应式布局，手机与桌面均可使用。

### 截图

| 首页 | 核心功能 |
| -- | ---- |
| 首页 | 核心功能 |

### 使用说明

**在线使用**：打开在线链接 → 选择阶段或搜索关键词 → 切换「中文提示词 / English Prompts」→ 在 `替换 xx / xxx` 输入框填入主题或文本 → 点击「复制提示词」→ 粘贴到任意大模型。

**本地运行**（无需安装依赖）：

```bash
# 方式一：直接双击 index.html
# 方式二：用任意静态服务器（推荐，复制功能更稳定）
python3 -m http.server 8765
# 浏览器打开 http://localhost:8765
```

### 使用的技术

- HTML5 + CSS3 + 原生 JavaScript（ES5/ES6 语法），零依赖、零构建步骤。
- `data.js` 存放从 Word 表格提取的结构化提示词数据；`app.js` 负责筛选、渲染、语言切换与复制；`styles.css` 负责响应式布局。
- 部署：GitHub Pages（静态站点托管）。

### 使用的 AI 工具

- **WorkBuddy（Claude / Hy）**：需求拆解、数据提取脚本、页面结构与样式实现、调试与 README 撰写。
- **DeepSeek、Gemini、GPT、Grok**：作为原始 Prompt Bank 中提示词的目标模型，用于验证提示词适配性与版本迭代记录（见原始 Word 文档的模型/版本列）。
- **Google Chrome Headless**：生成作业所需的应用截图。

详细的提示词、问题与修改记录见 [`AI_COLLABORATION_LOG.md`](AI_COLLABORATION_LOG.md)。

### 用户反馈与据此做的改进

> **诚信说明**：作业要求「真实用户反馈」。以下第 1 条来自项目所有者周芝宇在本课程作业中的真实需求表述；第 2 条预留给实际试用者，请替换为同学试用后的原话后再提交，**不要直接提交占位文本**。

**反馈 1 — 周芝宇（项目所有者 / 真实需求方）**

> 原话：「我想把我这个 prompt bank 做成 vibe coding 并且按照作业提交要求部署上线（这里我想用 github），并且还要写 markdown 形式的 readme，请一步一步带着我来弄。」

据此改进：

- 把静态页面做成无需构建、可直接托管到 GitHub Pages 的形态；
- 增加双语 README 与本日志，满足提交规范；
- 部署步骤拆成可复制的命令清单，逐步执行。

**反馈 2 — 试用同学（待填入真实原话）**

> 收集问题：① 这个工具帮你最快完成了哪一步？② 哪个功能还不好用？③ 你希望增加什么？  
> 可直接发给同学的话术：「我做了个翻译提示词工具站，链接是 \_\_。麻烦试用 3 分钟，按上面三个问题各回一句真实感受就行，我会把你的原话写进作业 README。」
>
> **待填入（提交前必须替换）**：
>
> - 反馈者：＿＿＿　试用时间：＿＿＿
> - 原话：＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿
>
> 计划据此类反馈改进：搜索结果排序、收藏常用提示词、导出 Markdown 清单等（收到真实反馈后再确定优先级）。

### 部署方式（GitHub Pages）

1. 在 GitHub 新建公开仓库，名称建议 `translation-prompt-bank`。
2. 把本目录所有文件上传到仓库根目录（确保 `index.html` 在根目录）。
3. 仓库 → Settings → Pages → Build and deployment：Source 选 **Deploy from a branch**，Branch 选 `main`、目录选 `/ (root)` → Save。
4. 等待 1–2 分钟，访问 `https://<你的用户名>.github.io/translation-prompt-bank/`。
5. 把该链接填到本 README 顶部的「在线访问」处，并确认无需登录即可打开。

---

## English

### Target users

- Translation / MTI students who know *what* to translate but not *what to ask* an LLM at each step.
- Freelance translators and localization professionals who need reusable, process-driven prompt templates.
- Prompt-engineering learners who want to compare how the same task is phrased for DeepSeek, Gemini, GPT and Grok.
- Instructors and TAs looking for a runnable teaching example of prompt engineering plus translation workflow.

### Problem it solves

1. **Scattered prompts** — the original Prompt Bank is a Word table with 54 bilingual prompts mixed together. Here they are structured and filterable by stage, scenario and keyword.
2. **Unclear workflow** — many users only ask "translate this" and skip pre-research, terminology extraction and post-review. The three-stage pipeline makes the professional process explicit.
3. **Placeholder friction** — the original prompts contain many `xx` / `xxx` placeholders. Fill one field on the card and the copy button substitutes them automatically.
4. **Language switching** — the source document separates Chinese and English tables. Interface language and prompt language are now independent toggles.

### Features

- 27 bilingual prompt groups (54 prompts in CN + EN), organized into 3 stages × 3 scenarios.
- 2 Meta Prompts: Prompt Generator and Prompt Optimiser, both in Chinese and English.
- Clickable stage cards on the landing page, scenario dropdown and full-text search.
- Placeholder substitution with one-click copy and success feedback.
- Responsive layout for mobile and desktop.

### Screenshots

See the table above (homepage and core features).

### How to use

**Online**: open the live link → pick a stage or search a keyword → switch between "中文提示词 / English Prompts" → fill the `Replace xx / xxx` field → click Copy → paste into any LLM.

**Locally** (no dependencies):

```bash
open index.html                 # or double-click it
python3 -m http.server 8765     # recommended: http://localhost:8765
```

### Tech stack

HTML5, CSS3 and vanilla JavaScript — zero dependencies and no build step. `data.js` holds the structured prompts extracted from the Word table; `app.js` handles filtering, rendering, language switching and copying; `styles.css` handles responsive layout. Hosted on GitHub Pages.

### AI tools used

- **WorkBuddy (Hy / Claude)**: requirement breakdown, data-extraction script, page structure and styling, debugging, and README writing.
- **DeepSeek, Gemini, GPT, Grok**: target models of the original prompt bank, used to validate prompt adaptability and record versions (see the model/version columns of the source document).
- **Google Chrome Headless**: generated the required application screenshots.

See [`AI_COLLABORATION_LOG.md`](AI_COLLABORATION_LOG.md) for the full prompt / problem / change log.

### User feedback and resulting improvements

> **Integrity note**: the assignment asks for *real* user feedback. Item 1 below is the genuine brief from the project owner, Zhou Zhiyu. Item 2 is reserved for an actual tester — replace it with a classmate's verbatim response before submitting. Do not submit the placeholder text.

**Feedback 1 — Zhou Zhiyu (project owner / real requester)**

> Verbatim: "I want to turn my prompt bank into vibe coding and deploy it online per the assignment requirements (GitHub), plus write a markdown README, and walk me through it step by step."

Improvements made:

- Kept the site build-free so it can be hosted directly on GitHub Pages.
- Added this bilingual README and the collaboration log to meet submission rules.
- Broke deployment into copy-paste commands to be executed step by step.

**Feedback 2 — peer tester (verbatim response to be filled in)**

> Questions asked: (1) Which step did this tool help you finish fastest? (2) What was hard to use? (3) What would you add?  
> Message sent to the tester: "I built a translation prompt library at \__. Could you try it for 3 minutes and reply with one honest sentence to each of the three questions? I'll quote your words in my assignment README."
>
> **To fill in before submission**:
>
> - Tester: ＿＿＿　Date: ＿＿＿
> - Verbatim: ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿
>
> Planned improvements based on this feedback: better search ranking, bookmarking frequent prompts, Markdown export — priority to be decided after real responses arrive.

### Deployment (GitHub Pages)

1. Create a public GitHub repository, e.g. `translation-prompt-bank`.
2. Upload all files from this folder to the repository root (`index.html` must be at the root).
3. Repo → Settings → Pages → Build and deployment: Source = **Deploy from a branch**, Branch = `main`, folder = `/ (root)` → Save.
4. Wait 1–2 minutes, then open `https://<your-username>.github.io/translation-prompt-bank/`.
5. Paste that URL at the top of this README and verify it opens without login.
