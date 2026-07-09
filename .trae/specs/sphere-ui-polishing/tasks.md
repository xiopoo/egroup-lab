# Tasks

- [x] Task 1: 球体尺寸放大 — 调整 `.hero-radial` 和 3 层轨道半径，充分利用右侧列空间
  - [x] 将 `.hero-radial` 从 `max-width:380px` 改为 `max-width:500px`
  - [x] 保持 `aspect-ratio:1` 确保球体为正方形
  - [x] 验证：桌面端球体直径 500px，接近右侧列可用宽度

- [x] Task 2: 点击区域扩大 — 增加文字块尺寸和间距，提升可点击性
  - [x] 增加 `layer-text-1` 至 90×36、`layer-text-2` 至 80×32、`layer-text-3` 至 72×28
  - [x] 更新 CSS 和 12 个行内 `depth-layer` 的 `left` 偏移量（45/40/36px）
  - [x] 增大字体尺寸（15/14/13px）
  - [x] 验证：所有文字块可轻松点击，无遮挡

- [x] Task 3: 详情面板可读性修复 — 重新设计背景/文字色
  - [x] 将 `.diagram-panel` 背景从 `rgba(255,255,255,.1)` 改为深色 `rgba(0,0,0,.7)`
  - [x] 保持文字色为白色 `#fff`，增大 padding 和字号
  - [x] 验证：面板文字清晰可读，深色背景与品牌色协调

- [x] Task 4: 中屏响应式适配 — 添加 768-1023px 断点样式
  - [x] 添加 `@media(min-width:768px) and (max-width:1023px){.hero-radial{max-width:380px}}`
  - [x] 中屏球体缩小不溢出，移动端 767px- 隐藏逻辑不变
  - [x] 验证：中屏球体显示正常

# Task Dependencies

- 无依赖关系，所有任务可并行实施
