---
title: LLM Wiki Overview
type: overview
status: active
created: 2026-05-20
updated: 2026-06-23
tags:
  - llm-wiki
  - overview
  - ai-native-work
related:
  - "[[LLM Wiki]]"
  - "[[Agentic Workflow]]"
  - "[[RAG]]"
  - "[[Basalt Project]]"
  - "[[Personal Operating System]]"
  - "[[LLM Wiki 운영 흐름]]"
  - "[[AI 실험 문화]]"
  - "[[Cross-functional 기술 문제 해결]]"
  - "[[하네스 엔지니어링]]"
  - "[[기업 AI 운영 레이어]]"
  - "[[LLM-as-a-Judge]]"
  - "[[AI-native Startup]]"
  - "[[Open Knowledge Format]]"
  - "[[공익적 상호운용성]]"
sensitivity: private
evidence_level: unsourced
---

# LLM Wiki 실행 대시보드

이 페이지는 Obsidian에서 먼저 여는 실행 화면이다. `wiki/index.md`는 전체 목차로 유지하고, 이 페이지는 오늘 처리할 작업, 후속 작업 queue, 근거 보강 후보를 좁혀 보여준다.

## 현재 상태

- 자료 요약: 102개
- 개념 페이지: 51개
- 도구 페이지: 39개
- 프로젝트 페이지: 2개
- 아이디어 페이지: 2개
- 기회 카드: 0개
- MVP / PoC 페이지: 1개
- 결정 기록: 1개
- 회의록 요약: 0개
- 재사용 질문 답변: 2개
- 최근 구조 점검: 2026-06-23, lint errors 0 / warnings 3

최근 비판적 리뷰: [[llm-wiki-review-2026-05-29]]

## 오늘 하나만 할 일

- Codex에서는 먼저 `#wiki review`를 실행해 상태, 추천, 바로 쓸 명령, 근거를 확인한다.
- 새 자료가 있으면 `#wiki ingest <url-or-raw-path>`로 시작하되, 영향 범위가 애매하면 triage만 먼저 한다.
- 후보가 애매하면 `#wiki idea <idea>`로 [[아이디어 개선 루프]]를 실제 아이디어 1개에 적용한다.

## 후속 작업 queue

