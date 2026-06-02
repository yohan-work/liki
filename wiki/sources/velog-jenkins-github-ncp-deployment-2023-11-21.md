---
title: Velog Jenkins GitHub NCP Deployment Article
source_id: velog-jenkins-github-ncp-deployment-2023-11-21
type: source
status: active
created: 2026-06-02
updated: 2026-06-02
tags:
  - cicd
  - jenkins
  - github
  - ncp
  - deployment
related:
  - "[[CI/CD 배포 파이프라인]]"
  - "[[Jenkins]]"
  - "[[Naver Cloud Platform]]"
  - "[[Orchestration]]"
  - "[[ML Model Serving Pipeline]]"
original_path: raw/external/velog-jenkins-github-ncp-deployment-2025-06-12.html
date_added: 2026-06-02
captured_at: 2026-06-02T00:00:00+09:00
accessed_at: 2026-06-02T00:00:00+09:00
canonical_url: https://velog.io/@no-int/CICDJenkins-Github-NCP-%EB%B0%B0%ED%8F%AC%EA%B8%B0
content_hash: a3f3310d15954b7ee5d5b6ceee69fba68f7554dd18a6316f81040ff5bcd726ed
source_version: "Velog article, released 2023-11-21T21:31:56.766Z, updated 2026-06-01T06:09:25.059Z"
domain:
  - software
content_type: article
knowledge_role:
  - source
  - concept
  - tool
  - reference
source_quality: practitioner
use_for:
  - concept
  - reference
  - decision
related_pages:
  - "[[CI/CD 배포 파이프라인]]"
  - "[[Jenkins]]"
  - "[[Naver Cloud Platform]]"
  - "[[Orchestration]]"
  - "[[ML Model Serving Pipeline]]"
sensitivity: private
evidence_level: source-backed
---

# Velog Jenkins GitHub NCP Deployment Article

## 출처

Velog 사용자 no-int의 글 "Jenkins + Webhook 을 이용한 자동 CI/CD환경 구축기(feat.NCP)".

## 자료 유형

GitHub webhook, Jenkins, Naver Cloud Platform 서버, SSH 기반 jar 전송을 조합해 Spring Boot 애플리케이션 배포 자동화를 구성한 practitioner article이다.

## Domain / 분류

- domain: software
- content_type: article
- knowledge_role: source, concept, tool, reference
- source_quality: practitioner
- use_for: concept, reference, decision

## 추가일

2026-06-02

## 원본 위치

- raw snapshot: `raw/external/velog-jenkins-github-ncp-deployment-2025-06-12.html`
- canonical URL: https://velog.io/@no-int/CICDJenkins-Github-NCP-%EB%B0%B0%ED%8F%AC%EA%B8%B0

## Provenance

- captured_at: 2026-06-02T00:00:00+09:00
- accessed_at: 2026-06-02T00:00:00+09:00
- canonical_url: https://velog.io/@no-int/CICDJenkins-Github-NCP-%EB%B0%B0%ED%8F%AC%EA%B8%B0
- content_hash: `a3f3310d15954b7ee5d5b6ceee69fba68f7554dd18a6316f81040ff5bcd726ed`
- source_version: Velog article, released 2023-11-21T21:31:56.766Z, updated 2026-06-01T06:09:25.059Z

## 원문 요약

이 글은 GitHub 특정 branch에 push가 발생하면 webhook이 Jenkins job을 트리거하고, Jenkins가 Gradle로 Spring Boot jar를 빌드한 뒤 NCP app server로 SSH 전송하는 CI/CD 구성을 설명한다. 작성자는 Docker image 배포 대신 jar 파일을 SSH로 넘기는 방식을 선택했다고 밝힌다.

구성은 NCP 위에 Jenkins server와 app server를 두고, Jenkins server에는 Java, Gradle, GitHub plugin, Publish Over SSH plugin을 설치하는 방식이다. GitHub 연동 단계에서는 GitHub Personal Access Token을 만들고 Jenkins credential에 secret text로 등록한 뒤 Jenkins System의 GitHub 설정에서 연결을 테스트한다. Webhook 단계에서는 GitHub repository settings에서 Jenkins 외부 IP와 `/github-webhook/` endpoint를 payload URL로 등록하고, Jenkins freestyle project에서 repository URL, credential, target branch, GitHub hook trigger를 설정한다.

배포 단계에서는 Jenkins server에서 SSH key pair를 만들고, app server의 `authorized_keys`에 public key를 등록한다. Jenkins job은 Gradle `clean`, `bootJar` task로 jar를 만들고, Publish Over SSH 설정을 통해 app server의 remote directory로 build artifact를 전송한다.

