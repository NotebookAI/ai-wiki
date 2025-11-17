---
id: langgraph
title: LangGraph
title_en: LangGraph
category: framework
type: tool
order: 51
aliases: [LangGraph]
keywords: [LangGraph, LangChain, Agent, 状态机]
brief: 在 LangChain 之上构建的有状态 Agent 图框架，用图结构描述多步对话与工具调用流程。
meta: [Agent 编排, 状态管理]
---

LangGraph 通过有向图的形式来描述 Agent 的状态与步骤，将复杂的「思考-行动-反思」流程抽象为节点与边，便于可视化、调试与持久化。与传统的线性链路不同，它强调状态机和循环结构，适合实现多轮对话、长任务恢复与人类在环等场景。

在工程中，LangGraph 与 LangChain 的组件（模型、工具、记忆等）紧密结合，并支持将图结构部署到生产环境，是构建复杂 Agent 系统的一种现代编排方案。

