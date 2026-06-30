---
title: LinkedIn Kim Local LLM ClaudeCode MacBook Article
source_id: linkedin-kim-local-llm-claudecode-macbook-2026-06-28
type: source
status: active
created: 2026-06-30
updated: 2026-06-30
tags:
  - source
  - linkedin
  - local-llm
  - claude-code
  - coding-agent
  - macbook
related:
  - "[[로컬 LLM]]"
  - "[[Claude Code]]"
  - "[[BYOK]]"
  - "[[Hybrid LLM Query Routing]]"
  - "[[MiniMax M3]]"
original_path: raw/external/linkedin-kim-local-llm-claudecode-macbook-2026-06-28.html
date_added: 2026-06-30
published_at: 2026-06-28T22:02:45+00:00
captured_at: 2026-06-30T09:25:21+09:00
accessed_at: 2026-06-30T09:25:21+09:00
canonical_url: https://kr.linkedin.com/pulse/%EB%82%B4-%EB%A7%A5%EB%B6%81%EC%97%90-%EB%A1%9C%EC%BB%AC-llm-%EC%84%A4%EC%B9%98%ED%95%B4%EC%84%9C-claudecode-%EB%8F%8C%EB%A6%AC%EB%A9%B4-%EC%93%B8%EB%A7%8C%ED%95%A0%EA%B9%8C-feat-300%EB%A7%8C%EC%9B%90%EC%A7%9C%EB%A6%AC-%EB%A7%A5%EB%B6%81-%EC%84%B1%EC%88%98-%EA%B9%80-wvimc
content_hash: sha256:feb7e712e2e300cf982dd0a4636ea11e9b6f14621b9b0c10eed54f95d37b286f
source_version: "LinkedIn Pulse public HTML snapshot captured 2026-06-30"
domain:
  - ai
  - software
content_type: article
knowledge_role:
  - source
  - reference
  - comparison
source_quality: anecdotal
use_for:
  - concept
  - reference
  - decision
related_pages:
  - "[[로컬 LLM]]"
  - "[[Claude Code]]"
  - "[[BYOK]]"
  - "[[Hybrid LLM Query Routing]]"
  - "[[MiniMax M3]]"
sensitivity: private
evidence_level: source-backed
---

# LinkedIn Kim Local LLM ClaudeCode MacBook Article

## 출처

김성수의 LinkedIn Pulse 글 "내 맥북에 로컬 LLM 설치해서 ClaudeCode 돌리면 쓸만할까? (Feat. 300만원짜리 맥북, vllm)"이다. 개인 MacBook Pro에서 여러 소형·오픈소스 계열 LLM을 ClaudeCode에 연결해 간단한 게임 구현 과제를 수행하게 한 체험기다.

## 분류

- domain: ai, software
- content_type: article
- knowledge_role: source, reference, comparison
- source_quality: anecdotal
- use_for: concept, reference, decision

## 원본 위치와 provenance

- HTML snapshot: `raw/external/linkedin-kim-local-llm-claudecode-macbook-2026-06-28.html`
- canonical URL: https://kr.linkedin.com/pulse/%EB%82%B4-%EB%A7%A5%EB%B6%81%EC%97%90-%EB%A1%9C%EC%BB%AC-llm-%EC%84%A4%EC%B9%98%ED%95%B4%EC%84%9C-claudecode-%EB%8F%8C%EB%A6%AC%EB%A9%B4-%EC%93%B8%EB%A7%8C%ED%95%A0%EA%B9%8C-feat-300%EB%A7%8C%EC%9B%90%EC%A7%9C%EB%A6%AC-%EB%A7%A5%EB%B6%81-%EC%84%B1%EC%88%98-%EA%B9%80-wvimc
- published_at: 2026-06-28T22:02:45+00:00
- captured_at: 2026-06-30T09:25:21+09:00
- SHA-256: `feb7e712e2e300cf982dd0a4636ea11e9b6f14621b9b0c10eed54f95d37b286f`

## 원문 요약

작성자는 개인 PC에서 실행 가능한 작은 LLM들을 MacBook Pro M4, 48GB memory, 1TB disk 환경에 설치하고 ClaudeCode에 연결해 실사용 성능을 확인했다고 설명한다. 모델 후보는 Gemma 4 E2B, Qwen3 8B, Llama 3.1 8B, Mistral Small 3.2, Claude Opus 4.8, Claude Sonnet 4.6, Claude Haiku 4로 제시된다. 작성자는 tool calling, thinking proxy 우회 등 성능 최적화를 위한 미세 튜닝을 했다고 말하지만 세부 설정은 HTML 본문만으로 충분히 재현할 수 없다.

테스트는 각 모델을 ClaudeCode에 연결하고, 모델별 작업 directory를 완전히 분리한 뒤 동일한 prompt로 네 가지 게임, 즉 테트리스, 2048, 길건너 친구들, 스트리트 파이터를 만들게 하는 방식이었다. prompt는 Opus에게 작성하게 했고 수정 없이 사용했으며, 각 작업에는 900초 제한을 두었다고 한다.

