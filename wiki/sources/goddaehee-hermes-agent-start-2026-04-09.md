---
title: Goddaehee Hermes Agent Start Article
type: source
status: ingested
created: 2026-05-26
updated: 2026-05-26
tags:
  - source
  - hermes-agent
  - tistory
  - skills
  - memory
  - security
  - cost
related:
  - "[[Hermes Agent]]"
  - "[[Hermes Agent Official Site]]"
  - "[[Skills]]"
  - "[[MCP Remote SSE]]"
  - "[[BYOK]]"
sensitivity: private
evidence_level: source-backed
source_id: goddaehee-hermes-agent-start-2026-04-09
original_path: raw/external/goddaehee-tistory-577-2026-05-26.html
date_added: 2026-05-26
published_at: 2026-04-09
date_modified: 2026-05-01
captured_at: 2026-05-26
accessed_at: 2026-05-26
canonical_url: https://goddaehee.tistory.com/577
content_hash: sha256:3230a08e9be55723475110980d6f2fbbc3d71af91a75e26af161a1f038964c30
source_version: goddaehee_tistory_snapshot_2026-05-26
domain:
  - ai
  - software
content_type: article
knowledge_role:
  - source
  - reference
  - tool
source_quality: practitioner
use_for:
  - reference
  - decision
  - concept
related_pages:
  - "[[Hermes Agent]]"
  - "[[Hermes Agent Official Site]]"
  - "[[Skills]]"
  - "[[MCP Remote SSE]]"
  - "[[BYOK]]"
---

# Goddaehee Hermes Agent Start Article

## 자료 요약

갓대희 Tistory 글 "Hermes Agent(1) 시작하기 : 쓸수록 똑똑해지는 AI 에이전트(자가학습 메커니즘) - Hermes Agent로 반복 업무 자동화하기"의 raw snapshot 기반 source summary다. 글은 Hermes Agent 설치, `hermes setup`, config 구조, messaging gateway, 내장 tool, image generation 연결, cron, 병렬 subagent, skill system, memory manager, model provider 전환, ACP, 보안, 비용, Claude Code/Cursor/OpenClaw 비교를 실무자 관점에서 정리한다.

## 원문 주장

- Hermes Agent의 self-learning은 모델 weight 재학습이 아니라 markdown skill, persistent memory, profile, 반복 작업 기록을 통한 workflow adaptation에 가깝다고 설명한다.
- 복잡한 작업, tool call, 오류 수정, 사용자 correction 뒤에 agent가 `~/.hermes/skills/` 아래 markdown skill file을 만들 수 있다고 설명한다.
- Skill file이 markdown으로 남기 때문에 self-learning의 결과를 사람이 inspect하고 수정할 수 있다는 점을 장점으로 제시한다.
- Messaging gateway, 40개 이상 tool, cron scheduler, 병렬 subagent, provider/model 전환, ACP integration을 Hermes의 주요 구성요소로 설명한다.
- 보안 측면에서 credential 보호, command/tool 실행 경계, 미인증 RCE 이슈, MCP/action surface를 주의점으로 제시한다.
- 비용 측면에서 고정 context/token overhead, provider policy 변화, 한 달 사용 비용 추정이 중요하다고 설명한다.
- Claude Code와 Cursor가 IDE/coding workflow에 강한 반면 Hermes는 서버에 상주하는 persistent personal agent와 반복 자동화에 더 가깝다고 비교한다.

## 내 프로젝트에 주는 시사점

- [[Hermes Agent]]를 개인 AI 운영체제 후보로 볼 때 self-learning의 실제 단위를 skill과 memory로 분리해 평가해야 한다.
- [[BYOK]]와 연결해 provider key, model switching, token budget, subscription policy risk를 운영 체크리스트에 넣을 수 있다.
- [[MCP Remote SSE]]와 messaging gateway는 편리한 entrypoint이지만 외부에서 action surface가 열리는 구조이므로 sandbox와 allowlist가 선행되어야 한다.
- Claude Code/Cursor 비교는 Hermes를 IDE coding assistant가 아니라 persistent automation runtime으로 위치시키는 데 유용하다.

## 검증 필요 주장

- GitHub star, release cadence, tool 개수, issue 번호, 보안 취약점 상태는 캡처 당시 글의 주장일 뿐 현재 상태로 일반화하면 안 된다.
- Anthropic subscription token 정책, provider별 OAuth/API key 지원 범위, 비용 추정은 각 provider 공식 문서와 현재 정책으로 재확인해야 한다.
- `install.sh`, gateway, cron, browser control, MCP 노출은 실제 실행 전 sandbox에서 동작과 권한을 확인해야 한다.
