# Tasks
- [x] Task 1: 红色背景块宽度压缩
  - `.hero-inner` grid: `1.3fr 1fr` → `1.6fr 0.9fr` ✅
  - `.hero-radial` max-width: `100%` → `90%` ✅

- [x] Task 2: Windows白色空白修复
  - `.hero` 添加 `min-height:100vh;box-sizing:border-box;overflow:hidden` ✅
  - `.hero-inner` 添加 `min-height:calc(100vh - 64px)` ✅

- [x] Task 3: 弹窗z-index修复
  - `.diagram-panel` z-index: `5` → `20` ✅
  - `.diagram-tooltip` z-index: `10` → `15` ✅

- [x] Task 4: 装饰图案设计逻辑重构
  - 移除旧 `.hero::before` 单一大圆形 ✅
  - 新增 `.hero::before` 左上400×400px + `.hero::after` 右下300×300px ✅
  - 设置 `z-index:0` 在内容层之下 ✅

- [x] Task 5: 验证
  - 所有CSS变更代码验证通过 ✅
