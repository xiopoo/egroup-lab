#!/usr/bin/env node
// Usage: node website/scripts/sync-column-from-articles.js --only "文章文件名.md" [--dry-run]
// Omit --only only for an explicitly approved full-library rebuild.
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const util = require('util');

const repoRoot = path.resolve(__dirname, '../..');
const articlesDir = path.join(repoRoot, 'content-system/content/articles');
const outputDir = path.join(repoRoot, 'content-system/content/output');
const publicDir = path.join(repoRoot, 'website/public');
const columnDataPath = path.join(publicDir, 'js/column-data.js');
const columnContentDir = path.join(publicDir, 'column-content');

const dryRun = process.argv.includes('--dry-run');
const onlyIndex = process.argv.indexOf('--only');
const onlyArticle = onlyIndex === -1 ? '' : String(process.argv[onlyIndex + 1] || '').trim();

if (onlyIndex !== -1 && !onlyArticle) {
  throw new Error('Missing article after --only. Use a source filename, filename without .md, or exact title.');
}

const categoryMap = {
  self: '老板自救',
  debt: '债务处理',
  repair: '经营修复',
  asset: '资产盘活',
  legal: '法律风险',
};

function readText(file) {
  return fs.readFileSync(file, 'utf8').replace(/^\uFEFF/, '');
}

function resolveInside(baseDir, targetPath, options = {}) {
  const resolved = path.resolve(baseDir, targetPath);
  if (resolved === baseDir || resolved.startsWith(baseDir + path.sep)) return resolved;
  if (options.optional) return null;
  throw new Error(`Refusing to read outside ${baseDir}: ${targetPath}`);
}

function stripQuotes(value) {
  return String(value || '').trim().replace(/^['"]|['"]$/g, '');
}

function parseArray(value) {
  const text = String(value || '').trim();
  if (!text.startsWith('[') || !text.endsWith(']')) return [];
  return text
    .slice(1, -1)
    .split(',')
    .map((item) => stripQuotes(item))
    .filter(Boolean);
}

function parseFrontMatter(markdown) {
  if (!markdown.startsWith('---')) return [{}, markdown];
  const end = markdown.indexOf('\n---', 3);
  if (end === -1) return [{}, markdown];

  const raw = markdown.slice(3, end).trim();
  const body = markdown.slice(end + 4).trim();
  const meta = {};

  raw.split(/\r?\n/).forEach((line) => {
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!match) return;
    const key = match[1].trim();
    const value = match[2].trim();
    meta[key] = value.startsWith('[') ? parseArray(value) : stripQuotes(value);
  });

  return [meta, body];
}

function loadExistingColumnData() {
  if (!fs.existsSync(columnDataPath)) return [];
  const code = readText(columnDataPath);
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(code, context, { filename: columnDataPath });
  return Array.isArray(context.window.COLUMN_DATA) ? context.window.COLUMN_DATA : [];
}

function normalizeTitle(title) {
  return String(title || '')
    .replace(/[（(].*?[）)]/g, '')
    .replace(/[^\u4e00-\u9fa5A-Za-z0-9]/g, '')
    .toLowerCase();
}

function firstHeading(markdown) {
  const match = markdown.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : '';
}

function plainText(markdown) {
  return String(markdown || '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/!\[[^\]]*]\([^)]+\)/g, '')
    .replace(/\[([^\]]+)]\([^)]+\)/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^[-*+]\s+/gm, '')
    .replace(/^\d+\.\s+/gm, '')
    .replace(/^>\s?/gm, '')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/[ \t]+/g, ' ')
    .trim();
}

