#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const ROOT = process.cwd();
const WIKI_DIR = path.join(ROOT, "wiki");

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(fullPath));
    if (entry.isFile() && entry.name.endsWith(".md")) files.push(fullPath);
  }
  return files;
}

function rel(filePath) {
  return path.relative(ROOT, filePath);
}

function parseArgs(argv) {
  const args = { query: "", type: "", domain: "", sourceQuality: "" };
  const parts = [];
  for (let i = 2; i < argv.length; i += 1) {
    const current = argv[i];
    const next = argv[i + 1];
    if (current === "--type") {
      args.type = next || "";
      i += 1;
    } else if (current === "--domain") {
      args.domain = next || "";
      i += 1;
    } else if (current === "--source-quality") {
      args.sourceQuality = next || "";
      i += 1;
    } else if (current === "--help" || current === "-h") {
      args.help = true;
    } else {
      parts.push(current);
    }
  }
  args.query = parts.join(" ").trim();
  return args;
}

function parseFrontmatter(content) {
  if (!content.startsWith("---\n")) return { values: new Map(), raw: "", body: content };
  const end = content.indexOf("\n---", 4);
  if (end === -1) return { values: new Map(), raw: "", body: content };
  const raw = content.slice(4, end).trim();
  const body = content.slice(end + 4);
  const values = new Map();
  const lines = raw.split("\n");
  for (let i = 0; i < lines.length; i += 1) {
    const match = lines[i].match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!match) continue;
    const key = match[1];
    const inlineValue = match[2].replace(/^["']|["']$/g, "");
    const list = [];
    let j = i + 1;
    while (j < lines.length) {
      const item = lines[j].match(/^\s+-\s+(.+)$/);
      if (!item) break;
      list.push(item[1].replace(/^["']|["']$/g, ""));
      j += 1;
    }
    values.set(key, list.length > 0 ? list : inlineValue);
  }
  return { values, raw, body };
}

function includesValue(value, needle) {
  if (!needle) return true;
  if (Array.isArray(value)) return value.includes(needle);
  return value === needle;
}

function makeSnippet(text, query) {
  const compact = text.replace(/\s+/g, " ").trim();
  const lower = compact.toLowerCase();
  const index = lower.indexOf(query.toLowerCase());
  if (index === -1) return compact.slice(0, 160);
  const start = Math.max(0, index - 60);
  const end = Math.min(compact.length, index + query.length + 100);
  return `${start > 0 ? "..." : ""}${compact.slice(start, end)}${end < compact.length ? "..." : ""}`;
}

function printHelp() {
  console.log(`사용법:
  node scripts/search-wiki.ts <keyword> [--type concept] [--domain ai] [--source-quality official]

예:
  node scripts/search-wiki.ts RAG
  node scripts/search-wiki.ts agent --type concept
  node scripts/search-wiki.ts API --domain software --source-quality practitioner`);
}

function main() {
  const args = parseArgs(process.argv);
  if (args.help || !args.query) {
    printHelp();
    process.exitCode = args.help ? 0 : 1;
    return;
  }
  if (!fs.existsSync(WIKI_DIR)) {
    console.error("wiki/ 디렉터리를 찾을 수 없습니다.");
    process.exitCode = 2;
    return;
  }

  const results = [];
  for (const file of walk(WIKI_DIR)) {
    const content = fs.readFileSync(file, "utf8");
    const parsed = parseFrontmatter(content);
    const title = parsed.values.get("title") || path.basename(file, ".md");
    const type = parsed.values.get("type") || "";
    const domain = parsed.values.get("domain") || [];
    const sourceQuality = parsed.values.get("source_quality") || "";

    if (!includesValue(type, args.type)) continue;
    if (!includesValue(domain, args.domain)) continue;
    if (!includesValue(sourceQuality, args.sourceQuality)) continue;

    const haystack = `${title}\n${parsed.raw}\n${parsed.body}`;
    if (!haystack.toLowerCase().includes(args.query.toLowerCase())) continue;

    results.push({
      title,
      type,
      path: rel(file),
      snippet: makeSnippet(haystack, args.query),
    });
  }

  console.log("# LLM Wiki Search");
  console.log(`query: ${args.query}`);
  if (args.type) console.log(`type: ${args.type}`);
  if (args.domain) console.log(`domain: ${args.domain}`);
  if (args.sourceQuality) console.log(`source_quality: ${args.sourceQuality}`);
  console.log(`results: ${results.length}`);
  console.log("");

  for (const result of results) {
    console.log(`## [[${result.title}]]`);
    console.log(`- path: ${result.path}`);
    console.log(`- type: ${result.type}`);
    console.log(`- snippet: ${result.snippet}`);
    console.log("");
  }
}

main();
