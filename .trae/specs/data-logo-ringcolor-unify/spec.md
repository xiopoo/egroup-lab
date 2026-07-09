# 首页数据更新+Logo替换+圆环条目色彩统一 Spec

## Why
首页存在3个待优化问题：1)净利润修复值需更新为准确数据29.5%；2)Logo需替换为最新品牌定稿文件；3)三个同心圆内条目颜色各不同造成视觉杂乱，需统一每层颜色以增强视觉层次和可读性。

## What Changes

### 1. 数据更新
- 将 `9.7%` 修改为 `29.5%`（统计数据中第4项数值）
- 保持标签"净利润修复峰值"不变，格式对齐

### 2. Logo替换
- 从坚果云"灰金重组"文件夹获取最新 `灰金 logo 定稿透明白色.png`
- 覆盖 `public/images/logo-hjzc-transparent-white.png`
- Logo在导航栏中保持 `width:115px`（桌面端）/ `100px`（移动端）
- Logo容器保持 `padding:8px 12px` 保留留白

### 3. 圆环条目统一背景色
- 移除各节点独立的 `layer-color-1` 至 `layer-color-6` 渐变方案
- 为3个圆环分别定义统一的背景色类：
  - **Layer 1（外环：诊断/重组/破局/重塑）**：统一使用新的 `ring-layer-1-bg` — 半透明青蓝渐变
  - **Layer 2（中环：业务/财务/债务/资产）**：统一使用新的 `ring-layer-2-bg` — 半透明紫绿渐变
  - **Layer 3（内环：价值/秩序/平衡/增长）**：统一使用新的 `ring-layer-3-bg` — 半透明琥珀渐变
- 所有节点背景增加半透明度（`rgba` 或 `opacity`），使同心圆轨道线可透见
- 保持字号、圆角、阴影等尺寸属性不变

## Impact
- Affected code: `public/index.html` 中的HTML元素（圆环条目class引用、统计数据数值）和CSS（layer-color类定义）
- 涉及图片文件：`public/images/logo-hjzc-transparent-white.png`
- 仅影响首页 index.html

## ADDED Requirements
### Requirement: 数据准确性
系统SHALL在首页正确显示29.5%净利润修复值。
- **WHEN** 用户查看首页统计数据
- **THEN** 第4项数值显示为"29.5%"
- **AND** 数字格式与相邻项一致

### Requirement: Logo品牌一致性
系统SHALL使用最新品牌logo文件。
- **WHEN** 用户加载首页
- **THEN** 导航栏显示新的透明背景白色logo
- **AND** Logo上方/下方各有适当留白（padding 8px）

### Requirement: 圆环条目视觉统一
系统SHALL确保每个圆环内所有条目共享同一背景色。
- **WHEN** 用户查看同心圆区域
- **THEN** 同一层的4个条目背景色一致
- **AND** 不同层之间颜色有明显区分
- **AND** 背景半透明，轨道线可透见

## MODIFIED Requirements
### Requirement: 圆环颜色方案
- 移除现有6种独立渐变（layer-color-1至layer-color-6）
- 新增3种层级背景色，每层4个节点共享

## REMOVED Requirements
- 删除 `layer-color-1` 至 `layer-color-6` 的独立渐变定义
