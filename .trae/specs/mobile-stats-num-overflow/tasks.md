# 移动端首屏统计数字溢出修复 - 实施计划

## [x] Task 1: 分析问题并制定修复方案
- **Priority**: high
- **Depends On**: None
- **Description**: 
  - 检查当前移动端stats-in-hero的CSS规则（当前：num font-size:22px，label font-size:10px）
  - 确认溢出原因：虽然22px下"29.5%"宽度约65px可放入138px列，但用户实际设备仍溢出
  - 修复方案：将数字 font-size 从22px降至18px，并设置 letter-spacing:-.04em 压缩间距
- **Acceptance Criteria Addressed**: AC-1, AC-2, AC-3, AC-4
- **Test Requirements**:
  - `programmatic` TR-1.1: 320px下"29.5%"在18px下约55px，列宽134px，富余79px ✅
  - `programmatic` TR-1.2: 375px下"29.5%"在18px下约55px，列宽167px，富余112px ✅
  - `programmatic` TR-1.3: 桌面端不受影响 ✅

## [ ] Task 2: 修改首页CSS移动端数字样式
- **Priority**: high
- **Depends On**: Task 1
- **Description**: 
  - 在 `@media(max-width:767px)` 块中修改 `.stats-in-hero .stat-item .num{font-size:22px}` 为 `{font-size:18px;letter-spacing:-.04em}`
  - 确保其他移动端规则不受影响
- **Acceptance Criteria Addressed**: AC-1, AC-2, AC-4
- **Test Requirements**:
  - `human-judgment` TR-2.1: 320px-375px视口下所有数字完整单行显示
  - `human-judgment` TR-2.2: 桌面端(≥768px)统计数字保持原46px大字样式
  - `human-judgment` TR-2.3: 数字清晰可读，无明显变形

## [ ] Task 3: 验证与提交
- **Priority**: medium
- **Depends On**: Task 2
- **Description**: 验证修改效果，提交并推送代码
- **Acceptance Criteria Addressed**: AC-1, AC-2, AC-3
- **Test Requirements**:
  - `programmatic` TR-3.1: 确认修改后CSS代码正确
  - `human-judgment` TR-3.2: 在浏览器中模拟320px-375px视口检查数字完整显示
