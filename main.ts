// High-performance driver for markdown-render-speed-02
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from './parse.js';

const INPUT_DIR = process.env.MAKEFUN_INPUT_DIR ?? '/input';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const casesRaw = readFileSync(join(INPUT_DIR, 'cases.json'), 'utf8');
const cases: { id: string; markdown: string }[] = JSON.parse(casesRaw);

const n = cases.length;
const html = new Array(n);
for (let i = 0; i < n; i++) {
  html[i] = parse(cases[i].markdown);
}

writeFileSync(join(OUTPUT_DIR, 'html.json'), JSON.stringify(html));