- [[아이디어 개선 루프]]를 새 아이디어 1개에 적용한다.
- [[Codex Harness]] 관련 공식 developer docs와 CLI repository를 별도 source로 확인한다.
- [[oh-my-codex]] GitHub repository와 npm package를 별도 source로 확인한다.
- [[SkillOpt]] GitHub repository와 arXiv 논문을 별도 source로 확인한다.
- [[Matt Pocock Skills]]의 `grill-with-docs`, `diagnose`, `handoff`를 LLM Wiki용 skill 후보로 검토한다.
- [[MiniMax M3]] 공식 페이지, technical report, Hugging Face/GitHub weights 공개 여부를 별도 source로 확인한다.
- [[Clicky]]의 `clicky agent` action surface, provider별 retention/training opt-out, backend proxy retention을 추가 확인한다.
- [[Claude Opus 4.8]] System Card와 Claude Code Dynamic Workflows의 실제 CLI availability, workflow permission boundary, token budget 동작을 별도 확인한다.
- Google I/O 2026 발표 중 Gemini Spark, Google Antigravity, SynthID는 product-specific source를 별도 확인한다.
- [[Figma Console MCP]]와 `uSpec.design` GitHub repository를 별도 source로 확인한다.
- [[Codex Sites]]는 실제 workspace availability, RBAC, D1/R2 storage, access control 조건을 별도 확인한다.
- [[에이전틱 엔진 최적화]]는 Addy Osmani AEO 원문, Cloudflare Agent-Ready 도구, llms.txt, MCP Server Card 자료로 보강한다.
- [[React Effect Naming]]을 React 공식 문서와 원문 글로 보강한다.
- [[Micro Frontend]]를 Module Federation, Next.js Multi-zone, monorepo modular frontend 공식 자료로 보강한다.
- [[CSS 구조화]]와 [[Tailwind CSS]]를 Tailwind 공식 문서, MDN CSS grid/container query 자료로 보강한다.
- [[CI/CD 배포 파이프라인]]을 Jenkins, GitHub Actions, NCP 공식 문서로 보강한다.
- [[OSINT]] 관점에서 secret scanning, GitHub exposure, MCP endpoint 노출 점검 자료를 보강한다.
- [[Frontier Systems]] 관점에서 one-person frontier lab이 만들 산출물 기준을 정한다.
- [[PDCA 사이클]]을 LLM Wiki 유지보수와 MVP 검증의 최소 반복 루프로 적용할 수 있는지 확인한다.
- [[HyDE]] 원 논문과 query rewriting, multi-query retrieval 비교 자료를 확인한다.
- [[SpaceX IPO 논쟁]]은 SEC S-1, Nasdaq/S&P/FTSE index rule, Starship/Starlink 기술 자료로 검증한다.
- [[토스증권 Open API]]는 실제 사용 신청 조건, 약관, 주문 자동화 허용 범위, streaming/websocket 지원 시점을 별도 확인하고, [[tossinvest-cli]]는 내부 API 자동화 약관·session security·endpoint 변경 위험이 해소되기 전 설치하지 않는다.
- [[레버리지 ETF 변동성 끌림]]은 TQQQ/SOXL 등 레버리지 ETF의 공식 자료와 total return data로 검증한다.
- [[Claude Fable 5]]는 System Card, risk report, 독립 장기 작업 평가, 30일 보존 세부 정책으로 보강한다.
- [[구조화된 답변 프레임워크]]를 실제 query answer 또는 프로젝트 설명 1건에 적용해 형식이 내용보다 앞서는지 점검한다.
- [[Humanize KR]]는 전역 설치 전에 read-only 탐지 evaluation과 installer dry-run으로 과잉 탐지, link 보존, 변경 범위를 확인한다.
- [[TurboVec]]는 LLM Wiki 검색 실패 query set과 FTS5 baseline이 준비되기 전에는 설치하지 않고 hybrid retrieval 후보로만 유지한다.
- [[MEDDPICC]]를 B2B PoC 검토에 적용할 최소 qualification 항목으로 줄일 수 있는지 확인한다.
- [[AI 실험 문화]]를 개인 운영체계에 적용할 월 1회 실험 시간과 artifact 기준을 정한다.
- [[Cross-functional 기술 문제 해결]]의 문제·결정·owner·dependency·next action·done evidence 진단 형식을 정체된 작업 1개에 적용한다.
- [[하네스 엔지니어링]] 관점에서 wiki ingest의 instruction, skill, script, artifact, lint 중 중복되거나 source of truth가 불명확한 규칙을 점검한다.
- [[기업 AI 운영 레이어]] 관점에서 개인 workflow의 공통 context, permission, state, audit artifact를 최소 구성으로 정의한다.
- [[LLM-as-a-Judge]] 원 논문과 후속 연구를 확인하고, wiki ingest용 최소 calibration set과 rubric을 설계한다.
- [[PyTorchKR AI ML Papers 2026 06 08 14]]에서 연결한 Economy of Minds, Self-Harness, LiveBrowseComp 원 논문을 우선 확인한다.
- [[SeedUp]]의 PlayMCP tool schema와 자격요건 답변의 원문 근거 표시 방식을 확인한다.
- [[의도적 아웃리치]]를 LLM Wiki source ingest 후 작성자에게 보낼 3문장 follow-up draft 기준으로 줄여본다.
- [[Forward Deployed Engineer]]를 product engineer, solutions engineer, implementation consultant와 구분하는 책임·경제성 체크리스트를 정리한다.
- JobKorea가 재인용한 Bloomberry FDE 공고 1,000건 분석의 원문과 분류 기준을 확인한다.
- [[AI 시대의 제안]]에서 개인 PoC용 최소 discovery·qualification·human review checklist를 만든다.
- [[LLM 생성 파라미터]]를 최신 OpenAI·Hugging Face 공식 문서로 보강하고 task별 eval preset을 검토한다.
- [[글로벌 곡물 공급망]]은 USDA 2025년 11월판 원문과 목적지별 수출 통계로 수치, marketing year, 전망치 여부를 검증한다.
- [[스타트업 지수 성장]]을 현재 아이디어 또는 MVP 1개에 적용해 성장률, retention, 추천, 절대 증가량을 함께 기록한다.
- [[AI-native Startup]]의 Idea/MVP stage gate를 기존 아이디어 또는 MVP 1개에 적용해 build 전 검증 기준과 PMF proxy를 명시한다.
- [[Prefect]]는 Horizon의 MCP gateway, registry, governance 기능을 공식 docs로 확인한다.
- [[Tavily]]는 search/extract/crawl/research endpoint, pricing, prompt injection 방어, benchmark methodology를 공식 docs로 확인한다.
- [[Open Knowledge Format]]은 GitHub spec, reference implementation, sample bundle을 별도 source로 확인하고 현재 LLM Wiki schema와 export mapping을 검토한다.
- [[Caddy]]는 공식 문서로 `tls internal`, admin endpoint, 자동 HTTPS, systemd service, reverse proxy 보안 설정을 확인한다.
- [[공익적 상호운용성]]은 rHWP·Polaris MCFG 원자료와 국내 저작권·계약 법제를 확인하고, KrIGF 세션 결과 보고서가 공개되면 제안과 실제 합의를 구분해 갱신한다.
- [[Mailpit]]은 실제 PoC의 이메일 flow에 적용할 recipient, subject, body link, token expiry, one-time use assertion과 CI 격리 구성을 정한다.
- [[TimesFM]]은 주문 signal과 분리된 read-only benchmark에서 seasonal naive·statistical baseline, walk-forward error, quantile calibration을 먼저 검증한다.
- [[DESIGN.md]]를 기존 PoC 하나에 적용해 visual consistency, 수정 횟수, responsive·accessibility 검증 기준이 실제로 개선되는지 확인한다.
- [[Ponytail]]은 전역 plugin 설치 전에 repository-local instruction 또는 read-only diff review로 기본 agent와 correctness·test·dependency·LOC·rework를 비교한다.
- [[ECMAScript 표준화와 연간 업데이트]]는 target browser·Node version을 정한 뒤 ES2025·ES2026 API adoption 표를 만든다.

