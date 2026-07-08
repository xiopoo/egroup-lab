# Tasks

- [x] Task 1: 动态 Z-Index 排序 — JS 运行时根据文字块 Y 坐标计算并设置 `z-index`，确保前方元素覆盖后方
  - [x] 在 `DOMContentLoaded` 事件中启动 `requestAnimationFrame` 循环
  - [x] 每帧遍历所有 `.sphere-text-block`，计算其 `getBoundingClientRect().y`
  - [x] 将 Y 值映射到 z-index 范围（2-12），Y 越大 z-index 越高
  - [x] 区分 3 个层级的基准 z-index（Layer 1 +2, Layer 2 +1, Layer 3 +0）
  - [x] 验证：同一层文字块在不同角度时 z-index 动态变化

- [x] Task 2: 详情面板裁剪修复 — 确保 `.diagram-panel` 不被父容器裁剪
  - [x] 方案评估：移除 hero `overflow:hidden` vs 将 panel reposition 到 body 级
  - [x] 实施：将 hero `overflow` 从 `hidden` 改为 `visible`，使面板可自然溢出
  - [x] 验证：点击文字块后详情面板完整可见

- [x] Task 3: SVG 连接线视觉降噪 — 同步深度动画控制连接线显隐
  - [x] 为 12 个 `.orbit-node-svg` 添加 `sphere-depth` 动画，与对应文字块同步
  - [x] 后方文字块的连接线 opacity 降至 0.15，前方升至 1.0
  - [x] 验证：同一时刻前方连接线更亮，后方更暗

- [x] Task 4: 变换属性隔离 — 确保 counter-rotation 与椭圆变形不冲突
  - [x] 审查结论：`transform:rotate()` 在子元素 depth-layer, `transform:scaleY()` 在父元素 ellipse-layer, `scale:1.15` 为独立 CSS scale 属性 — 三者分属不同 DOM 层级/属性空间，无冲突
  - [x] 无需修改代码
  - [x] 验证：椭圆层文字同时保持正立且垂直比例正常

# Task Dependencies

- Task 4 需要在 Task 1 之前完成（变换属性正确是动态排序的基础）
- Task 2 和 Task 3 可与 Task 1 并行实施
