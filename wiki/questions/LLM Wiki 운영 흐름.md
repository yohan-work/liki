---
title: LLM Wiki 운영 흐름
type: question
status: active
created: 2026-05-20
updated: 2026-05-20
tags:
  - llm-wiki
  - workflow
  - codex
related:
  - "[[LLM Wiki]]"
  - "[[Codex]]"
  - "[[Obsidian]]"
sensitivity: private
evidence_level: unsourced
---

# LLM Wiki 운영 흐름

## 질문

URL이나 자료를 LLM Wiki에 넣은 뒤 실제로 어떤 순서로 운영해야 하는가?

## 짧은 답변

URL이나 자료를 Codex에게 ingest 요청하면 `liki` 저장소의 `raw/`와 `wiki/`에 Markdown 파일이 생성 또는 수정되고, Obsidian은 symlink를 통해 같은 파일을 `LLM Wiki` 폴더에서 보여준다. 이후 Obsidian에서 내용을 확인하고, Git으로 diff를 검토한 뒤 commit/push하면 된다.

## 자세한 답변

기본 흐름은 다음과 같다.

1. Codex에게 URL 또는 raw file ingest를 요청한다.
2. Codex는 원문을 `raw/`에 보존하고, `wiki/sources/`에 source summary를 만든다.
3. 관련 concept, project, tool, comparison, question page를 생성하거나 갱신한다.
4. `wiki/index.md`와 `wiki/log.md`를 업데이트한다.
5. Obsidian에서 `LLM Wiki/wiki/index.md`를 열어 새 링크와 요약을 확인한다.
6. 터미널에서 `git diff`로 변경 내용을 검토한다.
7. 문제가 없으면 commit하고, 필요하면 GitHub에 push한다.

Obsidian의 `LLM Wiki` 폴더는 실제 복사본이 아니라 `/Users/yohan.choi/Documents/projects/liki`를 가리키는 symlink다. 따라서 Codex가 `liki` 저장소에 파일을 만들면 Obsidian에서도 같은 내용이 보인다.

## 관련 페이지

- [[LLM Wiki]]
- [[Codex]]
- [[Obsidian]]

## 사용한 자료

- 현재 프로젝트 구조와 운영 규칙.

## 재사용 가능성

- 다시 참조할 가능성: 높음.
- 재사용 상황: 새 URL ingest, Obsidian 확인, Git commit/push 흐름 설명.
- 저장하지 않을 이유: 없음. 운영 기준으로 반복 참조할 가치가 있다.

## 관련 결정/글쓰기/발표 활용처

- LLM Wiki 사용법 설명.
- Codex와 Obsidian의 역할 분리 설명.
- 개인 지식 베이스 운영 프로세스 문서화.

## 후속 질문

- ingest 후 어떤 기준으로 commit 단위를 나눌 것인가?
- GitHub remote를 private repository로 운영할 것인가?
- source-backed 답변과 unsourced 운영 메모를 어떻게 더 명확히 구분할 것인가?

## 저장 이유

LLM Wiki를 실제로 사용하는 기본 절차를 설명하는 반복 참조용 답변이므로 `wiki/questions/`에 저장한다.
