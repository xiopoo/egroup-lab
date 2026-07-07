# 网站系统性优化与调整 Spec

## Why
当前网站为移动端优先设计，桌面端用户体验差（内容被限制在 480px 窄条中），Logo 清晰度不足、缺少团队介绍和 404 页面，且未通过微信域名验证。需要进行系统性优化，提升全平台用户体验。

## What Changes
- 响应式适配：重构媒体查询，支持桌面端（1200-1400px）、平板（768px）、移动端三端布局
- Logo 优化：转换为 SVG 矢量格式，设置最佳显示比例（最小宽度 200px），添加最大宽度限制
- 首页布局重构：桌面端最大宽度 1200-1400px，弹性布局，内容区块响应式排列
- 新增团队介绍模块：卡片式布局展示专业人员信息
- 导航链接功能检查与修复：全链路验证所有导航链接可用性
- 新增 404 页面：作为企业宣传页/错误页
- 新增微信域名验证文件：`public/e586aa37e20b8594862ae24febc87b0c.txt`

## Impact
- Affected specs: 网站前端架构
- Affected code: `public/index.html`, `public/diag.html`, `public/404.html`, `public/*.svg`, `vercel.json`, `public/e586aa37e20b8594862ae24febc87b0c.txt`

## ADDED Requirements

### Requirement: 响应式适配
系统 SHALL 根据设备类型提供对应的布局样式。

#### Scenario: 桌面端访问（≥1024px）
- **WHEN** 用户使用桌面浏览器访问网站
- **THEN** 页面宽度最大 1200-1400px，左右留白适当，内容区域弹性排列
- **AND** 导航栏显示完整文字链接，Logo 尺寸适当放大

#### Scenario: 平板访问（768-1023px）
- **WHEN** 用户使用平板设备访问
- **THEN** 页面宽度自适应，内容两列排列

#### Scenario: 移动端访问（<768px）
- **WHEN** 用户使用手机访问
- **THEN** 保持当前单列布局，所有内容适配小屏

### Requirement: Logo 优化
系统 SHALL 使用矢量格式 Logo 确保缩放清晰度。

#### Scenario: Logo 显示
- **WHEN** 用户在任何设备上查看 Logo
- **THEN** Logo 所有文字内容清晰可辨，整体比例协调
- **AND** 最小宽度不低于 200px（独立展示时），最大宽度不超过容器尺寸的 80%

### Requirement: 团队介绍模块
系统 SHALL 在首页展示公司专业人员信息。

#### Scenario: 团队展示
- **WHEN** 用户浏览首页
- **THEN** 可以看到专业人员介绍卡片，包含头像、姓名、职位、专业领域及简介
- **AND** 卡片在桌面端多列排列，移动端单列排列

### Requirement: 404 页面
系统 SHALL 提供 404 错误页面。

#### Scenario: 访问不存在页面
- **WHEN** 用户访问不存在的 URL
- **THEN** 显示 404 页面，包含品牌标识、错误提示和返回首页链接
- **AND** 页面风格与主站一致，同时作为企业宣传页使用

### Requirement: 微信域名验证
系统 SHALL 提供微信域名验证文件。

#### Scenario: 微信验证
- **WHEN** 微信后台验证域名归属
- **THEN** `https://hjcz.top/e586aa37e20b8594862ae24febc87b0c.txt` 返回内容 `d3dafe8bdf5e35f96bfc55691b6abd081919e81b`

## MODIFIED Requirements

### Requirement: 首页布局
**修改点**: 从纯移动端布局升级为全平台响应式布局。
- `.wrap` 最大宽度从 480px 改为响应式：移动端 480px，桌面端 1200px
- 内容区块间距在桌面端适当放大
- 添加平滑滚动和导航锚点

### Requirement: 导航栏
**修改点**: 全链路验证并修复导航链接。
- 验证 `#services`、`#cases`、`diag.html`、`#contact` 等链接可用性
- 添加悬停和点击交互反馈效果

## REMOVED Requirements
无
