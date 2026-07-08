# 任务列表

## [ ] Task 1: 调整 CSS（核心尺寸/轨道宽度/发光/节点尺寸）
- **Priority**: high
- **Depends On**: None
- **Description**:
  - `.diagram-core`：width 24%→32%，font-size 22px→28px，border 2px→3px，box-shadow 增强+品牌色叠加
  - `.diagram-ring-inner-wrap`：width 48%→44%，边框透明度 .18→.22
  - `.diagram-ring-outer-wrap`：width 76%→68%，边框透明度 .12→.16
  - `.diagram-node-inner`：width 80px→82px，height 36px→38px
  - `.diagram-node-outer`：width 96px→100px，height 40px→42px
  - `.diagram-svg line`：stroke 透明度 .2→.3
  - `@keyframes diagram-core-pulse`：发光强度提升
- **Test Requirements**:
  - `programmatic` TR-1.1: `.diagram-core` 的 width 值为 32%
  - `programmatic` TR-1.2: `.diagram-ring-inner-wrap` 的 width 值为 44%
  - `programmatic` TR-1.3: `.diagram-ring-outer-wrap` 的 width 值为 68%

## [ ] Task 2: 调整 HTML（核心内容/节点位置/SVG坐标）
- **Priority**: high
- **Depends On**: Task 1
- **Description**:
  - 核心节点：在"企业"下方增加"灰金重组"小字（`<span>灰金重组</span>`，font-size:11px, opacity:.7）
  - 更新 3 个内节点的 left/top 内联样式（半径 22%）
  - 更新 3 个外节点的 left/top 内联样式（半径 34%）
  - 更新 SVG 6 条 line 的坐标
- **Test Requirements**:
  - `programmatic` TR-2.1: 核心元素中包含"灰金重组"文字
  - `programmatic` TR-2.2: 内节点坐标使用 22% 计算
  - `programmatic` TR-2.3: 外节点坐标使用 34% 计算

## [ ] Task 3: 验证
- **Priority**: medium
- **Depends On**: Task 1, Task 2
- **Description**:
  - 核心"企业"32%尺寸 + "灰金重组"品牌文字
  - 内外轨道 44%/68%
  - 6 个节点位置正确
  - SVG 连接线坐标匹配新位置
  - 悬停/点击交互仍正常
  - 移动端隐藏不变
- **Test Requirements**:
  - `programmatic` TR-3.1: 所有 CSS 尺寸值正确
  - `human-judgment` TR-3.2: 企业核心视觉上成为焦点
  - `programmatic` TR-3.3: 交互功能（tooltip + 点击面板）不受影响

# Task Dependencies
- [Task 1] 无依赖
- [Task 2] 依赖 [Task 1]
- [Task 3] 依赖 [Task 1, Task 2]
