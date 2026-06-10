---
title: Claude Code
type: tool
status: seed
created: 2026-05-20
updated: 2026-06-10
tags:
  - claude-code
  - coding-agent
related:
  - "[[Codex]]"
  - "[[Agentic Workflow]]"
  - "[[Claude Blue]]"
  - "[[Content Marketing Team]]"
  - "[[GitHub Content Marketing Team Repository]]"
  - "[[Claude Opus 4.8]]"
  - "[[Anthropic Claude Opus 4.8 Announcement]]"
  - "[[SkillOpt]]"
  - "[[SkillOpt Project Page]]"
  - "[[Velog Claude Opus 4.8 Reaction Article]]"
  - "[[Matt Pocock Skills]]"
  - "[[GitHub Matt Pocock Skills Repository]]"
  - "[[Clicky]]"
  - "[[GitHub Clicky Repository]]"
  - "[[Anthropic Claude Code Dynamic Workflows Article]]"
  - "[[Claude Fable 5]]"
  - "[[GeekNews Claude Fable 5 and Mythos 5 Article]]"
  - "[[Humanize KR]]"
  - "[[GitHub im-not-ai Repository]]"
sensitivity: private
evidence_level: source-backed
---

# Claude Code

## 무엇인가

Claude Code는 AI-native development workflow의 일부로 비교하고 연구할 coding-agent tool이다.

[[Anthropic Claude Opus 4.8 Announcement]]은 Claude Code에 dynamic workflows research preview가 추가되었다고 발표했다. 이 기능은 계획, 다수의 병렬 subagent 실행, 결과 검증을 한 세션 안에서 묶어 대규모 코드베이스 작업을 처리하는 방향으로 소개된다.

[[Velog Claude Opus 4.8 Reaction Article]]은 Dynamic Workflows를 큰 일을 잘게 나눠 동시에 처리하고, 끝나면 자체 검수와 보고까지 하는 "통째로 맡기는" 방향으로 해석한다. 실제로 신뢰하려면 각 subtask의 evidence, test 결과, 실패/불확실성 보고가 함께 남아야 한다.

[[SkillOpt Project Page]]는 Claude Code를 SkillOpt 평가 harness 중 하나로 포함하며, Codex-trained skill의 cross-harness transfer 사례를 제시한다. 이 자료는 Claude Code workflow 비교에서 skill artifact의 이식성을 별도 평가 축으로 둘 수 있음을 시사한다.

[[GitHub Matt Pocock Skills Repository]]는 저자의 `.claude` directory에서 나온 skill collection으로 소개되며, Claude Code 같은 coding agent에서 grilling, TDD, diagnosis, architecture review, git guardrail을 skill로 운영하는 사례다.

[[GitHub Clicky Repository]]는 README의 빠른 시작에서 Claude Code에게 repository clone, `CLAUDE.md` 읽기, Cloudflare Worker 설정, proxy URL 교체, Xcode 실행 안내를 맡기는 prompt를 제시한다. 이는 open-source app onboarding에 coding agent를 setup assistant로 쓰는 practitioner example이다.

[[Anthropic Claude Code Dynamic Workflows Article]]은 dynamic workflows를 Claude Code가 task에 맞는 multi-agent harness를 즉석에서 작성하고 orchestrate하는 기능으로 설명한다. 글은 long-running, massively parallel, structured, adversarial task에서 single context agent가 agentic laziness, self-preferential bias, goal drift에 취약해질 수 있으며, 별도 context를 가진 subagent와 verifier를 통해 이를 완화한다고 말한다.

[[GeekNews Claude Fable 5 and Mythos 5 Article]]은 [[Claude Fable 5]]를 Claude Code 같은 환경에서 며칠 단위로 계획, subagent 위임, 도구 실행, 자체 검증을 수행하는 모델로 소개한다. 장기 실행을 평가할 때는 요청 모델과 실제 응답 모델, Opus 4.8 폴백 여부, checkpoint, 비용, test artifact를 함께 기록해야 한다.

