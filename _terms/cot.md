---
id: cot
title: 思维链（CoT）
title_en: Chain-of-Thought
category: model
type: concept
order: 9
aliases: [思维链]
keywords: [CoT, Chain-of-Thought, 推理]
brief: 通过显式中间推理步骤让模型“边想边答”，提升复杂推理任务表现。
meta: [逐步推理, 提示模式]
---

CoT 常与“逐步思考”“让我们一步一步来”等提示模板配合，显式暴露中间思路，减少跳步带来的错误。

### 工作机制
- 在提示中要求模型输出中间推理步骤，再给出最终答案。
- 可以配合少量示例（few-shot CoT）或让模型自我生成示例（self-consistency、多样化采样）。
- 与工具调用结合时，可在推理链中插入计算器、代码执行等外部能力。

### 典型成效
- 在算术推理、逻辑推理、常识问答、程序理解等任务上显著提升准确率。
- 对较小模型效果有限，但在 10B 以上模型中表现突出。
- 自一致性（Self-Consistency）与 Tree-of-Thought 等变体进一步提升稳定性与覆盖面。

### 实践建议
- 构造清晰的步骤提示，如“思考 -> 计划 -> 执行 -> 答案”。
- 针对高风险任务配合验证步骤（如再次回答或交叉验证）。
- 与结构化输出、评分模型结合，筛选出最可靠的推理路径。

### 参考资料
- [Wei et al. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." (2022).](https://arxiv.org/abs/2201.11903)（首次系统展示 CoT 对推理任务的提升）
- [Wang et al. "Self-Consistency Improves Chain of Thought Reasoning in Language Models." (2022).](https://arxiv.org/abs/2203.11171)（提出多样化采样并投票提升稳定性）
- [Yao et al. "Tree of Thoughts: Deliberate Problem Solving with Large Language Models." (2023).](https://arxiv.org/abs/2305.10601)（将推理扩展为树状探索框架）
