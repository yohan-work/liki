---
title: GitHub Content Marketing Team Repository
source_id: github-content-marketing-team-2026-05-21
type: source
status: ingested
created: 2026-05-21
updated: 2026-05-21
tags:
  - source
  - github
  - claude-code
  - content-marketing
  - agents
  - skills
related:
  - "[[Content Marketing Team]]"
  - "[[Claude Code]]"
  - "[[Agentic Workflow]]"
  - "[[Skills]]"
domain:
  - ai
  - software
  - business
  - writing
content_type: repo
knowledge_role:
  - source
  - tool
  - project
  - reference
source_quality: practitioner
use_for:
  - reference
  - inspiration
  - decision
  - writing
related_pages:
  - "[[Content Marketing Team]]"
  - "[[Claude Code]]"
  - "[[Agentic Workflow]]"
  - "[[Skills]]"
sensitivity: private
evidence_level: source-backed
original_path: raw/external/2026-05-21-github-content-marketing-team-readme.md
source_url: "https://github.com/uxjoseph/content-marketing-team"
date_added: 2026-05-21
captured_at: 2026-05-21
accessed_at: 2026-05-21
canonical_url: "https://github.com/uxjoseph/content-marketing-team"
content_hash: 518079f8390e0d786f8478b16c9136de8a43ae3d3f2d0b917ba3199d7aea2d82
source_version: "GitHub default branch main, README/prompt/repo metadata/tree captured on 2026-05-21"
---

# GitHub Content Marketing Team Repository

## 출처

- 저장소: uxjoseph/content-marketing-team
- 플랫폼: GitHub
- URL: https://github.com/uxjoseph/content-marketing-team
- 기본 브랜치: main
- GitHub API 기준 생성일: 2026-01-06
- GitHub API 기준 최근 저장소 업데이트: 2026-05-17
- GitHub API 기준 마지막 push: 2026-01-06
- GitHub API 기준 language: Python
- GitHub API 기준 stars/forks: 98 / 67
- GitHub API 기준 표시 라이선스: 없음

## 자료 유형

Claude Code subagent와 skill 구조를 사용해 콘텐츠 마케팅 산출물을 생성하는 GitHub repository / template.

## Domain / 분류

- domain: ai, software, business, writing
- content_type: repo
- knowledge_role: source, tool, project, reference
- source_quality: practitioner
- use_for: reference, inspiration, decision, writing

## 추가일

2026-05-21

## 원본 위치

raw/external/2026-05-21-github-content-marketing-team-readme.md

추가 raw snapshot:

- raw/external/2026-05-21-github-content-marketing-team-prompt.md
- raw/external/2026-05-21-github-content-marketing-team-repo.json
- raw/external/2026-05-21-github-content-marketing-team-tree.json

## Provenance

- captured_at: 2026-05-21
- accessed_at: 2026-05-21
- canonical_url: https://github.com/uxjoseph/content-marketing-team
- content_hash: 518079f8390e0d786f8478b16c9136de8a43ae3d3f2d0b917ba3199d7aea2d82
- companion_hashes:
  - prompt.md: 2c04c0d1273fc9d665605abd56865116a0fe4a677516514b44946408e98d97df
  - repo.json: 49aafcf2635d78b582910f9a90365a25f143c10f36d4f5dd6b622e9cfabaea6a
  - tree.json: 31419f1be1e184a0a411a7b5704608d9cfdbd78f772075e90454220a5d245a0b
- source_version: GitHub default branch main, README/prompt/repo metadata/tree captured on 2026-05-21

## 원문 요약

이 저장소는 YouTube 영상 URL 또는 웹사이트 URL 하나를 입력하면 여러 플랫폼용 마케팅 콘텐츠를 자동 생성하는 Claude Code 기반 시스템을 제안한다. README는 뉴스레터, 블로그 글, 유튜브 대본, X 스레드, LinkedIn 포스트, 쇼츠 대본, 카드뉴스, 썸네일, 쇼츠 영상까지 생성한다고 설명한다.

