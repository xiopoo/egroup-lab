# 页面布局密度优化 Spec

## Why
当前网站页面留白空间过大（section上下padding 80px、header间距48px、卡片间距24-28px），导致信息密度低、版式松散，用户需频繁滑动才能获取完整内容。需合理压缩间距，提升信息密度和阅读效率。

## What Changes

### 1. Section纵向间距缩减
- `.section` desktop: `padding:80px 0` → `padding:64px 0`（-20%）
- `.section` mobile: `padding:56px 0` → `padding:44px 0`
- `.section-header` desktop: `margin-bottom:48px` → `margin-bottom:36px`
- `.section-header` mobile: `margin-bottom:40px` → `margin-bottom:28px`

### 2. 底部和统计数据间距
- `.stats-section`: `padding:40px 0` → `padding:32px 0`
- `.footer`: `padding:60px 0 30px` → `padding:48px 0 24px`
- `.footer-top` grid gap: `40px` → `32px`

### 3. 卡片网格和内容间距
- `.services-grid` gap: `24px` → `20px`
- `.cases-grid` gap: `24px` → `20px`, margin-bottom: `40px` → `32px`
- `.team-grid` gap: `28px` → `24px`, margin-bottom: `40px` → `32px`
- `.service-card` padding: `36px 28px` → `28px 24px`
- `.contact-box` padding: `48px 56px` → `40px 44px`, gap: `40px` → `32px`
- `.stat-item` padding: `32px 16px` → `24px 12px`
- 移动端cases-grid gap: `20px` → `16px`
- 移动端team-grid gap: `20px` → `16px`

### 4. 保留内容可读性
- 字体大小和行高保持不变
- 卡片内部文字间距保持不变
- 仅缩减容器外间距和卡片间距，不压缩内部内容区域
- 预期节约纵向空间约200-250px，减少1-2次页面滑动

## Impact
- Affected code: `public/index.html` — 纯CSS属性修改（padding、gap、margin）
- 无新增HTML元素，无JS逻辑变更
- 仅影响首页 index.html

## ADDED Requirements
无（纯间距优化）

## MODIFIED Requirements
### 间距标准
系统SHALL使用更紧凑的间距方案以提升信息密度。
- Section上下间距从80px缩减至64px
- 卡片间距从24-28px缩减至20-24px
- Header间距从48px缩减至36px
- 保持系统一致性：同类型元素使用统一间距

## REMOVED Requirements
无
