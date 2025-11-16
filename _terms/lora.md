---
id: lora
title: LoRA 低秩适配
title_en: Low-Rank Adaptation · LoRA
category: training
type: concept
order: 10
aliases: [低秩适配]
keywords: [LoRA, 低秩, 适配, 微调]
brief: 通过在特定层注入低秩矩阵完成参数高效微调，显著降低训练与部署成本。
meta: [参数高效微调, 低资源]
---

LoRA 通过在部分权重处引入低秩分解（如 W≈W₀ + BA），在保持原始权重冻结的同时学习少量适配参数，达到接近全参微调的效果。

### 工作原理
- 对 Transformer 中的注意力或前馈层引入两个低秩矩阵 A、B，通过训练 B·A 的增量来调整输出。
- 训练阶段仅更新 LoRA 参数，推理时将其与原始权重合并或按需加载。
- 可灵活选择插入层、秩 r 与缩放系数 α，以平衡容量与成本。

### 优势
- **参数效率高**：新增参数数量远少于全量微调，便于多任务共享同一底座模型。
- **训练资源需求低**：可在单卡甚至消费级显卡完成微调，适合企业私有化部署。
- **部署灵活**：通过权重注入或 Adapter 形式动态切换能力，降低模型版本管理成本。

### 扩展与组合
- 与量化技术结合（如 QLoRA）可在 4-bit 精度下完成训练。
- 可与前缀调优（Prefix-Tuning）、Adapter、IA3 等其他参数高效方法结合。
- 在多模态模型、扩散模型中也有成功应用。

### 实践提示
- 选择与任务相关性最高的层进行注入，常见为注意力的 Query、Value 权重。
- 调整学习率与秩值避免欠拟合或过拟合，可通过验证集监控损失。
- 对于多任务场景，可维护 LoRA 权重仓库，按需加载或合并。

### 参考资料
- [Hu et al. "LoRA: Low-Rank Adaptation of Large Language Models." (2021).](https://arxiv.org/abs/2106.09685)（提出 LoRA 框架与在 NLP 任务上的验证）
- [Dettmers et al. "QLoRA: Efficient Finetuning of Quantized LLMs." (2023).](https://arxiv.org/abs/2305.14314)（展示将 LoRA 与 4-bit 量化结合的实践）
- [Ding et al. "Parameter-Efficient Fine-Tuning of Large-Scale Pre-trained Language Models." (2023).](https://arxiv.org/abs/2303.15647)（综述多种参数高效微调方法及比较）
