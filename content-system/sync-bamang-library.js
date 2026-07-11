#!/usr/bin/env node

/**
 * 将 bamangBOOK 的核心文本资料同步到 HJ 内容系统。
 * 默认只预览；只有显式传入 --apply 才会写入目标目录。
 */

const fs = require('node:fs')
const path = require('node:path')

const sourceRoot = process.env.BAMANGBOOK_ROOT || '/Users/lucas/Documents/bamangB/bamangBOOK'
const sourceContent = path.join(sourceRoot, 'content')
const targetRoot = path.resolve(__dirname, '..', 'content', 'bamang')
const categories = ['articles', 'letters', 'partnership', 'talks', 'interviews', 'qa', 'concepts', 'companies', 'people', 'books']
const indexFiles = ['index.json', 'articles-index.json', 'letters-index.json', 'partnership-index.json', 'talks-index.json', 'interviews-index.json', 'qa-index.json']
const apply = process.argv.includes('--apply')

function listFiles(dir) {
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const full = path.join(dir, entry.name)
    if (entry.name.startsWith('.') || entry.name.endsWith('.bak')) return []
    return entry.isDirectory() ? listFiles(full) : [full]
  })
}

if (!fs.existsSync(sourceContent)) {
  console.error(`找不到 bamangBOOK 内容目录：${sourceContent}`)
  process.exit(1)
}

const plan = []
for (const category of categories) {
  const sourceDir = path.join(sourceContent, category)
  for (const file of listFiles(sourceDir)) {
    plan.push({ source: file, target: path.join(targetRoot, category, path.relative(sourceDir, file)) })
  }
}
for (const file of indexFiles) {
  const source = path.join(sourceContent, file)
  if (fs.existsSync(source)) plan.push({ source, target: path.join(targetRoot, 'indexes', file) })
}

console.log(`${apply ? '准备同步' : '预览同步'} ${plan.length} 个文件`)
if (!apply) {
  console.log('当前为预览模式；如确认来源和目标无误，请追加 --apply。')
  process.exit(0)
}

for (const item of plan) {
  fs.mkdirSync(path.dirname(item.target), { recursive: true })
  fs.copyFileSync(item.source, item.target)
}

const report = {
  syncedAt: new Date().toISOString(),
  sourceRoot,
  targetRoot,
  fileCount: plan.length,
  excluded: ['.env.local', '*.bak', 'cleaned', 'content', 'graph', 'pdf-documents-formatted', 'pdfs']
}
fs.writeFileSync(path.join(targetRoot, 'last-sync.json'), `${JSON.stringify(report, null, 2)}\n`)
console.log(`已同步到 ${targetRoot}`)
