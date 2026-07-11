# 灰金重组官网

静态官网源代码位于本目录的 `public/`。Trae 与 Codex 都应从上一级 `hj/` 根目录打开项目；项目 Skill 和历史规格统一位于 `../.trae/`。

在本目录运行：

- `npm run dev`：启动 Vercel 本地预览
- `npm run check-images`：检查页面图片配置
- `npm run deploy`：部署生产环境（执行前必须由用户确认）

正式生产部署以仓库根目录 `../vercel.json` 为准，输出目录为 `website/public`。本目录 `vercel.json` 仅用于从 `website/` 作为工作目录时的独立预览或部署。

网站迭代规格记录在根目录 `../.trae/specs/`。
