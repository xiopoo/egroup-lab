# 首屏布局与团队介绍修复 - 实施计划

## [x] Task 1: 修复首屏无留白问题
- **Priority**: high
- **Depends On**: None
- **Description**: 
  - 将 `.hero-radial` max-width 从 560px 恢复为 420px，避免首屏高度溢出
  - 同步恢复文字块尺寸（layer-text-1: 90×36→76×32, layer-text-2: 80×32→68×28, layer-text-3: 72×28→60×24）
  - 同步恢复 depth-layer left 偏移（45/40/36→38/34/30）
- **Acceptance Criteria Addressed**: AC-1
- **Test Requirements**:
  - `human-judgment` TR-1.1: 首屏下方白色背景的文本行完整显示，无截断
  - `human-judgment` TR-1.2: 首屏内容布局符合设计要求

## [x] Task 2: 调整文本间距
- **Priority**: high
- **Depends On**: None
- **Description**: 
  - `.section-header margin-bottom`: 56px → 48px
  - `.section-label margin-bottom`: 12px → 8px
  - `.section-title margin-bottom`: 12px → 8px
- **Acceptance Criteria Addressed**: AC-2
- **Test Requirements**:
  - `human-judgment` TR-2.1: 文本行之间垂直间距合理，无明显过大留白

## [x] Task 3: 团队介绍恢复为3人
- **Priority**: high
- **Depends On**: None
- **Description**: 
  - 在团队介绍区域添加张明远的卡片（首席重组顾问）
  - 调整 team-grid 的 grid-template-columns 从 repeat(2,1fr) 改为 repeat(3,1fr)
  - gap 从 32px 调整为 28px
- **Acceptance Criteria Addressed**: AC-3
- **Test Requirements**:
  - `programmatic` TR-3.1: 团队介绍显示3个成员卡片
  - `programmatic` TR-3.2: 新增的张明远卡片包含正确的头像、姓名、职位和描述

## [x] Task 4: 修改王少华业务经验为10年
- **Priority**: high
- **Depends On**: Task 3
- **Description**: 
  - 修改王少华的职位从"法律顾问"改为"企业重组顾问"
  - 修改 team-desc 内容为"10年企业诊断与重组经验，擅长从经营本质诊断企业困境、设计系统性重组方案"
- **Acceptance Criteria Addressed**: AC-4
- **Test Requirements**:
  - `programmatic` TR-4.1: 王少华的业务经验显示为10年相关描述

## Task Dependencies
- Task 4 依赖 Task 3 完成（需要先恢复3人布局）
- 其他任务相互独立

