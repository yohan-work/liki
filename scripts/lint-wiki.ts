#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const ROOT = process.cwd();
const WIKI_DIR = path.join(ROOT, "wiki");
const INDEX_PATH = path.join(WIKI_DIR, "index.md");
const OVERVIEW_PATH = path.join(WIKI_DIR, "overview.md");
const STALE_SEED_DAYS = 30;
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
const TYPE_SECTION_REQUIREMENTS = {
  idea: ["## 문제", "## 해결 가설", "## 빠른 검증 방법", "## 다음 행동"],
  opportunity: ["## 왜 지금인가", "## 해결할 수 있는 문제", "## 연결된 기존 아이디어", "## 만들 수 있는 MVP", "## 1주 검증 방법", "## 다음 행동"],
  "opportunity-review": ["## 이번 주 가장 유망한 기회", "## 새로 발견된 패턴", "## MVP로 승격할 후보", "## 더 모아야 할 자료", "## 다음 행동"],
  mvp: ["## 목표", "## 범위", "## 성공 기준", "## 1주 실험 계획", "## 다음 작업"],
  decision: ["## 결정", "## 근거", "## 선택지", "## 되돌릴 조건"],
  meeting: ["## 회의 목적", "## 핵심 논의", "## 결정", "## 액션 아이템"],
  "weekly-review": ["## 이번 주 실행 후보", "## MVP / PoC 승격 후보", "## 결정이 필요한 항목", "## 근거 보강 후보", "## 다음 주까지의 최소 행동"],
};
const OVERVIEW_COUNT_LABELS = [
  ["source", "자료 요약"],
  ["concept", "개념 페이지"],
  ["tool", "도구 페이지"],
  ["project", "프로젝트 페이지"],
  ["idea", "아이디어 페이지"],
  ["opportunity", "기회 카드"],
  ["mvp", "MVP / PoC 페이지"],
  ["decision", "결정 기록"],
  ["meeting", "회의록 요약"],
  ["question", "재사용 질문 답변"],
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

function daysSince(dateText) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateText || "")) return 0;
  const then = new Date(`${dateText}T00:00:00Z`);
  const now = new Date();
  return Math.floor((now - then) / 86400000);
}

function hasSourcePageLink(content, pages) {
  return extractLinks(content).some((link) => {
    const target = pages.get(link);
    return target && rel(target).startsWith("wiki/sources/");
  });
}

