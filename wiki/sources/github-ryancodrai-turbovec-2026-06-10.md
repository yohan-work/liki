---
title: GitHub TurboVec Repository
source_id: github-ryancodrai-turbovec-2026-06-10
type: source
status: ingested
created: 2026-06-10
updated: 2026-06-10
tags:
  - source
  - github
  - vector-search
  - quantization
  - rag
  - rust
related:
  - "[[TurboVec]]"
  - "[[RAG]]"
  - "[[SQLite]]"
original_path: raw/external/github-ryancodrai-turbovec-2026-06-10/
date_added: 2026-06-10
captured_at: 2026-06-10
accessed_at: 2026-06-10
canonical_url: https://github.com/RyanCodrai/turbovec
content_hash: sha256:a096886fed9eaa8beecb67b0f3fe54040ee43bef096abdab252e28bf4a72a942
source_version: GitHub repository main branch README, metadata, tree captured 2026-06-10
domain:
  - ai
  - software
  - research
content_type: repo
knowledge_role:
  - source
  - tool
  - reference
source_quality: practitioner
use_for:
  - concept
  - reference
  - inspiration
  - decision
related_pages:
  - "[[TurboVec]]"
  - "[[RAG]]"
  - "[[SQLite]]"
sensitivity: private
evidence_level: source-backed
---

# GitHub TurboVec Repository

## 출처

GitHub repository `RyanCodrai/turbovec`.

## 자료 유형

Google Research의 TurboQuant 알고리즘을 구현한 Rust 기반 vector index와 Python binding repository다. 로컬·저메모리 RAG와 filtered dense retrieval을 주요 사용 사례로 제시한다.

## Domain / 분류

- domain: ai, software, research
- content_type: repo
- knowledge_role: source, tool, reference
- source_quality: practitioner
- use_for: concept, reference, inspiration, decision

## 추가일

2026-06-10

## 원본 위치

- raw directory: `raw/external/github-ryancodrai-turbovec-2026-06-10/`
- README: `README.md`
- repository metadata: `repo.json`
- recursive tree: `tree.json`
- root contents: `root-contents.json`

## Provenance

- captured_at: 2026-06-10
- accessed_at: 2026-06-10
- canonical_url: https://github.com/RyanCodrai/turbovec
- README hash: sha256:a096886fed9eaa8beecb67b0f3fe54040ee43bef096abdab252e28bf4a72a942
- repo metadata hash: sha256:3361aa44e118e3e5048e9b81d71a8b5fc2901ba0ae54484d2c366328f63306d5
- tree hash: sha256:c046b34be97c77a79b58b0f14c65ef8e5b5583ea707b49e4d1c03a5b147aa771
- source_version: main branch snapshot captured 2026-06-10

## Repository snapshot

- full_name: `RyanCodrai/turbovec`
- description: A vector index built on TurboQuant, written in Rust with Python bindings
- default_branch: `main`
- created_at: 2026-03-26T10:32:44Z
- pushed_at: 2026-06-09T21:05:07Z
- primary language: Python
- core implementation: Rust
- license: MIT
- stars/forks/open issues at capture: 10206 / 872 / 6
- packages: PyPI, crates.io

## 원문 요약

TurboVec은 embedding vector를 float32 그대로 저장하지 않고 2-bit 또는 4-bit scalar quantization으로 압축해 메모리 사용량을 줄이는 vector index다. README는 1536차원 vector를 FP32 6,144 byte에서 2-bit 384 byte로 줄이는 16배 압축 예시와 1천만 문서 corpus를 약 31GB 대신 4GB에 저장한다는 예시를 제시한다.

설계의 핵심은 random rotation 후 좌표 분포를 예측 가능하게 만들고, Lloyd-Max codebook으로 coordinate를 양자화하는 것이다. 첫 add 시 coordinate별 shift와 scale을 보정하는 TQ+ calibration을 수행한 뒤 고정하며, 별도 전체 corpus train이나 rebuild 없이 vector를 추가할 수 있다고 설명한다.

검색은 compressed code를 직접 SIMD kernel로 scoring한다. ARM NEON, x86 AVX-512BW, AVX2 fallback을 제공한다. `IdMapIndex`는 외부 stable id와 삭제를 지원하며, allowlist 또는 slot bitmask를 search kernel에 전달해 SQL, BM25, ACL, time window 등에서 만든 candidate set 내부에서 dense rerank할 수 있다.

