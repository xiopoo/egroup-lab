#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const publicDir = path.resolve(__dirname, '../public');
const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.html'));

const NEEDS_IMAGE_PATTERN = /src.*\.(jpg|png)|__IMAGE_URLS/;
const CONFIG_MARKER = /image-urls-v2\.js/;

const results = [];
let missing = [];

for (const file of files.sort()) {
  const content = fs.readFileSync(path.join(publicDir, file), 'utf-8');
  const needsImage = NEEDS_IMAGE_PATTERN.test(content);
  const hasConfig = CONFIG_MARKER.test(content);

  results.push({
    file,
    needsImage,
    hasConfig,
  });

  if (needsImage && !hasConfig) {
    missing.push(file);
  }
}

// Print summary table
const header = `${'File'.padEnd(30)} ${'Needs Image'.padEnd(15)} ${'Has Config'.padEnd(15)} ${'Status'}`;
const sep = '-'.repeat(header.length);
console.log(header);
console.log(sep);
for (const r of results) {
  const status = !r.needsImage ? '—' : r.hasConfig ? '✅' : '❌';
  console.log(
    `${r.file.padEnd(30)} ${String(r.needsImage).padEnd(15)} ${String(r.hasConfig).padEnd(15)} ${status}`
  );
}
console.log();

if (missing.length === 0) {
  console.log('✅ All pages have image-urls-v2.js');
  process.exit(0);
} else {
  console.log(`❌ Missing in: ${missing.join(', ')}`);
  process.exit(1);
}
