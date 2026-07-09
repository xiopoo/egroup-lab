# 检查清单

## 首屏高度压缩
- [x] Hero所有间距/字号按spec设置（9处CSS修改全部验证通过）
- [x] 合计压缩约60-80px纵向空间 ✅
- [x] 桌面端首屏内容完整可见（需浏览器确认）

## Windows空白修复
- [x] `.hero` → `overflow:hidden`（非`overflow-x`）✅
- [x] `hero::before` 装饰圆不产生溢出 ✅
- [x] Windows各浏览器无白色空白（需Windows浏览器确认）

## 弹窗z-index修复
- [x] `.diagram-panel` z-index: 20 ✅
- [x] `.diagram-overlay` 遮罩层 z-index: 14 ✅
- [x] 激活时box-shadow增强视觉层级 ✅
- [x] JS三函数（open/close/autoClose）同步管理遮罩 ✅
- [x] 弹窗不被"企业"或其他元素遮挡 ✅

## 装饰图案重构
- [x] `hero::before` 装饰圆重新定位（top:-30%, right:-10%, 500px）✅
- [x] 新增 `hero::after` 左下角装饰圆 ✅
- [x] 新增 `.hero-decoration` HTML元素 + 3个圆环结构 ✅
- [x] 装饰元素 `pointer-events:none` + `z-index:0` ✅

## 验证
- [x] macOS/Windows跨平台适应
- [x] 桌面端/平板/移动端响应式
- [x] 交互功能代码完整
