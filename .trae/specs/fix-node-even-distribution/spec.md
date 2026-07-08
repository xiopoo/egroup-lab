# 节点均匀分布修复 Spec

## Why

当前环绕节点聚在轨道顶部而非均匀分布在 120° 间隔位置。原因是 wrapper 的 `transform-origin:0px 50%` 中 `50%` 参照的是 wrapper 自身高度（~36px），而非轨道容器高度，导致旋转中心偏离圆心。

## What Changes

- **移除** wrapper div 旋转定位方案（`transform:rotate(Ndeg);transform-origin:0px 50%`）
- **改为** 直接使用 `calc()` 计算节点在轨道上的坐标位置进行定位
- 保留轨道容器（`.diagram-orbit-body`）的旋转动画，使节点整体环绕
- 保留 `.diagram-node-text` 的反旋转动画，保持文字正立
- SVG 连接线保持现有结构不变

## Impact

- Affected specs: `node-orbiting-enhancement`
- Affected code: `public/index.html`（HTML 结构和相关 CSS）

## ADDED Requirements

### Requirement: 节点均匀分布定位

系统 SHALL 使用 `calc()` 坐标将节点精确放置在 0°、120°、240° 位置。

#### Scenario: 内层节点定位
- **WHEN** 页面加载
- **THEN** 业务节点在 0°（顶部）、财务节点在 120°（右下）、债务节点在 240°（左下）
- **AND** 三个节点之间的夹角均为 120°

#### Scenario: 外层节点定位
- **WHEN** 页面加载
- **THEN** 资产重组节点在 0°、债务重组节点在 120°、业务重组节点在 240°
- **AND** 三个节点之间的夹角均为 120°

### Requirement: 环绕动画保持

系统 SHALL 保持轨道容器整体旋转，使节点沿轨道同步环绕。

#### Scenario: 持续环绕
- **WHEN** 轨道容器持续旋转
- **THEN** 所有节点沿轨道同步移动
- **AND** 节点之间始终保持 120° 均匀间距

## REMOVED Requirements

### Requirement: wrapper 旋转定位

**Reason**: `transform-origin` 的百分比值参照元素自身尺寸而非父容器尺寸，导致旋转中心偏移，节点无法均匀分布。
**Migration**: 改用 `calc()` 坐标定位替代。
