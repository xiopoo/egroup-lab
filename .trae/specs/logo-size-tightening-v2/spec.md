# Logo尺寸调整v2 Spec

## Why
当前logo尺寸在上一轮已从150px缩减至115px（桌面端）/100px（移动端），但仍显偏大：115px ÷ 64px（导航高度）≈ 1.8倍比例，视觉上过于突出。需要进一步缩减至标准比例（约1.5倍导航高度），使视觉更协调。

## What Changes
### 1. 桌面端logo宽度缩减
- `.header-logo img{width:115px}` → `width:95px`
- 95px ÷ 64px（导航高度）≈ 1.48倍，比例适中
- 涉及7个HTML页面

### 2. 移动端logo宽度缩减
- `@media(max-width:767px)` 内 `width:100px` → `width:80px`
- 80px ÷ 56px（移动端导航高度）≈ 1.43倍，比例适中
- 涉及6个HTML页面

## Impact
- Affected HTML files: `index.html`, `about.html`, `services.html`, `cases-detail.html`, `experts.html`, `diag.html`, `404.html`

## ADDED Requirements
无

## MODIFIED Requirements
### 品牌Logo视觉比例
系统SHALL使用约1.5倍导航栏高度的logo宽度：
- 桌面端（64px nav）：logo宽95px
- 移动端（56px nav）：logo宽80px
