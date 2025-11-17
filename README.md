# AI 专业名词百科 | AI Glossary

[简体中文](#简体中文) | [English](#english)

## 简体中文

一个为中文开发者与从业者打造的 AI / LLM / RAG / Agent 专业名词百科，帮你在飞快演进的语境里，对齐「我们到底在说什么」。

> 既是你查概念的「AI 术语字典」，也是你整理知识体系时的「导航页」。

### 目录

- [项目简介](#项目简介)
- [在线访问](#在线访问)
- [主要特性](#主要特性)
- [内容结构](#内容结构)
- [如何使用](#如何使用)
- [快速开始：复制一份自己的百科](#快速开始复制一份自己的百科)
- [新增术语（作者视角）](#新增术语作者视角)
- [本地开发与预览](#本地开发与预览)
- [评论系统（giscus）](#评论系统giscus)
- [如何贡献](#如何贡献)

### 项目简介

在 AI 领域，名词爆炸式增长：从基础模型、训练范式，到 RAG、Agent、多模态工作流，很容易「听过很多词，但记不清含义和关系」。

AI 专业名词百科的目标是：

- 用简洁中文解释关键术语；
- 按领域分类，帮助你建立知识地图；
- 保持更新，记录社区中逐渐达成共识的用法。

### 在线访问

- 在线站点：<https://notebookai.github.io/ai-wiki/>

你可以：

- 在首页通过「搜索 / 分类 / 视图切换」快速浏览；
- 点击卡片进入术语详情，查看更完整解释与外链；
- 在详情页使用 giscus 发表评论、补充理解。

### 主要特性

- **SEO 友好**：每个术语独立页面，启用 `jekyll-seo-tag` 与 `jekyll-sitemap`；
- **索引页体验**：支持搜索、按分类筛选、卡片/列表视图切换；
- **结构化术语数据**：每篇术语使用 YAML Front Matter 描述 id、分类、别名、关键词等；
- **评论与反馈**：详情页集成 giscus 评论（按 pathname 映射）；
- **GitHub Pages 一键托管**：基于 Jekyll，无需额外构建管线。

### 内容结构

仓库组织与站点结构对应：

- `_config.yml`：站点与插件配置（启用 `terms` 集合、SEO、Sitemap 等）；
- `_layouts/`：页面布局模板（`default.html`、`term.html` 等）；
- `_includes/card.html`：术语卡片片段，用于首页列表渲染；
- `_terms/`：术语内容 Markdown（每篇一个术语）；
- `assets/styles.css`：站点样式；
- `assets/app.js`：首页脚本（搜索、筛选、视图切换逻辑）；
- `index.html`：术语索引页；
- `robots.txt`：搜索引擎抓取设置（自动引用 `sitemap.xml`）。

### 如何使用

**作为读者：**

- 在首页搜索你关心的术语（中英文、别名或关键词均可）；
- 使用分类筛选探索某一条线，例如 `foundation`、`rag`、`agent` 等；
- 点击任一术语卡片，进入详情页阅读更完整的解释与外链；
- 在术语页底部使用评论区，分享你的理解或指出问题。

**作为团队 / 组织：**

- Fork 本仓库，改成你们内部的「AI 概念对齐手册」；
- 约定一套分类、标签和写法，让不同角色围绕同一套名词体系沟通；
- 把站点挂到 GitHub Pages 或公司内部站点，用作 onboarding / 培训材料。

### 快速开始复制一份自己的百科

1. Fork 本仓库到你的 GitHub 账户。
2. 在仓库 Settings → Pages 中：
   - Build and deployment：选择 `Deploy from a branch`；
   - Branch：选择 `main` 分支的根目录（或 `gh-pages`，视你的工作流而定）。
3. 根据你的域名调整 `_config.yml`：
   - `url`: 例如 `https://your-name.github.io`；
   - `baseurl`: 例如 `/ai-wiki` 或你自己的项目名。
4. 在 `_terms/` 中新增或修改术语，推送后 GitHub Pages 会自动构建。

### 新增术语作者视角

在 `_terms/` 目录中，为每个术语新建一个 Markdown 文件，例如 `your-id.md`。建议：

- 文件名使用全小写、短横线连接（kebab-case），例如 `in-context-learning.md`；
- 文件名与 Front Matter 中的 `id` 保持一致。

示例模板：

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

正文支持 Markdown，用于放更详细的解释、示例、与相关概念的关系以及外部参考链接。
```

写作建议：

- `brief` 控制在 1–2 句内，给出最精炼的定义；
- 正文可以从「是什么 / 解决什么问题 / 如何使用 / 与哪些概念容易混淆」等角度展开；
- 如引用论文或官方文档，尽量附上链接，方便追溯。

### 本地开发与预览

GitHub Pages 可以直接构建本仓库。若你希望在本地开发或预览效果：

```bash
bundle install
bundle exec jekyll serve
# 打开 http://127.0.0.1:4000${BASEURL}
```

> 如仓库以项目页发布，建议设置：
> - `_config.yml` 中 `url` 与 `baseurl`（例如 `url: https://notebookai.github.io`，`baseurl: /ai-wiki`）
> - 模板与资源均通过 `relative_url` 过滤器适配 `baseurl`

### 评论系统giscus

术语详情页通过 giscus 提供评论区，基于「pathname」进行讨论串映射。

`_layouts/term.html` 中脚本默认使用仓库 `notebookai/ai-wiki` 的配置，如需替换到你自己的仓库，请更新：

- `data-repo`
- `data-repo-id`
- `data-category`
- `data-category-id`

你可以在 giscus 官方网站生成对应配置，然后替换以上字段。

### 如何贡献

欢迎你：

- 补充新的术语或改进已有解释；
- 调整分类与关键词，使索引更好用；
- 改进样式与交互，让阅读体验更顺滑。

详细的贡献流程、内容规范和写作建议，请查看：[贡献指南](CONTRIBUTING.md)。

---

## English

AI Glossary is a crowdsourced knowledge base for AI / LLM / RAG / Agent terminology. It keeps practitioners aligned on “what exactly are we talking about” while the vocabulary explodes.

> Think of it as a “reference dictionary” for day-to-day work and a “navigation page” for building your mental model.

### Table of Contents

- [Project Overview](#project-overview)
- [Visit Online](#visit-online)
- [Key Features](#key-features)
- [Content Structure](#content-structure)
- [How to Use](#how-to-use)
- [Get Your Own Copy](#get-your-own-copy)
- [Add New Terms (Author View)](#add-new-terms-author-view)
- [Local Development](#local-development)
- [Comments with giscus](#comments-with-giscus)
- [Contributing](#contributing)

### Project Overview

The AI landscape churns out new buzzwords daily: model architectures, training strategies, RAG pipelines, agents, multimodal workflows, and more. It is easy to mix things up.

This glossary aims to:

- Provide concise explanations in plain language;
- Categorize terms so people can build a mental map;
- Stay updated with how the community actually uses each term.

### Visit Online

- Live site: <https://notebookai.github.io/ai-wiki/>

You can:

- Browse through full-text search, category filters, or card/list view toggles;
- Dive into a term page for detailed explanations and references;
- Leave comments via giscus at the bottom of each term page.

### Key Features

- **SEO-friendly** single-term pages powered by `jekyll-seo-tag` and `jekyll-sitemap`;
- **Rich index experience** with search, filters, and card/list layouts;
- **Structured term metadata** defined via YAML Front Matter (id, category, aliases, keywords, etc.);
- **Built-in giscus discussion** per pathname;
- **Deploy on GitHub Pages** without extra build tooling.

### Content Structure

- `_config.yml`: site + plugin configs (collections, SEO, sitemap);
- `_layouts/`: HTML layouts such as `default.html` and `term.html`;
- `_includes/card.html`: reusable term card snippet for the index;
- `_terms/`: Markdown source for each term;
- `assets/styles.css`: site styles;
- `assets/app.js`: JS for search, filters, and view toggles;
- `index.html`: landing page / index of all terms;
- `robots.txt`: crawler instructions referencing the generated sitemap.

### How to Use

**Readers**

- Search any keyword, alias, or English/Chinese name on the home page;
- Filter by categories like `foundation`, `rag`, `agent`, etc.;
- Open a card to read the full entry and related resources;
- Leave comments or suggestions via giscus.

**Teams / Organizations**

- Fork the repo and adapt it as your internal “AI terminology handbook”;
- Align on categories, tags, and writing style to streamline discussions;
- Host it on GitHub Pages or your intranet as onboarding or training material.

### Get Your Own Copy

1. Fork the repository.
2. In Settings → Pages:
   - Build and deployment → select `Deploy from a branch`;
   - Pick `main` (or `gh-pages` if that matches your workflow).
3. Update `_config.yml` with your domain:
   - `url`: e.g. `https://your-name.github.io`;
   - `baseurl`: e.g. `/ai-wiki`.
4. Add or modify term files under `_terms/` and push—GitHub Pages will rebuild automatically.

### Add New Terms Author View

Create a Markdown file per term inside `_terms/`, such as `your-id.md`. Recommendations:

- Use kebab-case filenames (all lowercase, hyphen-separated);
- Keep filename identical to the `id` in Front Matter.

Template:

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

Use Markdown for body text. Expand on definitions, examples, relationships to other terms, and external references.
```

Guidelines:

- Keep `brief` to 1–2 sentences with the essential definition;
- In the body, answer what it is, why it matters, how it is used, and what it is often confused with;
- Whenever possible, link to papers, docs, or blog posts.

### Local Development

```bash
bundle install
bundle exec jekyll serve
# Visit http://127.0.0.1:4000${BASEURL}
```

> If you publish it as a project page, make sure `_config.yml` contains the correct `url` and `baseurl`, and use `relative_url` helpers for assets.

### Comments with giscus

Each term page embeds giscus based on the pathname. To point it to your own repo, edit `_layouts/term.html`:

- `data-repo`
- `data-repo-id`
- `data-category`
- `data-category-id`

Generate the values from the giscus dashboard and paste them here.

### Contributing

We welcome:

- New or improved term entries;
- Better taxonomy / keyword coverage;
- Styling or UX improvements.

See the full guidelines here: [CONTRIBUTING.md](CONTRIBUTING.md).
