# 红色背景全宽恢复与首屏内容适配 Spec

## Why
此前多轮优化（page-visual-layout-optimization → red-bg-width-refinement → homepage-ia-redesign）对红色背景逐步添加了 `max-width: var(--content-max)`（1200px）、`margin: 0 auto`、`border-radius: 0 0 24px 24px` 等样式，导致：
1. **红色背景无法覆盖全屏宽度**：在宽屏显示器上，红色背景仅居中显示在 1200px 范围内，左右两侧留有 360px（1920px 屏幕）的空白区域，视觉上不完整
2. **首屏内容截断/不完整**：页面高度降低（280px → 220px）配合 max-width 约束，在 macOS Safari/Chrome/Firefox 下首屏内容区域可能出现部分内容被截断或无法完全展示

需要回退红色背景至全宽显示，同时确保首屏内容完整可见。

## Current State Analysis

### 红色背景当前样式（问题根源）

| 页面 | 选择器 | 当前样式（含问题属性） |
|------|--------|----------------------|
| index.html | `.hero` | `max-width:var(--content-max);margin:0 auto;border-radius:0 0 24px 24px` |
| services.html | `.page-hero` | `max-width:var(--content-max);margin:0 auto;border-radius:0 0 24px 24px` |
| about.html | `.page-hero` | 同上 |
| cases-detail.html | `.page-hero` | 同上 |
| experts.html | `.page-hero` | 同上 |
| diag.html | `.page-hero` | 同上 |

### 首屏内容布局
- Header: 64px
- Page-hero: 220px（桌面端）
- 首个 section（.first-section）: padding-top 60px
- 可视区域：~900px（标准笔记本）

## What Changes

### 1. 红色背景恢复全宽
从 6 个页面的 `.page-hero`/`.hero` 中移除 `max-width: var(--content-max)`、`margin: 0 auto`、`border-radius: 0 0 24px 24px`，恢复为纯线性渐变背景。

**恢复后样式**：
```
background:linear-gradient(135deg,var(--brand) 0%,var(--brand-dark) 100%);position:relative;overflow:hidden;height:220px;display:flex;align-items:center
```

### 2. 清理移动端冗余的 reset 样式
移除移动端媒体查询中的 `max-width:none;margin:0;border-radius:0`（因为桌面端不再设置这些属性，无需在移动端重置）。

### 3. 移除 index.html 中冗余的 `.page-hero` 引用
index.html line 202 在 `@media(max-width:1023px)` 中有 `.page-hero{height:240px}`（首页使用 `.hero` 而非 `.page-hero`），清理此无效规则。

### 4. 首屏内容适配
- 首屏内容截断问题主要源于 page-hero 的 max-width 约束导致内容在 Safari 下布局异常。恢复全宽后，此问题应自然解决
- 保留 page-hero 高度 220px（桌面端）以维持内容紧凑性

## Impact
- Affected specs: 页面布局、响应式适配、视觉一致性
- Affected code:
  - `public/index.html` — `.hero` 移除 max-width/margin/border-radius，清理冗余 `.page-hero`
  - `public/services.html` — `.page-hero` 移除 max-width/margin/border-radius
  - `public/about.html` — 同上
  - `public/cases-detail.html` — 同上
  - `public/experts.html` — 同上
  - `public/diag.html` — 同上 + 移动端清理 reset 样式

## ADDED Requirements

### Requirement: 红色背景全宽覆盖
系统 SHALL 确保所有页面顶部红色渐变背景在桌面端完整覆盖屏幕宽度，左右无空白。

#### Scenario: 桌面端显示（≥1024px）
- **WHEN** 用户使用桌面浏览器（Safari/Chrome/Firefox）访问任何页面
- **THEN** 红色背景区域从左到右完全覆盖屏幕宽度，无空白间隙
- **AND** 背景区域无额外边距、无圆角

#### Scenario: 移动端显示（≤767px）
- **WHEN** 用户使用移动设备访问上述页面
- **THEN** 红色背景区域同样全宽覆盖
- **AND** 与之前行为一致，无变化

### Requirement: 首屏内容完整可见
系统 SHALL 确保所有页面在标准视口下首屏内容完整展示，无截断。

#### Scenario: 标准笔记本视口（~900px 可视高度）
- **WHEN** 用户在 macOS 设备上打开任何页面
- **THEN** 页面顶部红色背景后的第一个核心内容栏目应在首屏内完全可见
- **AND** 无内容被截断、无布局偏移

### Requirement: 清理冗余样式
系统 SHALL 移除不再需要的冗余 CSS 规则。

#### Scenario: 样式清理
- **WHEN** 检查 index.html 中的 CSS
- **THEN** `@media(max-width:1023px)` 中的 `.page-hero{height:240px}` 应被删除（首页无 `.page-hero` 元素）

## REMOVED Requirements

无
