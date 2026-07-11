# bamangBOOK → HJ 内容资产分类清单

## 1. 项目基线

| 项目 | 事实 |
|---|---|
| bamangBOOK 技术栈 | Next.js 14、React 18、TypeScript、Tailwind、D3、Fuse.js、Markdown/JSON 内容驱动 |
| 原始内容总量 | 约 87 MB |
| Markdown 文件 | 927 个左右，包含重复/衍生目录 |
| JSON 文件 | 70 个左右 |
| PDF 文件 | 1 个主要合集 |
| Git 状态 | bamangBOOK 当前不是 Git 仓库，不能依赖 Git 回退 |
| 敏感文件 | 根目录存在 `.env.local`，不进入 Hj |

## 2. 分类结果

| 来源目录 | 规模 | 分类 | 处理决定 |
|---|---:|---|---|
| `content/articles` | 74 | 巴芒专题文章 | 导入 `content/bamang/articles` |
| `content/letters` | 60 个 Markdown + 1 个 `.bak` | 伯克希尔股东信 | 导入 Markdown；`.bak` 不导入 |
| `content/partnership` | 24 | 巴菲特合伙人信 | 导入 |
| `content/talks` | 22 | 巴菲特/芒格演讲 | 导入 |
| `content/interviews` | 40 | 访谈 | 导入 |
| `content/qa` | 51 | 股东大会问答 | 导入 |
| `content/concepts` | 36 | 投资/经营概念 | 导入 |
| `content/companies` | 67 | 公司研究 | 导入 |
| `content/people` | 10 | 人物资料 | 导入 |
| `content/books` | 1 | 书籍摘要 | 导入 |
| `content/graph` | 61 JSON | 网站图谱生成物 | 不导入，后续由内容生成 |
| `content/cleaned` | 38 HTML | 网页清洗归档 | 保留原项目，按需引用 |
| `content/pdf-documents-formatted` | 273 Markdown | PDF 衍生稿 | 不导入，避免重复 |
| `content/content` | 269 Markdown | 旧/重复内容树 | 不导入，保留原项目 |
| 原始 PDF | 1 | 版权/来源材料 | 不复制到 Hj |
| `bamangBOOK/hj/content` | 8 | 灰金重组内容草稿 | 导入 `gray-gold-imports` 待审 |
| `bamangBOOK/.trae/specs` | 大量 | 巴芒网站开发记录 | 不进入 Hj 根规格，保留原项目 |

## 3. 索引一致性警告

原项目索引不是完全可信的事实源，已发现：

- `articles-index.json` 记录 73 条，目录实际有 74 个文件；
- `letters-index.json` 记录 60 条，`local-content-summary.json` 的统计口径不同；
- `partnership-index.json` 记录 22 条，目录实际有 24 个文件；
- `people` 目录实际约 10 个文件，而主索引统计 7 个；
- 主 `content/index.json` 的总量与各分类索引不完全一致；
- `bamangBOOK/hj/content/index.json` 当前 JSON 格式无效，不能直接合并。

因此本次导入保留原始索引副本，并把“索引校验”列为后续任务；不根据数字猜测缺失内容，也不自动生成虚假条目。

## 4. 可复用价值分级

### A 级：直接进入内容生产

巴芒股东信、合伙人信、演讲、访谈、问答、概念和公司研究。它们有明确来源、年份和主题，可支持检索、学习、摘要、选题和引用。

### B 级：经过审核后进入内容生产

专题文章、人物资料、书籍摘要和公司分析。需要补充来源、作者、发布日期、引用边界和事实核验状态。

### C 级：只作参考或再处理

网页清洗副本、PDF 转换稿、旧内容树、图谱缓存。它们可能包含重复、格式问题或未经审校的 OCR，不应直接作为对外输出依据。

### D 级：禁止进入共享内容库

`.env.local`、`node_modules`、`.next`、日志、截图、测试页面、原始 PDF 和未经授权的客户/第三方敏感材料。
