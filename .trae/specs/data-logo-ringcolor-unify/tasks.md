# Tasks
- [ ] Task 1: 数据更新 — 将首页统计数据中的净利润修复值从9.7%改为29.5%
  - 在 `public/index.html` 中找到 `.num:contains("9.7%")` → 改为 `29.5%`

- [ ] Task 2: Logo替换 — 从"灰金重组"文件夹获取最新logo并替换
  - 从坚果云下载 `灰金 logo 定稿透明白色.png`
  - 覆盖至 `public/images/logo-hjzc-transparent-white.png`

- [ ] Task 3: 圆环条目统一背景色 — 重构CSS+HTML
  - CSS：移除 `layer-color-1` 至 `layer-color-6` 定义，替换为3个 `ring-layer-X-bg` 半透明渐变
    - `.ring-layer-1-bg{background:rgba(90,170,220,.65);backdrop-filter:blur(4px)}`（青蓝系，外环）
    - `.ring-layer-2-bg{background:rgba(110,200,170,.6);backdrop-filter:blur(4px)}`（青绿系，中环）
    - `.ring-layer-3-bg{background:rgba(230,170,80,.6);backdrop-filter:blur(4px)}`（琥珀系，内环）
  - HTML：将每个节点的 `layer-color-X` 替换为对应的层级统一class

- [ ] Task 4: 验证
  - 确认数据已改为29.5%
  - 确认Logo替换成功
  - 确认每层4个节点背景色一致
  - 确认3层之间颜色有区分

# Task Dependencies
- [Task 1], [Task 2], [Task 3] 可并行执行
- [Task 4] 依赖所有前置任务
