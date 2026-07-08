# Tasks

- [x] Task 1: 替换 CSS 动画系统 — 移除 orbit-body 整体旋转，改为独立节点公转关键帧 + SVG 跟随 + hover 交互
  - [x] 移除 `.diagram-orbit-body` 及其相关样式（旋转动画、定位）
  - [x] 新增 `.orbit-node-wrap` 样式（独立公转容器）
  - [x] 新增 `.diagram-node-scale` + `.orbit-node-svg` 样式（hover 缩放 + 独立连线）
  - [x] 新增 hover 暂停动画（`animation-play-state:paused`）+ scale(1.1)
  - [x] 保留 `.diagram-ring-line` 轨道虚线旋转动画作为背景
- [x] Task 2: 调整 HTML 结构 — 每个节点包裹独立轨道容器 + SVG + scale 层
  - [x] 移除内层轨道 `.diagram-orbit-body`（含 3 节点 + SVG）
  - [x] 移除外层轨道 `.diagram-orbit-body`（含 3 节点 + SVG）
  - [x] 内层 3 节点各独立 `.orbit-node-wrap` + `.orbit-node-svg` + `.diagram-node-scale`
  - [x] 外层 3 节点各独立 `.orbit-node-wrap` + `.orbit-node-svg` + `.diagram-node-scale`
  - [x] 内层 duration：业务 30s / 财务 25s / 债务 20s；外层：资产 35s / 债务 45s / 业务 40s
  - [x] animation-delay 负值计算正确（120° = -dur/3, 240° = -dur*2/3）
- [x] Task 3: 验证全部 11 项检查点

# Task Dependencies

- Task 2 依赖 Task 1（需先有 CSS class 定义）