작성자의 결론은 Claude Opus가 모든 과제를 15분 이내에 만들었고, 오픈소스 모델들은 전부 실패했으며 Gemma가 그나마 비슷하게 만들었지만 버그가 많아 정상 동작은 아니었다는 것이다. 또한 테스트 중 충전 중인 노트북 배터리가 줄고 팬이 최대로 도는 경험을 언급하며, "완전한 내손안에 무료 LLM"은 아직 시간이 필요하다고 결론낸다.

## 핵심 주장

- 벤치마크와 실제 coding agent 체감 성능은 다를 수 있다.
- MacBook Pro M4 48GB 같은 개인 장비에서도 소형 모델은 설치 가능하지만, ClaudeCode 기반 간단한 게임 구현 과제에서는 안정적인 결과를 내지 못했다고 한다.
- ClaudeCode라는 agent harness를 빌려도 model capability가 낮으면 게임 구현 task의 실패를 충분히 극복하지 못했다.
- 로컬 LLM은 비용과 통제 측면에서 매력적이지만, coding agent backend로 쓰려면 task success, latency, 발열·배터리, tool calling, timeout을 함께 봐야 한다.

## 위키에 반영할 개념

- [[로컬 LLM]] 개념 페이지를 새로 만들고, open-weight/local model을 BYOK와 구분해 정리한다.
- [[Claude Code]]에는 local model backend를 붙이는 실험에서 harness 성능과 model capability를 분리 평가해야 한다는 관점을 추가한다.
- [[BYOK]]에는 provider key를 가져오는 BYOK와 model/runtime을 로컬로 가져오는 local LLM의 차이를 연결한다.
- [[Hybrid LLM Query Routing]]에는 로컬 소형 모델을 쉬운 작업에만 쓰고 어려운 coding task는 frontier model로 보내는 routing 기준을 연결한다.

## 내 프로젝트에 주는 시사점

- LLM Wiki ingest나 coding workflow에 로컬 LLM을 붙이려면 먼저 task별 success criterion을 정해야 한다. "설치 가능"과 "agent workflow에 맡길 수 있음"은 다른 기준이다.
- 로컬 LLM은 비용 절감 후보지만, 실패 후 재시도·검토 시간, 전력·발열, setup 유지보수 비용까지 포함해 비교해야 한다.
- 개인 workflow에서는 작은 formatting, classification, triage는 로컬 후보로 두되, source summary 작성, contradiction 판단, code review처럼 실패 비용이 큰 작업은 강한 모델과 lint/test gate를 유지하는 편이 현실적이다.

## 후속 라우팅

- concept 강화: [[로컬 LLM]], [[Hybrid LLM Query Routing]], [[BYOK]]
- tool 강화: [[Claude Code]], [[MiniMax M3]]
- comparison 후보: 로컬 LLM vs BYOK frontier API vs open-weight cloud serving
- question 후보: coding agent backend로 로컬 LLM을 쓸 때 최소 평가 기준은 무엇인가
- idea 후보: LLM Wiki triage task 10개로 로컬 LLM과 frontier model을 비교하는 작은 eval
- mvp 후보: 없음
- 보류: vLLM, Ollama, LM Studio, llama.cpp 같은 runtime page는 이 글만으로 만들지 않는다.

## 검증 필요 주장

- 각 모델의 정확한 checkpoint, quantization, serving runtime, context length, tool calling 설정, thinking proxy 우회 방식은 본문만으로 재현할 수 없다.
- 이미지 안의 결과표 세부 점수는 HTML 텍스트로 완전히 추출되지 않았으므로 수치 비교 자료로 쓰지 않는다.
- "오픈소스 모델들은 전부 실패"라는 결론은 4개 게임, 작성자 prompt, MacBook Pro M4 48GB, 900초 제한이라는 조건의 개인 실험으로만 취급한다.
- Claude Opus 4.8, Sonnet 4.6, Haiku 4 같은 모델명과 availability는 현재 공식 문서로 별도 확인해야 한다.
- LinkedIn 댓글의 결과물 웹페이지 링크와 실제 playable artifact는 이번 ingest에서 확인하지 않았다.

## 관련 페이지

- [[로컬 LLM]]
- [[Claude Code]]
- [[BYOK]]
- [[Hybrid LLM Query Routing]]
- [[MiniMax M3]]

## 열린 질문

- LLM Wiki 작업 중 로컬 LLM으로 충분한 작업은 triage, taxonomy, link suggestion 중 어디까지인가?
- coding agent backend 비교에서 prompt, timeout, directory isolation, artifact inspection, replay 가능성을 어떻게 표준화할 것인가?
- 로컬 모델의 비용 장점은 실패율과 human review 시간을 포함해도 유지되는가?
