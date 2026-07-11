# HJ 统一内容系统：灰金重组 × 巴芒复利书房

> 方案版本：V1.0  
> 处理日期：2026-07-11  
> 原始资料项目：`/Users/lucas/Documents/bamangB/bamangBOOK`  
> 目标项目：`/Users/lucas/Documents/bamangB/hj`

## 一、统一原则

HJ 的 `content-system` 现在承担两个角色：

1. **灰金重组内容生产线**：围绕企业困境、债务重组、经营健康度和公众号服务转化。
2. **巴芒研究资料复用库**：围绕巴菲特、芒格、伯克希尔、长期投资、企业经营和复利思想，为研究、选题、学习和跨领域内容提供素材。

两者共用内容工程能力，但不共用事实口径：

- 共用：内容审计、内容单元化、主题地图、检索、学习、报告、标题、排版、存档和 AI 检查；
- 隔离：企业客户数据、重组案例、法律判断、投资资料、原文引用、对外品牌和商业承诺；
- 跨域调用时必须标注来源域，不能把巴芒资料写成灰金项目案例，也不能把灰金客户信息进入巴芒公开资料库。

## 二、最终目录

```text
content-system/
├── content/
│   ├── articles/                 # 灰金重组公众号文章
│   ├── concepts/                 # 灰金重组概念库
│   ├── quotes/                   # 灰金重组金句库
│   ├── index.json                # 灰金现有索引，保持兼容
│   ├── gray-gold-imports/        # 从 bamangBOOK/hj 导入、待并入灰金索引的内容
│   └── bamang/                   # 巴芒资料域，独立索引和分类
│       ├── articles/
│       ├── letters/
│       ├── partnership/
│       ├── talks/
│       ├── interviews/
│       ├── qa/
│       ├── concepts/
│       ├── companies/
│       ├── people/
│       ├── books/
│       ├── indexes/
│       └── README.md
├── CONTENT-UNIFICATION.md
└── CONTENT-ASSET-INVENTORY.md
```

## 三、哪些 Skill 进入 Hj

从 bamangBOOK 的 `.trae/skills` 中合并 14 个通用内容 Skill：

- `dbs`：通用内容/商业任务路由入口；
- `dbs-content-system`：大量文稿审计、内容单元化和主题地图；
- `dbs-content`：内容创作诊断；
- `dbs-ai-check`：通用 AI 写作特征检查；
- `dbs-deconstruct`：概念拆解；
- `dbs-learning`：交互式学习；
- `dbs-report`、`dbs-restore`、`dbs-save`：通用报告和状态管理；
- `dbs-hook`、`dbs-spread`、`dbs-wechat-html`、`dbs-xhs-title`：内容传播与排版；
- `dbs-good-question`：把模糊问题转成可执行的问题说明书。

灰金专用 `hj-*` Skill 继续保留，用于重组领域专业内容。遇到灰金法律、诊断、案例和专业术语，优先使用 `hj-*`；遇到跨领域内容工程或巴芒学习，使用 `dbs-*`。

未合并的 Skill：个人决策、目标、商业诊断、经济学聊天室、Agent 迁移和其他通用生活/商业工具。这些不是本次内容系统统一的必要依赖，避免把 Hj 根 Skill 变成无边界工具箱。

## 四、导入边界

### 已导入

- 巴芒核心 Markdown 资料 393 个文件：文章、股东信、合伙人信、演讲、访谈、问答、概念、公司、人物和书籍；
- 7 个原始索引 JSON；
- `bamangBOOK/hj/content` 中 8 个灰金内容资产，放入 `gray-gold-imports` 待审；
- 14 个通用 `dbs-*` 内容 Skill。

### 暂不导入

- `content/cleaned/`：网页清洗副本，属于来源归档；
- `content/pdf-documents-formatted/`：PDF 转换衍生稿，与核心 Markdown 存在重复；
- `content/content/`：旧的重复/中间内容树；
- `content/graph/`：网站运行时生成或缓存的图谱 JSON；
- 原始 PDF、截图、`.next`、`node_modules`、日志和测试文件；
- `bamangBOOK/.env.local`：可能包含密钥，严禁复制进 Hj。

这些文件不是删除对象，仍留在 bamangBOOK 原项目中，后续如需引用，按来源登记单独导入。

## 五、使用规则

### 灰金内容

输入企业困境事实 → 使用 `hj-content`/`hj-ai-check`/`hj-legal-check` → 通过 `hj-wechat-html` 或 `hj-publish` 输出 → 进入灰金索引。

### 巴芒研究

输入人物、年份、公司或概念 → 在 `content/bamang` 内检索 → 使用 `dbs-deconstruct`、`dbs-learning`、`dbs-report` → 产出研究笔记或选题素材，不直接进入灰金公众号成品。

### 跨域选题

先分别取得巴芒原文依据和灰金实务判断，再由人工确认文章的目标读者、引用边界和品牌归属。标题、正文和结尾必须明确是“研究启发”还是“灰金专业建议”。

## 六、后续建设顺序

1. 校验巴芒 7 个索引与实际文件数，标记缺失和重复，不自动补造内容；
2. 审核 `gray-gold-imports` 中 8 个内容，修复索引后并入灰金内容库；
3. 为 `content/bamang` 建立统一 `source_manifest.json` 和检索入口；
4. 让 `dbs-content-system` 生成跨域内容单元、主题地图和引用关系；
5. 再考虑把巴芒复利书房网站与 Hj 的内容服务接口连接，不直接把两个网站合并成一个前端。

## 七、不可违反的边界

- 不把巴芒原文改写成“灰金原创”；
- 不把客户案例、财务资料和敏感信息放入巴芒资料域；
- 不把未核验的年份、法条、投资事实或客户结果写入对外文章；
- 不因共用 Skill 而合并两个网站的品牌、导航、部署和数据源；
- 原始资料只读保留，所有清洗、摘要和内容单元在 Hj 副本中完成。

## 八、可重复同步

`content-system/sync-bamang-library.js` 是唯一推荐的巴芒资料同步入口。默认只输出预览，不写入；只有明确传入 `--apply` 才会更新 `content/bamang`。它只同步已批准的核心分类，并跳过 `.env.local`、`.bak`、PDF、构建产物、网页清洗副本和旧重复内容树。
