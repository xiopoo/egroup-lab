# 首页辐轮图视觉增强 Spec

## Why
当前辐轮图（中心"企业"+三模块"业务·财务·债务"）视觉表现力平淡，仅为带颜色的方块组合，缺少之前三层同心圆设计中的动态效果（pulse-ring缩放动画）和多层渐变视觉层次。需要增强动态表现力和视觉深度。

## Current Design
- 中心圆：半透明白背景 + 白边框，静态
- 三节点：纯色背景（#4A90D9 / #2ECC71 / #F39C12）+ 简单阴影，静态
- SVG 连接线：纯白线，opacity .15，静态
- 无动画效果

## What Changes
### 视觉增强
1. **轨道环**：中心圆外围添加虚线轨道环，缓慢自转（`radial-orbit-spin` 动画）
2. **渐变背景**：节点从纯色改为渐变（`linear-gradient(135deg, ...)`），增加立体感
3. **增强阴影**：节点阴影从 `0 4px 16px` → `0 8px 32px`，增加深度

### 动态增强
4. **节点浮动**：三节点添加 `radial-float` 动画（上下微浮），不同 `animation-delay` 产生错落感
5. **中心呼吸**：中心圆添加 `radial-breathe` 动画（发光强度呼吸变化）
6. **线条辉光**：SVG 连接线 opacity 从 .15 提升并添加 `radial-line-glow` 动画

### 技术方案
- 轨道环：`:before` 伪元素或独立元素 + `transform: rotate` + `@keyframes`
- 节点浮动：`transform: translateY` 动画，不同 delay(.5s/1.5s/2.5s)
- 中心呼吸：`box-shadow` 强度变化动画
- 线条辉光：`stroke-opacity` 动画

## Impact
- Affected code: `public/index.html` CSS 区块 + HTML 区块
- 前置条件：基于 hero-visual-redesign spec 的辐轮结构

## ADDED Requirements

### Requirement: 动态轨道环
系统 SHALL 在中心"企业"外围显示一个缓慢自转的虚线轨道环。

#### Scenario: 桌面端显示
- **WHEN** 用户打开首页
- **THEN** 中心圆外围有一个半透明的虚线圆环
- **AND** 圆环持续缓慢旋转（~20s 一周）

### Requirement: 浮动动画
系统 SHALL 为三个业务模块添加浮动动画。

#### Scenario: 桌面端
- **WHEN** 用户打开首页
- **THEN** 三个模块各自以不同节奏上下微浮
- **AND** 浮动量 ≤8px，不干扰可读性

## REMOVED Requirements
无
