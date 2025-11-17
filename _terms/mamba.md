---
id: mamba
title: Mamba 状态空间模型
title_en: Mamba · State Space Model
category: model
type: model
order: 24
aliases: [Mamba, 状态空间模型, SSM]
keywords: [Mamba, State Space Model, SSM, 长序列, 替代 Transformer]
brief: 一类基于状态空间方程、强调线性时间复杂度的序列模型，代表工作 Mamba 被视作 Transformer 的潜在替代或补充。
meta: [长序列建模, 线性复杂度]
---

状态空间模型（State Space Model, SSM）通过显式建模隐状态的连续时间动态来处理序列数据，Mamba 系列工作则在此基础上设计了适合 GPU 的高效离散化与实现，使得模型在理论上可以以近似线性复杂度处理长序列，同时保持良好的表现力。

Mamba 等 SSM 模型在长上下文建模、语音与时间序列等任务上表现突出，被视为对 Transformer 架构的有力补充。实际应用中，常见做法是在 Encoder 或混合结构中引入 SSM 以降低推理成本，同时保留部分自注意力层以提升全局建模能力。

