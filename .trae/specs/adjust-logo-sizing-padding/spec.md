# 调整Logo尺寸与留白 Spec

## Why
当前导航栏Logo（150px宽）在视觉上过于顶格，与导航栏高度（64px）的比例不协调。需要通过缩小Logo整体比例并在四周增加留白空间，实现更好的视觉平衡。

## What Changes
- 缩小 `.header-logo img` 的宽度尺寸（桌面端从150px缩小至约110-120px）
- 缩小移动端logo尺寸（从130px缩小至约95-105px）
- 在 `.header-logo` 容器上增加 `padding`，特别是上下两端留白
- 确保logo在导航栏中保持垂直居中
- 所有7个HTML页面统一修改

## Impact
- Affected specs: 无直接影响现有spec
- Affected code: 以下7个HTML文件的CSS部分：
  - `public/index.html`
  - `public/services.html`
  - `public/experts.html`
  - `public/diag.html`
  - `public/cases-detail.html`
  - `public/about.html`
  - `public/404.html`

## ADDED Requirements
### Requirement: Logo尺寸缩放
系统SHALL将导航栏Logo的显示尺寸适当缩小。

#### Scenario: 桌面端
- **WHEN** 用户访问任意页面
- **THEN** 导航栏Logo宽度从150px缩小至约110-120px
- **AND** 高度保持自动等比缩放
- **AND** Logo与导航栏顶部/底部之间有明显留白

#### Scenario: 移动端
- **WHEN** 用户在移动设备访问页面
- **THEN** 导航栏Logo宽度从130px缩小至约95-105px
- **AND** 高度保持自动等比缩放
- **AND** Logo与导航栏顶部/底部之间有明显留白

### Requirement: Logo四周留白
系统SHALL在Logo容器四周增加适当的padding空间。

#### Scenario: 视觉平衡
- **WHEN** 页面渲染完成
- **THEN** Logo容器上下padding使logo在导航栏中不触顶触底
- **AND** 左右保持适量的内边距
- **AND** 整体视觉效果协调、专业

## MODIFIED Requirements
无

## REMOVED Requirements
无
