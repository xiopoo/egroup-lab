# 任务列表

## [x] Task 1: 替换 CSS（移除旧星系图样式，新增同心圆关系图样式）
- **Priority**: high
- **Depends On**: None
- **Description**:
  - 移除旧规则：`.cosmic-core`、`.cosmic-core-line1/2`、`.cosmic-ring-wrap`、`.cosmic-ring-wrap-1/2/3`、`.cosmic-ring-line`、`.cosmic-dot`、`.cosmic-inner-node`、`.cosmic-outer-node`、`@keyframes cosmic-spin-cw`、`@keyframes cosmic-spin-ccw`、`@keyframes cosmic-pulse`
  - 新增核心企业：`.diagram-core`（白色半透明 + 白边框 + 发光呼吸）
  - 新增内轨道环：`.diagram-ring-inner`（虚线 + 30s 旋转）
  - 新增外轨道环：`.diagram-ring-outer`（虚线 + 40s 反向旋转）
  - 新增内节点×3：`.diagram-node-inner`（各自独立渐变色）
  - 新增外节点×3：`.diagram-node-outer`（白色半透明圆角矩形 + blur）
  - 新增连接线 SVG：从核心到各节点的关联线条
  - 新增 tooltip 样式：`.diagram-tooltip`
  - 新增展开面板样式：`.diagram-panel`
  - 新增动效 @keyframes：`diagram-fade-in`、`diagram-ring-spin-cw`、`diagram-ring-spin-ccw`、`diagram-float`、`diagram-line-flow`
- **Acceptance Criteria Addressed**: AC-1, AC-2, AC-3
- **Test Requirements**:
  - `programmatic` TR-1.1: 旧星系图 CSS 规则全部移除，无 `.cosmic-*` 类残留
  - `programmatic` TR-1.2: 新增 `.diagram-core`、`.diagram-node-inner`、`.diagram-node-outer` 等规则存在
  - `programmatic` TR-1.3: 内外轨道环旋转方向相反、速度不同

## [x] Task 2: 替换 HTML（移除旧星系图结构，插入同心圆关系图结构）
- **Priority**: high
- **Depends On**: Task 1
- **Description**:
  - 移除 `.cosmic-core`、`.cosmic-ring-wrap-1/2/3`、`.cosmic-ring-line`、`.cosmic-dot`、`.cosmic-inner-node`、`.cosmic-outer-node`
  - 插入：核心"企业" + 2层轨道 + 3内节点 + 3外节点 + SVG 关联线条 + tooltip 模板
- **Acceptance Criteria Addressed**: AC-1, AC-4, AC-5
- **Test Requirements**:
  - `programmatic` TR-2.1: HTML 中包含核心"企业"文字
  - `programmatic` TR-2.2: 内节点文字为"业务·财务·债务"
  - `programmatic` TR-2.3: 外节点文字为"资产重组·债务重组·业务重组"
  - `programmatic` TR-2.4: 存在从中心到各节点的 SVG 连接线

## [ ] Task 3: 实现交互功能（悬停 tooltip + 点击展开详情）
- **Priority**: high
- **Depends On**: Task 2
- **Description**:
  - 使用 CSS `:hover` + 过渡实现悬停放大效果
  - 使用 CSS `::after` 伪元素或绝对定位实现 tooltip
  - 添加内联 JS 实现点击展开/关闭详情面板
  - 为每个节点预设说明文案数据
- **Acceptance Criteria Addressed**: AC-2, AC-3
- **Test Requirements**:
  - `human-judgment` TR-3.1: 悬停节点时显示 tooltip 说明文字
  - `human-judgment` TR-3.2: 悬停时节点放大至 1.1x
  - `programmatic` TR-3.3: 点击节点切换详情面板的显示/隐藏
  - `programmatic` TR-3.4: 详情面板包含对应的说明文字

## [x] Task 4: 验证
- **Priority**: medium
- **Depends On**: Task 1, Task 2, Task 3
- **Description**:
  - 桌面端完整显示同心圆双圈结构
  - 核心"企业"文字正确
  - 内节点显示"业务·财务·债务"，外节点显示"资产重组·债务重组·业务重组"
  - 内外轨道不同速度/方向旋转
  - 悬停 tooltip 和点击展开正常工作
  - 移动端隐藏
  - 加载动画流畅
- **Acceptance Criteria Addressed**: AC-1, AC-2, AC-3, AC-4, AC-5
- **Test Requirements**:
  - `programmatic` TR-4.1: 桌面端所有节点和轨道可见
  - `human-judgment` TR-4.2: 动画流畅无卡顿
  - `programmatic` TR-4.3: 移动端 `.hero-visual { display:none }`

# Task Dependencies
- [Task 1] 无依赖
- [Task 2] 依赖 [Task 1]
- [Task 3] 依赖 [Task 2]
- [Task 4] 依赖 [Task 1, Task 2, Task 3]
