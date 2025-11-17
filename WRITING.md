# 写作指南 | Writing Guide

[简体中文](#简体中文) | [English](#english)

## 简体中文

这份写作指南是为了配合 README 里提到的项目目标：  
把飞快冒出来的 AI 术语，尽量讲得「清晰、克制、好懂」，同时又对实务有帮助。

如果你在写或修改某个词条，可以把它当成一份「小抄」，随时翻一眼。

### 写在前面：写给谁看？

- 默认读者对这个词「只听过名字」，甚至连中文是什么都不确定；
- 可以假设 TA 对 AI/LLM 感兴趣，但不一定是某个子领域的专家；
- 你可以用专业词汇，但最好配一层「普通人能懂」的解释。

### 结构建议：一篇词条可以怎么长出来

不是必须完全照搬，但可以参考下面这个顺序：

1. **一句话概览（对应 `brief` 字段）**
   - 用 1–2 句说清楚「它是什么」+「最常出现的场景」；
   - 避免把 marketing slogan 写进来，尽量用事实性的描述。

2. **背景 / 为什么会有这个东西**
   - 说明它是为了解决哪类问题、和什么时代背景有关；
   - 可以简单提到是在哪些论文 / 产品 / 场景里先被提出来的。

3. **核心概念 / 怎么工作的**
   - 用图、例子或分点说明关键机制，而不是一大段密集术语；
   - 如果有公式或更细的技术细节，可以放在「深入理解」小节。

4. **和哪些概念容易混淆**
   - 指出几个常被混用或容易搞混的词，说明相同点和差异；
   - 如果站内已经有对应词条，尽量加上链接，方便跳转。

5. **典型用法 / 实践提醒**
   - 在产品、系统或论文里，别人是怎么用这个概念的；
   - 对「新手常见误用」「需要注意的边界」做一点点提醒。

6. **延伸阅读**
   - 选几篇你觉得值得读的公开资料：官方文档、论文、博客等；
   - 不需要列很多，重点是「有代表性」「容易点进去继续学」。

### 写作风格：清晰、克制、可验证

- **优先回答「是什么」「解决什么问题」「在什么语境下常被提起」**；
- 可以使用比喻，但要避免特别依赖行话的「圈内梗」；
- 尽量避免纯市场宣传式语气，不替任何产品或框架站队；
- 如果是个人判断或经验观点，建议标注为「经验观察」「个人理解」；
- 如引用论文、博客或文档，附上链接，方便读者继续深入。

### 如何利用站内结构和评论区

- 在正文里提到其它术语时（例如在 RAG 里提到 embedding、retriever），尽量链接到站内对应词条，帮读者「顺着概念图逛一圈」；
- 不需要把所有争论一次写完——可以把一些细节、不同看法留给评论区；
- 欢迎在评论区分享你的实践经验、踩坑记录、对定义的异议，这些讨论会和正文一起，逐渐变成这份「公共笔记本」的一部分；
- 读者可以顺着评论里的 GitHub 头像点进你的主页，看到你在做什么项目——这也是这个项目希望顺带带来的那一点点「社交」。

### 不知道从哪里开始写？

- 只补一个更清晰的 `brief`（一句话解释）也很有价值；
- 或者先给正文加 1–2 个更贴切的例子、对比或外部链接；
- 之后你可以在 Review 或评论区里，和别人一起慢慢把这篇词条打磨得更完整。

没有哪一篇是「一稿定版」的，重要的是先把你当下的理解写下来。

---

## English

This guide supports the writing goals described in the README:  
explaining fast-evolving AI terminology in a way that is clear, measured, and actually useful for people trying to understand what is going on.

You can treat this as a quick reference whenever you add or revise an entry.

### Audience: who are we writing for?

- Assume the reader has “heard the term before” but may not recall what it really means;
- They are curious about AI/LLM but not necessarily experts in any subfield;
- It is fine to use technical language, but pair it with explanations that a motivated non-expert can follow.

### Suggested structure for an entry

You do not have to follow this strictly, but it is a good default:

1. **One-sentence overview (matches `brief`)**
   - In 1–2 sentences, say what it is and where it shows up most often;
   - Avoid marketing slogans—prefer factual, descriptive language.

2. **Background / Why this exists**
   - Explain what problem it was meant to solve and in which context it appeared;
   - Optionally mention key papers, products, or milestones where it became prominent.

3. **Core idea / How it works**
   - Use diagrams, examples, or bullet points to explain the mechanism;
   - Keep heavy formulas or deep technical details in a later “deep dive” section.

4. **Related and easily confused concepts**
   - Call out a few terms that are often conflated and clarify similarities/differences;
   - When there are existing entries in this glossary, link to them.

5. **Typical usage / Practical notes**
   - Show how the term appears in real systems, products, or research;
   - Highlight common misuses or edge cases that practitioners should be aware of.

6. **Further reading**
   - Provide a small set of high-quality public resources: docs, papers, blog posts;
   - Focus on sources that are both representative and approachable.

### Tone and style

- Prioritize answering what it is, what problem it solves, and in which context it shows up;
- Use analogies where helpful, but avoid insider jokes or jargon-heavy language;
- Stay neutral—do not turn the entry into marketing for any specific product or framework;
- When sharing personal opinions or experience, label them as such;
- Include links to public references so interested readers can dive deeper.

### Using internal links and comments

- When you mention other terms (e.g., “embedding”, “retriever” inside a RAG entry), link to their entries to help readers explore the concept graph inside the site;
- You do not need to settle every debate inside the main body—let some of the nuance live in the comments;
- Use the comments section to share field experience, gotchas, or alternative interpretations—over time, these discussions become part of the shared knowledge;
- Readers can click through GitHub avatars in comments to discover each other’s profiles and projects, which is a small but intentional “social” aspect of this glossary.

### If you are not sure where to start

- Improving just the `brief` line for a term is already a meaningful contribution;
- Adding one concrete example, a clearer comparison, or a good reference link is also great;
- You can always refine the entry together with others during review or in the comments.

There is no such thing as a perfect first draft—the important part is to capture your current understanding and iterate. 

