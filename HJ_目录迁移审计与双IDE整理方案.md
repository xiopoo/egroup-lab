# HJ 目录迁移审计与双 IDE 整理方案

> 审计日期：2026-07-11  
> 审计范围：`/Users/lucas/Documents/bamangB/hj`  
> 目标：在不丢失现有代码、内容和 Trae 工作流的前提下，让 Trae 与 Codex 共同维护同一个 HJ 项目。
> 执行状态：用户已确认推荐方案；双 IDE 目录兼容整理已完成，并由本地 Git 提交 `fe0543f` 保护。该提交尚未推送远端；旧测试页清理由后续独立处理。

## 1. 结论

HJ 的主要资产没有丢失，但目录迁移尚未完成，也没有被 Git 安全记录。

当前状态为：

- 179 个旧路径文件被 Git 标记为删除；
- 231 个新位置文件尚未被 Git 跟踪；
- 1 个已跟踪文件被修改；
- 本地 `main` 与远端提交一致，意味着当前目录迁移还没有形成可恢复的提交。

因此，现在禁止执行：

- “丢弃全部更改”；
- `git reset --hard`；
- 清理未跟踪文件；
- 用旧提交直接覆盖 `.trae`；
- 在未核对前删除根 `public`、`website` 或 `content-system`。

以上操作都可能把已经迁移但未被 Git 保护的文件真正删除。

## 2. 文件完整性核对

### 2.1 官网

旧根目录 `public/` 中 Git 记录的 37 个文件，全部能在 `website/public/` 找到：

- 34 个内容完全相同；
- `index.html` 是更新后的 Hero 修复版；
- 两个图片配置脚本只有路径说明调整；
- 没有发现官网正式文件遗失。

原根目录的下列文件也已完整进入 `website/`：

- `package.json`
- `server.js`
- `scripts/check-image-config.js`

### 2.2 公众号输出与内容资产

旧根目录 `output/` 的 10 个文件全部存在于 `content-system/output/`：

- 9 个内容相同；
- `企业经营健康度体检_公众号版.html` 已被实质更新。

`content-system/content/` 目前还有文章、概念、金句和索引等 22 个知识资产。这些属于新增且尚未被 Git 跟踪的重要内容，必须优先纳入版本保护。

### 2.3 Trae Skills

旧根 `.trae/skills/` 的 14 个文件都能在 `content-system/.trae/skills/` 找到对应的新版本：

- 名称由 `regroup-lab-*` 更新为 `hj-*`；
- 品牌与本地数据路径有调整；
- 新增了 `hj-publish`；
- `diagnosis-cta.html` 内容保持一致。

不能使用旧 Git 版本直接恢复根 `.trae`，否则会重新引入旧 Skill，并覆盖或遗漏当前版本。

### 2.4 Trae Specs

旧根 `.trae/specs/` 的 115 个文件全部能在 `website/.trae/specs/` 或 `content-system/.trae/specs/` 找到：

- 105 个内容相同；
- 10 个已有后续更新；
- 另有 21 个新增规格文件；
- 当前两边的规格目录名称没有冲突，可以无损合并。

## 3. 当前未完成问题

### 3.1 Trae 根入口已经消失

根目录 `.trae` 已不存在。若 Trae 继续打开整个 `hj`，它不能按原方式直接发现项目 Skill。分别打开 `website` 或 `content-system` 可能读取各自配置，但这不符合“两个 IDE 共同维护同一个项目”的目标。

**执行状态：已解决。** 当前最新版 Skill 与规格已合并回根 `.trae`。

### 3.2 正式目录和 Git 记录不一致

实际官网已在 `website/public`，但 Git 仍把原根 `public` 视为已删除、把 `website` 视为新增。迁移内容完整，但尚未形成安全的版本记录。

### 3.3 根目录测试页残留

`public/hero-test.html` 与 `website/public/hero-test.html` 不同：

- 根目录版本约 160 行；
- `website` 版本约 384 行，功能更完整。

根目录版本应暂时视为旧测试残留，不能覆盖新版；确认无保留价值后再清理。

### 3.4 部署配置存在两个入口

- 从仓库根目录部署：根 `vercel.json` 输出 `website/public`；
- 从 `website` 目录部署：`website/vercel.json` 输出 `public`。

两者各自都可能工作，但会造成配置漂移。最新提交明确采用“从仓库根目录部署”，建议将其作为唯一正式生产入口；`website` 内配置只能作为本地或独立预览入口，并应在 README 写清楚。

### 3.5 三份规格仍引用旧代码路径

以下规格仍把首页写成 `hj/public/index.html`，应更新为 `website/public/index.html`：

- `fix-sphere-occlusion/spec.md`
- `sphere-ui-polishing/spec.md`
- `hero-layout-comprehensive-optimization/spec.md`

**执行状态：已修复。** 三处均已改为仓库相对路径 `website/public/index.html`。

### 3.6 公众号输出存在失效相对链接

更新后的 `企业经营健康度体检_公众号版.html` 使用：

- `href="diag.html"`
- `src="images/企业诊断.png"`

但这两个资源不在 `content-system/output/` 中。该 HTML 单独打开或复制到其他环境时，诊断链接和图片可能失效。正式修复前应先确认公众号最终使用线上网址、微信素材还是本地预览方式。

### 3.7 Skill 品牌残留

`hj-wechat-html/SKILL.md` 仍有 4 处“重组实验室”，应统一为“灰金重组”。

**执行状态：已修复。** 四处均已统一为“灰金重组”。

### 3.8 历史本地数据路径尚未迁移

本机仍存在 `~/.regroup-lab`，约 124 KB；当前没有 `~/.hj`。新 Skill 已改为读取 `~/.hj`，因此存档、案例或术语等历史数据可能无法被新 Skill 读取。

