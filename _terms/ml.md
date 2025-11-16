---
id: ml
title: 机器学习
title_en: Machine Learning · ML
category: foundation
type: core
order: 2
aliases: [ML]
keywords: [Machine Learning, 机器学习, 统计学习]
brief: 用数据与算法让模型自己“归纳经验”，而不是人工枚举规则。
meta: [从数据中学习规律, 不再写死规则]
---

机器学习通过经验数据和可泛化的算法，让系统自动学习输入与输出之间的映射关系，并在未见过的样本上进行预测或决策。

### 关键范式
- **监督学习**：利用带标签数据进行分类、回归、序列标注等任务。
- **无监督学习**：通过聚类、降维、生成建模等方法挖掘数据结构。
- **半监督与自监督学习**：结合大量无标签数据提升表现，近年来在大模型预训练中尤为重要。
- **强化学习**：基于环境交互与奖励信号逐步学习策略，常用于决策与控制问题。

### 模型与算法谱系
- 传统方法：线性模型、朴素贝叶斯、决策树、随机森林、支持向量机等强调可解释性与较小数据需求。
- 深度学习：多层神经网络可学习高维表示，是语音识别、视觉理解、自然语言处理的主流方案。
- 概率图模型与贝叶斯方法：擅长表达不确定性与因果结构，在风控、医学等领域仍被广泛采用。

### 工程实践
- **数据闭环**：数据标注、清洗、特征工程、数据漂移监测构成性能维持的核心工作流。
- **模型部署**：涵盖模型压缩、在线/离线推理、A/B 实验与持续学习，强调可观测性与治理。
- **评估指标**：准确率、召回率、AUC、F1-score 等指标需要结合业务目标综合考量。

### 与人工智能的关系
机器学习是人工智能的重要子领域，为感知、理解、生成等能力提供算法基础；而人工智能还包括知识表示、规划、机器人等更广泛的研究方向。

### 参考资料
- [Tom M. Mitchell. *Machine Learning*. McGraw-Hill (1997).](http://www.cs.cmu.edu/~tom/mlbook.html)（经典教材，对监督、无监督与评估进行了系统介绍）
- [Christopher M. Bishop. *Pattern Recognition and Machine Learning*. Springer (2006).](https://www.microsoft.com/en-us/research/publication/pattern-recognition-machine-learning/)（深入讨论概率建模与推断）
- [Andrew Ng. "Machine Learning Yearning" (2018).](https://www.deeplearning.ai/resources/machine-learning-yearning/)（工程视角解析如何搭建 ML 系统）
