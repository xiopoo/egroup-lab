# 检查清单

## 色彩系统
- [x] CSS变量新增（--bg-warm, --brand-subtle, --brand-glow）
- [x] 白色区域改为暖白/浅灰替代纯白（stats→#fafafa）
- [x] 浅灰区域改为更协调的暖灰色（about/cases/contact→--bg-warm）

## 视觉层次
- [x] 卡片默认带轻微阴影（service/case/team 均加 --shadow-sm）
- [x] 分隔线元素在各section之间（3处HTML+1处CSS）
- [x] 阴影层级合理（默认sm→hover md/lg）

## 元素多样化
- [x] 背景装饰图形添加（2个section加.bg-decor圆）
- [x] 区域分隔装饰（3处section-divider）
- [x] contact + about section添加极浅品牌色渐变
- [x] section-label下方装饰横线

## 排版
- [x] section-title字间距调优（-.02em）margin-bottom 8→12px
- [x] section-desc颜色加深（text-muted→text-secondary）
- [x] 行高/字间距统一

## 交互
- [x] 卡片hover效果增强（service -4→-6px, case -6→-8px, team -4→-6px）
- [x] 过渡动画统一（transition:all var(--transition)）

## 验证
- [x] 无CSS语法错误
- [x] 桌面/移动端显示正常
- [x] 装饰不干扰内容（pointer-events:none + z-index:0）
