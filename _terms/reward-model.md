---
id: reward-model
title: 奖励模型（Reward Model）
title_en: Reward Model
category: training
type: concept
order: 65
aliases: [奖励模型, RM]
keywords: [Reward Model, 奖励模型, 偏好学习, RLHF]
brief: 将人类或 AI 对回答好坏的偏好映射为标量评分的模型，是 RLHF/DPO 等对齐方法的核心组件。
meta: [偏好建模, 对齐]
---

奖励模型通常以「问题 + 回答」为输入，输出一个反映偏好程度的分数。它通过在成对或排序偏好数据上训练，使得被偏好的回答获得更高评分。之后，RLHF 可以在该奖励信号的指导下优化策略模型，而 DPO 则可以在不显式使用奖励模型的情况下，间接利用这类偏好信息。

奖励模型的质量直接影响最终对齐效果，因此需要通过红队测试、越狱评估和多维度指标进行持续校准。

