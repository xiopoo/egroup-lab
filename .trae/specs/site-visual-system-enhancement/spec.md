# 网站视觉系统增强 Spec

## Why
当前网站页面中Services、Team等区域使用纯白色背景（`#fff`），与浅灰色区域（`#f7f7f7`）对比较为生硬。卡片设计、阴影层次、装饰元素和排版细节均有优化空间，以提升整体视觉品质和专业感。

## What Changes

### 1. 色彩系统增强
- **CSS变量层**：新增 `--bg-warm:#f5f3f0`（暖灰背景）、`--brand-subtle:rgba(171,25,66,.04)`（品牌色微透）、`--brand-glow:rgba(171,25,66,.06)`（品牌光晕）
- **背景调整**：
  - Services section（`#fff`→`#fafafa`） 
  - Team section（`#fff`→`#fafafa`）
  - About/Cases/Contact section（`var(--bg-gray)`→`var(--bg-warm)`）
- 保持对比度和可读性，避免过大的视觉跳跃

### 2. 视觉层次增强
- **卡片默认阴影**：
  - `.service-card`：默认添加 `box-shadow:var(--shadow-sm)`，hover时升级为 `var(--shadow-md)`
  - `.case-card`：同上
  - `.team-card`：同上
- **分隔线**：
  - 添加 `.section-divider` 类：一条细水平线（1px, `var(--border-light)`），置于section顶部
  - 在白色section和灰色section交替之间作为视觉过渡

### 3. 元素多样化
- **装饰图形**：在Services section、Team section右上角添加一个极简装饰元素 `.bg-decor` — 一个半透明品牌色圆形或圆环（`position:absolute;pointer-events:none;z-index:0`）
- **section header装饰**：每个 `.section-label` 下方添加一条短横线装饰（`width:40px;height:2px;background:var(--brand);border-radius:2px;margin:0 auto`）
- Contact区域背景添加极浅的品牌色径向渐变

### 4. 排版优化
- `.section-desc` 文本颜色从 `var(--text-muted)` 改为 `var(--text-secondary)`，可读性提升
- `.section-title` 添加 `letter-spacing:-.02em`微调
- 全局统一使用 `line-height:1.8` 的正文行高
- `.section-label` 下方装饰横线，替代现有纯文字标签

### 5. 交互体验提升
- 卡片 hover：`translateY(-4px)` → `translateY(-6px)`（幅度加大，反馈更明显）
- 确认所有transition使用 `var(--transition)` 统一时长
- 按钮hover：`box-shadow` 增强

## Impact
- Affected code: `public/index.html` — CSS变量定义、公共section样式、卡片样式、装饰元素HTML+CSS
- Affected code: CSS `section` 相关样式和卡片样式
- 仅影响首页 index.html

## ADDED Requirements
### Requirement: 色彩统一
系统SHALL使用统一的暖色系背景层，替代纯白色以降低视觉生硬感。
- **WHEN** 用户浏览Services、Team等非hero非footer区域
- **THEN** 背景色为暖白/暖灰，与品牌色协调

### Requirement: 卡片视觉反馈
系统SHALL为内容卡片提供一致的视觉层次和交互反馈。
- **WHEN** 用户浏览卡片区域
- **THEN** 卡片默认带轻微阴影，hover时阴影增强并上移
- **AND** 转换过程平滑（transition统一）

## MODIFIED Requirements
- 卡片阴影从hover独占改为默认+增强两级

## REMOVED Requirements
无
