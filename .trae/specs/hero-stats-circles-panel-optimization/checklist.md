# 检查清单

## 统计数据可见
- [x] `.hero-inner` grid比例从 `1fr 1.15fr` 改为 `1.3fr 1fr`
- [x] `.stats-in-hero .stat-item .num` 字号从42px增至46px
- [ ] ✅ macOS Safari/Chrome/Firefox首屏4项统计数字完整可见（需手动浏览器确认）

## 同心圆布局
- [x] Layer1 动画速度 35s → 45s（全线同步）
- [x] Layer2 动画速度 30s → 40s（全线同步）
- [x] Layer3 动画速度 25s → 35s（全线同步）
- [x] 弹窗面板位置调整（浮动居中，不挤压stats区域）
- [x] 弹窗样式升级（padding/字号/圆角增大）

## 弹窗自动关闭
- [x] 打开弹窗后5秒自动关闭
- [x] 关闭按钮/外部点击手动关闭正常（保留原逻辑）
- [x] 悬停暂停自动关闭倒计时
- [x] 点击不同节点重置计时器
- [x] 自动关闭有淡出动画（保留原transition:all .35s）
- [x] `window.AUTO_CLOSE_DELAY` 可配置

## 验证
- [x] 桌面端整体布局无破坏
- [x] 弹窗功能代码完整
- [x] 不影响其他页面
