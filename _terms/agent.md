---
id: agent
title: 智能体 / 代理（Agent）
title_en: Agent
category: model
type: concept
order: 7
aliases: [智能体]
keywords: [Agent, 智能体, 工具调用, 规划]
brief: 以 LLM 为大脑，具备目标分解、工具调用与状态记忆的自治式系统形态。
meta: [任务分解, 工具调用, 记忆]
---

Agent 借助规划、记忆、工具与环境反馈循环执行复杂任务，可用于自动化工作流、数据分析与多步决策。

### 架构要素
- **目标规划（Planning）**：通过思维链、任务分解或搜索策略生成可执行计划。
- **记忆与状态管理**：短期记忆用于维持对话上下文，长期记忆通过向量数据库或知识库保存经验。
- **工具与行动执行**：调用 API、代码运行、检索系统等外部工具完成信息获取与操作。
- **反馈评估**：人类或模型对中间结果进行审查，根据环境反馈自我纠偏。

### 常见模式
- **ReAct**：将推理（Reasoning）与行动（Acting）交替执行，适合开放式问答与任务执行。
- **计划-执行-反思（Plan-Execute-Reflect）**：先生成计划，再逐步执行并在失败时回溯调整。
- **多 Agent 协作**：多个角色分工协作，通过调度器协调完成复杂项目，例如软件开发或商业分析。

### 应用场景
- 自动化运营（如报告生成、市场分析）
- 数据与代码助理（分析日志、运行脚本、调试程序）
- 智能客服与业务流程机器人（结合 RPA 与 LLM）

### 挑战
- **可靠性与可解释性**：推理链条长时容易偏离目标，需要监控与人为兜底。
- **工具治理**：需要权限控制、数据隔离与安全审计防止滥用。
- **评估体系缺乏**：缺少统一的任务评测基准，往往依赖人工验收或业务指标。

### 参考资料
- [Yao et al. "ReAct: Synergizing Reasoning and Acting in Language Models." (2022).](https://arxiv.org/abs/2210.03629)（提出在语言模型中结合推理与行动的框架）
- [Shinn et al. "Reflexion: Language Agents with Verbal Reinforcement Learning." (2023).](https://arxiv.org/abs/2303.11366)（引入自我反思与奖励信号强化 Agent 能力）
- [Microsoft. "AutoGen: Enabling Next-Gen LLM Applications." (2023).](https://microsoft.github.io/autogen/)（介绍多 Agent 协作框架与工程实践）
