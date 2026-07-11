# 联系方式统一与页脚重构 - 需求文档

## Overview

- **Summary**: 统一网站联系方式规范（仅保留一个邮箱位置），重构页脚为深色长条设计（左logo、右邮箱+导航），全站统一
- **Purpose**: 解决邮箱展示位置冗余、页脚过窄且各页不一致的问题，提升专业性和视觉一致性

## Goals

- 全站邮箱仅保留在footer一个位置
- 首页和服务页的"联系咨询"按钮改为微信弹窗，"扫码咨询"按钮移除
- 页脚改为舒展的深色长条设计（左logo + 右邮箱+导航链接）
- 所有页面页脚统一

## Non-Goals (Out of Scope)

- 修改导航栏样式或内容
- 修改页面主体内容
- 添加新的功能模块
- 修改颜色变量等主题系统

## Background & Context

- 当前邮箱出现在两个位置：footer和Contact CTA按钮(mailto链接)
- 首页和服务页的Contact CTA区有"联系咨询"(mailto)和"扫码咨询"(WeChat)两个按钮，功能重叠
- 当前footer为超窄单行设计（仅邮箱+版权），高度约45px
- 用户希望页脚更舒展，恢复深色背景搭配logo、导航和联系信息

## 当前状态分析

### Email位置

| 页面            | 位置                      | 操作           |
| ------------- | ----------------------- | ------------ |
| 所有7页          | footer `.footer-email`  | ✅ 保留（唯一指定位置） |
| index.html    | Contact CTA `mailto` 按钮 | ❌ 改为微信弹窗     |
| services.html | Contact CTA `mailto` 按钮 | ❌ 改为微信弹窗     |

### Contact CTA区（index.html + services.html）

| 当前元素            | 操作          |
| --------------- | ----------- |
| "联系咨询" (mailto) | 改为点击弹出微信二维码 |
| "扫码咨询" (WeChat) | 移除（功能重复）    |

### Footer设计

| 元素      | 当前           | 改为                 |
| ------- | ------------ | ------------------ |
| padding | `12px 0 8px` | `28px 0 20px`      |
| 布局      | 单行居中         | flex左logo + 右邮箱+导航 |
| logo    | 无            | 左侧显示logo           |
| 导航      | 无            | 精简导航链接             |
| 版权      | 居中           | 底部居中               |

## Functional Requirements

- **FR-1**: Contact CTA区"联系咨询"按钮改为点击弹出微信二维码
- **FR-2**: Contact CTA区移除"扫码咨询"按钮
- **FR-3**: Footer改为flex布局，左侧logo + 右区域(邮箱+导航链接)
- **FR-4**: Footer底部居中显示版权声明
- **FR-5**: 移动端footer改为两行布局（上：logo+导航，下：邮箱+版权）
- **FR-6**: 全站7个页面footer完全一致

## Non-Functional Requirements

- **NFR-1**: 保持深色背景样式
- **NFR-2**: 桌面端footer高度约80-100px
- **NFR-3**: 响应式适配正常

## Acceptance Criteria

### AC-1: CTA按钮改为微信弹窗

- **Given**: 用户点击"联系咨询"按钮
- **When**: 点击操作触发
- **Then**: 弹出微信二维码弹窗，不再跳转邮箱
- **Verification**: `human-judgment`

### AC-2: CTA区无重复功能

- **Given**: 用户访问首页或服务页底部CTA区
- **Then**: 仅有"联系咨询"按钮，无"扫码咨询"按钮
- **Verification**: `human-judgment`

### AC-3: Footer左侧logo

- **Given**: 用户查看任意页面footer
- **Then**: footer左侧显示logo图片
- **Verification**: `human-judgment`

### AC-4: Footer右侧邮件+导航

- **Given**: 用户查看任意页面footer
- **Then**: 右侧区域显示邮箱和精简导航链接
- **Verification**: `human-judgment`

### AC-5: 所有页面footer一致

- **Given**: 用户浏览不同页面
- **When**: 查看各页面底部
- **Then**: 所有页面footer内容和样式一致
- **Verification**: `human-judgment`

### AC-6: 全站仅一个邮箱位置

- **Given**: 用户浏览全站
- **Then**: 邮箱仅出现在footer中，首页和服务页的CTA按钮不再是mailto
- **Verification**: `human-judgment`

## Open Questions

- [x] 导航链接选择哪些？建议保留"首页/关于/服务/案例/专家/诊断"6个精简链接

