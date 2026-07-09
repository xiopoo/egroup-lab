# 灰金重组网站首屏及整体布局优化 - 实施计划

## [x] Task 1: 首屏右侧圆形元素布局优化
- **Priority**: high
- **Depends On**: None
- **Description**: 
  - 将 `.hero-radial` 容器的 `max-width` 从 420px 调整为 100%，使其最大限度利用右侧列可用空间
  - 等比放大三层轨道半径：Layer 1 从 55% 调整，Layer 2 从 45% 调整，Layer 3 从 30% 调整
  - 等比放大文字块尺寸：Layer 1 从 76×32px 调整至 90×36px，Layer 2 从 68×28px 调整至 80×32px，Layer 3 从 60×24px 调整至 72×28px
  - 相应调整字体大小
- **Acceptance Criteria Addressed**: AC-1, AC-2
- **Test Requirements**:
  - `human-judgment` TR-1.1: 桌面端球体容器占据右侧列大部分宽度，无明显留白
  - `human-judgment` TR-1.2: 三层轨道上的文字块尺寸增大且比例协调，无相互遮挡
- **Notes**: 需要同时调整 SVG viewBox 尺寸以保持连接线条正确显示

## [x] Task 2: 将 Stats 区域第一行文字移动至红色背景区域
- **Priority**: high
- **Depends On**: Task 1
- **Description**: 
  - 将 `.stats-section` 的统计数字行移动到 `.hero` 区域内
  - 调整统计数字的样式，使其与红色背景形成良好对比（白色文字）
  - 移除原 Stats 区域的第一行，调整下方白色背景区域的位置
- **Acceptance Criteria Addressed**: AC-3, AC-4
- **Test Requirements**:
  - `human-judgment` TR-2.1: 统计数字显示在红色 Hero 背景区域底部，与背景对比度良好
  - `human-judgment` TR-2.2: 首屏所有内容完整显示，无需滚动
- **Notes**: 需要考虑 macOS 和 Windows 浏览器的字体渲染差异，确保文字可读性

## [x] Task 3: 调整白色背景区域位置和布局
- **Priority**: high
- **Depends On**: Task 2
- **Description**: 
  - 将原 Stats 区域的剩余内容（如还有）或下方 Services 区域向上移动
  - 调整各 section 的 padding 和 margin 值，保持视觉层次和间距比例
  - 确保整体布局紧凑且视觉平衡
- **Acceptance Criteria Addressed**: AC-3, AC-4
- **Test Requirements**:
  - `human-judgment` TR-3.1: 白色背景区域紧贴红色 Hero 区域下方，无多余留白
  - `human-judgment` TR-3.2: 各 section 间距比例协调，视觉层次清晰
- **Notes**: 需要检查所有 section 的间距设置

## [x] Task 4: 响应式布局优化（中屏 768-1023px）
- **Priority**: medium
- **Depends On**: Task 1
- **Description**: 
  - 调整中屏断点（768-1023px）的球体容器尺寸，确保不溢出
  - 调整统计数字在中屏的显示布局
  - 确保所有元素按比例缩放，布局合理
- **Acceptance Criteria Addressed**: AC-5
- **Test Requirements**:
  - `human-judgment` TR-4.1: 中屏设备上球体正常显示，无溢出或遮挡
  - `human-judgment` TR-4.2: 统计数字布局合理，可读性良好
- **Notes**: 当前已有基础响应式设置，需要根据新布局进行调整

## [x] Task 5: 响应式布局优化（移动端 <768px）
- **Priority**: medium
- **Depends On**: Task 2
- **Description**: 
  - 调整移动端的 Hero 区域布局，确保统计数字正确显示
  - 检查移动端各 section 的布局和间距
  - 确保移动端内容完整可见，无需横向滚动
- **Acceptance Criteria Addressed**: AC-6
- **Test Requirements**:
  - `human-judgment` TR-5.1: 移动端统计数字显示在红色背景区域内，布局合理
  - `human-judgment` TR-5.2: 移动端无横向滚动条，内容完整可见
- **Notes**: 当前移动端隐藏了球体，需要确保文字内容显示正常

## [x] Task 6: 浏览器兼容性验证
- **Priority**: medium
- **Depends On**: Tasks 1-5
- **Description**: 
  - 验证布局在 Chrome、Firefox、Safari 等主流浏览器中的显示效果
  - 检查 macOS 与 Windows 系统的字体渲染差异
  - 确保动画效果在各浏览器中流畅运行
- **Acceptance Criteria Addressed**: FR-3
- **Test Requirements**:
  - `human-judgment` TR-6.1: 布局在 Chrome、Firefox、Safari 中显示一致
  - `human-judgment` TR-6.2: macOS 与 Windows 系统中文字可读性良好
- **Notes**: 需要通过实际浏览器测试或开发者工具模拟
