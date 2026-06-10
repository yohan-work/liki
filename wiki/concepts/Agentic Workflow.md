---
title: Agentic Workflow
type: concept
status: seed
created: 2026-05-20
updated: 2026-06-10
tags:
  - agents
  - workflow
related:
  - "[[Orchestration]]"
  - "[[Human-in-the-loop]]"
  - "[[Codex]]"
  - "[[Claude Blue]]"
  - "[[Ralph Wiggum Loop]]"
  - "[[MCP Remote SSE]]"
  - "[[Content Marketing Team]]"
  - "[[GitHub Content Marketing Team Repository]]"
  - "[[Realtime API]]"
  - "[[OpenAI Realtime Models Prompting Guide]]"
  - "[[GeekNews Codex Use Cases Expansion]]"
  - "[[Forward Deployed Engineer]]"
  - "[[DEVOCEAN Palantir FDE Article]]"
  - "[[E2E Test Agent]]"
  - "[[PyTorchKR E2E Test Agent Article]]"
  - "[[Codex Harness]]"
  - "[[OpenAI Codex Harness Article]]"
  - "[[Claude Opus 4.8]]"
  - "[[Anthropic Claude Opus 4.8 Announcement]]"
  - "[[oh-my-codex]]"
  - "[[Digital Bourgeois oh-my-codex Article]]"
  - "[[OSINT]]"
  - "[[OfficeKeeper OSINT Dictionary Article]]"
  - "[[Frontier Systems]]"
  - "[[Stanford CS153 Frontier Systems Course Page]]"
  - "[[SkillOpt]]"
  - "[[SkillOpt Project Page]]"
  - "[[Digital Bourgeois SkillOpt Article]]"
  - "[[Velog Claude Opus 4.8 Reaction Article]]"
  - "[[CI/CD 배포 파이프라인]]"
  - "[[GeekNews MiniMax M3 Article]]"
  - "[[Clicky]]"
  - "[[GitHub Clicky Repository]]"
  - "[[디자인 스펙 자동화]]"
  - "[[Figma Console MCP]]"
  - "[[Uber Automate Design Specs Article]]"
  - "[[Anthropic Claude Code Dynamic Workflows Article]]"
  - "[[Google I/O 2026 Keynote Moments Article]]"
  - "[[에이전틱 엔진 최적화]]"
  - "[[GeekNews Weekly 202616 AEO Article]]"
  - "[[PDCA 사이클]]"
  - "[[Asana PDCA Cycle Article]]"
  - "[[Claude Fable 5]]"
  - "[[GeekNews Claude Fable 5 and Mythos 5 Article]]"
  - "[[AI 실험 문화]]"
  - "[[Toss Tech AI Surf Day Article]]"
  - "[[하네스 엔지니어링]]"
  - "[[Kiro]]"
  - "[[Yanlog Kiro User Interview 003]]"
sensitivity: private
evidence_level: source-backed
---

# Agentic Workflow

## 정의

Agentic workflow는 LLM 기반 시스템이 목표를 향해 계획하고, 행동하고, 결과를 점검하고, 반복하는 workflow다.

## 중요한 이유

이 위키는 반복되는 agent pattern, boundary, failure mode, human review point를 기록하는 데 사용할 수 있다.

## 핵심 아이디어

