# 任务列表

- [x] Task 1: 将 5 个已优化页面的 page-hero 宽度从 1320px 缩至 1200px
  - 修改 services.html、about.html、cases-detail.html、experts.html、diag.html 的 `.page-hero`
  - `max-width: calc(var(--content-max) + 120px)` → `max-width: var(--content-max)`
  - 保留 `margin: 0 auto`、`border-radius: 0 0 24px 24px`
  - 移动端断点中保留 `max-width:none;margin:0;border-radius:0`

- [x] Task 2: 修复 cases.html — 更新 page-hero 至统一规范
  - 高度 280px → 220px
  - 添加 `max-width: var(--content-max); margin: 0 auto; border-radius: 0 0 24px 24px`
  - 添加 `@media(max-width:1023px)` 断点中的 `.page-hero{height:200px}`
  - 移动端断点中添加 `max-width:none;margin:0;border-radius:0`
  - 添加 `.first-section` 减少首屏 padding-top

- [x] Task 3: 首页 hero 宽度收敛
  - 修改 index.html `.hero`，添加 `max-width: var(--content-max); margin: 0 auto; border-radius: 0 0 24px 24px`
  - 移动端断点中重置为 `max-width:none; margin:0; border-radius:0`

- [x] Task 4: 补充缺失的平板断点
  - experts.html 和 diag.html 在 `@media(max-width:1023px)` 中添加 `.page-hero{height:200px}`
  - 确保与断点内其他规则缩进风格一致

- [ ] Task 5: 跨设备验证所有修改 ⚠️ 需人工在浏览器中确认渲染效果
  - 桌面端（≥1024px）：全站红色背景宽度 = 1200px，居中，底部圆角
  - 平板端（768-1023px）：所有页面 page-hero height = 200px
  - 移动端（≤767px）：全宽显示，无圆角

# 任务依赖关系
- [Task 1] 无依赖
- [Task 2] 无依赖
- [Task 3] 无依赖
- [Task 4] 无依赖（可独立处理）
- [Task 5] 依赖 [Task 1]、[Task 2]、[Task 3]、[Task 4]
