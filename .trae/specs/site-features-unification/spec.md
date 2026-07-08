# 网站功能统一优化 Spec

## Why
网站专家团队信息不统一（首页与详情页人名不匹配），成功案例缺少独立详情页，咨询交互方式不够完善。需要系统性地统一和优化这三个功能模块，提升网站专业性和用户体验。

## What Changes
- 专家信息统一管理：新增 `experts.html` 专家团队详情页，完整展示6位专家信息
- 首页专家区精简：首页仅显示3位专家，点击"查看全部"进入 `experts.html`
- 咨询交互优化：保留二维码弹出交互，同时在下方显示"如果扫不到可以联系微信：igrape"提示
- 成功案例独立页：新增 `cases-detail.html` 成功案例详情页，完整展示6个案例
- 首页案例区保持3个案例，点击进入 `cases-detail.html`
- 所有页面页脚统一为 `© 2026 灰金重组`

## Impact
- Affected specs: 网站前端架构
- Affected code: `public/index.html`, `public/experts.html` (新), `public/cases-detail.html` (新), `public/cases.html`, `public/diag.html`, `public/404.html`, `public/intro.html`, `public/about.html`

## ADDED Requirements

### Requirement: 专家团队详情页
系统 SHALL 提供独立的专家团队详情页面，完整展示全部6位专家信息。

#### Scenario: 访问专家详情页
- **WHEN** 用户点击首页"专家团队"区域的"查看全部"链接
- **THEN** 跳转到 `experts.html` 页面
- **AND** 展示全部6位专家信息（姓名、职称、领域、简介、头像）
- **AND** 页面风格与主站一致

### Requirement: 首页专家展示
系统 SHALL 在首页展示部分专家信息，点击后可查看完整团队。

#### Scenario: 首页专家展示
- **WHEN** 用户浏览首页"专家团队"区域
- **THEN** 仅展示3位专家卡片
- **AND** 底部显示"查看全部专家 →"链接
- **WHEN** 用户点击"查看全部专家 →"
- **THEN** 跳转至 `experts.html`

### Requirement: 成功案例详情页
系统 SHALL 提供独立的成功案例详情页面，完整展示全部6个案例。

#### Scenario: 访问案例详情页
- **WHEN** 用户点击首页"成功案例"区域的"查看全部"链接
- **THEN** 跳转到 `cases-detail.html` 页面
- **AND** 展示全部6个案例（案例名称、行业、痛点、方案、成效）
- **AND** 页面风格与主站一致

### Requirement: 首页案例展示
系统 SHALL 在首页展示部分案例，点击后可查看全部案例。

#### Scenario: 首页案例展示
- **WHEN** 用户浏览首页"成功案例"区域
- **THEN** 仅展示3个案例卡片
- **AND** 底部显示"查看更多案例 →"链接
- **WHEN** 用户点击"查看更多案例 →"
- **THEN** 跳转至 `cases-detail.html`

### Requirement: 咨询交互优化
系统 SHALL 同时提供邮件咨询和微信扫码咨询两种方式。

#### Scenario: 咨询入口展示
- **WHEN** 用户点击"联系咨询"按钮
- **THEN** 触发邮件客户端（mailto:lucasa@agent.qq.com）
- **WHEN** 用户点击"扫码咨询"区域
- **THEN** 弹出微信二维码大图
- **AND** 二维码下方显示"如果扫不到可以联系微信：igrape"提示文字

## MODIFIED Requirements

### Requirement: 页脚统一
**修改点**: 确保所有页面页脚内容完全一致。
- 统一格式为 `© 2026 灰金重组`
- 删除各页面差异化的页脚内容（如"灰金重组整理"、"联系邮箱"等）

## REMOVED Requirements
无
