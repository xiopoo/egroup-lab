# 差异化独立轨道系统 Spec

## Why

当前所有节点通过轨道容器整体旋转，节点间相对位置固定（同速同向），缺少个体独立运动的动态层次感。方案 A 将每个节点改为独立公转，各自拥有轨道速度、独立可交互，实现更丰富的环绕视觉效果。

## What Changes

- **移除** `.diagram-orbit-body` 容器整体旋转方案
- **改为** 每个节点独立绕圆心公转（双旋转技巧：`rotate(θ) → rotate(θ+360°)`）
- 每个节点拥有独立的 `animation-duration`（差异化速度）
- 使用 `animation-delay` 负值设置初始相位（120°间隔）
- 每个节点独立的 SVG 连接线（跟随节点旋转）
- 新增 hover 暂停公转 + scale 放大效果

## Impact

- Affected specs: `node-orbiting-enhancement`, `fix-node-even-distribution`
- Affected code: `public/index.html`（CSS + HTML 结构调整）

## ADDED Requirements

### Requirement: 独立轨道动画

系统 SHALL 为每个节点提供独立的公转轨道动画。

#### Scenario: 内层节点差异化速度
- **WHEN** 页面加载
- **THEN** 业务（30s/圈）、财务（25s/圈）、债务（20s/圈）各以不同速度独立绕圆心公转
- **AND** 三个节点起始位置分别位于 0°/120°/240°

#### Scenario: 外层节点差异化速度
- **WHEN** 页面加载
- **THEN** 资产重组（35s/圈）、债务重组（45s/圈）、业务重组（40s/圈）各以不同速度逆时针公转
- **AND** 三个节点起始位置分别位于 0°/120°/240°

### Requirement: 独立连接线

系统 SHALL 为每个节点提供独立的 SVG 连接线，跟随节点同步旋转。

#### Scenario: 连接线跟随
- **WHEN** 节点绕圆心公转
- **THEN** SVG 线条从圆心指向节点，始终跟随节点位置

### Requirement: Hover 交互

系统 SHALL 在节点悬停时暂停该节点公转并放大。

#### Scenario: 节点悬停
- **WHEN** 用户悬停某个节点
- **THEN** 该节点暂停公转，scale 至 1.1 倍
- **AND** tooltip 正常显示
- **AND** 其他节点不受影响继续公转

## REMOVED Requirements

### Requirement: 轨道容器整体旋转

**Reason**: 整体旋转导致节点间相对位置固定，缺乏独立运动感。
**Migration**: 替换为每个节点独立动画方案。
