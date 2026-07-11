# 网站页脚内容精简优化 - 实施计划

## Task 1: 优化首页(index.html)footer结构和样式
- **Priority**: high
- **Depends On**: None
- **Description**:
  - HTML结构调整：移除品牌信息列、快速导航列；精简联系方式列仅保留邮箱
  - 桌面端CSS：单行居中布局，"邮箱" + "分隔符 |" + "版权"
  - 移动端CSS：两行居中布局，邮箱在上、版权在下
  - 桌面端padding: `12px 0 8px`，移动端padding: `10px 0 6px`
  - 字体颜色使用 `var(--text-faint)` 或 `var(--text-muted)`
- **Acceptance Criteria Addressed**: AC-1, AC-2, AC-3
- **Test Requirements**:
  - `human-judgement` TR-1.1: 桌面端footer仅显示邮箱和版权，无重复内容
  - `human-judgement` TR-1.2: 移动端footer两行居中，内容完整
  - `human-judgement` TR-1.3: 所有原始footer信息（导航等）仍可通过导航栏访问
- **Notes**:
  - 需确保邮箱链接可点击（mailto:）
  - 品牌信息、导航链接等已在导航栏中存在，移除后用户仍可访问

## Task 2: 同步优化其他6个页面footer
- **Priority**: high
- **Depends On**: Task 1
- **Description**: 将Task 1的footer结构和样式应用到about.html, services.html, cases-detail.html, experts.html, diag.html, 404.html
- **Acceptance Criteria Addressed**: AC-4
- **Test Requirements**:
  - `human-judgement` TR-2.1: 所有页面footer内容与首页一致
  - `human-judgement` TR-2.2: 所有页面footer样式与首页一致
- **Notes**: 所有页面footer结构和样式需完全统一

## [x] Task 3: 验证所有页面
- **Priority**: medium
- **Depends On**: Task 2
- **Description**: 验证7个页面在桌面端和移动端footer显示正常
- **Acceptance Criteria Addressed**: AC-1, AC-2, AC-3, AC-4
- **Test Requirements**:
  - `human-judgement` TR-3.1: 桌面端footer高度≤60px，布局紧凑
  - `human-judgement` TR-3.2: 移动端footer高度≤80px，两行显示
  - `human-judgement` TR-3.3: 所有页面footer完全一致
- **Notes**: 注意检查邮箱链接功能正常
