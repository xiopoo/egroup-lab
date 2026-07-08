# 任务列表

- [ ] Task 1: 恢复全站红色背景全宽显示
  - 修改 6 个页面（index、services、about、cases-detail、experts、diag）的 `.page-hero`/`.hero`
  - 移除 `max-width: var(--content-max)`、`margin: 0 auto`、`border-radius: 0 0 24px 24px`
  - 保持 height 不变（220px / 首页 hero 400px min-height）

- [ ] Task 2: 清理冗余样式
  - 移除 5 个非首页页面移动端断点中的 `max-width:none;margin:0;border-radius:0`（不再需要重置）
  - 移除 index.html 移动端断点中的 `.hero{max-width:none;margin:0;border-radius:0}`
  - 移除 index.html 平板断点中无效的 `.page-hero{height:240px}`

- [ ] Task 3: 验证修改
  - 桌面端：红色背景全宽覆盖，无空白
  - 移动端：红色背景全宽正常
  - 首屏内容完整可见

# 任务依赖关系
- [Task 1] 无依赖
- [Task 2] 无依赖（不同文件，可并行）
- [Task 3] 依赖 [Task 1]、[Task 2]