LangChain, LlamaIndex, Haystack, Agno integration과 persistence API를 제공한다. repository에는 Rust/Python test, framework integration test, benchmark script와 JSON result가 포함되어 있다.

## 핵심 주장

- TurboQuant 기반 data-oblivious quantization은 별도 codebook training 없이 online ingest를 지원한다.
- 2-bit와 4-bit quantization으로 embedding index memory를 크게 줄일 수 있다.
- allowlist filtering을 SIMD scoring 안에서 수행해 selective filter의 불필요한 scoring을 줄인다.
- Rust core와 Python binding으로 local 또는 air-gapped RAG stack에 사용할 수 있다.
- README benchmark에서는 특정 ARM/x86 환경에서 FAISS PQ/FastScan과 비슷하거나 더 빠른 결과를 주장한다.

## 위키에 반영할 개념

- [[TurboVec]]
- [[RAG]]
- vector quantization
- local vector index
- hybrid retrieval
- filtered dense retrieval

## 내 프로젝트에 주는 시사점

- LLM Wiki가 embedding retrieval을 도입할 단계가 오면 managed vector DB 전에 local index 후보를 평가할 수 있다.
- metadata와 접근 제어는 vector index에 모두 맡기기보다 SQLite/SQL/FTS/BM25에서 candidate를 만든 뒤 TurboVec allowlist로 dense rerank하는 구조가 단순할 수 있다.
- 문서 수가 작은 현재 위키에는 `rg`와 SQLite FTS5가 더 단순하다. vector index 도입은 실제 semantic retrieval failure와 memory·latency 목표가 있을 때 판단해야 한다.

## 후속 라우팅

- tool 추가: [[TurboVec]]
- concept 강화: [[RAG]]
- tool 연결: [[SQLite]]
- comparison 후보: TurboVec vs FAISS vs SQLite FTS5
- question 후보: LLM Wiki에 local vector index가 필요한 규모와 실패 신호는 무엇인가?
- idea 후보: FTS5 candidate generation + TurboVec reranking local hybrid retrieval
- mvp 후보: wiki 100개 문서에서 keyword search와 dense retrieval 비교
- 보류: 설치와 benchmark 실행

## 검증 필요 주장

- 성능, recall, 압축률, 10M corpus memory 수치는 repository README와 자체 benchmark 결과다. 동일 hardware, dataset, dimension, bit width, k, thread 조건에서 재현해야 한다.
- 비교 대상은 FAISS 전체가 아니라 특정 `IndexPQ`와 FastScan 설정이다. HNSW, IVF, scalar quantization, managed vector DB와의 비교는 별도다.
- TQ+가 첫 add batch에서 calibration을 고정하므로 초기 sample이 corpus 분포를 대표하지 않을 때의 영향은 검증이 필요하다.
- 낮은 차원, domain shift, delete/update가 많은 workload, highly selective filter에서 recall과 latency가 어떻게 변하는지 확인해야 한다.
- 10206 stars와 package version, API, integrations는 캡처 시점 정보이며 변경될 수 있다.
- 원 논문과 RaBitQ, FAISS 자료는 이번 ingest에서 별도 source summary로 확인하지 않았다.

## 관련 페이지

- [[TurboVec]]
- [[RAG]]
- [[SQLite]]

## 열린 질문

- LLM Wiki 규모에서 embedding index가 실제로 keyword/FTS 검색보다 나은 query 유형은 무엇인가?
- 첫 calibration batch를 어떤 sampling 방식으로 구성해야 corpus growth에도 recall을 유지할 수 있는가?
- SQL ACL과 metadata filter를 candidate allowlist로 연결할 때 index와 metadata store의 id consistency를 어떻게 보장할 것인가?
- quantized retrieval의 recall 손실을 최종 RAG answer quality로 어떻게 평가할 것인가?

## 메모

이번 ingest에서는 repository를 설치하거나 benchmark를 실행하지 않았다. 실제 도입 전 paper, package release, benchmark scripts, persistence format과 CPU requirement를 별도로 검토해야 한다.
