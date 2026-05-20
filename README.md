# LLM Wiki

LLM Wiki는 AI-native work, agentic workflow, Codex, Claude Code, RAG, LLM wiki practices, AX workflow, Basalt Project 및 관련 개인 프로젝트를 장기적으로 정리하기 위한 개인 Markdown 지식 베이스입니다.

## 역할

- Obsidian은 읽기와 탐색을 위한 인터페이스입니다.
- Codex는 위키를 정리하고 유지보수하는 엔진입니다.
- Markdown 파일이 실제 데이터입니다.
- Git은 변경 이력을 남기고 검토 가능하게 만듭니다.
- `raw/`는 원문 자료를 보존하며 수정하지 않습니다.
- `wiki/`는 요약, 연결, 갱신된 지식 계층입니다.

## 언어 정책

- `raw/`는 가능한 한 원문 언어 그대로 보존합니다.
- `wiki/` 본문, 섹션 제목, 요약, 로그, 리포트는 기본적으로 한국어로 작성합니다.
- 기술 용어, 제품명, 중요한 원문 표현은 필요할 때 영어를 괄호로 병기할 수 있습니다.
- 영어 원문을 다루더라도 설명과 종합은 한국어로 작성합니다.

## 구조

- `raw/`: 수정하지 않는 원문 자료.
- `inbox/`: ingest 전 임시 수집함.
- `wiki/`: 유지보수되는 위키 페이지.
- `daily/`: 일일 메모 또는 작업 메모.
- `templates/`: 재사용 가능한 페이지 템플릿.
- `scripts/`: 향후 자동화용 스크립트.

## 예시 명령

아래는 아직 완성된 스크립트가 아니라 Codex에게 줄 수 있는 프롬프트 예시입니다.

```text
raw/articles/example.md를 LLM Wiki에 ingest해줘. source summary를 한국어로 만들고, 관련 concept 페이지와 wiki/index.md, wiki/log.md를 업데이트해줘.
```

```text
LLM Wiki를 참고해서 이 질문에 한국어로 답해줘. 반복 참조 가치가 있을 때만 wiki/questions/에 저장해줘: RAG와 agentic retrieval은 어떻게 비교해야 하나?
```

```text
wiki lint를 실행해줘. 고립 페이지, 중복 개념, 누락 링크, 오래된 주장, 모순, 새 페이지 후보를 점검하고 wiki/reports/lint-YYYY-MM-DD.md에 한국어로 저장해줘. 기존 리포트는 덮어쓰지 마라.
```

## Obsidian 연동

프로젝트 위치:

```text
/Users/yohan.choi/Documents/projects/liki
```

Obsidian Vault 내부 symlink:

```text
/Users/yohan.choi/Documents/Obsidian Vault/LLM Wiki
-> /Users/yohan.choi/Documents/projects/liki
```

symlink를 만들기 전에는 Vault 내부 대상 경로가 파일, 폴더, symlink 중 어떤 형태로도 존재하지 않는지 확인해야 합니다.

## 현재 상태

이 저장소는 seed wiki로 시작합니다. 초기 페이지는 raw 자료로 검증되기 전까지 의도적으로 unsourced 상태로 표시합니다.
