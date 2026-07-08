# 任务列表

- [ ] Task 1: 修改 6 个页面 footer 底部 padding（桌面端 + 移动端）
  - 桌面端：`.footer{padding:60px 0 30px}` → `.footer{padding:60px 0 calc(48px + env(safe-area-inset-bottom))}`
  - 移动端：`.footer{padding:48px 0 24px}` → `.footer{padding:48px 0 calc(36px + env(safe-area-inset-bottom))}`
  - 影响的页面：index.html, services.html, about.html, cases-detail.html, experts.html, 404.html

- [ ] Task 2: 验证修改
  - 桌面端 footer 底部留白增加至 48px
  - 移动端 footer 底部留白增加至 36px + safe-area

# 任务依赖
- [Task 2] 依赖 [Task 1]
