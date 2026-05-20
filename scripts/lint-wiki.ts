#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const ROOT = process.cwd();
const WIKI_DIR = path.join(ROOT, "wiki");
const INDEX_PATH = path.join(WIKI_DIR, "index.md");
const REQUIRED_FIELDS = [
  "title",
  "type",
  "status",
  "created",
  "updated",
  "tags",
  "related",
  "sensitivity",
  "evidence_level",
];
const SOURCE_FIELDS = [
  "source_id",
  "original_path",
  "date_added",
  "domain",
  "content_type",
  "knowledge_role",
  "source_quality",
  "use_for",
  "related_pages",
];
const ENGLISH_HEADING =
  /^#{1,3} (Source|Type|Date Added|Original Location|Summary|Key Claims|Important Concepts|Related Pages|Open Questions|Notes|Definition|Why It Matters|Key Ideas|Use Cases|Limitations|Strengths|Purpose|Background|Core Features|Recommended Actions|Missing Links|Stale Claims|Contradictions)\b/m;

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
  const fields = new Set();
  for (const line of raw.split("\n")) {
    const match = line.match(/^([A-Za-z0-9_-]+):/);
    if (match) fields.add(match[1]);
  }
  const values = new Map();
  for (const line of raw.split("\n")) {
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (match) values.set(match[1], match[2].replace(/^["']|["']$/g, ""));
  }
  return { raw, fields, values };
}

function pageTitleFromFile(filePath) {
  return path.basename(filePath, ".md");
}

function buildKnownPages(files) {
  const pages = new Map();
  for (const file of files) {
    const title = pageTitleFromFile(file);
    pages.set(title, file);
    const content = fs.readFileSync(file, "utf8");
    const frontmatter = parseFrontmatter(content);
    const frontmatterTitle = frontmatter && frontmatter.values.get("title");
    if (frontmatterTitle) pages.set(frontmatterTitle, file);
  }
  return pages;
}

function extractLinks(content) {
  const links = [];
  const re = /\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|[^\]]+)?\]\]/g;
  let match;
  while ((match = re.exec(content))) {
    links.push(match[1].trim());
  }
  return links;
}

function todayReportPath() {
  const today = new Date().toISOString().slice(0, 10);
  return path.join(WIKI_DIR, "reports", `lint-${today}.md`);
}

function addIssue(target, message) {
  target.push(message);
}

function printSection(title, items) {
  console.log(`\n## ${title}`);
  if (items.length === 0) {
    console.log("- 없음");
    return;
  }
  for (const item of items) console.log(`- ${item}`);
}

function main() {
  if (!fs.existsSync(WIKI_DIR)) {
    console.error("wiki/ 디렉터리를 찾을 수 없습니다.");
    process.exitCode = 2;
    return;
  }

  const files = walk(WIKI_DIR);
  const pages = buildKnownPages(files);
  const indexContent = fs.existsSync(INDEX_PATH)
    ? fs.readFileSync(INDEX_PATH, "utf8")
    : "";

  const errors = [];
  const warnings = [];
  const frontmatterIssues = [];
  const taxonomyIssues = [];
  const brokenLinks = [];
  const indexOmissions = [];
  const englishHeadings = [];
  const reportIssues = [];

  for (const file of files) {
    const content = fs.readFileSync(file, "utf8");
    const frontmatter = parseFrontmatter(content);
    const relativePath = rel(file);

    if (!frontmatter) {
      addIssue(frontmatterIssues, `${relativePath}: YAML frontmatter 없음`);
      continue;
    }

    for (const field of REQUIRED_FIELDS) {
      if (!frontmatter.fields.has(field)) {
        addIssue(frontmatterIssues, `${relativePath}: 필수 field 누락 - ${field}`);
      }
    }

    if (relativePath.startsWith("wiki/sources/")) {
      for (const field of SOURCE_FIELDS) {
        if (!frontmatter.fields.has(field)) {
          addIssue(taxonomyIssues, `${relativePath}: source field 누락 - ${field}`);
        }
      }
    }

    if (ENGLISH_HEADING.test(content)) {
      addIssue(englishHeadings, `${relativePath}: 영어 section heading 후보 발견`);
    }

    if (!relativePath.startsWith("wiki/reports/")) {
      const seenLinks = new Set();
      for (const link of extractLinks(content)) {
        const key = `${relativePath}:${link}`;
        if (seenLinks.has(key)) continue;
        seenLinks.add(key);
        if (link.startsWith("raw/")) {
          addIssue(brokenLinks, `${relativePath}: raw path를 wiki link로 사용 - [[${link}]]`);
        } else if (!pages.has(link)) {
          addIssue(brokenLinks, `${relativePath}: 대상 페이지 없음 - [[${link}]]`);
        }
      }
    }
  }

  const majorDirs = [
    "wiki/concepts/",
    "wiki/projects/",
    "wiki/tools/",
    "wiki/comparisons/",
    "wiki/questions/",
    "wiki/sources/",
    "wiki/reports/",
  ];
  for (const file of files) {
    const relativePath = rel(file);
    if (!majorDirs.some((dir) => relativePath.startsWith(dir))) continue;
    const content = fs.readFileSync(file, "utf8");
    const frontmatter = parseFrontmatter(content);
    const title = (frontmatter && frontmatter.values.get("title")) || pageTitleFromFile(file);
    const type = frontmatter && frontmatter.values.get("type");
    if (type === "index-draft") continue;
    if (!indexContent.includes(`[[${title}]]`)) {
      addIssue(indexOmissions, `${relativePath}: wiki/index.md 본문에 [[${title}]] 없음`);
    }
  }

  const reportPath = todayReportPath();
  if (fs.existsSync(reportPath)) {
    addIssue(reportIssues, `${rel(reportPath)}: 오늘 날짜 report 생성 시 충돌 가능`);
  }

  errors.push(...frontmatterIssues);
  warnings.push(
    ...taxonomyIssues,
    ...brokenLinks,
    ...indexOmissions,
    ...englishHeadings,
    ...reportIssues,
  );

  console.log("# LLM Wiki Lint");
  console.log(`검사 파일 수: ${files.length}`);
  printSection("Frontmatter 문제", frontmatterIssues);
  printSection("Source taxonomy 문제", taxonomyIssues);
  printSection("깨진 링크 / 미생성 페이지", brokenLinks);
  printSection("Index 누락", indexOmissions);
  printSection("영어 section heading", englishHeadings);
  printSection("Report 생성 시 충돌 가능", reportIssues);
  console.log("\n## 요약");
  console.log(`- errors: ${errors.length}`);
  console.log(`- warnings: ${warnings.length}`);

  if (errors.length > 0) process.exitCode = 1;
}

main();