短期兼容方案应为：

1. 优先读取 `~/.hj`；
2. 不存在时只读回退到 `~/.regroup-lab`；
3. 在用户确认后执行复制式迁移；
4. 验证完成前不删除旧目录。

**执行状态：兼容规则已写入。** 新数据继续写入 `~/.hj`，对应新目录不存在时可只读回退旧目录；旧数据实体尚未迁移或删除。

## 4. 推荐的最终结构

Trae 与 Codex 都应打开同一个 `hj` 根目录：

```text
hj/
├── .trae/
│   ├── skills/                  # 当前 hj-* Skills，唯一真源
│   └── specs/                   # 官网与公众号规格平铺合并
├── AGENTS.md                    # Codex 项目级开发规则
├── HJ_战略与开发总纲.md
├── HJ_目录迁移审计与双IDE整理方案.md
├── README.md
├── vercel.json                  # 唯一正式生产部署入口
├── website/
│   ├── public/                  # 唯一官网源代码
│   ├── scripts/
│   ├── package.json
│   ├── server.js
│   └── README.md
└── content-system/
    ├── content/
    ├── output/
    ├── README.md
    └── 准备工具.md
```

原则：

- 业务代码只有一份；
- Trae 配置只有一份真源；
- 官网和内容系统属于同一个 Git 仓库中的两个模块，不是两个互不关联的项目；
- Trae 和 Codex 都直接编辑同一组文件；
- 不依赖未经验证的嵌套 `.trae` 自动发现、符号链接或多根工作区行为。

## 5. 安全整理顺序

### 第一步：创建可恢复快照

先把当前完整工作树形成可恢复的迁移快照，再做任何清理。快照必须包含所有未跟踪的官网、内容、Skill 和规格文件。

### 第二步：恢复根级 Trae 工作区

- 以 `content-system/.trae/skills` 的当前 `hj-*` 版本作为根 `.trae/skills` 内容；
- 将两个子目录的规格合并进根 `.trae/specs`；
- 校验 15 个 Skill 文件和 136 个规格文件；
- Trae 打开 `hj` 根目录，验证 `hj` 与 `hj-publish` 可用；
- 验证前不删除子目录 `.trae`。

### 第三步：确认唯一业务源

- 官网唯一源：`website/public`；
- 内容唯一源：`content-system/content`；
- 微信成品：`content-system/output`；
- 旧根 `public/hero-test.html` 经确认后再清理。

### 第四步：修复已确认的路径问题

- 更新三份旧规格路径；
- 清理 Skill 中的旧品牌名称；
- 明确公众号 HTML 的线上链接与图片策略；
- 明确历史本地数据的兼容读取策略。

### 第五步：统一说明与部署

- 根 README 明确 Trae 与 Codex 都打开 `hj`；
- `website/README.md` 只说明官网开发命令；
- `content-system/README.md` 只说明内容流程；
- 根部署配置作为正式生产配置；
- 网站子配置的作用必须标明，避免误部署。

### 第六步：分开形成版本记录

建议至少分为两个可审查的提交：

1. 目录迁移与双 IDE 兼容；
2. 内容、品牌、链接和功能修改。

这样出现问题时可以单独回退目录，不会把近期网站或公众号内容一起覆盖。

## 6. 执行记录

2026-07-11 已执行：

- 创建整理前完整压缩快照，并校验归档清单与 SHA-1；
- 官网业务文件继续以 `website/public` 为唯一源，公众号资产继续保留在 `content-system`，未移动业务代码；
- 将当前 14 个 `hj-*` Skill 定义及 1 个配套模板文件合并到根 `.trae/skills`；
- 将官网与内容规格共 136 个文件无冲突合并到根 `.trae/specs`；
- 修正 3 处旧网站代码路径和 4 处旧品牌名称；
- 为 `~/.regroup-lab` 历史数据增加只读回退规则，新数据仍写入 `~/.hj`；
- 新增根 `AGENTS.md`，更新 README 和战略总纲；
- 在合并校验通过后移除子目录中重复的 `.trae`；
- 未删除根 `public/hero-test.html`，未清理 `~/.regroup-lab`，未执行 Git 回退或未跟踪文件清理。

整理前快照保存在仓库之外：

```text
/Users/lucas/Documents/bamangB/hj-backups/hj-before-dual-ide-20260711-整理前完整快照.tar.gz
SHA-1: 2f2a0aa682562351d58c998b91df87fb73e6ab60
```

整理后的全部目录迁移、Skill、内容资产和项目说明已记录到本地提交 `fe0543f`（`chore: complete HJ workspace migration for Trae and Codex`）。提交后工作树干净；本地 `main` 比 `origin/main` 领先 1 个提交，尚未推送远端。

网站验证结果：静态构建完成；从 `website/public` 启动临时预览后，首页、诊断页和关于页均返回 HTTP 200。旧 3000 端口预览进程缓存了迁移前目录，已安全关闭，Trae 下次需要从 `hj` 根目录重新启动预览。

下一项正式操作：**在 Trae 中重新打开 `hj` 根目录验证 Skill 发现；在 Codex 中以 `/Users/lucas/Documents/bamangB/hj` 新建或打开项目任务，使根 `AGENTS.md` 自动生效。之后再单独处理公众号输出链接、双 Vercel 配置和旧测试页。**

注意：完成本次整理的 Codex 对话仍运行在外部临时任务目录，并不等于 Codex 已把 `hj` 设为项目根目录。后续正式开发必须从 `hj` 根目录启动 Codex 项目；否则虽然可以经授权修改文件，但不会自动继承根 `AGENTS.md`，也不能称为稳定的双 IDE 工作区。
