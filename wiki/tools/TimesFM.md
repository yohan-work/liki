---
title: TimesFM
type: tool
status: seed
created: 2026-06-22
updated: 2026-06-22
tags: [time-series-forecasting, foundation-model, zero-shot-forecasting, google-research]
related:
  - "[[Google Research TimesFM Repository]]"
  - "[[TimesFM ICML 2024 Paper]]"
  - "[[Vibe Investing TimesFM Analysis Guide]]"
  - "[[Quant Trading]]"
  - "[[토스증권 API 투자 운영 시스템]]"
sensitivity: private
evidence_level: source-backed
---

# TimesFM

## 한 줄 정의

TimesFM은 Google Research가 개발한 시계열 예측용 pretrained foundation model로, 새로운 시계열에 별도 학습 없이 zero-shot forecast를 생성하는 것을 목표로 한다.

## 작동 방식

[[TimesFM ICML 2024 Paper]]는 TimesFM을 large time-series corpus로 pretrain한 patched-decoder style attention model로 설명한다. 서로 다른 history length, prediction length, temporal granularity를 처리하고 public dataset에서 zero-shot forecasting을 평가한다.

2026-06-22 기준 [[Google Research TimesFM Repository]]는 TimesFM 2.5를 최신 model version으로 표시한다. 2.5는 200M parameters, 최대 16K context, optional 30M quantile head를 통한 최대 1K horizon continuous quantile forecast를 제공한다.

## 핵심 기능

- 별도 domain training 없이 시작하는 zero-shot time-series forecasting.
- point forecast와 optional quantile forecast.
- PyTorch와 Flax backend.
- XReg를 통한 covariate support.
- Hugging Face Transformers와 PEFT를 이용한 LoRA fine-tuning example.
- BigQuery ML, Google Sheets 등 Google product 연결 경로.

## 좋은 사용 사례

- statistical baseline과 함께 빠르게 forecasting baseline을 만든다.
- 여러 종류와 frequency의 시계열에서 zero-shot transfer 가능성을 확인한다.
- point estimate뿐 아니라 quantile calibration을 평가한다.
- demand, sales, macro indicator처럼 target과 horizon이 명확한 시계열 PoC를 만든다.

## 투자 적용 경계

- 시장 가격은 non-stationarity, regime change, transaction cost와 외생 사건의 영향을 받으므로 일반 benchmark 성능을 trading alpha로 해석하지 않는다.
- 가격 forecast 하나를 주문 signal로 사용하지 않는다. baseline, walk-forward validation, calibration, turnover, cost, drawdown을 함께 평가한다.
- [[토스증권 API 투자 운영 시스템]]에서는 read-only research signal로만 시작하고 실제 주문과 분리한다.
- 주가 방향보다 거시경제·매출·수요 예측이 더 적합하다는 판단도 dataset별 검증 전에는 가설이다.

## 실패 패턴

- in-sample fit이나 한 구간의 좋은 chart를 일반 성능으로 해석한다.
- seasonal naive, linear/statistical baseline 없이 foundation model만 평가한다.
- quantile output을 calibration 확인 없이 확률로 사용한다.
- 과거 checkpoint용 code와 현재 TimesFM 2.5 API를 섞는다.
- competitor 비교표의 별점이나 순위를 원 benchmark 없이 선택 기준으로 쓴다.

## 관련 자료

- [[Google Research TimesFM Repository]]
- [[TimesFM ICML 2024 Paper]]
- [[Vibe Investing TimesFM Analysis Guide]]

## 열린 질문

- 개인 투자 research에서 예측 target은 가격, 수익률, 변동성, 거래량, 거시경제 지표 중 무엇이어야 하는가?
- TimesFM zero-shot이 seasonal naive와 단순 autoregressive baseline을 walk-forward test에서 일관되게 이기는가?
- quantile forecast의 coverage와 calibration이 regime별로 유지되는가?

