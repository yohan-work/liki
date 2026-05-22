#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const ROOT = process.cwd();
const WIKI_DIR = path.join(ROOT, "wiki");
const REPORTS_DIR = path.join(WIKI_DIR, "reports");
const TYPE_ORDER = [
  ["overview", "개요"],
  ["concept", "개념"],
  ["project", "프로젝트"],
  ["idea", "아이디어"],
  ["mvp", "MVP / PoC"],
  ["decision", "결정"],
  ["meeting", "회의록"],
  ["weekly-review", "주간 리뷰"],
  ["tool", "도구"],
  ["people", "인물"],
  ["person", "인물"],
  ["comparison", "비교"],
  ["question", "질문"],
  ["source", "자료"],
  ["lint-report", "리포트"],
  ["index-draft", "Index Draft"],
  ["index", "Index"],
  ["log", "Log"],
];

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

function parseFrontmatter(content) {
  if (!content.startsWith("---\n")) return null;
  const end = content.indexOf("\n---", 4);
  if (end === -1) return null;
  const raw = content.slice(4, end).trim();
  const values = new Map();
  for (const line of raw.split("\n")) {
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (match) values.set(match[1], match[2].replace(/^["']|["']$/g, ""));
  }
  return values;
}

function readPage(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const fm = parseFrontmatter(content);
  const fallbackTitle = path.basename(filePath, ".md");
  return {
    filePath,
    title: (fm && fm.get("title")) || fallbackTitle,
    type: (fm && fm.get("type")) || "unknown",
    status: (fm && fm.get("status")) || "unknown",
    evidence: (fm && fm.get("evidence_level")) || "unknown",
  };
}

function groupPages(pages) {
  const groups = new Map();
  for (const page of pages) {
    if (page.type === "index" || page.type === "log") continue;
    if (!groups.has(page.type)) groups.set(page.type, []);
    groups.get(page.type).push(page);
  }
  for (const group of groups.values()) {
    group.sort((a, b) => a.title.localeCompare(b.title));
  }
  return groups;
}

function render(groups, options = {}) {
  const lines = [];
  if (options.frontmatter) {
    const today = new Date().toISOString().slice(0, 10);
    lines.push(
      "---",
      `title: index-draft-${today}`,
      "type: index-draft",
      "status: draft",
      `created: ${today}`,
      `updated: ${today}`,
      "tags:",
      "  - index",
      "  - draft",
      "related:",
      "  - \"[[LLM Wiki Index]]\"",
      "sensitivity: private",
      "evidence_level: unsourced",
      "---",
      "",
    );
  }
  lines.push(
    "# LLM Wiki Index Draft",
    "",
    "이 문서는 자동 생성된 index 후보입니다. `wiki/index.md`를 직접 덮어쓰지 않습니다.",
    "",
  );

  const renderedTypes = new Set();
  for (const [type, label] of TYPE_ORDER) {
    const pages = groups.get(type);
    if (!pages || pages.length === 0) continue;
    renderedTypes.add(type);
    lines.push(`## ${label}`, "");
    for (const page of pages) {
      lines.push(`- [[${page.title}]] · ${page.status} · ${page.evidence}`);
    }
    lines.push("");
  }

  const remainingTypes = [...groups.keys()].filter((type) => !renderedTypes.has(type)).sort();
  for (const type of remainingTypes) {
    lines.push(`## 기타: ${type}`, "");
    for (const page of groups.get(type)) {
      lines.push(`- [[${page.title}]] · ${page.status} · ${page.evidence}`);
    }
    lines.push("");
  }

  return `${lines.join("\n").trim()}\n`;
}

function todayDraftPath() {
  const today = new Date().toISOString().slice(0, 10);
  return path.join(REPORTS_DIR, `index-draft-${today}.md`);
}

function main() {
  const writeDraft = process.argv.includes("--write-draft");

  if (!fs.existsSync(WIKI_DIR)) {
    console.error("wiki/ 디렉터리를 찾을 수 없습니다.");
    process.exitCode = 2;
    return;
  }

  const pages = walk(WIKI_DIR).map(readPage);
  const output = render(groupPages(pages), { frontmatter: writeDraft });

  if (!writeDraft) {
    process.stdout.write(output);
    return;
  }

  if (!fs.existsSync(REPORTS_DIR)) fs.mkdirSync(REPORTS_DIR, { recursive: true });
  const draftPath = todayDraftPath();
  if (fs.existsSync(draftPath)) {
    console.error(`${rel(draftPath)} 파일이 이미 존재합니다. 덮어쓰지 않습니다.`);
    process.exitCode = 1;
    return;
  }

  fs.writeFileSync(draftPath, output);
  console.log(`${rel(draftPath)} 파일을 생성했습니다.`);
}

main();
