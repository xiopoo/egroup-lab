# 页面视觉与布局优化 Spec

## Why
网站当前存在三个视觉和布局问题：诊断页面描述文本在桌面端不必要的换行（受限于 max-width:280px）、除首页外所有页面的红色背景全宽伸展缺少视觉收敛感、以及首屏内容区域未能完整展示第一个核心内容栏目。需要系统性地优化这些方面以提升用户体验和视觉专业度。

## What Changes

### 1. 文本排版优化（diag.html）
- **问题**：`.home-desc` 设置了 `max-width:280px`，导致文本"选择适合你的诊断方式，快速了解企业风险状况"在桌面端不必要地换行
- **修改**：移除固定 `max-width` 限制，采用响应式宽度控制
  - 桌面端：`max-width:420px`，允许文本在一行内完整显示
  - 移动端（≤767px）：`max-width:260px`，保持紧凑布局

### 2. 背景宽度调整（除首页外所有页面）
- **问题**：`.page-hero` 红色渐变背景为全视口宽度伸展，视觉上缺乏收敛感
- **涉及页面**：about.html、services.html、cases-detail.html、experts.html、diag.html、404.html、intro.html
- **修改**：为 `.page-hero` 添加最大宽度限制和底部圆角，使红色背景区域视觉上向内收缩
  - `max-width: calc(var(--content-max) + 120px)` — 比内容区略宽，视觉协调
  - `margin: 0 auto` — 水平居中
  - `border-radius: 0 0 24px 24px` — 底部圆角，增强容器感
  - 移动端恢复全宽，取消圆角

### 3. 首屏内容优化（所有页面）
- **问题**：页面首屏（above-the-fold）区域未能完整展示第一个核心内容栏目
- **涉及页面**：index.html（服务/About区块）、所有非首页页面（第一个.section区块）、diag.html（诊断卡片区域）
- **修改**：
  - 非首页页面：将 `.page-hero` 高度从 `280px` 降低至 `220px`（桌面端）
  - 首页：适当减小 hero 区域的 `padding` 和 `min-height`
  - 为紧接 page-hero 的第一个 section 添加 `.first-section` 类，减少其 `padding-top`

## Impact
- Affected specs: 页面布局、响应式适配
- Affected code: 
  - `public/diag.html` — `.home-desc` 文本宽度、`.page-hero` 背景宽度
  - `public/services.html` — `.page-hero` 背景宽度、高度、首屏优化
  - `public/about.html` — `.page-hero` 背景宽度、高度、首屏优化
  - `public/cases-detail.html` — `.page-hero` 背景宽度、高度、首屏优化
  - `public/experts.html` — `.page-hero` 背景宽度、高度、首屏优化
  - `public/404.html` — `.page-hero` 背景宽度、高度、首屏优化
  - `public/intro.html` — `.page-hero` 背景宽度、高度、首屏优化
  - `public/index.html` — hero 区域 padding/min-height 调整

## ADDED Requirements

### Requirement: 诊断页文本响应式排版
系统 SHALL 确保 "选择适合你的诊断方式，快速了解企业风险状况" 文本在桌面端不产生不必要的换行。

#### Scenario: 桌面端显示（≥1024px）
- **WHEN** 用户使用桌面浏览器访问诊断页面
- **THEN** 该描述文本应在单行内完整显示，无需手动换行
- **AND** 文本宽度限制应适当放宽（max-width ≥ 400px）

#### Scenario: 移动端显示（≤767px）
- **WHEN** 用户使用移动设备访问诊断页面
- **THEN** 该描述文本可根据屏幕宽度自适应换行
- **AND** 文本宽度限制不超过 260px

### Requirement: 非首页红色背景宽度收缩
系统 SHALL 在除首页外的所有页面中，将红色渐变背景区域从全宽伸展改为适度内收。

#### Scenario: 桌面端显示（≥1024px）
- **WHEN** 用户访问非首页页面（关于/服务/案例/专家/诊断/404/介绍）
- **THEN** 页面顶部的红色渐变背景区域不应伸展至全视口宽度
- **AND** 背景区域应水平居中，宽度比内容区略宽（约 1320px）
- **AND** 背景区域底部应有适当圆角（24px）

#### Scenario: 移动端显示（≤767px）
- **WHEN** 用户使用移动设备访问上述页面
- **THEN** 红色背景区域恢复全宽显示，取消圆角
- **AND** 确保内容可读性不受影响

### Requirement: 首屏内容展示完整
系统 SHALL 确保在标准屏幕尺寸下，用户无需滚动即可看到第一个核心内容栏目的主要内容。

#### Scenario: 桌面端首屏（约 900px 可视高度）
- **WHEN** 用户打开任何页面
- **THEN** 页面顶部红色背景区域不应占用过多垂直空间
- **AND** 第一个核心内容栏目（如服务卡片、专家网格、统计数据等）的主要部分应在首屏内可见
- **AND** 非首页页面 page-hero 高度从 280px 降至 220px

#### Scenario: 平板端首屏（768-1023px）
- **WHEN** 用户在平板上打开页面
- **THEN** page-hero 高度保持 240px，与现有断点一致
- **AND** 第一个 section 的 padding-top 适当减少

## MODIFIED Requirements
无

## REMOVED Requirements
无