function sectionBody(content, heading) {
  const index = content.indexOf(heading);
  if (index === -1) return null;
  const after = content.slice(index + heading.length);
  const next = after.search(/\n## /);
  return (next === -1 ? after : after.slice(0, next)).trim();
}

function buildTypeCounts(files) {
  const counts = new Map();
  for (const file of files) {
    const content = fs.readFileSync(file, "utf8");
    const frontmatter = parseFrontmatter(content);
    const type = (frontmatter && frontmatter.values.get("type")) || "unknown";
    counts.set(type, (counts.get(type) || 0) + 1);
  }
  return counts;
}

function parseOverviewCounts(content) {
  const counts = new Map();
  for (const [type, label] of OVERVIEW_COUNT_LABELS) {
    const match = content.match(new RegExp(`- ${label}: (\\d+)개`));
    if (match) counts.set(type, Number(match[1]));
  }
  return counts;
}

function main() {
  if (!fs.existsSync(WIKI_DIR)) {
    console.error("wiki/ 디렉터리를 찾을 수 없습니다.");
    process.exitCode = 2;
    return;
  }

  const files = walk(WIKI_DIR);
  const pages = buildKnownPages(files);
  const typeCounts = buildTypeCounts(files);
  const indexContent = fs.existsSync(INDEX_PATH)
    ? fs.readFileSync(INDEX_PATH, "utf8")
    : "";

  const errors = [];
  const warnings = [];
  const frontmatterIssues = [];
  const taxonomyIssues = [];
  const typeSectionIssues = [];
  const executionIssues = [];
  const sourceQualityIssues = [];
  const overviewIssues = [];
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

      const verifyBody = sectionBody(content, "## 검증 필요 주장");
      if (verifyBody !== null && /^(-\s*)?(없음|해당 없음|없다)\.?$/m.test(verifyBody.trim())) {
        addIssue(sourceQualityIssues, `${relativePath}: 검증 필요 주장 섹션이 비어 있거나 없음 처리됨`);
      }
    }

    const type = frontmatter.values.get("type");
    const status = frontmatter.values.get("status");
    const evidence = frontmatter.values.get("evidence_level");
    const updated = frontmatter.values.get("updated");
    const requiredSections = TYPE_SECTION_REQUIREMENTS[type] || [];
    for (const section of requiredSections) {
      if (!content.includes(section)) {
        addIssue(typeSectionIssues, `${relativePath}: ${type} 필수 섹션 누락 - ${section}`);
      }
    }

    if (status === "seed" && evidence === "unsourced" && daysSince(updated) > STALE_SEED_DAYS) {
      addIssue(sourceQualityIssues, `${relativePath}: unsourced seed page가 ${STALE_SEED_DAYS}일 넘게 갱신되지 않음`);
    }

    if (["concept", "tool", "comparison"].includes(type) && evidence === "source-backed") {
      if (!hasSourcePageLink(content, pages)) {
        addIssue(sourceQualityIssues, `${relativePath}: source-backed page지만 wiki/sources/ page 링크가 없음`);
      }
    }

    if (type === "mvp" && status === "active") {
      if (/## 성공 기준\s*\n\s*(## |$)/m.test(content)) {
        addIssue(executionIssues, `${relativePath}: active MVP의 성공 기준이 비어 있음`);
      }
      if (/## 다음 작업\s*$/m.test(content)) {
        addIssue(executionIssues, `${relativePath}: active MVP의 다음 작업이 비어 있음`);
      }
    }

    if (type === "meeting" && content.includes("## 액션 아이템") && !/\[\[[^\]]+\]\]/.test(content)) {
      addIssue(executionIssues, `${relativePath}: 회의 액션 아이템이 관련 project/mvp/idea에 연결되지 않았을 수 있음`);
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

  if (fs.existsSync(OVERVIEW_PATH)) {
    const overviewCounts = parseOverviewCounts(fs.readFileSync(OVERVIEW_PATH, "utf8"));
    for (const [type, label] of OVERVIEW_COUNT_LABELS) {
      const actual = typeCounts.get(type) || 0;
      const shown = overviewCounts.get(type);
      if (shown !== undefined && shown !== actual) {
        addIssue(overviewIssues, `wiki/overview.md: ${label} 수치 불일치 - 표시 ${shown}, 실제 ${actual}`);
      }
    }
  }

  const majorDirs = [
    "wiki/concepts/",
    "wiki/projects/",
    "wiki/ideas/",
    "wiki/opportunities/",
    "wiki/mvps/",
    "wiki/decisions/",
    "wiki/meetings/",
    "wiki/reviews/",
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
    if (["index-draft", "weekly-review", "opportunity-review"].includes(type)) continue;
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
    ...typeSectionIssues,
    ...executionIssues,
    ...sourceQualityIssues,
    ...overviewIssues,
    ...brokenLinks,
    ...indexOmissions,
    ...englishHeadings,
    ...reportIssues,
  );

  console.log("# LLM Wiki Lint");
  console.log(`검사 파일 수: ${files.length}`);
  printSection("Frontmatter 문제", frontmatterIssues);
  printSection("Source taxonomy 문제", taxonomyIssues);
  printSection("실행 페이지 구조 문제", typeSectionIssues);
  printSection("MVP / 회의 운영 경고", executionIssues);
  printSection("출처 / 검증 품질 경고", sourceQualityIssues);
  printSection("Overview 수치 경고", overviewIssues);
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
