# Regroup Lab · 重组实验室

内容创作与文案诊断的 Skill 工具集。

## 项目简介

Regroup Lab 是一套基于 Skill 系统的内容创作工具箱，提供从内容诊断、AI 检测、标题生成到公众号排版的全流程辅助能力。

## Skill 列表

| Skill 名称 | 说明 |
|---|---|
| `regroup-lab` | 主入口，任务前路由 + 任务后导航 |
| `regroup-lab-content` | 内容创作诊断，五维检测 |
| `regroup-lab-ai-check` | AI 写作特征识别 |
| `regroup-lab-title` | 标题生成，爆款公式匹配 |
| `regroup-lab-wechat-html` | 微信公众号 HTML 生成 |
| `regroup-lab-cases` | 案例库，分类检索 |
| `regroup-lab-terms` | 术语库，概念拆解 |
| `regroup-lab-templates` | 模板库，直接套用 |
| `regroup-lab-save` | 诊断状态存档 |
| `regroup-lab-restore` | 恢复存档，接续上次 |
| `regroup-lab-report` | 报告生成，合并存档 |

## 本地数据目录

所有本地数据存储在 `~/.regroup-lab/` 目录下：

- `cases/` — 案例库
- `terms/` — 术语库
- `templates/` — 模板库
- `saves/` — 诊断存档

## 目录结构

```
regroup-lab/
├── .trae/
│   ├── skills/           # Skill 定义
│   │   ├── regroup-lab/
│   │   ├── regroup-lab-content/
│   │   └── ...
│   └── specs/            # 规格文档
└── README.md
```
