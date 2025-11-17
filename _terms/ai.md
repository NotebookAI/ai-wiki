---
id: ai
title: 人工智能
title_en: Artificial Intelligence · AI
category: foundation
type: core
order: 1
aliases: [AI]
keywords: [AI, Artificial Intelligence, 人工智能]
brief: 让机器具备“感知、理解、推理、决策”的一整套技术集合。
description: 人工智能涵盖机器学习、深度学习、大语言模型、多模态等方向，是现代智能应用的总体概念。
meta: [大概念, 包含 ML / DL / LLM 等]
---

人工智能（AI）是一个跨学科领域，结合计算机科学、数学、语言学、心理学等知识，让机器具备感知环境、理解语义、推理决策与自主行动的能力。

### 核心分支
- **学习与表示**：涵盖机器学习、深度学习、统计学习等方法，通过数据构建模型归纳知识。
- **感知与理解**：包含视觉识别、语音识别、自然语言处理等，帮助模型获取结构化信息。
- **规划与推理**：运筹学、知识表示、强化学习等技术使系统能够制定策略并迭代优化。
- **人机协同**：对话系统、推荐系统、智能体（Agent）强调与用户互动与价值对齐。

### 发展阶段
1. **符号主义时代**（1950s-1980s）：强调知识表示与规则推理，代表成果包括专家系统。
2. **统计机器学习时代**（1990s-2010）：强调从数据中学习，出现支持向量机、Boosting 等算法。
3. **深度学习与大模型时代**（2012-至今）：以深度神经网络与大规模预训练模型驱动突破，扩展到多模态与通用智能研究。

#### 关键里程碑
1. **1956 年 · Dartmouth 会议**：首次明确提出“人工智能”研究议程，奠定以符号推理为核心的学科框架，激活跨学科合作。
2. **1970s-1980s · Expert Systems**：通过知识库与推理机解决医学、地质等垂直任务，让 AI 在专业领域实现可落地的决策自动化。
3. **2012 年 · ImageNet 突破**：AlexNet 以深度卷积网络在 ImageNet 竞赛上超越传统方法，开启以端到端学习驱动的感知能力飞跃。
4. **2017 年 · Transformer 发表**：提出自注意力架构与大规模预训练范式，大幅提升序列建模与多模态扩展的效率与泛化能力。
5. **2023 年 · GPT-4**：多模态大语言模型在推理、对话与代码等任务上展现通用性，推动 AI 向具备复杂理解与协作能力的通用智能迈进。

### 应用版图
- **产业场景**：搜索、广告推荐、供应链优化、金融风控、智能制造等提升生产效率。
- **消费者产品**：语音助手、智能客服、AIGC 创作、游戏 NPC、教育辅导等增强交互体验。
- **科研与社会治理**：药物发现、气候模拟、智慧城市治理、公共服务辅助决策。

### 挑战与前沿议题
- **对齐与安全**：如何让模型输出符合伦理法规并可解释，是 AI 安全研究的核心议题。
- **数据与算力资源**：高质量数据构建、隐私保护与算力分配影响模型能力上限。
- **社会影响**：涉及就业变迁、知识产权、偏见治理等，需要跨学科协同制定标准。

### 评测与治理
- **模型评测指标**：
  - [MMLU](https://arxiv.org/abs/2009.03300) 以 57 个学科、上千道题检验通识推理，常被 GPT-4、Gemini 等技术报告用来衡量通用性。
  - [Safety Bench](https://arxiv.org/abs/2311.17663) 聚焦危险指令响应率，用于发现越权、攻击类风险场景。
  - [BLEU](https://aclanthology.org/P02-1040/) 是机器翻译与多语言生成的经典自动评分指标，衡量输出与参考文本的 n-gram 重合度。
  - **Toxicity Rate** 借助 Perspective API 等工具统计有害语言占比，是内容审核与品牌安全评估的常见指标。
- **对齐与治理框架**：
  - **RLHF（Human Feedback）**：如 OpenAI、Meta Llama 采用「预训练 + 奖励模型 + 近端策略优化」流程，缓解幻觉、冒犯性回答等交互风险。
  - **Constitutional AI**：Anthropic 在 [Claude](https://www.anthropic.com/index/claude-3) 训练中让模型自评并遵循公开的“宪法”条款，可减少越权指令执行、隐私泄露等问题。
  - **OECD / GPAI 原则**：强调以人为本、透明可解释与可追责，指导欧盟《AI 法案》、新加坡 AI Verify 等标准化测试，帮助监管歧视、滥用与跨境数据风险。
  - **行业治理案例**：如微软 Responsible AI Standard、国内《生成式人工智能服务管理暂行办法》要求记录测试基准与红队结果，实现全流程问责。

### 参考资料
- [Stuart Russell & Peter Norvig. *Artificial Intelligence: A Modern Approach* (4th Edition).](https://aima.cs.berkeley.edu/)（经典教材，系统阐述 AI 基础与应用）
- [Michael Jordan. "Artificial Intelligence — The Revolution Hasn’t Happened Yet." *Harvard Data Science Review* (2019).](https://hdsr.mitpress.mit.edu/pub/wot7mkc1)（讨论 AI 与统计、数据科学的关系）
- [国际组织报告《OECD AI Principles》](https://oecd.ai/en/ai-principles)（提供全球视角的 AI 发展与治理原则）