## MVP 승격 후보

- 없음. 새 아이디어는 먼저 `draft` 또는 `refining` 상태에서 문제정의와 방향성 적합성을 확인한다.

## 대기 중인 실행 후보

- [[AI 트렌드 레이더 웹사이트]]
- [[AI 트렌드 레이더 7일 PoC]]
- [[토스증권 API 투자 운영 시스템]]

## 근거 보강 후보

- [[LLM Wiki]]
- [[Personal Operating System]]
- [[Basalt Project]]
- [[RAG vs Agentic Workflow]]
- [[React Effect Naming]]
- [[Micro Frontend]]
- [[CSS 구조화]]
- [[Tailwind CSS]]
- [[CI/CD 배포 파이프라인]]
- [[Jenkins]]
- [[Matt Pocock Skills]]
- [[MiniMax M3]]
- [[Clicky]]
- [[oh-my-codex]]
- [[SkillOpt]]
- [[Claude Opus 4.8]]
- [[OSINT]]
- [[Frontier Systems]]
- [[일본 IT 업계]]
- [[Clicky 공개 repo와 현재 제품 privacy boundary]]
- [[디자인 스펙 자동화]]
- [[Figma Console MCP]]
- [[Codex Sites]]
- [[AI 시대의 기술 면접]]
- [[에이전틱 엔진 최적화]]
- [[PDCA 사이클]]
- [[HyDE]]
- [[SpaceX IPO 논쟁]]
- [[토스증권 Open API]]
- [[tossinvest-cli]]
- [[토스증권 API 투자 운영 시스템]]
- [[레버리지 ETF 변동성 끌림]]
- [[Claude Fable 5]]
- [[구조화된 답변 프레임워크]]
- [[Humanize KR]]
- [[TurboVec]]
- [[MEDDPICC]]
- [[AI 실험 문화]]
- [[Cross-functional 기술 문제 해결]]
- [[하네스 엔지니어링]]
- [[Kiro]]
- [[기업 AI 운영 레이어]]
- [[LLM-as-a-Judge]]
- [[Forward Deployed Engineer]]
- [[AI 시대의 제안]]
- [[LLM 생성 파라미터]]
- [[글로벌 곡물 공급망]]
- [[SeedUp]]
- [[의도적 아웃리치]]
- [[AI-native Startup]]
- [[Prefect]]
- [[Tavily]]
- [[Open Knowledge Format]]
- [[Caddy]]
- [[공익적 상호운용성]]
- [[Mailpit]]
- [[TimesFM]]
- [[DESIGN.md]]
- [[getdesign.md]]
- [[Ponytail]]
- [[ECMAScript 표준화와 연간 업데이트]]

## 다음 행동

- Codex 명령은 `#wiki ingest`, `#wiki ask`, `#wiki idea`, `#wiki review` 네 가지를 기본 진입점으로 쓴다.
- 실행 후보는 한 번에 하나만 MVP / PoC 또는 maintenance task로 관리한다.
- weekly review가 "없음"으로 끝나면 log의 `후속 작업:`과 source summary의 `검증 필요 주장`을 먼저 본다.
- 좋은 질문이 생기면 일회성 답변으로 끝내지 말고 [[LLM Wiki 운영 흐름]] 기준으로 저장 가치가 있는지 판단한다.
- 여러 source가 쌓인 주제는 단순 요약 대신 비교, 질문 답변, decision record로 승격한다.

