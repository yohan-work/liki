#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const ROOT = process.cwd();
const WIKI_DIR = path.join(ROOT, "wiki");
const LOG_PATH = path.join(WIKI_DIR, "log.md");
const OVERVIEW_PATH = path.join(WIKI_DIR, "overview.md");

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

function parseFrontmatter(content) {
  if (!content.startsWith("---\n")) return new Map();
  const end = content.indexOf("\n---", 4);
  if (end === -1) return new Map();
  const raw = content.slice(4, end).trim();
  const values = new Map();
  for (const line of raw.split("\n")) {
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (match) values.set(match[1], match[2].replace(/^["']|["']$/g, ""));
  }
  return values;
}

function increment(map, key) {
  const normalized = key || "unknown";
  map.set(normalized, (map.get(normalized) || 0) + 1);
}

function collectPages() {
  return walk(WIKI_DIR).map((filePath) => {
    const content = fs.readFileSync(filePath, "utf8");
    const fm = parseFrontmatter(content);
    return {
      filePath,
      title: fm.get("title") || path.basename(filePath, ".md"),
      type: fm.get("type") || "unknown",
      status: fm.get("status") || "unknown",
      evidence: fm.get("evidence_level") || "unknown",
      updated: fm.get("updated") || "",
    };
  });
}

function latestLintReport(pages) {
  const reports = pages
    .filter((page) => page.type === "lint-report")
    .sort((a, b) => b.updated.localeCompare(a.updated) || b.title.localeCompare(a.title));
  return reports[0] || null;
}

function latestLogDate() {
  if (!fs.existsSync(LOG_PATH)) return "";
  const content = fs.readFileSync(LOG_PATH, "utf8");
  const matches = [...content.matchAll(/^## \[(\d{4}-\d{2}-\d{2})\]/gm)];
  if (matches.length === 0) return "";
  const dates = matches.map((match) => match[1]).sort();
  return dates[dates.length - 1];
}

function buildStats(pages) {
  const byType = new Map();
  const byStatus = new Map();
  const byEvidence = new Map();
  for (const page of pages) {
    increment(byType, page.type);
    increment(byStatus, page.status);
    increment(byEvidence, page.evidence);
  }
  return {
    total: pages.length,
    byType,
    byStatus,
    byEvidence,
    latestLint: latestLintReport(pages),
    latestLogDate: latestLogDate(),
  };
}

function getCount(stats, type) {
  return stats.byType.get(type) || 0;
}

function overviewStatusText(stats) {
  if (fs.existsSync(OVERVIEW_PATH)) {
    const overview = fs.readFileSync(OVERVIEW_PATH, "utf8");
    const match = overview.match(/^- 최근 구조 점검: (.+)$/m);
    if (match) return match[1];
  }
  const lint = stats.latestLint;
  return lint ? `${lint.updated}, ${lint.title}` : "없음";
}

function renderOverviewBlock(stats) {
  const lintText = overviewStatusText(stats);
  return `## 현재 상태

- 자료 요약: ${getCount(stats, "source")}개
- 개념 페이지: ${getCount(stats, "concept")}개
- 도구 페이지: ${getCount(stats, "tool")}개
- 프로젝트 페이지: ${getCount(stats, "project")}개
- 아이디어 페이지: ${getCount(stats, "idea")}개
- 기회 카드: ${getCount(stats, "opportunity")}개
- MVP / PoC 페이지: ${getCount(stats, "mvp")}개
- 결정 기록: ${getCount(stats, "decision")}개
- 회의록 요약: ${getCount(stats, "meeting")}개
- 재사용 질문 답변: ${getCount(stats, "question")}개
- 최근 구조 점검: ${lintText}
`;
}

function renderMap(title, map) {
  const lines = [`## ${title}`];
  const entries = [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  for (const [key, value] of entries) lines.push(`- ${key}: ${value}`);
  return lines.join("\n");
}

function main() {
  if (!fs.existsSync(WIKI_DIR)) {
    console.error("wiki/ 디렉터리를 찾을 수 없습니다.");
    process.exitCode = 2;
    return;
  }

  const overviewBlockOnly = process.argv.includes("--overview-block");
  const pages = collectPages();
  const stats = buildStats(pages);

  if (overviewBlockOnly) {
    process.stdout.write(renderOverviewBlock(stats));
    return;
  }

  console.log("# LLM Wiki Stats");
  console.log(`- 전체 Markdown page: ${stats.total}`);
  console.log(`- 최근 log entry: ${stats.latestLogDate || "없음"}`);
  console.log("");
  console.log(renderMap("Type별 개수", stats.byType));
  console.log("");
  console.log(renderMap("Status별 개수", stats.byStatus));
  console.log("");
  console.log(renderMap("Evidence별 개수", stats.byEvidence));
}

main();
