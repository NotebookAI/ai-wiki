---
id: distillation
title: 知识蒸馏
title_en: Knowledge Distillation
category: training
type: method
order: 66
aliases: [知识蒸馏, Distillation]
keywords: [Knowledge Distillation, 知识蒸馏, Teacher-Student, 模型压缩]
brief: 通过让小模型模仿大模型输出来提升性能的模型压缩与迁移方法。
meta: [模型压缩, Teacher-Student]
---

知识蒸馏（Knowledge Distillation）通常采用「教师-学生」架构：先训练或选定一个性能较好的大模型作为教师，再让参数更少的学生模型在相同输入上拟合教师的输出分布（如 soft label、隐藏表示等），从而在保持较高效果的同时显著降低模型规模。

在大模型时代，蒸馏被广泛用于将 GPT-4 等强模型的行为迁移到较小的开源模型上，也常与量化、结构剪枝等压缩技术结合使用。

