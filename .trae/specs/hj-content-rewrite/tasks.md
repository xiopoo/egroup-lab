# 不良资产专业文章首尾段优化 - 实施计划

## [ ] Task 1: 重写首段，增强吸引力
- **Priority**: high
- **Depends On**: None
- **Description**: 
  - 采用悬念式开篇，设置问题引发读者兴趣
  - 调整结构：从具体案例或数据入手，引出核心观点
  - 避免与末段重复的"8年不良资产"表述
- **Acceptance Criteria Addressed**: AC-1, AC-3
- **Test Requirements**:
  - `human-judgement` TR-1.1: 首段开篇有吸引力，能快速抓住读者注意力
  - `human-judgement` TR-1.2: 首段与末段表达方式明显不同
- **Notes**: 参考公众号爆款文章开头，采用"问题+反差"模式

## [ ] Task 2: 重写末段，强化总结力度
- **Priority**: high
- **Depends On**: None
- **Description**: 
  - 强化总结，提炼文章核心价值
  - 提供明确的行动指引
  - 避免鸡汤化表述，保持专业感
  - 与首段内容呼应但表达方式差异化
- **Acceptance Criteria Addressed**: AC-2, AC-3
- **Test Requirements**:
  - `human-judgement` TR-2.1: 末段总结有力，能引发读者行动
  - `human-judgement` TR-2.2: 末段与首段表达方式明显不同
- **Notes**: 末段应包含核心观点回顾和明确的行动建议

## [ ] Task 3: 检查并优化专业术语使用
- **Priority**: medium
- **Depends On**: Tasks 1-2
- **Description**: 
  - 检查文章中专业术语的准确性
  - 优化语言流畅度和逻辑连贯性
  - 确保术语使用一致
- **Acceptance Criteria Addressed**: AC-4
- **Test Requirements**:
  - `human-judgement` TR-3.1: 专业术语准确无误
  - `human-judgement` TR-3.2: 语言流畅，逻辑连贯
- **Notes**: 重点检查不良资产、债务重组、资产保全等核心术语

## [ ] Task 4: 更新公众号HTML文件
- **Priority**: high
- **Depends On**: Tasks 1-3
- **Description**: 
  - 将重写的首尾段同步更新到公众号HTML文件
  - 确保格式正确，不影响排版
- **Acceptance Criteria Addressed**: AC-1, AC-2, AC-3, AC-4
- **Test Requirements**:
  - `human-judgement` TR-4.1: HTML文件中首尾段已更新
  - `human-judgement` TR-4.2: 排版格式正确，无错乱
- **Notes**: 确保HTML中的段落格式与原文一致

## [ ] Task 5: 更新Markdown源文件
- **Priority**: high
- **Depends On**: Tasks 1-3
- **Description**: 
  - 将重写的首尾段同步更新到Markdown源文件
  - 确保格式正确
- **Acceptance Criteria Addressed**: AC-1, AC-2, AC-3, AC-4
- **Test Requirements**:
  - `human-judgement` TR-5.1: Markdown文件中首尾段已更新
  - `human-judgement` TR-5.2: 格式正确，无错乱
- **Notes**: 保持Markdown格式规范