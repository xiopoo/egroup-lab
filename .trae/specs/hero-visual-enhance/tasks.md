# 任务列表

- [ ] Task 1: CSS 增强（轨道环 + 浮动动画 + 呼吸动画 + 线条动画 + 渐变节点）
  - 新增 `.radial-orbit`（虚线圆环 + `rotate` 动画 @ 20s）
  - 新增 `@keyframes radial-float`（translateY 0 → -8px → 0）
  - 新增 `@keyframes radial-breathe`（box-shadow 强度变化）
  - 新增 `@keyframes radial-line-glow`（stroke-opacity 变化）
  - 修改 `.radial-node` box-shadow: 0 4px 16px → 0 8px 32px
  - 修改 `.radial-node-1/2/3` 背景：纯色 → 线性渐变
  - 修改 `.radial-center` 添加 `radial-breathe` 动画

- [ ] Task 2: HTML 增强
  - 添加轨道环元素（`.radial-orbit`）

- [ ] Task 3: 验证
  - 轨道环可见且自转
  - 节点可见且浮动
  - 中心呼吸效果可见
  - 移动端隐藏正常
