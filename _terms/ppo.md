---
id: ppo
title: PPO 强化学习算法
title_en: Proximal Policy Optimization · PPO
category: training
type: method
order: 63
aliases: [PPO]
keywords: [PPO, 强化学习, 策略优化, RLHF]
brief: 一种稳定的策略梯度强化学习算法，常用于 RLHF 中在奖励信号指导下优化语言模型策略。
meta: [强化学习, 策略优化]
---

PPO（Proximal Policy Optimization）通过对策略更新步长施加约束（例如 KL 惩罚或截断比率），在保持样本效率的同时避免策略发生过大偏移，是现代强化学习中应用最广的 On-policy 算法之一。

在 RLHF 场景中，PPO 用于在固定的奖励模型指导下微调语言模型，优化其输出分布，使之更符合人类偏好与安全约束。

