# 贡献指南 | Contributing Guide

[简体中文](#简体中文) | [English](#english)

## 简体中文

感谢你愿意为「AI 专业名词百科」贡献内容或代码！为了让协作更顺畅，这里整理了一些约定和建议。

### 我们欢迎什么样的贡献

- 新增、完善或修正术语条目；
- 补充别名、关键词、分类等元信息，让检索更好用；
- 改进站点结构、样式与交互；
- 修正错别字、模糊表述或过时的信息；
- 帮助 Review PR、在 Issues 中给出更清晰的复现与建议。

无论是一次小修订，还是整理一个大的专题，只要能让术语更清晰、更易用，都是非常宝贵的贡献。

### 术语文件与内容规范

所有术语都位于 `_terms/` 目录中，每个术语对应一个 Markdown 文件。

**文件命名：**

- 使用全小写、短横线连接（kebab-case），例如：
  - `in-context-learning.md`
  - `retrieval-augmented-generation.md`
- 文件名建议与 Front Matter 中的 `id` 保持一致。

**Front Matter 字段说明：**

```yaml
---
id: your-id
title: 中文名
title_en: English Name
category: foundation # 或 model/training/inference/rag/multimodal/framework/safety/product/modelsuite
type: core # 或 model/tool/concept
aliases: [别名1, 别名2]
keywords: [关键词A, 关键词B]
brief: 术语一句话简介
meta: [额外元信息1, 2]
---
```

- `id`：术语主键，建议与英文名或常用缩写一致；
- `title`：中文名，使用简体；
- `title_en`：英文名或常见英文写法；
- `category`：术语所属大类，可从 `foundation/model/training/inference/rag/multimodal/framework/safety/product/modelsuite` 中选择或新增；
- `type`：术语类型，如 `core/model/tool/concept`；
- `aliases`：常见别名或缩写（用于搜索和展示）；
- `keywords`：相关关键词，用于索引和语义检索；
- `brief`：1–2 句的一句话简介，尽量直接给出定义；
- `meta`：可选的额外信息，如「提出年份」「代表论文」等。

**正文写作建议：**

- 优先回答「是什么」「解决什么问题」「在什么语境下常被提起」；
- 可以按小节组织，例如「背景」「定义」「与相关概念的关系」「常见误解」；
- 尽量避免纯市场宣传式语气，多给出中立、可验证的描述；
- 如引用论文、博客或文档，附上链接，方便读者继续深入。

### 如何新增或修改术语

1. Fork 本仓库到你的 GitHub 账户。
2. 从 `main` 创建一个功能分支，例如 `feat/add-rag-term`。
3. 在 `_terms/` 中：
   - 新增术语：创建新的 `xxx.md` 文件，按模板填写；
   - 修改术语：直接编辑已有 `xxx.md`。
4. 如果方便，建议在本地运行 Jekyll 预览（见下节），确认页面渲染正常。
5. 提交并推送分支，发起 Pull Request：
   - 标题简要说明改动内容；
   - 在描述中列出主要变更点（新增/修改的术语、重要调整等）。

建议在 PR 描述中自检：

- [ ] Front Matter 字段完整；
- [ ] Markdown 渲染无明显问题（最好有本地预览）；
- [ ] 如涉及概念更新，附上至少 1 条可公开访问的参考链接。

### 本地开发与预览

```bash
bundle install
bundle exec jekyll serve
# 打开 http://127.0.0.1:4000${BASEURL}
```

相关文件：

- `_layouts/`：页面布局；
- `_includes/`：可复用的 HTML 片段（如术语卡片）；
- `assets/styles.css`：样式；
- `assets/app.js`：索引页交互逻辑；
- `index.html`：术语索引页。

如你调整了结构或样式，建议在桌面和移动端分别简单看一圈，确保基础可用性。

### 前端与结构改动建议

- 尽量保持实现简洁清晰，避免引入复杂构建工具；
- 若需新增依赖或插件，请在 PR 中解释用途和影响；
- 对交互行为的明显变动（筛选、排序、搜索策略等），在描述中说明新旧差异。

### 行为准则

- 保持讨论友好、尊重他人观点；
- 针对术语定义和表述，可以提出不同看法，但请附上理由或参考；
- 避免在术语正文中加入攻击性、歧视性或与技术无关的内容。

本项目默认遵循 GitHub 社区规范，若你在参与过程中遇到不适行为，欢迎通过 Issues 或私下渠道反馈。

---

## English

Thanks for contributing to the AI Glossary! To keep collaboration smooth, please follow the guidelines below.

### What Contributions We Welcome

- Add, refine, or fix term entries;
- Enrich metadata such as aliases, keywords, and categories;
- Improve layouts, styles, or UX interactions;
- Fix typos, ambiguous wording, or outdated information;
- Review PRs or provide clear reproduction steps and suggestions in issues.

Every improvement matters—whether it is a typo fix or an entire topic overhaul.

### Term Files and Content Rules

All terms live in `_terms/`, one Markdown file per term.

**File Naming**

- Use lowercase kebab-case, for example:
  - `in-context-learning.md`
  - `retrieval-augmented-generation.md`
- Keep the filename identical to the `id` in Front Matter when possible.

**Front Matter Fields**

```yaml
---
id: your-id
title: Chinese Name
title_en: English Name
category: foundation # or model/training/inference/rag/multimodal/framework/safety/product/modelsuite
type: core # or model/tool/concept
aliases: [alias-1, alias-2]
keywords: [keyword-a, keyword-b]
brief: One-sentence summary
meta: [extra info 1, extra info 2]
---
```

- `id`: the unique identifier, typically matching the common English name or acronym;
- `title`: Simplified Chinese title;
- `title_en`: English spelling or common English form;
- `category`: pick from `foundation/model/training/inference/rag/multimodal/framework/safety/product/modelsuite` or add a new one if necessary;
- `type`: the kind of item (`core`, `model`, `tool`, `concept`, etc.);
- `aliases`: frequent aliases or abbreviations (helps search);
- `keywords`: additional tags for filtering or semantic search;
- `brief`: one-liner definition (1–2 sentences);
- `meta`: optional extra information such as year introduced or representative papers.

**Body Writing Tips**

- Cover what the term is, what problem it solves, and in which context it appears;
- Organize content with subsections like background, definition, relationships, pitfalls;
- Avoid marketing fluff—stick to neutral, verifiable statements;
- Include links to public references (papers, blogs, docs) whenever possible.

### How to Add or Update Terms

1. Fork the repository.
2. Create a feature branch from `main`, e.g., `feat/add-rag-term`.
3. Under `_terms/`:
   - For new terms: create a new Markdown file using the template;
   - For updates: edit the existing file directly.
4. (Optional) Run the local Jekyll preview to ensure everything renders correctly.
5. Commit, push, and open a Pull Request:
   - Summarize the change in the PR title;
   - List key updates (new/modified terms, major UX tweaks, etc.) in the description.

Before submitting, double-check:

- [ ] Front Matter is complete;
- [ ] Markdown renders properly (ideally verified via local preview);
- [ ] Conceptual updates include at least one public reference link.

### Local Development

```bash
bundle install
bundle exec jekyll serve
# Visit http://127.0.0.1:4000${BASEURL}
```

Relevant files:

- `_layouts/`: page layouts;
- `_includes/`: reusable snippets (term card, etc.);
- `assets/styles.css`: styling;
- `assets/app.js`: index-page interactivity;
- `index.html`: the landing/index page.

After structural or styling changes, preview both desktop and mobile to ensure baseline usability.

### Front-end / Structural Changes

- Keep the implementation lean—avoid heavy build setups unless necessary;
- If you add dependencies or Jekyll plugins, explain their purpose and impact in the PR;
- Document any behavioral changes (filtering, sorting, search logic, etc.) in the PR description.

### Code of Conduct

- Keep conversations respectful and constructive;
- It is fine to disagree on term definitions—just provide reasoning or references;
- Do not include abusive, discriminatory, or off-topic content in term entries.

We follow the general GitHub Community Guidelines. If you encounter unacceptable behavior, please reach out via Issues or other channels.

---

感谢你的时间与贡献，期待看到你的 PR！ / Thank you for your contributions—we look forward to your PR!
