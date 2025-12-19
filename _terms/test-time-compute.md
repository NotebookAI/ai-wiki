---
id: test-time-compute
title: 测试时计算
title_en: Test-Time Compute · TTC
category: inference
type: concept
order: 90
aliases: [TTC, Test-Time Compute, 推理时计算]
keywords: [Test-Time Compute, TTC, 推理, 采样, 多次生成, 自一致性]
brief: 在推理阶段投入额外计算（多采样、多候选、搜索/验证）来换取更高质量或更可靠结果的策略。
meta: [推理权衡, 质量提升]
---

测试时计算（Test-Time Compute，TTC）指在不改训练参数的前提下，在推理阶段投入更多计算来提升效果。直观理解：同一个问题“多想一会儿 / 多试几次 / 多验证几轮”，往往能得到更稳的答案，但会增加成本与延迟。

### 常见做法
- **多次采样与重排**：生成多个候选，再用打分器/裁判模型选择最优。
- **自一致性（Self-Consistency）**：对同一问题采样多条推理路径，用投票/一致性选择答案。
- **搜索与验证**：如 tree search、草稿-验证（见推测解码）等。

### 什么时候有用
- 复杂推理、代码生成、需要高可靠性/低幻觉的场景，往往比“只生成一次”收益更大。

### 相关词条
- {{ '/terms/speculative-decoding/' | relative_url }}、{{ '/terms/llm-evaluation/' | relative_url }}

