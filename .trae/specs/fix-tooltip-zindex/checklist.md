# 检查清单

## Tooltip背景透明化
- [x] `background:rgba(0,0,0,.75)` 已移除
- [x] `backdrop-filter:blur(8px)` 保留
- [x] 箭头颜色已更新为 `rgba(255,255,255,.4)`

## Tooltip z-index修复
- [x] `z-index:10` → `z-index:15`（高于 `.diagram-core` 的 z-index:10）

## 验证
- [x] 悬停提示不被"企业"遮挡（z-index:15 > diagram-core z-index:10）
- [x] 提示文字可读（backdrop-filter毛玻璃效果保留）
- [x] hover交互正常（opacity切换逻辑未改动）
