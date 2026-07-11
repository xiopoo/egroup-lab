# Debug Session: hero-desktop-images

## Status: [OPEN]

## 症状
- 手机端：首页首屏轮播图片正常显示
- 桌面端：首页首屏轮播图片不显示，仅显示红色渐变背景

## 根因修复尝试（已失败）
- 添加 `min-height:480px` → 未解决问题
- 添加 `z-index` 层叠上下文 → 未解决问题

## 假设（3-5 个可证伪的假设）

### H1: `.hero-slide` 的 `backgroundImage` 未正确注入
- 如果 JS 没有正确设置 `backgroundImage`，则`.hero-slide`仅显示 CSS 渐变
- **验证方式**: 检查浏览器控制台 `[Image] Setting background:` 日志是否输出

### H2: 图片资源加载失败（尽管 HTTP 200）
- 可能桌面端浏览器因缓存/CORS/HTTPS 混合内容等问题拒绝渲染图片
- **验证方式**: 检查浏览器控制台 `[Image] Loaded:` / `[Image] FAILED:` 日志

### H3: `.hero-slide` 被桌面端增加的 DOM 元素（3D 球状图）遮挡
- 桌面端 `.hero-visual` 显示 3D 球状图，其 `z-index:10` 等元素可能意外遮挡轮播
- **验证方式**: 在浏览器中检查 `.hero-carousel` 的渲染层叠上下文

### H4: `.hero` 高度计算异常导致轮播不可见
- 尽管有 `min-height:480px`，但 `overflow:hidden` 可能配合其他 CSS 裁剪了轮播
- **验证方式**: 检查浏览器控制台 `[Hero] Hero element height:` 日志值

## 用户验证请求

请在桌面端打开 https://hjcz.vercel.app/，按 F12 打开开发者工具：
1. **Console 面板**：截图或告诉我 `[Hero]` 和 `[Image]` 开头的日志内容
2. **Elements 面板**：检查 `.hero-slide.active` 元素，查看 Computed 样式中的 `background-image` 是否包含图片 URL
3. **Network 面板**：过滤 `hero-`，查看图片是否成功加载（200）
