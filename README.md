# 灰金重组项目（HJ）

本仓库同时由 **Trae** 和 **Codex** 维护。两个 IDE 必须打开同一个项目根目录 `hj/`，共同编辑同一套代码和内容，禁止为不同 IDE 复制两套业务文件。

开始任何开发前，请先阅读：

1. `HJ_战略与开发总纲.md`：长期战略、产品边界、开发阶段和双方职责；
2. `AGENTS.md`：Codex 与其他 AI 在本仓库中的执行规则；
3. 对应模块的 README 和相关 `.trae/skills`。

## 项目结构

```text
hj/
├── .trae/
│   ├── skills/                      # Trae 内容生产 Skill（唯一真源）
│   └── specs/                       # 官网与内容系统的历史规格和任务记录
├── AGENTS.md                        # Codex 项目规则
├── HJ_战略与开发总纲.md             # 长期项目总纲
├── HJ_目录迁移审计与双IDE整理方案.md # 目录迁移审计记录
├── README.md
├── vercel.json                      # 从仓库根目录部署的正式配置
├── website/                         # 官网模块
│   ├── public/                      # 唯一正式网页源代码
│   ├── scripts/                     # 网站检查脚本
│   ├── package.json                 # 本地开发与检查命令
│   ├── server.js                    # 简易静态服务器
│   └── README.md
└── content-system/                  # 公众号内容生产模块
    ├── content/                     # 文章、概念、金句和索引
    ├── output/                      # 微信 HTML 与 Markdown 成品
    ├── README.md
    └── 准备工具.md
```

## 两个 IDE 的使用方式

### Trae

直接打开 `hj/` 根目录。项目级 Skill 和规格统一位于根 `.trae/`，不要只打开 `website/` 或 `content-system/` 作为长期主工作区。

### Codex

同样打开 `hj/` 根目录。Codex 先遵守 `AGENTS.md`，再按任务读取战略总纲、模块 README 和相关 Skill。

Trae 和 Codex 可以交替开发，但同一时间修改相同文件前，应先检查 Git 状态并确认对方留下的改动，禁止覆盖未提交内容。

## 官网开发

正式网页源代码只在 `website/public/`。进入 `website/` 后运行：

- `npm run dev`：本地预览；
- `npm run check-images`：检查页面图片配置；
- `npm run build`：当前仅执行静态构建占位检查；
- `npm run deploy`：部署命令，执行生产部署前必须由用户确认。

正式生产部署以仓库根目录 `vercel.json` 为准，其输出目录是 `website/public`。

## 公众号内容系统

- Skill：根目录 `.trae/skills/`；
- 内容资产：`content-system/content/`；
- 微信与 Markdown 成品：`content-system/output/`；
- 运营总览：`content-system/准备工具.md`。

内容生产和官网使用同一品牌与知识资产，但发布动作仍分别执行。网站文章目前不是由内容系统自动同步，任何“自动同步”开发都必须单独立项和验证。

## 安全规则

- 不执行 `git reset --hard`、清理未跟踪文件或批量覆盖；
- 不把客户资料、密钥和敏感信息提交到仓库；
- 不擅自部署生产环境、发布公众号、收费或更改诊断口径；
- 根 `public/` 若仍有旧测试残留，在确认前不得删除；
- `~/.regroup-lab` 是旧 Trae 历史数据目录，验证迁移前不得删除。
