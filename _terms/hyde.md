---
id: hyde
title: HyDE 假想文档检索
title_en: HyDE
category: rag
type: method
order: 58
aliases: [HyDE, Hypothetical Document Embeddings]
keywords: [HyDE, 假想文档, 检索增强, Query Expansion]
brief: 先让大模型生成假想答案或文档，再对其进行向量化并用于检索，从而提升 RAG 场景下的召回质量。
meta: [检索增强, 查询改写]
---

HyDE（Hypothetical Document Embeddings）方法在检索前先让 LLM 根据用户问题生成一段「假想文档」或答案摘要，再将这段内容向量化后用于向量检索。这种做法可以在缺乏直接匹配文本时，帮助检索系统捕捉更语义化的相关片段，从而提高召回率。

HyDE 常与传统的基于查询嵌入的检索结合使用，是构建高质量 RAG 系统时常见的「查询改写」手段之一。

