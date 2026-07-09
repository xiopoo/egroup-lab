# 球体UI精细化调整 Spec

## Why

当前英雄区 2.5D 球体可视化存在以下问题：球体尺寸仅 380px，未充分利用右侧约 540px 的可用空间；文字块点击区域过小（60-76px × 24-32px），在动画旋转中容易误触；点击后详情面板使用透明白底 `rgba(255,255,255,.1)` 配白字 `#fff`，内容完全不可读；中屏断点（768-1023px）的球体显示未针对性优化。

## What Changes

1. **球体尺寸放大** — 调整 `.hero-radial` 和 3 层轨道半径，充分利用右侧列可用空间
2. **点击区域优化** — 增加文字块尺寸和 padding，扩大点击热区，减少误触
3. **详情面板样式修复** — 重新设计背景色和文字色组合，确保文本清晰可读
4. **响应式中屏优化** — 为 768-1023px 断点添加针对性球体缩放规则

## Impact

- Affected specs: sphere-2.5d-implementation, fix-sphere-occlusion
- Affected code: `/Users/lucas/Documents/bamangB/regroup-lab/public/index.html` (CSS)

## ADDED Requirements

### Requirement: 球体尺寸占用右侧可用空间

系统 SHALL 调整球体容器和轨道尺寸，使其完全填充右侧列可用空间。

#### Scenario: 宽屏桌面（≥1024px）
- **GIVEN** 视口宽度 ≥1024px
- **WHEN** 页面加载
- **THEN** 球体容器（`.hero-radial`）宽度使用 `max-width:100%` 而非固定 380px，3 层轨道半径等比放大

#### Scenario: 小屏桌面/平板横屏（768-1023px）
- **GIVEN** 视口宽度在 768-1023px 之间
- **WHEN** 页面加载
- **THEN** 球体显示且尺寸适配右侧列宽度，轨道和文字块等比缩放

### Requirement: 点击区域扩大

系统 SHALL 增加文字块的宽度、高度和内边距，提升点击命中率，减少文字之间的相互遮挡。

#### Scenario: 文字块悬停/点击
- **GIVEN** 文字块在轨道中旋转
- **WHEN** 用户尝试点击文字块
- **THEN** 点击热区 ≥44×44px（移动端最小触摸目标），相邻块间距保持可辨别

### Requirement: 详情面板可读性

系统 SHALL 修复详情面板的背景色和文字色，确保内容清晰可读。

#### Scenario: 点击文字块打开详情
- **GIVEN** 详情面板被激活
- **WHEN** 面板内容展示
- **THEN** 背景色使用深色半透明（如 `rgba(0,0,0,.65)`），文字色使用白色 `#fff`，标题加粗突出

### Requirement: 中屏响应式适配

系统 SHALL 为 768-1023px 断点添加专门样式，确保球体在此区间内正常显示且比例协调。

#### Scenario: 平板横屏
- **GIVEN** 视口宽度在 768-1023px 之间
- **WHEN** 页面渲染
- **THEN** 球体容器缩小但不隐藏，文字块和轨道按比例缩放

## REMOVED Requirements

无

## MODIFIED Requirements

无
