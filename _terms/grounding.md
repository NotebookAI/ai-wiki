---
id: grounding
title: Grounding（基于证据的生成）
title_en: Grounding
category: model
type: concept
order: 92
aliases: [Grounded Generation, Groundedness, 基于证据, 证据对齐]
keywords: [Grounding, Groundedness, 引用, 事实性, RAG, Hallucination]
brief: 让模型的回答“有证据可追溯”：结论应来自给定上下文/检索材料/工具结果，而不是凭空编造。
meta: [降低幻觉, 证据对齐]
---

Grounding（基于证据的生成）强调：模型输出的关键结论应能在给定证据中找到依据（例如检索结果、数据库查询结果、文档片段），并且最好能提供引用/片段来支持核验。这是降低幻觉、提高可用性的重要手段，尤其在 AI 搜索、企业知识库问答、合规场景中常见。

### 常见落地方式
- **RAG**：先检索证据，再在上下文中生成答案。
- **工具查询**：通过工具调用拿到结构化结果，再基于结果生成。
- **引用与片段对齐**：让答案中的关键句绑定到来源片段，便于自动核验与人工复查。

### 注意点
- 有“引用”不等于有 grounding：引用可能是装饰性的、或与结论不匹配，需要做一致性检查。
- Grounding 也会带来成本与延迟，需要缓存、分层与路由策略配合。

### 相关词条
- {{ '/terms/hallucination/' | relative_url }}、{{ '/terms/rag/' | relative_url }}、{{ '/terms/ai-search/' | relative_url }}、{{ '/terms/tool-calling/' | relative_url }}

