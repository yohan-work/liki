---
title: Mailpit
type: tool
status: seed
created: 2026-06-22
updated: 2026-06-22
tags:
  - email-testing
  - smtp
  - integration-testing
  - developer-tool
related:
  - "[[GeekNews Mailpit Article]]"
  - "[[GitHub Mailpit Repository]]"
  - "[[CI/CD 배포 파이프라인]]"
sensitivity: private
evidence_level: source-backed
---

# Mailpit

## 한 줄 정의

Mailpit은 개발·테스트 환경에서 애플리케이션이 보낸 이메일을 SMTP로 캡처하고 web UI와 REST API로 검사하는 open-source 도구다.

## 중요한 이유

이메일 기능은 실제 수신자에게 잘못 발송할 위험 때문에 local·CI 환경에서 검증하기 번거롭다. Mailpit을 test SMTP endpoint로 두면 회원가입, 비밀번호 재설정, 알림 메일을 외부 발송과 분리하고 결과를 사람이 확인하거나 API assertion으로 자동화할 수 있다.

## 핵심 기능

- SMTP server로 이메일을 캡처한다.
- HTML, text, header, raw source, MIME attachment를 web UI에서 확인한다.
- REST API로 integration test를 자동화한다.
- 검색, 태깅, mobile/tablet preview, 실시간 UI 갱신을 제공한다.
- HTML compatibility, link, spam, screenshot 검사를 지원한다.
- 보관량·기간 기반 pruning과 임시·영구 저장을 설정할 수 있다.
- SMTP relay·forwarding과 configurable SMTP error를 제공한다.
- static binary, Docker image, Homebrew 등으로 설치할 수 있다.

## 좋은 사용 사례

- 회원가입과 비밀번호 재설정 메일의 recipient, subject, template, link를 검증한다.
- CI에서 애플리케이션과 Mailpit container를 함께 띄워 이메일 end-to-end test를 실행한다.
- SMTP 오류를 만들어 retry, idempotency, 사용자 오류 메시지를 확인한다.
- HTML email의 mobile preview, broken link, spam score를 개발 중 점검한다.

## 한계와 실패 패턴

- 기본 listen address를 공유 network에 열어 테스트 메일과 개인정보가 노출된다.
- test 환경에서 relay·forwarding을 켜 실제 사용자에게 발송한다.
- Mailpit에서 보인 HTML만 확인하고 Gmail, Outlook, Apple Mail 등 실제 client 차이를 검증하지 않는다.
- maintainer가 제시한 처리량을 production mail infrastructure의 capacity 근거로 사용한다.
- 이메일 도착만 확인하고 token expiry, one-time use, recipient binding, link host 같은 application assertion을 생략한다.

## 관련 워크플로

[[CI/CD 배포 파이프라인]]에서 Mailpit은 test dependency다. pipeline은 Mailpit 시작, application SMTP 설정, test mail 발송, REST API 조회와 assertion, test data 정리 순서로 구성할 수 있다. production deploy 단계에서는 Mailpit 주소가 runtime configuration에 남지 않았는지도 확인해야 한다.

## 관련 자료

- [[GeekNews Mailpit Article]]
- [[GitHub Mailpit Repository]]

## 열린 질문

- 현재 개인 PoC에서 이메일을 보내는 flow와 필요한 최소 assertion은 무엇인가?
- CI runner에서 Mailpit port와 captured message를 job 밖에 노출하지 않는 기본 구성을 어떻게 만들 것인가?
- Mailpit의 HTML·link·spam check와 실제 mail provider sandbox test의 경계를 어디에 둘 것인가?

