---
title: Vibe Investing TimesFM Analysis Guide
source_id: vibe-investing-timesfm-analysis-guide-2026-06-22
type: source
status: ingested
created: 2026-06-22
updated: 2026-06-22
tags: [source, timesfm, time-series-forecasting, investment-research]
related:
  - "[[TimesFM]]"
  - "[[Google Research TimesFM Repository]]"
  - "[[TimesFM ICML 2024 Paper]]"
  - "[[Quant Trading]]"
  - "[[토스증권 API 투자 운영 시스템]]"
sensitivity: private
evidence_level: source-backed
original_path: raw/external/gameworkerkim-timesfm-analysis-guide-2026-06-22.md
date_added: 2026-06-22
captured_at: 2026-06-22T00:00:00+09:00
accessed_at: 2026-06-22T00:00:00+09:00
canonical_url: https://github.com/gameworkerkim/vibe-investing/blob/main/TechDoc/TimesFM/TimesFM_%EB%B6%84%EC%84%9D_%EA%B0%80%EC%9D%B4%EB%93%9C.md
content_hash: sha256:ec1044117b34521ed22bf57d99603b05c648fa14ddaa55e7215a78bf3b9e88b4
source_version: gameworkerkim/vibe-investing main branch TimesFM guide snapshot 2026-06-22
domain: [ai, finance, software, research]
content_type: documentation
knowledge_role: [source, tool, comparison, reference]
source_quality: practitioner
use_for: [concept, reference, inspiration]
related_pages:
  - "[[TimesFM]]"
  - "[[Google Research TimesFM Repository]]"
  - "[[TimesFM ICML 2024 Paper]]"
  - "[[Quant Trading]]"
  - "[[토스증권 API 투자 운영 시스템]]"
---

# Vibe Investing TimesFM Analysis Guide

## 출처와 분류

GitHub repository `gameworkerkim/vibe-investing`의 TimesFM 분석 가이드다. TimesFM 개요, 장단점, 경쟁 모델, 설치 예시와 투자·예측시장 활용 아이디어를 정리한 practitioner 자료다.

- domain: ai, finance, software, research
- content_type: documentation
- knowledge_role: source, tool, comparison, reference
- source_quality: practitioner
- use_for: concept, reference, inspiration

## 원문 주장

- TimesFM은 Google Research가 개발한 patch 기반 decoder-only 시계열 예측 foundation model이며 zero-shot forecasting을 목표로 한다.
- TimesFM 2.5는 200M parameters, 최대 16K context, 선택적 30M quantile head, 최대 1K horizon의 continuous quantile forecast를 지원한다고 설명한다.
- PyTorch·Flax, XReg covariate, LoRA fine-tuning, BigQuery ML·Google Sheets 연결을 장점으로 든다.
- 단변량 중심, 설명 가능성, 설치 의존성, 실시간 serving, domain별 성능 차이를 한계로 제시한다.
- 주가보다 거시경제 지표, 기업 매출, 수요, 변동성 예측에 더 적합할 수 있다고 해석하고 경쟁 모델 비교와 투자 활용 roadmap을 제안한다.

## 공식 자료로 확인된 내용

- [[Google Research TimesFM Repository]]는 TimesFM 2.5의 200M parameters, 최대 16K context, 최대 1K horizon continuous quantile forecast, optional 30M quantile head를 명시한다.
- 공식 repository는 PyTorch·Flax 설치, XReg, LoRA fine-tuning example, BigQuery ML·Google Sheets 연결을 안내한다.
- [[TimesFM ICML 2024 Paper]]는 patched-decoder attention model을 large time-series corpus로 pretrain하고 여러 public dataset에서 zero-shot 성능을 평가한 연구다.
- 공식 repository는 open version이 officially supported Google product가 아니라고 명시한다.

## 내 프로젝트에 주는 시사점

- [[토스증권 API 투자 운영 시스템]]에서는 매매 신호 생성기보다 read-only research candidate로 제한한다.
- 첫 검증은 baseline이 명확한 시계열에서 seasonal naive, statistical model과 zero-shot forecast를 비교한다.
- point forecast뿐 아니라 quantile calibration, regime별 error, transaction cost 반영 후 성능을 기록한다.
- 모델 출력은 주문 trigger가 아니라 research panel의 보조 신호로 두고 human review와 dry-run 경계를 유지한다.

## 검증 필요 주장

- 문서 말미는 `최종 업데이트: 2025년 6월`이라고 적지만 2025년 9월 TimesFM 2.5와 2026년 repository update 내용을 포함해 timestamp가 모순된다.
- 설치 예시는 현재 공식 API와 다르다. 문서는 구형 `TimesFm` API와 `google/timesfm-2.0-200m-pytorch`를 사용하지만 공식 README는 TimesFM 2.0을 500M으로 설명하고 2.5 예제에서 `TimesFM_2p5_200M_torch`와 `google/timesfm-2.5-200m-pytorch`를 사용한다.
- `GPT-4 수천억 parameters`와 그 1/1000이라는 비교는 공개된 공식 수치가 아니며 TimesFM 성능 판단에도 불필요하다.
- 투자 활용 별점, 경쟁 모델 순위, 전력 가격·강수량·단기 부하 성능 표는 benchmark와 dataset citation이 없어 비교 근거로 사용할 수 없다.
- 주가보다 거시경제·매출·수요에 더 적합하다는 결론과 LLM 뉴스 감성 분석 synergy는 실험 가설이다.
- quantile forecast를 event probability나 거래 우위로 변환하려면 calibration, threshold mapping, transaction cost 검증이 필요하다.
- `한국에서는 Polymarket, 예측시장은 불법`이라는 문장은 법률·관할·서비스별 조건을 단순화한다. 현재 법령과 규제기관 자료 확인 전에는 법적 사실로 재사용하지 않는다.
- BigQuery SQL 예제와 competitor 가격·기능은 현재 공식 문서로 별도 확인해야 한다.

## 후속 라우팅

- tool 추가: [[TimesFM]]
- concept 강화: [[Quant Trading]]
- idea 강화: [[토스증권 API 투자 운영 시스템]]
- comparison 후보: TimesFM vs Chronos-Bolt vs Moirai vs statistical baseline
- mvp 후보: 실제 주문과 분리된 거시경제 시계열 zero-shot forecast benchmark

## 원본 위치와 provenance

- raw snapshot: `raw/external/gameworkerkim-timesfm-analysis-guide-2026-06-22.md`
- canonical URL: https://github.com/gameworkerkim/vibe-investing/blob/main/TechDoc/TimesFM/TimesFM_%EB%B6%84%EC%84%9D_%EA%B0%80%EC%9D%B4%EB%93%9C.md
- content_hash: `sha256:ec1044117b34521ed22bf57d99603b05c648fa14ddaa55e7215a78bf3b9e88b4`

