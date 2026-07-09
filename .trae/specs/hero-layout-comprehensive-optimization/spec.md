# 灰金重组网站首屏及整体布局优化 Spec

## Overview
- **Summary**: 针对灰金重组网站首屏右侧三个圆形元素、背景与文字布局、整体响应式设计进行全面优化调整
- **Purpose**: 提升网站首屏视觉吸引力和用户体验，确保各元素布局合理、视觉层次清晰、响应式适配完善
- **Target Users**: 访问网站的所有用户（桌面端、平板、移动端）

## Goals
- 优化首屏右侧三个圆形元素布局，最大化利用容器宽度
- 将白色背景区域第一行文字移动至红色背景区域，填补空间
- 实现全网站响应式设计，确保各屏幕内容完整显示

## Non-Goals (Out of Scope)
- 不修改网站的功能逻辑和交互行为
- 不改变网站的设计风格和品牌调性
- 不新增页面或功能模块

## Background & Context
- 当前网站首页位于 `/Users/lucas/Documents/bamangB/regroup-lab/public/index.html`
- Hero 区域使用红色渐变背景，右侧包含三层轨道的 2.5D 球体可视化
- 当前 `.hero-radial` 容器最大宽度为 420px，未能充分利用右侧可用空间
- Stats 区域（四个统计数字）位于白色背景区域，紧贴红色 Hero 区域下方
- 网站已具备基础响应式布局，但需要进一步优化

## Functional Requirements
- **FR-1**: 首屏右侧圆形元素布局优化
  - 最大圆形元素（Layer 1）最大限度占据容器宽度
  - 其余两个圆形元素（Layer 2、Layer 3）及内部元素按比例等比放大
  - 保持三个圆形元素之间的相对位置关系和视觉平衡

- **FR-2**: 背景与文字布局调整
  - 将 Stats 区域第一行文字移动至红色 Hero 背景区域中
  - 确保移动后的文字内容完全显示在首屏范围内（考虑 macOS 与 Windows 浏览器差异）
  - 白色背景区域整体向上移动，填补文字移动后留下的空间
  - 保持文字与背景的对比度和可读性

- **FR-3**: 整体页面响应式设计
  - 实现网站所有页面的响应式设计，确保在不同设备尺寸下正常显示
  - 每个独立屏幕（section）的内容都能完整显示，无需滚动即可查看全部内容
  - 保持各元素间的间距比例和视觉层次结构
  - 确保调整后的布局在各种主流浏览器中保持一致的显示效果

## Non-Functional Requirements
- **NFR-1**: 动画性能流畅，球体旋转无卡顿
- **NFR-2**: 布局在所有屏幕尺寸下无横向滚动条
- **NFR-3**: 文字可读性良好，对比度符合 WCAG 标准
- **NFR-4**: 页面加载速度不受影响

## Constraints
- **Technical**: 纯 CSS/HTML 修改，不涉及 JavaScript 逻辑变更
- **Dependencies**: 仅修改 `public/index.html`
- **Brand**: 保持原设计风格和品牌调性，使用现有颜色体系

## Assumptions
- 用户主要使用桌面端和移动端访问
- macOS 与 Windows 浏览器的字体渲染差异需要考虑
- 首屏高度应适应不同设备的视口高度

## Acceptance Criteria

### AC-1: 圆形元素最大化利用容器宽度
- **Given**: 桌面端视口宽度 ≥1024px
- **When**: 页面加载完成
- **Then**: `.hero-radial` 容器宽度使用 `max-width: 100%`，三层轨道等比放大，Layer 1 轨道边缘靠近容器边界
- **Verification**: `human-judgment`

### AC-2: 文字块等比放大
- **Given**: 桌面端视口宽度 ≥1024px
- **When**: 查看球体轨道上的文字块
- **Then**: Layer 1 文字块尺寸约 90×36px，Layer 2 约 80×32px，Layer 3 约 72×28px，字体大小相应增大
- **Verification**: `human-judgment`

### AC-3: 文字移动至红色背景区域
- **Given**: 任意屏幕尺寸
- **When**: 查看首页首屏
- **Then**: Stats 区域的第一行文字（"128+"、"2.2亿"、"550+"、"9.7%"）显示在红色 Hero 背景区域底部
- **Verification**: `human-judgment`

### AC-4: 首屏内容完整显示
- **Given**: 桌面端视口高度 ≥800px
- **When**: 页面加载完成
- **Then**: Hero 区域全部内容（标题、副标题、slogan、描述、CTA、球体、统计数字）完整显示在首屏范围内，无需滚动
- **Verification**: `human-judgment`

### AC-5: 响应式布局适配
- **Given**: 视口宽度在 768-1023px 之间
- **When**: 页面加载完成
- **Then**: 球体容器适当缩小，文字块和轨道按比例缩放，内容布局保持合理
- **Verification**: `human-judgment`

### AC-6: 移动端布局优化
- **Given**: 视口宽度 <768px
- **When**: 页面加载完成
- **Then**: Hero 区域单列布局，球体隐藏，统计数字两列显示，内容完整可见
- **Verification**: `human-judgment`

## Open Questions
- [ ] 是否需要调整其他页面（about.html、services.html 等）的响应式布局
