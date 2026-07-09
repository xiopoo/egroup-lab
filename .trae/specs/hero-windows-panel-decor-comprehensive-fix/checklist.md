# 检查清单

## 红色背景块宽度压缩
- [x] `.hero-inner` grid比例从 `1.3fr 1fr` 改为 `1.6fr 0.9fr`
- [x] `.hero-radial` max-width 从 `100%` 改为 `90%`
- [x] 桌面端左右比例协调，文本区不受影响

## Windows空白修复
- [x] `.hero` 添加 `min-height:100vh;box-sizing:border-box;overflow:hidden`
- [x] `.hero-inner` 添加 `min-height:calc(100vh - 64px)`
- [ ] Windows下 Chrome/Edge/Firefox 首屏无白色空白（需实际测试）

## 弹窗层级修复
- [x] `.diagram-panel` z-index: 5 → 20
- [x] `.diagram-tooltip` z-index: 10 → 15
- [ ] 点击节点后面板在"企业"等所有元素之上（需浏览器测试）

## 装饰图案重构
- [x] 移除旧的 `.hero::before` 单一大圆形
- [x] 新增 `.hero::before`（左上 400×400px）
- [x] 新增 `.hero::after`（右下 300×300px）
- [x] 装饰元素 z-index:0 在内容层之下

## 验证
- [x] 桌面端整体布局不破坏
- [x] 响应式下正确
