---
id: rlaif
title: RLAIF 模型反馈强化学习
title_en: Reinforcement Learning from AI Feedback · RLAIF
category: training
type: method
order: 64
aliases: [RLAIF, AI Feedback]
keywords: [RLAIF, AI Feedback, 奖励模型, 对齐]
brief: 使用「模型生成反馈」替代或补充人类标注，训练奖励模型并进行对齐的强化学习方法。
meta: [对齐, 成本优化]
---

RLAIF（Reinforcement Learning from AI Feedback）延续了 RLHF 的整体思路，但将人类偏好标注部分替换为由更强或更安全的模型生成的反馈，从而降低大规模对齐的标注成本。通过精心设计的反馈提示和过滤机制，可以在一定程度上接近人工偏好数据的效果。

这种方法在实践中常与少量高质量人类数据结合使用，用于校准或监督 AI 反馈的质量。

