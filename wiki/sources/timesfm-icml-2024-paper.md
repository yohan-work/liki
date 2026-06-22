---
title: TimesFM ICML 2024 Paper
source_id: timesfm-icml-2024-paper
type: source
status: ingested
created: 2026-06-22
updated: 2026-06-22
tags: [source, timesfm, time-series-forecasting, icml-2024]
related:
  - "[[TimesFM]]"
  - "[[Google Research TimesFM Repository]]"
  - "[[Vibe Investing TimesFM Analysis Guide]]"
sensitivity: private
evidence_level: source-backed
original_path: raw/external/arxiv-2310.10688-timesfm-2026-06-22.xml
date_added: 2026-06-22
published_at: 2023-10-14
captured_at: 2026-06-22T00:00:00+09:00
accessed_at: 2026-06-22T00:00:00+09:00
canonical_url: https://arxiv.org/abs/2310.10688
content_hash: sha256:c8cdd6df75bef0a5ee78ae74ce2ef899052ff8be5b1786cb45694e15238455dc
source_version: arXiv 2310.10688v4 metadata and abstract snapshot 2026-06-22
domain: [ai, research]
content_type: paper
knowledge_role: [source, concept, reference]
source_quality: academic
use_for: [concept, reference]
related_pages:
  - "[[TimesFM]]"
  - "[[Google Research TimesFM Repository]]"
  - "[[Vibe Investing TimesFM Analysis Guide]]"
---

# TimesFM ICML 2024 Paper

## 출처

Abhimanyu Das, Weihao Kong, Rajat Sen, Yichen Zhou의 논문 "A decoder-only foundation model for time-series forecasting"이다. arXiv v4는 2024-04-17 갱신되었고 공식 repository는 ICML 2024 논문으로 연결한다.

## 원문 요약

논문은 large time-series corpus로 pretrained한 patched-decoder style attention model을 제안한다. 모델은 서로 다른 history length, prediction length, temporal granularity를 다루며, 여러 public dataset에서 별도 supervised training 없이 사용하는 zero-shot 성능이 dataset별 state-of-the-art supervised forecasting model의 정확도에 근접한다고 보고한다.

## 핵심 주장

- LLM 발전에서 영감을 받아 time-series forecasting용 foundation model을 설계했다.
- patch 단위 decoder attention architecture와 대규모 시계열 pretraining을 사용한다.
- 여러 public dataset에서 out-of-the-box zero-shot forecasting을 평가했다.
- 논문의 표현은 supervised state of the art에 항상 우월하다는 것이 아니라 정확도에 근접한다는 수준이다.

## 적용 경계

- 이 논문은 original TimesFM 연구 근거이며 TimesFM 2.5의 모든 기능과 성능을 직접 검증하는 자료는 아니다.
- abstract만으로 dataset별 benchmark, leakage control, probabilistic calibration, 금융 시계열 성능을 판단하지 않는다.
- 투자 활용 전에는 논문 본문, evaluation protocol, 대상 금융 dataset의 out-of-sample test가 필요하다.

## 원본 위치와 provenance

- raw metadata and abstract: `raw/external/arxiv-2310.10688-timesfm-2026-06-22.xml`
- canonical URL: https://arxiv.org/abs/2310.10688
- arXiv version: `2310.10688v4`
- content_hash: `sha256:c8cdd6df75bef0a5ee78ae74ce2ef899052ff8be5b1786cb45694e15238455dc`

## 관련 페이지

- [[TimesFM]]
- [[Google Research TimesFM Repository]]
- [[Vibe Investing TimesFM Analysis Guide]]

