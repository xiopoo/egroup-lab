# Tasks
- [x] Task 1: 统计数据显示优化 — 调整grid比例释放文本空间
  - `.hero-inner` grid: `1fr 1.15fr` → `1.3fr 1fr` ✅
  - `.hero-desc` max-width: 520px → 560px ✅
  - `.stats-in-hero .stat-item .num` font-size: 42px → 46px ✅

- [x] Task 2: 同心圆布局优化 — 减速+弹窗位置调整
  - Layer1 动画：35s→45s（轨道线+4节点+深度+文字反向，延迟按比例同步）✅
  - Layer2 动画：30s→40s（同上）✅
  - Layer3 动画：25s→35s（同上）✅
  - 弹窗位置：从底部外置改为居中浮动 `top:50%;left:50%;translate(-50%,-50%)` ✅
  - 弹窗样式升级：padding 18→24px, title 16→18px, desc 13→14px, radius 12→16px ✅

- [x] Task 3: 弹窗自动关闭机制
  - 新增 `window.AUTO_CLOSE_DELAY = 5000` 可配置 ✅
  - 新增 `startAutoCloseTimer()` / `clearAutoCloseTimer()` 函数 ✅
  - 打开弹窗重置计时器，关闭弹窗清除计时器 ✅
  - 鼠标悬停（mouseenter）暂停，离开（mouseleave）恢复 ✅

- [x] Task 4: 验证
  - grid比例、stats字号、动画速度、弹窗样式均验证通过 ✅
  - 所有动画速度三层内部完全同步（无残留旧值） ✅
  - 自动关闭、手动关闭、悬停暂停功能代码完整 ✅
