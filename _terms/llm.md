---
id: llm
title: 大语言模型
title_en: Large Language Model · LLM
category: foundation
type: model
order: 3
aliases: [大模型, LLM]
keywords: [LLM, Large Language Model, ChatGPT, GPT, LLaMA, Qwen, Yi]
brief: 在海量文本上预训练的超大模型，是现代生成式 AI 的核心基础。
meta: [理解与生成自然语言, GPT / Qwen / Yi 等]
chips: [大模型基础, 文本理解与生成, 通用能力]
---

LLM（大语言模型）通常以 Transformer 为核心架构，通过“下一个 token 预测”在海量文本上进行自监督预训练，从而学习语言结构、世界知识与一定的推理模式。

### 能力与应用
- **自然语言交互**：对话、问答、解释概念与知识点。
- **文本生成**：翻译、改写、总结、创意写作、营销文案。
- **代码与数据辅助**：代码生成与解释、SQL/正则生成、数据分析脚本。
- **多轮推理与规划**：借助思维链、工具调用进行复杂决策。

### 模型演进
- **GPT-3 (2020)**：175B 参数，验证规模化预训练带来的通用能力。
- **InstructGPT/GPT-4 (2022-2023)**：引入指令微调、RLHF 与多模态感知，提升可用性与安全性。
- **开源生态**：Meta LLaMA、Mistral、Qwen、Yi 等系列提供可定制与私有化部署的选择。

### 技术栈
- **预训练数据**：网络文本、书籍、代码、对话等多源数据，需进行清洗与去重。
- **对齐方法**：SFT、RLHF、DPO、RLAIF 等技术让模型更符合人类偏好。
- **推理优化**：量化、张量并行、连续批处理等手段保障部署效率。

### 评估与治理
- **能力评测**：MMLU、BIG-Bench、GSM8K 等基准衡量模型在多学科、多任务的表现。
- **安全评估**：红队测试、越狱检测、偏见审查等保障上线安全。
- **负责任使用**：遵循隐私保护、数据合规与版权规范，建立人类监督机制。

### 参考资料
- [Brown et al. "Language Models are Few-Shot Learners." *NeurIPS* (2020).](https://arxiv.org/abs/2005.14165)（GPT-3 论文，展示规模化预训练的能力涌现）
- [OpenAI. "GPT-4 Technical Report." (2023).](https://arxiv.org/abs/2303.08774)（介绍 GPT-4 的性能与安全对齐实践）
- [Touvron et al. "LLaMA: Open and Efficient Foundation Language Models." (2023).](https://arxiv.org/abs/2302.13971)（开源 LLM 家族及训练细节）
- [Zhou et al. "LIMA: Less Is More for Alignment." (2023).](https://arxiv.org/abs/2305.11206)（探讨少量高质量指令数据对对齐的影响）
