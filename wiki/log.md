---
title: LLM Wiki Log
type: log
status: active
created: 2026-05-20
updated: 2026-06-19
tags:
  - llm-wiki
  - log
related:
  - "[[LLM Wiki Index]]"
sensitivity: private
evidence_level: unsourced
---

# LLM Wiki Log

## [2026-06-19] ingest | Prefect와 Tavily의 agent infrastructure 포지션

- Prefect 공식 홈페이지와 Tavily 공식 홈페이지를 raw HTML snapshot으로 보존하고 [[Prefect Official Site]], [[Tavily Official Site]]로 ingest했다.
- [[Prefect]] 도구 페이지를 추가해 Python workflow orchestration, Cloud, Horizon, MCP gateway/registry/governance를 agent workflow 운영 인프라 관점으로 정리했다.
- [[Tavily]] 도구 페이지를 추가해 실시간 web search, extraction, crawl, research API를 agent용 web access layer와 RAG 구성 요소 후보로 정리했다.
- [[Orchestration]], [[Agentic Workflow]], [[RAG]], [[LLM Hallucination]]에 production workflow, web retrieval evidence, source validation, prompt injection 방어 검증 관점을 연결했다.
- Prefect의 stars/downloads/FastMCP adoption, Tavily의 developer 수/request 수/uptime/latency/benchmark claim은 provider self-report로 분리했다.
- 변경 영역: [[Prefect Official Site]], [[Tavily Official Site]], [[Prefect]], [[Tavily]], [[Orchestration]], [[Agentic Workflow]], [[RAG]], [[LLM Hallucination]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: Prefect Horizon docs와 Tavily API docs를 별도 source로 ingest해 실제 endpoint, auth, governance, pricing, eval methodology를 확인한다.

## [2026-06-18] ingest | Claude founder playbook과 AI-native startup stage gate

- Claude 공식 블로그 "The founder's playbook: Building an AI-native startup"과 연결 PDF eBook을 raw snapshot으로 보존하고 [[Claude Founders Playbook Blog]], [[Claude Founders Playbook PDF]]로 ingest했다.
- [[AI-native Startup]] 개념 페이지를 추가해 Idea, MVP, Launch, Scale 단계별 exit criteria와 AI-era failure mode를 정리했다.
- [[아이디어 개선 루프]], [[Agentic Workflow]], [[Claude Code]], [[Personal Operating System]]에 build friction이 낮아질수록 검증, scope, architecture context, security review, measurement framework를 먼저 둬야 한다는 관점을 연결했다.
- 42% startup failure, Sean Ellis 40% PMF threshold, Claude Cowork와 Claude Code Security availability, 고객 사례 수치는 독립 검증 필요 주장으로 분리했다.
- 변경 영역: [[Claude Founders Playbook Blog]], [[Claude Founders Playbook PDF]], [[AI-native Startup]], [[아이디어 개선 루프]], [[Agentic Workflow]], [[Claude Code]], [[Personal Operating System]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: [[AI 트렌드 레이더 7일 PoC]]에 Idea/MVP stage gate와 retention, referral, manual effort 감소 같은 PMF proxy를 적용한다.

## [2026-06-17] ingest | 이메일 기반 의도적 아웃리치

- Good Internet의 "Why I email complete strangers"를 raw HTML snapshot으로 보존하고 [[Good Internet Why I Email Complete Strangers Article]]로 ingest했다.
- [[의도적 아웃리치]] 개념 페이지를 추가해 source ingest 이후 작성자에게 구체적인 감사나 질문을 보내는 느린 관계 형성 루틴으로 정리했다.
- [[Personal Operating System]]에 지식 수집이 archive 안에서 끝나지 않도록 human-in-the-loop follow-up을 검토하는 관점을 연결했다.
- 이메일의 역사, Lindy law 적용, 인디웹 커뮤니티의 이메일 수용성은 이 자료만으로 일반화하지 않고 검증 필요 주장으로 분리했다.
- 변경 영역: [[Good Internet Why I Email Complete Strangers Article]], [[의도적 아웃리치]], [[Personal Operating System]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: LLM Wiki source summary에서 작성자에게 보낼 3문장 follow-up draft를 만들 조건과 금지할 ask를 정리한다.

## [2026-06-16] ingest | SeedUp 창업지원사업 탐색 서비스와 MCP 배포 경로

- GeekNews Show GN 글 "창업지원사업을 모두 찾을 수 있는 서비스를 만들어봤습니다."와 연결된 SeedUp 공고 목록 페이지를 raw snapshot으로 보존했다.
- [[GeekNews SeedUp Show GN]]과 [[SeedUp Opportunities Page]] source summary를 추가하고, [[SeedUp]] 도구 페이지를 만들었다.
- [[SeedUp]]을 창업지원사업 공고 탐색, AI 자격 분석, 앱인토스 PDF 보고서, PlayMCP 연결을 제공한다고 소개되는 vertical AI workflow 사례로 정리했다.
- PlayMCP 550명 이상, 웹 가입자 250명 이상, 자격요건 분석 정확도는 작성자 주장 또는 미검증 기능으로 분리했다.
- [[MCP Remote SSE]]에 MCP가 domain service 배포 채널로 쓰일 수 있다는 관점을 보강했다.
- 변경 영역: [[GeekNews SeedUp Show GN]], [[SeedUp Opportunities Page]], [[SeedUp]], [[MCP Remote SSE]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: SeedUp의 PlayMCP tool schema, 인증 경계, 지원사업 원문 근거 표시, 데이터 갱신 주기를 확인한다.

## [2026-06-16] ingest | PyTorchKR AI/ML 논문 레이더와 agent workflow 검증 경계

- PyTorchKR Discuss의 "[2026/06/08 ~ 14] 이번 주에 살펴볼 만한 AI/ML 논문 모음"을 raw HTML snapshot으로 보존하고 [[PyTorchKR AI ML Papers 2026 06 08 14]]로 ingest했다.
- Economy of Minds, Self-Harness, AutoForge, AutoScientists, LiveBrowseComp, AI reviewer 연구 등을 agent workflow, orchestration, 하네스 개선, LLM judge, 검색 agent 검증 관점의 원 논문 후보로 정리했다.
- [[Agentic Workflow]], [[Orchestration]], [[하네스 엔지니어링]], [[LLM-as-a-Judge]], [[LLM Hallucination]]에 필요한 연결만 보강했다.
- 이 자료는 2차 큐레이션이므로 개별 논문의 성능 수치와 benchmark 주장은 arXiv 원문과 공개 코드로 재검증해야 한다는 경계를 남겼다.
- 변경 영역: [[PyTorchKR AI ML Papers 2026 06 08 14]], [[Agentic Workflow]], [[Orchestration]], [[하네스 엔지니어링]], [[LLM-as-a-Judge]], [[LLM Hallucination]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: Economy of Minds, Self-Harness, LiveBrowseComp 원 논문을 우선 ingest해 agent 조율, 하네스 자가 개선, 검색 agent 평가 기준을 source-backed로 보강한다.

## [2026-06-15] ingest | Paul Graham의 스타트업 지수 성장과 사용자 욕구 발견

- Paul Graham의 "How to Earn a Billion Dollars"를 raw HTML snapshot으로 보존하고 [[Paul Graham How to Earn a Billion Dollars]]로 ingest했다.
- [[스타트업 지수 성장]] 개념 페이지를 추가해 성장률, 지속 기간, 시장 크기, 추천 행동의 관계와 단순 복리 모델의 한계를 정리했다.
- [[아이디어 개선 루프]]에 직접 겪는 문제, 가까운 사용자, 흥미로운 프로젝트, 반복 사용과 추천을 아이디어 탐색·검증 신호로 보강했다.
- YC 지원 회사와 억만장자 수, 익명 스타트업의 월 93% 성장, 월 15% 성장의 일반성, 매출 성장과 창업자 순자산의 동일시는 독립 검증이 필요하다는 경계를 기록했다.
- 변경 영역: [[Paul Graham How to Earn a Billion Dollars]], [[스타트업 지수 성장]], [[아이디어 개선 루프]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: 현재 아이디어 또는 MVP 1개에 성장률, retention, 추천, 절대 증가량을 함께 기록하는 최소 검증표를 적용한다.

## [2026-06-13] ingest | 미국 옥수수 수출 다변화와 글로벌 곡물 공급망

- Hoon의 Brunch 글 "중국이 멈췄을 때, 미국의 밭은 더 넓어졌다"를 raw HTML snapshot으로 보존하고 [[Brunch US Corn Export Diversification Article]]로 ingest했다.
- [[글로벌 곡물 공급망]] 개념 페이지를 추가해 생산·재고·가격뿐 아니라 수요처 집중도, 경쟁 수출국, 계절성, 내륙 운송, 항만 처리 능력을 함께 보는 분석 기준을 정리했다.
- 미국 옥수수 수출량과 목적지 비중, 중국의 대두 구매 중단, 경쟁국 공급 차질은 USDA와 원 보도로 재검증해야 하며, 미국의 소프트파워 복귀는 저자의 해석으로 분리했다.
- 변경 영역: [[Brunch US Corn Export Diversification Article]], [[글로벌 곡물 공급망]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: USDA `Grain: World Markets and Trade` 2025년 11월판과 목적지별 수출 통계로 수치, marketing year, 전망치 여부를 확인한다.

## [2026-06-12] ingest | LLM 생성 파라미터와 검증 경계

- pred0771의 Tistory 글 "LLM Parameters"를 raw HTML snapshot으로 보존하고 [[Pred0771 LLM Parameters Article]]로 ingest했다.
- [[LLM 생성 파라미터]] 개념 페이지를 추가해 temperature, top-k, top-p, 반복 penalty, 출력 길이·종료, candidate와 logprobs를 기능별로 구분했다.
- [[LLM Hallucination]]에 낮은 temperature가 사실성을 보장하거나 hallucination을 제거하지 않는다는 경계를 추가하고, [[LLM-as-a-Judge]]에는 sampling setting과 여러 run의 분산 기록 원칙을 보강했다.
- 원문의 penalty 방향, max tokens와 context 관계, top-k 권장값, `Completion.create` 예시는 부정확하거나 오래됐으므로 현재 API 지침으로 재사용하지 않도록 검증 필요 주장으로 분리했다.
- 변경 영역: [[Pred0771 LLM Parameters Article]], [[LLM 생성 파라미터]], [[LLM Hallucination]], [[LLM-as-a-Judge]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: 최신 OpenAI와 Hugging Face 공식 문서로 provider별 generation parameter 지원 범위와 수식을 확인한다.

## [2026-06-12] ingest | AI 시대 B2B 제안과 과정 지식화

- 클래미의 Brunch 글 "AI 시대 이기는 제안 - Claude Bloom"을 raw HTML snapshot으로 보존하고 [[Brunch AI Winning Proposal Claude Bloom Article]]로 ingest했다.
- [[AI 시대의 제안]] 개념 페이지를 추가해 현장 발견, opportunity qualification, AI 지원 작성, human review, 발표, 과정 지식화를 하나의 workflow로 정리했다.
- [[MEDDPICC]]에 경제적 가치, 숨은 니즈, 최종 의사결정자를 제안 작성 전에 확인하는 관점을 연결하고, [[AI 실험 문화]]에는 tool adoption이 사업 성장과 같지 않다는 반례를 보강했다.
- [[LLM Wiki]]에 최종 결과물뿐 아니라 source, discovery, 판단, 수정, 실패를 process memory로 보존하는 목적을 추가했다.
- 시장 규모, RFP 정보 비율, 입찰 성공 사례, 채용·발표 전망은 행사 발언을 재전달한 주장으로 독립 검증이 필요하다는 경계를 기록했다.
- 변경 영역: [[Brunch AI Winning Proposal Claude Bloom Article]], [[AI 시대의 제안]], [[MEDDPICC]], [[AI 실험 문화]], [[LLM Wiki]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: 개인 PoC 제안에 적용할 최소 discovery, qualification, human review checklist를 만든다.

## [2026-06-12] ingest | 국내 FDE 공고와 면접 준비 가이드

- 잡코리아의 "Forward Deployed Engineer (FDE)란? 역할부터 필요 역량, 면접 포인트까지 정리"를 raw HTML snapshot으로 보존하고 [[JobKorea FDE Role and Interview Guide]]로 ingest했다.
- [[Forward Deployed Engineer]]에 구현 ownership, 제품팀 환류, 재사용 asset, presales·지원 role drift를 확인하는 채용공고 판별 기준을 추가했다.
- [[AI 시대의 기술 면접]]과 [[구조화된 답변 프레임워크]]에 기술 개념, 고객 시나리오, 코딩, 행동 경험을 함께 평가하고 문제 정의·의사결정·결과·tradeoff로 경험을 설명하는 관점을 연결했다.
- 95% AI pilot 실패, 공고 1,000건의 기술·경력 분포는 외부 분석 재인용이므로 원 자료 검증 전에는 확정 통계로 사용하지 않는다.
- 변경 영역: [[JobKorea FDE Role and Interview Guide]], [[Forward Deployed Engineer]], [[AI 시대의 기술 면접]], [[구조화된 답변 프레임워크]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: Bloomberry FDE 공고 분석 원문과 taxonomy를 확인하고 국내 공고 사례와 비교한다.

## [2026-06-12] ingest | FDE 도입 조건과 채용·스코프 관리

- GeekNews의 "Forward Deployed Engineer(FDE) 채용을 위한 완벽 가이드"와 연결된 First Round 원문을 raw snapshot으로 보존하고 [[GeekNews First Round FDE Hiring Guide]]로 ingest했다.
- [[Forward Deployed Engineer]]에 업마켓 전략, 비정형 ICP, 제품 방향의 유연성, unit economics를 중심으로 한 도입 판단과 고객 선택, 표준화, 스코프 중단 기준을 보강했다.
- FDE를 implementation, CSM, sales를 합친 만능 직함으로 보지 않고, 프로덕션 코드와 현장 product discovery를 함께 책임지는 역할로 구분했다.
- 800% 채용 증가, 기업별 성과, 초기 경력자 선호는 인터뷰와 2차 자료에 의존하므로 일반 규칙이나 확정 수치로 사용하지 않도록 검증 경계를 기록했다.
- 변경 영역: [[GeekNews First Round FDE Hiring Guide]], [[Forward Deployed Engineer]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: FDE, product engineer, solutions engineer, implementation consultant의 책임과 경제성 차이를 비교 체크리스트로 정리한다.

## [2026-06-11] ingest | LLM-as-a-Judge 평가 방식과 편향

- 코딩스뮤의 "[주간 LLM] LLM Evaluation (2) LLM-as-a-Judge"를 raw HTML snapshot으로 보존하고 [[Codingsmu LLM as a Judge Article]]로 ingest했다.
- [[LLM-as-a-Judge]] 개념 페이지를 추가해 pairwise, single-answer, reference-guided 평가와 position, verbosity, self-enhancement bias, judge capability ceiling을 정리했다.
- [[Agentic Workflow]], [[Human-in-the-loop]], [[LLM Hallucination]]에 deterministic check, reference, LLM judge, human calibration을 결합하는 평가 원칙을 연결했다.
- 원문의 80% 이상 인간 선호 일치 수치, bias 크기, 완화 효과, FastChat 실행 방식은 원 논문과 현재 구현으로 재검증해야 한다는 경계를 유지했다.
- 변경 영역: [[Codingsmu LLM as a Judge Article]], [[LLM-as-a-Judge]], [[Agentic Workflow]], [[Human-in-the-loop]], [[LLM Hallucination]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: 원 논문과 후속 평가 연구를 ingest하고 wiki ingest용 human-labeled calibration set과 최소 rubric을 설계한다.

## [2026-06-11] ingest | Anthropic Claude Fable 5와 Mythos 5 공식 발표

- 기존에 보존된 Anthropic 공식 HTML snapshot을 [[Anthropic Claude Fable 5 and Mythos 5 Announcement]]으로 독립 ingest했다.
- [[Claude Fable 5]]에 Fable·Mythos의 safeguard 차이, 95% 이상 세션의 무폴백 주장, first-party·third-party 30일 보존, 2026년 6월 22일과 23일의 구독 전환 조건을 공식 근거로 보강했다.
- [[Claude Code]], [[Agentic Workflow]], [[Human-in-the-loop]]에 요청 모델과 실제 응답 모델, persistent memory, classifier fallback, sensitivity, trusted access를 audit 대상으로 연결했다.
- Benchmark, code migration, 과학 연구 성과는 Anthropic과 초기 파트너의 주장이고 독립 검증이 필요하다는 경계를 유지했다.
- 변경 영역: [[Anthropic Claude Fable 5 and Mythos 5 Announcement]], [[Claude Fable 5]], [[Claude Code]], [[Agentic Workflow]], [[Human-in-the-loop]], [[GeekNews Claude Fable 5 and Mythos 5 Article]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: Fable 5 System Card와 risk report를 별도 ingest해 classifier, alignment, misuse, data retention 근거를 상세 검증한다.

## [2026-06-11] ingest | OpenAI enterprise AI 운영 레이어 전략

- OpenAI의 "The next phase of enterprise AI"를 web extraction snapshot으로 보존하고 [[OpenAI Next Phase of Enterprise AI Article]]로 ingest했다.
- [[기업 AI 운영 레이어]] 개념 페이지를 추가해 company context, system integration, identity, permission, persistent state, governance, employee experience를 전사 agent 기반의 구성 요소로 정리했다.
- [[Agentic Workflow]], [[Orchestration]], [[AI Literacy]], [[Frontier Systems]]에 개별 copilot에서 전사 agent deployment로 이동할 때 필요한 운영·역량·검증 관점을 연결했다.
- OpenAI의 revenue, usage, growth, customer 사례는 자사 발표이며 독립 검증되지 않았다는 경계를 기록했다.
- 변경 영역: [[OpenAI Next Phase of Enterprise AI Article]], [[기업 AI 운영 레이어]], [[Agentic Workflow]], [[Orchestration]], [[AI Literacy]], [[Frontier Systems]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: OpenAI Frontier와 Stateful Runtime Environment의 공식 제품 문서에서 architecture, availability, security, data governance, interoperability를 확인한다.

## [2026-06-10] ingest | Kiro 조직 도입과 하네스 엔지니어링

- YAN SO의 "Kiro 사용자 인터뷰 #3 - 우아한형제들 신재현님"을 raw HTML snapshot으로 보존하고 [[Yanlog Kiro User Interview 003]]으로 ingest했다.
- [[Kiro]] 도구 페이지와 [[하네스 엔지니어링]] 개념 페이지를 추가해 steering, skill, artifact, history, validation을 작업 환경에 내장하는 패턴을 정리했다.
- [[Skills]], [[Agentic Workflow]], [[Personal Operating System]]에 숙련자의 업무 방식 이식, session 재개 구조, repository instruction과 script를 하나의 실행 환경으로 보는 관점을 연결했다.
- 변경 영역: [[Yanlog Kiro User Interview 003]], [[Kiro]], [[하네스 엔지니어링]], [[Skills]], [[Agentic Workflow]], [[Personal Operating System]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: Kiro 공식 문서로 steering, Agent Skills 호환성, IDE·CLI 기능 차이, model 지원, enterprise data boundary를 검증한다.

## [2026-06-10] ingest | Cross-functional 기술 문제 해결과 TPM

- 토스 기술 블로그의 "Cross Functional 기술 문제 풀기 위한 역량 성장 Tip"을 raw HTML snapshot으로 보존하고 [[Toss Tech Cross Functional TPM Tip Article]]로 ingest했다.
- [[Cross-functional 기술 문제 해결]] 개념 페이지를 추가해 문제 재정의, 결정 구조, owner, dependency, 실행 전환, 권한 없는 영향력의 관계를 정리했다.
- [[Orchestration]], [[Forward Deployed Engineer]], [[Personal Operating System]]에 조율보다 실행 가능한 구조와 ownership 공백을 우선 진단하는 관점을 연결했다.
- 변경 영역: [[Toss Tech Cross Functional TPM Tip Article]], [[Cross-functional 기술 문제 해결]], [[Orchestration]], [[Forward Deployed Engineer]], [[Personal Operating System]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: 정체된 실행 후보 1개에 문제·결정·owner·dependency·next action·done evidence 진단 형식을 적용한다.

## [2026-06-10] ingest | 토스 AI Surf Day와 AI 실험 문화

- 토스 기술 블로그의 "토스팀이 AI 파도를 마주하는 방법: AI Surf Day"를 raw HTML snapshot으로 보존하고 [[Toss Tech AI Surf Day Article]]로 ingest했다.
- [[AI 실험 문화]] 개념 페이지를 추가해 보호된 실험 시간, 자발적 소모임, 사례와 실패 공유, 현업 에반젤리스트, 운영 지원, 재사용 가능한 산출물의 결합을 정리했다.
- [[AI Literacy]], [[Agentic Workflow]], [[Personal Operating System]]에 조직 학습, 검증 루프, human approval, 개인 실험 시간 적용 원칙을 연결했다.
- 변경 영역: [[Toss Tech AI Surf Day Article]], [[AI 실험 문화]], [[AI Literacy]], [[Agentic Workflow]], [[Personal Operating System]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: 개인 운영체계에서 월 1회 AI 실험 시간을 운영할 최소 템플릿과 artifact 승격 기준을 정한다.

## [2026-06-10] ingest | MEDDPICC와 TurboVec

- kevin82의 MEDDPICC 글과 GitHub repository `RyanCodrai/turbovec`의 metadata, README, tree를 raw snapshot으로 보존하고 source summary 2개로 ingest했다.
- [[MEDDPICC]] 개념 페이지를 추가해 pain, champion, metrics, economic buyer, decision criteria/process, paper process, competition을 B2B opportunity qualification 관점으로 정리했다.
- [[TurboVec]] 도구 페이지를 추가해 TurboQuant 기반 vector quantization, online ingest, SIMD search, allowlist filtering, local hybrid retrieval과 benchmark 검증 경계를 정리했다.
- [[RAG]]와 [[SQLite]]에 SQL/FTS candidate generation과 quantized dense reranking을 결합하는 구조를 연결했다.
- 변경 영역: [[Kevin82 MEDDPICC Article]], [[MEDDPICC]], [[GitHub TurboVec Repository]], [[TurboVec]], [[RAG]], [[SQLite]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: TurboVec 원 논문과 benchmark를 독립 검증하고, MEDDPICC를 B2B PoC용 최소 qualification checklist로 줄일지 검토한다.

## [2026-06-10] ingest | Humanize KR 한국어 AI 문체 윤문 skill

- GitHub repository `epoko77-ai/im-not-ai`의 metadata, README, tree, Claude/Codex skill, taxonomy, installer, updater, metric test를 raw snapshot으로 보존하고 [[GitHub im-not-ai Repository]]로 ingest했다.
- [[Humanize KR]] 도구 페이지를 추가해 한국어 AI 문체 taxonomy, Fast/Strict workflow, 의미 보존 감사, cross-agent skill packaging, 전역 설치와 자동 업데이트 경계를 정리했다.
- [[Skills]], [[Claude Code]], [[Codex]], [[구조화된 답변 프레임워크]]에 instruction/reference/metric/test 분리와 runtime별 capability 차이를 연결했다.
- 변경 영역: [[GitHub im-not-ai Repository]], [[Humanize KR]], [[Skills]], [[Claude Code]], [[Codex]], [[구조화된 답변 프레임워크]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: 설치 없이 wiki 문서 5개를 대상으로 read-only 탐지 evaluation을 설계하고, false positive와 Obsidian link·수치·출처 보존 여부를 확인한다.

## [2026-06-10] ingest | OREO, PREP, STAR 구조화 답변 프레임워크

- 91MS의 "개발자 글쓰기 - 오레오(OREO) 공식"과 JobConsulting의 "STAR & PREP 기법 완벽 가이드"를 raw HTML snapshot으로 보존하고 source summary 2개로 ingest했다.
- [[구조화된 답변 프레임워크]] 개념 페이지를 추가해 OREO와 PREP은 의견·설득 구조, STAR는 행동 증거 구조로 구분하고 공통 실패 패턴을 정리했다.
- [[LLM Wiki]]와 [[AI 시대의 기술 면접]]에 두괄식 답변, 개인 행동과 결과, 형식적 명료함과 실제 evidence를 분리하는 관점을 연결했다.
- 변경 영역: [[91MS Developer Writing OREO Article]], [[JobConsulting Interview STAR and PREP Article]], [[구조화된 답변 프레임워크]], [[LLM Wiki]], [[AI 시대의 기술 면접]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: 구조화된 답변 프레임워크를 실제 wiki query answer 1건에 적용하고, OREO/PREP/STAR의 원 출처와 효과 근거를 별도 확인한다.

## [2026-06-10] ingest | Claude Fable 5와 Mythos 5 발표

- GeekNews 글 "Claude Fable 5/Mythos 5 공개, Anthropic의 5세대 프런티어 모델"과 연결된 Anthropic 공식 발표를 raw snapshot으로 보존하고 [[GeekNews Claude Fable 5 and Mythos 5 Article]]로 ingest했다.
- [[Claude Fable 5]] 도구 페이지를 추가해 장기 자율 작업, 안전 분류기, Opus 4.8 폴백, 30일 데이터 보존, 출시 초기 가격과 availability를 정리했다.
- [[Claude Code]], [[Agentic Workflow]], [[Human-in-the-loop]]에 실제 응답 모델, checkpoint, 비용, stop condition, 민감 데이터 보존 정책을 audit 대상으로 기록하는 관점을 연결했다.
- 변경 영역: [[GeekNews Claude Fable 5 and Mythos 5 Article]], [[Claude Fable 5]], [[Claude Code]], [[Agentic Workflow]], [[Human-in-the-loop]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: Fable 5 System Card, METR 보고서, 독립 장기 coding 평가, 30일 데이터 보존 예외와 계약 조건을 별도 source로 확인한다.

## [2026-06-08] ingest | Muren leveraged ETF volatility decay article

- 뮤랜의 지식창고 글 "레버리지 ETF 변동성 끌림(Volatility Decay)과 유의사항"을 raw HTML snapshot으로 보존하고 [[Muren Leveraged ETF Volatility Decay Article]]로 ingest했다.
- [[레버리지 ETF 변동성 끌림]] 개념 페이지를 추가해 일일 레버리지, 경로 의존성, 상승/하락 반복 구간의 손실 확대, 투자 운영 시스템의 위험 패널 필요성을 정리했다.
- [[Quant Trading]]과 [[토스증권 API 투자 운영 시스템]]에 레버리지 ETF watchlist, 주문 전 체크리스트, volatility decay 경고를 연결했다.
- 변경 영역: [[Muren Leveraged ETF Volatility Decay Article]], [[레버리지 ETF 변동성 끌림]], [[Quant Trading]], [[토스증권 API 투자 운영 시스템]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: TQQQ/SOXL의 공식 운용사 자료, total return data, expense/financing cost, 토스증권 OpenAPI의 `leverageRatio` 필드 활용 가능성을 확인한다.

## [2026-06-08] maintenance | Tossinvest API investment system idea

- 토스증권 Open API 분석을 바탕으로 [[토스증권 API 투자 운영 시스템]] 아이디어 페이지를 추가했다.
- 아이디어를 자동매매 봇이 아니라 read-only 투자 운영 리포트, watchlist intelligence, 포트폴리오 리밸런싱 보조, 주문 전 체크리스트, dry-run 엔진, 투자 저널로 구체화했다.
- 실제 주문 자동화는 별도 guardrail과 human confirmation 없이는 진행하지 않는 경계로 남겼다.
- 변경 영역: [[토스증권 API 투자 운영 시스템]], [[LLM Wiki Index]], [[LLM Wiki Overview]], [[LLM Wiki Log]].
- 후속 작업: 토스증권 Open API 사용 신청 조건과 약관을 확인한 뒤 read-only 7일 PoC를 MVP page로 승격할지 결정한다.

## [2026-06-08] ingest | Tossinvest OpenAPI docs

- 토스증권 Open API의 `/llms.txt`, overview Markdown, OpenAPI Markdown reference, canonical OpenAPI JSON을 raw snapshot으로 보존하고 [[Tossinvest OpenAPI Docs]]로 ingest했다.
- [[토스증권 Open API]] tool page를 추가해 OAuth 2.0 Client Credentials, `X-Tossinvest-Account` 계좌 헤더, market data/account/order API 그룹, rate limit, 주문 실행 guardrail을 정리했다.
- [[Quant Trading]]에 brokerage API를 data retrieval, account state, execution layer로 분리하는 PoC 관점을 연결했다.
- 변경 영역: [[Tossinvest OpenAPI Docs]], [[토스증권 Open API]], [[Quant Trading]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: 실제 사용 신청 조건, 이용 약관, 자동주문 허용 범위, streaming/websocket 지원 시점을 별도 확인한다.

## [2026-06-05] ingest | Montana Skeptic SpaceX IPO article

- Lawrence Fossi의 Substack 글 "The SpaceX IPO Will Be the Theft of the Century"를 raw HTML snapshot으로 보존하고 [[Montana Skeptic SpaceX IPO Article]]로 ingest했다.
- [[SpaceX IPO 논쟁]] 개념 페이지를 추가해 Starship/Starlink 기술 narrative, private investor exit, low float, index inclusion, passive fund flow, governance 리스크를 분리했다.
- [[Quant Trading]]에 낮은 float, index rebalance, passive flow 같은 market structure 변수를 투자/자동화 리스크 사례로 연결했다.
- 변경 영역: [[Montana Skeptic SpaceX IPO Article]], [[SpaceX IPO 논쟁]], [[Quant Trading]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: SEC S-1, Nasdaq/S&P/FTSE index rule, SpaceX/NASA/Starship 기술 자료, xAI/Anthropic 계약 관련 1차 자료를 별도 source로 확인한다.

## [2026-06-05] ingest | Open Network RAG HyDE article

- Open Network System 블로그 글 "RAG HyDE 기법"을 raw HTML snapshot으로 보존하고 [[Open Network RAG HyDE Article]]로 ingest했다.
- [[HyDE]] 개념 페이지를 추가해 hypothetical document를 생성해 retrieval query로 쓰는 RAG query transformation 기법과 실패 패턴을 정리했다.
- [[RAG]]와 [[LLM Hallucination]]에 사용자 표현과 전문 문서 표현의 간극, 가상 답변을 근거로 오해하지 않아야 하는 boundary를 보강했다.
- 변경 영역: [[Open Network RAG HyDE Article]], [[HyDE]], [[RAG]], [[LLM Hallucination]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: HyDE 원 논문, query rewriting, multi-query retrieval, Dify 공식 구현 자료를 별도 source로 확인한다.

## [2026-06-05] ingest | Asana PDCA cycle article

- Asana 리소스 글 "PDCA(Plan-Do-Check-Act) 순환이란?"을 raw HTML snapshot으로 보존하고 [[Asana PDCA Cycle Article]]로 ingest했다.
- [[PDCA 사이클]] 개념 페이지를 추가해 계획, 실행, 점검, 조치를 반복하는 지속적 개선 루프와 LLM Wiki/Codex 작업에 적용할 수 있는 Check/Act 기준을 정리했다.
- [[아이디어 개선 루프]], [[Personal Operating System]], [[Agentic Workflow]], [[Human-in-the-loop]]에 PDCA를 작은 반복 개선 vocabulary로 연결했다.
- 변경 영역: [[Asana PDCA Cycle Article]], [[PDCA 사이클]], [[아이디어 개선 루프]], [[Personal Operating System]], [[Agentic Workflow]], [[Human-in-the-loop]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: PDCA와 PDSA의 차이, Shewhart/Deming 계보, OODA loop 비교를 1차 자료로 검증한다.

## [2026-06-04] ingest | GeekNews Weekly 202616 AEO

- GeekNews Weekly 202616 "이제 SEO 다음은 AEO를 고민할 때입니다"를 raw HTML snapshot으로 보존하고 [[GeekNews Weekly 202616 AEO Article]]로 ingest했다.
- [[에이전틱 엔진 최적화]] 개념 페이지를 추가해 agent-readable documentation, token length, llms.txt, agent-permissions.json, MCP Server Card, AEO audit tool의 한계를 정리했다.
- [[Agentic Workflow]], [[LLM Wiki]], [[OSINT]]에 agent가 읽는 문서와 공개 discovery surface를 설계 대상으로 보는 관점을 연결했다.
- 변경 영역: [[GeekNews Weekly 202616 AEO Article]], [[에이전틱 엔진 최적화]], [[Agentic Workflow]], [[LLM Wiki]], [[OSINT]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: Addy Osmani AEO 원문, Cloudflare Agent-Ready 도구, llms.txt와 MCP Server Card 관련 1차 자료를 별도 source로 확인한다.

## [2026-06-04] ingest | Google I/O, Claude Dynamic Workflows, AI 면접

- Google I/O 2026 keynote 요약, Claude Code dynamic workflows 공식 글, AI 시대 기술 면접 글을 raw HTML snapshot으로 보존하고 source summary로 ingest했다.
- [[Anthropic Claude Code Dynamic Workflows Article]]을 [[Claude Code]]와 [[Agentic Workflow]]에 연결해 task-specific harness generation, subagent pattern, verifier pattern을 보강했다.
- [[AI 시대의 기술 면접]] 개념 페이지를 추가하고 [[AI Literacy]], [[Human-in-the-loop]]에 연결했다.
- 변경 영역: source summary 3개, [[AI 시대의 기술 면접]], [[Claude Code]], [[Agentic Workflow]], [[AI Literacy]], [[Human-in-the-loop]], [[Frontier Systems]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: Gemini Spark, Google Antigravity, SynthID의 product-specific source와 Claude Dynamic Workflows의 실제 CLI boundary를 별도로 확인한다.

## [2026-06-04] ingest | OpenAI Codex Sites documentation

- OpenAI Developers 문서 "Sites – Codex"를 OpenAI docs MCP로 확인하고 raw HTML snapshot으로 보존한 뒤 [[OpenAI Codex Sites Documentation]]으로 ingest했다.
- [[Codex Sites]] tool page를 추가해 Sites plugin, save/deploy version 분리, `.openai/hosting.json`, D1/R2 storage, access mode, runtime secret, production URL review boundary를 정리했다.
- [[Codex]], [[Codex Harness]], [[CI/CD 배포 파이프라인]], [[Human-in-the-loop]], [[Orchestration]]에 agent-built hosted app deployment와 reviewable candidate 관점을 연결했다.
- 변경 영역: [[Codex Sites]], [[OpenAI Codex Sites Documentation]], [[Codex]], [[Codex Harness]], [[CI/CD 배포 파이프라인]], [[Human-in-the-loop]], [[Orchestration]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: Sites preview availability, workspace RBAC, D1/R2 storage, Cloudflare Worker-compatible output, access mode, runtime secret 운영 조건을 실제 workspace와 최신 문서로 확인한다.

## [2026-06-04] ingest | Uber design specs automation article

- Uber Engineering 글 "How Uber Built an Agentic System to Automate Design Specs in Minutes"를 raw HTML snapshot으로 보존하고 [[Uber Automate Design Specs Article]]로 ingest했다.
- [[디자인 스펙 자동화]] concept page와 [[Figma Console MCP]] tool page를 추가해 uSpec, Cursor agent, section별 agent skill, Figma local MCP bridge, template rendering, accessibility spec 자동화 관점을 정리했다.
- [[Agentic Workflow]], [[Orchestration]], [[Skills]], [[CSS 구조화]]에 structured design data를 agent workflow의 source of truth로 쓰는 관점을 연결했다.
- 변경 영역: [[Uber Automate Design Specs Article]], [[디자인 스펙 자동화]], [[Figma Console MCP]], [[Agentic Workflow]], [[Orchestration]], [[Skills]], [[CSS 구조화]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: `uSpec.design`, uSpec GitHub repository, Southleft Figma Console MCP repository를 별도 source로 확인하고, local MCP와 model provider data boundary를 검증한다.

## [2026-06-04] query | Clicky privacy boundary 정리

- Clicky 공식 홈페이지와 privacy policy를 raw HTML snapshot으로 보존하고 [[Clicky Official Site and Privacy Policy]]로 ingest했다.
- [[Clicky 공개 repo와 현재 제품 privacy boundary]] 질문 답변을 추가해 공개 repo, 현재 제품 페이지, screenshot/voice payload, backend proxy, third party provider, background agent action boundary를 분리했다.
- [[Clicky]]에 현재 제품의 `clicky agent` positioning과 privacy policy의 payload 전송 주장을 보강했다.
- 변경 영역: [[Clicky Official Site and Privacy Policy]], [[Clicky 공개 repo와 현재 제품 privacy boundary]], [[Clicky]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: `clicky agent`의 실제 action surface, provider별 retention/training opt-out, backend proxy retention, enterprise/security control을 추가 source로 확인한다.

## [2026-06-04] ingest | farzaa/clicky GitHub repository

- GitHub repository `farzaa/clicky`의 repo metadata, tree, README, AGENTS, CLAUDE contents API snapshot, LICENSE를 raw에 보존하고 [[GitHub Clicky Repository]]로 ingest했다.
- [[Clicky]] tool page를 추가해 macOS menu bar companion, push-to-talk, screenshot + Claude, ElevenLabs TTS, cursor pointing overlay, Cloudflare Worker proxy 구조를 정리했다.
- [[Agentic Workflow]], [[Claude Code]], [[Codex]], [[Human-in-the-loop]], [[Orchestration]]에 screen-aware local companion과 agent-readable onboarding 관점을 연결했다.
- 변경 영역: [[Clicky]], [[GitHub Clicky Repository]], [[Agentic Workflow]], [[Claude Code]], [[Codex]], [[Human-in-the-loop]], [[Orchestration]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: 공개 repository와 현재 비공개 Clicky 제품의 기능 차이, macOS permission/privacy boundary, Cloudflare Worker proxy 운영 리스크를 별도 source나 query answer로 확인한다.

## [2026-06-03] ingest | GeekNews MiniMax M3 출시 글

- GeekNews 글 "MiniMax-M3 데뷔, 주요 벤치마크 성능에서 GPT-5.5와 Gemini 3.1 Pro를 능가하며 비용은 단 5-10% 수준"을 raw HTML/Markdown snapshot으로 보존하고 [[GeekNews MiniMax M3 Article]]로 ingest했다.
- [[MiniMax M3]] tool page를 추가해 100만 토큰 context, native multimodality, MiniMax Sparse Attention, open weights 예고, benchmark headline과 검증 필요 주장을 분리했다.
- [[Agentic Workflow]], [[Hugging Face]], [[BYOK]]에 producer/verifier loop, weights 공개 확인, BYOK와 open weights의 차이를 연결했다.
- 변경 영역: [[MiniMax M3]], [[GeekNews MiniMax M3 Article]], [[Agentic Workflow]], [[Hugging Face]], [[BYOK]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: MiniMax 공식 M3 페이지, technical report, Hugging Face/GitHub weights 공개 여부와 license를 별도 source로 확인한다.

## [2026-06-02] ingest | Matt Pocock skills GitHub repository

- GitHub repository `mattpocock/skills`의 repo metadata, README, tree snapshot을 raw에 보존하고 [[GitHub Matt Pocock Skills Repository]]로 ingest했다.
- [[Matt Pocock Skills]] tool page를 추가해 grilling, shared language, TDD, diagnosis, architecture review, handoff를 small/composable skill 패턴으로 정리했다.
- [[Skills]], [[Codex]], [[Claude Code]], [[Orchestration]]에 coding agent 실패 모드를 줄이는 skill vocabulary와 setup/shared config 관점을 연결했다.
- 변경 영역: [[Matt Pocock Skills]], [[GitHub Matt Pocock Skills Repository]], [[Skills]], [[Codex]], [[Claude Code]], [[Orchestration]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: `grill-with-docs`, `diagnose`, `handoff`를 LLM Wiki용 skill 후보로 검토하고, 설치 전 `skills.sh` 동작과 각 `SKILL.md` 세부 지시를 확인한다.

## [2026-06-02] ingest | Velog Jenkins GitHub NCP 배포기

- Velog 글 "Jenkins + Webhook 을 이용한 자동 CI/CD환경 구축기(feat.NCP)"를 raw HTML snapshot으로 보존하고 [[Velog Jenkins GitHub NCP Deployment Article]]로 ingest했다.
- [[CI/CD 배포 파이프라인]] concept page와 [[Jenkins]], [[Naver Cloud Platform]] tool page를 추가해 webhook trigger, build artifact, SSH transfer, verification, rollback/security boundary를 정리했다.
- [[Orchestration]], [[ML Model Serving Pipeline]], [[Agentic Workflow]]에 배포 자동화와 agent action approval/rollback 관점을 연결했다.
- 변경 영역: [[CI/CD 배포 파이프라인]], [[Jenkins]], [[Naver Cloud Platform]], [[Velog Jenkins GitHub NCP Deployment Article]], [[Orchestration]], [[ML Model Serving Pipeline]], [[Agentic Workflow]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: Jenkins, GitHub webhook/PAT, NCP, CentOS/OpenSSH 관련 공식 문서로 최신 보안 기준과 운영 권장사항을 확인한다.

## [2026-06-02] ingest | Velog Tailwind CSS 구조화 번역 글

- Velog 글 "(번역) Tailwind에서 벗어나기, 그리고 CSS 구조화 방법 배우기"를 raw HTML snapshot으로 보존하고 [[Velog Tailwind CSS Structure Article]]로 ingest했다.
- [[CSS 구조화]] concept page와 [[Tailwind CSS]] tool page를 추가해 reset, component, token, utility, base, spacing, responsive, build layer 관점을 정리했다.
- [[React Effect Naming]]과 [[Micro Frontend]]에 frontend 책임 경계와 CSS layer ownership 관점을 연결했다.
- 변경 영역: [[CSS 구조화]], [[Tailwind CSS]], [[Velog Tailwind CSS Structure Article]], [[React Effect Naming]], [[Micro Frontend]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: Tailwind 공식 문서, MDN CSS grid/container query/subgrid 자료, Julia Evans 원문을 별도 source로 확인해 [[CSS 구조화]]를 보강한다.

## [2026-06-02] automation | #wiki review 압축 리뷰 스크립트 추가

- `node scripts/wiki-review.ts`를 추가해 lint, stats, weekly review, opportunity review를 한 번에 read-only로 실행하고 상태, 추천, 바로 쓸 명령, 근거를 압축 출력하도록 했다.
- `.codex/skills/wiki/SKILL.md`의 `#wiki review`가 새 압축 리뷰 스크립트를 기본으로 사용하도록 갱신했다.
- README와 [[LLM Wiki Overview]]에 `#wiki review`가 다음 행동 인터페이스라는 점을 반영했다.
- 변경 영역: 자동화 스크립트, Codex wiki skill, README, [[LLM Wiki Overview]], [[LLM Wiki Log]].
- 후속 작업: 실제 `#wiki review` 결과가 너무 보수적이면 추천 우선순위 규칙을 조정한다.

## [2026-06-02] maintenance | Codex #wiki 명령 진입점 추가

- `.codex/skills/wiki/SKILL.md`를 추가해 `#wiki ingest`, `#wiki ask`, `#wiki idea`, `#wiki review` 네 가지 짧은 명령을 표준 진입점으로 정의했다.
- README의 예시 명령을 긴 프롬프트 중심에서 `#wiki` 명령 중심으로 보강했다.
- [[LLM Wiki Overview]]에 Codex 짧은 명령과 `#wiki review` 우선 흐름을 반영했다.
- 변경 영역: Codex wiki skill, README, [[LLM Wiki Overview]], [[LLM Wiki Log]].
- 후속 작업: 실제 사용 중 `#wiki` 명령이 긴 프롬프트를 얼마나 줄이는지 보고, 필요하면 명령별 응답 형식을 더 줄인다.

## [2026-06-01] ingest | Velog 일본 IT 업계 분위기 글

- Velog 글 "일본 IT업계 분위기는 실제로 어떨까?"를 raw HTML snapshot으로 보존하고 [[Velog Japan IT Industry Atmosphere Article]]로 ingest했다.
- [[일본 IT 업계]] concept page를 추가해 회사 유형별 편차, 완곡한 커뮤니케이션, 문서화 문화, 재택근무와 잔업 관리, 외국인 개발자 협업, 일본어 전달력 관점을 정리했다.
- 개인 경험 기반 practitioner article이므로 재택근무 확산, 외국인 개발자 증가, 일본어 요구 수준 같은 일반화는 검증 필요 주장으로 분리했다.
- 변경 영역: [[일본 IT 업계]], [[Velog Japan IT Industry Atmosphere Article]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: 일본 IT 노동시장 통계, 재택근무/잔업 관련 공식 자료, SI/SES/스타트업/외국계 기업 유형별 비교 source를 별도 확인한다.

## [2026-06-01] ingest | Velog Claude Opus 4.8 반응 글

- Velog 글 "Claude Opus 4.8 이 그새 또 나왔다"를 raw HTML snapshot으로 보존하고 [[Velog Claude Opus 4.8 Reaction Article]]로 ingest했다.
- [[Claude Opus 4.8]]에 benchmark보다 "덜 우김", 불확실성 보고, 이의 제기, 완료 evidence가 중요하다는 사용자 해석을 공식 발표와 분리해 보강했다.
- [[Claude Code]], [[Agentic Workflow]], [[Orchestration]]에 Dynamic Workflows, effort control, 자체 검수, evidence 기반 완료 보고 관점을 연결했다.
- 변경 영역: [[Velog Claude Opus 4.8 Reaction Article]], [[Claude Opus 4.8]], [[Claude Code]], [[Agentic Workflow]], [[Orchestration]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: Claude Opus 4.8 System Card, Claude Code Dynamic Workflows 공식 문서, Fast Mode 가격/성능 조건은 별도 source로 확인한다.

## [2026-06-01] ingest | Velog Micro Frontend 입문 글

- Velog 글 "프론트엔드계의 MSA, MFE에 대해 알아보자"를 raw HTML snapshot으로 보존하고 [[Velog Micro Frontend Article]]로 ingest했다.
- [[Micro Frontend]] concept page를 추가하고 독립 개발/배포/운영 단위, 빌드 타임 통합, 런타임 통합, SSR/CSR/edge 통합 위치, 도입 실패 패턴을 정리했다.
- [[React Effect Naming]], [[iOS WebKit React onBlur Issue]]에 frontend 책임 경계와 abstraction boundary 관점으로 연결했다.
- 변경 영역: [[Micro Frontend]], [[Velog Micro Frontend Article]], [[React Effect Naming]], [[iOS WebKit React onBlur Issue]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: Module Federation, Next.js Multi-zone, Nx/Turborepo, edge composition은 공식 문서로 별도 source 확인 후 비교 후보로 정리한다.

## [2026-06-01] ingest | SkillOpt 프로젝트 페이지와 해설 글

- Microsoft SkillOpt 프로젝트 페이지와 Digital Bourgeois Tistory 해설 글을 raw HTML snapshot으로 보존하고 [[SkillOpt Project Page]], [[Digital Bourgeois SkillOpt Article]]로 ingest했다.
- [[SkillOpt]] 도구 페이지를 추가하고 skill document를 frozen agent의 trainable external state로 다루는 text-space optimization 관점을 정리했다.
- [[Skills]], [[Agentic Workflow]], [[Orchestration]], [[Codex]], [[Claude Code]]에 rollout, reflection, bounded edit, held-out validation gate, cross-harness skill artifact 관점을 연결했다.
- 변경 영역: [[SkillOpt]], [[SkillOpt Project Page]], [[Digital Bourgeois SkillOpt Article]], [[Skills]], [[Agentic Workflow]], [[Orchestration]], [[Codex]], [[Claude Code]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: SkillOpt GitHub repository, arXiv 논문, SkillLens project page를 별도 source로 확인하고 LLM Wiki ingest/lint task에 적용 가능한 작은 evaluation set을 설계한다.

## [2026-05-29] ingest | Stanford CS153 Frontier Systems 강의 페이지

- Stanford University CS153 "Frontier Systems" Spring 2026 강의 페이지를 raw HTML snapshot으로 보존하고 [[Stanford CS153 Frontier Systems Course Page]]로 ingest했다.
- [[Frontier Systems]] concept page를 추가하고 energy, silicon, models, applications, security, deployment policy가 함께 재작성되는 frontier infrastructure stack 관점을 정리했다.
- [[Personal Operating System]], [[Agentic Workflow]], [[OSINT]]에 "The One-Person Frontier Lab"과 공개 강의 페이지를 기술/시장 흐름 파악 source로 쓰는 관점을 연결했다.
- 변경 영역: [[Frontier Systems]], [[Stanford CS153 Frontier Systems Course Page]], [[Personal Operating System]], [[Agentic Workflow]], [[OSINT]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: CS153 Readings & Materials, archive pages, speaker별 공개 자료는 별도 source 후보로 검토한다.

## [2026-05-29] maintenance | LLM Wiki 비판적 리뷰와 실행 queue 보강

- [[llm-wiki-review-2026-05-29]]를 추가해 현재 위키의 강점, 병목, 우선 개선안을 비판적으로 정리했다.
- [[LLM Wiki]]와 [[Personal Operating System]]을 seed placeholder에서 실행 판단과 운영 루틴을 지휘하는 페이지로 보강했다.
- [[LLM Wiki Overview]]를 오늘 하나만 할 일, 후속 작업 queue, 근거 보강 후보 중심으로 압축했다.
- `scripts/weekly-review.ts`가 log의 `후속 작업:`과 source summary의 검증 필요 주장을 review 초안에 끌어오도록 개선했다.
- `scripts/opportunity-review.ts`의 일반 태그 잡음을 줄이고 parked 항목은 실행 후보에서 제외하도록 정리했다.
- 변경 영역: [[llm-wiki-review-2026-05-29]], [[LLM Wiki]], [[Personal Operating System]], [[LLM Wiki Overview]], [[LLM Wiki Index]], 자동화 스크립트.
- 후속 작업: weekly review 후보 중 1개를 실제 source 보강, comparison, question answer, 또는 decision record로 닫는다.

## [2026-05-29] ingest | OfficeKeeper OSINT 보안 백과사전 글

- 오피스키퍼 보안 백과사전 글 "OSINT이란 무엇일까요?"를 raw HTML snapshot으로 보존하고 [[OfficeKeeper OSINT Dictionary Article]]로 ingest했다.
- [[OSINT]] concept page를 추가하고 공개정보 수집, threat intelligence, brand protection, incident response, compliance/risk, ASM/DRP 기반 데이터 관점을 정리했다.
- [[Agentic Workflow]], [[MCP Remote SSE]], [[Personal Operating System]]에 공개정보 수집 범위, 외부 노출면, credential/API key/endpoint 노출 점검 관점을 연결했다.
- 변경 영역: [[OSINT]], [[OfficeKeeper OSINT Dictionary Article]], [[Agentic Workflow]], [[MCP Remote SSE]], [[Personal Operating System]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: ASM, DRP, secret scanning, GitHub exposure 점검은 vendor-neutral 자료나 공식 문서로 별도 보강한다.

## [2026-05-29] ingest | Digital Bourgeois oh-my-codex 소개 글

- Tistory 글 "oh-my-codex(OMX): OpenAI Codex CLI를 위한 워크플로우 레이어 정리"를 raw HTML snapshot으로 보존하고 [[Digital Bourgeois oh-my-codex Article]]로 ingest했다.
- [[oh-my-codex]] 도구 페이지를 추가하고 Codex CLI 위의 workflow layer, `$deep-interview`, `$ralplan`, `$ralph`, `$team`, `.omx/` state, smoke test 관점을 정리했다.
- [[Codex]], [[Agentic Workflow]], [[Orchestration]], [[Skills]]에 계획/승인/실행/병렬화/상태 저장을 분리하는 운영 레이어 관점을 연결했다.
- 변경 영역: [[oh-my-codex]], [[Digital Bourgeois oh-my-codex Article]], [[Codex]], [[Agentic Workflow]], [[Orchestration]], [[Skills]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: `Yeachan-Heo/oh-my-codex` GitHub repository와 npm package를 별도 source로 확인한다.

## [2026-05-29] ingest | Anthropic Claude Opus 4.8 발표

- Anthropic 공식 발표 "Introducing Claude Opus 4.8"을 raw HTML snapshot으로 보존하고 [[Anthropic Claude Opus 4.8 Announcement]]로 ingest했다.
- [[Claude Opus 4.8]] 도구 페이지를 추가하고 Opus 4.7 대비 개선 주장, effort control, fast mode, Claude Code dynamic workflows, Messages API system entry 변경을 정리했다.
- [[Claude Code]], [[Agentic Workflow]], [[Orchestration]]에 dynamic workflows, effort 조절, 실행 중 permission/token budget/environment context 갱신 관점을 연결했다.
- 변경 영역: [[Claude Opus 4.8]], [[Anthropic Claude Opus 4.8 Announcement]], [[Claude Code]], [[Agentic Workflow]], [[Orchestration]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: Claude Opus 4.8 System Card, Claude Code dynamic workflows 별도 글, Messages API 문서를 각각 source로 확인한다.

## [2026-05-27] ingest | Velog useEffect 함수 이름 붙이기 글

- Velog 번역 글 "[번역] useEffect 함수에 이름 붙이기, 절대 후회 없을 선택"을 raw HTML snapshot으로 보존하고 [[Velog useEffect Naming Article]]로 ingest했다.
- [[React Effect Naming]] concept page를 추가하고 `useEffect` callback에 기명 함수 표현식을 사용해 의도, 책임, 디버깅 단서를 드러내는 패턴을 정리했다.
- AI 생성 React 코드 리뷰에서 "이 이펙트에 이름을 붙이면 무엇인가?"를 책임 분리와 불필요한 이펙트 탐지 질문으로 쓸 수 있음을 기록했다.
- 변경 영역: [[React Effect Naming]], [[Velog useEffect Naming Article]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: React 공식 "You Might Not Need an Effect", 원문 Dan Neciu 글, Sentry/DevTools에서 기명 함수 표시가 유지되는 조건을 별도 source로 검증한다.

## [2026-05-27] decision | AI 트렌드 레이더 아이디어 대기와 범용 아이디어 개선 전환

- 사용자의 방향 전환에 따라 [[AI 트렌드 레이더 웹사이트]]와 [[AI 트렌드 레이더 7일 PoC]]를 `parked` 상태로 변경했다.
- [[AI 트렌드 레이더 아이디어 대기 결정]]을 추가해 특정 트렌드 피드 아이템을 지금은 실행하지 않는 이유와 다시 볼 조건을 남겼다.
- [[아이디어 개선 루프]] concept page를 추가하고, `templates/idea-brief.md`를 원형 메모, 방향성 적합성, 사용 맥락, 더 일반화한 문제, 더 작게 줄인 형태, 보류/기각 조건을 다루도록 보강했다.
- 변경 영역: [[아이디어 개선 루프]], [[AI 트렌드 레이더 아이디어 대기 결정]], [[AI 트렌드 레이더 웹사이트]], [[AI 트렌드 레이더 7일 PoC]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: 새 아이디어 1개를 [[아이디어 개선 루프]] 기준으로 정리해 템플릿의 부담과 실제 개선 효과를 확인한다.

## [2026-05-26] ingest | OpenAI Codex Harness 공식 글

- OpenAI 공식 글 "Codex 하네스 활용하기: OpenAI가 App Server를 구축한 방법"을 raw markdown extraction snapshot으로 보존하고 [[OpenAI Codex Harness Article]]로 ingest했다.
- `curl`은 OpenAI 페이지에서 403을 반환해 HTML 원본은 저장하지 못했으며, source summary에 이 수집 한계를 명시했다.
- [[Codex Harness]] concept page를 추가하고 Codex App Server, Codex core, thread/turn/item, approval request, diff artifact, bidirectional JSON-RPC event stream을 정리했다.
- [[Codex]], [[Agentic Workflow]], [[Personal Operating System]]에 Codex를 shared harness와 persistent agent runtime으로 보는 관점을 보강했다.
- 변경 영역: [[Codex Harness]], [[OpenAI Codex Harness Article]], [[Codex]], [[Agentic Workflow]], [[Personal Operating System]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: Codex App Server, Codex Exec, Codex SDK developer docs와 Codex CLI repository를 별도 source로 확인한다.

## [2026-05-26] ingest | PyTorchKR E2E Test Agent 소개 글

- PyTorchKR Discuss 글 "E2E Test Agent: 자연어로 작성한 테스트 시나리오를 기반으로 테스트를 수행하는 AI E2E 테스트 프레임워크"를 raw HTML snapshot으로 보존하고 [[PyTorchKR E2E Test Agent Article]]로 ingest했다.
- [[E2E Test Agent]] 도구 페이지를 추가하고 자연어 `.test` 파일, LLM agent, Playwright MCP server, result summary로 이어지는 QA workflow를 정리했다.
- [[Agentic Workflow]]와 [[MCP Remote SSE]]에 자연어 테스트 시나리오가 browser automation action surface로 연결되는 사례를 보강했다.
- 변경 영역: [[E2E Test Agent]], [[PyTorchKR E2E Test Agent Article]], [[Agentic Workflow]], [[MCP Remote SSE]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: E2E Test Agent homepage, GitHub repository, npm package, README를 별도 source로 확인하고 작은 read-only flow에서 반복 실행 안정성을 측정한다.

## [2026-05-26] ingest | Hermes Agent 공식 사이트와 갓대희 시작 글

- Hermes Agent 공식 사이트, Goddaehee Tistory 글, Medium URL을 raw HTML snapshot으로 보존했다.
- [[Hermes Agent Official Site]]를 ingest하고 공식 사이트 기준 MIT licensed open-source agent, messaging entrypoint, persistent memory, auto-generated skills, cron, subagent, sandbox, browser/web control 주장을 정리했다.
- [[Goddaehee Hermes Agent Start Article]]을 ingest하고 설치/설정, self-learning의 실제 단위, skill/memory 구조, provider 전환, 보안, 비용, Claude Code/Cursor/OpenClaw 비교를 source summary로 분리했다.
- Medium URL은 로컬 snapshot이 Cloudflare challenge HTML만 포함해 본문을 확인할 수 없으므로 source summary 생성을 보류했다.
- 변경 영역: [[Hermes Agent]], [[Hermes Agent Official Site]], [[Goddaehee Hermes Agent Start Article]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: Hermes Agent GitHub repository, release note, open issue, install script를 공식 source로 검증하고 CLI-only sandbox에서 먼저 실행한다.

## [2026-05-26] ingest | DEVOCEAN Palantir FDE 운영 패턴 글

- DEVOCEAN 글 "Palantir FDE: 소프트웨어를 만드는 것에서 작동시키는 것으로의 전환"을 raw HTML snapshot으로 보존하고 [[DEVOCEAN Palantir FDE Article]]로 ingest했다.
- Palantir Forward Deployed Engineer를 problem framing, data integration, rapid prototyping, productionization, adoption까지 연결하는 embedded execution pattern으로 정리했다.
- [[Forward Deployed Engineer]] concept page를 추가하고 [[Agentic Workflow]], [[ML Model Serving Pipeline]], [[Personal Operating System]]에 PoC-to-production, 운영 채택, glue layer 관점을 연결했다.
- 변경 영역: [[Forward Deployed Engineer]], [[DEVOCEAN Palantir FDE Article]], [[Agentic Workflow]], [[ML Model Serving Pipeline]], [[Personal Operating System]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: Palantir FDE 공식 정의, Airbus Skywise, NYC Health + Hospitals 사례는 독립 source로 검증한다.

## [2026-05-26] ingest | WikiDocs BYOK AI 도구 비용 구조 글

- WikiDocs 블로그 글 "BYOK: AI 도구의 비용 구조를 뒤집는 조용한 혁명"을 raw HTML snapshot으로 보존하고 [[WikiDocs Jaehong BYOK AI Tools Article]]로 ingest했다.
- 로컬 raw snapshot은 Cloudflare challenge HTML이므로, source summary에 본문은 브라우징 경로로 확인했다는 수집 한계를 명시했다.
- [[BYOK]] concept page를 추가하고 [[Codex]], [[Personal Operating System]], [[Hybrid LLM Query Routing]]에 모델 비용, provider key, routing/failover, workflow 가치 분리 관점을 연결했다.
- 변경 영역: [[BYOK]], [[WikiDocs Jaehong BYOK AI Tools Article]], [[Codex]], [[Personal Operating System]], [[Hybrid LLM Query Routing]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: VS Code, GitHub Copilot Enterprise, JetBrains, OpenRouter의 BYOK 지원 범위와 가격 정책은 각 공식 발표로 재확인한다.

## [2026-05-26] ingest | Hugging Face Datasets Arrow 공식 문서

- Hugging Face Datasets 공식 문서 "Datasets Arrow"를 raw HTML snapshot으로 보존하고 [[Hugging Face Datasets Arrow Guide]]로 ingest했다.
- Apache Arrow의 columnar layout, zero-copy read, ML tool hand-off, Datasets local cache, memory-mapping, iteration 성능 주장을 source summary로 정리했다.
- [[Hugging Face Datasets]] 도구 페이지를 추가하고 [[Hugging Face]], [[Fine-tuning]]에 dataset preprocessing과 Arrow cache 관점을 연결했다.
- 변경 영역: [[Hugging Face Datasets Arrow Guide]], [[Hugging Face Datasets]], [[Hugging Face]], [[Fine-tuning]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: 실제 dataset preprocessing PoC 전 설치된 `datasets` 버전, cache 위치, memory usage, streaming 필요 여부를 확인한다.

## [2026-05-26] ingest | Velog Hugging Face LLM Course Chapter 3 번역 정리

- Velog 글 "Hugging Face LLM Course Chapter 3: Fine-Tuning A Pretrained Model - 번역/정리"를 raw HTML snapshot으로 보존하고 [[Velog Hugging Face LLM Course Chapter 3 Fine-tuning Translation]]으로 ingest했다.
- Hugging Face LLM Course 기반 dataset loading, tokenization, `Dataset.map()`, dynamic padding, `Trainer`, `compute_metrics`, PyTorch loop, Accelerate, learning curve 해석을 source summary로 정리했다.
- [[Fine-tuning]]에 learning curve monitoring과 end-to-end 실험 흐름 관점을 보강하고, [[Hugging Face]] 관련 자료에 연결했다.
- 변경 영역: [[Velog Hugging Face LLM Course Chapter 3 Fine-tuning Translation]], [[Fine-tuning]], [[Hugging Face]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: 실제 실습 전 원본 Hugging Face LLM Course와 현재 Transformers/Datasets/Accelerate/Evaluate 문서로 API를 재확인한다.

## [2026-05-26] ingest | Hugging Face Transformers fine-tuning 공식 문서

- Hugging Face Transformers 한국어 공식 문서 "사전 학습된 모델 미세 튜닝하기"를 raw HTML snapshot으로 보존하고 [[Hugging Face Transformers Training Guide]]로 ingest했다.
- 문서의 dataset 준비, tokenization, `TrainingArguments`/`Trainer`, 기본 PyTorch `DataLoader`/optimizer/scheduler/training loop, 평가 metric 흐름을 source summary로 정리했다.
- [[Hugging Face]]와 [[Fine-tuning]]에 공식 training workflow를 보강했다.
- 변경 영역: [[Hugging Face Transformers Training Guide]], [[Hugging Face]], [[Fine-tuning]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: 실제 fine-tuning 코드 실행 전 Transformers 현재 버전, 영어 원문, PyTorch/evaluate API를 다시 확인한다.

## [2026-05-26] ingest | seungbeomdo Hugging Face 사용법 2편

- Tistory 글 "Hugging Face 사용법 (1) pipeline 함수 사용하기 및 모델 객체 로컬에 다운 받기"와 "Hugging Face 사용법 (2) Fine-tuning"을 raw HTML snapshot으로 보존했다.
- 첫 글은 [[Seungbeomdo Hugging Face Pipeline Article]]로 ingest하고 Transformers `pipeline`, 로컬 모델 경로, zero-shot classification 흐름을 정리했다.
- 두 번째 글은 [[Seungbeomdo Hugging Face Fine-tuning Article]]로 ingest하고 freezing, feature extraction, end-to-end fine-tuning, `Trainer` 흐름을 [[Fine-tuning]] concept page로 정리했다.
- [[Hugging Face]] 도구 페이지를 추가하고 [[Hermes 4.3 36B]], [[ML Model Serving Pipeline]]에 연결했다.
- 변경 영역: [[Hugging Face]], [[Fine-tuning]], [[ML Model Serving Pipeline]], [[Hermes 4.3 36B]], [[LLM Wiki Index]], [[LLM Wiki Overview]].
- 후속 작업: 실제 코드 실행 전 Hugging Face Transformers, Datasets, PyTorch 공식 문서와 현재 버전 기준으로 API를 재확인한다.

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
