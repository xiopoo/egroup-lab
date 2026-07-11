# 球体遮挡与交互可用性修复 Spec

## Why

当前英雄区球体关系图中存在多层遮挡问题：3 层轨道文字块在公转过程中因 z-index 层级错误导致外圈元素被内圈覆盖、详情面板被父容器 `overflow:hidden` 裁剪、SVG 连接线视觉噪声过大。这些问题导致用户无法正常点击和查看所有条目，严重影响交互可用性。

## What Changes

1. **动态 z-index 排序** — 根据文字块在轨道中的垂直位置（Y 坐标）动态调整 `z-index`，"前方"（画面下方）的文字块始终覆盖"后方"（画面上方）的文字块
2. **详情面板裁剪修复** — 解决 `.diagram-panel` 被 `.hero{overflow:hidden}` 裁剪的问题
3. **SVG 连接线优化** — 减少同时可见的连接线数量，降低视觉噪声
4. **椭圆层变换冲突修复** — 确保 `transform:scaleY()` 与 counter-rotation `transform:rotate()` 不冲突

## Impact

- Affected specs: sphere-2.5d-implementation
- Affected code: `website/public/index.html` (CSS + JS)

## ADDED Requirements

### Requirement: 动态 Z-Index 排序

系统 SHALL 根据文字块在容器中的垂直位置实时调整其 `z-index`，确保视觉"前方"（Y 坐标较大，即画面下方）的元素叠在"后方"（Y 坐标较小，即画面上方）的元素之上。

#### Scenario: 三层文字块交叉公转
- **GIVEN** 3 层轨道以不同速度和方向公转
- **WHEN** 外层文字块和内层文字块处于相近角度位置
- **THEN** Y 坐标较大的文字块 `z-index` 更高，外层块在"前方"时覆盖内层块

#### Scenario: 同一层文字块互不遮挡
- **GIVEN** 同一层的 4 个文字块均匀 90° 分布
- **WHEN** 公转过程中
- **THEN** 同一层的文字块按各自 Y 坐标独立排序，不互相干扰

### Requirement: 详情面板完全可见

系统 SHALL 确保详情面板在激活状态下不被父容器裁剪，始终完整可见并可交互。

#### Scenario: 点击文字块打开详情
- **GIVEN** 详情面板被激活
- **WHEN** 面板内容超出 `.hero-radial` 容器
- **THEN** 面板完整可见，所有内容可读

### Requirement: SVG 连接线视觉降噪

系统 SHALL 减少同时高亮显示的 SVG 连接线数量，仅在文字块处于"前方"区域时才显示其连接线。

#### Scenario: 文字块在轨道后半部分
- **GIVEN** 文字块处于轨道"后方"（Y 坐标小于轨道中心 Y）
- **WHEN** 文字块 `opacity` 处于低值
- **THEN** 对应的 SVG 连接线 `opacity` 同步降低或隐藏

### Requirement: 变换属性隔离

系统 SHALL 确保椭圆 `scaleY()` 变形和 counter-rotation `rotate()` 使用各自的 CSS 属性空间，不产生相互覆盖。

## REMOVED Requirements

无

## MODIFIED Requirements

无
