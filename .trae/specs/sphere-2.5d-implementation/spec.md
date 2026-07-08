# CSS 2.5D 球体视觉实施 Spec

## Why

基于可行性评估结论，实施 CSS 2.5D 椭圆球体方案——将当前 6 节点平面独立轨道改造为 3 层球面环绕，文字以两字一行排列在球体表面，通过动态 scale/opacity 模拟 3D 球体深度感。

## What Changes

- **替换当前 6 节点**（业务/财务/债务/资产重组/债务重组/业务重组）为 3 层 × 4 字块 = 12 个 2 字文字块
- **引入球体深度动画**：文字块绕轨道公转时，经过正面（底部）放大明亮，转至背面（顶部）缩小半透明
- **三层轨道参数**：赤道层（正圆，半径 55%）、30° 纬度层（椭圆 1:0.85，半径 45%）、60° 纬度层（椭圆 1:0.5，半径 30%）
- **文字块内容**：赤道层「诊断·重组·破局·重塑」、30° 层「业务·财务·债务·资产」、60° 层「价值·秩序·平衡·增长」
- 保留核心「企业」节点、tooltip、点击详情面板
- 移动端隐藏逻辑不变

## Impact

- Affected specs: `independent-orbit-system`（被替代）
- Affected code: `public/index.html`（CSS + HTML 改造）

## ADDED Requirements

### Requirement: 三层球体公转

系统 SHALL 提供 3 层球面环绕轨道，每层包含 4 个 2 字文字块。

#### Scenario: 赤道层
- **WHEN** 页面加载
- **THEN** 「诊断·重组·破局·重塑」以 35s 周期顺时针公转
- **AND** 轨道为正圆，半径 55%
- **AND** 四字块均匀分布（90° 间隔）
- **AND** 正面（底部）scale(1.2) opacity(1.0)，背面（顶部）scale(0.5) opacity(0.15)

#### Scenario: 30° 纬度层
- **WHEN** 页面加载
- **THEN** 「业务·财务·债务·资产」以 30s 周期逆时针公转
- **AND** 轨道为椭圆 1:0.85，半径 45%
- **AND** 正面 scale(1.0) opacity(0.9)，背面 scale(0.4) opacity(0.1)

#### Scenario: 60° 纬度层
- **WHEN** 页面加载
- **THEN** 「价值·秩序·平衡·增长」以 25s 周期顺时针公转
- **AND** 轨道为椭圆 1:0.5，半径 30%
- **AND** 正面 scale(0.8) opacity(0.7)，背面 scale(0.3) opacity(0.08)

### Requirement: Hover 交互

系统 SHALL 在文字块悬停时暂停其公转并放大。

#### Scenario: 文字块悬停
- **WHEN** 用户悬停某个文字块
- **THEN** 该文字块暂停公转，scale 提升（赤道层 1.4 / 30° 层 1.2 / 60° 层 1.0）
- **AND** tooltip 正常显示
- **AND** 其他文字块不受影响继续公转

### Requirement: 深度动画同步

系统 SHALL 确保文字块的 scale/opacity 深度动画与公转周期同步。

#### Scenario: 深度动画相位
- **WHEN** 文字块公转至 0°（顶部/背面）
- **THEN** 文字块处于最小最暗状态
- **WHEN** 文字块公转至 180°（底部/正面）
- **THEN** 文字块处于最大最亮状态
- **AND** 深度动画周期与公转周期一致

## REMOVED Requirements

### Requirement: 6 节点独立轨道系统

**Reason**: 替换为 3 层球体环绕文字块系统。
**Migration**: 旧 HTML/CSS 完全替换。

### Requirement: 外层 4 字节点（资产重组/债务重组/业务重组）

**Reason**: 按两字一行拆分，重组为 12 个 2 字文字块。
**Migration**: 拆分为「资产·重组·债务·业务」等字块，分布在不同球体层。
