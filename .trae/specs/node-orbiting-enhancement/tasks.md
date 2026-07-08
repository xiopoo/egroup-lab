# 任务列表

## [x] Task 1: 调整 CSS（新增轨道容器/反旋转/移除固定定位）
- **Priority**: high
- **Depends On**: None
- **Description**:
  - 新增 `.diagram-orbit-body`：100%尺寸，与轨道线同步旋转（内：`diagram-spin-cw 30s`，外：`diagram-spin-ccw 40s`）
  - 新增 `.diagram-node-text`：反旋转动画保持文字正立
  - 新增 `@keyframes diagram-text-fix-cw`（30s 逆时针）和 `diagram-text-fix-ccw`（40s 顺时针）
  - 修改 `.diagram-node-inner`：移除 `position:absolute` 改用相对定位
  - 修改 `.diagram-node-inner-1/2/3`：移除固定 left/top，改用 rotate(Ndeg) 分布
  - `.diagram-node-inner:hover` 添加 `!important` 覆盖
  - 保留 `.diagram-ring-wrap` 和 `.diagram-ring-line` 不变
  - 移除 `.diagram-svg` 外部连接线样式
  - 新增轨道内 SVG 连接线样式
- **Test Requirements**:
  - `programmatic` TR-1.1: 存在 `.diagram-orbit-body` 类且包含旋转动画
  - `programmatic` TR-1.2: 存在 `.diagram-node-text` 类包含反旋转动画
  - `programmatic` TR-1.3: `.diagram-node-inner` 不再有 `position:absolute`

## [x] Task 2: 调整 HTML（节点改为旋转定位 + 轨道内 SVG）
- **Priority**: high
- **Depends On**: Task 1
- **Description**:
  - 内轨道：在 `.diagram-ring-wrap-1` 内添加 `.diagram-orbit-body`
    - 包含 SVG 连接线（中心指向12点×3条，120°旋转分布）
    - 包含3个内节点（均定位在12点钟位置，通过旋转角度分布）
    - 每个节点文字用 `<span class="diagram-node-text">` 包裹
  - 外轨道：在 `.diagram-ring-wrap-2` 内添加 `.diagram-orbit-body`
    - 同理，包含 SVG + 3个外节点
  - 移除当前独立的 `.diagram-svg`（全局连接线）
  - 移除当前6个节点的 `left`/`top` 内联样式
  - 添加 hover 时 `animation-play-state: paused` 到节点父级
- **Test Requirements**:
  - `programmatic` TR-2.1: HTML 中存在 `.diagram-orbit-body` 元素
  - `programmatic` TR-2.2: 内节点文字为"业务·财务·债务"且被 `.diagram-node-text` 包裹
  - `programmatic` TR-2.3: 外节点文字为"资产重组·债务重组·业务重组"且被 `.diagram-node-text` 包裹
  - `programmatic` TR-2.4: 不再有独立的全局 `.diagram-svg`

## [x] Task 3: 验证
- **Priority**: medium
- **Depends On**: Task 1, Task 2
- **Description**:
  - 内层3节点沿轨道30s顺时针环绕
  - 外层3节点沿轨道40s逆时针环绕
  - 文字保持正立可读
  - 连接线从核心指向各节点，同步旋转
  - 悬停 tooltip 正常
  - 点击展开面板正常
  - 移动端隐藏不变
- **Test Requirements**:
  - `human-judgment` TR-3.1: 节点环绕动画流畅，文字正立
  - `programmatic` TR-3.2: tooltip 和点击交互仍正常工作
  - `programmatic` TR-3.3: 移动端隐藏

# Task Dependencies
- [Task 1] 无依赖
- [Task 2] 依赖 [Task 1]
- [Task 3] 依赖 [Task 1, Task 2]
