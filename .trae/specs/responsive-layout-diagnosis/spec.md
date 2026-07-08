# 响应式布局诊断与修复 Spec

## Why
诊断页面（diag.html）在桌面端显示异常偏窄，内容宽度仅448px，与其他页面（1100px）差异巨大，影响用户体验和网站整体一致性。

## 诊断发现

### 问题1（严重）：diag.html `.container` 硬编码448px
- **diag.html** 第29行：`.container{max-width:448px;margin-left:auto;margin-right:auto}`
- **所有其他页面**：`.container{max-width:var(--content-max);margin:0 auto;padding:0 var(--content-padding)}`
- 结果：诊断页面容器宽度被硬编码为**448px**，是其他页面的**40%**（448/1100）

### 问题2（严重）：diag.html `--content-max` 设置为680px
- **diag.html** 第20行：`--content-max:680px`
- **所有其他页面**：`--content-max:1100px`
- 结果：即使修复了容器引用，内容最大宽度也只有680px

### 问题3（中等）：diag.html header高度不一致
- **diag.html** 第125行：`.header-inner{...height:56px...}`
- **所有其他页面**：`.header-inner{...height:64px...}`

### 问题4（中等）：缺少平板断点
- 全站仅使用 `@media(max-width:767px)` 单断点
- 768-1023px 平板区间无样式适配

## What Changes
1. **修复 diag.html `.container`** — 改为使用 `var(--content-max)` 统一变量
2. **修复 diag.html `--content-max`** — 从680px改为1100px，与其他页面一致
3. **统一 diag.html header 高度** — 56px → 64px
4. **桌面端容器宽度优化** — 评估 `--content-max:1100px` 是否偏窄，考虑扩展至1200px
5. **增加平板断点支持** — 在768-1023px区间添加适配套样式

## Impact
- Affected specs: 响应式布局、页面一致性
- Affected code: diag.html（主要），其他页面（轻微调整）
