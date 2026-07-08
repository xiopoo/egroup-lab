# 节点动态环绕增强 Spec

## Why

当前首页 hero 右侧企业核心动态关系图中，内外层节点（业务·财务·债务 / 资产重组·债务重组·业务重组）均为**固定定位**——节点静止不动，仅有装饰性轨道环线旋转。这导致视觉动态集中在轨道线上，而承载核心信息的文字节点缺乏运动感，未能充分体现"围绕企业运转"的动态关系。需要将文字节点改造为沿轨道持续环绕的动态元素，增强"以企业为核心"的视觉叙事。

## Design Concept: "卫星式环绕"

将内外层节点改造为沿轨道持续运行"的企业卫星"，内层3颗卫星（诊断维度）以30s周期顺时针运转，外层3颗卫星（重组维度）以40s周期逆时针运转。卫星上的文字通过反旋转保持正立可读，形成"核心稳定、外层环绕"的生动视觉效果。

### 结构变化

```
当前（静态节点）:
  企业（固定）→ 固定连接线 → 固定节点（业务·财务·债务）
                                                    ↓ 仅轨道线旋转

目标（动态环绕）:
  企业（固定）→ 动态连接线 → 卫星节点（沿轨道旋转）
                               ↑ 轨道线 + 节点 + 连接线同步旋转
                               ↑ 文字反旋转保持正立
```

### 布局架构

```
.hero-radial
├── .diagram-core（固定 — "企业"）
├── 内轨道系统（48%宽）
│   ├── .diagram-ring-line（旋转的虚线环）
│   └── .diagram-orbit-body（与环同步旋转）
│       ├── SVG连接线×3（从中心到3节点）
│       ├── 节点1 "业务"（text反旋转）
│       ├── 节点2 "财务"（text反旋转）
│       └── 节点3 "债务"（text反旋转）
├── 外轨道系统（76%宽）
│   ├── .diagram-ring-line（旋转的虚线环）
│   └── .diagram-orbit-body（与环同步旋转）
│       ├── SVG连接线×3
│       ├── 节点1 "资产重组"
│       ├── 节点2 "债务重组"
│       └── 节点3 "业务重组"
└── .diagram-panel（固定 — 详情面板）
```

### 环绕参数

| 参数 | 内轨道 | 外轨道 |
|------|--------|--------|
| 旋转周期 | 30s | 40s |
| 旋转方向 | 顺时针 | 逆时针 |
| 节点间距 | 120° | 120° |
| 文字反旋 | 30s 逆时针 | 40s 顺时针 |

### 节点定位方式

节点不再使用固定 `left`/`top` 绝对定位，而是采用**旋转定位**：

每个节点在轨道容器内统一使用 `top: 0; left: calc(50% - 宽度/2)` 定位在12点钟位置，通过 `transform-origin: center bottom` + `transform: rotate(Ndeg)` 分布到120°间隔位置（N=0, 120, 240）。

轨道容器（`.diagram-orbit-body`）持续旋转，节点随之沿轨道运行。

文字节点内部的文本通过反旋转动画保持正立：
```css
.diagram-node-inner .diagram-node-text {
  animation: diagram-text-fix-cw 30s linear infinite;
}
@keyframes diagram-text-fix-cw {
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
}
```

### SVG连接线处理

连接线放入轨道容器内，与节点同步旋转，形成"从核心到卫星"的动态连线效果。

SVG 以容器中心为原点，3条线分别指向120°间隔方向：
```svg
<line x1="50%" y1="50%" x2="50%" y2="0"/>  <!-- 指向12点 -->
<line x1="50%" y1="50%" x2="50%" y2="0" transform="rotate(120, 50%, 50%)"/>  <!-- 指向4点 -->
<line x1="50%" y1="50%" x2="50%" y2="0" transform="rotate(240, 50%, 50%)"/>  <!-- 指向8点 -->
```

### 交互保留

悬停 tooltip 和点击展开面板功能保持不变。节点在环绕运动中仍可悬停/点击。悬停时 `hover` 状态的 `scale(1.1)` 覆盖绕过旋转动画，保持交互响应。

### 响应式

| 断点 | 行为 |
|------|------|
| ≥768px | 完整环绕动效 |
| ≤767px | 整个 hero-visual 隐藏（不变） |

## What Changes

- **CSS 修改**：
  - 移除当前固定节点定位样式（`.diagram-node-inner` 的 `position:absolute + left/top`）
  - 新增 `.diagram-orbit-body`（旋转容器）
  - 新增 `.diagram-node-text`（反旋转文本）
  - 新增 `@keyframes diagram-text-fix-cw`、`diagram-text-fix-ccw`
  - 新增轨道内 SVG 样式（指向12点的连接线）
  - `.diagram-node-inner:hover` 中 `transform: scale(1.1) !important` 覆盖旋转

- **HTML 修改**：
  - 移除当前6个节点的固定 left/top 内联样式
  - 移除当前独立的 SVG 连接线（外部）
  - 在内/外轨道容器内分别插入 `.diagram-orbit-body`
  - 每个 orbit-body 内：SVG 连接线 + 3个节点（旋转定位）
  - 节点文本用 `<span class="diagram-node-text">` 包裹

## Impact

- Affected code: `public/index.html` CSS 区块 + HTML 区块
- 交互功能（tooltip / 点击面板）不受影响
- 移动端隐藏不变

## Changed Requirements

### Requirement: 内层节点动态环绕
- **WHEN** 桌面端显示
- **THEN** 内层3个节点（业务·财务·债务）沿内轨道以30s周期顺时针环绕
- **AND** 节点文字保持正立可读
- **AND** 连接线从核心指向各节点，随节点同步旋转

### Requirement: 外层节点动态环绕
- **WHEN** 桌面端显示
- **THEN** 外层3个节点（资产重组·债务重组·业务重组）沿外轨道以40s周期逆时针环绕
- **AND** 节点文字保持正立可读

### Requirement: 交互功能保留
- **WHEN** 用户悬停或点击环绕中的节点
- **THEN** tooltip 正常显示
- **AND** 点击展开详情面板正常
- **AND** 悬停放大效果覆盖旋转动画

## REMOVED Requirements
- 移除所有6个节点的固定 `left`/`top` 绝对定位（改为旋转定位）
- 移除独立的全局 SVG 连接线（改为轨道内 SVG）

## Open Questions
- [ ] 节点在环绕过程中悬停时，是否需要暂停旋转？建议：悬停时通过 `animation-play-state: paused` 暂停该节点的轨道运动，避免交互时节点跑走。
