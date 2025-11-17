# 开发与写作指南 | Dev Guide

[简体中文](#简体中文) | [English](#english)

## 简体中文

这份文档面向希望「多看一点细节」的朋友：  
如果你想了解仓库结构、术语文件的 Front Matter 模板，或者在本地跑站点、改前端交互，可以从这里开始。

### 仓库结构

仓库组织与站点结构大致对应：

- `_config.yml`：站点与插件配置（启用 `terms` 集合、SEO、Sitemap 等）；
- `_layouts/`：页面布局模板（`default.html`、`term.html` 等）；
- `_includes/`：可复用的 HTML 片段（如 `card.html` 术语卡片）；
- `_terms/`：术语内容 Markdown（每篇一个术语，对应一个页面）；
- `assets/styles.css`：站点样式；
- `assets/app.js`：首页脚本（搜索、筛选、视图切换逻辑，以及后续可能扩展的交互）；
- `index.html`：术语索引页；
- `robots.txt`：搜索引擎抓取设置（自动引用 `sitemap.xml`）；
- `_site/`：Jekyll 构建输出目录（由构建命令自动生成，不需要手动编辑）。

### 术语文件与 Front Matter 模板

所有术语都位于 `_terms/` 目录中，每个术语对应一个 Markdown 文件。

**文件命名：**

- 使用全小写、短横线连接（kebab-case），例如：
  - `in-context-learning.md`
  - `retrieval-augmented-generation.md`
- 文件名建议与 Front Matter 中的 `id` 保持一致。

**Front Matter 模板与字段说明：**

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
- `category`：术语所属大类，可从 `foundation/model/training/inference/rag/multimodal/framework/safety/product/modelsuite` 中选择或视需要扩展；
- `type`：术语类型，如 `core/model/tool/concept`；
- `aliases`：常见别名或缩写（用于搜索和展示）；
- `keywords`：相关关键词，用于索引和语义检索；
- `brief`：1–2 句的一句话简介，尽量直接给出定义；
- `meta`：可选的额外信息，如「提出年份」「代表论文」等。

关于「怎么把一个术语写得好懂又有用」，请参考单独的写作指南文档：[WRITING.md](WRITING.md)。

### 本地开发与预览

如果你希望在本地跑一份站点、边改边看效果，可以这样：

```bash
bundle install
bundle exec jekyll serve
# 打开 http://127.0.0.1:4000${BASEURL}
```

或使用 Makefile 中封装的命令：

```bash
make install   # 安装依赖（等价于 bundle install）
make serve     # 本地预览（等价于 bundle exec jekyll serve --livereload）
make build     # 构建站点（等价于 bundle exec jekyll build）
make clean     # 清理 _site/ 等构建输出
```

建议在发起较大改动的 PR 前至少跑一遍构建：

```bash
bundle exec jekyll build
```

如果想模拟生产环境压缩与 SEO 插件行为，可使用：

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

### 前端与结构改动建议

如果你打算修改前端或站点结构（例如搜索行为、筛选逻辑、布局等），可以参考下面的约定：

- 尽量保持实现简单清晰，优先使用原生能力，避免引入复杂构建工具；
- 若需新增依赖或 Jekyll 插件，请在 PR 中解释用途、影响范围以及是否影响 GitHub Pages 构建；
- 对交互行为的明显变动（筛选、排序、搜索策略等），在 PR 描述中说明新旧差异，并简要说明你认为这样更好的原因；
- 调整样式时，优先沿用 `assets/styles.css` 现有结构，避免拆出额外的构建流程。

在改动结构或样式后，建议在桌面和移动端各看一圈，确保基础可用性（文字可读、按钮可点、布局不明显错乱）。

### 评论系统（giscus）配置

术语详情页使用 giscus 提供评论区，基于页面的 `pathname` 映射到讨论串。

默认配置写在 `_layouts/term.html` 中，主要通过以下几个 `data-*` 属性控制：

- `data-repo`
- `data-repo-id`
- `data-category`
- `data-category-id`

这些值可以在 giscus 官方网站根据你的仓库生成，然后替换到模板中。  
如果你 Fork 本仓库并在自己名下部署，请务必把这些配置改成你自己的仓库，避免评论写到上游仓库下。

---

## English

This document is for contributors who want more detail:  
project structure, term file format, local development, and front-end changes.

### Project Structure

The repository layout roughly mirrors the site:

- `_config.yml`: site and plugin configuration (collections, SEO, sitemap, etc.);
- `_layouts/`: HTML layouts such as `default.html` and `term.html`;
- `_includes/`: reusable snippets (e.g., `card.html` for term cards);
- `_terms/`: Markdown source for each term (one file per page);
- `assets/styles.css`: site styles;
- `assets/app.js`: search, filters, view toggles, and other interactions;
- `index.html`: landing page / index of all terms;
- `robots.txt`: crawler instructions referencing the generated sitemap;
- `_site/`: Jekyll build output (generated automatically—do not edit manually).

### Term Files and Front Matter

All term entries live under `_terms/`, one Markdown file per term.

**File Naming**

- Use lowercase kebab-case, for example:
  - `in-context-learning.md`
  - `retrieval-augmented-generation.md`
- Keep the filename identical to the `id` in Front Matter when possible.

**Front Matter Template and Fields**

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

- `id`: unique identifier, typically matching the common English name or acronym;
- `title`: Simplified Chinese title;
- `title_en`: English spelling or common English form;
- `category`: pick from `foundation/model/training/inference/rag/multimodal/framework/safety/product/modelsuite` or extend if needed;
- `type`: item type (`core`, `model`, `tool`, `concept`, etc.);
- `aliases`: frequent aliases or abbreviations (helps search and display);
- `keywords`: additional tags for indexing and semantic search;
- `brief`: concise one-liner definition (1–2 sentences);
- `meta`: optional extra information such as year introduced or representative papers.

For guidance on how to write clear and helpful term entries, please refer to the separate writing guide: [WRITING.md](WRITING.md).

### Local Development

To run the site locally for preview:

```bash
bundle install
bundle exec jekyll serve
# Visit http://127.0.0.1:4000${BASEURL}
```

Or use the Makefile helpers:

```bash
make install   # install Ruby dependencies
make serve     # run local server with livereload
make build     # build the site
make clean     # clean build output like _site/
```

Before opening a PR with significant changes, it is recommended to run:

```bash
bundle exec jekyll build
```

For a production-like build with minification and SEO plugins:

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

### Front-end and Structural Changes

If you are changing the front end or site structure (e.g., search behavior, filters, layout):

- Keep the implementation lean—prefer vanilla approaches over heavy build setups;
- When adding dependencies or Jekyll plugins, explain their purpose and impact in the PR;
- Document any behavioral changes (filtering, sorting, search logic, etc.) in the PR description, and why you think they are improvements;
- Reuse and extend the existing `assets/styles.css` instead of introducing new build pipelines when possible.

After structural or styling changes, preview on both desktop and mobile to ensure basic usability.

### Comments with giscus

Each term page embeds a giscus discussion thread based on the page pathname.

Configuration lives in `_layouts/term.html` via these `data-*` attributes:

- `data-repo`
- `data-repo-id`
- `data-category`
- `data-category-id`

You can generate the correct values on the giscus website for your repository and paste them into the template.  
If you deploy a fork under your own account, make sure to update these fields so comments go to your repo instead of the upstream.
