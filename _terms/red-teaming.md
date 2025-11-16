---
id: red-teaming
title: 大模型红队测试
title_en: LLM Red Teaming
category: safety
type: practice
order: 45
aliases: [红队测试, Red Teaming]
keywords: [安全评估, 对抗测试, 治理]
brief: 通过模拟恶意行为与极端场景，系统评估大模型的安全风险与防护效果。
meta: [安全评估, 对抗样本, 内容过滤]
---

大模型红队测试以跨学科专家与自动化工具模拟滥用、规避、越狱等攻击路径，评估模型在内容安全、隐私泄露、系统稳定性方面的弱点。典型流程包括威胁建模、测试集构建、执行与复盘，并与安全策略、过滤器迭代闭环。

业界常结合人类专家、模型自我博弈与工具脚本进行持续红蓝对抗，以覆盖仇恨言论、虚假信息、生物化学、网络攻击等高风险场景。测试结果还需与监管框架（如 NIST AI RMF）对齐，形成可审计的安全报告。

### 参考资料
- [Anthropic 论文《Red Teaming Language Models with Language Models》](https://arxiv.org/abs/2202.03286)（介绍利用模型辅助红队的流程与案例）
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)（提供 AI 系统安全治理与评估的参考框架）