- agent에는 명확한 scope와 feedback이 필요하다.
- tool use는 가능한 한 관찰 가능하고 되돌릴 수 있어야 한다.
- 민감하거나 영향이 큰 작업에는 human review가 여전히 중요하다.
- [[Brunch Claude Blue Article]]은 실행, 학습, 검토를 위해 여러 agent를 병렬로 돌리는 일화적 workflow를 설명한다.
- [[AI Hero Ralph Wiggum Article]]은 plan file, progress file, feedback loop, commit boundary를 사용해 AI coding CLI를 반복 실행하는 autonomous workflow를 설명한다.
- [[Tistory MCP Remote SSE Article]]은 agent가 외부 tool server를 remote SSE endpoint로 연결하는 MCP 구성 패턴을 보여준다.
- [[GitHub Content Marketing Team Repository]]는 planner가 brief를 만들고 여러 specialist agent가 병렬로 산출물을 작성한 뒤 reviewer가 검수하는 콘텐츠 제작 workflow를 보여준다.
- [[OpenAI Realtime Models Prompting Guide]]는 voice agent도 role, decision point, tool policy, confirmation boundary, failure recovery, escalation을 명시한 workflow로 설계해야 한다고 설명한다.
- [[GeekNews Codex Use Cases Expansion]]은 agentic workflow를 coding task뿐 아니라 피드백 정리, 데이터 정리, PR 리뷰, 버그 트리아지, 회의 후속 작업, 운영 자동화, eval, 문서 최신화까지 확장된 업무 위임 패턴으로 보여준다.
- [[DEVOCEAN Palantir FDE Article]]은 잘 만든 AI/데이터 시스템이 실제 운영에 들어가지 못하는 문제를 FDE라는 embedded execution pattern으로 설명한다.
- [[PyTorchKR E2E Test Agent Article]]은 자연어 테스트 시나리오를 LLM이 해석하고 Playwright MCP 도구로 실제 브라우저를 조작한 뒤 결과를 요약하는 QA workflow를 보여준다.
- [[OpenAI Codex Harness Article]]은 agent workflow를 item, turn, thread로 나누고 tool execution, approval request, diff, streaming message를 typed event로 다루는 Codex App Server 설계를 보여준다.
- [[Anthropic Claude Opus 4.8 Announcement]]은 agentic workflow의 품질 기준으로 더 나은 판단, 불확실성 표시, unsupported claim 감소, 병렬 subagent 실행, 결과 검증을 함께 제시한다.
- [[Digital Bourgeois oh-my-codex Article]]은 Codex CLI 작업을 `$deep-interview`, `$ralplan`, `$ralph`, `$team` 같은 단계로 나누어 모호한 요청, 계획 승인, 실행 책임, 병렬 처리를 분리하는 workflow layer 사례를 보여준다.
- [[OfficeKeeper OSINT Dictionary Article]]은 공개정보 수집이 보안 위협 탐지에 유용하지만 정확성, 법적 제약, 데이터 과잉 문제가 있음을 설명한다. Agent가 웹이나 공개 repository를 조사할 때도 수집 범위, 저장 필요성, 출처 검증, privacy boundary를 명시해야 한다.
- [[Stanford CS153 Frontier Systems Course Page]]는 "One-Person Frontier Lab"을 course project로 제시하며, 적절한 도구와 workflow를 가진 개인이 조직 규모의 산출을 만들 수 있다는 agentic workflow의 상위 방향성을 보여준다.
- [[SkillOpt Project Page]]는 agentic workflow 개선을 감각적 prompt 수정이 아니라 rollout, reflection, bounded edit, held-out validation gate를 거치는 학습 loop로 모델링한다.
- [[Digital Bourgeois SkillOpt Article]]은 skill 문서, train/val/test split, history artifact, `best_skill.md`를 통해 agent 개선 과정을 재현 가능한 workflow로 관리하는 관점을 제공한다.
- [[Velog Claude Opus 4.8 Reaction Article]]은 agentic workflow의 품질을 "빠르게 완료 선언"이 아니라 불확실성 보고, 이의 제기, 자체 검수, evidence 기반 완료 보고로 봐야 한다는 사용감 중심 관점을 제공한다.
- [[CI/CD 배포 파이프라인]]은 agent가 배포나 운영 action을 수행할 때 trigger, approval, artifact, log, rollback을 명시해야 한다는 비교 vocabulary를 제공한다.
- [[GeekNews MiniMax M3 Article]]은 MiniMax Code의 producer/verifier 구조를 소개하며, agentic coding에서 생성 agent와 검증 agent를 분리하는 패턴을 비용이 낮은 open-weight model 후보와 연결한다.
- [[GitHub Clicky Repository]]는 voice input, screen capture, Claude response, TTS, cursor pointing overlay를 연결하는 macOS local companion 사례를 제공한다. 여기서 agentic workflow는 자동 클릭보다 사용자가 보는 화면 위에서 설명하고 가리키는 human-centered assistance에 가깝다.
- [[Uber Automate Design Specs Article]]은 agent가 Figma component tree, design token, variable, style을 MCP로 읽고, section별 skill과 template rendering을 통해 design spec page를 Figma 안에 생성하는 workflow를 보여준다.
- [[Anthropic Claude Code Dynamic Workflows Article]]은 dynamic workflow를 task-specific harness generation으로 설명하며, classify-and-act, fan-out-and-synthesize, adversarial verification, generate-and-filter, tournament, loop until done 같은 orchestration pattern을 제시한다.
- [[Google I/O 2026 Keynote Moments Article]]은 Search agents, Antigravity 기반 custom mini app, Daily Brief, Gemini Spark처럼 consumer product surface 안에서 background agent와 generated UI가 결합되는 방향을 보여준다.
- [[GeekNews Weekly 202616 AEO Article]]은 agent workflow의 입력 표면도 설계 대상임을 보여준다. 문서가 agent에게 발견되고 context에 들어가는 방식, token length, llms.txt, MCP Server Card, permission metadata는 agentic workflow의 upstream boundary가 될 수 있다.
- [[Asana PDCA Cycle Article]]은 [[PDCA 사이클]]을 계획, 실행, 점검, 조치가 반복되는 지속적 개선 루프로 설명한다. Agentic workflow에서는 완료 선언보다 실행 결과를 점검하고 다음 반복에 반영하는 Check/Act 단계가 중요하다는 vocabulary로 쓸 수 있다.
- [[GeekNews Claude Fable 5 and Mythos 5 Article]]은 며칠 단위 장기 작업에서 계획, subagent 위임, 도구 실행, 파일 기반 메모리, 자체 검증을 결합하는 방향을 보여준다. 동시에 안전 분류기에 따른 모델 폴백이 발생할 수 있으므로 실제 응답 모델, checkpoint, 비용, stop condition을 workflow state로 기록해야 한다.
- [[Toss Tech AI Surf Day Article]]은 짧은 해커톤에서 Codex가 구현, 빌드, iOS Simulator 조작 검증, 수정, 증거 영상 생성을 반복한 사례와 AI 분류 결과를 담당자가 확정·반려하는 workflow를 소개한다. 이는 agentic workflow를 데모가 아니라 검증 루프와 human approval을 포함한 업무 자산으로 남겨야 한다는 사례다.
- [[Yanlog Kiro User Interview 003]]은 Kiro steering에 정책, 작업 구조, naming rule을 넣고 skill로 반복 action을 분리해 FinOps 조사와 운영 분석을 수행한 사례다. [[하네스 엔지니어링]] 관점에서는 agent workflow의 prompt뿐 아니라 directory, branch, README, request history, session 재개 규칙이 함께 설계되어야 한다.

