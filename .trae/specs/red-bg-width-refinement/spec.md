# 红色背景宽度精细化调整 Spec

## Why
上一轮优化已将非首页红色背景宽度从全视口收缩至 `1320px`（`1200px + 120px`），但仍存在以下问题：
1. **1320px 在宽屏（1920px+）显示器上依然偏宽**，红色背景左右仅比内容区宽 60px，视觉上仍接近全宽效果，有效内容区域（内容区 1200px）被大幅压缩
2. **首页 `.hero` 仍为全宽**，未做任何收敛处理
3. **cases.html 页面被遗漏**，仍为原始全宽 + 280px 高度
4. 页面间 page-hero 宽度设置不一致，部分页面缺少完整断点适配

需进一步优化，平衡视觉设计与信息展示空间的占比。

## Current State Analysis

| 页面 | Hero 类型 | 当前宽度 | 桌面端高度 | 平板上高度 | 移动端高度 |
|------|-----------|----------|-----------|-----------|-----------|
| index.html | `.hero` | 全视口 | min-h:400px | n/a | auto |
| services.html | `.page-hero` | 1320px | 220px | 200px | 220px |
| about.html | `.page-hero` | 1320px | 220px | 200px | 220px |
| cases-detail.html | `.page-hero` | 1320px | 220px | 200px | 220px |
| experts.html | `.page-hero` | 1320px | 220px | 220px* | 220px |
| diag.html | `.page-hero` | 1320px | 220px | 220px* | 220px |
| **cases.html** | `.page-hero` | **全视口** | **280px** | **240px** | 220px |
| 404.html | `.error-section` | 全视口 | min-h calc | n/a | auto |
| intro.html | 内联样式 | 448px | inline | inline | inline |

\* experts.html 和 diag.html 缺少 `@media(max-width:1023px)` 断点中的 page-hero 规则

## What Changes

### 1. 调整 page-hero 最大宽度：从 1320px 缩至 1200px
- 将 5 个已优化页面的 `.page-hero` 从 `max-width: calc(var(--content-max) + 120px)` → `max-width: var(--content-max)`
- 红色背景与内容区等宽，不再额外占用两侧空间
- 保留 `margin: 0 auto` 和 `border-radius: 0 0 24px 24px`

### 2. 修复 cases.html
- 将 cases.html 的 `.page-hero` 更新为与其他非首页页面一致的规则：
  - `height: 280px → 220px`
  - 添加 `max-width: var(--content-max)`、`margin: 0 auto`、`border-radius: 0 0 24px 24px`
  - 添加桌面端断点（1023px）中的 `height: 200px`
  - 移动端添加 `max-width:none;margin:0;border-radius:0`

### 3. 首页 `.hero` 背景宽度收敛
- 为首页 `.hero` 添加 `max-width: var(--content-max)`、`margin: 0 auto`、`border-radius: 0 0 24px 24px`
- 移动端恢复全宽、取消圆角

### 4. 补充缺失的断点
- experts.html 和 diag.html 在 `@media(max-width:1023px)` 中添加 `.page-hero{height:200px}`
- 确保所有含 `.page-hero` 的页面拥有完整的三断点覆盖（桌面 ≥1024px / 平板 768-1023px / 移动 ≤767px）

## Impact
- Affected specs: 页面布局、响应式适配、视觉一致性
- Affected code:
  - `public/index.html` — `.hero` 添加宽度限制和圆角
  - `public/services.html` — `.page-hero` max-width 从 1320px 缩至 1200px
  - `public/about.html` — 同上
  - `public/cases-detail.html` — 同上
  - `public/experts.html` — 同上 + 补充平板断点
  - `public/diag.html` — 同上 + 补充平板断点
  - `public/cases.html` — 全面更新（高度、宽度、圆角、断点）
  - 404.html 和 intro.html — 布局独立，本次不做调整

## ADDED Requirements

### Requirement: Page-hero 宽度与内容区一致
系统 SHALL 将红色背景区域宽度精确匹配内容区宽度，不再额外占用两侧空间。

#### Scenario: 桌面端显示（≥1024px）
- **WHEN** 用户使用桌面浏览器访问任何含 `.page-hero` 或 `.hero` 的页面
- **THEN** 红色背景区域的最大宽度等于 `var(--content-max)`（1200px）
- **AND** 背景区域水平居中，底部有 24px 圆角
- **AND** 背景区域不超出内容区宽度

#### Scenario: 移动端显示（≤767px）
- **WHEN** 用户使用移动设备访问上述页面
- **THEN** 红色背景区域恢复全宽显示，取消圆角

### Requirement: Cases 页面纳入统一规范
系统 SHALL 将 cases.html 的 page-hero 更新至与其他非首页页面一致的样式规范。

#### Scenario: cases.html 桌面端
- **WHEN** 用户访问成功案例页面
- **THEN** page-hero 高度为 220px、宽度为 1200px、水平居中、底部 24px 圆角

#### Scenario: cases.html 平板端
- **WHEN** 用户在平板上访问案例页面
- **THEN** page-hero 高度为 200px

#### Scenario: cases.html 移动端
- **WHEN** 用户使用移动设备访问案例页面
- **THEN** page-hero 高度为 220px、全宽、无圆角

### Requirement: 首页 hero 宽度收敛
系统 SHALL 将首页的红色 hero 区域宽度从全视口收缩至与内容区一致。

#### Scenario: 首页桌面端
- **WHEN** 用户使用桌面浏览器访问首页
- **THEN** hero 红色背景最大宽度为 1200px，水平居中，底部有 24px 圆角

<!-- 由于原有 `.hero` 与 `.page-hero` 共用线性渐变背景，此修改可确保全站视觉统一 -->

### Requirement: 完整三断点覆盖
系统 SHALL 确保所有含 `.page-hero` 的页面在三个关键断点下均有明确的样式定义。

#### Scenario: 平板端（768-1023px）
- **WHEN** 用户在平板设备上访问 experts.html 或 diag.html
- **THEN** page-hero 高度应用 200px 样式（此前缺失）
- **AND** 其他页面在该断点下的 200px 高度保持不变

## REMOVED Requirements
无
