# 悬停提示文字z-index修复 Spec

## Why
同心圆节点悬停时出现的提示文字（tooltip）背景层位于"企业"图层下方，导致文字被遮挡、内容难以阅读。问题根源在于 `.diagram-tooltip` 的 `z-index:10` 与 `.diagram-core`（企业）的 `z-index:10` 同级，且 tooltip 的父级 stacking context（depth-layer z-index:4）限制了其有效层级。

## What Changes

### 1. Tooltip背景透明化
- `.diagram-tooltip` 的 `background:rgba(0,0,0,.75)` → 移除（设为 transparent 或无 background）
- 保留 `backdrop-filter:blur(8px)`，让文字背景呈现毛玻璃效果，既不影响阅读又不遮挡后方元素
- `.diagram-tooltip::after` 的 `border-top-color:rgba(0,0,0,.75)` → 改为半透明白色 `rgba(255,255,255,.4)`

### 2. Tooltip z-index提升
- `.diagram-tooltip` 的 `z-index:10` → 提升至 `z-index:15`（高于 `.diagram-core` 的 z-index:10）
- 确保 tooltip 在所有同心圆元素（sphere-layer-wrap z-index:1-2、orbit-node-wrap z-index:3、depth-layer z-index:4、diagram-core z-index:10）之上

### 3. 优化后的样式预期
- 悬停提示文字框背景为透明磨砂效果，无实色遮挡
- 提示文字在 z-index:15 层级，不被"企业"或其他元素遮挡
- 交互效果（hover opacity 变化）保持不变

## Impact
- Affected code: `public/index.html` 中 `.diagram-tooltip` 和 `.diagram-tooltip::after` 的CSS
- 仅影响首页 index.html

## ADDED Requirements
### Requirement: Tooltip可见性
系统SHALL确保悬停提示文字在视觉上不被其他元素遮挡。
- **WHEN** 用户将鼠标悬停在任意同心圆节点上
- **THEN** 提示文字完整显示在所有同心圆元素（含"企业"按钮）之上
- **AND** 提示文字背景透明/磨砂，无实色遮挡后方内容

## MODIFIED Requirements
### Requirement: Tooltip背景
- 背景从半透明黑 `rgba(0,0,0,.75)` 改为 transparent
- 保留 `backdrop-filter:blur(8px)` 提供视觉层次
- 箭头颜色同步改为半透明白

## REMOVED Requirements
无