구조는 `.claude/agents/`와 `.claude/skills/`를 중심으로 구성된다. agents에는 planner, reviewer, newsletter writer, blog writer, shorts scriptwriter, thread writer, linkedin writer, youtube scriptwriter가 있고, skills에는 카드뉴스/썸네일 생성을 위한 `nanobanana-visual`과 쇼츠 제작을 위한 `shorts-video-maker`가 있다. `prompt.md`는 이 구조를 만들기 위한 상세 설계 프롬프트로, URL 분석, 브리프 작성, 병렬 실행, 검수, outputs 저장 흐름을 제시한다.

## 핵심 주장

- 하나의 원본 콘텐츠를 여러 플랫폼용 산출물로 변환하는 반복 작업은 agent와 skill 조합으로 자동화할 수 있다.
- planner가 원본을 분석해 공통 brief를 만들고, 여러 writer agent가 플랫폼별 산출물을 병렬로 생성한 뒤 reviewer가 품질을 검수하는 구조를 취한다.
- 텍스트 작성 작업은 subagent로, 이미지와 영상 생성처럼 절차와 도구 의존성이 큰 작업은 skill로 분리한다.
- 결과물은 `outputs/` 폴더에 파일 단위로 저장되며, 산출물 종류별 하위 폴더를 둔다.
- README는 사용자가 Claude Code에서 폴더를 열고 URL을 입력하면 작업이 자동 진행된다고 설명한다.

## 위키에 반영할 개념

- [[Content Marketing Team]]
- [[Claude Code]]
- [[Agentic Workflow]]
- [[Skills]]
- Multi-platform content repurposing
- Planner / reviewer agent pattern
- Brief-driven content generation
- Skill-based media pipeline

## 내 프로젝트에 주는 시사점

- [[Agentic Workflow]]에서 planner, 병렬 specialist, reviewer로 이어지는 구조를 콘텐츠 제작 도메인에 적용한 예시로 볼 수 있다.
- [[Skills]]는 단순 프롬프트 묶음이 아니라 외부 도구, reference, template, script를 묶어 재사용 가능한 작업 단위로 만드는 방식에 가깝다.
- LLM Wiki나 Basalt류 프로젝트에서도 "공통 brief 생성 후 산출물별 specialist가 병렬 작업하고 reviewer가 검수"하는 패턴을 보고서, 발표자료, SNS 요약에 응용할 수 있다.
- README의 강한 자동화 주장과 실제 repository 구현 수준은 구분해서 봐야 한다. 기능 주장보다 구조 패턴을 우선 참고한다.

## 검증 필요 주장

- 실제로 YouTube 자막 추출, 웹 본문 추출, 이미지 생성, 쇼츠 편집이 end-to-end로 동작하는지는 로컬 실행 검증이 필요하다.
- README가 말하는 "10가지 콘텐츠 자동 생성" 범위와 품질은 실제 agent prompt, skill script, 외부 API 설정에 따라 달라질 수 있다.
- `nanobanana` API, yt-dlp, ffmpeg, whisper 등 외부 의존성의 설치와 라이선스, 비용, rate limit은 별도 확인이 필요하다.
- GitHub API snapshot 기준 license가 없으므로 재사용 전 라이선스 상태를 확인해야 한다.

## 관련 페이지

- [[Content Marketing Team]]
- [[Claude Code]]
- [[Agentic Workflow]]
- [[Skills]]

## 열린 질문

- 이 저장소의 planner/reviewer 구조를 LLM Wiki ingest 자동화나 report generation에 적용할 수 있는가?
- 콘텐츠 생산 자동화에서 fact check와 source attribution을 reviewer만으로 충분히 보장할 수 있는가?
- media generation skill은 Codex/Claude Code 양쪽에서 호환 가능한 구조로 추상화할 수 있는가?

## 메모

이 자료는 실행 검증된 제품 문서라기보다 Claude Code agent/skill 기반 마케팅 자동화 template로 다룬다. 실제 도입 판단에는 설치, 외부 API, 라이선스, 출력 품질 검증이 필요하다.
