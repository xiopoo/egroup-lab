# 非首页页面统一化规范

## Why
当前网站非首页页面（about、services、cases-detail、experts、diag）的红色背景区域在CSS实现、HTML结构、文案层级上存在不一致，导致用户在不同页面间切换时视觉体验不连贯。

## What Changes
- 统一所有非首页页面page-hero区域的CSS实现（高度、flex居中、::before装饰圆尺寸、类名）
- 统一page-hero的HTML结构（类名层级、标签层级）
- 统一各页面副标题文案风格和字数
- 补齐diag.html缺失的page-hero区域
- 统一section-header区域（section-label、section-title、section-desc）的文案和结构
- 确保相同类型的文案区块行数一致

## Impact
- Affected specs: 页面视觉规范
- Affected code: public/about.html, public/services.html, public/cases-detail.html, public/experts.html, public/diag.html

## ADDED Requirements
### Requirement: page-hero 统一
系统SHALL为所有非首页页面提供一致的红色渐变背景hero区域。

#### Scenario: 桌面端
- **WHEN** 用户访问非首页页面
- **THEN** page-hero高度为280px，flex居中，::before装饰圆为500px×500px
- **AND** 标题使用 `.page-hero-title` 类，副标题使用 `.page-hero-subtitle` 类

#### Scenario: 移动端
- **WHEN** 页面宽度 < 767px
- **THEN** page-hero高度为220px，标题字号32px，副标题字号15px
- **AND** 无 ::after 装饰元素

## MODIFIED Requirements
### Requirement: about.html page-hero
**修改**：将 `.page-hero h1` → `.page-hero-title`，`.page-hero .tagline` → `.page-hero-subtitle`，::before 500px×500px

### Requirement: services.html page-hero
**修改**：删除 `.page-hero-badge` 标签；page-hero添加 height:280px + flex居中（替代padding方案）；删除 ::after 装饰；::before 改为500px×500px

### Requirement: diag.html page-hero
**新增**：添加 page-hero 区域，标题"企业诊断"、副标题"36道题，3分钟，基于真实经营数据的深度体检"
**新增**：在 diag.html 中添加 page-hero CSS

### Requirement: 文案结构统一
- 所有 page-hero 标题：2~4字，副标题：10~18字
- 所有 section-header 的 section-label：英文大写（如 ABOUT US, OUR SERVICES, SUCCESS CASES, EXPERT TEAM, ONLINE DIAGNOSIS）
- section-title：2~6字中文
- section-desc：10~20字中文

### Requirement: 行数统一
- page-hero 副标题：单行
- section-desc：单行
- 案例卡片描述：单行

## REMOVED Requirements
- 删除 services.html 中的 `.page-hero-badge`（全周期专业服务）
- 删除 services.html 移动端的 `.page-hero::after` 装饰
- 删除 cases-detail.html 和 cases.html 移动端的 `.page-hero::after` 装饰
