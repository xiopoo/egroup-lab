# 首页右侧可视化元素重新设计 Spec

## Why

首页 hero 右侧视觉区域目前仅显示以"灰"字为中心的三层同心圆，内容抽象、信息量低，无法有效传达企业诊断与重组业务的核心价值。需要重新设计为以"企业"为中心的三大业务领域展示体系，直观呈现"业务·财务·债务"三位一体的诊断维度。

## Current Design

* `.hero-pattern`: 380×380px 正方形容器

* 三层同心圆：`inset:0`（外圈）、`inset:15%`（中圈）、`inset:30%`（内圈）

* 中心文字：`"灰"`，56px 白色

* 仅有脉冲动画 `pulse-ring`（外圈缩放）

## What Changes

完全替换 `.hero-pattern` / `.hero-pattern-inner` / `.hero-pattern-text` 的 HTML 结构和 CSS，设计为辐轮式布局。/

### 新设计结构

```
          [业务] ←──┐
                    │
                  [企业]
                  (中心)
                   ↗
          [债务] ←→ [财务]
```

### 颜色方案（基于红色背景 #AB1942 下）

| 元素     | 背景色                         | 文字色  | 语义   |
| ------ | --------------------------- | ---- | ---- |
| 中心"企业" | rgba(255,255,255,.15) + 白边框 | #fff | 核心主体 |
| 业务     | #4A90D9（蓝色）                 | #fff | 运营维度 |
| 财务     | #2ECC71（绿色）                 | #fff | 资金维度 |
| 债务     | #F39C12（琥珀色）                | #fff | 负债维度 |

### 布局参数

* 中心圆：容器 30% 大小，绝对居中

* 外围三模块：圆形/圆角矩形，均匀分布在中心四周（each at ≈120° interval）

* 连接线：从中心到各模块的细白线（opacity .3）

### 响应式

* 桌面端（≥1024px）：完整显示辐轮图

* 平板端（768-1023px）：正常显示

* 移动端（≤767px）：`.hero-visual` 设置 `display:none`（右侧视觉在移动端隐藏）

## Impact

* Affected code: `public/index.html` 的 CSS 区块（\~line 70-80）和 HTML 区块（\~line 292-297）

* 仅替换 hero-visual 内部结构，不影响左侧 hero-content 和其他页面区域

* 移动端隐藏视觉元素，无空间占用

## ADDED Requirements

### Requirement: 辐轮式业务展示

The system SHALL 在首页 hero 右侧区域展示以"企业"为中心的三大业务领域。

#### Scenario: 桌面端显示

* **WHEN** 用户在桌面端打开首页

* **THEN** 右侧显示辐轮图：中心"企业" + 三个环绕模块"业务""财务""债务"

* **AND** 各模块颜色鲜明可区分

* **AND** 连接线清晰展示层级关系

#### Scenario: 移动端

* **WHEN** 用户在移动设备打开首页

* **THEN** 右侧辐轮图不显示（避免空间拥挤）

## REMOVED Requirements

* 移除旧的同心圆结构（`.hero-pattern` 的伪元素 concentric rings + `.hero-pattern-text`）

* 移除 `pulse-ring` 动画

