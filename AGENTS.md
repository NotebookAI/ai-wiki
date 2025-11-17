# Repository Guidelines

## Project Structure & Module Organization
仓库是一个 Jekyll 站点，用于维护 AI 术语百科。核心配置在 `_config.yml`，其中定义 collections、SEO 以及 sitemap。模板在 `_layouts/`，可复用片段位于 `_includes/`，而主页 `index.html` 负责渲染搜索与过滤视图。术语 Markdown 存放在 `_terms/`，每个文件都带 YAML Front Matter 描述 `id/category/aliases` 等元数据。前端静态资源集中在 `assets/`（`styles.css` 控制主题，`app.js` 负责搜索、筛选与视图切换）。`_site/` 是构建输出目录，应由 Jekyll 自动生成而非手工编辑。根目录的 `Gemfile`/`Gemfile.lock` 固定插件版本，请通过 Bundler 统一升级，避免本地与 CI 结果不一致。

## Build, Test, and Development Commands
在本地首次运行 `make install`（包装 `bundle install`）以确保 Ruby 依赖齐全。日常开发使用 `make serve` 或 `bundle exec jekyll serve --livereload` 查看实时预览；若只需验证语法与 Liquid 错误，执行 `make build`。部署前建议运行 `make clean && make build`，确保 `_site/` 由最新内容生成。如果你不依赖 Makefile，同等命令也可用 `bundle exec jekyll {serve|build|clean}`。遇到插件或 Front Matter 问题，可追加 `bundle exec jekyll doctor` 以获得诊断提示。

## Coding Style & Naming Conventions
术语文件名与 Front Matter 中的 `id` 均应使用 kebab-case 小写（例如 `retrieval-augmented-generation.md`），正文采用 Markdown，Front Matter 使用两个空格缩进。CSS 与 JS 文件保持现有简单结构，尽量使用原生能力，不引入 bundler。HTML 模板遵循 Jekyll 的 `include` 与 `relative_url` 帮助，新增布局需在 `_config.yml` 中声明。若需添加脚本或样式，首选现有 `assets` 文件并添加简洁注释说明用途。

## Testing Guidelines
站点没有单独的单元测试，但每次改动都必须运行 `bundle exec jekyll build`，确保 Markdown、Liquid 与数据文件通过解析。新增脚本可通过浏览器控制台查看搜索与筛选行为，建议截图记录预期行为。如果涉及多语言或分类调整，请在 PR 描述中注明已检查的术语示例。必要时使用 `JEKYLL_ENV=production bundle exec jekyll build` 检查压缩、SEO 相关插件配置。

## Commit & Pull Request Guidelines
Git 历史以动词前缀风格为主（如 `feat: add light theme toggle`、`fix: correct rag alias`），请沿用 `type: short description` 模式。每个 PR 应包含概述、变更清单以及测试说明；若修改 UI/UX（如 `assets/styles.css` 或 `app.js`），附上前后截图或动图。关联 Issue 时在描述中引用 `Fixes #123`，方便自动关闭。保持分支命名清晰，如 `feat/add-term-icl`、`docs/update-config`，并确保 PR 在本地 `make build` 通过后再提交。

## 用户在线编辑流程
需要让访客直接贡献术语时，可在 `index.html` 或词条页添加“在线编辑”按钮，指向 GitHub 预填文件地址：{% raw %}`https://github.com/<owner>/<repo>/new/main/_terms?filename={{id}}.md&value={{urlencode(template)}}`{% endraw %}。模板可包含完整 Front Matter，例如：
{% raw %}
```
---
id: your-id
title: 中文名
category: foundation
---
正文...
```
{% endraw %}
用户在 GitHub UI 中填写完后即可创建分支并发起 PR，无需本地环境。可将模板字符串放入 `assets/app.js`，根据当前词条自动替换 `id/title`，这样“编辑此词条”按钮会把现有内容填入 `value` 参数。若要新增词条，则提供空模板并在按钮旁提示命名规范。

## Security & Configuration Tips
项目默认依赖 GitHub Pages；如 Fork 到自定义域名，务必同步更新 `_config.yml` 中的 `url` 与 `baseurl`，并检查 `robots.txt` 是否仍指向正确 sitemap。若切换 giscus 仓库，需在 `_layouts/term.html` 中更新 `data-repo*` 与 `data-category*` 属性，避免把讨论写入上游。请勿提交个人访问令牌或部署密钥，所有敏感配置均应通过仓库 Secrets 或本地 `.env`（不要提交）管理。
