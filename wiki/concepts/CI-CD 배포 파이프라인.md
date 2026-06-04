---
title: CI/CD 배포 파이프라인
type: concept
status: seed
created: 2026-06-02
updated: 2026-06-04
tags:
  - cicd
  - deployment
  - automation
  - devops
related:
  - "[[Velog Jenkins GitHub NCP Deployment Article]]"
  - "[[Jenkins]]"
  - "[[Naver Cloud Platform]]"
  - "[[Orchestration]]"
  - "[[ML Model Serving Pipeline]]"
  - "[[Agentic Workflow]]"
  - "[[Codex Sites]]"
  - "[[OpenAI Codex Sites Documentation]]"
sensitivity: private
evidence_level: source-backed
---

# CI/CD 배포 파이프라인

## 한 줄 정의

CI/CD 배포 파이프라인은 code change를 trigger로 받아 build, test, artifact 생성, 배포, 검증, rollback을 반복 가능한 workflow로 연결하는 운영 구조다.

## 핵심 문제

수동 배포는 누락, 환경 차이, 비일관성, 책임 추적 문제를 만든다. [[Velog Jenkins GitHub NCP Deployment Article]]은 GitHub push를 Jenkins webhook trigger로 연결하고, Jenkins가 jar를 빌드해 NCP app server로 전송하는 방식으로 작은 배포 자동화를 구성한다.

## 작동 방식

- trigger: GitHub push, pull request merge, scheduled job, manual approval 같은 이벤트를 받는다.
- build: source checkout 후 Gradle, Maven, npm, Docker build 같은 작업을 수행한다.
- artifact: jar, container image, static bundle 같은 배포 단위를 만든다.
- transfer/deploy: SSH, registry push, cloud deploy service, orchestration platform으로 artifact를 전달한다.
- verification: build log, deploy log, health check, smoke test, metrics를 확인한다.
- rollback: 실패 시 이전 artifact나 이전 server state로 돌아갈 수 있어야 한다.

## 좋은 사용 사례

- 작은 Spring Boot 서버를 jar로 빌드해 하나 이상의 VM에 배포한다.
- 개인 PoC를 GitHub push 기준으로 자동 빌드하고 서버에 반영한다.
- 수동 SSH 배포가 반복되고, 변경 이력과 log를 남기고 싶다.
- agent가 코드 변경 후 배포까지 수행하기 전에 human approval gate와 검증 artifact를 설계하고 싶다.
- agent가 hosted site를 만들 때 deployable saved version과 production deployment를 분리하고 싶다.

## 실패 패턴

- trigger와 credential은 자동화했지만 rollback, health check, log retention을 설계하지 않는다.
- Jenkins나 배포 서버를 public IP에 열어두고 접근 제어와 webhook secret을 약하게 둔다.
- build artifact와 runtime config, secret을 한 덩어리로 섞는다.
- SSH key와 Personal Access Token 권한을 과하게 부여한다.
- "배포 성공"을 파일 전송 성공으로만 보고 application health를 확인하지 않는다.
- saved version review 없이 agent에게 production URL 배포와 access 확대를 한 번에 맡긴다.

## 관련 자료

- [[Velog Jenkins GitHub NCP Deployment Article]]
- [[OpenAI Codex Sites Documentation]]

## 관련 개념과 차이

- [[Jenkins]]: CI/CD pipeline을 실행하는 automation server 중 하나다.
- [[Naver Cloud Platform]]: VM, network, cloud service를 제공하는 배포 환경 중 하나다.
- [[Orchestration]]: CI/CD는 source, trigger, credential, build tool, artifact, remote server, log를 조율하는 orchestration 사례다.
- [[ML Model Serving Pipeline]]: model serving도 CI/CD와 마찬가지로 artifact version, deployment, monitoring, rollback boundary가 필요하다.
- [[Agentic Workflow]]: agent가 build/deploy action을 수행할 때도 CI/CD처럼 trigger, approval, log, verification, rollback이 있어야 한다.
- [[Codex Sites]]: Codex app 안에서 save version과 deploy version을 나누고, access mode와 runtime secret을 관리하는 hosted deployment workflow다.

## 내 관점 / 임시 결론

개인 PoC에서는 CI/CD를 크게 시작할 필요가 없다. 하지만 최소한 trigger, build command, artifact path, deploy target, secret storage, verification command, rollback path는 문서화해야 한다. agent에게 배포를 맡길 경우 이 경계가 없으면 "작업 완료" 판단이 파일 수정이나 빌드 성공에 머물고 실제 운영 상태를 놓칠 수 있다.

## 열린 질문

- 개인 프로젝트에서 GitHub Actions와 Jenkins 중 어느 쪽이 운영 부담이 낮은가?
- 배포 pipeline에 agent approval gate를 둔다면 어떤 command와 artifact를 확인해야 하는가?
- NCP 기반 PoC에서 Docker image 배포와 jar SSH 배포 중 어느 쪽이 더 단순한가?
- Sites 같은 agent-hosted deployment에서 saved version을 artifact candidate로 볼 수 있는가?
