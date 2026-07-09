# Tasks
- [x] Task 1: 将新logo图片文件从坚果云复制到项目目录
  - 源路径：`坚果云-jachkon@163.com/灰金重组/设计素材/灰金 logo 定稿透明白色.png`
  - 目标路径：`public/images/logo-hjzc-transparent-white.png`
- [x] Task 2: 更新所有7个HTML页面的header和footer中的logo引用
  - 涉及文件：index.html, services.html, experts.html, diag.html, cases-detail.html, about.html, 404.html
  - 将 `src="images/logo-white.png"` 替换为 `src="images/logo-hjzc-transparent-white.png"`
  - 同时更新header和footer两处引用
- [x] Task 3: 调整CSS logo尺寸，确保视觉协调
  - 桌面端：`.header-logo img` 宽度从 `120px` 调整为 `150px`
  - 移动端：宽度从 `100px` 调整为 `130px`
  - 保留 `height: auto; object-fit: contain` 等现有样式
  - 确保与导航栏高度（64px/56px）视觉协调
- [x] Task 4: 验证所有页面的logo显示效果
  - 确认所有7个页面的header和footer均正确显示新logo
  - 确认桌面端和移动端样式均正确

# Task Dependencies
- [Task 2] depends on [Task 1]
- [Task 3] depends on [Task 2]
- [Task 4] depends on [Task 3]
