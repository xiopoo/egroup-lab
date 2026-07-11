# 联系方式统一与页脚重构 - 实施计划

## [x] Task 1: 修改首页(index.html)CTA区的按钮行为
- **Priority**: high
- **Depends On**: None
- **Description**: 
  - 将"联系咨询"按钮从 `<a href="mailto:...">` 改为 `<div onclick="..." class="contact-btn">`，点击弹出微信二维码
  - 移除"扫码咨询" 按钮（`.contact-wechat` 及其内部元素）
  - 保留 `.contact-wechat` CSS 备用，但HTML中删除
- **Acceptance Criteria Addressed**: AC-1, AC-2, AC-6
- **Test Requirements**:
  - `human-judgement` TR-1.1: "联系咨询"按钮点击弹出微信二维码
  - `human-judgement` TR-1.2: "扫码咨询"按钮已移除
  - `human-judgement` TR-1.3: 邮箱不再出现在按钮中

## [x] Task 2: 修改服务页(services.html)CTA区的按钮行为
- **Priority**: high
- **Depends On**: Task 1
- **Description**: 与Task 1相同的修改应用到services.html
- **Acceptance Criteria Addressed**: AC-1, AC-2, AC-6
- **Test Requirements**: 同上

## [x] Task 3: 重构首页(index.html)footer
- **Priority**: high
- **Depends On**: None
- **Description**: 
  - HTML: 改为flex布局 `.footer-inner`，左侧logo，右侧邮箱+导航列表，底部版权
  - CSS: footer padding从12px改为28px，背景色保持 `var(--bg-dark)`
  - 桌面端: flex一行布局，左侧logo，右侧邮箱和导航链接水平排列
  - 移动端: 改为两行，上：logo+导航，下：邮箱+版权
- **Acceptance Criteria Addressed**: AC-3, AC-4, AC-5
- **Test Requirements**:
  - `human-judgement` TR-3.1: 桌面端footer高度约80-100px
  - `human-judgement` TR-3.2: 左侧显示logo
  - `human-judgement` TR-3.3: 右侧显示邮箱和导航链接
  - `human-judgement` TR-3.4: 底部显示版权

## [x] Task 4: 同步footer到其他6个页面
- **Priority**: high
- **Depends On**: Task 3
- **Description**: 将Task 3的footer结构和CSS应用到about.html, services.html, cases-detail.html, experts.html, diag.html, 404.html
- **Acceptance Criteria Addressed**: AC-5
- **Test Requirements**:
  - `human-judgement` TR-4.1: 所有页面footer内容与首页一致
  - `human-judgement` TR-4.2: 所有页面footer样式与首页一致

## [x] Task 5: 验证所有页面
- **Priority**: medium
- **Depends On**: Task 2, Task 4
- **Description**: 验证7个页面的footer一致性和CTA区修改
- **Acceptance Criteria Addressed**: AC-1, AC-2, AC-3, AC-4, AC-5, AC-6
- **Test Requirements**:
  - `human-judgement` TR-5.1: 所有footer高度≥80px
  - `human-judgement` TR-5.2: CTA按钮弹出微信二维码
  - `human-judgement` TR-5.3: 全站邮箱仅出现在footer