function summaryFrom(markdown, meta) {
  if (meta.summary) return stripQuotes(meta.summary);
  if (meta.subtitle) return stripQuotes(meta.subtitle);
  const body = markdown
    .replace(/^#\s+.+$/m, '')
    .split(/\n{2,}/)
    .map((part) => plainText(part))
    .find((part) => part && !part.includes('全文完整版见') && part.length > 20);
  const text = body || plainText(markdown);
  return text.length > 86 ? `${text.slice(0, 86)}...` : text;
}

function estimateReadTime(markdown, meta) {
  if (meta.readtime) return stripQuotes(meta.readtime);
  const text = plainText(markdown);
  const minutes = Math.max(3, Math.round(text.length / 650));
  return `约${minutes}分钟`;
}

function pickCategory(articleText, meta) {
  const directFilter = stripQuotes(meta.filter || '');
  if (categoryMap[directFilter]) return [categoryMap[directFilter], directFilter];

  const directCategory = stripQuotes(meta.category || '');
  const found = Object.entries(categoryMap).find(([, label]) => label === directCategory);
  if (found) return [found[1], found[0]];

  const text = `${articleText} ${(Array.isArray(meta.tags) ? meta.tags.join(' ') : '')}`;
  if (/企业诊断|经营诊断|值不值得救|经营|现金流|造血|毛利|客户|订单|业务/.test(text)) return ['经营修复', 'repair'];
  if (/资产|应收|存货|厂房|盘活|处置|变现/.test(text)) return ['资产盘活', 'asset'];
  if (/LPR|司法解释|法院|执行|诉讼|征信|信用|担保|合法|法律|破产/.test(text)) return ['法律风险', 'legal'];
  if (/银行|债务|负债|债权|展期|和解|高息|借贷|催收|欠款/.test(text)) return ['债务处理', 'debt'];
  return ['老板自救', 'self'];
}

function hashSlug(input) {
  let hash = 2166136261;
  for (const ch of String(input)) {
    hash ^= ch.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(36);
}

function slugFor(article, existing) {
  const titleKey = normalizeTitle(article.title);
  const byTitle = existing.find((item) => normalizeTitle(item.title) === titleKey);
  if (byTitle) return byTitle.slug;

  const baseName = path.basename(article.file, path.extname(article.file));
  const byFileName = existing.find((item) => normalizeTitle(item.title).includes(normalizeTitle(baseName)));
  if (byFileName) return byFileName.slug;

  const datePart = String(article.date || '').replace(/-/g, '') || 'undated';
  return `article-${datePart}-${hashSlug(article.title).slice(0, 6)}`;
}

function escapeHtml(text) {
  return String(text || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function inlineMarkdown(text) {
  return escapeHtml(text)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');
}

function markdownToArticleHtml(markdown, options = {}) {
  const preserveLineBreaks = Boolean(options.preserveLineBreaks);
  const lines = String(markdown || '').replace(/\r\n/g, '\n').split('\n');
  const html = [];
  let paragraph = [];
  let list = [];
  let inQuote = false;
  let quote = [];

  function flushParagraph() {
    if (!paragraph.length) return;
    html.push(`<p>${inlineMarkdown(paragraph.join(' ').trim())}</p>`);
    paragraph = [];
  }

  function flushList() {
    if (!list.length) return;
    html.push(`<ul>${list.map((item) => `<li>${inlineMarkdown(item)}</li>`).join('')}</ul>`);
    list = [];
  }

  function flushQuote() {
    if (!quote.length) return;
    html.push(`<blockquote><p>${inlineMarkdown(quote.join(' ').trim())}</p></blockquote>`);
    quote = [];
    inQuote = false;
  }

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flushParagraph();
      flushList();
      flushQuote();
      continue;
    }
    if (/^#\s+/.test(line)) continue;
    if (/^##\s+/.test(line)) {
      flushParagraph();
      flushList();
      flushQuote();
      html.push(`<h2>${inlineMarkdown(line.replace(/^##\s+/, ''))}</h2>`);
      continue;
    }
    if (/^###\s+/.test(line)) {
      flushParagraph();
      flushList();
      flushQuote();
      html.push(`<h3>${inlineMarkdown(line.replace(/^###\s+/, ''))}</h3>`);
      continue;
    }
    if (preserveLineBreaks && /^(前言[:：]|第[一二三四五六七八九十]+章|后记[:：])/.test(line)) {
      flushParagraph();
      flushList();
      flushQuote();
      html.push(`<h2>${inlineMarkdown(line)}</h2>`);
      continue;
    }
    if (/^>\s?/.test(line)) {
      flushParagraph();
      flushList();
      inQuote = true;
      quote.push(line.replace(/^>\s?/, ''));
      continue;
    }
    if (preserveLineBreaks && /^\d+\.\s+/.test(line)) {
      flushParagraph();
      flushList();
      flushQuote();
      html.push(`<h3>${inlineMarkdown(line.replace(/^\d+\.\s+/, ''))}</h3>`);
      continue;
    }
    if (/^[-*+]\s+/.test(line) || /^\d+\.\s+/.test(line)) {
      flushParagraph();
      flushQuote();
      list.push(line.replace(/^[-*+]\s+/, '').replace(/^\d+\.\s+/, ''));
      continue;
    }
    if (/^[-─]{6,}$/.test(line)) {
      flushParagraph();
      flushList();
      flushQuote();
      html.push('<hr>');
      continue;
    }
    if (inQuote) flushQuote();
    flushList();
    paragraph.push(line);
    if (preserveLineBreaks) flushParagraph();
  }

  flushParagraph();
  flushList();
  flushQuote();
  return `<div class="article-body">\n${html.join('\n')}\n</div>\n`;
}

function resolveFullMarkdown(meta, body) {
  if (meta.source_markdown) {
    const candidate = resolveInside(articlesDir, stripQuotes(meta.source_markdown));
    if (fs.existsSync(candidate)) return readText(candidate);
  }

  const fullMdMatch = body.match(/全文完整版见：\s*`([^`]+\.md)`/);
  if (fullMdMatch) {
    const candidate = resolveInside(articlesDir, fullMdMatch[1], { optional: true });
    const outputCandidate = path.join(outputDir, path.basename(fullMdMatch[1]));
    if (candidate && fs.existsSync(candidate)) return readText(candidate);
    if (fs.existsSync(outputCandidate)) return readText(outputCandidate);
  }

  return body;
}

function loadArticleFiles() {
  if (!fs.existsSync(articlesDir)) return [];
  return fs.readdirSync(articlesDir)
    .filter((file) => file.endsWith('.md'))
    .sort()
    .map((file) => {
      const fullPath = path.join(articlesDir, file);
      const raw = readText(fullPath);
      const [meta, body] = parseFrontMatter(raw);
      const contentMarkdown = resolveFullMarkdown(meta, body);
      const title = stripQuotes(meta.title || firstHeading(body) || path.basename(file, '.md'));
      const date = stripQuotes(meta.date || new Date(fs.statSync(fullPath).mtimeMs).toISOString().slice(0, 10));
      const tags = Array.isArray(meta.tags) ? meta.tags : [];
      const [category, filter] = pickCategory(`${title}\n${body}`, meta);

      return {
        file,
        title,
        date,
        tags,
        category,
        filter,
        explicitCategory: Boolean(meta.category || meta.filter),
        readtime: estimateReadTime(contentMarkdown, meta),
        summary: summaryFrom(body, meta),
        markdown: contentMarkdown,
        preserveLineBreaks: String(meta.preserve_line_breaks || '').toLowerCase() === 'true',
      };
    });
}

function selectArticleFiles(articles) {
  if (!onlyArticle) return articles;
  const requested = normalizeTitle(onlyArticle.replace(/\.md$/i, ''));
  return articles.filter((article) => {
    const fileName = path.basename(article.file, path.extname(article.file));
    return normalizeTitle(fileName) === requested || normalizeTitle(article.title) === requested;
  });
}

function nextImageKey(existing, index) {
  const used = existing
    .map((item) => String(item.imageKey || ''))
    .map((key) => Number(key.replace(/^column/, '')))
    .filter((num) => Number.isFinite(num));
  const max = used.length ? Math.max(...used) : 0;
  return `column${max + index + 1}`;
}

function jsString(value) {
  return util.inspect(value, {
    depth: null,
    maxArrayLength: null,
    breakLength: 80,
    compact: false,
  });
}

function writeColumnData(articles) {
  const sorted = articles.slice().sort((a, b) => {
    const dateCompare = String(b.date || '').localeCompare(String(a.date || ''));
    if (dateCompare) return dateCompare;
    return String(a.title || '').localeCompare(String(b.title || ''), 'zh-CN');
  });
  const body = `var COLUMN_DATA = ${jsString(sorted)};\n\nif(typeof window !== 'undefined'){\n  window.COLUMN_DATA = COLUMN_DATA;\n}\n`;
  if (!dryRun) fs.writeFileSync(columnDataPath, body);
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

const columnContentDataPath = path.join(publicDir, 'js/column-content-data.js');

function readColumnContentData() {
  if (!fs.existsSync(columnContentDataPath)) return {};
  const code = readText(columnContentDataPath);
  // Parse the JS object: var COLUMN_CONTENT_DATA = { ... };
  const match = code.match(/var COLUMN_CONTENT_DATA\s*=\s*({[\s\S]*?});\s*$/);
  if (!match) return {};
  try {
    // Use JSON.parse-like approach by evaluating with vm
    const context = { COLUMN_CONTENT_DATA: null };
    vm.createContext(context);
    vm.runInContext('COLUMN_CONTENT_DATA = ' + match[1], context, { filename: columnContentDataPath });
    return context.COLUMN_CONTENT_DATA || {};
  } catch (e) {
    console.warn('Warning: Could not parse existing column-content-data.js, will regenerate:', e.message);
    return {};
  }
}

function escapeForJsString(text) {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t');
}

function writeColumnContentData(merged, selectedSlugs) {
  // Read all existing content HTML files and build the data object
  const existingData = readColumnContentData();
  const newData = { ...existingData };

  let added = 0;
  let updated = 0;

  merged.forEach((article) => {
    if (selectedSlugs && !selectedSlugs.has(article.slug)) return;
    if (!article.contentFile) return;
    const htmlPath = path.join(publicDir, article.contentFile);
    if (!fs.existsSync(htmlPath)) return;

    const slug = article.slug;
    const htmlContent = readText(htmlPath).trim();

    if (!existingData[slug]) {
      added++;
    } else if (existingData[slug] !== htmlContent) {
      updated++;
    } else {
      return; // unchanged
    }
    newData[slug] = htmlContent;
  });

  if (added === 0 && updated === 0) return;
  if (dryRun) {
    console.log(`Column content data: ${added} added, ${updated} updated (dry-run, not written)`);
    return;
  }

  // Build the JS file: each entry as a key-value pair with properly escaped strings
  const entries = Object.entries(newData).map(([slug, html]) => {
    return `  "${slug}": "${escapeForJsString(html)}"`;
  });

  const body = `var COLUMN_CONTENT_DATA = {\n${entries.join(',\n')}\n};\n`;
  fs.writeFileSync(columnContentDataPath, body);
  console.log(`Column content data: ${added} added, ${updated} updated`);
}

function main() {
  const existing = loadExistingColumnData();
  const existingBySlug = new Map(existing.map((item) => [item.slug, item]));
  const synced = selectArticleFiles(loadArticleFiles());

  if (onlyArticle && synced.length === 0) {
    throw new Error(`Article not found for --only: ${onlyArticle}`);
  }

  let added = 0;
  let updated = 0;
  const selectedSlugs = new Set();

  ensureDir(columnContentDir);

  synced.forEach((article, index) => {
    const slug = slugFor(article, existing);
    selectedSlugs.add(slug);
    const old = existingBySlug.get(slug);
    const contentFile = `column-content/${slug}.html`;
    const next = {
      slug,
      title: article.title,
      category: old && !article.explicitCategory ? old.category : article.category,
      filter: old && !article.explicitCategory ? old.filter : article.filter,
      date: article.date,
      readtime: article.readtime,
      summary: article.summary,
      tags: article.tags.length
        ? article.tags
        : (old && Array.isArray(old.tags) ? old.tags : []),
      imageKey: old && old.imageKey ? old.imageKey : nextImageKey(existing, index),
      contentFile,
    };
    if (old && old.featured) next.featured = true;

    existingBySlug.set(slug, next);
    if (old) updated += 1;
    else added += 1;

    const htmlPath = path.join(publicDir, contentFile);
    if (!dryRun) {
      fs.writeFileSync(htmlPath, markdownToArticleHtml(article.markdown, {
        preserveLineBreaks: article.preserveLineBreaks,
      }));
    }
  });

  const merged = Array.from(existingBySlug.values());
  if (!merged.some((item) => item.featured) && merged.length) {
    merged.sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')))[0].featured = true;
  }

  writeColumnData(merged);
  writeColumnContentData(merged, onlyArticle ? selectedSlugs : null);

  console.log(`Column sync ${dryRun ? 'preview' : 'complete'}`);
  console.log(`Source articles: ${synced.length}`);
  if (onlyArticle) console.log(`Scoped article: ${onlyArticle}`);
  console.log(`Updated: ${updated}`);
  console.log(`Added: ${added}`);
  console.log(`Total website articles: ${merged.length}`);
  if (dryRun) console.log('No files were written because --dry-run was used.');
}

if (require.main === module) main();

module.exports = { markdownToArticleHtml };
