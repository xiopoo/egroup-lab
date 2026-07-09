# 移动端导航栏Hamburger菜单适配 Spec

## Why
当前网站导航栏在移动端（≤767px）采用水平flex布局显示全部6个导航链接（首页、关于、服务、案例、专家团队、诊断(免费)），在320-480px屏幕宽度下导航链接严重溢出/变形，触控区域过小，用户体验差。需引入汉堡菜单（hamburger menu）折叠机制，实现移动端导航栏的自适应显示。

## What Changes
- 在移动端（≤767px）引入汉堡菜单按钮（toggle button），初始状态仅显示logo和汉堡图标
- 点击汉堡图标时展开/收起导航菜单，菜单以垂直列表形式从顶部或侧边滑入
- 导航链接字体大小调整至至少16px以满足移动端触控最佳实践
- 菜单项触控区域至少44px高度（Apple HIG标准）
- 菜单展开时背景半透明遮罩层，点击遮罩层或菜单项后收起菜单
- 添加过渡动画（slide/fade）
- 所有9个HTML页面统一修改（index, services, experts, diag, cases-detail, about, 404, intro, etc.）

## Impact
- Affected code: 所有页面的HTML结构（header区域）和CSS（移动端断点）
- HTML结构：每个页面header内新增汉堡菜单按钮HTML，以及移动端菜单容器
- CSS：新增移动端菜单相关CSS规则
- JS：新增简单的菜单 toggle 交互脚本
- 桌面端（≥768px）不受影响，保持现有水平导航布局

## ADDED Requirements
### Requirement: 汉堡菜单按钮
系统SHALL在移动端显示汉堡菜单按钮。

#### Scenario: 移动端页面加载
- **WHEN** 用户在移动设备（≤767px）访问任意页面
- **THEN** 导航栏仅显示logo和汉堡菜单按钮
- **AND** 汉堡按钮包含三条横线图标（☰）
- **AND** 按钮触控区域不小于44×44px
- **AND** 按钮在导航栏中右对齐

### Requirement: 菜单展开/收起交互
系统SHALL支持点击汉堡按钮展开/收起导航菜单。

#### Scenario: 点击汉堡按钮
- **WHEN** 用户点击汉堡按钮
- **THEN** 导航菜单以垂直列表形式展开
- **AND** 汉堡图标变为关闭图标（✕）
- **AND** 菜单带有平滑过渡动画（slide down / fade in）
- **AND** 背景显示半透明遮罩层

#### Scenario: 关闭菜单
- **WHEN** 用户点击关闭按钮或遮罩层
- **THEN** 导航菜单收起
- **AND** 汉堡图标恢复为三条横线

#### Scenario: 点击导航链接
- **WHEN** 用户点击任一导航链接
- **THEN** 页面导航至目标页
- **AND** 菜单自动收起

### Requirement: 移动端导航触控优化
系统SHALL确保移动端导航链接易于触控。

#### Scenario: 菜单展开
- **WHEN** 菜单展开后
- **THEN** 每个导航链接高度不小于44px
- **AND** 导航链接字体不小于16px
- **AND** 链接之间有视觉分隔
- **AND** 当前页面链接有高亮状态

## MODIFIED Requirements
无

## REMOVED Requirements
无
