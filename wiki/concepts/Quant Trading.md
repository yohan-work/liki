---
title: Quant Trading
type: concept
status: active
created: 2026-05-20
updated: 2026-06-05
tags:
  - quant-trading
  - finance
  - automation
  - systematic-decision-making
related:
  - "[[Agentic Workflow]]"
  - "[[Orchestration]]"
  - "[[Naver Blog Quant Investment Process Article]]"
  - "[[SpaceX IPO 논쟁]]"
  - "[[Montana Skeptic SpaceX IPO Article]]"
sensitivity: private
evidence_level: source-backed
---

# Quant Trading

## 정의

Quant trading은 투자 아이디어를 명시적인 수치 규칙으로 바꾸고, 이를 데이터로 검증한 뒤 소프트웨어로 실행하는 거래 접근법이다.

## 중요한 이유

이 위키에서 quant trading은 LLM이 아닌 자동화된 의사결정의 사례로 유용하다. 사람이 규칙 체계를 설계하고, 과거 데이터로 평가한 뒤, 정해진 조건에서 코드가 workflow를 실행하게 한다는 점에서 agentic workflow와 비교할 수 있다.

## 핵심 아이디어

- 거래 판단은 직관으로 남는 대신 수치 조건으로 변환된다.
- 과거 시장 데이터는 전략이 이전 조건에서 어떻게 작동했을지 테스트하는 데 사용된다.
- Backtesting은 성과 평가에 도움이 되지만, 전략이 과거 데이터에 과도하게 맞춰지면 overfitting을 숨길 수 있다.
- 전략 유형에는 trend following, mean reversion, factor-based strategy, arbitrage 등이 있다.
- 자동화 시스템은 주문을 정확하고 때로는 빠르게 실행해야 하므로 실행 품질이 중요하다.
- [[Naver Blog Quant Investment Process Article]]은 퀀트 프로세스를 데이터베이스 구축, factor 개발, model 개발, scoring, portfolio optimization, backtesting, trading list 생성의 단계로 정리한다.
- 같은 글은 quant 접근의 한계로 soft information 반영 어려움, 과거 데이터 의존, data mining 위험, 새로운 이벤트 대응력 부족을 지적한다.
- [[Montana Skeptic SpaceX IPO Article]]은 quant trading 자료는 아니지만, 낮은 float, index inclusion, rebalance, passive fund flow 같은 market structure 변수가 가격 형성과 투자 리스크에 영향을 줄 수 있음을 보여주는 비판적 사례로 참고할 수 있다.

## 관련 자료

- [[SNU Newsroom Quant Trading Article]]
- [[Naver Blog Quant Investment Process Article]]
- [[Montana Skeptic SpaceX IPO Article]]

## 관련 개념

- [[Agentic Workflow]]
- [[Orchestration]]

## 예시

- mean reversion 전략은 가격이 최근 이동평균보다 크게 낮아졌을 때 매수하고, 평균 근처로 돌아오면 매도할 수 있다.
- trend following 전략은 이미 상승 중인 자산을 매수하고 추세가 약해질 때 빠져나올 수 있다.

## 열린 질문

- 과거 데이터가 미래 행동을 그대로 반영한다고 가정하지 않으면서, backtesting의 아이디어를 LLM agent 평가에 어떻게 옮길 수 있을까?
- 자동 실행은 언제 workflow를 개선하고, 언제 결함 있는 규칙을 증폭하는가?
- 이 위키는 rule-based automation과 adaptive agent behavior를 구분해야 하는가?
