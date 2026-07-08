# Tasks

- [ ] Task 1: CSS 球体动画系统 — 新增 3 层轨道动画 + 深度 scale/opacity 动画 + 椭圆变形
  - [ ] 新增轨道关键帧：赤道 35s CW、30° 层 30s CCW、60° 层 25s CW
  - [ ] 新增深度关键帧 sphere-depth-cw / sphere-depth-ccw（scale+opacity 随相位变化）
  - [ ] 新增椭圆变形层（.ellipse-layer-30 / .ellipse-layer-60）
  - [ ] 更新 .orbit-node-wrap / .diagram-node-scale 以适应 3 层结构
  - [ ] 保留悬停暂停 + scale 放大逻辑
  - [ ] 保留轨道虚线环样式（适配新半径）
  - [ ] 移除旧节点 CSS（.diagram-node-inner-1/2/3、旧 orbit-node-wrap 规则）
- [ ] Task 2: HTML 结构调整 — 替换为 3 层 × 4 字块 + 核心 + 详情面板
  - [ ] 移除内外圈旧节点结构
  - [ ] 新增赤道层 4 字块（诊断/重组/破局/重塑）
  - [ ] 新增 30° 层 4 字块（业务/财务/债务/资产）
  - [ ] 新增 60° 层 4 字块（价值/秩序/平衡/增长）
  - [ ] 更新 diagramData 映射（为 12 个字块提供详情面板数据）
  - [ ] 调整核心「企业」节点定位和大小
- [ ] Task 3: 验证全部 10 项检查点

# Task Dependencies

- Task 2 依赖 Task 1（需先有 CSS class 定义）