[[GitHub im-not-ai Repository]]는 Claude Code plugin과 skill, 다수의 role-specific agent를 묶어 한국어 문체 탐지, 윤문, 의미 보존 감사, 자연스러움 검토를 분리한 practitioner example이다. 전역 agent 설치와 자동 업데이트가 가능하므로 사용 전 instruction과 installer diff를 검토해야 한다.

## 사용 사례

- coding assistance.
- repository exploration.
- [[Codex]]와의 workflow comparison.
- [[Brunch Claude Blue Article]]은 저자가 전한 대화에 근거해 Claude Code를 AI-native coding workflow에서 사용되는 tool 중 하나로 다룬다.
- [[GitHub Content Marketing Team Repository]]는 Claude Code의 subagent와 skill 구조를 콘텐츠 마케팅 자동화 template로 구성한 사례다.
- [[Anthropic Claude Opus 4.8 Announcement]]은 Claude Code에서 Opus 4.8 effort level과 dynamic workflows가 장시간 비동기 작업, 대규모 migration, subagent orchestration의 조절면이 된다고 설명한다.
- [[Velog Claude Opus 4.8 Reaction Article]]은 effort control을 급한 작업과 중요한 작업의 깊이를 나누는 사용자-facing 조절면으로 해석한다.
- [[GitHub Clicky Repository]]는 Claude Code가 repository-specific instruction을 읽고 local setup 절차를 안내하는 흐름을 보여준다.
- [[Anthropic Claude Code Dynamic Workflows Article]]은 migration/refactor, deep research, deep verification, sorting, memory/rule adherence, root-cause investigation, triage, eval, model routing을 dynamic workflows의 주요 사용 사례로 제시한다.
- [[GeekNews Claude Fable 5 and Mythos 5 Article]]은 Fable 5의 장기 자율 작업, 파일 기반 지속 메모리, 안전 분류기와 Opus 4.8 폴백을 Claude Code 운영 조건으로 연결한다.

## 관련 자료

- [[Brunch Claude Blue Article]]
- [[GitHub Content Marketing Team Repository]]
- [[Anthropic Claude Opus 4.8 Announcement]]
- [[SkillOpt Project Page]]
- [[Velog Claude Opus 4.8 Reaction Article]]
- [[GitHub Matt Pocock Skills Repository]]
- [[GitHub Clicky Repository]]
- [[Anthropic Claude Code Dynamic Workflows Article]]
- [[GeekNews Claude Fable 5 and Mythos 5 Article]]
- [[GitHub im-not-ai Repository]]

## 한계

이 페이지는 아직 가볍게 source-backed된 수준이므로 사실 비교 자료로 사용하면 안 된다.

## 열린 질문

- 어떤 workflow가 Claude Code에 더 적합한가?
- 개인 사용 관점에서 어떤 비교 기준이 중요한가?
- Codex와 Claude Code 사이에 transfer 가능한 skill은 어떤 형식을 가져야 하는가?
- Dynamic Workflows의 자체 검수 결과를 어떤 artifact로 남겨야 사람이 다시 검토하기 쉬운가?
- Claude Code용 skill을 Codex에서도 재사용하려면 어떤 format과 safety boundary가 필요한가?
- README prompt만으로 local setup을 맡길 때 permission, secret, Xcode signing 같은 민감 단계를 어떻게 승인 경계로 나눌 것인가?
- dynamic workflow의 JavaScript harness, worktree isolation, model routing, saved workflow를 실제 Claude Code CLI에서 어떤 audit artifact로 남길 수 있는가?
- 장기 작업 중 Fable 5가 Opus 4.8로 폴백하면 실제 실행 모델과 폴백 이유를 어떤 로그 형식으로 남길 것인가?
- plugin이 여러 전역 agent와 skill을 설치할 때 이름 충돌, update provenance, rollback을 어떻게 관리할 것인가?
