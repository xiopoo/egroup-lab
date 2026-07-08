# Tasks
- [ ] Task 1: 修复 diag.html 容器宽度（最严重问题）：将 `.container{max-width:448px;...}` 改为 `.container{max-width:var(--content-max);margin:0 auto;padding:0 var(--content-padding)}`
  - [ ] 修改第29行硬编码的宽度和padding
- [ ] Task 2: 统一 diag.html CSS变量与其他页面一致：将 `--content-max:680px` 改为 `--content-max:1100px`
  - [ ] 修改第20行
  - [ ] 删除第186行移动端对 `--content-max:480px` 的覆盖（移动端只需改padding，宽度应由容器自然响应）
- [ ] Task 3: 统一 diag.html header 高度：将 `height:56px` 改为 `height:64px`
  - [ ] 修改第125行
- [ ] Task 4: 桌面端容器宽度评估：将全站 `--content-max` 从1100px扩展至1200px，提升桌面端视觉舒适度
  - [ ] 修改所有页面 `--content-max:1100px` → `--content-max:1200px`
  - [ ] 检查各页面内容布局在1200px下的显示效果
- [ ] Task 5: 增加平板断点支持：在 `@media(max-width:1023px)` 和 `@media(max-width:767px)` 之间增加平板适配
  - [ ] 所有页面增加 `@media(min-width:768px) and (max-width:1023px)` 平板断点
  - [ ] 调整卡片网格列数、字体大小等关键参数

# Task Dependencies
- [Task 1] 无依赖
- [Task 2] 无依赖
- [Task 3] 无依赖
- [Task 4] 无依赖
- [Task 5] 无依赖
