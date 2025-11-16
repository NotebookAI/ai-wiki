---
id: prompt
title: 提示词工程
title_en: Prompt Engineering
category: model
type: concept
order: 8
aliases: [提示词]
keywords: [Prompt, 提示词, Few-shot, 指令跟随]
brief: 通过合适的指令/示例构造，提升模型在目标任务上的表现与稳定性。
meta: [指令设计, Few-shot, 模板化]
---

Prompt 工程包括指令措辞、上下文组织、示例选择与输出格式约束等实践，是零样本/少样本迁移的关键手段。

### 常见策略
- **零样本提示（Zero-shot）**：直接描述任务目标与约束，适合通用任务。
- **少样本提示（Few-shot）**：提供示例问答或输入输出对，帮助模型模仿模式。
- **思维链提示（Chain-of-Thought）**：要求模型逐步展示推理过程，适合复杂推理问题。
- **角色设定与上下文记忆**：通过设定身份、提供背景信息提升回答一致性。

### 工程实践
- **结构化模板**：使用 Markdown、JSON Schema、正则约束输出格式，便于解析。
- **检索增强**：结合向量检索或知识库动态构建提示上下文。
- **自动化迭代**：利用提示调优工具（如 Prompt Tuning、RLHF 或评估器）批量实验效果。

### 评估与风险
- **稳健性**：注意提示对措辞敏感，需进行 A/B 测试与鲁棒性评估。
- **偏见与安全**：提示可能触发敏感内容，应配合安全策略与过滤器。
- **成本控制**：长提示会增加上下文开销，需要平衡效果与费用。

### 参考资料
- [Brown et al. "Language Models are Few-Shot Learners." (2020).](https://arxiv.org/abs/2005.14165)（提出利用提示实现零样本/少样本迁移）
- [Liu et al. "Pre-train, Prompt, and Predict: A Systematic Survey of Prompting Methods in Natural Language Processing." (2023).](https://arxiv.org/abs/2107.13586)（综述提示方法与应用）
- [OpenAI. "Best practices for prompt engineering with the OpenAI API." (2023).](https://platform.openai.com/docs/guides/prompt-engineering)（提供工程层面的提示设计建议）
