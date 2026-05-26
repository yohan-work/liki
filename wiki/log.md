---
title: LLM Wiki Log
type: log
status: active
created: 2026-05-20
updated: 2026-05-26
tags:
  - llm-wiki
  - log
related:
  - "[[LLM Wiki Index]]"
sensitivity: private
evidence_level: unsourced
---

# LLM Wiki Log

## [2026-05-26] ingest | GeekNews AWS 4년 퇴사 회고

- GeekNews 글 "Amazon Web Services - 4년 그리고 퇴사"를 raw HTML/Markdown snapshot으로 보존하고 [[GeekNews AWS Four Years and Leaving]]으로 ingest했다.
- GenAI 도입 압력, 고객 중심성 약화, AI 지원 봇 품질 문제, 오픈소스와 사용자 통제권 논점을 source summary로 분리했다.
- [[Claude Blue]], [[AI Literacy]], [[Human-in-the-loop]]에 AI-native work의 인간 검토, 고객 중심성, 대체 가능성 인식 관련 note를 연결했다.
- 변경 영역: [[GeekNews AWS Four Years and Leaving]], [[Claude Blue]], [[AI Literacy]], [[Human-in-the-loop]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: AWS 조직 상태나 지원 품질에 관한 일반화는 공식 발표, 독립 보도, 원문 회고를 별도로 대조한다.

## [2026-05-26] ingest | GeekNews Codex 활용 사례 확장 글

- GeekNews 글 "Codex, 활용 사례 모음 대폭 확장"을 raw HTML/Markdown snapshot으로 보존하고 [[GeekNews Codex Use Cases Expansion]]으로 ingest했다.
- Codex를 coding agent뿐 아니라 업무 context 수집, 검토 가능한 artifact 생성, 승인 기반 action, 반복 자동화, skill/CLI 축적 레이어로 [[Codex]]에 보강했다.
- [[Agentic Workflow]]와 [[Personal Operating System]]에 Codex use case library가 주는 workflow 설계 시사점을 연결했다.
- 변경 영역: [[GeekNews Codex Use Cases Expansion]], [[Codex]], [[Agentic Workflow]], [[Personal Operating System]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: 실제 Codex 기능 적용 전 OpenAI 공식 use cases 페이지와 계정별 integration 접근 조건을 재확인한다.

## [2026-05-26] ingest | KAILA AI 리터러시 개념 페이지

- 한국AI리터러시협회(KAILA)의 "AI 리터러시란?" 페이지를 raw HTML snapshot으로 보존하고 [[KAILA AI Literacy Page]]로 ingest했다.
- AI 리터러시를 올바른 이해, 비판적 사고, 윤리적 활용, 창의적 활용의 조합으로 정리해 [[AI Literacy]] concept page를 추가했다.
- [[LLM Wiki]], [[Human-in-the-loop]], [[Agentic Workflow]]와 연결해 개인 AI workflow의 판단 기준으로 활용할 수 있는 지점을 기록했다.
- 변경 영역: [[AI Literacy]], [[KAILA AI Literacy Page]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: 협회 자체 소개가 필요하면 `/KAILA` 페이지를 별도 source로 ingest하고, 국내외 교육 프로그램 관련 주장은 각 기관 공식 자료로 검증한다.

## [2026-05-26] ingest | OpenAI Realtime 모델 프롬프팅 가이드

- OpenAI Developers 문서 "Using realtime models"를 raw markdown snapshot으로 보존하고 [[OpenAI Realtime Models Prompting Guide]]로 ingest했다.
- Realtime API를 voice agent, tool orchestration, exact entity capture, confirmation boundary, escalation 설계 관점의 [[Realtime API]] 도구 페이지로 정리했다.
- [[Agentic Workflow]], [[Orchestration]], [[Human-in-the-loop]]에 realtime voice agent의 tool policy와 human confirmation boundary를 source-backed note로 연결했다.
- 변경 영역: [[Realtime API]], [[OpenAI Realtime Models Prompting Guide]], [[Agentic Workflow]], [[Orchestration]], [[Human-in-the-loop]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: 실제 voice agent 구현 전 model availability, pricing, Realtime 연결 방식, Custom Voices 접근 조건을 공식 문서 기준으로 다시 확인한다.

## 2026-05-20

- LLM Wiki 프로젝트 구조를 초기화했다.
- 핵심 개념, 프로젝트, 도구에 대한 seed 페이지를 추가했다.
- source summary, concept page, project page, tool page, query answer, lint report 템플릿을 추가했다.
- 초기 seed content를 unsourced 상태로 표시했다.
- 서울대학교 자연과학대학 뉴스룸 글 "숫자가 사고파는 시장: 퀀트 트레이딩의 구조와 작동 원리"를 [[SNU Newsroom Quant Trading Article]]로 ingest하고 [[Quant Trading]]을 추가했다.
- Brunch 글 "Claude Blue - 실리콘밸리 전체가 우울하다"를 [[Brunch Claude Blue Article]]로 ingest하고 [[Claude Blue]]를 추가했다.
- 기본 언어 정책을 한국어 중심으로 강화하고, 기존 영어 wiki 정리를 한국어로 변환했다.
- GitHub 저장소 yybmion/public-apis-4Kr를 [[GitHub Public APIs 4Kr Repository]]로 ingest하고 [[Public APIs 4Kr]] 도구 페이지를 추가했다.
- Naver Blog 글 "[금융공학] 퀀트투자 분석(1) - 퀀트와 전체 프로세스"를 [[Naver Blog Quant Investment Process Article]]로 ingest하고 [[Quant Trading]]을 갱신했다.
- 1차 고도화로 source summary, concept page, query answer, lint report 템플릿을 강화하고, 첫 comparison page [[RAG vs Agentic Workflow]]를 추가했다.
- 2차 고도화로 comparison page 템플릿을 추가하고, 첫 재사용 query answer [[LLM Wiki 운영 흐름]]을 저장했다.
- 3차 고도화로 첫 lint baseline [[lint-2026-05-20]]을 생성하고, lint 운영 규칙을 보강했다.
- 4차 고도화로 기존 source summary 4개를 새 템플릿 기준에 맞춰 정규화하고, `source_quality`와 `use_for`를 추가했다.
- 5차 고도화로 다양한 주제의 자료를 다루기 위한 범용 ingest taxonomy와 routing 규칙을 추가했다.
- 6차 고도화로 기존 source summary 전체에 `domain`, `content_type`, `knowledge_role` taxonomy를 역적용했다.
- 7차 고도화로 `scripts/lint-wiki.ts`를 read-only lint 스크립트로 구현했다.
- 8차 고도화로 `scripts/build-index.ts`를 read-only index draft generator로 구현했다.
- AI Hero 글 "11 Tips For AI Coding With Ralph Wiggum"을 [[AI Hero Ralph Wiggum Article]]로 ingest하고 [[Ralph Wiggum Loop]]를 추가했다.
- Tistory 글 "MCP SSE Remote사용하기"를 [[Tistory MCP Remote SSE Article]]로 ingest하고 [[MCP Remote SSE]]를 추가했다.
- OpenAI Developer Community 포털을 [[OpenAI Developer Community Source]]로 ingest하고 [[OpenAI Developer Community]] 도구 페이지를 추가했다.
- hi-hoi 글 "iOS 사파리에서 React onBlur가 동작하지 않는 이유"를 [[hi-hoi iOS WebKit React onBlur Issue Article]]로 ingest하고 [[iOS WebKit React onBlur Issue]]를 추가했다.
- Hugging Face 모델 카드 NousResearch/Hermes-4.3-36B를 [[Hugging Face Hermes 4.3 36B Model Card]]로 ingest하고 [[Hermes 4.3 36B]] 도구 페이지를 추가했다.
- 9차 고도화로 최근 ingest source 2개를 정규화하고 lint frontmatter/link error를 정리했다.
- 10차 고도화로 generated index draft를 lint index 누락 검사에서 제외하고 report 충돌 경고 문구를 정리했다.
- 11차 고도화로 ingest 전 영향 범위를 점검하는 triage 템플릿과 운영 규칙을 추가했다.
- 12차 고도화로 source provenance 필드를 source summary 템플릿과 운영 규칙에 추가했다.
- 13차 고도화로 향후 log entry에 사용할 structured log format 규칙을 추가했다.
- 14차 고도화로 `scripts/search-wiki.ts` read-only 검색 도구를 추가했다.
- 15차 고도화로 `inbox/clippings/`, `inbox/ideas/`, `inbox/to-ingest.md` 운영 구조를 추가했다.

## [2026-05-21] maintenance | 구조 lint 문제 정리

- Hermes 4.3 36B source summary의 필수 frontmatter와 taxonomy 값을 정규화했다.
- 아직 별도 페이지로 만들지 않은 후보 개념 링크와 raw path wiki link를 정리했다.
- 변경 영역: [[Hugging Face Hermes 4.3 36B Model Card]], [[Hermes 4.3 36B]], [[LLM Wiki Overview]], [[SNU Newsroom Quant Trading Article]].
- 후속 작업: 필요하면 Backtesting, Overfitting, Automated execution을 별도 concept page 후보로 검토한다.

## [2026-05-21] maintenance | 운영 대시보드 고도화

- [[LLM Wiki Overview]]를 Obsidian 첫 화면으로 쓰는 운영 대시보드로 개편했다.
- 다음 행동, 반복 루틴, 주요 진입점을 분리해 URL ingest 이후의 활용 흐름을 더 명확히 했다.
- README에 `wiki/overview.md`와 `wiki/index.md`의 역할 차이를 짧게 추가했다.
- 후속 작업: 대시보드 수치 자동 갱신이 필요할지 운영하면서 판단한다.

## [2026-05-21] maintenance | overview 갱신 규칙 보강

- 최근 ingest로 추가된 [[LLM Hallucination]]과 [[Hancom LLM Hallucination Reduction Research Article]]을 반영해 [[LLM Wiki Overview]]의 상태 수치를 갱신했다.
- ingest 후 `wiki/overview.md`를 조건부 갱신하도록 AGENTS 규칙, README 운영 흐름, ingest triage 템플릿을 보강했다.
- 후속 작업: 반복 누락이 생기면 ingest 자동화 스크립트나 lint 규칙에 overview stale check를 추가한다.

## [2026-05-21] ingest | 한컴테크 LLM 환각 완화 전략 글

- 한컴테크 글 "최신 논문 분석을 통한 LLM의 환각 현상 완화 전략 탐구"를 raw HTML snapshot으로 보존하고 [[Hancom LLM Hallucination Reduction Research Article]]로 ingest했다.
- LLM 환각의 원인, RAG/RLHF/미세조정/자체 검증 기반 완화 전략, RFT의 Hallucination Tax 논점을 [[LLM Hallucination]] concept page로 정리했다.
- [[RAG]]에 환각 완화 전략으로서의 역할과 검색 비용 한계를 source-backed note로 보강했다.
- 변경 영역: [[LLM Hallucination]], [[RAG]], [[Hancom LLM Hallucination Reduction Research Article]], [[LLM Wiki Index]].
- 후속 작업: 필요하면 Hallucination Tax, Knowledge Boundary, Self-Verification을 별도 concept page로 분리하고 원 논문 3편을 직접 ingest한다.

## [2026-05-21] ingest | GitHub Content Marketing Team 저장소

- GitHub 저장소 `uxjoseph/content-marketing-team`의 README, prompt, repository metadata, file tree를 raw snapshot으로 보존하고 [[GitHub Content Marketing Team Repository]]로 ingest했다.
- Claude Code subagent와 skill 기반 콘텐츠 마케팅 자동화 template를 [[Content Marketing Team]] 도구 페이지로 정리했다.
- planner, 병렬 specialist agent, reviewer, media skill 구조를 [[Agentic Workflow]], [[Skills]], [[Claude Code]]에 연결했다.
- 변경 영역: [[Content Marketing Team]], [[GitHub Content Marketing Team Repository]], [[Agentic Workflow]], [[Skills]], [[Claude Code]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: 실제 실행 검증이 필요하면 저장소를 별도 sandbox에서 실행해 외부 의존성, 출력 품질, license 상태를 확인한다.

## [2026-05-21] ingest | Brunch Microsoft Clarity UX/CRO 글

- Brunch 글 "Clarity 기반 초정밀 행동 분석 및 전략적 UX"를 raw HTML snapshot으로 보존하고 [[Brunch Clarity UX CRO Article]]로 ingest했다.
- 히트맵, 세션 레코딩, semantic metrics, GA4와의 보완 workflow를 [[Microsoft Clarity]] 도구 페이지로 정리했다.
- 글 안의 전환율, CPA, 성능, privacy 관련 주장은 공식 문서와 원 사례 검증 필요 항목으로 분리했다.
- 변경 영역: [[Microsoft Clarity]], [[Brunch Clarity UX CRO Article]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: 필요하면 CRO, UX Behavior Analytics, Semantic Metrics를 별도 concept page 후보로 검토한다.

## [2026-05-22] maintenance | MVP / PoC 실행 레이어 추가

- 아이디어, MVP / PoC, 결정 기록, 회의록 요약을 다루는 새 wiki layer와 템플릿을 추가했다.
- [[LLM Wiki Overview]]를 아이디어와 회의 액션을 다음 실험으로 연결하는 실행 대시보드로 보강했다.
- lint와 index draft 자동화가 새 page type을 인식하도록 확장했다.
- 변경 영역: [[LLM Wiki Overview]], [[LLM Wiki Index]], 템플릿, 자동화 스크립트.
- 후속 작업: 실제 아이디어와 회의록을 1개씩 처리해 템플릿의 운영 부담과 정보 밀도를 조정한다.

## [2026-05-22] query | AI 트렌드 레이더 웹사이트 아이디어 정리

- AI/개발 뉴스 자동 큐레이션 웹사이트 아이디어를 [[AI 트렌드 레이더 웹사이트]] idea brief로 정리했다.
- Trend Chaser와 byul.ai를 예시로 두고, 무료 운영 가능한 정적 사이트 기반 PoC 계획, 검증 기준, 보류 조건을 분리했다.
- 변경 영역: [[AI 트렌드 레이더 웹사이트]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: 1차 소스 20개 목록과 데이터 스키마를 만든 뒤 MVP / PoC 페이지로 승격할지 판단한다.

## [2026-05-22] automation | 핵심 자동화 1차 적용

- `scripts/new-source.ts`를 read-only ingest triage 초안 생성기로 구현했다.
- `scripts/wiki-stats.ts`를 추가해 type, status, evidence_level, overview 상태 블록을 집계할 수 있게 했다.
- `scripts/lint-wiki.ts`를 확장해 오래된 unsourced seed, source-backed page의 source 연결, 검증 필요 주장, overview 수치 불일치를 점검한다.
- 변경 영역: 자동화 스크립트, AGENTS 규칙, README 운영 문서, [[LLM Wiki Overview]].
- 후속 작업: 실제 신규 URL ingest 전에 triage CLI를 사용해 초안 품질과 누락되는 taxonomy 힌트를 조정한다.

## [2026-05-22] automation | 주간 리뷰 시스템 추가

- `scripts/weekly-review.ts`를 추가해 아이디어, MVP / PoC, 결정, 회의 액션, source-backed 강화 후보를 주간 리뷰 초안으로 모을 수 있게 했다.
- `templates/weekly-review.md`와 `wiki/reviews/`를 추가하고, index draft와 lint가 `type: weekly-review`를 인식하도록 확장했다.
- README와 AGENTS에 주간 리뷰 운영 규칙을 추가했다.
- 후속 작업: 첫 실제 weekly review를 생성한 뒤 후보 추출 기준이 너무 넓거나 좁은지 조정한다.

## [2026-05-22] automation | Opportunity Compiler 추가

- `wiki/opportunities/`와 opportunity card/review 템플릿을 추가해 아이디어와 자료를 실행 기회로 재컴파일할 수 있게 했다.
- `scripts/opportunity-review.ts`를 추가해 유망 기회, 반복 패턴, MVP 승격 후보, 보류 조건을 read-only로 출력하게 했다.
- lint, index draft, stats, README, AGENTS에 opportunity와 opportunity-review type을 연결했다.
- 후속 작업: 실제 기회 리뷰를 생성한 뒤 실행 점수 기준이 현재 작업 방식에 맞는지 조정한다.

## [2026-05-22] ingest | WikiDocs Hermes Agent 가이드

- WikiDocs 책 "Hermes Agent: 성장하는 AI 에이전트 실전 가이드"를 raw snapshot으로 보존하고 [[WikiDocs Hermes Agent Guide]]로 ingest했다.
- Hermes Agent를 [[Hermes 4.3 36B]] 모델과 분리해 [[Hermes Agent]] 도구 페이지로 정리했다.
- 도구, 메모리, 스킬, MCP, 메시징 게이트웨이, 반복 실행, 보안 모델 관련 주제를 [[Agentic Workflow]], [[Skills]], [[Orchestration]], [[MCP Remote SSE]]에 연결했다.
- 변경 영역: [[Hermes Agent]], [[WikiDocs Hermes Agent Guide]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: Hermes Agent 공식 문서와 GitHub repository를 별도 source로 ingest하고, 실제 설치/보안 경계를 sandbox에서 확인한다.

## [2026-05-22] ingest | Blake Crosley Hermes Agent 실무 가이드

- Blake Crosley의 "Hermes Agent: 실무자용 참고서 (2026)" 한국어 페이지를 raw HTML snapshot으로 보존하고 [[Blake Crosley Hermes Agent Guide]]로 ingest했다.
- provider 인증, 설정 계층, tool/toolset, skill, persistent memory, SOUL.md/AGENTS.md, messaging gateway, cron, MCP, 보안 강화, v0.13 Tenacity release 내용을 [[Hermes Agent]]에 보강했다.
- 변경 영역: [[Hermes Agent]], [[Blake Crosley Hermes Agent Guide]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: Hermes Agent 공식 문서와 GitHub repository를 직접 ingest해 practitioner guide의 세부 주장과 보안 모델을 대조한다.

## [2026-05-22] ingest | 요즘IT Hermes Agent 해설 글

- 요즘IT 글 "‘쓸수록 나아진다’는 그 AI, Hermes Agent 제대로 알아보기"를 raw snapshot으로 보존하고 [[YOZM Hermes Agent Article]]로 ingest했다.
- Self-improving 구현을 skill 자동 생성, skill 검색/호출, memory 갱신, 사용자 모델링 관점으로 정리하고 [[Hermes Agent]]에 반영했다.
- 커뮤니티 반응과 skill poisoning, MCP sandbox, credential exposure, GDPR 리스크를 검증 필요 주장으로 분리했다.
- 변경 영역: [[Hermes Agent]], [[YOZM Hermes Agent Article]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: OpenRouter 순위, GitHub star, 보안 리스크 관련 주장은 공식 문서와 현재 repository 기준으로 재확인한다.

## [2026-05-22] ingest | WikiDocs SQLite 진화 글

- WikiDocs 블로그 글 "몰랐던 SQLite의 진화: 단일 파일 DB가 프로덕션급 엔진이 되기까지"를 raw snapshot으로 보존하고 [[WikiDocs SQLite Evolution Article]]로 ingest했다.
- JSON 확장, FTS5, window function, STRICT mode, generated columns, WAL, 동시 쓰기 한계, observability 이슈를 [[SQLite]] 도구 페이지로 정리했다.
- LLM Wiki 검색 자동화를 SQLite FTS5 기반 local index로 확장할 수 있다는 시사점을 [[LLM Wiki]]와 [[Personal Operating System]]에 연결했다.
- 변경 영역: [[SQLite]], [[WikiDocs SQLite Evolution Article]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: 필요하면 SQLite FTS5 기반 search-wiki v2 PoC를 MVP 후보로 검토한다.

## [2026-05-22] ingest | Hybrid LLM 라우팅과 ML 모델 서빙 파이프라인

- Moonlight의 "Hybrid LLM: Cost-Efficient and Quality-Aware Query Routing" 논문 리뷰를 raw snapshot으로 보존하고 [[Moonlight Hybrid LLM Query Routing Review]]로 ingest했다.
- Velog 글 "ML Model Serving Pipeline"을 raw snapshot으로 보존하고 [[Velog ML Model Serving Pipeline Article]]로 ingest했다.
- 비용/품질 기반 모델 라우팅을 [[Hybrid LLM Query Routing]] concept page로, 모델 serving 구조를 [[ML Model Serving Pipeline]] concept page로 정리했다.
- 두 개념을 [[Agentic Workflow]]와 [[Orchestration]]에 연결하고, LLM Wiki 자동화의 모델 선택과 serving pipeline 설계 후보로 기록했다.
- 변경 영역: [[Hybrid LLM Query Routing]], [[ML Model Serving Pipeline]], source summary 2개, [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: 필요하면 Hybrid LLM 원 논문과 Triton 공식 문서를 별도 source로 ingest한다.

## [2026-05-26] maintenance | 실행 중심 운영 개선

- [[LLM Wiki Overview]]를 오늘 볼 것, 이번 주 실행 후보, MVP 승격 후보, 근거 보강 후보 중심으로 정리했다.
- source summary, idea brief, MVP / PoC 템플릿에 후속 라우팅과 7일 실험 운영 항목을 보강했다.
- [[AI 트렌드 레이더 웹사이트]]를 [[AI 트렌드 레이더 7일 PoC]] 후보로 승격해 성공 기준, 제외 범위, 1주 실험 계획, 중단 조건을 분리했다.
- 변경 영역: [[LLM Wiki Overview]], [[AI 트렌드 레이더 웹사이트]], [[AI 트렌드 레이더 7일 PoC]], 템플릿, [[LLM Wiki Index]].
- 후속 작업: 1차 소스 20개 목록과 데이터 스키마를 확정한 뒤 실제 7일 실험을 시작할지 결정한다.
