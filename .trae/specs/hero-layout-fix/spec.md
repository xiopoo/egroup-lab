# 首屏布局与团队介绍修复 Spec

## Overview
- **Summary**: 修复首页首屏布局、文本间距和团队介绍三个问题
- **Purpose**: 确保首屏内容完整显示、文本间距紧凑、团队介绍恢复为3人并修正王少华的业务经验
- **Target Users**: 访问网站的所有用户

## Goals
- 修复首屏下方白色背景文本行被截断的问题，确保完整显示在首屏范围内
- 调整页面下方文本行之间的垂直间距，减少过大留白
- 团队介绍恢复为3人，王少华的业务经验修改为10年

## Non-Goals (Out of Scope)
- 不修改其他页面的布局和样式
- 不新增功能或交互

## Background & Context
- 当前团队介绍只有2人（李景行、王少华），需要恢复为3人
- 根据 experts.html，专家包括：李景行、王少华、张明远、陈思涵、王振宇、王淑芬、张志强
- 首屏下方的 stats-section 可能因 hero 高度设置导致被截断

## Functional Requirements
- **FR-1**: 确保首屏内容（包括下方白色背景的 stats-section）完整显示，无截断
- **FR-2**: 调整页面下方文本行之间的垂直间距，使排版更加紧凑
- **FR-3**: 团队介绍从2人恢复为3人，添加张明远
- **FR-4**: 王少华的业务经验从当前描述修改为"10年企业诊断与重组经验"

## Non-Functional Requirements
- **NFR-1**: 页面布局在所有屏幕尺寸下保持一致
- **NFR-2**: 团队介绍卡片布局保持整齐

## Constraints
- **Technical**: 纯 CSS/HTML 修改，不涉及 JavaScript 逻辑变更
- **Dependencies**: 仅修改 `public/index.html`

## Assumptions
- 首屏截断问题与 `.hero-inner` 的 `min-height` 或 padding 设置相关
- 团队介绍新增的第三人应为张明远（首席重组顾问）

## Acceptance Criteria

### AC-1: 首屏无截断
- **Given**: 桌面端视口宽度 ≥1024px
- **When**: 页面加载
- **Then**: 首屏下方白色背景的文本行完整显示，无截断或挤出
- **Verification**: `human-judgment`

### AC-2: 文本间距紧凑
- **Given**: 桌面端视口宽度 ≥1024px
- **When**: 查看页面下方文本布局
- **Then**: 文本行之间垂直间距合理，无明显过大留白
- **Verification**: `human-judgment`

### AC-3: 团队介绍恢复为3人
- **Given**: 访问首页
- **When**: 滚动到团队介绍区域
- **Then**: 显示3个团队成员卡片：李景行、王少华、张明远
- **Verification**: `programmatic`

### AC-4: 王少华业务经验修正
- **Given**: 访问首页团队介绍区域
- **When**: 查看王少华的介绍
- **Then**: 业务经验显示为10年相关描述
- **Verification**: `programmatic`

## Open Questions
- [ ] 文本间距过大具体指哪些元素之间的间距