문제 해결 부분에서는 Jenkins Publish Over SSH의 Test Configuration이 실패하지만 직접 SSH/SCP는 되는 상황을 다룬다. 작성자는 app server의 SSH log를 확인했고, OpenSSH 6.x를 7.x로 업그레이드해 해결했다고 설명한다.

## 핵심 주장

- GitHub webhook과 Jenkins job을 연결하면 branch push를 배포 pipeline trigger로 사용할 수 있다.
- Jenkins freestyle project와 Publish Over SSH plugin만으로도 jar build와 remote server 전송을 자동화할 수 있다.
- Docker image 배포가 아니어도 jar 파일과 SSH 기반 전송으로 작은 Spring Boot 배포 자동화를 구성할 수 있다.
- CI/CD 문제 해결에서는 Jenkins UI의 에러만 보지 말고 app server의 SSH log, OpenSSH version, 인증 방식까지 확인해야 한다.

## 위키에 반영할 개념

- [[CI/CD 배포 파이프라인]]: trigger, build, artifact, transfer, remote server, rollback/security boundary를 나누어 보는 개념.
- [[Jenkins]]: webhook 기반 job trigger와 SSH artifact transfer를 제공하는 automation server 사례.
- [[Naver Cloud Platform]]: 개인/소규모 서버 기반 배포 실습 환경.
- [[Orchestration]]: CI/CD도 input, trigger, tool, credential, artifact, failure log를 조율하는 workflow다.
- [[ML Model Serving Pipeline]]: 모델 serving뿐 아니라 일반 애플리케이션 배포에서도 build/deploy/monitoring boundary가 필요하다는 인접 관점.

## 내 프로젝트에 주는 시사점

LLM Wiki 자동화나 개인 PoC를 서버에 올릴 때, 처음부터 Kubernetes나 Docker registry를 도입하지 않아도 GitHub push, Jenkins job, artifact transfer, server restart 같은 작은 pipeline으로 시작할 수 있다. 다만 secret, SSH key, exposed Jenkins endpoint, OS version, rollback plan을 함께 설계하지 않으면 "자동화"가 운영 위험을 키울 수 있다.

Agentic workflow 관점에서는 CI/CD pipeline이 좋은 비교 대상이다. 자동 실행은 편리하지만 trigger, credential, log, failure handling, human approval gate가 없으면 위험하다. agent가 deployment action을 수행하게 할 때도 같은 boundary가 필요하다.

## 후속 라우팅

- concept 추가: [[CI/CD 배포 파이프라인]]
- tool 추가: [[Jenkins]], [[Naver Cloud Platform]]
- concept 강화: [[Orchestration]], [[ML Model Serving Pipeline]]
- comparison 후보: Jenkins freestyle SSH 배포 vs GitHub Actions Docker 배포
- question 후보: 개인 PoC 배포 자동화에서 Jenkins가 필요한 최소 조건은 무엇인가?
- mvp 후보: 없음

## 검증 필요 주장

- GitHub Personal Access Token 권한, webhook 설정, credential 처리 방식은 현재 GitHub 공식 문서 기준으로 재확인해야 한다.
- Jenkins freestyle project와 Publish Over SSH plugin 방식은 현재 Jenkins 보안 권장사항, plugin 유지 상태, credential 관리 기준으로 검증해야 한다.
- CentOS 7.3은 2026-06-02 기준 오래된 OS이며, 운영 배포 기준으로는 지원 상태와 보안 업데이트 상태를 별도 확인해야 한다.
- OpenSSH 6.x에서 7.x 업그레이드로 해결된 문제는 해당 환경의 사례이므로 일반 해결책으로 저장하지 않는다.
- Jenkins 외부 IP를 public하게 열어두는 구성은 접근 제어, TLS, firewall, GitHub webhook secret, admin UI 보호를 함께 검토해야 한다.

## 관련 페이지

- [[CI/CD 배포 파이프라인]]
- [[Jenkins]]
- [[Naver Cloud Platform]]
- [[Orchestration]]
- [[ML Model Serving Pipeline]]

## 열린 질문

- 개인 PoC 배포에서는 Jenkins보다 GitHub Actions, NCP SourceBuild/SourceDeploy, Docker compose 중 무엇이 더 단순한가?
- 배포 자동화에 agent를 붙일 때 human approval gate는 build, transfer, restart, rollback 중 어디에 두어야 하는가?
- LLM Wiki나 개인 자동화 서비스를 배포한다면 artifact, secret, log, rollback을 어떤 최소 단위로 관리할 것인가?

## 메모

이 글은 실습형 개인 배포기라서 따라 하기 checklist로는 유용하지만, 최신 보안 기준과 운영 best practice는 공식 문서와 현재 plugin/OS 상태로 재검증해야 한다.
