# 首页视觉与布局优化 Spec

## Overview
- **Summary**: 针对首页 hero 区域的三个视觉和布局问题进行优化：增大右侧球体尺寸、调整文字间距、修复全屏适配
- **Purpose**: 提升首页视觉体验，确保所有内容完整可见且布局紧凑合理
- **Target Users**: 访问网站的所有用户

## Goals
- 增大右侧球形图尺寸，消除条目旋转时的遮挡现象
- 调整首屏文字间距，减少无效留白
- 修复全屏适配问题，消除右侧留白和横向滚动

## Non-Goals (Out of Scope)
- 不修改网站其他页面的布局和样式
- 不新增功能或交互

## Background & Context
- 当前球体容器 `max-width:500px`，在右侧列中仍偏小导致条目遮挡
- hero 区域文字元素的 margin-bottom 值偏大，造成过多留白
- 页面可能存在横向滚动问题，导致左右滑动时出现右侧留白

## Functional Requirements
- **FR-1**: 增大 `.hero-radial` 容器尺寸，确保所有文字块在旋转过程中不相互遮挡
- **FR-2**: 调整 `.hero-subtitle`、`.hero-slogan`、`.hero-desc` 的间距，减少无效留白
- **FR-3**: 修复页面横向滚动问题，确保内容完全占满屏幕宽度

## Non-Functional Requirements
- **NFR-1**: 页面布局在所有屏幕尺寸下保持一致，无横向滚动条
- **NFR-2**: 球体动画性能保持流畅，无卡顿

## Constraints
- **Technical**: 纯 CSS/HTML 修改，不涉及 JavaScript 逻辑变更
- **Dependencies**: 仅修改 `public/index.html`

## Assumptions
- 页面容器宽度问题与 `.hero` 或 `.container` 的 padding/margin 设置相关
- 文字间距问题涉及 hero 区域的 margin-bottom 属性

## Acceptance Criteria

### AC-1: 球体尺寸增大
- **Given**: 桌面端视口宽度 ≥1024px
- **When**: 页面加载
- **Then**: 球体容器尺寸足够大，所有文字块在旋转过程中不相互遮挡
- **Verification**: `human-judgment`

### AC-2: 文字间距紧凑
- **Given**: 桌面端视口宽度 ≥1024px
- **When**: 查看 hero 区域文字布局
- **Then**: 文字行间距合理，无明显过大留白
- **Verification**: `human-judgment`

### AC-3: 全屏无留白
- **Given**: 任意屏幕尺寸
- **When**: 左右滑动页面
- **Then**: 无横向滚动条，页面内容完全占满屏幕宽度
- **Verification**: `programmatic`

## Open Questions
- [ ] 是否需要调整中屏断点的球体尺寸

