# 任务列表

## [ ] Task 1: 修改 CSS（移除 wrapper 旋转定位，保留轨道旋转）
- **Priority**: high
- **Depends On**: None
- **Description**:
  - 保留 `.diagram-orbit-body` 旋转动画不变
  - 保留 `.diagram-node-text` 反旋转动画不变
  - 保留 `.diagram-orbit-svg` 样式不变
  - 恢复 `.diagram-node-inner` 和 `.diagram-node-outer` 的 `position:absolute`
  - 移除 wrapper 相关的不再需要的 CSS（无需特别移除，HTML 结构调整后自然淘汰）
  - 确保 hover 时的 `!important` 保留
- **Test Requirements**:
  - `programmatic` TR-1.1: `.diagram-orbit-body` 仍有旋转动画
  - `programmatic` TR-1.2: `.diagram-node-text` 仍有反旋转动画

## [x] Task 2: 修改 HTML（用 calc() 坐标替代 wrapper 旋转定位）
- **Priority**: high
- **Depends On**: Task 1
- **Description**:
  - 移除所有 wrapper div（`position:absolute;top:0;left:50%;transform:rotate(Ndeg);transform-origin:0px 50%`）
  - 内层3节点直接用 `calc()` 定位在 0°、120°、240°：
    - 0°: `left:calc(50% - 40px); top:0`
    - 120°: `left:calc(93.3% - 40px); top:calc(75% - 18px)`
    - 240°: `left:calc(6.7% - 40px); top:calc(75% - 18px)`
  - 外层3节点同理，但节点宽度96px（半宽48px）、高度40px（半高20px）：
    - 0°: `left:calc(50% - 48px); top:0`
    - 120°: `left:calc(93.3% - 48px); top:calc(75% - 20px)`
    - 240°: `left:calc(6.7% - 48px); top:calc(75% - 20px)`
  - 每个节点的文字保持 `<span class="diagram-node-text">` 包裹
  - 保留 SVG 连接线（`diagram-orbit-svg`）
  - 保留 tooltip 和 data-key 属性
  - hover 的 scale 使用额外内层 wrapper 实现（避免与 calc 定位冲突）
- **Test Requirements**:
  - `programmatic` TR-2.1: 内层3节点使用 `left:calc(...)` 和 `top:calc(...)` 定位
  - `programmatic` TR-2.2: 外层3节点使用 `left:calc(...)` 和 `top:calc(...)` 定位
  - `programmatic` TR-2.3: 不存在 wrapper div（`transform-origin:0px 50%`）
  - `programmatic` TR-2.4: 所有节点仍有 `.diagram-node-text` 包裹

## [x] Task 3: 验证
- **Priority**: medium
- **Depends On**: Task 1, Task 2
- **Description**:
  - 内层3节点均匀分布在 0°/120°/240°（互成120°夹角）
  - 外层3节点均匀分布在 0°/120°/240°
  - 节点沿轨道顺畅环绕
  - 文字保持正立可读
  - SVG 连接线正确对应节点位置
  - tooltip 和点击交互正常
  - 移动端隐藏不变
- **Test Requirements**:
  - `human-judgment` TR-3.1: 节点视觉上均匀分布，夹角相等
  - `human-judgment` TR-3.2: 环绕动画流畅，文字正立
  - `programmatic` TR-3.3: tooltip/点击/移动端均正常

# Task Dependencies
- [Task 1] 无依赖
- [Task 2] 依赖 [Task 1]
- [Task 3] 依赖 [Task 1, Task 2]