## 관련 자료

- [[Brunch Claude Blue Article]]
- [[AI Hero Ralph Wiggum Article]]
- [[Tistory MCP Remote SSE Article]]
- [[GitHub Content Marketing Team Repository]]
- [[OpenAI Realtime Models Prompting Guide]]
- [[GeekNews Codex Use Cases Expansion]]
- [[DEVOCEAN Palantir FDE Article]]
- [[PyTorchKR E2E Test Agent Article]]
- [[OpenAI Codex Harness Article]]
- [[Anthropic Claude Opus 4.8 Announcement]]
- [[Digital Bourgeois oh-my-codex Article]]
- [[OfficeKeeper OSINT Dictionary Article]]
- [[Stanford CS153 Frontier Systems Course Page]]
- [[SkillOpt Project Page]]
- [[Digital Bourgeois SkillOpt Article]]
- [[Velog Claude Opus 4.8 Reaction Article]]
- [[GeekNews MiniMax M3 Article]]
- [[GitHub Clicky Repository]]
- [[Uber Automate Design Specs Article]]
- [[Anthropic Claude Code Dynamic Workflows Article]]
- [[Google I/O 2026 Keynote Moments Article]]
- [[GeekNews Weekly 202616 AEO Article]]
- [[Asana PDCA Cycle Article]]
- [[GeekNews Claude Fable 5 and Mythos 5 Article]]
- [[Toss Tech AI Surf Day Article]]
- [[Yanlog Kiro User Interview 003]]

## 열린 질문

- 어떤 작업을 agent에게 위임해야 하는가?
- 어떤 작업은 항상 human approval을 거쳐야 하는가?
- Agent workflow가 실제 업무 루틴에 채택되었는지를 어떻게 측정할 것인가?
- agent workflow 개선 자체를 어떤 held-out task로 검증할 것인가?
- agent가 완료를 선언할 때 어떤 test, diff, log, screenshot, source evidence를 요구할 것인가?
- agent에게 배포 action을 맡길 때 CI/CD 수준의 approval gate와 rollback plan을 어디까지 요구할 것인가?
- screen-aware companion과 browser automation agent는 어떤 기준으로 역할을 나눠야 하는가?
- agent workflow에서 screenshot 기반 추론과 structured tool data 기반 추출은 어떤 기준으로 나눠야 하는가?
- dynamic workflow의 subagent fan-out, verifier, tournament, stop condition을 어떤 local wiki maintenance task에 먼저 적용할 수 있는가?
- agent가 읽는 문서와 사이트를 어떤 구조로 제공해야 workflow 성공률이 올라가는가?
- agentic workflow에 PDCA를 적용할 때 Check 단계의 최소 evidence는 무엇이어야 하는가?
- 장기 실행 중 모델 폴백이 발생했을 때 작업 품질과 비용을 어떤 audit log로 분리 평가할 것인가?
