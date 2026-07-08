# 任务列表

- [x] Task 1: 替换 CSS（移除旧辐轮样式，新增星系图样式）
  - 移除旧规则：`.radial-center`、`.radial-node`、`.radial-node-1/2/3`、`.radial-orbit-wrap`、`.radial-orbit`、`radial-float`、`radial-breathe`、`radial-line-flow`、`.radial-svg line`
  - 新增核心太阳：`.cosmic-core`（金色渐变+发光呼吸+2行文字）
  - 新增内轨道环：`.cosmic-ring-inner`（虚线+20s旋转）
  - 新增外轨道环：`.cosmic-ring-outer`（点线+25s反向旋转）
  - 新增最外环：`.cosmic-ring-edge`（极淡虚线）
  - 新增内节点×3：`.cosmic-inner-node`（青蓝色胶囊形）
  - 新增外节点×3：`.cosmic-outer-node`（白色半透明圆角矩形）
  - 新增游走点：`.cosmic-dot`（沿轨道运动的发光点）
  - 新增动效 @keyframes：`cosmic-spin-cw`、`cosmic-spin-ccw`、`cosmic-pulse`、`cosmic-orbit`

- [x] Task 2: 替换 HTML（移除旧辐轮结构，插入星系图结构）
  - 移除 `.radial-center`、`.radial-node-1/2/3`、`.radial-orbit-wrap`、SVG lines
  - 插入：核心太阳 + 3层轨道 + 3内节点 + 3外节点 + 2个游走点

- [x] Task 3: 验证
  - 桌面端三层轨道可见
  - 核心"困境重组·与诊断"文字正确
  - 内节点显示"资产·债务·运营"
  - 外节点显示"资产重组·债务重组·业务重整"
  - 轨道动态旋转
  - 移动端隐藏
