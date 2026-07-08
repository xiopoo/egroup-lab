# macOS 底部留白适配 Spec

## Why
在 macOS 系统浏览器全屏显示时，网页底部内容（footer）紧贴屏幕下边缘，无有效留白。原因：
1. macOS 菜单栏占用顶部视口，但底部无类似 Windows 任务栏的天然视觉缓冲
2. Footer 当前底部 padding 仅 30px（桌面端）/ 24px（移动端），不足以在 macOS 全屏下产生舒适留白
3. 缺少 `env(safe-area-inset-bottom)` 兜底

## What Changes
- 6 个页面（index、services、about、cases-detail、experts、404）的 `.footer` 桌面端底部 padding 从 30px → 48px
- 6 个页面的 `.footer` 移动端底部 padding 从 24px → 36px
- 所有修改均增加 `env(safe-area-inset-bottom)` 以兼容带安全区域的设备

## Impact
- Affected code: `public/index.html`, `public/services.html`, `public/about.html`, `public/cases-detail.html`, `public/experts.html`, `public/404.html`
- 交互无影响，仅视觉留白调整

## ADDED Requirements

### Requirement: macOS 底部留白
系统 SHALL 在所有页面底部提供跨平台一致的视觉留白。

#### Scenario: 桌面端（≥1024px）
- **WHEN** 用户在 macOS 设备全屏浏览任何页面
- **THEN** 页面底部 footer 与屏幕下边缘保持 ≥48px 的留白距离
- **AND** 视觉效果与 Windows 系统一致，无紧贴感

#### Scenario: 移动端（≤767px）
- **WHEN** 用户在移动设备浏览任何页面
- **THEN** 页面底部 footer 与屏幕下边缘保持 ≥36px + safe-area-inset-bottom 的留白距离
