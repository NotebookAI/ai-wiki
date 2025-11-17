---
id: hallucination
title: 幻觉（Hallucination）
title_en: Hallucination
category: safety
type: concept
order: 77
aliases: [幻觉, 编造内容]
keywords: [Hallucination, 幻觉, 错误信息, RAG]
brief: 指模型生成看似合理但事实错误或无依据内容的现象，是大模型应用中的核心风险之一。
meta: [错误信息, 事实性]
---

幻觉产生的原因包括：训练数据噪声、预测目标仅是「下一个 Token」而非事实正确性、以及缺乏实时知识源。在问答、搜索和决策场景中，幻觉会导致误导性信息甚至安全事故，因此需要通过 RAG、检索引用、置信度估计和人工审核来缓解。

工程上，常见做法包括：要求模型显式标注不确定、引用来源链接、使用检索增强生成，以及在关键任务中引入多模型交叉验证或规则引擎兜底。

