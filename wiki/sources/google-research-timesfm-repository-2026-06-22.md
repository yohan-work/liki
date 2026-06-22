---
title: Google Research TimesFM Repository
source_id: google-research-timesfm-repository-2026-06-22
type: source
status: ingested
created: 2026-06-22
updated: 2026-06-22
tags: [source, timesfm, google-research, time-series-forecasting]
related:
  - "[[TimesFM]]"
  - "[[TimesFM ICML 2024 Paper]]"
  - "[[Vibe Investing TimesFM Analysis Guide]]"
sensitivity: private
evidence_level: source-backed
original_path: raw/external/google-research-timesfm-readme-2026-06-22.md
date_added: 2026-06-22
captured_at: 2026-06-22T00:00:00+09:00
accessed_at: 2026-06-22T00:00:00+09:00
canonical_url: https://github.com/google-research/timesfm
content_hash: sha256:736404cbe90f21640b7b19da99f24f126113c28b3a3ec21adfbc4211a96816ed
source_version: google-research/timesfm master README snapshot 2026-06-22
domain: [ai, software, research]
content_type: repo
knowledge_role: [source, tool, reference]
source_quality: official
use_for: [concept, reference, decision]
related_pages:
  - "[[TimesFM]]"
  - "[[TimesFM ICML 2024 Paper]]"
  - "[[Vibe Investing TimesFM Analysis Guide]]"
---

# Google Research TimesFM Repository

## 출처와 분류

Google Research의 공식 `google-research/timesfm` repository README snapshot이다.

- domain: ai, software, research
- content_type: repo
- knowledge_role: source, tool, reference
- source_quality: official
- use_for: concept, reference, decision

## 원문 요약

TimesFM은 시계열 예측용 pretrained foundation model이다. 공식 repository는 최신 model version을 TimesFM 2.5로 표시하고, open version은 officially supported Google product가 아니라고 밝힌다.

TimesFM 2.5는 200M parameters, 최대 16K context, optional 30M quantile head를 통한 최대 1K horizon continuous quantile forecast를 제공한다. PyTorch와 Flax package, XReg covariate support, Hugging Face Transformers·PEFT 기반 LoRA fine-tuning example을 제공한다.

## 핵심 주장

- TimesFM 2.5는 TimesFM 2.0의 500M에서 200M parameters로 축소되었다.
- context limit은 2,048에서 최대 16K로 확장되었다.
- optional quantile head를 사용해 point와 quantile forecast를 함께 생성할 수 있다.
- 1.0과 2.0 code는 `v1` 아래 archived model version으로 관리된다.
- 현재 예제는 `TimesFM_2p5_200M_torch`와 `google/timesfm-2.5-200m-pytorch` checkpoint를 사용한다.

## 검증 필요 주장

- README는 기능과 사용법의 공식 운영 자료지만 domain별 accuracy나 투자 성과를 보장하지 않는다.
- BigQuery ML, Google Sheets, Vertex Model Garden의 availability와 API는 각 제품 공식 문서에서 다시 확인해야 한다.
- release, package version, checkpoint와 code example은 변경될 수 있으므로 실제 PoC 시작 시 재확인한다.

## 원본 위치와 provenance

- raw snapshot: `raw/external/google-research-timesfm-readme-2026-06-22.md`
- canonical URL: https://github.com/google-research/timesfm
- content_hash: `sha256:736404cbe90f21640b7b19da99f24f126113c28b3a3ec21adfbc4211a96816ed`

## 관련 페이지

- [[TimesFM]]
- [[TimesFM ICML 2024 Paper]]
- [[Vibe Investing TimesFM Analysis Guide]]

