# 首屏综合优化v2 Spec

## Why
当前首页首屏（Hero区域）存在4个问题：1)红色背景块高度仍偏高，视觉比例可进一步优化；2)Windows系统下首屏底部出现白色空白；3)点击同心圆条目的文字框被"企业"元素遮挡；4)装饰图案设计逻辑不清晰，影响视觉层次和交互体验。

## What Changes

### 1. 首屏红色背景块高度压缩
- 移除 `.hero` 的 `overflow-x:hidden` → 设为 `overflow:hidden`（同时封闭垂直溢出，修复Windows空白）
- 压缩 `.hero-inner` 的 `padding-top` 从 `32px` 降至 `20px`
- 压缩 `.hero-inner` 的 `gap` 从 `36px` 降至 `24px`
- 压缩 `.stats-in-hero` 的 `padding` 从 `12px 0 28px` → `8px 0 20px`
- 压缩 `.stats-in-hero` 的 `margin-top` 从 `16px` → `8px`
- 压缩 `.hero-title` 的 `font-size` 从 `40px` → `36px`，`margin-bottom` 从 `8px` → `6px`
- 压缩 `.hero-subtitle` 的 `font-size` 从 `22px` → `18px`，`margin-bottom` 从 `6px` → `4px`
- 压缩 `.hero-slogan` 的 `font-size` 从 `18px` → `15px`，`margin-bottom` 从 `12px` → `8px`
- 压缩 `.hero-desc` 的 `font-size` 从 `15px` → `14px`，`margin-bottom` 从 `20px` → `14px`
- 压缩 `.hero-badge` 的 `margin-bottom` 从 `16px` → `10px`
- 压缩 `.hero-cta` 的 `padding` 从 `14px 36px` → `12px 32px`

### 2. Windows白色空白修复
- Hero容器 `.hero` 设置 `overflow:hidden`（替代 `overflow-x:hidden`）防止内容撑开产生间隙
- Hero容器设置 `min-height:100vh`（如未设置），确保首屏高度占满视口
- 移除或限制可能产生溢出的绝对定位元素（如 `hero::before` 装饰圆）
- 添加 `box-sizing:border-box` 确保padding计算正确

### 3. 同心圆交互z-index修复
- `.diagram-panel` 的 `z-index` 从 `5` 提升至 `20`
- 添加叠加遮罩层（`diagram-overlay`）用于点击外部关闭，z-index为15
- 确保 panel 激活时不被任何同心圆内部的 `sphere-text-block`、`depth-layer` 或 `diagram-core`（企业）遮挡
- `.diagram-panel.active` 添加 `box-shadow` 增强视觉层级分离

### 4. 装饰图案设计重构
- 当前 `hero::before` 装饰圆（top:-50%, right:0, 600×600px）调整为更微妙的装饰
- 改为使用两个装饰半透明圆环：一个在左上角（较小），一个在右下角（较大）
- 装饰元素设置 `z-index:0` 确保位于所有内容之后
- 添加新的 `.hero-decoration` 元素（HTML结构）替代纯CSS伪元素，便于维护和定位控制

## Impact
- Affected code: `public/index.html` 中的CSS（hero及相关元素尺寸/间距/定位/overflow/z-index）和HTML（可选的装饰元素结构）
- 仅影响首页index.html，不涉及其他页面

## ADDED Requirements
### Requirement: 首屏高度合理
系统SHALL确保首屏红色背景块在所有桌面屏幕（1920×1080及以下）中高度适中，不超出首屏可见区域。
- **WHEN** 用户在桌面浏览器打开首页
- **THEN** Hero内容区和统计数据完整显示在首屏内
- **AND** 不同操作系统（macOS/Windows）下效果一致

### Requirement: 无异常空白区域
系统SHALL确保所有操作系统下首屏底部无意外白色空白。
- **WHEN** 用户在Windows Chrome/Edge/Firefox中访问首页
- **THEN** Hero背景色从顶部延伸至stats底部，无白色间隙

### Requirement: 弹窗正确显示
系统SHALL确保点击同心圆节点后详情面板不被其他元素遮挡。
- **WHEN** 用户点击任意同心圆节点
- **THEN** 详情面板显示在所有同心圆元素之上，其文字完全可读

### Requirement: 装饰元素不干扰交互
系统SHALL确保装饰性视觉元素不遮挡可交互元素。
- **WHEN** 用户与Hero区域交互（点击节点、按钮等）
- **THEN** 装饰元素不干扰点击事件和视觉焦点
- **AND** 装饰元素的视觉层级低于所有交互元素

## MODIFIED Requirements
### Requirement: 统计数据完整可见（修改自hero-stats-circles-panel-optimization）
系统SHALL继续确保所有统计数字在首屏完整显示，同时压缩Hero整体高度。
- font-size: 46px → 保持不变
- 整体padding/spacing压缩约30-40px

## REMOVED Requirements
无
