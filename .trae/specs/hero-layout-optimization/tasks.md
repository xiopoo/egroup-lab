# 首页视觉与布局优化 - 实施计划

## [x] Task 1: 增大右侧球形图尺寸
- **Priority**: high
- **Depends On**: None
- **Description**: 
  - 将 `.hero-radial` 的 `max-width` 从 500px 增大到 560px
  - 将 grid 比例从 1.2fr 1fr 调整为 1fr 1.15fr，给右侧更多空间
  - 减少 gap 从 60px 到 48px
- **Acceptance Criteria Addressed**: AC-1
- **Test Requirements**:
  - `human-judgment` TR-1.1: 球体在桌面端视觉饱满，文字块旋转时无遮挡
  - `human-judgment` TR-1.2: 中屏（768-1023px）球体尺寸保持 380px，不溢出容器

## [x] Task 2: 调整首屏文字间距
- **Priority**: high
- **Depends On**: None
- **Description**: 
  - `.hero-subtitle` margin-bottom: 12px → 8px
  - `.hero-slogan` margin-bottom: 28px → 18px
  - `.hero-desc` margin-bottom: 36px → 28px
- **Acceptance Criteria Addressed**: AC-2
- **Test Requirements**:
  - `human-judgment` TR-2.1: 首屏文字间距合理，无过大留白
  - `human-judgment` TR-2.2: 移动端文字间距同样紧凑

## [x] Task 3: 修复全屏适配问题
- **Priority**: high
- **Depends On**: None
- **Description**: 
  - `.hero{overflow:visible}` → `overflow-x:hidden`
  - `.hero::before` 添加 `transform:translateX(50%)` 使光晕中心位于右侧边缘内
- **Acceptance Criteria Addressed**: AC-3
- **Test Requirements**:
  - `programmatic` TR-3.1: 页面无横向滚动条
  - `human-judgment` TR-3.2: 页面内容完全占满屏幕宽度，无右侧留白

## Task Dependencies
- 三个任务相互独立，可并行实施

