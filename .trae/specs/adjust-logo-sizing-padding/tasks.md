# Tasks
- [x] Task 1: 缩小桌面端Logo尺寸并增加padding
  - 桌面端CSS：`.header-logo img{width:150px;...}` → `width:115px`
  - 容器：`.header-logo{...}` 增加 `padding:8px 12px` 实现四周留白
  - 涉及文件：index.html, services.html, experts.html, diag.html, cases-detail.html, about.html, 404.html
- [x] Task 2: 缩小移动端Logo尺寸
  - 移动端CSS：`.header-logo img{width:130px;...}` → `width:100px`
  - 涉及文件：index.html, services.html, experts.html, cases-detail.html, about.html, 404.html（diag.html无移动端规则）
- [x] Task 3: 验证所有页面的Logo尺寸和留白效果
  - 确认所有7个页面的桌面端和移动端样式均正确更新
  - 确认logo在导航栏中垂直居中且不触顶触底

# Task Dependencies
- [Task 2] depends on [Task 1]（同文件同时修改）
- [Task 3] depends on [Task 1] [Task 2]
