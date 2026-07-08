# 首页首屏纵向间距压缩 Spec

## Why
在 macOS 非全屏浏览器中，首页 hero 红色背景区域距下方 stats 统计数字区距离过远，导致"128+ 企业完成诊断"等统计文字贴紧浏览器底边。原因：
1. `.hero-inner` 的 `min-height:400px` + `padding:60px 0`（border-box 下合计 400px）占据过多纵向空间
2. `.stats-section` 的 `padding:60px 0` 进一步加大间距
3. macOS 浏览器的可视高度（含 chrome 边框）通常比 Windows 小，导致统计内容被推出视口底部

## What Changes
1. index.html `.hero-inner`: `min-height:400px` → `320px`，`padding:60px 0` → `48px 0`（border-box 下总高 320px，节省 80px）
2. index.html `.stats-section`: `padding:60px 0` → `40px 0`（节省 20px）

合计节省 **100px** 纵向空间，确保 macOS 非全屏下统计文字在首屏完整可见。

## Impact
- Affected code: `public/index.html`
- 仅首页英雄区和统计区纵向间距变化，视觉元素和布局结构不变
- Windows 端无影响（间距减小在可接受范围内）

## ADDED Requirements

### Requirement: macOS 首屏纵向适配
系统 SHALL 在 macOS 非全屏浏览器中首屏完整展示统计区内容。

#### Scenario: macOS 非全屏
- **WHEN** 用户在 MacBook 上以非全屏模式打开首页
- **THEN** 统计区（128+ 企业完成诊断 等 4 项数据）在首屏内完整可见
- **AND** 统计文字不贴边、有合理底部留白
