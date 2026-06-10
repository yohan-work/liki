---
title: TurboVec
type: tool
status: seed
created: 2026-06-10
updated: 2026-06-10
tags:
  - vector-search
  - quantization
  - rag
  - rust
  - local-first
related:
  - "[[GitHub TurboVec Repository]]"
  - "[[RAG]]"
  - "[[SQLite]]"
sensitivity: private
evidence_level: source-backed
---

# TurboVec

## 무엇인가

TurboVec은 TurboQuant 기반 2-bit·4-bit vector quantization을 사용하는 Rust vector index다. Python binding, persistence, stable external id, delete, allowlist filtering과 여러 RAG framework integration을 제공한다.

## 사용 사례

- memory 제약이 있는 local RAG vector search.
- data가 외부 managed service로 나가면 안 되는 air-gapped 환경.
- vector를 지속해서 추가하고 전체 retraining이나 index rebuild를 피하려는 workload.
- SQL, BM25, ACL, time window로 candidate를 좁힌 뒤 dense rerank하는 hybrid retrieval.
- LangChain, LlamaIndex, Haystack, Agno의 in-memory store 대체 후보.

## 강점

- quantized code로 embedding memory footprint를 줄인다.
- 별도 corpus training 단계 없이 online add를 지원한다고 설명한다.
- ARM NEON과 x86 AVX-512BW, AVX2 fallback을 제공한다.
- allowlist를 search kernel 내부에서 처리해 selective filtering을 지원한다.
- Rust와 Python API, file persistence, framework integration, benchmark 결과와 test suite를 함께 제공한다.

## 한계

- README benchmark는 특정 FAISS PQ/FastScan 설정과 hardware에 대한 자체 측정이다.
- quantization은 exact float search 대비 recall 손실 가능성이 있다.
- first-add calibration이 이후 corpus 분포를 대표하는지 확인해야 한다.
- CPU instruction requirement, persistence compatibility, update/delete pattern을 실제 환경에서 검증해야 한다.
- 작은 wiki에는 vector index 운영 복잡도가 keyword search나 SQLite FTS5보다 클 수 있다.

## 관련 워크플로

- SQLite나 다른 metadata store가 tenant, ACL, tag, date 조건으로 id allowlist를 만든다.
- TurboVec이 허용된 candidate 내부에서 semantic score로 rerank한다.
- retrieval evaluation은 latency와 memory뿐 아니라 recall, source diversity, final answer grounding을 함께 측정한다.

## 관련 개념

- [[RAG]]: semantic retrieval 단계의 local vector index 후보다.
- [[SQLite]]: metadata, ACL, keyword search와 candidate generation을 맡는 보완 도구가 될 수 있다.
- [[HyDE]]: query transformation 결과를 embedding해 TurboVec에서 검색할 수 있지만 hypothetical document는 근거가 아니다.

## 메모

현재는 repository review 기준 seed page다. LLM Wiki에 적용하기 전에 keyword/FTS baseline이 실패하는 실제 query set과 최소 100개 이상의 evaluation query를 먼저 준비해야 한다.
