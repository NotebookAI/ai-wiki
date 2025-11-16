---
id: rlhf
title: 人类反馈强化学习（RLHF）
title_en: Reinforcement Learning from Human Feedback
category: training
type: method
order: 41
aliases: [RLHF, 人类反馈强化学习]
keywords: [对齐, 人类偏好, 奖励模型]
brief: 通过人类偏好数据训练奖励模型，再结合强化学习让大模型输出更符合人类期望。
meta: [奖励模型, PPO, 偏好数据]
---

RLHF 典型流程包含三阶段：首先进行监督式微调（SFT）获得初始策略；随后采集人类对模型输出的排序或评分，训练奖励模型刻画偏好；最后利用强化学习算法（常用 PPO）在奖励信号指导下进一步优化策略模型，以提升可控性与安全性。

该技术广泛用于指令跟随模型与对齐系统，但依赖大量高质量人类标注，且奖励模型偏差可能导致过度优化，需要结合对抗评估与安全审计。

### 参考资料
- [OpenAI 论文《Training language models to follow instructions with human feedback》](https://arxiv.org/abs/2203.02155)（首次大规模验证 RLHF 在对齐上的有效性）
- [DeepMind & OpenAI 论文《Deep Reinforcement Learning from Human Preferences》](https://arxiv.org/abs/1706.03741)（提出通过人类偏好训练奖励模型的框架，为 RLHF 奠定基础）
