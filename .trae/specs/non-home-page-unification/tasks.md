# Tasks
- [ ] Task 1: 统一 about.html 的 page-hero CSS 和 HTML 类名
  - [ ] SubTask 1.1: CSS 中 `.page-hero h1` → `.page-hero-title`，`.page-hero .tagline` → `.page-hero-subtitle`
  - [ ] SubTask 1.2: about.html HTML 中加回 `.page-hero-title` 和 `.page-hero-subtitle` 类
  - [ ] SubTask 1.3: `::before` 装饰圆改为 500px×500px
  - [ ] SubTask 1.4: 文案统一为"关于灰金" / "深耕中小企业困境诊断与重组赛道"

- [ ] Task 2: 统一 services.html 的 page-hero 结构
  - [ ] SubTask 2.1: CSS 添加 height:280px + display:flex + align-items:center
  - [ ] SubTask 2.2: CSS 删除 `.page-hero-badge` 相关样式
  - [ ] SubTask 2.3: CSS 删除 `.page-hero::after`
  - [ ] SubTask 2.4: HTML 删除 `<span class="page-hero-badge">全周期专业服务</span>`
  - [ ] SubTask 2.5: 文案统一为"服务体系" / "从诊断到重组，全周期陪跑"

- [ ] Task 3: 补齐 diag.html 的 page-hero
  - [ ] SubTask 3.1: 添加 page-hero CSS（与标准一致）
  - [ ] SubTask 3.2: 添加 page-hero HTML：标题"企业诊断"、副标题"36道题，3分钟，基于真实经营数据的深度体检"

- [ ] Task 4: 统一移动端 page-hero 样式
  - [ ] SubTask 4.1: 统一 @media (max-width: 767px) 下的 page-hero 高度为 220px
  - [ ] SubTask 4.2: 删除各页面移动端的 `::after` 装饰

- [ ] Task 5: 统一 section-header 文案
  - [ ] SubTask 5.1: about.html → ABOUT US / 关于我们
  - [ ] SubTask 5.2: services.html → OUR SERVICES / 服务内容
  - [ ] SubTask 5.3: cases-detail.html → SUCCESS CASES / 实战案例精选
  - [ ] SubTask 5.4: experts.html → EXPERT TEAM / 核心专家
  - [ ] SubTask 5.5: diag.html → ONLINE DIAGNOSIS / 在线诊断

- [ ] Task 6: 整体布局审查
  - [ ] SubTask 6.1: 检查各页面 page-hero 后首个 section 的顶部间距一致性
  - [ ] SubTask 6.2: 检查各页面 footer 位置和间距一致性

- [ ] Task 7: 验证所有修改
  - [ ] SubTask 7.1: 验证 all 5 个页面的 page-hero 在桌面端一致
  - [ ] SubTask 7.2: 验证所有页面移动端 page-hero 一致
  - [ ] SubTask 7.3: 验证文案结构和层级统一

# Task Dependencies
- Task 6 依赖 Task 1-5
- Task 7 依赖 Task 1-6
