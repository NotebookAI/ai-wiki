---
id: moe
title: 专家混合模型（MoE）
title_en: Mixture of Experts · MoE
category: model
type: model
order: 23
aliases: [MoE, 专家混合, 稀疏专家]
keywords: [Mixture of Experts, MoE, 稀疏激活, 大模型扩展]
brief: 通过将参数拆分为多个“专家”，并在每个样本上只激活其中一小部分，实现参数规模巨大但计算量相对可控的模型结构。
meta: [稀疏激活, 规模扩展]
---

MoE（Mixture of Experts）将模型划分为多个并行的「专家」子网络，并使用门控网络（Gating Network）决定每个输入应路由到哪些专家。这样可以在总体参数非常庞大的前提下，每个样本只激活少数专家，从而在计算预算基本不变的情况下提升模型容量。

在大语言模型领域，Mixtral、DeepSeek-MoE 等都是 MoE 思想的代表实践。工程上需要处理专家负载不均衡、通信开销与路由稳定性等问题，常用技术包括 Top-k 路由、负载均衡损失以及专家并行。

### 相关概念
- 密集模型（Dense Model）：所有参数对每个样本都激活，结构更简单但扩展成本高。
- 路由策略：Top-1/Top-2 路由、Switch Transformer 等变体关注如何稳定且高效地分配样本到专家。
- 多任务与多语言：MoE 常被用来在共享底座的同时，为不同任务/语言分配不同专家。

