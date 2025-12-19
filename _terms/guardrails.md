---
id: guardrails
title: Guardrails（防护栏）
title_en: Guardrails
category: safety
type: practice
order: 88
aliases: [Guardrails, 安全护栏, 安全防护]
keywords: [Guardrails, 安全护栏, Policy, 内容安全, 工具权限, 监控]
brief: 面向 LLM 应用的“分层防护体系”：用策略、校验、权限、监控与人工流程把模型能力限制在可控范围内。
meta: [工程实践, 分层防护]
---

Guardrails（防护栏）不是单一技术，而是一组工程实践：在模型输入、推理过程与输出/执行阶段设置约束与检查，降低幻觉、有害内容、提示注入、越权工具调用等风险。

### 常见组成
- **输入治理**：敏感信息检测与脱敏、注入内容识别、来源可信度标注。
- **输出约束**：结构化输出、格式校验、引用要求、敏感内容过滤与拒答策略。
- **工具与权限**：最小权限、写操作确认、动作白名单、分级审批。
- **监控与审计**：记录关键决策与工具调用，支持告警、回放与事故复盘。

### 实践提醒
- Guardrails 更像“安全工程”，需要结合业务风险分级：低风险场景强调体验，高风险场景强调可控与可追责。
- 不要把“只靠 prompt”当作防护栏：提示可以提升一致性，但不能替代权限、隔离与审计。

### 相关词条
- {{ '/terms/structured-output/' | relative_url }}、{{ '/terms/tool-calling/' | relative_url }}、{{ '/terms/prompt-injection/' | relative_url }}、{{ '/terms/llm-evaluation/' | relative_url }}

