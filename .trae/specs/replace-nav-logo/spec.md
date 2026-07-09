# 替换导航栏Logo Spec

## Why

将灰金重组网站顶部导航栏左上角的现有logo替换为坚果云设计素材中的透明背景PNG定稿logo，并将新logo置于导航栏的视觉中心位置（不是横向栏中间，为上下高度中间），同时调整尺寸使其与导航栏高度协调统一。

## What Changes

* 从坚果云同步文件夹复制"灰金 logo 定稿透明白色.png"到项目的 `public/images/` 目录

* 更新所有7个HTML页面的header和footer中的logo图片引用路径

* 调整 `.header-logo img` 的CSS宽度（从120px放大），使其与导航栏高度（64px）视觉协调

* 保留 `.header-logo` 的flex居中对齐布局（已实现垂直居中）

* 所有页面（index.html, services.html, experts.html, diag.html, cases-detail.html, about.html, 404.html）统一修改

## Impact

* Affected specs: 无

* Affected code: 以下7个HTML文件的header和footer部分：

  * `public/index.html`

  * `public/services.html`

  * `public/experts.html`

  * `public/diag.html`

  * `public/cases-detail.html`

  * `public/about.html`

  * `public/404.html`

## ADDED Requirements

### Requirement: 导航栏Logo替换

系统SHALL将顶部导航栏的Logo替换为新的透明背景PNG图片。

#### Scenario: 桌面端显示

* **WHEN** 用户访问任何页面

* **THEN** 导航栏显示新logo

* **AND** logo宽度适当放大（约140-160px），高度自适应

* **AND** logo在导航栏中垂直居中

* **AND** logo与导航栏色块高度（64px）视觉协调

#### Scenario: 移动端显示

* **WHEN** 用户在移动设备上访问页面

* **THEN** logo宽度相应缩小（约120-130px）

* **AND** logo在导航栏中垂直居中

### Requirement: 页脚Logo一致性

系统SHALL保持页脚（footer）区域的logo与新logo一致。

#### Scenario: 页脚Logo

* **WHEN** 用户滚动到页面底部

* **THEN** footer区域显示与新logo一致的图片

## MODIFIED Requirements

无

## REMOVED Requirements

无
