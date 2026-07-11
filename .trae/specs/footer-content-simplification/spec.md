# 网站页脚内容精简优化 - 需求文档

## Overview
- **Summary**: 对网站所有页面的footer区域进行内容精简，移除重复信息，仅保留核心必要内容（版权声明、联系方式）
- **Purpose**: 解决当前footer存在大量与导航栏和首屏内容重复的信息，导致视觉冗余和用户认知负担
- **Target Users**: 网站所有访问用户（桌面端和移动端）

## Goals
- 识别并移除footer中的重复信息
- 仅保留核心必要内容：版权声明、联系方式
- 保持窄版紧凑布局
- 确保用户体验不受影响，重要功能仍可便捷获取

## Non-Goals (Out of Scope)
- 修改footer背景色、字体颜色等主题风格
- 添加新的功能或内容模块
- 修改导航栏样式

## 重复信息分析

当前footer的3列内容分析：

| footer列 | 包含内容 | 是否重复 | 重复位置 |
|----------|---------|---------|---------|
| 品牌信息 | Logo图片 | ✅ 重复 | 导航栏已有logo |
| 品牌信息 | "灰金重组" 名称 | ✅ 重复 | 导航栏已有品牌名 |
| 品牌信息 | "看清问题·重建秩序" 标语 | ✅ 重复 | 首屏Hero区域已展示 |
| 快速导航 | 6个导航链接 | ✅ 重复 | 顶部导航栏完全相同 |
| 联系方式 | "专注：企业困境诊断与重组" | ✅ 重复 | 首屏描述已说明 |
| 联系方式 | "理念：看清问题，重建秩序" | ✅ 重复 | 等同于标语，已重复 |
| 联系方式 | 邮箱 lucasa@agent.qq.com | ❌ 唯一 | 仅在footer中 |
| 版权声明 | © 2026 灰金重组 | ❌ 唯一 | 仅在footer中 |

## Functional Requirements
- **FR-1**: 移除footer中的品牌信息列（logo、名称、标语）
- **FR-2**: 移除footer中的"快速导航"列（6个导航链接）
- **FR-3**: 精简"联系方式"列，仅保留邮箱地址
- **FR-4**: 保留版权声明
- **FR-5**: 桌面端采用一行居中的简约布局，邮箱 + 分隔符 + 版权
- **FR-6**: 移动端采用两行居中布局

## Non-Functional Requirements
- **NFR-1**: 保持窄版紧凑样式（padding与当前一致）
- **NFR-2**: 桌面端和移动端均能清晰显示
- **NFR-3**: 所有页面footer保持一致

## Acceptance Criteria

### AC-1: 桌面端简约展示
- **Given**: 用户在桌面端（≥768px）访问网站
- **When**: 页面加载完成后查看footer区域
- **Then**: footer仅显示邮箱和版权信息，无重复内容
- **Verification**: `human-judgment`

### AC-2: 移动端简约展示
- **Given**: 用户在移动端（<768px）访问网站
- **When**: 页面加载完成后查看footer区域
- **Then**: footer采用两行居中对齐，内容完整可读
- **Verification**: `human-judgment`

### AC-3: 信息完整性
- **Given**: 用户查看任意页面的footer
- **When**: 浏览footer所有内容
- **Then**: 版权声明和邮箱联系方式完整显示
- **Verification**: `human-judgment`

### AC-4: 所有页面一致性
- **Given**: 用户浏览网站的不同页面
- **When**: 查看各页面底部footer
- **Then**: 所有页面的footer内容和样式保持一致
- **Verification**: `human-judgment`
