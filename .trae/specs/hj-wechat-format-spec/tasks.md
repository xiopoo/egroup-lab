# 公众号文章排版设计规范调整 - 实施计划

## [ ] Task 1: 移除自定义阅读原文按钮
- **Priority**: high
- **Depends On**: None
- **Description**: 
  - 移除品牌推广区中的 `.read-more-btn` 按钮
  - 移除 `.read-more-hint` 提示文字
- **Acceptance Criteria Addressed**: AC-1
- **Test Requirements**:
  - `human-judgement` TR-1.1: 品牌推广区不再包含阅读原文按钮和提示文字
- **Notes**: 用户需在公众号后台设置阅读原文链接

## [ ] Task 2: 引用块细竖线样式调整
- **Priority**: high
- **Depends On**: None
- **Description**: 
  - 将引用块左侧边框从 5px 改为 1-2px 细竖线
  - 保持品牌色 `#AB1942` 不变
- **Acceptance Criteria Addressed**: AC-2
- **Test Requirements**:
  - `human-judgement` TR-2.1: 引用块使用细竖线（1-2px）标识
- **Notes**: 确保细竖线在公众号中可见

## [ ] Task 3: 品牌烙印居中对齐检查
- **Priority**: high
- **Depends On**: None
- **Description**: 
  - 检查品牌推广区所有元素对齐方式
  - 确保品牌名、slogan、二维码、联系方式等均居中对齐
- **Acceptance Criteria Addressed**: AC-3
- **Test Requirements**:
  - `human-judgement` TR-3.1: 品牌推广区所有元素均居中对齐
- **Notes**: 使用 text-align: center 确保对齐

## [ ] Task 4: 品牌推广区信息精简
- **Priority**: high
- **Depends On**: Task 1
- **Description**: 
  - 去除冗余信息，只保留必要内容
  - 保留：品牌名、slogan、品牌口号、二维码、扫码引导、公众号ID、官网、公众号名称
  - 移除：阅读原文按钮、提示文字（已在Task 1完成）
- **Acceptance Criteria Addressed**: AC-4
- **Test Requirements**:
  - `human-judgement` TR-4.1: 品牌推广区信息精简，无冗余
- **Notes**: 根据用户反馈"不要加上多余的信息，现在已经比较冗余了"进行精简

## [ ] Task 5: SKILL.md模板同步更新
- **Priority**: medium
- **Depends On**: Tasks 1-4
- **Description**: 
  - 更新品牌烙印模板中引用块样式（细竖线）
  - 更新品牌推广区规范（移除阅读原文按钮）
  - 更新品牌推广区对齐规范（居中）
- **Acceptance Criteria Addressed**: AC-1, AC-2, AC-3, AC-4
- **Test Requirements**:
  - `programmatic` TR-5.1: SKILL.md中引用块样式已更新为细竖线
  - `programmatic` TR-5.2: SKILL.md中品牌推广区已移除阅读原文按钮
- **Notes**: 确保模板规范与实际HTML输出一致