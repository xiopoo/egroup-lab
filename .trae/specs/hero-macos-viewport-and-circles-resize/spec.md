# Hero区域macOS首屏显示与同心圆尺寸调整 Spec

## Why
当前首页hero区域存在两个问题：1) 红色背景内的文字内容在macOS浏览器中无法完整显示在首屏范围内，需要滚动才能看到完整内容；2) 三个同心圆（sphere layers）视觉尺寸偏小，未充分利用红色背景区域高度。

## What Changes
### 问题1：macOS首屏显示
- 压缩hero区域纵向空间：减少内部元素的margin-bottom值
- 调整 `.hero-inner` 的padding/grid-gap，减小竖向占位
- 调整 `.hero-title` 字号从48px适当缩小，减少行高对高度的占用
- 确保CTA按钮之后的 `stats-section` 首行统计数字在首屏内完整可见
- **不修改** `.hero-inner` 的 `grid-template-columns` 布局结构

### 问题2：同心圆尺寸放大
- 增大 `.sphere-layer-1` 从55% → 约85-90%，使最外圈接近红色背景区域高度
- `.sphere-layer-2` 从45% → 按比例放大（约70-75%）
- `.sphere-layer-3` 从30% → 按比例放大（约50-55%）
- `diagram-core` 核心节点从16% → 按比例放大（约25-28%）
- 保持最外圈与背景边缘之间留有一定边距（约5-8%）
- 放大后的SVG节点连接线适配新尺寸
- 确保放大后文字块不相互遮挡（调整字体大小和文字块尺寸）

## Impact
- Affected code: `public/index.html` 中的CSS部分（hero相关样式、sphere-layer尺寸）
- 仅影响首页index.html的hero区域
- 不影响其他页面（services, about, experts等）
- 不改变HTML结构，仅修改CSS属性值

## ADDED Requirements
### Requirement: macOS首屏内容完整显示
系统SHALL在macOS浏览器中确保hero区域文字内容在首屏完整显示。

#### Scenario: macOS非全屏浏览器
- **WHEN** 用户在macOS设备上以非全屏窗口访问首页
- **THEN** hero红色背景内的完整文字内容（标题、副标题、slogan、描述、CTA）在首屏内可见
- **AND** stats-section统计数字的首行在首屏内完整可见

### Requirement: 同心圆尺寸等比放大
系统SHALL将三层同心圆轨道等比放大，最外圈接近红色背景高度。

#### Scenario: 桌面端
- **WHEN** 用户在桌面端访问首页
- **THEN** `.sphere-layer-1` 的直径约为 `.hero-inner` 高度的85-90%
- **AND** 最外圈与红色背景边缘保持5-8%边距
- **AND** 三层轨道保持视觉比例协调
- **AND** 核心节点(`diagram-core`)按相同比例放大

#### Scenario: 中屏（768-1023px）
- **WHEN** 用户在中屏设备访问首页
- **THEN** 同心圆缩放比例适当降低，保持与hero区域的协调

## MODIFIED Requirements
无

## REMOVED Requirements
无
