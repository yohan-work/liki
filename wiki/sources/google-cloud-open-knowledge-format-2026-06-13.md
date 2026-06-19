---
title: Google Cloud Open Knowledge Format Article
type: source
status: ingested
created: 2026-06-19
updated: 2026-06-19
tags:
  - source
  - google-cloud
  - open-knowledge-format
  - llm-wiki
  - data-sharing
related:
  - "[[Open Knowledge Format]]"
  - "[[LLM Wiki]]"
  - "[[Agentic Workflow]]"
  - "[[RAG]]"
  - "[[기업 AI 운영 레이어]]"
sensitivity: private
evidence_level: source-backed
source_id: google-cloud-open-knowledge-format-2026-06-13
original_path: raw/external/google-cloud-open-knowledge-format-2026-06-13/index.html
date_added: 2026-06-19
captured_at: 2026-06-19
accessed_at: 2026-06-19
canonical_url: https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing?hl=en
content_hash: sha256:75d76119e5011f4c4d18a02bd642ffa3f1e8d1930520d255097a2c684120dd8d
source_version: google_cloud_blog_okf_html_snapshot_2026-06-19
domain:
  - ai
  - software
  - business
content_type: article
knowledge_role:
  - source
  - concept
  - reference
source_quality: official
use_for:
  - concept
  - reference
  - decision
related_pages:
  - "[[Open Knowledge Format]]"
  - "[[LLM Wiki]]"
  - "[[Agentic Workflow]]"
  - "[[RAG]]"
  - "[[기업 AI 운영 레이어]]"
---

# Google Cloud Open Knowledge Format Article

## 자료 요약

Google Cloud Data Analytics 블로그의 2026-06-13 글 "Introducing the Open Knowledge Format"이다. 글은 foundation model과 agentic system이 정확하고 실행 가능한 결과를 내려면 조직 내부의 맥락, 메타데이터, runbook, metric 정의, join path 같은 지식이 필요하지만, 현재 그 지식이 catalog, wiki, drive, code comment, 사람의 머릿속에 흩어져 있다고 진단한다.

Google Cloud는 이 문제의 해법으로 [[Open Knowledge Format]] v0.1을 소개한다. OKF는 LLM-wiki pattern을 Markdown file, YAML frontmatter, normal markdown link, optional `index.md`와 `log.md` convention으로 공식화한 portable, interoperable format이라고 설명된다.

## 원문 주장

- Foundation model이 개선되어도 agentic system은 관련 context 부족 때문에 한계를 겪는다.
- OKF는 LLM-wiki pattern을 portable, interoperable format으로 formalize하는 open specification이다.
- OKF v0.1은 knowledge를 YAML frontmatter가 붙은 Markdown file directory로 표현한다.
- 핵심 frontmatter field는 `type`, `title`, `description`, `resource`, `tags`, `timestamp`다.
- OKF bundle은 editor, GitHub, search tool, git repository, filesystem에서 다룰 수 있는 plain Markdown/file/YAML 구조를 지향한다.
- Concept document는 table, dataset, metric, playbook, runbook, API 등 조직 지식을 한 파일로 표현할 수 있다.
- Markdown link는 파일 시스템의 parent-child 구조보다 풍부한 graph relationship을 만든다.
- Optional `index.md`는 agent의 progressive disclosure에, `log.md`는 변경 이력에 쓸 수 있다고 설명한다.
- Google Cloud는 BigQuery dataset을 OKF concept document로 만드는 enrichment agent, static HTML visualizer, sample bundle을 함께 공개했다고 설명한다.
- 글은 Google Cloud Knowledge Catalog가 OKF를 ingest해 agent에게 제공할 수 있도록 업데이트되었다고 주장한다.

## 내 프로젝트에 주는 시사점

- 현재 LLM Wiki의 Markdown, frontmatter, index, log, Obsidian link, raw/source summary 구조는 OKF가 말하는 "knowledge as files" 방향과 강하게 겹친다.
- 다만 이 위키는 OKF v0.1보다 훨씬 더 개인 운영체계와 source provenance에 맞춘 field를 사용한다. OKF compatibility를 고려한다면 export layer나 minimal frontmatter mapping을 따로 두는 편이 안전하다.
- Agent가 지식을 읽는 방식에서는 전체 wiki dump보다 `index.md`, `log.md`, type field, related link를 통한 progressive disclosure가 중요하다.
- 기업 데이터 환경에서는 table schema나 metric definition뿐 아니라 runbook, API deprecation, incident playbook까지 agent-readable knowledge bundle로 관리할 수 있다.

## 검증 필요 주장

- OKF v0.1 spec의 실제 conformance criteria, reserved filename, cross-linking rule은 GitHub repository와 spec 원문을 별도 ingest해야 한다.
- BigQuery enrichment agent, static visualizer, sample bundle의 품질과 재현성은 repository code와 sample output을 확인해야 한다.
- Google Cloud Knowledge Catalog의 OKF ingest 기능은 제품 문서, availability, pricing, data boundary를 확인하기 전까지 도입 가능성으로만 본다.
- Karpathy LLM Wiki gist와 OKF의 관계는 Google Cloud의 해석이므로 원 gist와 spec에서 직접 비교해야 한다.

## 메타데이터

- 발행일: 2026-06-13
- 수집일: 2026-06-19
- 원문: https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing?hl=en
- raw snapshot: `raw/external/google-cloud-open-knowledge-format-2026-06-13/index.html`
- content_hash: `sha256:75d76119e5011f4c4d18a02bd642ffa3f1e8d1930520d255097a2c684120dd8d`
