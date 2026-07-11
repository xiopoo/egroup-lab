# 灰金重组网站 - Footer布局优化实施计划

## [x] Task 1: 优化首页(index.html)footer样式
- **Priority**: high
- **Depends On**: None
- **Description**: 
  - 缩减 `.footer` 的 padding 值（48px 0 24px → 32px 0 16px）
  - 缩减 `.footer-top` 的 padding-bottom 值（40px → 20px）
  - 缩减 `.footer-bottom` 的 padding-top 值（30px → 16px）
  - 调整移动端 `.footer-top` 的 gap 值（32px → 20px）
  - 保持所有footer内容完整
- **Acceptance Criteria Addressed**: AC-1, AC-2, AC-3, AC-4
- **Test Requirements**:
  - `human-judgement` TR-1.1: 桌面端footer高度明显缩减，视觉效果更紧凑
  - `human-judgement` TR-1.2: 移动端footer高度明显缩减，内容排列更紧凑
  - `human-judgement` TR-1.3: footer所有信息完整无缺失
- **Notes**: 需要同时修改CSS样式和HTML结构中的内联样式（如有）

## [x] Task 2: 优化其他页面footer样式（about.html, services.html, cases-detail.html, experts.html, diag.html, 404.html）
- **Priority**: high
- **Depends On**: Task 1
- **Description**: 
  - 在其余6个页面中应用相同的footer样式优化
  - 确保所有页面footer样式保持一致
- **Acceptance Criteria Addressed**: AC-1, AC-2, AC-3, AC-4
- **Test Requirements**:
  - `human-judgement` TR-2.1: 所有页面footer样式与首页一致
  - `human-judgement` TR-2.2: 所有页面footer信息完整无缺失
- **Notes**: 每个页面的footer结构相同，需要逐一修改

## [x] Task 3: 验证与测试
- **Priority**: medium
- **Depends On**: Task 2
- **Description**: 
  - 在桌面端和移动端分别测试所有页面
  - 验证footer布局在不同屏幕尺寸下的显示效果
  - 确保无内容溢出、重叠或缺失
- **Acceptance Criteria Addressed**: AC-4
- **Test Requirements**:
  - `human-judgement` TR-3.1: 桌面端（≥768px）footer显示正常
  - `human-judgement` TR-3.2: 移动端（<768px）footer显示正常
  - `human-judgement` TR-3.3: 所有页面footer布局一致
- **Notes**: 需验证7个页面的响应式效果