# 首页信息架构重构与全站导航优化 Spec

## Why
当前网站首页承载了过多内容（共 9 个区块，涵盖关于、服务、案例、团队等几乎所有子页面的内容摘要），导致：
- 首页信息密度过高，用户无法快速聚焦核心价值主张
- 与其他子页面的内容大量重复，页面的差异化定位模糊
- 导航栏缺少"专家团队"入口，用户无法直接从导航访问该重要内容
- 存在 cases.html 和 cases-detail.html 两个案例页面，导致用户困惑
- 各页面间的内容分配和跳转逻辑不够清晰

需要参照专业企业服务网站设计规范进行全面重构。

## Current State Analysis

### 首页现有区块（按出现顺序）
| # | 区块 | 内容 | 关联页面 |
|---|------|------|----------|
| 1 | Hero | 品牌标语 + CTA | diag.html |
| 2 | Stats | 4 组统计数字 | - |
| 3 | About 摘要 | 关于灰金简介 + 链接 | about.html |
| 4 | 服务摘要 | 3 张服务卡片 | services.html |
| 5 | 诊断 CTA | 单独的红底推广区 | diag.html |
| 6 | 案例摘要 | 3 张案例卡片 | cases-detail.html |
| 7 | 团队摘要 | 3 位专家卡片 | experts.html |
| 8 | 联系 CTA | 邮件 + 微信 | - |
| 9 | Footer | 导航 + 联系 | - |

### 全站导航现状
`首页 → 关于 → 服务 → 案例 → 诊断(免费)`

### 存在的问题
1. **首页 overloaded**：约 8 个内容区块（不含 footer），其中 about、services、cases、team 四个区块与子页面内容高度重复
2. **导航缺少"专家团队"**：experts.html 存在但无法从导航直接访问
3. **案例页面重复**：cases.html 和 cases-detail.html 并存，导航指向 cases-detail.html，但 cases.html 仍可被访问
4. **诊断 CTA 重复**：Hero 中已有免费诊断 CTA 按钮，但又有一个独立的诊断推广区
5. **信息层级混乱**：About、团队、服务之间没有清晰的关系说明

## What Changes

### 1. 导航栏重构
- 新增"专家团队"导航项，链接到 experts.html
- 导航顺序调整为：**首页 → 关于 → 服务 → 案例 → 专家团队 → 诊断(免费)**
- 在 footer 导航中也同步添加"专家团队"链接

### 2. 首页内容精简
从 9 个区块缩减为 **6 个核心区块**：
- **Hero** — 保持不变（品牌价值 + CTA）
- **Stats** — 保持不变（信任数据）
- **服务概览** — 3 张服务卡片，缩短描述文本，强调"了解详情 →"
- **精选案例** — 从 3 个减为 **1-2 个**精选案例，突出数据成果，强调"查看全部案例 →"
- **团队亮点** — 从 3 位减为 **2 位**核心专家（李景行 + 王少华），强调"查看全部专家 →"
- **底部 CTA** — 合并原来的诊断 CTA 和联系 CTA 为一个统一的行动区域

**移除的区块**：
- About 摘要区块（移到 about.html 独占）
- 独立的诊断 CTA 区块（Hero 中已有 CTA，nav 中已有诊断入口）

### 3. 页面间交互逻辑明确
- **关于我们 (about.html)**：公司介绍 + 核心能力 + 差异化优势 → 底部链接到专家团队
- **服务体系 (services.html)**：三大服务的详细介绍 → 底部链接到诊断工具
- **成功案例 (cases-detail.html)**：完整案例库 → 作为案例的唯一目的地
- **专家团队 (experts.html)**：所有专家详细介绍 → 可从导航和关于页面双向访问
- **诊断 (diag.html)**：交互式诊断工具 → 独立体验

### 4. 消灭冗余页面
- 保留 cases-detail.html 作为案例唯一页面
- 删除或重定向 cases.html

### 5. 信息呈现方式改进
- 首页服务卡片：缩短描述（1-2 行），突出数字/目标
- 案例展示：增加关键数据指标的视觉权重
- 团队卡片：增加一句话介绍，减少纯文本密度

## Impact
- Affected specs: 信息架构、导航系统、页面布局
- Affected code（8 个文件）:
  - `public/index.html` — 大幅重构首页内容结构
  - `public/about.html` — 导航添加团队链接
  - `public/services.html` — 导航添加团队链接
  - `public/cases-detail.html` — 导航添加团队链接
  - `public/experts.html` — 导航高亮团队（新增）
  - `public/diag.html` — 导航添加团队链接
  - `public/404.html` — 导航添加团队链接
  - `public/cases.html` — 考虑删除或重定向

## ADDED Requirements

### Requirement: 导航栏增加"专家团队"
系统 SHALL 在顶部导航栏中增加"专家团队"链接。

#### Scenario: 所有页面导航统一
- **WHEN** 用户在任何页面的导航栏中查看菜单项
- **THEN** 导航栏应包含 6 个链接：首页、关于、服务、案例、专家团队、诊断(免费)
- **AND** 链接顺序与上述一致
- **AND** "诊断"链接保持"免费"徽章

#### Scenario: 专家团队页面高亮
- **WHEN** 用户在 experts.html 页面
- **THEN** 导航栏中"专家团队"链接应标记为 active 状态

### Requirement: Footer 导航同步更新
系统 SHALL 在所有页面的 footer 中也添加"专家团队"链接。

### Requirement: 首页内容精简
系统 SHALL 将首页内容区块从 9 个缩减至 6 个左右。

#### Scenario: 首页加载
- **WHEN** 用户访问首页
- **THEN** 页面内容顺序为：Hero → 统计数据 → 服务概览 → 精选案例 → 团队亮点 → 底部 CTA → Footer
- **AND** 不包含关于摘要区块
- **AND** 不包含独立的诊断 CTA 区块

### Requirement: 案例页面去重
系统 SHALL 消除 cases.html 和 cases-detail.html 的重复。

#### Scenario: 案例访问
- **WHEN** 用户点击导航栏"案例"链接
- **THEN** 应跳转至 cases-detail.html
- **AND** cases.html 应被删除或设置为指向 cases-detail.html 的重定向

### Requirement: 首页团队亮点精简
系统 SHALL 将首页团队展示从 3 位精简为 2 位最具代表性的核心专家。

#### Scenario: 首页团队展示
- **WHEN** 用户浏览首页
- **THEN** 团队区域展示李景行和王少华两位核心专家
- **AND** 每张卡片包含姓名、职务和一句话简介
- **AND** 底部有"查看全部专家 →"链接

## REMOVED Requirements

### Requirement: 首页 About 摘要区块
**Reason**: 关于公司的详细介绍已在 about.html 独占呈现，首页无需重复。
**Migration**: 用户在首页可通过导航栏和 footer 访问关于页面。

### Requirement: 首页独立诊断 CTA 区块
**Reason**: Hero 区域已有"免费诊断"CTA 按钮，导航栏也有"诊断(免费)"入口，重复的 CTA 区块占用首屏空间。
**Migration**: Hero 中的 CTA 和导航中的诊断入口已提供足够的转化路径。
