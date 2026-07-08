# 任务列表

- [ ] Task 1: 替换 hero-visual CSS（移除旧同心圆样式，新增辐轮布局 CSS）
  - 移除 `.hero-pattern`、`.hero-pattern-inner`、`.hero-pattern-text`、`pulse-ring` 的旧规则
  - 新增 `.hero-radial` 容器（380×380，相对定位）
  - 新增中心圆 `.radial-center`（30% 尺寸，绝对居中，半透明白色背景 + 边框）
  - 新增三个模块 `.radial-node`（85×85px，圆角矩形，不同颜色）
  - 新增连接线 `.radial-line`（从中心到各模块的细白线）
  - 新增 `@keyframes radial-float` 微动动画

- [ ] Task 2: 替换 hero-visual HTML
  - 移除旧 `.hero-pattern` → `.hero-pattern-inner` → `.hero-pattern-text` 结构
  - 插入新结构：辐轮容器 → 中心圆 + 三个模块 + 连接线

- [ ] Task 3: 移动端隐藏
  - 在 `@media(max-width:767px)` 中保留已有 `.hero-visual{display:none}`
  - 确认移动端不显示

- [ ] Task 4: 验证
  - 桌面端辐轮图正常显示，四个元素可见
  - 颜色分明
  - 连接线正确
  - 移动端隐藏
