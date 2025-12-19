---
id: chunking
title: 文档分块
title_en: Chunking
category: rag
type: method
order: 93
aliases: [Chunking, 切分, 分块]
keywords: [Chunking, 分块, 切分, RAG, Window, Overlap]
brief: 把长文档切成可检索的“chunk”，并设计合适的粒度与重叠，以提升召回质量与引用可核验性。
meta: [索引构建, 检索质量]
---

文档分块（Chunking）是 RAG 系统里最容易被低估、但最影响效果的环节之一：你把文档切成什么粒度，直接决定检索能否召回“刚好能支撑结论的证据片段”，以及引用是否能落到可核验的位置。

### 为什么分块很关键
- **chunk 太大**：召回结果包含大量无关内容，生成时更容易跑偏，且上下文成本变高。
- **chunk 太小**：证据不完整（缺背景/缺定义/缺约束），导致答案遗漏关键条件或拼接错误。
- **引用核验**：好的 chunk 能让“结论 → 证据片段”对齐更直接，更适合 AI 搜索的引用体验。

### 常见分块策略
- **按长度切分**：固定 token/字符窗口 + overlap（实现简单但语义可能被切断）。
- **按结构切分**：按标题/段落/列表/表格行等语义结构切（更利于引用与摘要）。
- **语义切分**：根据句子相似度/主题变化点切分（更贴合内容，但工程复杂度更高）。

### 实践建议
- 先用“结构切分 + 适度 overlap”做 MVP，再用回归集迭代。
- 给 chunk 附带元数据：来源、章节标题、更新时间、权限、页码/段落号（便于引用与审计）。
- 分桶评估：不同文档类型（FAQ、手册、论文、表格）往往需要不同策略。

### 相关词条
- [RAG]({{ '/terms/rag/' | relative_url }})、[向量（Embedding）]({{ '/terms/embedding/' | relative_url }})、[RAG 评测]({{ '/terms/rag-evaluation/' | relative_url }})、[Grounding]({{ '/terms/grounding/' | relative_url }})
