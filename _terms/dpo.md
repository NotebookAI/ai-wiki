---
id: dpo
title: DPO 直接偏好优化
title_en: Direct Preference Optimization · DPO
category: training
type: method
order: 62
aliases: [DPO, 直接偏好优化]
keywords: [DPO, 偏好优化, 对齐, 无需显式奖励模型]
brief: 一种直接在「好/坏」回答对上优化策略模型的对齐方法，相比 RLHF 不需要单独训练奖励模型。
meta: [对齐方法, 偏好学习]
---

DPO（Direct Preference Optimization）将人类偏好数据直接用于优化策略模型，通过对「优选答案」与「劣选答案」的对比损失，让模型更倾向于输出被人类偏好的结果。与 RLHF 不同，DPO 不再显式构建奖励模型，而是将其隐含在损失函数中，从而简化了训练流程。

在实践中，DPO 常与 SFT 结合使用，用于在已有指令微调模型上进一步做细粒度对齐，减少训练不稳定性和过度优化问题。

