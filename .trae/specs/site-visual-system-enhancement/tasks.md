# Tasks
- [ ] Task 1: 色彩系统增强 — CSS变量 + section背景
  - 新增CSS变量：`--bg-warm:#f5f3f0`、`--brand-subtle:rgba(171,25,66,.04)`、`--brand-glow:rgba(171,25,66,.06)`
  - 白色背景区域（services section、team section）改为 `#fafafa` 替代纯白
  - 浅灰区域（about、cases、contact）改为 `var(--bg-warm)` 暖灰色

- [ ] Task 2: 视觉层次增强 — 阴影 + 卡片
  - `.service-card` 默认添加 `box-shadow:var(--shadow-sm)`（之前hover才有）
  - `.case-card` 默认添加 `box-shadow:var(--shadow-sm)` 
  - `.team-card` 默认添加 `box-shadow:var(--shadow-sm)`
  - 新增 `.section-divider` 分隔线元素（上下区域间的装饰分隔）
  - 在每个section之间的白色间隙区域添加轻微分隔线或过渡

- [ ] Task 3: 元素多样化 — 装饰图形 + 纹理
  - Services区域添加微妙的 `.bg-brand-pattern` 装饰（右上角透明品牌色圆形装饰）
  - 每个section顶部添加 `.section-decoration` 装饰元素（极小圆点或品牌色短横线）
  - Contact区域添加背景渐变或浅色纹理

- [ ] Task 4: 排版优化 — 字体层级微调
  - `.section-title` 行高和字间距微调，添加下方的装饰分隔
  - `.section-desc` 颜色加深（`var(--text-secondary)`替代`var(--text-muted)`），行高微调
  - 为重要数字和数据添加品牌色强调块（`.highlight-number`或扩展现有样式）
  - 全局 `p` 标签行高统一为 `1.8`，确保一致性

- [ ] Task 5: 交互体验提升 — 悬停 + 过渡
  - 现有卡片 hover 效果保留并微调（提升translateY幅度 4px→6px）
  - 添加 `scroll-trigger` 或 `fade-in` 动画类（可选，留到后续实现）
  - 确认所有过渡动画使用统一的 `--transition` 时间

- [ ] Task 6: 验证
  - 确认无CSS语法错误
  - 确认各section背景色区分明显
  - 确认卡片阴影在桌面/移动端均正常
  - 确认装饰元素不影响内容可读性

# Task Dependencies
- [Task 1]为基础，[Task 2]和[Task 3]可在其之上进行
- [Task 4]和[Task 5]相对独立
- [Task 6]依赖所有前置任务
