# 灰金重组官网

静态官网源代码位于本目录的 `public/`。Trae 与 Codex 都应从上一级 `hj/` 根目录打开项目；项目 Skill 和历史规格统一位于 `../.trae/`。

在本目录运行：

- `npm run dev`：启动 Vercel 本地预览
- `npm run check-images`：检查页面图片配置
- `npm run deploy`：部署生产环境（执行前必须由用户确认）

正式生产部署以仓库根目录 `../vercel.json` 为准，输出目录为 `website/public`。本目录 `vercel.json` 仅用于从 `website/` 作为工作目录时的独立预览或部署。

网站迭代规格记录在根目录 `../.trae/specs/`。

## 设计系统

官网设计原则、色彩、排版、组件和页面模板的长期规范见：

- `../docs/灰金官网设计系统与UI规范.md`

后续修改官网视觉和 UI 时，先以该文档为准，再复用当前样式层：

- `public/common.css`：基础样式、导航、按钮、Footer、微信弹窗等通用底座；
- `public/commercial.css`：商业官网表达层和主要页面风格；
- `public/site-paper-theme.css`：暖纸感、红金层级和关于灰金系列页面的统一视觉。

在视觉系统稳定前，不要为了整理而大规模重写 CSS；优先做小而可验证的修改。
