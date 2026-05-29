#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const ROOT = process.cwd();
const WIKI_DIR = path.join(ROOT, "wiki");
const REVIEWS_DIR = path.join(WIKI_DIR, "reviews");
const LOG_FILE = path.join(WIKI_DIR, "log.md");
const REVIEW_TYPES = new Set(["idea", "mvp", "meeting", "decision", "concept", "tool", "project", "comparison", "question", "source"]);

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
  if (!content.startsWith("---\n")) return { values: new Map(), body: content };
  const end = content.indexOf("\n---", 4);
  if (end === -1) return { values: new Map(), body: content };
  const raw = content.slice(4, end).trim();
  const body = content.slice(end + 4);
  const values = new Map();
  for (const line of raw.split("\n")) {
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (match) values.set(match[1], match[2].replace(/^["']|["']$/g, ""));
  }
  return { values, body };
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

function bullet(page, note) {
  return "- " + wikilink(page) + " · " + page.status + " · " + (page.updated || "updated 없음") + " · " + note;
}

function collectLogFollowUps(limit = 5) {
  if (!fs.existsSync(LOG_FILE)) return [];
  const content = fs.readFileSync(LOG_FILE, "utf8");
  const seen = new Set();
  const items = [];
  for (const line of content.split("\n")) {
    const match = line.match(/^\s*-\s*후속 작업:\s*(.+)$/);
    if (!match) continue;
    const note = match[1].trim();
    if (!note || seen.has(note)) continue;
    seen.add(note);
    items.push("- " + note);
    if (items.length >= limit) break;
  }
  return items;
}

function collectPages() {
  return walk(WIKI_DIR)
    .map(readPage)
    .filter((page) => REVIEW_TYPES.has(page.type));
}

function buildReview(pages) {
  const ideas = pages.filter((page) => page.type === "idea" && ["draft", "active"].includes(page.status));
  const mvps = pages.filter((page) => page.type === "mvp" && ["draft", "active"].includes(page.status));
  const meetings = pages.filter((page) => page.type === "meeting");
  const decisions = pages.filter((page) => page.type === "decision");
  const unsourcedSeeds = pages.filter((page) => page.status === "seed" && page.evidence === "unsourced");
  const logFollowUps = collectLogFollowUps();
  const sourcesWithVerification = pages
    .filter((page) => page.type === "source")
    .map((page) => bullet(page, firstMeaningfulLine(sectionBody(page.content, "## 검증 필요 주장"))))
    .filter((item) => !item.endsWith("정리 필요"))
    .slice(0, 3);
  const directExecutionCandidates = [
    ...mvps.map((page) => bullet(page, firstMeaningfulLine(sectionBody(page.content, "## 다음 작업")))),
    ...ideas.map((page) => bullet(page, firstMeaningfulLine(sectionBody(page.content, "## 다음 행동")))),
  ];

  return {
    executionCandidates: directExecutionCandidates.length > 0 ? directExecutionCandidates : logFollowUps.slice(0, 3),
    mvpPromotionCandidates: ideas.map((page) => bullet(page, firstMeaningfulLine(sectionBody(page.content, "## 승격 조건")))),
    holdCandidates: ideas.map((page) => bullet(page, firstMeaningfulLine(sectionBody(page.content, "## 보류 조건")))),
    decisionNeeded: [
      ...ideas.map((page) => bullet(page, "MVP / PoC로 승격할지 판단")),
      ...mvps.map((page) => bullet(page, "계속 진행, 축소, 보류 중 하나를 결정")),
    ],
    meetingActions: meetings.map((page) => bullet(page, firstMeaningfulLine(sectionBody(page.content, "## 액션 아이템")))),
    sourceBackfill: unsourcedSeeds.map((page) => bullet(page, "근거를 보강하거나 seed 상태 유지 여부 판단")),
    followUps: decisions.map((page) => bullet(page, firstMeaningfulLine(sectionBody(page.content, "## 후속 작업")))),
    logFollowUps,
    sourceVerification: sourcesWithVerification,
  };
}

function renderList(items) {
  if (items.length === 0) return "- 없음";
  return items.join("\n");
}

function renderReview(review, options = {}) {
  const date = today();
  const lines = [];
  if (options.frontmatter) {
    lines.push(
      "---",
      "title: weekly-" + date,
      "type: weekly-review",
      "status: draft",
      "created: " + date,
      "updated: " + date,
      "tags:",
      "  - weekly-review",
      "related:",
      "  - \"[[LLM Wiki Overview]]\"",
      "sensitivity: private",
      "evidence_level: unsourced",
      "---",
      "",
    );
  }
  lines.push(
    "# 주간 리뷰 " + date,
    "",
    "이 문서는 위키 상태를 기반으로 만든 검토용 초안이다. 자동 후보는 확정 결정이 아니며, 실제 방향 변경은 관련 idea, mvp, decision page에 따로 반영한다.",
    "",
    "## 이번 주 실행 후보",
    "",
    renderList(review.executionCandidates),
    "",
    "## MVP / PoC 승격 후보",
    "",
    renderList(review.mvpPromotionCandidates),
    "",
    "## 보류할 아이디어",
    "",
    renderList(review.holdCandidates),
    "",
    "## 결정이 필요한 항목",
    "",
    renderList([...review.decisionNeeded, ...review.followUps]),
    "",
    "## 로그 후속 작업",
    "",
    renderList(review.logFollowUps),
    "",
    "## 검증 필요 주장",
    "",
    renderList(review.sourceVerification),
    "",
    "## 회의 액션 아이템",
    "",
    renderList(review.meetingActions),
    "",
    "## 근거 보강 후보",
    "",
    renderList(review.sourceBackfill),
    "",
    "## 다음 주까지의 최소 행동",
    "",
    "- 이번 주 실행 후보 중 1개만 실제 MVP / PoC 또는 다음 작업으로 확정한다.",
    "- 보류할 아이디어는 보류 사유를 idea page에 남긴다.",
    "- 방향을 바꾸는 판단은 decision record로 분리한다.",
  );
  return lines.join("\n").trim() + "\n";
}

function reviewPath() {
  return path.join(REVIEWS_DIR, "weekly-" + today() + ".md");
}

function printHelp() {
  console.log(`사용법:
  node scripts/weekly-review.ts
  node scripts/weekly-review.ts --write-draft

기본 동작은 read-only stdout 출력입니다. --write-draft는 wiki/reviews/weekly-YYYY-MM-DD.md 파일을 만들며, 기존 파일은 덮어쓰지 않습니다.`);
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

  if (!fs.existsSync(REVIEWS_DIR)) fs.mkdirSync(REVIEWS_DIR, { recursive: true });
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
