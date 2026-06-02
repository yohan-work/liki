#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");
const { execFileSync } = require("node:child_process");

const ROOT = process.cwd();
const WIKI_DIR = path.join(ROOT, "wiki");
const EXECUTABLE_STATUSES = new Set(["draft", "refining", "candidate", "active"]);

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

function collectPages() {
  return walk(WIKI_DIR).map((filePath) => {
    const content = fs.readFileSync(filePath, "utf8");
    const fm = parseFrontmatter(content);
    return {
      title: fm.get("title") || path.basename(filePath, ".md"),
      type: fm.get("type") || "unknown",
      status: fm.get("status") || "unknown",
    };
  });
}

function runScript(scriptName) {
  try {
    return execFileSync(process.execPath, [path.join("scripts", scriptName)], {
      cwd: ROOT,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
  } catch (error) {
    const stderr = error.stderr ? String(error.stderr).trim() : "";
    const stdout = error.stdout ? String(error.stdout).trim() : "";
    return [stdout, stderr, `${scriptName} 실행 실패`].filter(Boolean).join("\n");
  }
}

function sectionBody(content, heading) {
  const index = content.indexOf(heading);
  if (index === -1) return "";
  const after = content.slice(index + heading.length);
  const next = after.search(/\n## /);
  return (next === -1 ? after : after.slice(0, next)).trim();
}

function firstBullet(text, skipPatterns = []) {
  return (
    text
      .split("\n")
      .map((line) => line.trim())
      .find((line) => {
        if (!line.startsWith("- ") || line === "- 없음") return false;
        return !skipPatterns.some((pattern) => pattern.test(line));
      }) || ""
  );
}

function parseLint(output) {
  const errors = Number((output.match(/- errors: (\d+)/) || [])[1] || 0);
  const warnings = Number((output.match(/- warnings: (\d+)/) || [])[1] || 0);
  return { errors, warnings };
}

function countType(pages, type) {
  return pages.filter((page) => page.type === type).length;
}

function executableCount(pages, type) {
  return pages.filter((page) => page.type === type && EXECUTABLE_STATUSES.has(page.status)).length;
}

function buildRecommendation({ lint, executableIdeas, executableMvps, weeklyFirst, opportunityFirst }) {
  if (lint.errors > 0 || lint.warnings > 0) {
    return {
      recommendation: "구조 문제를 먼저 정리한다.",
      command: "node scripts/lint-wiki.ts",
      reason: "lint 문제가 있으면 ingest나 idea 확장보다 위키 구조 신뢰도를 먼저 회복하는 편이 낫다.",
    };
  }

  if (executableIdeas === 0 && executableMvps === 0) {
    return {
      recommendation: "새 아이디어 1개를 `#wiki idea`로 정리해 active 후보를 만든다.",
      command: '#wiki idea "<아이디어 한 문장>"',
      reason: "현재 실행 가능한 idea/MVP가 없어 opportunity-review가 유망 기회를 만들지 못한다.",
    };
  }

  if (opportunityFirst) {
    return {
      recommendation: opportunityFirst.replace(/^- /, ""),
      command: "#wiki idea <이 후보를 1주 검증 형태로 줄인 설명>",
      reason: "opportunity-review가 이미 실행 후보를 잡았으므로, 다음 단계는 검증 가능한 형태로 줄이는 것이다.",
    };
  }

  if (weeklyFirst) {
    return {
      recommendation: weeklyFirst.replace(/^- /, ""),
      command: "#wiki ingest <관련 source URL 또는 raw path>",
      reason: "weekly-review의 첫 후보가 현재 log 후속 작업 중 가장 가까운 실행 항목이다.",
    };
  }

  return {
    recommendation: "위키에 남길 새 질문이나 아이디어 1개를 고른다.",
    command: "#wiki ask <반복해서 다시 볼 질문>",
    reason: "구조 문제는 없지만 다음 실행 후보가 비어 있다.",
  };
}

function main() {
  if (!fs.existsSync(WIKI_DIR)) {
    console.error("wiki/ 디렉터리를 찾을 수 없습니다.");
    process.exitCode = 2;
    return;
  }

  const lintOutput = runScript("lint-wiki.ts");
  const statsOutput = runScript("wiki-stats.ts");
  const weeklyOutput = runScript("weekly-review.ts");
  const opportunityOutput = runScript("opportunity-review.ts");
  const pages = collectPages();

  const lint = parseLint(lintOutput);
  const executableIdeas = executableCount(pages, "idea");
  const executableMvps = executableCount(pages, "mvp");
  const weeklyFirst = firstBullet(sectionBody(weeklyOutput, "## 이번 주 실행 후보"), [
    /#wiki/,
    /명령/,
    /추천 우선순위/,
  ]);
  const opportunityFirst = firstBullet(sectionBody(opportunityOutput, "## 이번 주 가장 유망한 기회"));
  const recommendation = buildRecommendation({
    lint,
    executableIdeas,
    executableMvps,
    weeklyFirst,
    opportunityFirst,
  });

  console.log("# Wiki Review");
  console.log("");
  console.log("## 상태");
  console.log(`- lint: errors ${lint.errors} / warnings ${lint.warnings}`);
  console.log(`- 자료 요약: ${countType(pages, "source")}개`);
  console.log(`- 실행 가능한 idea: ${executableIdeas}개`);
  console.log(`- 실행 가능한 MVP / PoC: ${executableMvps}개`);
  console.log(`- opportunity 후보: ${opportunityFirst ? opportunityFirst.replace(/^- /, "") : "없음"}`);
  console.log("");
  console.log("## 추천");
  console.log(`- ${recommendation.recommendation}`);
  console.log("");
  console.log("## 바로 쓸 명령");
  console.log("");
  console.log("```text");
  console.log(recommendation.command);
  console.log("```");
  console.log("");
  console.log("## 근거");
  console.log(`- ${recommendation.reason}`);
  if (weeklyFirst) console.log(`- weekly-review 첫 후보: ${weeklyFirst.replace(/^- /, "")}`);
  console.log("");
  console.log("## 실행한 점검");
  console.log("- node scripts/lint-wiki.ts");
  console.log("- node scripts/wiki-stats.ts");
  console.log("- node scripts/weekly-review.ts");
  console.log("- node scripts/opportunity-review.ts");

  if (!statsOutput.includes("# LLM Wiki Stats")) {
    process.exitCode = 1;
  }
}

main();
