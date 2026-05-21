---
title: Content Marketing Team
type: tool
status: seed
created: 2026-05-21
updated: 2026-05-21
tags:
  - content-marketing
  - claude-code
  - agents
  - skills
  - automation
related:
  - "[[GitHub Content Marketing Team Repository]]"
  - "[[Claude Code]]"
  - "[[Agentic Workflow]]"
  - "[[Skills]]"
sensitivity: private
evidence_level: source-backed
---

# Content Marketing Team

## 무엇인가

Content Marketing Team은 GitHub 저장소 `uxjoseph/content-marketing-team`에 담긴 Claude Code 기반 콘텐츠 마케팅 자동화 template다. YouTube 영상이나 웹사이트 URL 하나를 입력하면 여러 플랫폼용 마케팅 산출물을 생성하는 것을 목표로 한다.

## 주요 구조

- planner: 원본 URL을 분석하고 공통 brief를 만든다.
- specialist writer agents: 뉴스레터, 블로그, 유튜브 대본, X 스레드, LinkedIn 포스트, 쇼츠 대본을 작성한다.
- media skills: 카드뉴스/썸네일 생성과 쇼츠 영상 제작을 담당한다.
- reviewer: 브랜드 톤, 원본 대비 사실성, 플랫폼별 스펙, 한국어 자연스러움을 검수한다.
- outputs: 생성물을 산출물 종류별 파일과 폴더로 저장한다.

## 좋은 사용 사례

- 하나의 긴 원본 콘텐츠를 여러 채널용 초안으로 재가공한다.
- 콘텐츠 제작 workflow에서 planner, writer, reviewer 역할을 분리해 실험한다.
- Claude Code subagent와 skill 조합을 실제 업무 domain에 매핑하는 구조 예시로 참고한다.

## 한계

- 저장소 README의 자동 생성 범위는 실제 실행 검증 없이 그대로 믿으면 안 된다.
- 외부 API, yt-dlp, whisper, ffmpeg 등 media pipeline 의존성이 있어 환경 설정 비용이 있다.
- 콘텐츠 마케팅 산출물은 원본의 사실성을 유지해야 하므로 reviewer와 source attribution이 중요하다.
- GitHub API snapshot 기준 license가 표시되지 않았으므로 재사용 전 라이선스를 확인해야 한다.

## 관련 자료

- [[GitHub Content Marketing Team Repository]]

## 관련 개념과 차이

- [[Claude Code]]: 이 template이 실행되는 agentic coding environment로 제시된다.
- [[Agentic Workflow]]: planner, 병렬 specialist, reviewer 구조를 보여주는 사례다.
- [[Skills]]: 이미지/영상처럼 절차와 도구 의존성이 있는 작업을 skill로 분리하는 예시다.

## 내 관점 / 임시 결론

이 저장소의 핵심 가치는 "콘텐츠 마케팅 자동화 도구" 자체보다 역할 분해 방식에 있다. 하나의 source를 먼저 brief로 정리하고, 산출물별 specialist가 병렬 작업하며, reviewer가 마지막 품질 gate를 맡는 구조는 LLM Wiki의 ingest, report, 발표자료 제작 workflow에도 응용 가능하다.

## 열린 질문

- 이 구조를 Codex skill 또는 plugin 형태로 이식할 때 agent와 skill의 경계를 어디에 둘 것인가?
- 콘텐츠 자동화에서 fact check를 reviewer prompt만으로 충분히 다룰 수 있는가?
- 원본 source provenance를 각 산출물에 자동으로 주입하는 규칙이 필요한가?
