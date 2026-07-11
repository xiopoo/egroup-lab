# 灰金重组公众号内容生产系统

这里集中管理微信公众号内容从创作到排版输出的完整流程。

- `../.trae/skills/`：内容诊断、AI 检查、标题、案例、术语、模板、公众号 HTML、存档、发布与报告等 Skill
- `../.trae/specs/`：公众号和官网共用的历史规格记录
- `content/`：文章摘要、概念库、金句库和索引
- `content/bamang/`：巴芒复利书房资料域，含股东信、合伙人信、演讲、访谈、问答、公司和人物资料
- `content/gray-gold-imports/`：从其他项目导入、等待审核的灰金内容
- `content/content-catalog.json`：灰金与巴芒两个内容域的统一目录和路由规则
- `sync-bamang-library.js`：巴芒核心资料的安全同步脚本，默认只预览
- `output/`：已生成的公众号 HTML、原文与客户手册
- `准备工具.md`：内容资产、运营状态与更新规则

Trae 与 Codex 都应打开上一级 `hj/` 根目录，以确保读取同一套 Skill 和项目规则。灰金内容使用 `hj-*` Skill；巴芒研究与跨领域内容工程使用 `dbs-*` Skill。

内容生产系统与官网是同一仓库中的两个业务模块。灰金与巴芒资料共用生产流程但事实域隔离，当前尚未自动同步到网站；若要更新官网文章展示，请在 `../website/public/` 中单独维护对应页面内容。

同步巴芒资料前先运行：

```bash
node content-system/sync-bamang-library.js
```

确认来源和文件数量后，再由用户明确执行 `--apply`。脚本不会复制 `.env.local`、PDF、构建产物、网页清洗副本或旧重复内容树。
