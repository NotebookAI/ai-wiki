# AI 专业名词百科

本仓库已从单页 `index.html` 重构为适配 GitHub Pages 的 Jekyll 站点：

## 功能
- SEO 友好：每个术语独立页面，启用 `jekyll-seo-tag` 与 `jekyll-sitemap`
- 首页可搜索/分类/切换视图
- 详情页集成 giscus 评论（pathname 映射）

## 目录结构
- `_config.yml`：站点与插件配置，启用 `terms` 集合
- `_layouts/`：页面布局（`default.html`、`term.html`）
- `_includes/card.html`：术语卡片片段
- `_terms/`：术语 Markdown（每篇一个术语）
- `assets/styles.css`：样式
- `assets/app.js`：首页脚本（搜索/筛选/视图）
- `index.html`：术语索引页
- `robots.txt`：搜索引擎抓取设置（自动引用 `sitemap.xml`）

## 本地预览
GitHub Pages 可直接构建，无需本地预览。若需本地：

```bash
bundle install
bundle exec jekyll serve
# 打开 http://127.0.0.1:4000${BASEURL}
```

> 如仓库以项目页发布，建议设置：
> - `_config.yml` 中 `url` 与 `baseurl`（例如 `url: https://onewesong.github.io`，`baseurl: /ai-wiki`）
> - 模板与资源均通过 `relative_url` 过滤器适配 `baseurl`

## 发布到 GitHub Pages
1. 打开仓库 Settings → Pages
2. Build and deployment：选择 `Deploy from a branch`
3. Branch: 选择 `main` 分支的根目录（或 `gh-pages` 视你工作流）

## 新增术语
在 `_terms/` 新建 `your-id.md`，示例：

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

正文支持 Markdown，放更详细解释、列表与外链。
```

## giscus 配置
`_layouts/term.html` 中脚本已使用仓库 `onewesong/ai-wiki` 的配置，如需替换到你自己的仓库，请更新：
- `data-repo`
- `data-repo-id`
- `data-category`
- `data-category-id`
