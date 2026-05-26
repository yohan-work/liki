---
title: E2E Test Agent
type: tool
status: active
created: 2026-05-26
updated: 2026-05-26
tags:
  - e2e-test-agent
  - testing
  - qa
  - playwright
  - mcp
  - agents
related:
  - "[[PyTorchKR E2E Test Agent Article]]"
  - "[[Agentic Workflow]]"
  - "[[MCP Remote SSE]]"
  - "[[Human-in-the-loop]]"
sensitivity: private
evidence_level: source-backed
---

# E2E Test Agent

## 무엇인가

E2E Test Agent는 자연어로 작성한 E2E 테스트 시나리오를 LLM이 해석하고, Playwright MCP server 같은 도구로 실제 브라우저를 조작해 검증하는 AI 기반 테스트 프레임워크로 소개된다. [[PyTorchKR E2E Test Agent Article]]은 이 도구를 "테스트를 코드가 아닌 사람의 언어로 작성하자"는 방향의 도구로 설명한다.

## 사용 사례

- 기획자, QA, 개발자가 함께 읽을 수 있는 자연어 test spec을 만든다.
- 반복적인 product walkthrough나 smoke test를 브라우저 자동화로 실행한다.
- DOM selector나 CSS 구조에 강하게 묶인 테스트가 자주 깨지는 영역에서 intent-based 테스트 후보로 평가한다.
- Playwright MCP server를 활용해 브라우저 조작, web search, filesystem/API 확장 가능성을 검토한다.

## 강점

- 테스트 의도가 자연어로 드러나기 때문에 비개발자도 test case의 목적을 읽기 쉽다.
- `.test` 파일, `TestAgent`, LLM agent, MCP tools, app interaction, result summary로 이어지는 구조가 명확하다.
- OpenAI API compatible endpoint를 통해 OpenAI, Claude, OpenRouter, Ollama, LM Studio 등으로 provider를 바꿀 수 있다고 소개된다.
- 결과 summary가 단계별 수행 내역과 pass/fail 상태를 남기므로 QA report나 regression artifact로 연결하기 좋다.

## 한계

- PyTorchKR 글 자체가 GPT 정리 기반이라고 밝히므로, 실제 기능 범위는 homepage, GitHub repository, npm package, README로 재검증해야 한다.
- LLM이 브라우저를 해석하고 행동하는 방식은 비용, 속도, 재현성, flaky behavior, false positive/false negative 문제가 생길 수 있다.
- MCP server로 filesystem이나 API 호출까지 확장하면 테스트 도구가 action surface가 되므로 sandbox와 allowlist가 필요하다.
- 기존 Playwright/Cypress 테스트를 바로 대체하기보다, 의도 기반 smoke test와 exploratory regression 후보로 먼저 다루는 것이 안전하다.

## 검토 체크포인트

- 테스트 범위: 결제, 삭제, 메일 발송처럼 외부 side effect가 있는 flow는 별도 sandbox나 mock에서만 실행한다.
- 모델 설정: `MODEL_NAME`, `API_KEY`, `BASE_URL`, `TESTS_DIR`, `maxSteps`를 환경별로 분리한다.
- 실행 안정성: 같은 테스트를 반복 실행해 pass/fail 일관성, token cost, 평균 실행 시간을 측정한다.
- 결과 검증: 자연어 summary만 신뢰하지 말고 screenshot, trace, network log, structured assertion을 함께 남긴다.

## 관련 자료

- [[PyTorchKR E2E Test Agent Article]]

## 메모

다음 단계는 공식 GitHub repository와 homepage를 별도 source로 ingest하고, 작은 read-only web flow에서 Playwright 기반 smoke test로 실제 안정성을 확인하는 것이다.
