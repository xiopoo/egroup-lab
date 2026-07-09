# Hero区域统计数据显示、同心圆布局优化与弹窗自动关闭 Spec

## Why
当前首页hero区域存在三个问题：1) macOS下"128+ 企业完成诊断"等统计数字被同心圆区域挤压导致首屏不可见；2) 同心圆节点（12个文本块）在旋转轨道上布局杂乱，信息层次不清；3) 点击节点弹出的详情面板只能手动关闭，缺乏自动关闭机制，用户体验不佳。

## What Changes

### 1. 统计数据显示优化
- 调整 `.hero-inner` grid比例：从 `1fr 1.15fr`（右宽左窄）改为 `1.3fr 1fr`（左宽右窄），为左侧文本区和底部stats-in-hero提供更多空间
- 增大 `.stats-in-hero` 中数字`font-size`从42px至46-48px，弥补缩小右列后的视觉损失
- 确保macOS Safari/Chrome/Firefox下4个统计数据在首屏完整可见

### 2. 同心圆布局重构
- 降低旋转速度（从35s/30s/25s → 45s/40s/35s），减少视觉眩晕感
- 节点文字块采用更清晰的层级颜色编码（Layer1高饱和 → Layer3柔和）
- 弹窗面板（`.diagram-panel`）位置从 `top:calc(100% + 16px)`（容器底部外部）改为浮层居中或固定于容器右下角，避免挤压stats空间
- 弹窗样式统一升级：加宽内边距、增大字体、添加图标

### 3. 弹窗自动关闭机制
- 弹窗打开后5秒自动关闭（默认，可通过 `window.AUTO_CLOSE_DELAY` 配置）
- 保留现有交互关闭方式（点击关闭按钮 ×、点击遮罩/外部区域、再次点击同一节点）
- 鼠标悬停（hover）弹窗时暂停自动关闭倒计时
- 自动关闭时添加淡出动画
- 点击不同节点时重置自动关闭计时器

## Impact
- Affected code: `public/index.html` 中的CSS（hero-inner grid, stats-in-hero字号, diagram-panel位置, sphere-layer动画速度）和JS（openDiagramPanel/closeDiagramPanel函数、自动关闭逻辑）
- 仅影响首页index.html
- 不改变HTML结构，仅修改CSS属性值和JS逻辑

## ADDED Requirements
### Requirement: 统计数据完整可见
系统SHALL确保所有4个统计数字在macOS主流浏览器首屏完整显示。

#### Scenario: macOS非全屏浏览器
- **WHEN** 用户在macOS设备上以非全屏窗口访问首页
- **THEN** "128+ 企业完成诊断"、"2.2亿 单案最大债务化解"、"550+ 稳定就业岗位"、"9.7% 净利润修复峰值"在首屏内完整可见
- **AND** 文本不换行、不截断

### Requirement: 同心圆信息层级清晰
系统SHALL保持三层轨道节点的可辨识度和视觉秩序。

#### Scenario: 桌面端显示
- **WHEN** 页面加载后
- **THEN** 三层轨道节点（Layer1-3）颜色和大小有明显梯度区分
- **AND** 旋转动画流畅不眩晕
- **AND** 弹窗面板不覆盖或挤压其他关键内容

### Requirement: 弹窗自动关闭
系统SHALL在弹窗打开后自动关闭。

#### Scenario: 弹窗自动关闭
- **WHEN** 用户点击节点打开详情弹窗
- **THEN** 弹窗在5秒后自动关闭（带淡出动画）
- **AND** 自动关闭倒计时可配置（`window.AUTO_CLOSE_DELAY`）
- **AND** 鼠标悬停弹窗时暂停倒计时

#### Scenario: 弹窗手动关闭
- **WHEN** 用户打开弹窗后点击 × 按钮或外部区域
- **THEN** 弹窗立即关闭，取消自动关闭计时器

## MODIFIED Requirements
无

## REMOVED Requirements
无