## 반복 루틴

- 오늘 작업 선택: `#wiki review` 또는 `node scripts/wiki-review.ts`로 상태, 추천, 바로 쓸 명령, 근거를 확인한다.
- 새 자료 처리: `#wiki ingest <url-or-raw-path>`를 기본으로 쓰고, 필요하면 `node scripts/new-source.ts <raw-path-or-url>`로 triage 초안을 먼저 본다.
- 질문 처리: `#wiki ask <question>`로 답변하고, 반복 참조 가치가 있을 때만 `wiki/questions/`에 저장한다.
- 아이디어 처리: `#wiki idea <idea>`로 원형 메모, 문제, 내가 끌린 이유, 방향성 적합성, 대상 사용자, 사용 맥락, 해결 가설, 보류 조건을 먼저 분리한다.
- 아이디어 개선: 특정 아이템보다 더 일반화한 문제와 더 작게 줄인 형태를 함께 기록한다.
- MVP / PoC 처리: 성공 기준과 1주 실험 계획을 먼저 쓰고, 다음 작업이 없으면 active 상태로 두지 않는다.
- 회의록 처리: 핵심 논의보다 결정과 액션 아이템을 우선 추출하고 관련 project, mvp, idea에 연결한다.
- 결정 처리: 선택지와 포기한 대안을 남겨 같은 판단을 반복하지 않게 한다.
- 질문 저장: 반복 참조 가치가 있는 답변만 `wiki/questions/`에 저장하고 관련 페이지와 저장 이유를 남긴다.
- 프로젝트 결정 기록: 장기 프로젝트에 영향을 주는 판단은 project page에 근거, 결정, 후속 작업을 분리해 남긴다.
- 여러 자료 종합: 같은 주제의 source가 2개 이상이면 공통 주장, 차이, 검증 필요 주장을 따로 정리한다.
- 주간 점검: `node scripts/lint-wiki.ts`로 frontmatter, 링크, index 누락, taxonomy 문제를 확인한다.
- 주간 리뷰: 자세한 후보 목록이 필요하면 `node scripts/weekly-review.ts`로 실행 후보, log 후속 작업, 근거 보강 후보를 확인한다.
- 기회 리뷰: `node scripts/opportunity-review.ts`로 idea/MVP와 source tag 패턴을 보되 자동 점수는 검토 힌트로만 쓴다.

## 주요 진입점

- Codex 짧은 명령: `#wiki ingest`, `#wiki ask`, `#wiki idea`, `#wiki review`
- 전체 목차: [[LLM Wiki Index]]
- 운영 흐름: [[LLM Wiki 운영 흐름]]
- Ingest 대기: `inbox/to-ingest.md`
- 아이디어 임시 저장: `inbox/ideas/`
- 아이디어 페이지: `wiki/ideas/`
- 기회 카드와 리뷰: `wiki/opportunities/`
- MVP / PoC 페이지: `wiki/mvps/`
- 결정 기록: `wiki/decisions/`
- 회의록 요약: `wiki/meetings/`
- 주간 리뷰: `wiki/reviews/`
- 프로젝트: [[Basalt Project]], [[Personal Operating System]]
- 비교: [[RAG vs Agentic Workflow]]
- 리뷰: [[llm-wiki-review-2026-05-29]]
- 최근 lint 기준: [[lint-2026-05-20]]

## 열린 질문

- 개인 AI workflow에서 안정적인 vocabulary가 되어야 할 개념은 무엇인가?
- 어떤 아이디어가 source-backed이고, 어떤 아이디어가 개인 가설인가?
- 프로젝트 결정 사항과 일반 개념 노트를 어떻게 분리해야 하는가?
- 대시보드에서 자동 집계해야 할 항목과 사람이 직접 관리해야 할 항목은 무엇인가?
- 어떤 아이디어를 단순 메모로 남기고, 어떤 아이디어를 1주 실험으로 승격해야 하는가?
- 회의 액션 아이템을 어느 수준까지 위키에 남겨야 관리 부담보다 재사용 가치가 커지는가?
- weekly review에서 자동 후보를 얼마나 줄여야 실제 작업 선택으로 이어지는가?
- AI 도구 사용 능력과 foundational engineering skill을 채용 또는 개인 역량 평가에서 어떻게 분리할 것인가?
