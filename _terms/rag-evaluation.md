---
id: rag-evaluation
title: RAG 评测
title_en: RAG Evaluation
category: rag
type: practice
order: 91
aliases: [RAG Evaluation, 检索增强评测]
keywords: [RAG, Evaluation, Recall, Precision, Grounding, 引用, Reranker]
brief: 专门评估 RAG 系统“检索是否找对、生成是否忠于证据、端到端是否解决任务”的方法与指标集合。
meta: [检索质量, 证据对齐, 端到端]
---

RAG 评测关注的不只是“答案看起来对不对”，还包括：检索是否召回了关键证据、生成是否忠于证据、引用是否可追溯，以及在真实业务任务中是否降低幻觉、提高完成率。

### 常见评测维度
- **检索层（Retriever）**：召回率、精确率、命中率（如 top-k hit）、覆盖度、重排增益。
- **生成层（Generator）**：事实性、是否“忠于证据”（groundedness）、引用是否对应、是否遗漏关键限制条件。
- **端到端**：任务成功率、用户改写率、人工接管率、延迟与成本。

### 实践建议
- **先做小而精的回归集**：把真实问题与真实文档配对，覆盖高频与高风险场景。
- **分层定位问题**：检索差还是生成差，解决手段完全不同（调索引/切分/重排 vs 调提示/结构化输出）。
- **把引用当作可验证接口**：要求输出携带证据片段/来源，便于自动化核验。

### 相关词条
- {{ '/terms/rag/' | relative_url }}、{{ '/terms/reranker/' | relative_url }}、{{ '/terms/embedding/' | relative_url }}、{{ '/terms/grounding/' | relative_url }}

