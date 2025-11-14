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

LoRA 通过在部分权重处引入低秩分解（如 W≈W0+BA），在保持原始权重冻结的同时学习少量适配参数，达到接近全参微调的效果。

