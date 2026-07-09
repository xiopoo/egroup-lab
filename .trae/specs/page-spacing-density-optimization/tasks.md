# Tasks
- [ ] Task 1: 缩减section纵向间距
  - `.section{padding:80px 0}` → `padding:64px 0`
  - 移动端 `.section{padding:56px 0}` → `padding:44px 0`
  - `.section-header{margin-bottom:48px}` → `margin-bottom:36px`
  - 移动端 `.section-header{margin-bottom:40px}` → `margin-bottom:28px`

- [ ] Task 2: 缩减底部区域和stats间距
  - `.stats-section{padding:40px 0}` → `padding:32px 0`
  - `.footer{padding:60px 0 30px}` → `padding:48px 0 24px`
  - `.footer-top` grid gap: 40px → 32px

- [ ] Task 3: 缩减卡片间距
  - `.services-grid{gap:24px}` → `gap:20px`
  - `.cases-grid{gap:24px;margin-bottom:40px}` → `gap:20px;margin-bottom:32px`
  - `.team-grid{gap:28px;margin-bottom:40px}` → `gap:24px;margin-bottom:32px`
  - `.service-card{padding:36px 28px}` → `padding:28px 24px`
  - 移动端 `.service-card{padding:28px 24px}` → 不动（已匹配）
  - 移动端 `.cases-grid{gap:20px}` → `gap:16px`
  - 移动端 `.team-grid{gap:20px}` → `gap:16px`
  - `.contact-box{padding:48px 56px;gap:40px}` → `padding:40px 44px;gap:32px`
  - `.stat-item{padding:32px 16px}` → `padding:24px 12px`

- [ ] Task 4: 验证
  - 检查无CSS语法错误
  - 确认视觉舒适度与信息密度平衡
  - 确认移动端适配正常

# Task Dependencies
- 所有任务可并行执行（同一CSS文件不同位置）
- [Task 4]依赖所有前置任务
