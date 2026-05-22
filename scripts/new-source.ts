#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const ROOT = process.cwd();
const WIKI_DIR = path.join(ROOT, "wiki");

function isUrl(value) {
  return /^https?:\/\//i.test(value);
}

function rel(filePath) {
  return path.relative(ROOT, filePath);
}

function parseArgs(argv) {
  const target = argv[2];
  return { target, help: argv.includes("--help") || argv.includes("-h") };
}

function printHelp() {
  console.log(`사용법:
  node scripts/new-source.ts <raw-path-or-url>

예:
  node scripts/new-source.ts raw/external/example.md
  node scripts/new-source.ts https://example.com/article

이 명령은 repo 파일을 수정하지 않고 ingest triage 초안만 stdout으로 출력합니다.`);
}

function inferContentType(target) {
  if (isUrl(target)) return "article";
  const ext = path.extname(target).toLowerCase();
  if ([".md", ".html", ".htm", ".txt"].includes(ext)) return "article";
  if (ext === ".pdf") return "paper";
  if ([".json", ".csv", ".tsv"].includes(ext)) return "dataset";
  if ([".png", ".jpg", ".jpeg", ".gif", ".webp"].includes(ext)) return "image";
  if ([".mp3", ".mp4", ".vtt", ".srt"].includes(ext)) return "transcript";
  return "note";
}

function inferDomainHints(target) {
  const lower = target.toLowerCase();
  const domains = [];
  if (/(ai|llm|agent|rag|codex|claude|openai|model)/.test(lower)) domains.push("ai");
  if (/(api|github|repo|code|react|webkit|software|mcp)/.test(lower)) domains.push("software");
  if (/(quant|trading|finance|investment)/.test(lower)) domains.push("finance");
  if (/(marketing|clarity|business|cro|ux)/.test(lower)) domains.push("business");
  if (/(paper|research|study|논문)/.test(lower)) domains.push("research");
  if (domains.length === 0) domains.push("ai");
  return [...new Set(domains)];
}

function getFileInfo(target) {
  if (isUrl(target)) {
    return {
      kind: "url",
      exists: false,
      rawPathWarning: "",
      size: "",
      originalPath: "",
    };
  }

  const absolute = path.resolve(ROOT, target);
  const exists = fs.existsSync(absolute);
  const relative = exists ? rel(absolute) : target;
  const stats = exists ? fs.statSync(absolute) : null;
  const rawPathWarning = relative.startsWith("raw/")
    ? ""
    : "주의: 입력 파일이 raw/ 아래에 있지 않습니다. ingest 전에 raw/에 원문 snapshot을 먼저 보존하는 것이 좋습니다.";

  return {
    kind: "file",
    exists,
    rawPathWarning,
    size: stats ? `${stats.size} bytes` : "",
    originalPath: relative,
  };
}

function renderTriage(target, info) {
  const today = new Date().toISOString().slice(0, 10);
  const contentType = inferContentType(target);
  const domains = inferDomainHints(target);
  const sourceQuality = isUrl(target) ? "practitioner" : "intro";
  const originalPath = info.originalPath || "(URL 원문 snapshot 저장 후 기록)";
  const rawWarning = info.rawPathWarning ? `- ${info.rawPathWarning}\n` : "";

  return `# Ingest Triage Draft

## 대상 자료

- 입력: ${target}
- 입력 유형: ${info.kind}
- 파일 존재: ${info.kind === "file" ? (info.exists ? "예" : "아니오") : "해당 없음"}
- 파일 크기: ${info.size || "해당 없음"}
- 원본 위치 후보: ${originalPath}
${rawWarning}
## 저장 가치

- 판단: 검토 필요
- 이유: 원문을 읽기 전 자동 초안이므로 저장 가치는 확정하지 않는다.
- 보류 조건: 출처 신뢰도가 낮거나 기존 wiki page에 새 정보를 추가하지 못하면 ingest하지 않는다.

## 실행 가치

- 연결할 아이디어:
- MVP / PoC 후보:
- 회의록 또는 결정 기록 후보:
- 1주 안에 검증할 수 있는가:

## Domain / 분류

- domain: ${domains.join(", ")}
- content_type: ${contentType}
- knowledge_role: source, reference
- source_quality: ${sourceQuality}
- use_for: reference

## 생성할 페이지 후보

- source summary: wiki/sources/<source-id>.md
- concept/tool/project 후보: 원문 확인 후 결정

## 갱신할 페이지 후보

- wiki/index.md: source나 관련 page가 추가되면 갱신
- wiki/overview.md: source, concept, tool, project, idea, mvp, decision, meeting, question 수가 바뀌면 갱신
- wiki/log.md: ingest 또는 보류 결정 후 기록

## 모순 가능성

- 원문 확인 전에는 판단하지 않는다.
- 기존 source-backed page와 충돌하는 주장이 있으면 contradiction note 또는 검증 필요 주장으로 분리한다.

## 확인 필요 주장

- 원문 핵심 주장
- 수치, 날짜, 버전, 가격, 성능, 법/정책 관련 주장
- 제품/도구의 현재 상태처럼 바뀔 수 있는 주장

## 사용자 승인 필요 변경

- 기존 concept/tool/project page의 의미 있는 결론 변경
- 민감도 변경
- source 간 충돌 처리
- 대량 page 생성

## 권장 작업

1. 원문을 raw/에 보존한다.
2. source summary를 작성한다.
3. 관련 page 후보를 기존 index와 검색으로 확인한다.
4. 필요한 page만 작게 갱신한다.
5. lint와 stats를 실행한다.

## 보류 사유

- 원문 접근 불가
- 중복 자료
- 출처 품질 부족
- 현재 프로젝트와 연결 약함

---

- generated_at: ${today}
- generated_by: scripts/new-source.ts
- note: 이 초안은 read-only triage output이며 repo 파일을 수정하지 않았습니다.
`;
}

function main() {
  const args = parseArgs(process.argv);
  if (args.help || !args.target) {
    printHelp();
    process.exitCode = args.help ? 0 : 1;
    return;
  }

  if (!fs.existsSync(WIKI_DIR)) {
    console.error("wiki/ 디렉터리를 찾을 수 없습니다.");
    process.exitCode = 2;
    return;
  }

  const info = getFileInfo(args.target);
  if (info.kind === "file" && !info.exists) {
    console.error(`입력 파일을 찾을 수 없습니다: ${args.target}`);
    process.exitCode = 1;
    return;
  }

  process.stdout.write(renderTriage(args.target, info));
}

main();
