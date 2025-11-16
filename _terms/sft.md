---
id: sft
title: 监督式微调（SFT）
title_en: Supervised Fine-tuning
category: training
type: method
order: 42
aliases: [SFT, 指令微调]
keywords: [指令数据, 微调, 监督学习]
brief: 在大模型预训练基础上，以标注示例的监督学习方式对齐模型行为的常见手段。
meta: [指令数据集, 监督学习, 对齐]
---

SFT 通过将模型输出与高质量示例对齐，显式最小化参考答案与模型输出之间的损失，是构建指令跟随模型与对话助手的第一步。常用数据来源包括人工编写的提示-回答对、人工扩写的对话、以及由模型生成后再人工审核的合成数据。

在工程实践中，SFT 会结合参数高效微调（如 LoRA）和混合精度训练来降低成本，也需通过覆盖多场景、多任务的指令集减少过拟合，以为后续 RLHF 或 DPO 等对齐阶段提供良好初始策略。

### 参考资料
- [OpenAI InstructGPT 论文附录：Supervised Fine-Tuning 过程描述](https://arxiv.org/abs/2203.02155)（阐述指令微调在对齐流程中的作用）
- [Stanford Alpaca 报告《Stanford Alpaca: An Instruction-following LLaMA Model》](https://crfm.stanford.edu/2023/03/13/alpaca.html)（介绍使用 Self-Instruct 数据进行低成本 SFT 的实践）
