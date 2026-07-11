# 移动端统计数据标签显示修复 - 实施计划

## Task 1: 修改首页(index.html)移动端stats标签样式
- **Priority**: high
- **Depends On**: None
- **Description**: 在 `@media(max-width:767px)` 媒体查询中调整 stats-in-hero 标签样式：
  - 将 `.stats-in-hero .stat-item .label{font-size:12px}` 调整为 `font-size:11px`
  - 这将让"净利润修复峰值"在窄屏上更容易完整显示
  - 其他标签也会同步缩小，保持视觉一致性
- **Acceptance Criteria Addressed**: AC-1, AC-2
- **Test Requirements**:
  - `human-judgement` TR-1.1: 在≤375px视口下4个标签均完整显示
  - `human-judgement` TR-1.2: 在320px视口下"净利润修复峰值"完整显示

## [x] Task 2: 验证修复效果
- **Priority**: medium
- **Depends On**: Task 1
- **Description**: 验证首页在移动端各尺寸下显示正常
- **Acceptance Criteria Addressed**: AC-1, AC-2
- **Test Requirements**:
  - `human-judgement` TR-2.1: 375px视口下所有标签显示完整
  - `human-judgement` TR-2.2: 320px视口下所有标签显示完整
  - `human-judgement` TR-2.3: 标签字体大小一致，布局整齐
