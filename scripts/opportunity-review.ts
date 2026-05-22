#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const ROOT = process.cwd();
const WIKI_DIR = path.join(ROOT, "wiki");
const OPPORTUNITIES_DIR = path.join(WIKI_DIR, "opportunities");
const REVIEW_TYPES = new Set(["idea", "mvp", "meeting", "decision", "source", "tool", "project", "question"]);

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

function today() {
  return new Date().toISOString().slice(0, 10);
}

function parseArgs(argv) {
  return {
    writeDraft: argv.includes("--write-draft"),
    help: argv.includes("--help") || argv.includes("-h"),
  };
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

function pageTitleFromFile(filePath) {
  return path.basename(filePath, ".md");
}

function readPage(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const parsed = parseFrontmatter(content);
  return {
    filePath,
    path: rel(filePath),
    title: parsed.values.get("title") || pageTitleFromFile(filePath),
    type: parsed.values.get("type") || "unknown",
    status: parsed.values.get("status") || "unknown",
    evidence: parsed.values.get("evidence_level") || "unknown",
    updated: parsed.values.get("updated") || "",
    tags: Array.isArray(parsed.values.get("tags")) ? parsed.values.get("tags") : [],
    content,
  };
}

function sectionBody(content, heading) {
  const index = content.indexOf(heading);
  if (index === -1) return "";
  const after = content.slice(index + heading.length);
  const next = after.search(/\n## /);
  return (next === -1 ? after : after.slice(0, next)).trim();
}

function firstMeaningfulLine(text) {
  const line = text
    .split("\n")
    .map((value) => value.trim())
    .find((value) => value && value !== "-" && !value.startsWith("<!--"));
  return line ? line.replace(/^-\s+/, "") : "정리 필요";
}

function wikilink(page) {
  return "[[" + page.title + "]]";
}

function scoreIdea(page) {
  let score = 0;
  const quickTest = sectionBody(page.content, "## 빠른 검증 방법");
  const reuse = sectionBody(page.content, "## 재사용 가능성");
  const next = sectionBody(page.content, "## 다음 행동");
  const problem = sectionBody(page.content, "## 문제");
  const users = sectionBody(page.content, "## 대상 사용자");
  const hold = sectionBody(page.content, "## 보류 조건");
  if (problem) score += 2;
  if (users) score += 2;
  if (quickTest) score += 3;
  if (reuse) score += 2;
  if (next) score += 2;
  if (hold) score += 1;
  return Math.min(score, 10);
}

function collectPages() {
  return walk(WIKI_DIR)
    .map(readPage)
    .filter((page) => REVIEW_TYPES.has(page.type));
}

function collectTags(pages) {
  const counts = new Map();
  for (const page of pages) {
    for (const tag of page.tags) counts.set(tag, (counts.get(tag) || 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 8)
    .map(([tag, count]) => "- " + tag + ": " + count + "회");
}

function buildReview(pages) {
  const ideas = pages.filter((page) => page.type === "idea" && ["draft", "active"].includes(page.status));
  const mvps = pages.filter((page) => page.type === "mvp" && ["draft", "active"].includes(page.status));
  const sources = pages.filter((page) => page.type === "source");
  const opportunities = ideas
    .map((page) => ({
      page,
      score: scoreIdea(page),
      next: firstMeaningfulLine(sectionBody(page.content, "## 다음 행동")),
      mvp: firstMeaningfulLine(sectionBody(page.content, "## 빠른 검증 방법")),
      risk: firstMeaningfulLine(sectionBody(page.content, "## 보류 조건")),
    }))
    .sort((a, b) => b.score - a.score || a.page.title.localeCompare(b.page.title));
  return { opportunities, mvps, sources, patterns: collectTags([...ideas, ...mvps, ...sources]) };
}

function renderOpportunityItems(items) {
  if (items.length === 0) return "- 없음";
  return items.slice(0, 5).map((item) => "- " + wikilink(item.page) + " · 실행 점수 " + item.score + "/10 · " + item.next).join("\n");
}

function renderPromotionItems(items) {
  if (items.length === 0) return "- 없음";
  return items.slice(0, 5).map((item) => "- " + wikilink(item.page) + " · MVP 후보: " + item.mvp).join("\n");
}

function renderRiskItems(items) {
  if (items.length === 0) return "- 없음";
  return items.slice(0, 5).map((item) => "- " + wikilink(item.page) + " · 보류 조건: " + item.risk).join("\n");
}

function renderReview(review, options = {}) {
  const date = today();
  const lines = [];
  if (options.frontmatter) {
    lines.push(
      "---",
      "title: opportunity-review-" + date,
      "type: opportunity-review",
      "status: draft",
      "created: " + date,
      "updated: " + date,
      "tags:",
      "  - opportunity-review",
      "related:",
      "  - \"[[LLM Wiki Overview]]\"",
      "sensitivity: private",
      "evidence_level: unsourced",
      "---",
      "",
    );
  }
  lines.push(
    "# 기회 리뷰 " + date,
    "",
    "이 문서는 위키 안의 아이디어, MVP / PoC, 자료를 실행 기회 관점으로 재컴파일한 검토용 초안이다. 자동 점수는 확정 판단이 아니며, 실제 실행은 opportunity, mvp, decision page에 따로 반영한다.",
    "",
    "## 이번 주 가장 유망한 기회",
    "",
    renderOpportunityItems(review.opportunities),
    "",
    "## 새로 발견된 패턴",
    "",
    review.patterns.length === 0 ? "- 없음" : review.patterns.join("\n"),
    "",
    "## MVP로 승격할 후보",
    "",
    renderPromotionItems(review.opportunities),
    "",
    "## 더 모아야 할 자료",
    "",
    "- 유망 기회마다 경쟁 서비스, 실제 사용자 workflow, 1주 검증 데이터가 충분한지 확인한다.",
    "- source-backed 근거가 약한 기회는 원문 자료를 먼저 ingest한다.",
    "",
    "## 보류하거나 줄일 기회",
    "",
    renderRiskItems(review.opportunities),
    "",
    "## 다음 행동",
    "",
    "- 실행 점수 상위 1개를 opportunity card 또는 MVP / PoC page로 승격한다.",
    "- 승격하지 않는 후보는 보류 사유를 idea page에 남긴다.",
    "- 새 기회를 만들 때는 관련 source와 기존 idea를 반드시 연결한다.",
  );
  return lines.join("\n").trim() + "\n";
}

function reviewPath() {
  return path.join(OPPORTUNITIES_DIR, "opportunity-review-" + today() + ".md");
}

function printHelp() {
  console.log(`사용법:
  node scripts/opportunity-review.ts
  node scripts/opportunity-review.ts --write-draft

기본 동작은 read-only stdout 출력입니다. --write-draft는 wiki/opportunities/opportunity-review-YYYY-MM-DD.md 파일을 만들며, 기존 파일은 덮어쓰지 않습니다.`);
}

function main() {
  const args = parseArgs(process.argv);
  if (args.help) {
    printHelp();
    return;
  }
  if (!fs.existsSync(WIKI_DIR)) {
    console.error("wiki/ 디렉터리를 찾을 수 없습니다.");
    process.exitCode = 2;
    return;
  }
  const output = renderReview(buildReview(collectPages()), { frontmatter: args.writeDraft });
  if (!args.writeDraft) {
    process.stdout.write(output);
    return;
  }
  if (!fs.existsSync(OPPORTUNITIES_DIR)) fs.mkdirSync(OPPORTUNITIES_DIR, { recursive: true });
  const target = reviewPath();
  if (fs.existsSync(target)) {
    console.error(rel(target) + " 파일이 이미 존재합니다. 덮어쓰지 않습니다.");
    process.exitCode = 1;
    return;
  }
  fs.writeFileSync(target, output);
  console.log(rel(target) + " 파일을 생성했습니다.");
}

main();
