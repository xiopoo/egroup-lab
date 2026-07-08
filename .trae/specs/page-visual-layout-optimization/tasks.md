# 任务列表

- [x] Task 1: 优化 diag.html 描述文本响应式排版
  - 修改 `.home-desc` 的 `max-width:280px` 为桌面端 `max-width:420px`，移动端 `max-width:260px`
  - 确保文本在桌面端单行完整显示，不产生不必要的换行

- [x] Task 2: 统一调整所有非首页页面的 page-hero 背景宽度
  - 为以下 5 个有 `.page-hero` 的页面添加 `max-width`、水平居中和底部圆角：
    - services.html、about.html、cases-detail.html、experts.html、diag.html
  - 桌面端：`max-width: calc(var(--content-max) + 120px)`、`margin: 0 auto`、`border-radius: 0 0 24px 24px`
  - 移动端：恢复全宽、取消圆角
  - ⚠️ 404.html 和 intro.html 无 `.page-hero` CSS，无需修改

- [x] Task 3: 优化非首页页面首屏内容可见性
  - 将 5 个有 `.page-hero` 的非首页页面高度从 280px 降低至 220px（桌面端）
  - 为 4 个页面（services、about、cases-detail、experts）添加 `.first-section` 类
  - 在 CSS 中添加 `.first-section { padding-top: 60px }`（替代默认 80px）
  - ⚠️ diag.html 和 404.html 使用不同的布局结构，不适合添加 `.first-section`

- [x] Task 4: 优化首页首屏内容可见性
  - 将 index.html hero `min-height` 从 480px 降至 400px
  - 移动端 hero padding 从 48px 降至 40px

- [ ] Task 5: 跨设备验证所有修改 ⚠️ 需人工在浏览器中实际测试
  - 在桌面端（≥1024px）验证：文本不换行、背景宽度收敛、首屏内容完整
  - 在平板端（768-1023px）验证：布局正常无断裂
  - 在移动端（≤767px）验证：背景全宽正常、文本自适应换行

# 任务依赖关系
- [Task 1] 无依赖
- [Task 2] 无依赖
- [Task 3] 依赖 [Task 2]（共享 `.page-hero` CSS 修改）
- [Task 4] 无依赖（独立修改 index.html）
- [Task 5] 依赖 [Task 1]、[Task 2]、[Task 3]、[Task 4]
