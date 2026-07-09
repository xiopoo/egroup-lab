# Hero区域综合修复：红色背景宽度压缩、Windows空白修复、弹窗层级修复、装饰逻辑重构 Spec

## Why
当前首页hero区域存在4个问题：1)右侧同心圆红色背景块仍然偏宽，挤压左侧文本区；2)Windows操作系统下首屏底部出现白色空白区域；3)点击同心圆节点时弹出面板被中心"企业"元素遮挡（z-index:5 < 10）；4)装饰图案（`hero::before`径向渐变）实现逻辑简单，与整体设计融合度不够。

## What Changes

### 1. 红色背景块宽度压缩
- 调整 `.hero-inner` grid比例：从 `1.3fr 1fr` 改为 `1.6fr 0.9fr`，进一步压缩右列宽度
- 减少右侧 `.hero-radial` 的 `max-width`：从 `100%` 改为 `90%`，使其在容器内不占满
- 保持左侧 `.hero-desc` `max-width:560px` 不变

### 2. Windows系统白色空白修复
- `.hero` 添加 `min-height:100vh; box-sizing:border-box` 确保整块背景不出现空白
- `.hero-inner` 的 `min-height` 从 `auto` 改为 `min-height:calc(100vh - 64px)`（减去header高度），确保撑满视口
- `.hero-radial` 添加 `overflow:visible` 防止变形元素被裁剪
- 添加 `@media screen and (-webkit-min-device-pixel-ratio:0){}` 作为macOS Safari专用hack，不影响Windows

### 3. 弹窗z-index修复
- `.diagram-panel` 的 `z-index` 从 `5` 改为 `20`，高于所有子元素（最高的是 `.diagram-core` 的 z-index:10）
- `.diagram-tooltip` 的 `z-index` 从 `10` 改为 `15`，确保tooltip在core之上但在panel之下

### 4. 装饰图案设计逻辑重构
- 移除现有的 `.hero::before` 单一大圆形径向渐变
- 替换为双层装饰：`.hero::before`（左上角柔和光晕）+ `.hero::after`（右下角散射光点）
- 尺寸分别控制在 400×400px（左上）和 300×300px（右下），比原来的600×600更克制
- 使用 `calc()` 动态偏移，确保在不同视口下不遮挡关键内容

## Impact
- Affected code: `public/index.html` 中的CSS（.hero, .hero-inner, .hero-radial, .diagram-panel, .diagram-tooltip, hero::before/after）
- 仅影响首页index.html
- 不改变HTML结构，仅修改CSS属性值

## ADDED Requirements
### Requirement: Windows无空白
系统SHALL确保在Windows Chrome/Edge/Firefox下首屏无白色空白区域。

### Requirement: 弹窗不被遮挡
系统SHALL确保点击节点后的详情面板在所有元素之上显示。

### Requirement: 装饰不干扰内容
系统SHALL确保装饰图案始终在内容层之下（z-index:0），不影响交互。

## MODIFIED Requirements
### Requirement: 红色背景宽度进一步压缩
之前的grid比例1.3fr:1fr改为1.6fr:0.9fr，右列宽度从约43.5%压缩至约36%。

## REMOVED Requirements
无
